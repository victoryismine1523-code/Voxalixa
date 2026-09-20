var T=Object.defineProperty;var L=(o,a,t)=>a in o?T(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;var z=(o,a,t)=>L(o,typeof a!="symbol"?a+"":a,t);import{r as l,j as e,R as B,e as O}from"./vendor-react-Be4ACBV1.js";import{B as u,R as x,a as Y,b as V,c as W,d as G,e as H,f as U,g as X,h as K,i as Q,j as J,k as Z,l as A,I as j,A as S,F as v,S as N,m as ee,n as ae,o as re,p as te,q as ie,r as oe,s as se,t as ne,u as le,v as ce,M as F,w as de,C as xe}from"./vendor-antd-DwrxxePC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const pe={token:{colorPrimary:"#7B3DFF",colorInfo:"#A855F7",colorSuccess:"#A855F7",colorBgBase:"#0B0B0F",colorBgContainer:"#14141A",colorBgElevated:"#1A1A22",colorText:"#F8F8FF",colorTextSecondary:"#9CA3AF",colorBorder:"rgba(123, 61, 255, 0.18)",fontFamily:'"Montserrat", system-ui, -apple-system, sans-serif',fontWeightStrong:700,borderRadius:16,controlHeight:44,motionDurationFast:"0.12s",motionDurationMid:"0.16s",motionDurationSlow:"0.2s",motionEaseInOut:"cubic-bezier(0.4, 0, 0.2, 1)",motionEaseOut:"cubic-bezier(0.16, 1, 0.3, 1)",motionEaseInBack:"cubic-bezier(0.4, 0, 0.2, 1)",motionEaseOutBack:"cubic-bezier(0.16, 1, 0.3, 1)",boxShadowSecondary:"0 8px 24px rgba(0, 0, 0, 0.45)",boxShadowTertiary:"0 4px 14px rgba(0, 0, 0, 0.4)"},components:{Button:{controlHeight:46,borderRadius:999,fontWeight:600,primaryShadow:"0 8px 24px rgba(123, 61, 255, 0.35)"},Menu:{itemBg:"transparent",itemColor:"#F8F8FF",itemHoverColor:"#A855F7",itemSelectedColor:"#A855F7",horizontalItemSelectedColor:"#A855F7"},Modal:{contentBg:"#14141A",headerBg:"transparent",titleColor:"#F8F8FF",titleFontSize:20,borderRadiusLG:22,boxShadowSecondary:"0 24px 60px -20px rgba(0, 0, 0, 0.7)",zIndexPopupBase:1e3}}},k="linear-gradient(135deg, #A855F7 0%, #7B3DFF 100%)",q=l.createContext(null),me=240;function _(){const o=l.useContext(q);if(!o)throw new Error("useModals must be used inside <ModalsProvider>");return o}function ve({children:o,modals:a}){const[t,r]=l.useState(null),[i,n]=l.useState(null),[c,d]=l.useState(null),s=l.useRef(0),p=l.useCallback((w,y=null)=>{s.current&&(clearTimeout(s.current),s.current=0),d(y),n(w),requestAnimationFrame(()=>r(w))},[]),m=l.useCallback(()=>{r(null),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{n(null),d(null),s.current=0},me)},[]);l.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]);const h=l.useMemo(()=>({open:p,close:m,type:t,payload:c}),[p,m,t,c]),g=i?a.find(w=>w.type===i):null;return e.jsxs(q.Provider,{value:h,children:[o,g&&e.jsx(g.component,{type:g.type,open:t===g.type,payload:c,onClose:m},g.type)]})}const C=[{key:"home",label:"Home"},{key:"services",label:"Services"},{key:"portfolio",label:"Portfolio"},{key:"about",label:"About"},{key:"pricing",label:"Pricing"},{key:"faq",label:"FAQ"},{key:"contact",label:"Contact"}];function ge(){const[o,a]=l.useState(!1),[t,r]=l.useState("home"),[i,n]=l.useState(!1),{open:c}=_();l.useEffect(()=>{const s=()=>a(window.scrollY>24);return s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const d=s=>{r(s),n(!1);const p=s==="home"?"top":s,m=p==="top"?document.body:document.getElementById(p);if(m){const h=p==="top"?0:m.getBoundingClientRect().top+window.scrollY-80,g=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;window.scrollTo({top:h,behavior:g?"auto":"smooth"})}};return e.jsxs("header",{className:`vx-header ${o?"vx-header--scrolled":""}`,children:[e.jsxs("div",{className:"vx-header__inner",children:[e.jsxs("a",{className:"vx-logo",onClick:()=>d("home"),children:[e.jsx("span",{className:"vx-logo__mark",style:{background:k},children:"V"}),e.jsx("span",{className:"vx-logo__word",children:"Voxalixa"})]}),e.jsx("nav",{className:"vx-nav",children:C.map(s=>e.jsx("a",{className:`vx-nav__item ${t===s.key?"vx-nav__item--active":""}`,onClick:()=>d(s.key),children:s.label},s.key))}),e.jsx("div",{className:"vx-header__cta",children:e.jsx(u,{type:"primary",size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-cta-pill",onClick:()=>c("getStarted"),children:"Get Started"})}),e.jsx("button",{className:"vx-burger","aria-label":"Menu",onClick:()=>n(s=>!s),children:e.jsx(Y,{})})]}),i&&e.jsxs("div",{className:"vx-mobile-menu",children:[C.map(s=>e.jsx("a",{className:"vx-mobile-menu__item",onClick:()=>d(s.key),children:s.label},s.key)),e.jsx(u,{type:"primary",block:!0,size:"large",icon:e.jsx(x,{}),iconPosition:"end",children:"Get Started"})]}),e.jsx("style",{children:`
        .vx-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 20px 64px;
          transition: all 0.3s ease;
          background: transparent;
        }
        .vx-header--scrolled {
          background: rgba(11, 11, 15, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(123, 61, 255, 0.12);
          padding: 14px 64px;
        }
        .vx-header__inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .vx-logo {
          display: flex; align-items: center; gap: 10px;
          cursor: pointer;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.02em;
        }
        .vx-logo__mark {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: grid; place-items: center;
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          box-shadow: 0 6px 20px rgba(123, 61, 255, 0.45);
        }
        .vx-logo__word {
          color: #F8F8FF;
        }
        .vx-nav {
          margin-left: 32px;
          display: flex;
          gap: 32px;
        }
        .vx-nav__item {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #F8F8FF;
          opacity: 0.75;
          cursor: pointer;
          transition: opacity 0.2s, color 0.2s;
          position: relative;
          padding: 4px 0;
        }
        .vx-nav__item:hover { opacity: 1; color: #A855F7; }
        .vx-nav__item--active {
          opacity: 1;
          color: #A855F7;
        }
        .vx-nav__item--active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 2px;
          background: #A855F7;
          border-radius: 2px;
        }
        .vx-header__cta {
          margin-left: auto;
        }
        .vx-cta-pill {
          padding: 0 26px !important;
          height: 44px !important;
          font-weight: 600 !important;
        }
        .vx-burger {
          display: none;
          margin-left: auto;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.18);
          color: #F8F8FF;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
        }
        .vx-mobile-menu {
          display: none;
          padding: 18px 64px 24px;
          background: rgba(11,11,15,0.95);
          backdrop-filter: blur(14px);
          border-top: 1px solid rgba(123,61,255,0.12);
        }
        .vx-mobile-menu__item {
          display: block;
          padding: 14px 0;
          color: #F8F8FF;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
        }

        @media (max-width: 1100px) {
          .vx-header, .vx-header--scrolled { padding: 16px 24px; }
          .vx-nav, .vx-header__cta { display: none; }
          .vx-burger { display: inline-flex; }
          .vx-mobile-menu { display: block; padding: 16px 24px 24px; }
        }
      `})]})}function he(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ue(o,{duration:a=1400,suffix:t="",prefix:r=""}={}){const i=l.useRef(null),[n,c]=l.useState("0"+t);return l.useEffect(()=>{const d=i.current;if(!d||typeof IntersectionObserver>"u"){c(r+o+t);return}if(he()){c(r+o+t);return}let s;const p=new IntersectionObserver(([m])=>{if(m.isIntersecting){const h=performance.now(),g=w=>{const y=Math.min(1,(w-h)/a),M=1-Math.pow(1-y,3),$=Math.round(o*M);c(r+$+t),y<1&&(s=requestAnimationFrame(g))};s=requestAnimationFrame(g),p.unobserve(d)}},{threshold:.4});return p.observe(d),()=>{p.disconnect(),s&&cancelAnimationFrame(s)}},[o,a,r,t]),[i,n]}const _e=[{target:100,suffix:"+",label:"Happy Clients"},{target:150,suffix:"+",label:"Projects Completed"},{target:5,suffix:"★",label:"Client Satisfaction"}];function be({target:o,suffix:a,label:t,delay:r}){const[i,n]=ue(o,{duration:1500,suffix:a});return e.jsxs("div",{className:"vx-hero__stat",ref:i,style:{transitionDelay:`${r}ms`},children:[e.jsx("div",{className:"vx-hero__stat-value",children:n}),e.jsx("div",{className:"vx-hero__stat-label",children:t})]})}function fe(){const o=l.useRef(null),{open:a}=_(),t=()=>{const r=document.getElementById("services");if(r){const i=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;window.scrollTo({top:r.getBoundingClientRect().top+window.scrollY-80,behavior:i?"auto":"smooth"})}};return l.useEffect(()=>{const r=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null;if(r&&r.matches)return;const i=o.current;if(!i)return;let n=0;const c=()=>{n=0;const s=Math.min(window.scrollY*.35,320);i.style.transform=`translate3d(0, ${s}px, 0) scale(${1+Math.min(window.scrollY,600)*18e-5})`},d=()=>{n||(n=requestAnimationFrame(c))};return c(),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d),n&&cancelAnimationFrame(n)}},[]),e.jsxs("section",{className:"vx-hero",id:"top",children:[e.jsxs("div",{className:"vx-hero__bg",ref:o,children:[e.jsx("div",{className:"vx-hero__bg-grad"}),e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 720px)",srcSet:"/hero-bg-mobile.webp",type:"image/webp"}),e.jsx("source",{srcSet:"/hero-bg.webp",type:"image/webp"}),e.jsx("img",{src:"/hero-bg.jpeg",alt:"",className:"vx-hero__bg-img",width:"1536",height:"768",fetchpriority:"high",decoding:"async"})]})]}),e.jsxs("div",{className:"vx-hero__container",children:[e.jsxs("div",{className:"vx-hero__left",children:[e.jsx("span",{className:"eyebrow reveal is-visible","data-delay":"0",children:"Creative Digital Agency"}),e.jsx("h1",{className:"vx-hero__title gradient-text vx-shimmer reveal is-visible","data-delay":"1",children:"Voxalixa"}),e.jsxs("div",{className:"vx-hero__flow reveal is-visible","data-delay":"2",children:[e.jsx("span",{children:"IDEAS"}),e.jsx(x,{className:"vx-hero__arrow"}),e.jsx("span",{children:"DESIGN"}),e.jsx(x,{className:"vx-hero__arrow"}),e.jsx("span",{children:"DEVELOP"}),e.jsx(x,{className:"vx-hero__arrow"}),e.jsx("span",{children:"GROW"})]}),e.jsxs("p",{className:"vx-hero__desc reveal is-visible","data-delay":"3",children:["We build stunning visuals, powerful websites, immersive games",e.jsx("br",{}),"and animated wallpapers — turning your ideas into digital reality."]}),e.jsxs("div",{className:"vx-hero__cta reveal is-visible","data-delay":"4",children:[e.jsx(u,{type:"primary",size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-cta-pill",onClick:t,children:"Explore Our Services"}),e.jsx(u,{size:"large",icon:e.jsx(V,{}),className:"vx-cta-ghost",onClick:()=>a("video"),children:"Watch Intro"})]})]}),e.jsxs("div",{className:"vx-hero__right",children:[e.jsxs("div",{className:"vx-hero__vertical vx-float-slow",children:[e.jsx("span",{children:"MORE"}),e.jsx("span",{children:"THAN"}),e.jsx("span",{children:"DESIGN"})]}),e.jsx("div",{className:"vx-hero__stats",children:_e.map((r,i)=>e.jsx(be,{...r,delay:i*120},r.label))})]})]}),e.jsx("style",{children:`
        .vx-hero {
          position: relative;
          min-height: 100vh;
          padding: 140px 64px 64px;
          overflow: hidden;
          isolation: isolate;
        }
        .vx-hero__bg {
          position: absolute;
          inset: -10%;
          z-index: -1;
          overflow: hidden;
          will-change: transform;
        }
        .vx-hero__bg-img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center right;
          opacity: 0.95;
          will-change: transform;
        }
        .vx-hero__bg-grad {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(11,11,15,0.95) 0%, rgba(11,11,15,0.65) 45%, rgba(11,11,15,0.35) 75%, rgba(11,11,15,0.55) 100%),
            linear-gradient(180deg, rgba(11,11,15,0.4) 0%, rgba(11,11,15,0.85) 100%);
        }

        .vx-hero__container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
          min-height: calc(100vh - 200px);
        }

        .vx-hero__title {
          font-size: 156px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          margin: 12px 0 28px;
          text-shadow: 0 8px 60px rgba(123, 61, 255, 0.35);
        }
        /* Animated gradient shimmer sweeping the hero title */
        .vx-shimmer {
          background: linear-gradient(110deg,
            #C9B8FF 0%, #F8F8FF 25%, #A855F7 50%, #F8F8FF 75%, #7B3DFF 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: vx-shimmer 7s linear infinite;
        }

        .vx-hero__flow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          font-weight: 700;
          letter-spacing: 0.18em;
          font-size: 15px;
          color: #F8F8FF;
        }
        .vx-hero__arrow {
          color: #A855F7;
          font-size: 13px;
        }

        .vx-hero__desc {
          font-size: 16px;
          line-height: 1.7;
          color: #C8C8D6;
          max-width: 520px;
          margin: 0 0 36px;
        }

        .vx-hero__cta {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .vx-cta-pill {
          padding: 0 28px !important;
          height: 52px !important;
          font-weight: 600 !important;
          animation: vx-glow 3.4s ease-in-out infinite;
        }
        .vx-cta-ghost {
          height: 52px !important;
          padding: 0 22px !important;
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.18) !important;
          color: #F8F8FF !important;
          backdrop-filter: blur(8px);
          font-weight: 600 !important;
        }
        .vx-cta-ghost:hover {
          border-color: #A855F7 !important;
          color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
        }

        .vx-hero__right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          min-height: 100%;
        }
        .vx-hero__vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6em;
          color: rgba(255,255,255,0.85);
          text-align: right;
          display: flex;
          gap: 18px;
          margin-top: 6px;
        }
        .vx-float-slow {
          animation: vx-float-slow 6s ease-in-out infinite;
        }
        .vx-hero__stats {
          display: flex;
          gap: 28px;
          padding: 20px 24px;
          background: rgba(11, 11, 15, 0.55);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(123, 61, 255, 0.18);
          border-radius: 18px;
        }
        .vx-hero__stat {
          min-width: 110px;
          padding: 4px 8px;
          position: relative;
          transition: transform 0.3s ease;
        }
        .vx-hero__stat:hover {
          transform: translateY(-2px);
        }
        .vx-hero__stat + .vx-hero__stat {
          border-left: 1px solid rgba(123, 61, 255, 0.2);
          padding-left: 24px;
        }
        .vx-hero__stat-value {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: ${k};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-variant-numeric: tabular-nums;
        }
        .vx-hero__stat-label {
          font-size: 12px;
          color: #9CA3AF;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        @media (max-width: 1100px) {
          .vx-hero { padding: 120px 32px 48px; }
          .vx-hero__container { grid-template-columns: 1fr; }
          .vx-hero__title { font-size: 96px; }
          .vx-hero__right { align-items: flex-start; }
          .vx-hero__vertical { writing-mode: horizontal-tb; transform: none; flex-direction: row; }
        }
        @media (max-width: 640px) {
          .vx-hero { padding: 110px 20px 40px; }
          .vx-hero__title { font-size: 64px; }
          .vx-hero__flow { font-size: 13px; gap: 10px; flex-wrap: wrap; }
          .vx-hero__cta { flex-direction: column; align-items: stretch; }
          .vx-hero__stats { flex-wrap: wrap; gap: 16px; padding: 16px; }
          .vx-hero__stat + .vx-hero__stat { border-left: 0; padding-left: 8px; }
        }
      `})]})}function f({threshold:o=.15,rootMargin:a="0px 0px -80px 0px"}={}){const t=l.useRef(null);return l.useEffect(()=>{const r=t.current;if(!r||typeof IntersectionObserver>"u"){r&&r.classList.add("is-visible");return}const i=new IntersectionObserver(([n])=>{n.isIntersecting&&(r.classList.add("is-visible"),i.unobserve(r))},{threshold:o,rootMargin:a});return i.observe(r),()=>i.disconnect()},[o,a]),t}const we=[{icon:e.jsx(W,{}),title:"Graphic Design",desc:"Logos, posters, social media posts, branding & more.",deliverables:["Logo design & brand marks","Complete brand / visual identity kit","Social media post templates & banners","Posters, flyers & print-ready artwork","Editable source files (AI, PSD, Figma)"],timeline:"3 — 7 days",starting:"$499"},{icon:e.jsx(G,{}),title:"Game Development",desc:"2D/3D games, mobile & PC, custom game solutions.",deliverables:["2D & 3D gameplay prototypes","Full game builds for PC, mobile or web","Custom characters, levels & environments","Gameplay programming & physics","Publishing-ready builds & store assets"],timeline:"4 — 12 weeks",starting:"$2,500"},{icon:e.jsx(H,{}),title:"Website Development",desc:"Modern, responsive & SEO friendly websites.",deliverables:["Responsive marketing & landing pages","Modern React / Next.js front-end builds","CMS integration & content setup","SEO, analytics & performance tuning","Hosting, deployment & handover docs"],timeline:"2 — 5 weeks",starting:"$1,299"},{icon:e.jsx(U,{}),title:"Animated Wallpapers",desc:"Stunning animated wallpapers for your screen.",deliverables:["Live animated desktop wallpapers","4K & HD resolutions for any screen","Loop-ready seamless animations","Mobile & tablet variants","Wallpaper Engine & video exports"],timeline:"2 — 6 days",starting:"$299"}];function je(){const o=f(),{open:a}=_();return e.jsxs("section",{className:"section section--dark vx-services",id:"services",children:[e.jsxs("div",{className:"split vx-reveal-parent",ref:o,children:[e.jsxs("div",{className:"vx-services__intro",children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"Our Services"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"What We Do"}),e.jsx("p",{className:"section-sub reveal","data-delay":"2",children:"End-to-end digital solutions for your brand, business or personal projects. From concept to launch — we handle the entire creative pipeline."}),e.jsx(u,{size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-view-all reveal","data-delay":"3",onClick:()=>a("getStarted",{interest:"Graphic Design"}),children:"View All Services"})]}),e.jsx("div",{className:"vx-services__grid",children:we.map((t,r)=>e.jsxs("div",{className:"vx-service-card reveal","data-delay":r+1,onClick:()=>a("service",t),role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),a("service",t))},children:[e.jsx("div",{className:"vx-service-card__icon",children:t.icon}),e.jsx("h3",{className:"vx-service-card__title",children:t.title}),e.jsx("p",{className:"vx-service-card__desc",children:t.desc}),e.jsx("a",{className:"vx-service-card__more",children:e.jsx(x,{})})]},t.title))})]}),e.jsx("style",{children:`
        .vx-services__intro { padding-top: 8px; }

        .vx-view-all {
          height: 50px !important;
          padding: 0 26px !important;
          background: transparent !important;
          border: 1px solid rgba(123, 61, 255, 0.5) !important;
          color: #F8F8FF !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
        }
        .vx-view-all:hover {
          border-color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
          color: #A855F7 !important;
        }

        .vx-services__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .vx-service-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          padding: 28px 26px;
          position: relative;
          transition: all 0.3s ease;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          outline: none;
        }
        .vx-service-card:focus-visible {
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
        }
        .vx-service-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-service-card__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 22px;
          margin-bottom: 22px;
        }
        .vx-service-card__title {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
          color: #F8F8FF;
        }
        .vx-service-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
          flex: 1;
        }
        .vx-service-card__more {
          margin-top: 18px;
          align-self: flex-start;
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(168, 85, 247, 0.1);
          color: #A855F7;
          display: grid; place-items: center;
          transition: all 0.2s;
          font-size: 13px;
        }
        .vx-service-card:hover .vx-service-card__more {
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          transform: translateX(2px);
        }

        @media (max-width: 720px) {
          .vx-services__grid { grid-template-columns: 1fr; }
        }
      `})]})}const D=[{title:"Branding & Logo Design",tag:"Visual identity for modern brands",copy:"We built a complete brand system from the ground up — logo, color palette, typography and a full social kit that stays consistent across every touchpoint.",stats:[{value:"3 wks",label:"Timeline"},{value:"40+",label:"Assets"},{value:"100%",label:"Source files"}],hue:"linear-gradient(135deg, #2A1B4D 0%, #4C2A8C 60%, #7B3DFF 100%)",accent:"logo"},{title:"Website Development",tag:"Fast • Modern • Responsive",copy:"A marketing site rebuilt for speed and conversion. React front-end, CMS-driven content, and a Lighthouse performance score we are happy to put our name on.",stats:[{value:"98",label:"Lighthouse"},{value:"0.9s",label:"Load time"},{value:"5",label:"Pages"}],hue:"linear-gradient(135deg, #1B1F3D 0%, #2D3470 60%, #5B5EE0 100%)",accent:"browser"},{title:"Game Development",tag:"2D • 3D • PC & Mobile",copy:"A 2D platformer with hand-painted environments, custom physics and controller support — shipped to desktop and mobile from a single codebase.",stats:[{value:"3",label:"Platforms"},{value:"24",label:"Levels"},{value:"60fps",label:"Target"}],hue:"linear-gradient(135deg, #2D0B3D 0%, #5A1E7A 60%, #A855F7 100%)",accent:"game"},{title:"Animated Wallpapers",tag:"Live • 4K • HD",copy:"A pack of seamless looping wallpapers — cosmic scenes, particle fields and ambient gradients — exported in 4K for desktop, tablet and mobile.",stats:[{value:"4K",label:"Resolution"},{value:"12",label:"Scenes"},{value:"Loop",label:"Seamless"}],hue:"linear-gradient(135deg, #0B0B3D 0%, #2A1E6E 60%, #6E3DD8 100%)",accent:"wall"}];function ye(){const o=f(),{open:a}=_();return e.jsxs("section",{className:"section section--panel vx-portfolio",id:"portfolio",children:[e.jsxs("div",{className:"split vx-reveal-parent",ref:o,children:[e.jsxs("div",{className:"vx-portfolio__intro",children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"Portfolio"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"Our Latest Work"}),e.jsx("p",{className:"section-sub reveal","data-delay":"2",children:"Creative designs, powerful websites, immersive games and dynamic wallpapers — crafted for brands that want to stand out."}),e.jsx(u,{size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-view-all reveal","data-delay":"3",onClick:()=>a("project",D[0]),children:"View Portfolio"})]}),e.jsx("div",{className:"vx-portfolio__grid",children:D.map((t,r)=>e.jsxs("article",{className:"vx-portfolio-card reveal","data-delay":r+1,onClick:()=>a("project",t),role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),a("project",t))},children:[e.jsxs("div",{className:"vx-portfolio-card__media",style:{background:t.hue},children:[e.jsx(Fe,{variant:t.accent}),e.jsxs("div",{className:"vx-portfolio-card__overlay",children:[e.jsx("span",{children:"View Project"}),e.jsx(x,{})]})]}),e.jsxs("div",{className:"vx-portfolio-card__body",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.tag}),e.jsx(x,{className:"vx-portfolio-card__arrow"})]})]},t.title))})]}),e.jsx("style",{children:`
        .vx-portfolio__intro { padding-top: 8px; }

        .vx-portfolio__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .vx-portfolio-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          outline: none;
        }
        .vx-portfolio-card:focus-visible {
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
        }
        .vx-portfolio-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-portfolio-card__media {
          aspect-ratio: 16 / 11;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .vx-portfolio-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,11,15,0) 0%, rgba(11,11,15,0.85) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 16px;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #F8F8FF;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .vx-portfolio-card:hover .vx-portfolio-card__overlay { opacity: 1; }

        .vx-portfolio-card__body {
          padding: 18px 20px;
        }
        .vx-portfolio-card__body h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 4px;
          padding-right: 32px;
          color: #F8F8FF;
          letter-spacing: -0.01em;
        }
        .vx-portfolio-card__body p {
          font-size: 13px;
          color: #9CA3AF;
          margin: 0;
          padding-right: 32px;
        }
        .vx-portfolio-card__arrow {
          position: absolute;
          right: 20px;
          bottom: 18px;
          color: #9CA3AF;
          font-size: 14px;
          transition: all 0.2s;
        }
        .vx-portfolio-card:hover .vx-portfolio-card__arrow {
          color: #A855F7;
          transform: translateX(3px);
        }

        @media (max-width: 720px) {
          .vx-portfolio__grid { grid-template-columns: 1fr; }
        }

        /* ---- In-card visuals ---- */
        .vx-vis {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow: hidden;
        }

        /* Logo card */
        .vx-vis--logo {
          color: #fff;
        }
        .vx-vis__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 28px;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 30px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__logo-mark {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          font-weight: 800;
          font-size: 22px;
          box-shadow: 0 6px 24px rgba(123, 61, 255, 0.6);
        }
        .vx-vis__logo-word {
          background: linear-gradient(180deg, #FFFFFF 0%, #C9B8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-vis__sub {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }
        .vx-vis__sparkle {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 12px rgba(255,255,255,0.9);
          animation: vx-pulse 2.4s ease-in-out infinite;
        }

        /* Browser card */
        .vx-vis--browser {
          background: rgba(0,0,0,0.35);
          padding: 14px;
          justify-content: stretch;
        }
        .vx-vis__chrome {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px 8px 0 0;
        }
        .vx-vis__chrome > span:not(.vx-vis__url) {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }
        .vx-vis__chrome > span:nth-child(1) { background: #FF5F57; }
        .vx-vis__chrome > span:nth-child(2) { background: #FFBD2E; }
        .vx-vis__chrome > span:nth-child(3) { background: #28C840; }
        .vx-vis__url {
          margin-left: 12px;
          flex: 1;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
          padding: 4px 12px;
          background: rgba(255,255,255,0.06);
          border-radius: 6px;
          text-align: center;
        }
        .vx-vis__chrome-body {
          flex: 1;
          padding: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 0 0 8px 8px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .vx-vis__chrome-nav {
          display: flex; gap: 6px;
        }
        .vx-vis__pill {
          width: 60px; height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.18);
        }
        .vx-vis__chrome-hero {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vx-vis__chrome-bar {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
        }
        .vx-vis__chrome-cta {
          height: 16px;
          width: 90px;
          border-radius: 8px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          margin-top: 4px;
          box-shadow: 0 4px 16px rgba(123, 61, 255, 0.45);
        }
        .vx-vis__chrome-grid {
          display: flex; gap: 8px;
        }
        .vx-vis__chrome-grid > span {
          flex: 1;
          height: 36px;
          border-radius: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* Game card */
        .vx-vis--game {
          flex-direction: row;
          gap: 16px;
          padding: 0;
        }
        .vx-vis__pad {
          width: 86px; height: 86px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: 18px;
          position: relative;
        }
        .vx-vis__pad--r { transform: rotate(180deg); }
        .vx-vis__btn {
          position: absolute;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          box-shadow: 0 2px 8px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__pad .vx-vis__btn:nth-of-type(1) { top: 14px; left: 14px; }
        .vx-vis__pad .vx-vis__btn:nth-of-type(2) { top: 14px; right: 14px; }
        .vx-vis__stick {
          position: absolute;
          bottom: 14px; left: 50%;
          transform: translateX(-50%);
          width: 26px; height: 26px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #C9B8FF, #7B3DFF);
          box-shadow: 0 4px 14px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__game-tag {
          position: absolute;
          bottom: 18px;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.85);
          font-weight: 700;
        }

        /* Wallpaper card */
        .vx-vis--wall {
          background: radial-gradient(circle at 50% 35%, rgba(123,61,255,0.55) 0%, rgba(11,11,15,0.95) 65%);
        }
        .vx-vis__orb {
          position: absolute;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #C9B8FF 0%, #7B3DFF 50%, #2A1B4D 100%);
          box-shadow: 0 0 60px rgba(168, 85, 247, 0.5);
          top: 20%; left: 50%;
          transform: translateX(-50%);
          animation: vx-float 6s ease-in-out infinite;
        }
        .vx-vis__orb--2 {
          width: 80px; height: 80px;
          background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A855F7 60%, #2A1B4D 100%);
          top: auto;
          bottom: 18%;
          left: 28%;
          animation-delay: -3s;
          opacity: 0.85;
        }
        .vx-vis__star {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 6px #fff;
          animation: vx-twinkle 2s ease-in-out infinite;
        }
        .vx-vis__star--s { top: 25%; right: 22%; width: 2px; height: 2px; animation-delay: -0.6s; }
        .vx-vis__star--t { top: 60%; right: 14%; animation-delay: -1.2s; }
        .vx-vis__star--f { top: 18%; left: 24%; animation-delay: -1.8s; }

        @keyframes vx-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes vx-float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes vx-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `})]})}function Fe({variant:o}){return o==="logo"?e.jsxs("div",{className:"vx-vis vx-vis--logo",children:[e.jsx("span",{className:"vx-vis__sparkle",style:{top:"20%",left:"18%"}}),e.jsx("span",{className:"vx-vis__sparkle",style:{top:"70%",right:"22%"}}),e.jsxs("div",{className:"vx-vis__logo",children:[e.jsx("span",{className:"vx-vis__logo-mark",children:"V"}),e.jsx("span",{className:"vx-vis__logo-word",children:"Voxalixa"})]}),e.jsx("div",{className:"vx-vis__sub",children:"IDEAS · DESIGN · DIGITAL"})]}):o==="browser"?e.jsxs("div",{className:"vx-vis vx-vis--browser",children:[e.jsxs("div",{className:"vx-vis__chrome",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("div",{className:"vx-vis__url",children:"voxalixa.io"})]}),e.jsxs("div",{className:"vx-vis__chrome-body",children:[e.jsxs("div",{className:"vx-vis__chrome-nav",children:[e.jsx("span",{className:"vx-vis__pill"}),e.jsx("span",{className:"vx-vis__pill"})]}),e.jsxs("div",{className:"vx-vis__chrome-hero",children:[e.jsx("span",{className:"vx-vis__chrome-bar",style:{width:"70%"}}),e.jsx("span",{className:"vx-vis__chrome-bar",style:{width:"50%"}}),e.jsx("span",{className:"vx-vis__chrome-cta"})]}),e.jsxs("div",{className:"vx-vis__chrome-grid",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]}):o==="game"?e.jsxs("div",{className:"vx-vis vx-vis--game",children:[e.jsxs("div",{className:"vx-vis__pad",children:[e.jsx("span",{className:"vx-vis__btn"}),e.jsx("span",{className:"vx-vis__btn"}),e.jsx("div",{className:"vx-vis__stick"})]}),e.jsxs("div",{className:"vx-vis__pad vx-vis__pad--r",children:[e.jsx("span",{className:"vx-vis__btn"}),e.jsx("span",{className:"vx-vis__btn"}),e.jsx("div",{className:"vx-vis__stick"})]}),e.jsx("div",{className:"vx-vis__game-tag",children:"2D · 3D"})]}):e.jsxs("div",{className:"vx-vis vx-vis--wall",children:[e.jsx("div",{className:"vx-vis__orb"}),e.jsx("div",{className:"vx-vis__orb vx-vis__orb--2"}),e.jsx("div",{className:"vx-vis__star"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--s"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--t"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--f"})]})}const ke=[{icon:e.jsx(X,{}),title:"Creative Excellence",desc:"Award-worthy work that turns heads and tells stories."},{icon:e.jsx(K,{}),title:"Fast Delivery",desc:"Tight timelines without cutting corners. Ship in days, not months."},{icon:e.jsx(Q,{}),title:"Client-Focused",desc:"You’re a partner, not a ticket. We obsess over your goals."},{icon:e.jsx(J,{}),title:"Quality First",desc:"Pixel-perfect. Type-tested. Performance-checked. Always."}];function Ne(){const o=f(),{open:a}=_();return e.jsxs("section",{className:"section section--dark vx-about",id:"about",children:[e.jsxs("div",{className:"split vx-reveal-parent",ref:o,children:[e.jsxs("div",{className:"vx-about__intro",children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"About Us"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"Who We Are"}),e.jsx("p",{className:"section-sub reveal","data-delay":"2",children:"Voxalixa is a collective of designers, developers and dreamers crafting digital experiences that move people. From brand systems to immersive games, we turn ambitious ideas into reality."}),e.jsx(u,{size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-view-all reveal","data-delay":"3",onClick:()=>a("getStarted"),children:"Our Story"})]}),e.jsx("div",{className:"vx-about__grid",children:ke.map((t,r)=>e.jsxs("div",{className:"vx-about-card reveal","data-delay":r+1,children:[e.jsx("div",{className:"vx-about-card__icon",children:t.icon}),e.jsx("h3",{className:"vx-about-card__title",children:t.title}),e.jsx("p",{className:"vx-about-card__desc",children:t.desc})]},t.title))})]}),e.jsx("style",{children:`
        .vx-about__intro { padding-top: 8px; }
        .vx-about__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .vx-about-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          padding: 26px 24px;
          transition: all 0.3s ease;
          min-height: 200px;
          display: flex;
          flex-direction: column;
        }
        .vx-about-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-about-card__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 22px;
          margin-bottom: 20px;
        }
        .vx-about-card__title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          color: #F8F8FF;
        }
        .vx-about-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }
        @media (max-width: 720px) {
          .vx-about__grid { grid-template-columns: 1fr; }
        }
      `})]})}const Ae=[{name:"Starter",price:"$499",cadence:"one-time",blurb:"For individuals & small projects.",features:["1 design concept","2 revision rounds","Basic support","5-7 day delivery","Source files included"],featured:!1,cta:"Get Started"},{name:"Professional",price:"$1,299",cadence:"per project",blurb:"For growing brands that need impact.",features:["3 design concepts","Unlimited revisions","Priority support","3-5 day delivery","Brand guidelines included","Multi-platform delivery"],featured:!0,cta:"Choose Professional"},{name:"Enterprise",price:"Custom",cadence:"tailored to scope",blurb:"For large teams & complex builds.",features:["Dedicated creative team","Custom workflow","24 / 7 priority support","Ongoing maintenance","Full brand system","SLA & NDA on request"],featured:!1,cta:"Contact Sales"}];function Se(){const o=f(),a=f(),{open:t}=_();return e.jsxs("section",{className:"section section--panel vx-pricing",id:"pricing",children:[e.jsxs("div",{className:"vx-pricing__head vx-reveal-parent",ref:o,children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"Pricing"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"Simple, Transparent Pricing"}),e.jsx("p",{className:"vx-pricing__sub reveal","data-delay":"2",children:"Pick a plan that fits, or talk to us for a custom quote. Every tier includes the same level of craft."})]}),e.jsx("div",{className:"vx-pricing__grid vx-reveal-parent",ref:a,children:Ae.map((r,i)=>e.jsxs("div",{className:`vx-price-card reveal ${r.featured?"vx-price-card--featured":""}`,"data-delay":i+1,children:[r.featured&&e.jsxs("div",{className:"vx-price-card__badge",children:[e.jsx(Z,{})," Most Popular"]}),e.jsx("h3",{className:"vx-price-card__name",children:r.name}),e.jsx("p",{className:"vx-price-card__blurb",children:r.blurb}),e.jsxs("div",{className:"vx-price-card__price",children:[e.jsx("span",{className:"vx-price-card__amount",children:r.price}),e.jsx("span",{className:"vx-price-card__cadence",children:r.cadence})]}),e.jsx("ul",{className:"vx-price-card__features",children:r.features.map(n=>e.jsxs("li",{children:[e.jsx(A,{className:"vx-price-card__check"}),e.jsx("span",{children:n})]},n))}),e.jsx(u,{type:r.featured?"primary":"default",size:"large",block:!0,icon:e.jsx(x,{}),iconPosition:"end",className:"vx-price-card__cta",onClick:()=>t("getStarted",{plan:r.name.toLowerCase()}),children:r.cta})]},r.name))}),e.jsx("style",{children:`
        .vx-pricing__head {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .vx-pricing__sub {
          font-size: 17px;
          line-height: 1.6;
          color: #9CA3AF;
          max-width: 560px;
          margin: 0 auto;
          font-weight: 400;
        }
        .vx-pricing__grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          align-items: stretch;
        }
        .vx-price-card {
          position: relative;
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 22px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .vx-price-card:hover {
          transform: translateY(-4px);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 20px 50px -25px rgba(123, 61, 255, 0.55);
        }
        .vx-price-card--featured {
          border-color: rgba(168, 85, 247, 0.55);
          background:
            radial-gradient(120% 100% at 50% 0%, rgba(123, 61, 255, 0.18) 0%, rgba(20,20,26,0.95) 60%),
            linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          box-shadow: 0 24px 60px -28px rgba(123, 61, 255, 0.65);
          transform: translateY(-6px);
        }
        .vx-price-card--featured:hover {
          transform: translateY(-10px);
        }
        .vx-price-card__badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 20px rgba(123, 61, 255, 0.5);
        }
        .vx-price-card__name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin: 0 0 8px;
        }
        .vx-price-card__blurb {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0 0 24px;
        }
        .vx-price-card__price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(123, 61, 255, 0.12);
        }
        .vx-price-card__amount {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #FFFFFF 0%, #C9B8FF 50%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-price-card__cadence {
          font-size: 13px;
          color: #9CA3AF;
        }
        .vx-price-card__features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .vx-price-card__features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #C8C8D6;
        }
        .vx-price-card__check {
          color: #A855F7;
          font-size: 14px;
        }
        .vx-price-card__cta {
          height: 48px !important;
          font-weight: 600 !important;
          border-radius: 999px !important;
        }
        .vx-price-card:not(.vx-price-card--featured) .vx-price-card__cta {
          background: transparent !important;
          border: 1px solid rgba(123, 61, 255, 0.5) !important;
          color: #F8F8FF !important;
        }
        .vx-price-card:not(.vx-price-card--featured) .vx-price-card__cta:hover {
          border-color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
          color: #A855F7 !important;
        }
        @media (max-width: 960px) {
          .vx-pricing__grid { grid-template-columns: 1fr; max-width: 460px; }
          .vx-price-card--featured { transform: none; }
        }
      `})]})}const R="voxalixa.intake",ze=20;function Ce(){try{const o=localStorage.getItem(R);if(!o)return[];const a=JSON.parse(o);return Array.isArray(a)?a:[]}catch{return[]}}function I({kind:o,values:a,at:t,channel:r}){try{const i=Ce();return i.unshift({kind:o,values:a,at:t,channel:r}),localStorage.setItem(R,JSON.stringify(i.slice(0,ze))),!0}catch{return!1}}function De({kind:o,values:a}){const t="hello@voxalixa.io",r=`[Voxalixa] ${o} — ${a.name||a.email||"New inquiry"}`,n=[`Source: ${o} form on voxalixa.io`,`Submitted: ${new Date().toISOString()}`,"","— Reply to —",`Name:    ${a.name||""}`,`Email:   ${a.email||""}`,...a.interest?[`Interest: ${a.interest}`]:[],...a.plan?[`Plan:     ${a.plan}`]:[],...a.budget?[`Budget:   ${a.budget}`]:[],"","— Brief —",a.message||a.brief||"(empty)"].join(`\r
`),c=new URLSearchParams({subject:r,body:n});return`mailto:${t}?${c.toString()}`}async function P({kind:o,values:a}){const t={kind:o,values:a,at:new Date().toISOString()};try{const r=De(t),i=document.createElement("a");return i.href=r,i.rel="noopener",i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),I({...t,channel:"mailto"}),{ok:!0,channel:"mailto"}}catch(r){return I({...t,channel:"local"}),{ok:!1,channel:"local",error:(r==null?void 0:r.message)||"no mail client"}}}const{TextArea:Ie}=j,Ee=[{icon:e.jsx(ee,{}),label:"Email",value:"hello@voxalixa.io",href:"mailto:hello@voxalixa.io"},{icon:e.jsx(ae,{}),label:"Phone",value:"+1 (555) 234-9012",href:"tel:+15552349012"},{icon:e.jsx(re,{}),label:"Studio",value:"Indiranagar, Bengaluru KA",href:"https://maps.google.com/?q=Indiranagar+Bengaluru"},{icon:e.jsx(te,{}),label:"Hours",value:"Mon – Fri  ·  9:00 – 18:00 IST",href:null}],Be=[{value:"graphic",label:"Graphic Design"},{value:"website",label:"Website Development"},{value:"game",label:"Game Development"},{value:"wallpaper",label:"Animated Wallpapers"},{value:"other",label:"Something else"}];function qe(){const{message:o}=S.useApp(),[a]=v.useForm(),[t,r]=l.useState(!1),[i,n]=l.useState(!1),c=f(),d=async s=>{n(!0);try{const p=await P({kind:"contact",values:s});p.channel==="endpoint"?o.success("Message sent — we’ll reply within 24 hours."):p.channel==="mailto"?o.success("Your mail client is opening — finish sending from there."):o.warning("Saved locally — could not reach mail client or endpoint."),r(!0),a.resetFields(),setTimeout(()=>r(!1),4500)}finally{n(!1)}};return e.jsxs("section",{className:"section section--dark vx-contact",id:"contact",children:[e.jsxs("div",{className:"split vx-reveal-parent",ref:c,children:[e.jsxs("div",{className:"vx-contact__intro",children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"Contact"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"Let’s Build Something"}),e.jsx("p",{className:"section-sub reveal","data-delay":"2",children:"Tell us about your project and we’ll come back with ideas, timelines and a clear next step. No hard sell, just craft."}),e.jsx("ul",{className:"vx-contact__channels",children:Ee.map((s,p)=>{const m=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"vx-contact__channel-icon",children:s.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"vx-contact__channel-label",children:s.label}),e.jsx("div",{className:"vx-contact__channel-value",children:s.value})]})]});return e.jsx("li",{className:"reveal","data-delay":p+3,children:s.href?e.jsx("a",{className:"vx-contact__channel-link",href:s.href,...s.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:m}):e.jsx("div",{className:"vx-contact__channel-link vx-contact__channel-link--static",children:m})},s.label)})})]}),e.jsx("div",{className:"vx-contact__form-wrap reveal","data-delay":"2",children:e.jsxs(v,{form:a,layout:"vertical",onFinish:d,className:"vx-contact__form",requiredMark:!1,children:[e.jsxs("div",{className:"vx-contact__row",children:[e.jsx(v.Item,{name:"name",label:"Your name",rules:[{required:!0,message:"Please tell us your name"}],children:e.jsx(j,{size:"large",placeholder:"Ada Lovelace"})}),e.jsx(v.Item,{name:"email",label:"Email",rules:[{required:!0,message:"We’ll need an email to reply"},{type:"email",message:"That doesn’t look like a valid email"}],children:e.jsx(j,{size:"large",placeholder:"you@brand.com"})})]}),e.jsx(v.Item,{name:"interest",label:"What can we help with?",initialValue:"website",children:e.jsx(N,{size:"large",options:Be})}),e.jsx(v.Item,{name:"message",label:"Tell us about your project",rules:[{required:!0,min:12,message:"A few sentences will do (12+ chars)"}],children:e.jsx(Ie,{size:"large",rows:5,placeholder:"Goals, timeline, references — anything that helps us get it."})}),e.jsx(u,{type:"primary",size:"large",htmlType:"submit",block:!0,loading:i,disabled:i,icon:e.jsx(x,{}),iconPosition:"end",className:"vx-contact__cta",children:i?"Sending…":"Send Message"}),t&&e.jsxs("div",{className:"vx-contact__success",children:[e.jsx(A,{})," Message received. We’ll be in touch shortly."]})]})})]}),e.jsx("style",{children:`
        .vx-contact__intro { padding-top: 8px; }
        .vx-contact__channels {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .vx-contact__channels li {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .vx-contact__channel-link {
          display: flex;
          gap: 14px;
          align-items: center;
          text-decoration: none;
          border-radius: 12px;
          padding: 4px 6px;
          margin: -4px -6px;
          transition: background 0.2s ease;
        }
        .vx-contact__channel-link:hover { background: rgba(168, 85, 247, 0.08); }
        .vx-contact__channel-link:hover .vx-contact__channel-value { color: #A855F7; }
        .vx-contact__channel-link--static { cursor: default; }
        .vx-contact__channel-link--static:hover { background: transparent; }
        .vx-contact__channel-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 17px;
          flex-shrink: 0;
        }
        .vx-contact__channel-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9CA3AF;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .vx-contact__channel-value {
          font-size: 15px;
          color: #F8F8FF;
          font-weight: 500;
        }
        .vx-contact__form-wrap {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 22px;
          padding: 32px;
        }
        .vx-contact__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .vx-contact__form .ant-form-item-label > label {
          color: #C8C8D6 !important;
          font-weight: 600 !important;
          font-size: 12px !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .vx-contact__form .ant-input,
        .vx-contact__form .ant-input-affix-wrapper,
        .vx-contact__form .ant-select-selector {
          background: rgba(11, 11, 15, 0.6) !important;
          border: 1px solid rgba(123, 61, 255, 0.18) !important;
          color: #F8F8FF !important;
          border-radius: 12px !important;
        }
        .vx-contact__form .ant-input::placeholder { color: rgba(156, 163, 175, 0.6) !important; }
        .vx-contact__form .ant-input:focus,
        .vx-contact__form .ant-input-affix-wrapper:focus,
        .vx-contact__form .ant-input-affix-wrapper-focused,
        .vx-contact__form .ant-select-focused .ant-select-selector {
          border-color: #A855F7 !important;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15) !important;
        }
        .vx-contact__form .ant-select-selection-item {
          color: #F8F8FF !important;
        }
        .vx-contact__cta {
          height: 50px !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
        }
        .vx-contact__success {
          margin-top: 18px;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(123, 61, 255, 0.08));
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 12px;
          color: #F8F8FF;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .vx-contact__success .anticon { color: #A855F7; }
        @media (max-width: 720px) {
          .vx-contact__row { grid-template-columns: 1fr; }
          .vx-contact__form-wrap { padding: 22px; }
        }
      `})]})}const Re=[{q:"What services does Voxalixa offer?",a:"Voxalixa offers graphic design and brand identity, website design and development, game development, and animated or live wallpapers. Every engagement includes source files and a structured handover."},{q:"How much does a project cost?",a:"Starter projects begin at $499 one-time, the Professional tier is $1,299 per project, and Enterprise engagements are quoted to scope. Every tier includes the same level of craft."},{q:"How long does a project take?",a:"Most design engagements deliver in 5 to 7 days with two revision rounds. Larger website and game builds run 3 to 6 weeks depending on scope. Timelines are agreed before work starts."},{q:"Do you work with clients outside India?",a:"Yes. Voxalixa is based in Indiranagar, Bengaluru and works with clients across India, the United States, the United Kingdom, the UAE and worldwide, remotely and asynchronously."},{q:"Do I own the final files?",a:"Yes. You receive full ownership of all deliverables including source files, exports and any brand guidelines produced during the project."},{q:"How do I start a project with Voxalixa?",a:"Send a short brief through the contact form or the Get Started popup. You get a reply within 24 hours with ideas, a timeline and a clear next step."}];function Pe(){const o=f(),{open:a}=_();return e.jsxs("section",{className:"section section--panel vx-faq",id:"faq",children:[e.jsxs("div",{className:"vx-faq__inner vx-reveal-parent",ref:o,children:[e.jsxs("div",{className:"vx-faq__head",children:[e.jsx("span",{className:"eyebrow reveal","data-delay":"0",children:"FAQ"}),e.jsx("h2",{className:"section-title reveal","data-delay":"1",children:"Questions, answered"}),e.jsx("p",{className:"vx-faq__sub reveal","data-delay":"2",children:"Everything people usually ask before starting a project. Still unsure? Ask us directly — we answer within 24 hours."})]}),e.jsx("div",{className:"vx-faq__list",children:Re.map((t,r)=>e.jsxs("details",{className:"vx-faq__item reveal","data-delay":r%4+3,children:[e.jsxs("summary",{className:"vx-faq__q",children:[e.jsx("h3",{children:t.q}),e.jsx("span",{className:"vx-faq__chevron","aria-hidden":"true",children:"+"})]}),e.jsx("div",{className:"vx-faq__a",children:e.jsx("p",{children:t.a})})]},t.q))}),e.jsx("div",{className:"vx-faq__cta reveal","data-delay":"5",children:e.jsx(u,{type:"primary",size:"large",icon:e.jsx(x,{}),iconPosition:"end",className:"vx-cta-pill",onClick:()=>a("getStarted"),children:"Ask Us Anything"})})]}),e.jsx("style",{children:`
        .vx-faq__inner { max-width: 900px; margin: 0 auto; }
        .vx-faq__head { text-align: center; margin-bottom: 44px; }
        .vx-faq__sub {
          font-size: 17px;
          line-height: 1.6;
          color: #9CA3AF;
          max-width: 560px;
          margin: 12px auto 0;
        }
        .vx-faq__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .vx-faq__item {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .vx-faq__item[open] {
          border-color: rgba(168, 85, 247, 0.45);
        }
        .vx-faq__item:hover { border-color: rgba(168, 85, 247, 0.3); }
        .vx-faq__q {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          user-select: none;
        }
        .vx-faq__q::-webkit-details-marker { display: none; }
        .vx-faq__q h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #F8F8FF;
          letter-spacing: -0.01em;
          line-height: 1.4;
        }
        .vx-faq__chevron {
          flex-shrink: 0;
          width: 26px; height: 26px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(123, 61, 255, 0.12);
          border: 1px solid rgba(123, 61, 255, 0.28);
          color: #A855F7;
          font-size: 17px;
          font-weight: 700;
          line-height: 1;
          transition: transform 0.2s ease;
        }
        .vx-faq__item[open] .vx-faq__chevron { transform: rotate(45deg); }
        .vx-faq__a {
          padding: 0 24px 22px;
        }
        .vx-faq__a p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
          max-width: 720px;
        }
        .vx-faq__cta {
          margin-top: 36px;
          text-align: center;
        }
        @media (max-width: 720px) {
          .vx-faq__q { padding: 16px 18px; }
          .vx-faq__q h3 { font-size: 15px; }
          .vx-faq__a { padding: 0 18px 18px; }
        }
      `})]})}const Me=[{label:"Home",href:"#top"},{label:"Services",href:"#services"},{label:"Portfolio",href:"#portfolio"},{label:"About",href:"#about"},{label:"Pricing",href:"#pricing"},{label:"Contact",href:"#contact"}],$e=[{icon:e.jsx(ie,{}),label:"Instagram",href:"https://instagram.com/voxalixa"},{icon:e.jsx(oe,{}),label:"YouTube",href:"https://youtube.com/@voxalixa"},{icon:e.jsx(se,{}),label:"Discord",href:"https://discord.gg/voxalixa"},{icon:e.jsx(ne,{}),label:"Dribbble",href:"https://dribbble.com/voxalixa"},{icon:e.jsx(le,{}),label:"X",href:"https://x.com/voxalixa"}];function Te(){const o=(a,t)=>{a.preventDefault();const r=t.replace("#",""),i=r==="top"?document.body:document.getElementById(r);if(i){const n=r==="top"?0:i.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:n,behavior:"smooth"})}};return e.jsxs("footer",{className:"vx-footer",children:[e.jsxs("div",{className:"vx-footer__inner",children:[e.jsxs("div",{className:"vx-footer__brand",children:[e.jsxs("div",{className:"vx-logo",children:[e.jsx("span",{className:"vx-logo__mark",style:{background:k},children:"V"}),e.jsx("span",{className:"vx-logo__word",children:"Voxalixa"})]}),e.jsxs("p",{className:"vx-footer__tagline",children:["CREATE ",e.jsx("span",{children:"•"})," DEVELOP ",e.jsx("span",{children:"•"})," INSPIRE"]})]}),e.jsx("nav",{className:"vx-footer__nav",children:Me.map(a=>e.jsx("a",{href:a.href,onClick:t=>o(t,a.href),children:a.label},a.label))}),e.jsx("div",{className:"vx-footer__socials",children:$e.map(a=>e.jsx("a",{className:"vx-footer__social","aria-label":a.label,href:a.href,target:"_blank",rel:"noopener noreferrer",children:a.icon},a.label))}),e.jsx("div",{className:"vx-footer__copy",children:"© 2026 Voxalixa. All rights reserved."})]}),e.jsx("style",{children:`
        .vx-footer {
          padding: 56px 64px 40px;
          background: #0B0B0F;
          border-top: 1px solid rgba(123, 61, 255, 0.12);
          color: #F8F8FF;
        }
        .vx-footer__inner {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 48px;
        }
        .vx-logo {
          display: flex; align-items: center; gap: 10px;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.02em;
        }
        .vx-logo__mark {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: grid; place-items: center;
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          box-shadow: 0 6px 20px rgba(123, 61, 255, 0.45);
        }
        .vx-logo__word { color: #F8F8FF; }
        .vx-footer__tagline {
          margin: 12px 0 0;
          font-size: 11px;
          letter-spacing: 0.32em;
          color: #9CA3AF;
          font-weight: 600;
        }
        .vx-footer__tagline span { color: #7B3DFF; padding: 0 6px; }
        .vx-footer__nav {
          display: flex;
          gap: 32px;
          justify-content: center;
        }
        .vx-footer__nav a {
          font-size: 14px;
          font-weight: 500;
          color: #C8C8D6;
          transition: color 0.2s;
        }
        .vx-footer__nav a:hover { color: #A855F7; }
        .vx-footer__socials {
          display: flex;
          gap: 14px;
        }
        .vx-footer__social {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.18);
          display: grid; place-items: center;
          color: #C8C8D6;
          font-size: 16px;
          transition: all 0.2s;
        }
        .vx-footer__social:hover {
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px);
        }
        .vx-footer__copy {
          font-size: 13px;
          color: #9CA3AF;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .vx-footer { padding: 48px 24px 32px; }
          .vx-footer__inner { grid-template-columns: 1fr; gap: 28px; text-align: center; justify-items: center; }
          .vx-footer__nav { flex-wrap: wrap; justify-content: center; }
        }
      `})]})}class b extends B.Component{constructor(t){super(t);z(this,"reset",()=>this.setState({error:null}));this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("Voxalixa render error",t,r)}render(){return this.state.error?e.jsxs("div",{className:"vx-error",role:"alert","aria-live":"assertive",children:[e.jsxs("div",{className:"vx-error__card",children:[e.jsx("div",{className:"vx-error__eyebrow",children:"Something went wrong"}),e.jsx("h2",{className:"vx-error__title",children:"A piece of the page failed to load."}),e.jsx("p",{className:"vx-error__sub",children:"The rest of the site is still working — try reloading this section to recover."}),e.jsx("button",{className:"vx-error__btn",onClick:this.reset,children:"Try again"})]}),e.jsx("style",{children:`
          .vx-error {
            display: grid;
            place-items: center;
            padding: 80px 24px;
          }
          .vx-error__card {
            max-width: 520px;
            background: linear-gradient(180deg, rgba(20,20,26,0.95), rgba(14,14,20,0.95));
            border: 1px solid rgba(168, 85, 247, 0.45);
            border-radius: 18px;
            padding: 32px 28px;
            text-align: center;
          }
          .vx-error__eyebrow {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: #A855F7;
            margin-bottom: 10px;
          }
          .vx-error__title {
            font-size: 22px;
            font-weight: 800;
            color: #F8F8FF;
            margin: 0 0 8px;
            letter-spacing: -0.02em;
          }
          .vx-error__sub {
            font-size: 15px;
            color: #9CA3AF;
            margin: 0 0 22px;
            line-height: 1.5;
          }
          .vx-error__btn {
            background: linear-gradient(135deg, #A855F7, #7B3DFF);
            color: #F8F8FF;
            border: 0;
            padding: 11px 22px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
          }
          .vx-error__btn:hover { transform: translateY(-1px); }
        `})]}):this.props.children}}function Le(){const[o,a]=l.useState(0);return l.useEffect(()=>{let t=0;const r=()=>{const n=document.documentElement,c=n.scrollHeight-n.clientHeight;a(c>0?Math.min(1,window.scrollY/c):0)},i=()=>{t||(t=requestAnimationFrame(()=>{t=0,r()}))};return r(),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),t&&cancelAnimationFrame(t)}},[]),e.jsxs("div",{className:"vx-scroll-progress","aria-hidden":"true",children:[e.jsx("div",{className:"vx-scroll-progress__bar",style:{transform:`scaleX(${o})`}}),e.jsx("style",{children:`
        .vx-scroll-progress {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          z-index: 1000;
          background: transparent;
          pointer-events: none;
        }
        .vx-scroll-progress__bar {
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, #7B3DFF 0%, #A855F7 100%);
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
          transform-origin: left center;
          transition: transform 0.12s ease-out;
        }
      `})]})}function Oe(){const[o,a]=l.useState(!1);l.useEffect(()=>{let r=0;const i=()=>{r=0,a(window.scrollY>480)},n=()=>{r||(r=requestAnimationFrame(i))};return i(),window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),r&&cancelAnimationFrame(r)}},[]);const t=()=>{const r=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;window.scrollTo({top:0,behavior:r?"auto":"smooth"})};return e.jsxs("button",{className:`vx-back-to-top ${o?"is-visible":""}`,onClick:t,"aria-label":"Back to top",tabIndex:o?0:-1,children:[e.jsx(ce,{}),e.jsx("style",{children:`
        .vx-back-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #F8F8FF;
          border: 0;
          font-size: 18px;
          cursor: pointer;
          display: grid;
          place-items: center;
          z-index: 900;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.35);
        }
        .vx-back-to-top.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .vx-back-to-top:hover {
          transform: translateY(-3px) scale(1);
          box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55);
        }
        .vx-back-to-top:active {
          transform: translateY(0) scale(0.95);
        }
        @media (max-width: 720px) {
          .vx-back-to-top { right: 16px; bottom: 16px; width: 44px; height: 44px; font-size: 16px; }
        }
      `})]})}function Ye({open:o,payload:a,onClose:t}){const{open:r}=_();return a?e.jsxs(F,{open:o,onCancel:t,footer:null,width:640,centered:!0,destroyOnClose:!0,className:"vx-modal vx-modal--service",title:null,closable:!1,children:[e.jsxs("div",{className:"vx-modal__inner",children:[e.jsx("button",{className:"vx-modal__close",onClick:t,"aria-label":"Close",children:"×"}),e.jsx("div",{className:"vx-modal__icon",children:a.icon}),e.jsx("h2",{className:"vx-modal__title",children:a.title}),e.jsx("p",{className:"vx-modal__sub",children:a.desc}),e.jsx("div",{className:"vx-modal__divider"}),e.jsx("h3",{className:"vx-modal__h3",children:"What we deliver"}),e.jsx("ul",{className:"vx-modal__list",children:(a.deliverables||[]).map(i=>e.jsx("li",{children:i},i))}),e.jsx("div",{className:"vx-modal__divider"}),e.jsxs("div",{className:"vx-modal__meta",children:[e.jsxs("div",{children:[e.jsx("div",{className:"vx-modal__meta-label",children:"Typical timeline"}),e.jsx("div",{className:"vx-modal__meta-value",children:a.timeline||"3 — 7 days"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"vx-modal__meta-label",children:"Starting at"}),e.jsx("div",{className:"vx-modal__meta-value",style:{background:k,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:a.starting||"$499"})]})]}),e.jsxs("button",{className:"vx-modal__cta",onClick:()=>{t(),setTimeout(()=>r("getStarted",{interest:a.title}),200)},children:["Start a ",a.title," project ",e.jsx(x,{})]})]}),e.jsx("style",{children:`
        .vx-modal .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
          box-shadow: 0 30px 80px -20px rgba(123, 61, 255, 0.45) !important;
        }
        .vx-modal .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          padding: 40px 40px 36px;
          position: relative;
        }
        .vx-modal__close {
          position: absolute;
          top: 16px; right: 18px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.25);
          background: rgba(11, 11, 15, 0.6);
          color: #C8C8D6;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition: all 0.2s;
        }
        .vx-modal__close:hover {
          background: rgba(123, 61, 255, 0.18);
          color: #F8F8FF;
          border-color: #A855F7;
        }
        .vx-modal__icon {
          width: 64px; height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 26px;
          margin-bottom: 22px;
        }
        .vx-modal__title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          color: #F8F8FF;
        }
        .vx-modal__sub {
          font-size: 15px;
          color: #9CA3AF;
          margin: 0;
          line-height: 1.6;
        }
        .vx-modal__divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123, 61, 255, 0.25), transparent);
          margin: 28px 0;
        }
        .vx-modal__h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin: 0 0 14px;
        }
        .vx-modal__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vx-modal__list li {
          position: relative;
          padding-left: 26px;
          font-size: 14px;
          color: #C8C8D6;
          line-height: 1.5;
        }
        .vx-modal__list li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 14px; height: 14px;
          border-radius: 4px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        .vx-modal__meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 20px 22px;
          background: rgba(11, 11, 15, 0.5);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 14px;
        }
        .vx-modal__meta-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-bottom: 4px;
        }
        .vx-modal__meta-value {
          font-size: 20px;
          font-weight: 700;
          color: #F8F8FF;
        }
        .vx-modal__cta {
          margin-top: 24px;
          width: 100%;
          height: 50px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border: 0;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.4);
          transition: all 0.2s;
        }
        .vx-modal__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55);
        }
        @media (max-width: 520px) {
          .vx-modal__inner { padding: 32px 22px 28px; }
          .vx-modal__title { font-size: 24px; }
        }
      `})]}):null}function Ve({open:o,payload:a,onClose:t}){const{open:r}=_();return a?e.jsxs(F,{open:o,onCancel:t,footer:null,width:780,centered:!0,destroyOnClose:!0,className:"vx-modal vx-modal--project",title:null,closable:!1,children:[e.jsxs("div",{className:"vx-modal__inner",children:[e.jsx("button",{className:"vx-modal__close",onClick:t,"aria-label":"Close",children:"×"}),e.jsx("div",{className:"vx-modal__media",style:{background:a.hue},children:e.jsx(We,{variant:a.accent})}),e.jsxs("div",{className:"vx-modal__body",children:[e.jsx("span",{className:"vx-modal__tag",children:a.tag}),e.jsx("h2",{className:"vx-modal__title",children:a.title}),e.jsx("p",{className:"vx-modal__copy",children:a.copy||a.tag}),e.jsx("div",{className:"vx-modal__stats",children:(a.stats||[]).map(i=>e.jsxs("div",{className:"vx-modal__stat",children:[e.jsx("div",{className:"vx-modal__stat-value",children:i.value}),e.jsx("div",{className:"vx-modal__stat-label",children:i.label})]},i.label))}),e.jsxs("button",{className:"vx-modal__cta",onClick:()=>{t(),setTimeout(()=>r("getStarted",{interest:a.title}),200)},children:["Start a similar project ",e.jsx(x,{})]})]})]}),e.jsx("style",{children:`
        .vx-modal--project .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
          box-shadow: 0 30px 80px -20px rgba(123, 61, 255, 0.45) !important;
          overflow: hidden;
        }
        .vx-modal--project .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          position: relative;
          min-height: 380px;
        }
        .vx-modal__close {
          position: absolute;
          top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.3);
          background: rgba(11, 11, 15, 0.75);
          color: #F8F8FF;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          z-index: 5;
          transition: all 0.2s;
        }
        .vx-modal__close:hover {
          background: rgba(123, 61, 255, 0.4);
        }
        .vx-modal__media {
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
          min-height: 100%;
        }
        .vx-modal__body {
          padding: 36px 32px 32px;
          display: flex;
          flex-direction: column;
        }
        .vx-modal__tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin-bottom: 12px;
        }
        .vx-modal__title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: #F8F8FF;
        }
        .vx-modal__copy {
          font-size: 14px;
          line-height: 1.7;
          color: #9CA3AF;
          margin: 0 0 22px;
        }
        .vx-modal__stats {
          display: flex;
          gap: 18px;
          margin-bottom: 22px;
        }
        .vx-modal__stat {
          padding: 12px 16px;
          background: rgba(11, 11, 15, 0.5);
          border: 1px solid rgba(123, 61, 255, 0.18);
          border-radius: 10px;
        }
        .vx-modal__stat-value {
          font-size: 18px;
          font-weight: 800;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-modal__stat-label {
          font-size: 11px;
          color: #9CA3AF;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }
        .vx-modal__cta {
          margin-top: auto;
          height: 48px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border: 0;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.4);
          transition: all 0.2s;
        }
        .vx-modal__cta:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55); }
        @media (max-width: 720px) {
          .vx-modal__inner { grid-template-columns: 1fr; }
          .vx-modal__media { min-height: 220px; }
          .vx-modal__body { padding: 24px 22px; }
          .vx-modal__title { font-size: 22px; }
        }
      `})]}):null}function We({variant:o}){return o==="logo"?e.jsxs("div",{className:"vx-vis vx-vis--logo",children:[e.jsx("span",{className:"vx-vis__sparkle",style:{top:"20%",left:"18%"}}),e.jsx("span",{className:"vx-vis__sparkle",style:{top:"70%",right:"22%"}}),e.jsxs("div",{className:"vx-vis__logo",children:[e.jsx("span",{className:"vx-vis__logo-mark",children:"V"}),e.jsx("span",{className:"vx-vis__logo-word",children:"Voxalixa"})]}),e.jsx("div",{className:"vx-vis__sub",children:"IDEAS · DESIGN · DIGITAL"})]}):o==="browser"?e.jsxs("div",{className:"vx-vis vx-vis--browser",children:[e.jsxs("div",{className:"vx-vis__chrome",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("div",{className:"vx-vis__url",children:"voxalixa.io"})]}),e.jsxs("div",{className:"vx-vis__chrome-body",children:[e.jsxs("div",{className:"vx-vis__chrome-nav",children:[e.jsx("span",{className:"vx-vis__pill"}),e.jsx("span",{className:"vx-vis__pill"})]}),e.jsxs("div",{className:"vx-vis__chrome-hero",children:[e.jsx("span",{className:"vx-vis__chrome-bar",style:{width:"70%"}}),e.jsx("span",{className:"vx-vis__chrome-bar",style:{width:"50%"}}),e.jsx("span",{className:"vx-vis__chrome-cta"})]}),e.jsxs("div",{className:"vx-vis__chrome-grid",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]}):o==="game"?e.jsxs("div",{className:"vx-vis vx-vis--game",children:[e.jsxs("div",{className:"vx-vis__pad",children:[e.jsx("span",{className:"vx-vis__btn"}),e.jsx("span",{className:"vx-vis__btn"}),e.jsx("div",{className:"vx-vis__stick"})]}),e.jsxs("div",{className:"vx-vis__pad vx-vis__pad--r",children:[e.jsx("span",{className:"vx-vis__btn"}),e.jsx("span",{className:"vx-vis__btn"}),e.jsx("div",{className:"vx-vis__stick"})]}),e.jsx("div",{className:"vx-vis__game-tag",children:"2D · 3D"})]}):e.jsxs("div",{className:"vx-vis vx-vis--wall",children:[e.jsx("div",{className:"vx-vis__orb"}),e.jsx("div",{className:"vx-vis__orb vx-vis__orb--2"}),e.jsx("div",{className:"vx-vis__star"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--s"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--t"}),e.jsx("div",{className:"vx-vis__star vx-vis__star--f"})]})}const{TextArea:Ge}=j,E=[{value:"graphic",label:"Graphic Design"},{value:"website",label:"Website Development"},{value:"game",label:"Game Development"},{value:"wallpaper",label:"Animated Wallpapers"},{value:"brand",label:"Brand System"},{value:"other",label:"Something else"}],He=[{value:"under-1k",label:"Under $1k"},{value:"1k-3k",label:"$1k – $3k"},{value:"3k-10k",label:"$3k – $10k"},{value:"10k-plus",label:"$10k +"},{value:"not-sure",label:"Not sure yet"}];function Ue({open:o,payload:a,onClose:t}){const{message:r}=S.useApp(),[i]=v.useForm(),[n,c]=l.useState(!1),[d,s]=l.useState(!1);l.useEffect(()=>{if(!o)return;c(!1);const m={};if(a!=null&&a.interest){const h=E.find(g=>g.label.toLowerCase()===String(a.interest).toLowerCase());h&&(m.interest=h.value)}a!=null&&a.plan&&(m.budget=a.plan==="starter"?"under-1k":a.plan==="professional"?"1k-3k":"10k-plus"),i.setFieldsValue(m)},[o,a,i]);const p=async m=>{s(!0);try{const h=await P({kind:"get-started",values:m});h.channel==="endpoint"?r.success("Request sent — we’ll reply within 24 hours."):h.channel==="mailto"?r.success("Your mail client is opening — finish sending from there."):r.warning("Saved locally — could not reach mail client or endpoint."),c(!0),i.resetFields(),setTimeout(()=>{t(),c(!1)},1800)}finally{s(!1)}};return e.jsxs(F,{open:o,onCancel:t,footer:null,width:620,centered:!0,destroyOnClose:!0,className:"vx-modal vx-modal--getstarted",title:null,closable:!1,children:[e.jsxs("div",{className:"vx-modal__inner",children:[e.jsx("button",{className:"vx-modal__close",onClick:t,"aria-label":"Close",children:"×"}),e.jsx("span",{className:"vx-modal__eyebrow",children:"Start a project"}),e.jsx("h2",{className:"vx-modal__title",children:"Tell us what you need."}),e.jsx("p",{className:"vx-modal__sub",children:"A short brief is enough. The bigger the ask, the more we love it."}),e.jsxs(v,{form:i,layout:"vertical",onFinish:p,className:"vx-modal__form",requiredMark:!1,children:[e.jsxs("div",{className:"vx-modal__row",children:[e.jsx(v.Item,{name:"name",label:"Your name",rules:[{required:!0,message:"Please tell us your name"}],children:e.jsx(j,{size:"large",placeholder:"Ada Lovelace"})}),e.jsx(v.Item,{name:"email",label:"Email",rules:[{required:!0,type:"email",message:"A valid email please"}],children:e.jsx(j,{size:"large",placeholder:"you@brand.com"})})]}),e.jsxs("div",{className:"vx-modal__row",children:[e.jsx(v.Item,{name:"interest",label:"What do you need?",initialValue:"website",children:e.jsx(N,{size:"large",options:E})}),e.jsx(v.Item,{name:"budget",label:"Budget",initialValue:"1k-3k",children:e.jsx(N,{size:"large",options:He})})]}),e.jsx(v.Item,{name:"brief",label:"A short brief",rules:[{required:!0,min:12,message:"A few sentences (12+ chars)"}],children:e.jsx(Ge,{rows:4,placeholder:"Goals, timeline, references — anything that helps."})}),e.jsx(u,{type:"primary",htmlType:"submit",size:"large",block:!0,loading:d,disabled:d,icon:e.jsx(x,{}),iconPosition:"end",className:"vx-modal__cta",children:d?"Sending…":"Send Request"}),n&&e.jsxs("div",{className:"vx-modal__success",children:[e.jsx(A,{})," Request received. We’ll be in touch."]})]})]}),e.jsx("style",{children:`
        .vx-modal--getstarted .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
        }
        .vx-modal--getstarted .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner { padding: 36px 36px 28px; position: relative; }
        .vx-modal__close {
          position: absolute; top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.25);
          background: rgba(11, 11, 15, 0.6);
          color: #C8C8D6;
          font-size: 20px; line-height: 1;
          cursor: pointer;
        }
        .vx-modal__close:hover { background: rgba(123, 61, 255, 0.2); }
        .vx-modal__eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
        }
        .vx-modal__title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 8px 0 6px;
          color: #F8F8FF;
        }
        .vx-modal__sub {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0 0 22px;
        }
        .vx-modal__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .vx-modal__form .ant-form-item-label > label {
          color: #C8C8D6 !important;
          font-weight: 600 !important;
          font-size: 11px !important;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .vx-modal__form .ant-input,
        .vx-modal__form .ant-input-affix-wrapper,
        .vx-modal__form .ant-select-selector {
          background: rgba(11, 11, 15, 0.6) !important;
          border: 1px solid rgba(123, 61, 255, 0.18) !important;
          color: #F8F8FF !important;
          border-radius: 10px !important;
        }
        .vx-modal__form .ant-input::placeholder { color: rgba(156, 163, 175, 0.6) !important; }
        .vx-modal__form .ant-input:focus,
        .vx-modal__form .ant-input-affix-wrapper:focus,
        .vx-modal__form .ant-input-affix-wrapper-focused,
        .vx-modal__form .ant-select-focused .ant-select-selector {
          border-color: #A855F7 !important;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15) !important;
        }
        .vx-modal__form .ant-select-selection-item { color: #F8F8FF !important; }
        .vx-modal__cta {
          height: 48px !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
          margin-top: 4px;
        }
        .vx-modal__success {
          margin-top: 14px;
          padding: 10px 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.14), rgba(123, 61, 255, 0.08));
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 10px;
          color: #F8F8FF;
          font-size: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .vx-modal__success .anticon { color: #A855F7; }

        /* Dropdown options — make selected option readable on the purple highlight */
        .vx-modal .ant-select-dropdown,
        .vx-contact__form .ant-select-dropdown {
          background: rgba(11, 11, 15, 0.98) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.6) !important;
        }
        .vx-modal .ant-select-item,
        .vx-contact__form .ant-select-item {
          color: #C8C8D6 !important;
          background: transparent !important;
        }
        .vx-modal .ant-select-item-option-active:not(.ant-select-item-option-disabled),
        .vx-contact__form .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
          background: rgba(123, 61, 255, 0.12) !important;
          color: #F8F8FF !important;
        }
        .vx-modal .ant-select-item-option-selected:not(.ant-select-item-option-disabled),
        .vx-contact__form .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(123, 61, 255, 0.3)) !important;
          color: #FFFFFF !important;
          font-weight: 700 !important;
        }
        .vx-modal .ant-select-item-option-selected .ant-select-item-option-state,
        .vx-contact__form .ant-select-item-option-selected .ant-select-item-option-state {
          color: #FFFFFF !important;
        }

        @media (max-width: 520px) {
          .vx-modal__inner { padding: 28px 22px 22px; }
          .vx-modal__row { grid-template-columns: 1fr; }
          .vx-modal__title { font-size: 22px; }
        }
      `})]})}function Xe(o){return{kind:"placeholder"}}function Ke({open:o,onClose:a}){const r=l.useMemo(()=>Xe(),[""]);return e.jsxs(F,{open:o,onCancel:a,footer:null,width:920,centered:!0,destroyOnClose:!0,className:"vx-modal vx-modal--video",title:null,closable:!1,children:[e.jsxs("div",{className:"vx-modal__inner",children:[e.jsx("button",{className:"vx-modal__close",onClick:a,"aria-label":"Close",children:"×"}),e.jsxs("div",{className:"vx-modal__player",children:[r.kind==="placeholder"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"vx-modal__player-glow"}),e.jsx(de,{className:"vx-modal__play-icon","aria-hidden":"true"}),e.jsxs("div",{className:"vx-modal__player-text",children:[e.jsx("div",{className:"vx-modal__player-eyebrow",children:"Showreel · 2026"}),e.jsx("div",{className:"vx-modal__player-title",children:"Voxalixa in motion"}),e.jsx("div",{className:"vx-modal__player-sub",children:"A 90-second walkthrough of how we work — from brief to ship."})]}),e.jsxs("div",{className:"vx-modal__player-progress",children:[e.jsx("div",{className:"vx-modal__player-progress-bar"}),e.jsx("div",{className:"vx-modal__player-progress-time",children:"00:00 / 01:30"})]}),e.jsxs("div",{className:"vx-modal__player-note",children:["Add ",e.jsx("code",{children:"VITE_VIDEO_URL"})," to ",e.jsx("code",{children:".env.local"})," to drop in a YouTube / Vimeo / .mp4 link."]})]}),r.kind==="youtube"&&e.jsx("iframe",{className:"vx-modal__embed",src:r.src,title:"Voxalixa showreel",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),r.kind==="vimeo"&&e.jsx("iframe",{className:"vx-modal__embed",src:r.src,title:"Voxalixa showreel",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}),r.kind==="iframe"&&e.jsx("iframe",{className:"vx-modal__embed",src:r.src,title:"Voxalixa showreel",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0}),r.kind==="file"&&e.jsxs("video",{className:"vx-modal__embed vx-modal__embed--video",src:r.src,controls:!0,autoPlay:!0,playsInline:!0,preload:"metadata",children:[e.jsx("source",{src:r.src,type:r.type}),"Your browser doesn’t support embedded video."]})]})]}),e.jsx("style",{children:`
        .vx-modal--video .ant-modal-content {
          background: #0B0B0F !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 18px !important;
          padding: 0 !important;
          overflow: hidden;
        }
        .vx-modal--video .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          padding: 18px;
          position: relative;
        }
        .vx-modal__close {
          position: absolute;
          top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.3);
          background: rgba(11, 11, 15, 0.75);
          color: #F8F8FF;
          font-size: 20px; line-height: 1;
          cursor: pointer;
          z-index: 5;
        }
        .vx-modal__player {
          aspect-ratio: 16 / 9;
          background:
            radial-gradient(120% 100% at 50% 0%, rgba(123, 61, 255, 0.35) 0%, rgba(11, 11, 15, 0.9) 60%),
            linear-gradient(135deg, #0B0B0F 0%, #1A0E33 100%);
          position: relative;
          display: grid;
          place-items: center;
          border-radius: 12px;
          overflow: hidden;
        }
        .vx-modal__player-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(closest-side, rgba(168, 85, 247, 0.25), transparent 70%);
          animation: vx-glow-pulse 4s ease-in-out infinite;
          pointer-events: none;
        }
        .vx-modal__play-icon {
          font-size: 84px;
          color: rgba(255,255,255,0.95);
          filter: drop-shadow(0 0 24px rgba(168, 85, 247, 0.7));
          position: relative;
          z-index: 2;
          transition: transform 0.2s;
        }
        .vx-modal__player-text {
          position: absolute;
          top: 32px; left: 32px;
          text-align: left;
          z-index: 2;
        }
        .vx-modal__player-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin-bottom: 6px;
        }
        .vx-modal__player-title {
          font-size: 24px;
          font-weight: 800;
          color: #F8F8FF;
          letter-spacing: -0.01em;
        }
        .vx-modal__player-sub {
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 4px;
          max-width: 320px;
        }
        .vx-modal__player-progress {
          position: absolute;
          left: 32px; right: 32px;
          bottom: 50px;
          z-index: 2;
        }
        .vx-modal__player-progress-bar {
          height: 3px;
          background: linear-gradient(90deg, #7B3DFF, #A855F7);
          width: 0%;
          border-radius: 3px;
        }
        .vx-modal__player-progress-time {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 6px;
          letter-spacing: 0.08em;
        }
        .vx-modal__player-note {
          position: absolute;
          right: 32px;
          bottom: 22px;
          font-size: 10px;
          color: #6B7280;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          z-index: 2;
          max-width: 280px;
          text-align: right;
          line-height: 1.4;
        }
        .vx-modal__player-note code {
          background: rgba(123, 61, 255, 0.12);
          border: 1px solid rgba(123, 61, 255, 0.22);
          border-radius: 4px;
          padding: 1px 5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          color: #C8B8FF;
        }

        .vx-modal__embed {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          background: #000;
        }
        .vx-modal__embed--video {
          object-fit: contain;
        }

        @keyframes vx-glow-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @media (max-width: 720px) {
          .vx-modal__player-text { top: 18px; left: 18px; right: 18px; }
          .vx-modal__player-title { font-size: 18px; }
          .vx-modal__player-progress { left: 18px; right: 18px; bottom: 50px; }
        }
      `})]})}const Qe=[{type:"service",component:Ye},{type:"project",component:Ve},{type:"getStarted",component:Ue},{type:"video",component:Ke}];function Je(){return l.useEffect(()=>{const o=()=>{const a=window.location.hash.replace("#","");if(!a||a==="top")return;const t=document.getElementById(a);if(t){const r=t.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:r,behavior:"auto"})}};return requestAnimationFrame(o),window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]),e.jsx(ve,{modals:Qe,children:e.jsxs("div",{className:"app",children:[e.jsx(Le,{}),e.jsx("a",{className:"vx-skip-link",href:"#main",children:"Skip to main content"}),e.jsx(ge,{}),e.jsxs("main",{id:"main",children:[e.jsx(b,{children:e.jsx(fe,{})}),e.jsx(b,{children:e.jsx(je,{})}),e.jsx(b,{children:e.jsx(ye,{})}),e.jsx(b,{children:e.jsx(Ne,{})}),e.jsx(b,{children:e.jsx(Se,{})}),e.jsx(b,{children:e.jsx(Pe,{})}),e.jsx(b,{children:e.jsx(qe,{})})]}),e.jsx(Te,{}),e.jsx(Oe,{})]})})}O.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(xe,{theme:pe,children:e.jsx(S,{children:e.jsx(Je,{})})})}));
