exports.id=545,exports.ids=[545],exports.modules={1135:()=>{},1949:(t,e,n)=>{Promise.resolve().then(n.bind(n,4042)),Promise.resolve().then(n.bind(n,7297))},3467:(t,e,n)=>{"use strict";n.d(e,{AppInjection:()=>L});var o=n(687),r=n(7175),i=n(8887),a=n(3210),l=n(3808),s=n(6189),p=function(t){return t.P="P",t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.BLOCKQUOTE="BLOCKQUOTE",t.CODE="CODE",t.PRE="PRE",t.LI="LI",t.FIGCAPTION="FIGCAPTION",t.LABEL="LABEL",t.IMG="IMG",t.VIDEO="VIDEO",t.A="A",t.BUTTON="BUTTON",t}(p||{}),m=function(t){return t.SPAN="SPAN",t}(m||{}),c=function(t){return t.DIV="DIV",t.SECTION="SECTION",t.HEADER="HEADER",t.FOOTER="FOOTER",t}(c||{});let d=Object.values(p),u=Object.values(m),h=["SECTION","HEADER","FOOTER"],f=["BUTTON","A","IMG","VIDEO"].map(t=>`:not(${t.toString().toLowerCase()})`).join(""),E="alpha-element-menu",b=()=>{(0,a.useEffect)(()=>{let t=document.createElement("style");return t.textContent=`
      .alpha-element-hover${f}:not(a *):not(button *):not([role="button"] *):not([onclick] *) {
        cursor: default !important;
      }
      .alpha-element-click${f}:not(a *):not(button *):not([role="button"] *):not([onclick] *) {
        cursor: default !important;
      }
      .alpha-menu-button {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 8px !important;
        background: white !important;
        border: none !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        color: #374151 !important;
        transition: background-color 0.15s ease !important;
      }
      .alpha-menu-button:hover {
        background: #f3f4f6 !important;
      }
      .alpha-menu-button svg {
        display: block !important;
      }
      .alpha-section-menu-button {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 10px 16px !important;
        background: white !important;
        border: none !important;
        cursor: pointer !important;
        color: #374151 !important;
        transition: background-color 0.15s ease !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        width: 100% !important;
        text-align: left !important;
      }
      .alpha-section-menu-button:hover {
        background: #f3f4f6 !important;
      }
      .alpha-section-menu-button svg {
        display: block !important;
        flex-shrink: 0 !important;
      }
      .alpha-section-highlight {
        position: relative !important;
      }
      .alpha-editing-badge {
        position: absolute !important;
        top: -6px !important;
        left: 0 !important;
        background: rgba(120, 120, 120, 0.75) !important;
        color: white !important;
        padding: 2px 4px !important;
        border-radius: 2px !important;
        font-size: 0.6rem !important;
        font-weight: 600 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        z-index: 2 !important;
        pointer-events: none !important;
        line-height: 1 !important;
      }
      .alpha-editing-badge {
        display: none !important;
      }
    `,document.head.appendChild(t),()=>{document.head.removeChild(t)}},[])},g=(t,e,n,s)=>{let p=(0,a.useRef)(null),m=(0,a.useCallback)((t,e=d)=>{let n=t=>{let e=["SPAN","STRONG","EM","B","I","U","A","SMALL","SUB","SUP","MARK","CODE","ABBR","TIME","S","DEL","INS"];if(!t.textContent?.trim())return!1;for(let o=0;o<t.children.length;o++){let r=t.children[o];if(!e.includes(r.tagName)||!n(r))return!1}return!0},o=t=>{let e=t.parentElement,o=0;for(;e&&o<1;){if(r(e))return e;e=e.parentElement,o++}return"SPAN"===t.tagName&&n(t)?t:null},r=t=>"DIV"===t.tagName&&n(t)||e.includes(t.tagName)?t:null,i=document.elementsFromPoint(t.clientX,t.clientY);for(let t=0;t<5;t++){let e=i[t];if(e instanceof HTMLElement){if(e.hasAttribute(E))return null;let t=e.tagName;if(u.includes(t)){let t=o(e);if(null!==t)return t}else{let t=r(e);if(null!==t)return t}}}return null},[]),c=t=>{let e=t.tagName;switch(e){case"P":case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"BLOCKQUOTE":case"CODE":case"PRE":case"LI":case"LABEL":case"DIV":case"SPAN":return"TEXT";case"A":return"LINK";case"BUTTON":return"BUTTON";case"IMG":return"IMAGE";case"VIDEO":return"VIDEO";default:return e}},f=(t,e)=>{let n=document.getElementById("alpha-element-label");n||((n=document.createElement("div")).id="alpha-element-label",document.body.appendChild(n));let o=t.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop,i=window.pageXOffset||document.documentElement.scrollLeft;n.textContent=e,n.style.cssText=`
      position: absolute !important;
      top: ${o.top+r-18}px !important;
      left: ${o.left+i-2}px !important;
      background: rgba(26, 121, 228, 0.85) !important;
      color: white !important;
      padding: 2px 6px !important;
      border-radius: 3px !important;
      font-size: 10px !important;
      font-weight: 600 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
      line-height: 1.2 !important;
      white-space: nowrap !important;
      letter-spacing: 0.5px !important;
    `},b=()=>{let t=document.getElementById("alpha-element-label");t&&t.remove()},g=t=>{w();let e=document.createElement("div");e.id="alpha-element-menu",e.setAttribute(E,"true");let n=document.createElement("button");n.className="alpha-menu-button",n.title="Edit",n.setAttribute(E,"true"),n.innerHTML=(0,l.renderToStaticMarkup)((0,o.jsx)(r.A,{size:16})),n.onclick=e=>{e.stopPropagation(),A(t,"EDIT"),w()};let a=document.createElement("button");a.className="alpha-menu-button",a.title="Chat",a.setAttribute(E,"true"),a.innerHTML=(0,l.renderToStaticMarkup)((0,o.jsx)(i.A,{size:16})),a.onclick=e=>{e.stopPropagation(),A(t,"CHAT"),w()},e.appendChild(n),e.appendChild(a),document.body.appendChild(e),v(t)},v=t=>{let e=document.getElementById("alpha-element-menu");if(!e)return;let n=t.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop,r=window.pageXOffset||document.documentElement.scrollLeft,i=n.top-50<0?n.bottom+o+8:n.top+o-50,a=n.left+r-2;a<r&&(a=r+8),e.style.cssText=`
      position: absolute !important;
      top: ${i}px !important;
      left: ${a}px !important;
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      background: white !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 6px !important;
      padding: 3px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      z-index: 2147483647 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    `},w=()=>{let t=document.getElementById("alpha-element-menu");t&&t.remove()},x=(t,e)=>{let n=document.getElementById(e);n||((n=document.createElement("div")).id=e,document.body.appendChild(n));let o=t.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop,i=window.pageXOffset||document.documentElement.scrollLeft;n.style.cssText=`
      position: absolute !important;
      top: ${o.top+r-2}px !important;
      left: ${o.left+i-2}px !important;
      width: ${o.width+4}px !important;
      height: ${o.height+4}px !important;
      border: 2px solid rgba(26, 121, 228, 0.85) !important;
      border-radius: 2px !important;
      pointer-events: none !important;
      z-index: 2147483646 !important;
      box-sizing: border-box !important;
    `},y=t=>{let e=document.getElementById(t);e&&e.remove()},L=(0,a.useCallback)(t=>{t.classList.contains("alpha-element-hover")||t.classList.add("alpha-element-hover"),x(t,"alpha-element-hover-overlay");let e=c(t);f(t,e)},[]),I=(0,a.useCallback)(t=>{t.classList.contains("alpha-element-hover")&&t.classList.remove("alpha-element-hover"),y("alpha-element-hover-overlay"),b()},[]),T=(0,a.useCallback)(t=>{t.classList.contains("alpha-element-click")||t.classList.add("alpha-element-click"),x(t,"alpha-element-click-overlay")},[]),C=(0,a.useCallback)(t=>{t.classList.contains("alpha-element-click")&&t.classList.remove("alpha-element-click"),y("alpha-element-click-overlay")},[]),A=(0,a.useCallback)((t,e)=>{let n=t.closest("section"),o=null;if(n){let t=n.outerHTML.split(">")[0]+">",e=`</${n.tagName.toLowerCase()}>`;o=`${t}
  ...
${e}`}let r={type:"ALPHA_ELEMENT_EDITING",targetOuterHtml:t.outerHTML,section:o,messageType:e};window.parent.postMessage(r,"*")},[]),k=(0,a.useCallback)(()=>{window.parent.postMessage({type:"ALPHA_ELEMENT_EDITING",targetOuterHtml:"",section:""},"*")},[]),O=()=>{p.current=null,b(),w();let t=document.querySelector(".alpha-element-hover");t&&t instanceof HTMLElement&&I(t);let e=document.querySelector(".alpha-element-click");e&&e instanceof HTMLElement&&C(e)};(0,a.useEffect)(()=>t?(()=>{let t=null,e=()=>{t&&L(t)},n=()=>{p.current&&(v(p.current),T(p.current))},o=n=>{let o=m(n);o!==t&&(null===o||o!==p.current)&&(null===o&&null!==t&&I(t),t=o,e())},r=e=>{if(e.target.closest(`[${E}]`))return;e.preventDefault(),e.stopPropagation();let n=m(e);if(!n){O(),k();return}null!==p.current&&k(),p.current=n,null!==t&&(I(t),t=null),T(n),g(n)},i=()=>{null!==t&&(I(t),t=null)};window.addEventListener("click",r,{capture:!0}),window.addEventListener("mousemove",o),document.addEventListener("mouseleave",i),window.addEventListener("scroll",e,!0),window.addEventListener("scroll",n,!0),window.addEventListener("resize",e),window.addEventListener("resize",n);let a=setInterval(()=>{e(),n()},25);return()=>{window.removeEventListener("click",r,{capture:!0}),window.removeEventListener("mousemove",o),document.removeEventListener("mouseleave",i),window.removeEventListener("scroll",e,!0),window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",e),window.removeEventListener("resize",n),clearInterval(a)}})():(O(),(()=>{let t=t=>{let e=m(t);e&&A(e,"SELECT_DURING_OFF_STATE")};return window.addEventListener("click",t,{capture:!0}),()=>{window.removeEventListener("click",t,{capture:!0})}})()),[t]);let P=(0,a.useRef)(null),S=(0,a.useCallback)(t=>{if(t){let e={type:"ALPHA_SECTION_SELECT",sectionId:t.getAttribute("alpha-section-id")??"",messageType:"SELECT"};window.parent.postMessage(e,"*")}else window.parent.postMessage({type:"ALPHA_SECTION_SELECT",messageType:"UNSELECT"},"*")},[]),B=t=>{P.current&&(z(),G()),P.current=t,X.current===t&&($(),R(),X.current=null),D(t),_(t),S(t)},N=t=>{R();let e=(t.getAttribute("alpha-section-id")||"section").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),n=document.createElement("div");n.id="alpha-section-label",n.setAttribute(E,"true"),n.textContent=e,n.style.cssText=`
      position: absolute !important;
      padding: 3px 6px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: white !important;
      background: rgba(60, 141, 232) !important;
      border: none !important;
      border-radius: 4px !important;
      z-index: 2147483646 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      pointer-events: none !important;
    `;let i=document.createElement("button");i.id="alpha-section-edit-button",i.setAttribute(E,"true");let a=document.createElement("span");a.setAttribute(E,"true"),a.style.cssText=`
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-width: 36px !important;
      height: 36px !important;
      flex-shrink: 0 !important;
    `,a.innerHTML=(0,l.renderToStaticMarkup)((0,o.jsx)(r.A,{size:16}));let s=document.createElement("span");s.setAttribute(E,"true"),s.textContent="Edit with Chat",s.style.cssText=`
      white-space: nowrap !important;
      font-size: 13px !important;
      font-weight: 500 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      opacity: 0 !important;
      transform: translateX(-10px) !important;
      transition: opacity 0.2s ease, transform 0.2s ease !important;
      padding-right: 8px !important;
    `,i.appendChild(a),i.appendChild(s),i.style.cssText=`
      position: absolute !important;
      width: 36px !important;
      height: 36px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      background: white !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 6px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      cursor: pointer !important;
      z-index: 2147483646 !important;
      color: #6b7280 !important;
      transition: width 0.2s ease, background-color 0.2s ease, left 0.2s ease !important;
      padding: 0 !important;
      overflow: hidden !important;
    `,document.body.appendChild(n),document.body.appendChild(i);let p=36+s.scrollWidth;i.onmouseenter=()=>{let t=parseInt(i.style.left||"0"),e=p-36;i.style.left=`${t-e}px`,i.style.width=`${p}px`,s.style.opacity="1",s.style.transform="translateX(0)",i.style.backgroundColor="#f9fafb"},i.onmouseleave=()=>{let t=parseInt(i.style.left||"0"),e=p-36;i.style.left=`${t+e}px`,i.style.width="36px",s.style.opacity="0",s.style.transform="translateX(-10px)",i.style.backgroundColor="white"},i.onclick=e=>{e.stopPropagation(),B(t)},H(t)},H=t=>{let e,n,o=document.getElementById("alpha-section-label"),r=document.getElementById("alpha-section-edit-button");if(!o&&!r)return;let i=t.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,l=window.pageXOffset||document.documentElement.scrollLeft,s=i.left+l,p=i.right+l-48;if(i.top>=0)e=i.top+a,n=i.top+a+12;else{e=a,n=a+12;let t=i.bottom+a-60,o=i.bottom+a-48;e>t&&(e=t),n>o&&(n=o)}if(o&&(o.style.top=`${e}px`,o.style.left=`${s}px`),r){let t=parseInt(r.style.width||"36"),e=p;t>36&&(e=p-(t-36)),r.style.top=`${n}px`,r.style.left=`${e}px`}},R=()=>{let t=document.getElementById("alpha-section-label"),e=document.getElementById("alpha-section-edit-button");t&&t.remove(),e&&e.remove()},M=t=>{let e=document.getElementById("alpha-section-hover-overlay");e||((e=document.createElement("div")).id="alpha-section-hover-overlay",document.body.appendChild(e));let n=t.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop,r=window.pageXOffset||document.documentElement.scrollLeft;e.style.cssText=`
      position: absolute !important;
      top: ${n.top+o}px !important;
      left: ${n.left+r}px !important;
      width: ${n.width}px !important;
      height: ${n.height}px !important;
      border: 3px solid rgba(60, 141, 232) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 2147483645 !important;
      box-sizing: border-box !important;
    `},$=()=>{let t=document.getElementById("alpha-section-hover-overlay");t&&t.remove()},D=t=>{let e=document.getElementById("alpha-section-click-overlay");e||((e=document.createElement("div")).id="alpha-section-click-overlay",document.body.appendChild(e));let n=t.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop,r=window.pageXOffset||document.documentElement.scrollLeft;e.style.cssText=`
      position: absolute !important;
      top: ${n.top+o}px !important;
      left: ${n.left+r}px !important;
      width: ${n.width}px !important;
      height: ${n.height}px !important;
      border: 2.5px solid rgba(60, 141, 232) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 2147483645 !important;
      box-sizing: border-box !important;
    `},z=()=>{let t=document.getElementById("alpha-section-click-overlay");t&&t.remove()},_=t=>{G();let e=(t.getAttribute("alpha-section-id")||"section").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),n=document.createElement("div");n.id="alpha-section-click-label",n.setAttribute(E,"true"),n.textContent=e,n.style.cssText=`
      position: absolute !important;
      padding: 3px 6px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: white !important;
      background: rgba(60, 141, 232) !important;
      border: none !important;
      border-radius: 4px !important;
      z-index: 2147483646 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      pointer-events: none !important;
    `;let r=document.createElement("button");r.id="alpha-section-click-button",r.setAttribute(E,"true"),r.innerHTML=(0,l.renderToStaticMarkup)((0,o.jsx)(i.A,{size:16})),r.style.cssText=`
      position: absolute !important;
      width: 36px !important;
      height: 36px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background: #3b82f6 !important;
      border: none !important;
      border-radius: 6px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      cursor: pointer !important;
      z-index: 2147483646 !important;
      color: white !important;
      padding: 0 !important;
      transition: background-color 0.2s ease !important;
    `,r.onclick=t=>{t.stopPropagation(),z(),G(),P.current=null,S(null)},document.body.appendChild(n),document.body.appendChild(r),j(t)},j=t=>{let e,n,o=document.getElementById("alpha-section-click-label"),r=document.getElementById("alpha-section-click-button");if(!o&&!r)return;let i=t.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,l=window.pageXOffset||document.documentElement.scrollLeft,s=i.left+l,p=i.right+l-48;if(i.top>=0)e=i.top+a,n=i.top+a+12;else{e=a,n=a+12;let t=i.bottom+a-60,o=i.bottom+a-48;e>t&&(e=t),n>o&&(n=o)}o&&(o.style.top=`${e}px`,o.style.left=`${s}px`),r&&(r.style.top=`${n}px`,r.style.left=`${p}px`)},G=()=>{let t=document.getElementById("alpha-section-click-label"),e=document.getElementById("alpha-section-click-button");t&&t.remove(),e&&e.remove()},U=()=>{$(),R(),z(),G(),P.current=null,X.current=null,S(null)},X=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!n)return void U();let t=t=>{let e=t.target;if(e instanceof Element){if(e.closest(`[${E}]`))return X.current;let t=h.map(t=>t.toLowerCase()).join(", ");return e.closest(t)}return null},e=()=>{X.current&&(M(X.current),H(X.current))},o=()=>{P.current&&(D(P.current),j(P.current))},r=e=>{let n=e.target;if(n instanceof Element&&n.closest(`[${E}]`))return;if(P.current){let t=P.current.getBoundingClientRect();if(e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom){X.current&&($(),R(),X.current=null);return}}if(X.current){let t=X.current.getBoundingClientRect();if(e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom)return;$(),R(),X.current=null}let o=t(e);o&&o!==P.current&&(o.classList.contains("alpha-section-highlight")||(M(o),N(o)),X.current=o)},i=()=>{X.current&&($(),R(),X.current=null)};window.addEventListener("mousemove",r),document.addEventListener("mouseleave",i),window.addEventListener("scroll",e,!0),window.addEventListener("scroll",o,!0),window.addEventListener("resize",e),window.addEventListener("resize",o);let a=setInterval(()=>{null===P.current||P.current?.isConnected||U(),X.current&&M(X.current),P.current&&D(P.current),S(P.current)},50);return()=>{window.removeEventListener("mousemove",r),document.removeEventListener("mouseleave",i),window.removeEventListener("scroll",e,!0),window.removeEventListener("scroll",o,!0),window.removeEventListener("resize",e),window.removeEventListener("resize",o),clearInterval(a),X.current&&($(),R())}},[n]),(0,a.useEffect)(()=>{let o=o=>{if(o.data?.type==="ELEMENT_EDITING_TOGGLE"){let n=o.data.enabled;n!==t&&(e(n),n||O())}if(o.data?.type==="ELEMENT_EDITING_RESET"&&O(),o.data?.type==="ELEMENT_EDITING_RESIGNAL"&&null!==p.current&&A(p.current,"EDIT"),o.data?.type==="SECTION_SELECTION_TOGGLE"){let t=o.data.enabled;t!==n&&s(t)}o.data?.type==="PREVIEW_COMPILED"&&null!==p.current&&T(p.current),o.data?.type==="ALPHA_EDITOR_PAGE_CHANGE"&&(O(),U())};return window.addEventListener("message",o),()=>{window.removeEventListener("message",o)}},[t,n])},v=()=>{let[t,e]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!0);b(),g(t,e,n,o)},w=()=>{let t=(0,s.useRouter)(),[e,n]=(0,a.useState)(""),o=()=>{};(0,a.useEffect)(()=>{let t=setInterval(o,100);return()=>{clearInterval(t)}},[e]),(0,a.useEffect)(()=>{let e=e=>{e.data?.type==="ALPHA_EDITOR_PAGE_CHANGE"&&t.push(e.data.path)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[])},x=()=>{(0,a.useEffect)(()=>{let t=null;return t=setInterval(()=>{let e=document.querySelector("nextjs-portal");e&&e instanceof HTMLElement&&(e.style.display="none",clearInterval(t),t=null)},250),()=>{t&&clearInterval(t)}},[])},y=()=>{(0,a.useEffect)(()=>{let t=t=>{t.data?.type==="ALPHA_EDITOR_RELOAD_PAGE"&&window.location.reload()};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},[])},L=()=>(v(),w(),x(),y(),null)},4431:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c,metadata:()=>m});var o=n(7413);n(1135);var r=n(9253),i=n.n(r),a=n(378),l=n.n(a),s=n(4042),p=n(7297);let m={title:"Website",description:"Website description"};function c({children:t}){return(0,o.jsx)("html",{suppressHydrationWarning:!0,lang:"en",children:(0,o.jsxs)("body",{className:`${i().variable} ${l().variable} antialiased`,children:[(0,o.jsx)(p.AppInjection,{}),(0,o.jsx)(s.Analytics,{}),t]})})}},5216:(t,e,n)=>{Promise.resolve().then(n.t.bind(n,6444,23)),Promise.resolve().then(n.t.bind(n,6042,23)),Promise.resolve().then(n.t.bind(n,8170,23)),Promise.resolve().then(n.t.bind(n,9477,23)),Promise.resolve().then(n.t.bind(n,9345,23)),Promise.resolve().then(n.t.bind(n,2089,23)),Promise.resolve().then(n.t.bind(n,6577,23)),Promise.resolve().then(n.t.bind(n,1307,23))},5917:(t,e,n)=>{Promise.resolve().then(n.bind(n,6380)),Promise.resolve().then(n.bind(n,3467))},7297:(t,e,n)=>{"use strict";n.d(e,{AppInjection:()=>o});let o=(0,n(2907).registerClientReference)(function(){throw Error("Attempted to call AppInjection() from the server but AppInjection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/earthxadmin/Downloads/Emperia Travels-code-3/src/components/app-injection.tsx","AppInjection")},8240:(t,e,n)=>{Promise.resolve().then(n.t.bind(n,6346,23)),Promise.resolve().then(n.t.bind(n,7924,23)),Promise.resolve().then(n.t.bind(n,5656,23)),Promise.resolve().then(n.t.bind(n,99,23)),Promise.resolve().then(n.t.bind(n,8243,23)),Promise.resolve().then(n.t.bind(n,8827,23)),Promise.resolve().then(n.t.bind(n,2763,23)),Promise.resolve().then(n.t.bind(n,7173,23))}};