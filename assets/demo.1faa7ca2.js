import{c as e}from"./mobile.0e81f60f.js";import{k as l,J as n,r as a,o as c,c as o,f as u,i as t}from"./vendor.6c8f51ae.js";import"./index.9c21e623.js";const{createDemo:d}=e("switch");var h=d({setup(){let{proxy:e}=n();const a=l(!0),c=l(!0);return{checked:a,checkedAsync:c,change:(l,n)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,n)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{c.value=l}),2e3)}}}});const s={class:"demo"},m=u("h2",null,"基础用法",-1),i=u("h2",null,"禁用状态",-1),r=u("h2",null,"change事件",-1),g=u("h2",null,"异步控制",-1),V=u("h2",null,"自定义颜色",-1),f=u("h2",null,"支持文字",-1);h.render=function(e,l,n,d,h,k){const p=a("nut-switch"),C=a("nut-cell");return c(),o("div",s,[m,u(C,null,{default:t((()=>[u(p,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),i,u(C,null,{default:t((()=>[u(p,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),r,u(C,null,{default:t((()=>[u(p,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),g,u(C,null,{default:t((()=>[u(p,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),V,u(C,null,{default:t((()=>[u(p,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),f,u(C,null,{default:t((()=>[u(p,{modelValue:e.checked,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])};export default h;
