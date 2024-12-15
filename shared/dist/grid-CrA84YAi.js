import{j as t}from"./index-SDWRxexv.js";import{n as o,u as d}from"./nodecg-CZOjlZ1R.js";import{p as g}from"./palette-B7LXsQOz.js";import{N as h}from"./index-Cl-QcJzg.js";const f=o.div`
    width: 100%;
    height: 100%;
    display: grid;
    /* justify-items: stretch;
    align-items: stretch; */
    column-count: 1;
    grid-template-rows: auto 1fr;
    /* background-color: ${r=>r.color}; */
`,m=o.div`
    grid-row: 1 / 2;
    border: 4px solid ${r=>r.color};
    border-bottom: none;
    /* background: ${r=>r.color}; */
    align-self: end;
    height: 64px;
`,p=o.div`
  font-size: 46px;
  font-weight: bold;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 100%;
`,u=o.div`
  grid-row: 2 / 3;
  /* background-color: rgba(0, 0, 0, 0.5); */
  border: 4px solid ${r=>r.color};
  border-top: none;
  /* aspect-ratio: 16 / 9; */
`,x=({player:r,for:a})=>{const e=g.heroines[r.target??"none"];return t.jsxs(f,{color:e,children:[t.jsx(m,{color:e,children:t.jsx(p,{children:t.jsx(h,{"hide-icon":a!=="all",player:r})})}),t.jsx(u,{color:e})]})},b=new URLSearchParams(location.search),j=b.has("small"),i=o.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
`,w=o(i)`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-gap: 4px;
`,v=o(i)`
    grid-template-columns: ${j?"1fr 1fr 1fr":"1fr 1fr"};
    grid-template-rows: repeat(auto-fit, 48%);
    align-content: center;
    grid-gap: 4px;
`,y=o.div`
  width: 100%;
  height: 100%;
`,F=r=>{const a=d(),e=r.for==="character"?v:w,s=n=>{if(r.for==="character"){const c=r.character!=="none"?r.character:null;return n.filter(l=>l.target===c)}return n};return t.jsx(e,{children:s(a).map(n=>t.jsx(y,{children:t.jsx(x,{for:r.for??"all",player:n})},n.pk))})};export{F as V};
