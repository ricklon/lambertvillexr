var l=Object.defineProperty;var p=(a,t,s)=>t in a?l(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var n=(a,t,s)=>(p(a,typeof t!="symbol"?t+"":t,s),s);import{B as u,c as f}from"./component.decorator.a66a1cbe.js";import"./aframe-master.5ce7d00f.js";import"./test-helpers.473cda21.js";import"./change-detector.15c8fb51.js";var m=Object.defineProperty,A=Object.getOwnPropertyDescriptor,E=(a,t,s,e)=>{for(var r=e>1?void 0:e?A(t,s):t,i=a.length-1,d;i>=0;i--)(d=a[i])&&(r=(e?d(t,s,r):d(r))||r);return e&&r&&m(t,s,r),r};const o=AFRAME.THREE;var c;let h=(c=class extends u{constructor(){super(...arguments);n(this,"changeDetector")}init(){this.el.setAttribute("change-detector__render-order",{recursive:!0,object3DSet:!0}),this.el.sceneEl&&(this.el.sceneEl.renderer.sortObjects=!0,this.changeDetector=this.el.getAttribute("change-detector__render-order"),this.changeDetector&&this.el.addEventListener("detectorchanged__render-order",()=>{this.updateAllElem()}))}update(){this.updateAllElem()}updateAllElem(){const t=e=>{if(e.relativeRenderOrder?e.renderOrder=this.data.order+e.relativeRenderOrder:e.renderOrder=this.data.order,e instanceof o.Mesh)if(e.material instanceof o.Material)e.material.depthTest=this.data.depthTest;else for(const r of e.material)r.depthTest=this.data.depthTest},s=e=>{if(e.object3D)for(const r in e.object3DMap){const i=e.object3DMap[r];t(i)}e.getAttribute&&e.getAttribute("material")&&e.setAttribute("material","depthTest",this.data.depthTest),Array.from(e.childNodes).forEach(r=>{const i=r;i!=this.el&&i.getAttribute&&i.hasAttribute("render-order")||s(i)})};s(this.el)}},n(c,"schema",{order:{default:0},depthTest:{default:!0}}),c);h=E([f("render-order")],h);export{h as RenderOrderComopnent};
