import{j as t,a as m}from"./index-SDWRxexv.js";import{n as o,a}from"./nodecg-CZOjlZ1R.js";import{a as d}from"./assets-Dn5UneIV.js";import{l as g}from"./love-CvOTqbg-.js";const l=o.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
    background-image: url(${g});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 65%;
    color: #ffffff;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
    min-width: 3rem;
`,x=({pk:e})=>{const n=a("loves");return t.jsx(l,{children:e in n?n[e]:0})},f=o.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    align-items: center;
`,p=o.img`
  max-height: 92%;
  max-width: 100%;
  object-fit: contain;
`,h=o.div`
    color: #ffffff;
    -webkit-text-stroke: 2px black;
    text-stroke: 2px black;
    text-align: center;
`,u=o.div`
  height: 100%;
`,I=({player:e,"hide-icon":n})=>{const s=a("assets:icons"),c=d(),i=m.useMemo(()=>c.iconImages(s),[s])[e.target??"none"],r=i&&!n;return t.jsxs(f,{children:[r&&t.jsx(p,{src:i}),!r&&t.jsx("div",{}),t.jsx(h,{children:e.name}),t.jsx(u,{children:t.jsx(x,{pk:e.pk})})]})};export{I as N};
