import{r as i,j as t}from"./index-SDWRxexv.js";import{G as a}from"./graphics-app-D4mlZgjo.js";import{n as s,u as n}from"./nodecg-CZOjlZ1R.js";import{N as c}from"./index-Cl-QcJzg.js";import"./assets-Dn5UneIV.js";import"./love-CvOTqbg-.js";const d=s.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(1600px - 64px);
    height: calc(960px - 64px);
    display: grid;
    grid-template-rows: auto 720px;
    grid-template-columns: 1280px;
    align-items: stretch;
    padding: 64px;
`,l=s.div`
  font-size: 64px;
  font-weight: bold;
  height: 100%;
`,m=s.div`
  grid-row: 2 / 3;
  aspect-ratio: 16 / 9;
`,x=new URLSearchParams(location.search),r=x.get("pk"),h=({pk:o})=>{const e=n().find(p=>p.pk===o);return t.jsxs(d,{children:[t.jsx(l,{children:e&&t.jsx(c,{"hide-icon":!0,player:e})}),t.jsx(m,{})]})},g=()=>t.jsx(a,{children:r&&t.jsx(h,{pk:r})});i(t.jsx(g,{}));
