import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

/**
 * Modal context for the site. Components anywhere can call
 *   const { open } = useModals()
 *   open('service', serviceObj)
 * to pop a modal. The provider renders the actual antd Modal components.
 *
 * PERFORMANCE: only the ACTIVE modal is mounted. Previously all four mounted on
 * first paint, each injecting a large inline <style> block plus antd's Modal
 * machinery — that cost showed up as slow boot and a laggy first popup.
 *
 * Mounting is deferred but the exit animation is preserved: on close we flip
 * `openType` to null (triggering antd's leave transition) and only unmount after
 * EXIT_MS, so the modal animates out instead of vanishing.
 */
const ModalCtx = createContext(null)

/** Keep in sync with antd's modal leave transition (see motion tokens in theme.js). */
const EXIT_MS = 240

export function useModals() {
  const ctx = useContext(ModalCtx)
  if (!ctx) throw new Error('useModals must be used inside <ModalsProvider>')
  return ctx
}

export default function ModalsProvider({ children, modals }) {
  // openType  → which modal antd should render as `open`
  // mountType → which modal component is actually in the tree
  const [openType, setOpenType] = useState(null)
  const [mountType, setMountType] = useState(null)
  const [payload, setPayload] = useState(null)
  const timerRef = useRef(0)

  const open = useCallback((type, nextPayload = null) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = 0
    }
    setPayload(nextPayload)
    setMountType(type)
    // Mount at open=false first so antd plays the enter transition.
    requestAnimationFrame(() => setOpenType(type))
  }, [])

  const close = useCallback(() => {
    setOpenType(null)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setMountType(null)
      setPayload(null)
      timerRef.current = 0
    }, EXIT_MS)
  }, [])

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  // Stable context value — prevents every consumer re-rendering on state churn.
  const value = useMemo(
    () => ({ open, close, type: openType, payload }),
    [open, close, openType, payload]
  )

  const active = mountType ? modals.find((m) => m.type === mountType) : null

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {active && (
        <active.component
          key={active.type}
          type={active.type}
          open={openType === active.type}
          payload={payload}
          onClose={close}
        />
      )}
    </ModalCtx.Provider>
  )
}