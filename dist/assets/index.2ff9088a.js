var B=Object.defineProperty,W=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var k=(c,a,l)=>a in c?B(c,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[a]=l,D=(c,a)=>{for(var l in a||(a={}))E.call(a,l)&&k(c,l,a[l]);if(V)for(var l of V(a))M.call(a,l)&&k(c,l,a[l]);return c},O=(c,a)=>W(c,P(a));var g=(c,a,l)=>(k(c,typeof a!="symbol"?a+"":a,l),l);import{j as T,r as F,R as G,a as H}from"./vendor.95703a94.js";const _=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}};_();const f=c=>+(Math.round(c+"e+2")+"e-2"),J=c=>{let{items:a,lot:{input:{tramiteImportacion:l,fleteReal:r,agenteAduanero:n,logisticaInterna:i,ivaOrigen:d,fleteOrigen:x,comisionBancaria:b,fleteImpuestos:m},output:{ivaCourier:N,totalLogisticaInt:h,fodinfa:v,arancel:o,ivaAduana:w,totalAduana:S,isd:C,totalFOBItems:y,totalCIFItems:I}},pesoTotal:u}=c;N=0,h=0,v=0,o=0,w=0,S=0,C=0,y=0,I=0,a.forEach(s=>{s.pesoItem=s.cantidad*s.peso,s.itemEXWValue=s.cantidad*s.precioUnitario*(100+d)/100}),a.forEach(s=>{const A=s.pesoItem/u;s.itemFOBValue=s.itemEXWValue+x*A,s.itemISD=s.itemFOBValue*.05,s.itemCIFValue=(s.itemFOBValue+m*A)*1.01,s.itemFODINFA=s.itemCIFValue*.005,s.itemArancel=s.itemCIFValue*s.arancel/100,C+=s.itemISD,v+=s.itemFODINFA,o+=s.itemArancel,y+=s.itemFOBValue,I+=s.itemCIFValue});let p=l+r+n;return a.forEach(s=>{const A=s.pesoItem/u,R=s.itemFOBValue/y,U=s.itemFOBValue+s.itemFODINFA+s.itemArancel+s.itemISD+p*A+b*R,j=U/((100-s.margen)/100)-U,L=j+U+i/1.12*A;console.log(U),console.log(j),console.log(L),s.costoTotalUnitario=f(U),s.gananciaUnitaria=f(j/s.cantidad),s.pvpUnitario=f(L/s.cantidad)}),w=(I+v+o)*.12,S=w+v+o,N=p*.12,h=p+N,N=f(N),h=f(h),v=f(v),o=f(o),w=f(w),S=f(S),C=f(C),u=f(u),y=f(y),I=f(I),{items:a,lot:{input:{tramiteImportacion:l,fleteReal:r,agenteAduanero:n,logisticaInterna:i,ivaOrigen:d,fleteOrigen:x,comisionBancaria:b,fleteImpuestos:m},output:{ivaCourier:N,totalLogisticaInt:h,fodinfa:v,arancel:o,ivaAduana:w,totalAduana:S,isd:C,pesoTotal:u,totalCIFItems:I,totalFOBItems:y}}}},e=T.exports.jsx,t=T.exports.jsxs,X=c=>{const{item:{index:a,descripcion:l,cantidad:r,peso:n,precioUnitario:i,arancel:d,margen:x,costoTotalUnitario:b,gananciaUnitaria:m,pvpUnitario:N},onUpdateArticle:h,onDeleteArticle:v}=c;return t("div",{className:"bg-slate-300 flex items-center text-center",children:[e("label",{className:"border w-12",children:a+1}),e("input",{className:"pl-2 border w-1/4",value:l,onChange:o=>h(o,a),name:"descripcion",placeholder:"Ingrese descripcion",type:"text"}),e("input",{className:"pl-2 border w-1/12",value:r,onChange:o=>h(o,a),onWheel:o=>o.target.blur(),name:"cantidad",placeholder:"cantidad",type:"number",min:"1"}),e("input",{className:"pl-2 border w-1/12",value:n,onChange:o=>h(o,a),onWheel:o=>o.target.blur(),name:"peso",placeholder:"peso",type:"number",min:"0"}),e("input",{className:"pl-2 border w-1/12",value:i,onChange:o=>h(o,a),onWheel:o=>o.target.blur(),name:"precioUnitario",placeholder:"precioUnitario",type:"number",min:"0"}),e("input",{className:"pl-2 border w-1/12",value:d,onChange:o=>h(o,a),onWheel:o=>o.target.blur(),name:"arancel",placeholder:"arancel",type:"number",min:"0"}),e("input",{className:"pl-2 border w-1/12",value:x,onChange:o=>h(o,a),onWheel:o=>o.target.blur(),name:"margen",placeholder:"margen",type:"number",min:"0"}),e("label",{className:"border w-1/12",children:b}),e("label",{className:"border w-1/12",children:m}),e("label",{className:"border w-1/12",children:N}),t("button",{className:"border w-1/12 flex items-center justify-center gap-1 hover:text-red-600",onClick:()=>v(a),children:[e("span",{className:"material-icons text-base",children:"delete"}),e("span",{children:"Borrar"})]})]})};class q extends F.exports.Component{render(){const{items:a,onUpdateArticle:l,onDeleteArticle:r,onAddArticle:n}=this.props;return t("div",{className:"border rounded-lg w-full p-6 ",children:[e("h2",{className:"text-lg font-bold mb-4",children:"Lista de Articulos"}),t("div",{className:"flex text-sm items-center bg-blue-800 text-center rounded text-white",children:[e("label",{className:"border-r w-12",children:"No."}),e("label",{className:"border-r w-1/4",children:"Descripcion"}),e("label",{className:"border-r w-1/12",children:"Cant."}),t("label",{className:"border-r w-1/12",children:["Peso Unitario ",e("br",{})," [lb]"]}),t("label",{className:"border-r w-1/12",children:["Precio Unitario ",e("br",{})," [USD]"]}),t("label",{className:"border-r w-1/12",children:["Arancel ",e("br",{})," [%]"]}),t("label",{className:"border-r w-1/12",children:["Margen ",e("br",{})," [%]"]}),t("label",{className:"border-r w-1/12",children:["Costo Total ",e("br",{}),"[USD]"]}),t("label",{className:"border-r w-1/12",children:["Ganancia Unitaria ",e("br",{}),"[USD]"]}),t("label",{className:"border-r w-1/12",children:["PVP Unitario ",e("br",{}),"[USD]"]}),t("button",{className:"w-1/12 flex items-center justify-center hover:text-green-500 gap-1",onClick:n,children:[e("span",{children:"Agregar Item"}),e("span",{className:"material-icons text-lg",children:"add_circle"})]})]}),e("div",{className:"rounded",children:a.map(i=>e(X,{item:i,onDeleteArticle:r,onUpdateArticle:l},i.index))})]})}}const K=c=>{const{onOpenSaving:a,logo:l,onReset:r,onCalculate:n,onOpenRetrieving:i}=c;return t("header",{className:"fixed top-0 left-0 bg-slate-50 w-screen px-[10%] py-4 shadow-md flex justify-between  items-center",children:[e("img",{className:"h-10",src:l,alt:"SCIENTECH-logo"}),t("div",{className:"flex gap-4",children:[e("button",{className:"bg-sky-500 px-4 py-2 rounded text-white border  hover:bg-green-600 hover:text-white",onClick:n,children:"Calcular"}),e("button",{className:"bg-sky-500 px-4 py-2 rounded text-white border border-sky-500 hover:bg-slate-50 hover:text-black",onClick:a,children:"Guardar"}),e("button",{className:"bg-sky-500 px-4 py-2 rounded text-white border border-sky-500 hover:bg-slate-50 hover:text-black",onClick:i,children:"Recuperar"}),e("button",{className:"bg-sky-500 px-4 py-2 rounded text-white border  hover:bg-red-600 hover:text-white",onClick:r,children:"Borrar Formulario"})]})]})};class z extends F.exports.Component{render(){const{lot:{input:{tramiteImportacion:a,fleteReal:l,agenteAduanero:r,logisticaInterna:n,ivaOrigen:i,fleteOrigen:d,comisionBancaria:x,fleteImpuestos:b},output:{ivaCourier:m,totalLogisticaInt:N,fodinfa:h,arancel:v,ivaAduana:o,totalAduana:w,isd:S,totalFOBItems:C,totalCIFItems:y}},pesoTotal:I,onChangeLot:u}=this.props;return t("div",{className:"border rounded-lg w-full p-6",children:[e("h2",{className:"text-lg font-bold mb-4",children:"Costos por Lote"}),t("div",{className:"flex justify-around flex-wrap gap-6",children:[t("div",{className:"border rounded",children:[e("h3",{className:"text-xl text-center font-semibold",children:"Logistica Internacional"}),t("div",{className:"flex flex-col px-4 py-2",children:[t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Peso total [lb]:"}),e("label",{className:"bg-slate-300 w-20 border pl-2",children:I})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Flete para impuestos [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"fleteImpuestos",value:b,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Valor de flete real [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"fleteReal",value:l,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Tramite de importacion [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"tramiteImportacion",value:a,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Agente aduanero [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"agenteAduanero",value:r,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"IVA Courier [USD]:"}),e("label",{className:"bg-slate-300 w-20 border pl-2",children:m})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56 font-semibold",children:"Total Pago Courier [USD]:"}),e("label",{className:"bg-slate-300 w-20 border font-semibold pl-2",children:N})]})]})]}),t("div",{className:"border rounded",children:[e("h3",{className:"text-xl text-center font-semibold",children:"Impuestos Aduaneros"}),t("div",{className:"flex flex-col px-4 py-2",children:[t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56 font-semibold",children:"Total CIF [USD]:"}),e("label",{className:"bg-slate-300 w-20 font-semibold border pl-2",children:y})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"FODINFA [USD]:"}),e("label",{className:"bg-slate-300 w-20 border pl-2",children:h})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Aranceles [USD]:"}),e("label",{className:"bg-slate-300 w-20 border pl-2",children:v})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"IVA [USD]:"}),e("label",{className:"bg-slate-300 w-20 border pl-2",children:o})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56 font-semibold",children:"Total Pago Aduana [USD]:"}),e("label",{className:"bg-slate-300 w-20 font-semibold border pl-2",children:w})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56 font-semibold",children:"ISD [USD]:"}),e("label",{className:"bg-slate-300 w-20 font-semibold border pl-2",children:S})]})]})]}),t("div",{className:"flex flex-col gap-6",children:[t("div",{className:"border rounded",children:[e("h3",{className:"text-xl text-center font-semibold",children:"Valores adicionales en origen"}),t("div",{className:"flex flex-col px-4 py-2",children:[t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"IVA origen [%]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"ivaOrigen",value:i,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Flete en origen [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"fleteOrigen",value:d,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56 font-semibold",children:"Total FOB [USD]:"}),e("label",{className:"bg-slate-300 w-20 font-semibold border pl-2",children:C})]})]})]}),t("div",{className:"border rounded",children:[e("h3",{className:"text-xl text-center font-semibold",children:"Otros Valores Nacionales"}),t("div",{className:"flex flex-col px-4 py-2",children:[t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Valor flete nacional [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"logisticaInterna",value:n,type:"number",min:"0"})]}),t("div",{className:"flex items-center justify-between gap-4",children:[e("p",{className:"w-56",children:"Tarifas bancarias [USD]:"}),e("input",{className:"w-20 border pl-2",onChange:u,onWheel:p=>p.target.blur(),name:"comisionBancaria",value:x,type:"number",min:"0"})]})]})]})]})]})]})}}var Q="/assets/logo.946420ca.png";const Y=c=>{const[a,l]=F.exports.useState(""),[r,n]=F.exports.useState(""),i=()=>{a&&r?(l(""),n(""),b(a,r)):console.log("click")},{onCloseSaving:d,saving:x,onSave:b}=c;return x&&e("div",{className:"fixed top-0 left-0 h-screen w-full bg-black/40 flex justify-center items-center",children:t("div",{className:"w-2/5 bg-slate-50 p-10",children:[e("h3",{className:"text-lg",children:"Guardar Calculos?"}),t("div",{className:"flex flex-col gap-4 mt-6",children:[e("input",{className:"px-4 rounded border hover:shadow",name:"proveedor",type:"text",placeholder:"Ingrese un proveedor:",value:a,onChange:m=>{l(m.target.value)}}),e("input",{className:"px-4 rounded border hover:shadow",name:"grupo",type:"text",placeholder:"Ingrese una descripcion:",value:r,onChange:m=>{n(m.target.value)}})]}),t("div",{className:"mt-6 flex justify-end items-center gap-6",children:[t("button",{className:"border text-white px-4 py-2 rounded bg-green-600 flex items-center gap-2",onClick:i,children:[e("span",{children:"Confirmar"}),e("span",{className:"material-icons text-lg",children:"save_as"})]}),t("button",{className:"border text-white px-4 py-2 rounded bg-red-600 flex items-center gap-2",onClick:d,children:[e("span",{children:"Cancelar"}),e("span",{className:"material-icons text-lg",children:"cancel"})]})]})]})})},Z=c=>{const{item:{index:a,date:l,proveedor:r,descripcion:n},onSelectItem:i}=c;var d={weekday:"short",year:"numeric",month:"short",day:"numeric"},x={hour:"numeric",minute:"numeric",second:"numeric"};let b=new Date(l),m=new Intl.DateTimeFormat("es-ES",d).format(b),N=new Intl.DateTimeFormat("es-ES",x).format(b);return t("div",{className:"flex",children:[e("label",{className:"border py-1 px-2 w-12 text-center",children:a+1}),e("label",{className:"border py-1 px-2 w-36",children:m}),e("label",{className:"border py-1 px-2 w-20",children:N}),e("label",{className:"border py-1 px-2 w-60",children:r}),e("label",{className:"border py-1 px-2 w-80",children:n}),t("button",{className:"w-24 border flex items-center justify-center gap-1 hover:bg-sky-500 hover:text-white",onClick:()=>i(a),children:[e("span",{children:"Mostrar"}),e("span",{className:"material-icons text-base",children:"file_download"})]})]})},$=c=>{const{retrieving:a,onCloseRetrieving:l,onFetchData:r,onSelectItem:n}=c,i=a&&r();return a&&e("div",{className:"fixed top-0 left-0 h-screen w-full bg-black/40 flex justify-center items-center",children:t("div",{className:"bg-slate-50 p-10",children:[e("h3",{className:"text-lg",children:"Recuperar Informacion"}),t("div",{className:"mt-4",children:[t("div",{className:"flex bg-blue-800 rounded text-center text-white text-sm mr-4",children:[e("label",{className:"border-r py-1 px-2 w-12",children:"No."}),e("label",{className:"border-r py-1 px-2 w-36",children:"Fecha"}),e("label",{className:"border-r py-1 px-2 w-20",children:"Hora"}),e("label",{className:"border-r py-1 px-2 w-60",children:"Proveedor"}),e("label",{className:"border-r py-1 px-2 w-80",children:"Descripcion"}),e("label",{className:"py-1 px-2 w-24",children:"Seleccionar"})]}),e("div",{className:"overflow-y-scroll max-h-96",children:i.map(d=>e(Z,{item:d,onSelectItem:n},d.index))})]}),e("div",{className:"mt-6 flex justify-end items-center gap-6",children:t("button",{className:"border text-white px-4 py-2 rounded bg-red-600 flex items-center gap-2",onClick:l,children:[e("span",{children:"Cancelar"}),e("span",{className:"material-icons text-lg",children:"cancel"})]})})]})})};class ee extends F.exports.Component{constructor(){super(...arguments);g(this,"state",{saving:!1,retrieving:!1,pesoTotal:0,items:[],lot:{input:{tramiteImportacion:0,fleteReal:0,agenteAduanero:0,logisticaInterna:0,ivaOrigen:0,fleteOrigen:0,comisionBancaria:0,fleteImpuestos:0},output:{ivaCourier:0,totalLogisticaInt:0,fodinfa:0,arancel:0,ivaAduana:0,totalAduana:0,isd:0,totalFOBItems:0,totalCIFItems:0}}});g(this,"handleReset",()=>{this.setState({items:[],lot:{input:{tramiteImportacion:0,fleteReal:0,agenteAduanero:0,logisticaInterna:0,ivaOrigen:0,fleteOrigen:0,comisionBancaria:0,fleteImpuestos:0},output:{ivaCourier:0,totalLogisticaInt:0,fodinfa:0,arancel:0,ivaAduana:0,totalAduana:0,isd:0,totalFOBItems:0,totalCIFItems:0}},pesoTotal:0})});g(this,"reIndex",a=>a.map((l,r)=>(l.index=r,l)));g(this,"handleAddArticle",()=>{let a=[...this.state.items];const l={index:a.length,descripcion:"",cantidad:1,peso:1,precioUnitario:1,arancel:0,margen:0,costoTotalUnitario:0,gananciaUnitaria:0,pvpUnitario:0};a.push(l),a=this.reIndex(a),this.setState({items:a})});g(this,"handleUpdateArticle",(a,l)=>{this.setState({items:this.state.items.map(r=>r.index===l?O(D({},r),{[a.target.name]:a.target.name==="descripcion"?a.target.value:parseFloat(a.target.value)}):r)})});g(this,"handleDeleteArticle",a=>{let l=this.state.items.filter(r=>r.index!==a);l=this.reIndex(l),this.setState({items:l})});g(this,"handleChangeLot",a=>{this.setState({lot:O(D({},this.state.lot),{input:O(D({},this.state.lot.input),{[a.target.name]:parseFloat(a.target.value)})})})});g(this,"calculateValues",()=>{const a=J(this.state);this.setState(D({},a))});g(this,"componentDidUpdate",(a,l)=>{l.items!==this.state.items&&this.setState({pesoTotal:this.state.items.map(r=>r.peso*r.cantidad).reduce((r,n)=>r+n,0)})});g(this,"handleSave",(a,l)=>{this.setState({saving:!1});const{items:r,lot:{input:n}}=this.state;if(r.length===0){alert("Ingrese articulos");return}const i=this.getLocalStorage();let d=[];r.forEach(m=>{d.push({index:m.index,descripcion:m.descripcion,cantidad:m.cantidad,peso:m.peso,precioUnitario:m.precioUnitario,arancel:m.arancel,margen:m.margen})});const x={index:i.length,date:new Date,proveedor:a,descripcion:l,items:d,lotInput:n},b=[...i,x];localStorage.setItem("data",JSON.stringify(b)),this.handleReset()});g(this,"getLocalStorage",()=>{const a=JSON.parse(localStorage.getItem("data"));return a||[]});g(this,"handleSelectItem",a=>{this.setState({retrieving:!1});const l=this.getLocalStorage()[a];this.setState({items:l.items,lot:{input:l.lotInput,output:{ivaCourier:0,totalLogisticaInt:0,fodinfa:0,arancel:0,ivaAduana:0,totalAduana:0,isd:0,totalFOBItems:0,totalCIFItems:0}}})})}render(){return t("div",{className:"bg-slate-50",children:[e(K,{onOpenSaving:()=>{this.setState({saving:!0})},onOpenRetrieving:()=>{this.setState({retrieving:!0})},logo:Q,onReset:this.handleReset,onCalculate:this.calculateValues}),t("main",{className:"px-[10%] flex flex-col gap-6 pt-24 h-screen",children:[e(z,{lot:this.state.lot,pesoTotal:this.state.pesoTotal,onChangeLot:this.handleChangeLot}),e(q,{items:this.state.items,onUpdateArticle:this.handleUpdateArticle,onDeleteArticle:this.handleDeleteArticle,onAddArticle:this.handleAddArticle})]}),e(Y,{onSave:this.handleSave,onCloseSaving:()=>{this.setState({saving:!1})},saving:this.state.saving}),e($,{onCloseRetrieving:()=>{this.setState({retrieving:!1})},retrieving:this.state.retrieving,onFetchData:this.getLocalStorage,onSelectItem:this.handleSelectItem})]})}}G.render(e(H.StrictMode,{children:e(ee,{})}),document.getElementById("root"));
