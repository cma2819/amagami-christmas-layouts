import{a,j as e,r as m}from"./index-SDWRxexv.js";import{G as f}from"./graphics-app-AgcM-Kq9.js";import{n as d,a as h,u as k}from"./nodecg-DXUEcFVH.js";import{l as v}from"./love-CvOTqbg-.js";import{l as j}from"./loves-ltWpJcos.js";import{G as n}from"./Grid2-yBUZ5xrS.js";const b=d.button`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(${v});
    background-size: contain;
    background-repeat: no-repeat;
    border: unset;
    color: white;
    aspect-ratio: 1;
    font-size: 48px;
    &:active {
        opacity: 0.5;
    }
`,g=({pk:s})=>{const c=h("loves"),t=k().find(o=>o.pk===s),i=t&&t.pk in c?c[t.pk]:0,[r,l]=a.useState();a.useEffect(()=>{l(i)},[i]);const u=j(nodecg);a.useEffect(()=>{const o=setTimeout(()=>{r&&u.update(s,r)},1e3);return()=>clearTimeout(o)},[r]);const x=()=>{l(o=>o??1)};return e.jsxs(n,{container:!0,alignContent:"center",sx:{fontSize:"36px"},children:[!t&&e.jsx(n,{size:12,children:`player ${s} is not found`}),t&&e.jsxs(e.Fragment,{children:[e.jsx(n,{size:12,sx:{color:"white",WebkitTextStroke:"1px black",textStroke:"1px black",textAlign:"center"},children:t.name}),e.jsx(n,{size:12,children:e.jsx(b,{type:"button",onClick:x,children:r})})]})]})},y=d.div`
  max-width: 320px;
`,w=new URLSearchParams(location.search),p=w.get("pk"),z=()=>e.jsx(f,{children:e.jsx(y,{children:p&&e.jsx(g,{pk:p})})});m(e.jsx(z,{}));
