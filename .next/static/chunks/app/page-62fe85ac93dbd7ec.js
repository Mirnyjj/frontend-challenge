(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6263:(e,t,a)=>{Promise.resolve().then(a.bind(a,3558))},3558:(e,t,a)=>{"use strict";a.d(t,{Card:()=>n});var i=a(5155),r=a(5565),s=a(7063),l=a.n(s),C=a(2115);let n=e=>{let{url:t,id:a,onRemove:s}=e,n="favorite-cat",[o,d]=(0,C.useState)(!1);(0,C.useEffect)(()=>{d(-1!==JSON.parse(localStorage.getItem(n)||"[]").findIndex(e=>e.idFavoriteCat===a))},[a]);let h=(e,t)=>{let a=JSON.parse(localStorage.getItem(n)||"[]");-1!==a.findIndex(e=>e.idFavoriteCat===t)?(a=a.filter(e=>e.idFavoriteCat!==t),s&&s(t)):a.push({urlFavoriteCat:e,idFavoriteCat:t}),localStorage.setItem(n,JSON.stringify(a)),d(!o)};return(0,i.jsxs)("div",{className:l().imageContainer,children:[(0,i.jsx)(r.default,{alt:"cat",src:t,width:225,height:225,unoptimized:!0,priority:!0}),(0,i.jsx)("button",{className:l().heart,onClick:()=>h(t,a),children:(0,i.jsxs)("svg",{width:"40",height:"37",viewBox:"0 0 40 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z",fill:"rgba(242, 78, 30, 1)"}),(0,i.jsx)("path",{d:"M20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z",fill:o?"rgba(242, 78, 30, 1)":""})]})})]})}},7063:e=>{e.exports={imageContainer:"card_imageContainer__4lZWJ",heart:"card_heart__PAnY3"}}},e=>{var t=t=>e(e.s=t);e.O(0,[104,565,441,517,358],()=>t(6263)),_N_E=e.O()}]);