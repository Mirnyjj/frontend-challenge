(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4824:(e,t,n)=>{Promise.resolve().then(n.bind(n,7187)),Promise.resolve().then(n.t.bind(n,5047,23)),Promise.resolve().then(n.t.bind(n,8977,23))},8173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(306),o=n(5155),u=r._(n(2115)),l=n(180),i=n(1394),a=n(4116),s=n(4445),f=n(5353),c=n(2170),d=n(9544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}n(2363);let y=u.default.forwardRef(function(e,t){let n,r;let{href:l,as:y,children:b,prefetch:g=null,passHref:_,replace:m,shallow:P,scroll:v,onClick:j,onMouseEnter:E,onTouchStart:k,legacyBehavior:O=!1,...M}=e;n=b,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let C=u.default.useContext(i.AppRouterContext),w=!1!==g,x=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:I,as:T}=u.default.useMemo(()=>{let e=h(l);return{href:e,as:y?h(y):e}},[l,y]),A=u.default.useRef(I),N=u.default.useRef(T);O&&(r=u.default.Children.only(n));let S=O?r&&"object"==typeof r&&r.ref:t,[R,U,F]=(0,a.useIntersection)({rootMargin:"200px"}),L=u.default.useCallback(e=>{(N.current!==T||A.current!==I)&&(F(),N.current=T,A.current=I),R(e)},[T,I,F,R]),K=(0,f.useMergedRef)(L,S);u.default.useEffect(()=>{C&&U&&w&&p(C,I,{kind:x})},[T,I,U,w,C,x]);let q={ref:K,onClick(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,n,r,o,l,i){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,C,I,T,m,P,v)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),C&&w&&p(C,I,{kind:x})},onTouchStart:function(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),C&&w&&p(C,I,{kind:x})}};return(0,c.isAbsoluteUrl)(T)?q.href=T:O&&!_&&("a"!==r.type||"href"in r.props)||(q.href=(0,d.addBasePath)(T)),O?u.default.cloneElement(r,q):(0,o.jsx)("a",{...M,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(2115),o=n(8571),u="function"==typeof IntersectionObserver,l=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,s=a||!u,[f,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(2115);function o(e,t){let n=(0,r.useRef)(()=>{}),o=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),o.current()):(n.current=u(e,r),o.current=u(t,r))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return i},urlObjectKeys:function(){return l}});let r=n(9955)._(n(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",l=e.pathname||"",i=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),a&&"object"==typeof a&&(a=String(r.urlQueryToSearchParams(a)));let f=e.search||a&&"?"+a||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),i&&"#"!==i[0]&&(i="#"+i),f&&"?"!==f[0]&&(f="?"+f),""+u+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+i}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return u(e)}},4156:(e,t)=>{"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return g},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return a},getLocationOrigin:function(){return l},getURL:function(){return i},isAbsoluteUrl:function(){return u},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return m}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){let{href:e}=window.location,t=l();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function m(e){return JSON.stringify({message:e.message,stack:e.stack})}},7187:(e,t,n)=>{"use strict";n.d(t,{LinkPage:()=>s});var r=n(5155),o=n(8173),u=n.n(o),l=n(2913),i=n.n(l),a=n(6658);let s=e=>{let{children:t,url:n}=e,o=(0,a.usePathname)();return(0,r.jsx)(u(),{href:n,className:o===n?i().linkActive:i().link,children:t})}},8977:e=>{e.exports={header:"header_header__vSYk7",container:"header_container__pC6pv"}},2913:e=>{e.exports={linkActive:"linkPage_linkActive__8HT7y",link:"linkPage_link__NMhWi"}},5047:e=>{e.exports={body:"styles_body__3oJKW",container:"styles_container__T_VWp",main:"styles_main__8J1F0",homePage:"styles_homePage__3sGHe",ul:"styles_ul__ZTqje",title:"styles_title__jbrtA"}}},e=>{var t=t=>e(e.s=t);e.O(0,[780,441,517,358],()=>t(4824)),_N_E=e.O()}]);