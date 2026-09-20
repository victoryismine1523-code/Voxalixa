// Voxalixa Ant Design theme tokens
export const theme = {
  token: {
    colorPrimary: '#7B3DFF',
    colorInfo: '#A855F7',
    colorSuccess: '#A855F7',
    colorBgBase: '#0B0B0F',
    colorBgContainer: '#14141A',
    colorBgElevated: '#1A1A22',
    colorText: '#F8F8FF',
    colorTextSecondary: '#9CA3AF',
    colorBorder: 'rgba(123, 61, 255, 0.18)',
    fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif',
    fontWeightStrong: 700,
    borderRadius: 16,
    controlHeight: 44,

    // MOTION — tightened for responsiveness. antd's defaults (0.2s/0.3s/0.3s)
    // read as sluggish on a modal; these keep transitions perceptible but crisp.
    // Keep ModalsProvider's EXIT_MS >= motionDurationSlow * 1000 so the leave
    // animation completes before the component is unmounted.
    motionDurationFast: '0.12s',
    motionDurationMid: '0.16s',
    motionDurationSlow: '0.2s',
    motionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    motionEaseOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    motionEaseInBack: 'cubic-bezier(0.4, 0, 0.2, 1)',
    motionEaseOutBack: 'cubic-bezier(0.16, 1, 0.3, 1)',

    // Fewer, shorter shadows: heavy blur radius is a real paint cost on open.
    boxShadowSecondary: '0 8px 24px rgba(0, 0, 0, 0.45)',
    boxShadowTertiary: '0 4px 14px rgba(0, 0, 0, 0.4)'
  },
  components: {
    Button: {
      controlHeight: 46,
      borderRadius: 999,
      fontWeight: 600,
      primaryShadow: '0 8px 24px rgba(123, 61, 255, 0.35)'
    },
    Menu: {
      itemBg: 'transparent',
      itemColor: '#F8F8FF',
      itemHoverColor: '#A855F7',
      itemSelectedColor: '#A855F7',
      horizontalItemSelectedColor: '#A855F7'
    },
    Modal: {
      // Flat, opaque surface — a translucent backdrop forces the browser to
      // composite the whole page behind the modal on every animation frame,
      // which is what produced the "jerk" on open.
      contentBg: '#14141A',
      headerBg: 'transparent',
      titleColor: '#F8F8FF',
      titleFontSize: 20,
      borderRadiusLG: 22,
      boxShadowSecondary: '0 24px 60px -20px rgba(0, 0, 0, 0.7)',
      // Kill the mask blur: backdrop-filter is expensive and animates poorly.
      // (index.css also forces it off for the mask element.)
      zIndexPopupBase: 1000
    }
  }
}

// Brand palette (single source of truth)
export const brand = {
  primary: '#7B3DFF',
  secondary: '#A855F7',
  dark: '#0B0B0F',
  panel: '#14141A',
  panelLight: '#1A1A22',
  gray: '#9CA3AF',
  light: '#F8F8FF'
}

// Gradient string used across CTAs and logo lockups
export const brandGradient = 'linear-gradient(135deg, #A855F7 0%, #7B3DFF 100%)'