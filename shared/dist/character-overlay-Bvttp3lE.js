import{R as c,a as v,j as i,r as T}from"./index-SDWRxexv.js";import{n as g,u as $,a as I}from"./nodecg-CZOjlZ1R.js";import{G as D}from"./graphics-app-D4mlZgjo.js";import{a as G}from"./assets-Dn5UneIV.js";import{_ as H,T as N,k as b,c as m}from"./TransitionGroupContext-BK6N86tB.js";import{p as P}from"./palette-B7LXsQOz.js";import{E as f,a as j,b as S,T as X}from"./Transition-DTPqqHka.js";var E,w;function A(e,t){return!(e===t||c.isValidElement(e)&&c.isValidElement(t)&&e.key!=null&&e.key===t.key)}var h={out:"out-in",in:"in-out"},y=function(t,r,n){return function(){var a;t.props[r]&&(a=t.props)[r].apply(a,arguments),n()}},F=(E={},E[h.out]=function(e){var t=e.current,r=e.changeState;return c.cloneElement(t,{in:!1,onExited:y(t,"onExited",function(){r(f,null)})})},E[h.in]=function(e){var t=e.current,r=e.changeState,n=e.children;return[t,c.cloneElement(n,{in:!0,onEntered:y(n,"onEntered",function(){r(f)})})]},E),O=(w={},w[h.out]=function(e){var t=e.children,r=e.changeState;return c.cloneElement(t,{in:!0,onEntered:y(t,"onEntered",function(){r(S,c.cloneElement(t,{in:!0}))})})},w[h.in]=function(e){var t=e.current,r=e.children,n=e.changeState;return[c.cloneElement(t,{in:!1,onExited:y(t,"onExited",function(){n(S,c.cloneElement(r,{in:!0}))})}),c.cloneElement(r,{in:!0})]},w),k=function(e){H(t,e);function t(){for(var n,a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return n=e.call.apply(e,[this].concat(u))||this,n.state={status:S,current:null},n.appeared=!1,n.changeState=function(p,d){d===void 0&&(d=n.state.current),n.setState({status:p,current:d})},n}var r=t.prototype;return r.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(a,u){return a.children==null?{current:null}:u.status===f&&a.mode===h.in?{status:f}:u.current&&A(u.current,a.children)?{status:j}:{current:c.cloneElement(a.children,{in:!0})}},r.render=function(){var a=this.props,u=a.children,o=a.mode,p=this.state,d=p.status,x=p.current,s={children:u,current:x,changeState:this.changeState,status:d},l;switch(d){case f:l=O[o](s);break;case j:l=F[o](s);break;case S:l=x}return c.createElement(N.Provider,{value:{isMounting:!this.appeared}},l)},t}(c.Component);k.propTypes={};k.defaultProps={mode:h.out};const L=b`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,M=b`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,z=g.div`
  width: 100%;
  height: 100%;
  ${e=>{switch(e.state){case"entering":return m`
      animation: ${L} 500ms ease-out 1 forwards;
    `;case"exiting":return m`
      animation: ${M} 500ms ease-out 1 forwards;
    `;default:return""}}}
`,C=b`
  0% {
  }
  100% {
    box-shadow: inset 0px 0px 32px;
  }
`,V=b`
  0% {
    box-shadow: inset 0px 0px 32px;
  }
  100% {
  }
`,q=g.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: ${e=>e.color};
  ${e=>{switch(e.state){case"entering":return m`
      animation: ${C} 500ms ease-out 1 forwards;
    `;case"exiting":return m`
      animation: ${V} 500ms ease-out 1 forwards;
    `;default:return m`
        box-shadow: inset 0px 0px 32px;
      `}}}
`,B=g.div`
    width: 100%;
    height: 100%;
    background-size: 150%;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: top;
    background-image: ${e=>e.background?`url(${e.background})`:"none"};
    filter: drop-shadow(0 0 24px #000);
`,J=()=>{const[e,t]=v.useState(),r=G(),n=$(),a=v.useCallback(s=>{var l;switch(s.type){case"all":return null;case"character":return s.character;case"solo":return((l=n.find(R=>R.pk===s.solo))==null?void 0:l.target)??null;default:return null}},[n]);v.useEffect(()=>{nodecg.Replicant("assets:stands").on("change",s=>{try{t(r.standImages(s))}catch{console.warn("Stands not initialized")}})},[]);const u=I("scene"),o=a(u),p=P.heroines[o??"none"],d=o&&e&&o!=="none"?e[o]:void 0,x=v.useRef(null);return i.jsx(k,{children:i.jsx(X,{addEndListener:(s,l)=>{s.addEventListener("transitionend",l,!1)},ref:x,timeout:1e3,unmountOnExit:!0,children:s=>i.jsxs(i.Fragment,{children:[i.jsx(z,{state:s,children:i.jsx(B,{background:d})}),i.jsx(q,{state:s,color:p})]})},o)})},K=g.div`
    position: absolute;
    width: 1920px;
    height: 1080px;
    display: grid;
    grid-template-columns: 1600px 320px;
    grid-template-rows: 900px 180px;
`,Q=g.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`,U=()=>i.jsx(D,{children:i.jsx(K,{children:i.jsx(Q,{children:i.jsx(J,{})})})});T(i.jsx(U,{}));
