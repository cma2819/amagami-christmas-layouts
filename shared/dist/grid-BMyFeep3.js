import{j as t}from"./index-SDWRxexv.js";import{n as o,u as l}from"./nodecg-DXUEcFVH.js";import{p as d}from"./palette-B7LXsQOz.js";import{N as g}from"./index-CmIo2L1r.js";const f=o.div`
    width: 100%;
    height: 100%;
    display: grid;
    /* justify-items: stretch;
    align-items: stretch; */
    column-count: 1;
    grid-template-rows: auto 1fr;
    /* background-color: ${r=>r.color}; */
`,h=o.div`
    grid-row: 1 / 2;
    border: 4px solid ${r=>r.color};
    border-bottom: none;
    /* background: ${r=>r.color}; */
    align-self: end;
    height: 64px;
`,m=o.div`
  font-size: 46px;
  font-weight: bold;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 100%;
`,p=o.div`
  grid-row: 2 / 3;
  /* background-color: rgba(0, 0, 0, 0.5); */
  border: 4px solid ${r=>r.color};
  border-top: none;
  /* aspect-ratio: 16 / 9; */
`,u=({player:r,for:a})=>{const e=d.heroines[r.target??"none"];return t.jsxs(f,{color:e,children:[t.jsx(h,{color:e,children:t.jsx(m,{children:t.jsx(g,{"hide-icon":a!=="all",player:r})})}),t.jsx(p,{color:e})]})},x=new URLSearchParams(location.search),b=x.has("small"),n=o.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
`,j=o(n)`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-gap: 4px;
`,w=o(n)`
    grid-template-columns: ${b?"1fr 1fr 1fr":"1fr 1fr"};
    grid-template-rows: repeat(auto-fit, 48%);
    align-content: center;
    grid-gap: 4px;
`,v=o.div`
  width: 100%;
  height: 100%;
`,V=r=>{const a=l(),e=r.for==="character"?w:j,s=i=>r.for==="character"?i.filter(c=>c.target===r.character):i;return t.jsx(e,{children:s(a).map(i=>t.jsx(v,{children:t.jsx(u,{for:r.for??"all",player:i})},i.pk))})};export{V};
