import{_ as V}from"./ESG-img-27a455e3.js";import{d as k,a as C,r as S,c as I,b as _,e as t,f as e,g as n,p as w,h as E,o as U,i as l,l as B,m as N,_ as F}from"./index-055e4384.js";const v=r=>(w("data-v-93f18d32"),r=r(),E(),r),G={class:"internationnal"},R=v(()=>_("img",{class:"headimg",src:V,alt:""},null,-1)),T={class:"centerbody"},j={class:"wrapper"},q=v(()=>_("div",{class:"el-upload__tip text-red"}," 仅上传一个文件，再次上传会覆盖前一个文件 ",-1)),z=k({__name:"transaction",setup(r){const s=C({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),h=()=>{B.push("/esgReport")},u=S(),p=b=>{u.value.clearFiles();const a=b[0];a.uid=N(),u.value.handleStart(a)},i=()=>{u.value.submit()};return(b,a)=>{const y=n("el-breadcrumb-item"),g=n("el-breadcrumb"),m=n("el-input"),d=n("el-form-item"),o=n("el-button"),f=n("el-upload"),x=n("el-form");return U(),I("div",G,[R,_("div",T,[t(g,{separator:"/"},{default:e(()=>[t(y,{to:{path:"/"}},{default:e(()=>[l("首页")]),_:1}),t(y,null,{default:e(()=>[l("银行业务")]),_:1})]),_:1}),_("div",j,[t(x,{model:s,"label-width":"120px"},{default:e(()=>[t(d,{label:"公司名称"},{default:e(()=>[t(m,{modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=c=>s.name=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"社会信用代码"},{default:e(()=>[t(m,{modelValue:s.name,"onUpdate:modelValue":a[1]||(a[1]=c=>s.name=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"法定代表人"},{default:e(()=>[t(m,{modelValue:s.name,"onUpdate:modelValue":a[2]||(a[2]=c=>s.name=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"ESG报告"},{default:e(()=>[t(f,{ref_key:"upload",ref:u,class:"upload-demo",action:"http://localhost:3000/api",limit:1,"on-exceed":p,"auto-upload":!1},{trigger:e(()=>[t(o,{type:"primary"},{default:e(()=>[l("select file")]),_:1})]),tip:e(()=>[]),default:e(()=>[t(o,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[l(" upload to server ")]),_:1})]),_:1},512)]),_:1}),t(d,{label:"ESG新闻"},{default:e(()=>[t(f,{ref_key:"upload",ref:u,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":p,"auto-upload":!1},{trigger:e(()=>[t(o,{type:"primary"},{default:e(()=>[l("select file")]),_:1})]),tip:e(()=>[]),default:e(()=>[t(o,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[l(" upload to server ")]),_:1})]),_:1},512)]),_:1}),t(d,{label:"公司发展战略"},{default:e(()=>[t(f,{ref_key:"upload",ref:u,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":p,"auto-upload":!1},{trigger:e(()=>[t(o,{type:"primary"},{default:e(()=>[l("select file")]),_:1})]),tip:e(()=>[q]),default:e(()=>[t(o,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[l(" upload to server ")]),_:1})]),_:1},512)]),_:1}),t(d,null,{default:e(()=>[t(o,{type:"primary",onClick:h},{default:e(()=>[l("Create")]),_:1}),t(o,null,{default:e(()=>[l("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])])])])}}});const H=F(z,[["__scopeId","data-v-93f18d32"]]);export{H as default};