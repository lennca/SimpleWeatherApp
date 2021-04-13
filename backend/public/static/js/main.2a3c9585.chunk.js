(this.webpackJsonpreact_weather_app=this.webpackJsonpreact_weather_app||[]).push([[0],{41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(15),s=r.n(c),i=r(3),l=r.n(i),o=r(5),d=r(4),u=r(16),h=r.n(u),j=r(0);var m=function(e){var t=e.unit,r=e.selectedUnit,a=e.radioChange,n=(e.type,"metric"===t?"Celsius":"Fahrenheit"),c="radio".concat(n);return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:c,id:c,value:n.toLowerCase(),checked:r===t,onChange:a}),Object(j.jsx)("label",{className:"form-check-label mr-3",htmlFor:c,children:n})]})};var p=function(e){var t=e.radioChange,r=e.selectedUnit,a=e.metric,n=e.imperial;return Object(j.jsxs)("div",{id:"temperature-format-option-component",className:"d-flex flex-column flex-md-row",children:[Object(j.jsx)("p",{className:"m-0 mr-3",children:"Display temperature in: "}),Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)(m,{unit:a,selectedUnit:r,radioChange:t}),Object(j.jsx)(m,{unit:n,selectedUnit:r,radioChange:t})]})]})};var b=function(e){var t=e.changeInput,r=e.fetchData;return Object(j.jsxs)("form",{id:"search-form-component",className:"form-inline my-3",children:[Object(j.jsx)("input",{className:"form-control-lg mr-2 input-search",type:"search",placeholder:"Search","aria-label":"Search",onChange:t}),Object(j.jsx)("button",{className:"btn btn-lg btn-success my-2 my-0",type:"submit",onClick:r,children:"Search"})]})};var x=function(e){var t=e.deg;return Object(j.jsx)("svg",{style:{transform:"rotate(".concat(t,"deg)")},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-up",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})})};var v=function(e){var t=e.data,r=e.selectedUnit,a="metric"===r?"m/s":"mph",n="metric"===r?"\u2103":"\u2109",c=t.name,s=t.main,i=s.temp,l=s.feels_like,o=t.weather[0],d=o.main,u=o.description,h=t.coord,m=h.lat,p=h.lon,b=t.wind,v=b.speed,f=b.deg;return Object(j.jsxs)("div",{id:"result-component",children:[Object(j.jsx)("h2",{children:c}),Object(j.jsxs)("h2",{id:"temperature",children:[" ",i," ",Object(j.jsx)("span",{id:"unicodeTag",children:n})," "]}),Object(j.jsxs)("h3",{children:["(Feels like: ",l,n,")"]}),Object(j.jsxs)("p",{children:[d,", ",u]}),Object(j.jsxs)("p",{children:["Lat: ",m," Lng: ",p]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:Object(j.jsx)(x,{deg:f})}),v," ",a]})]})};var f=function(){var e="metric",t="imperial",r=Object(a.useState)(""),n=Object(d.a)(r,2),c=n[0],s=n[1],i=Object(a.useState)(e),u=Object(d.a)(i,2),m=u[0],x=u[1],f=Object(a.useState)(void 0),O=Object(d.a)(f,2),g=O[0],w=O[1],k=Object(a.useState)(void 0),y=Object(d.a)(k,2),N=y[0],C=y[1];function S(e,t){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(l.a.mark((function e(t,r){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://localhost:3001/api/weather/".concat(t,"/").concat(r),e.next=3,h.a.get(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(){var r=Object(o.a)(l.a.mark((function r(a){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),!(void 0===c||null==c||c.trim().length<1)){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,r.next=6,Promise.all([S(c,e),S(c,t)]);case 6:if(200!==(n=r.sent)[0].status||200!==n[1].status){r.next=12;break}w(n[0].data),C(n[1].data),r.next=13;break;case 12:throw new Error("Status code indicate on invalid response!");case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(3),console.log("Error! Could not fetch.",r.t0.message);case 18:case"end":return r.stop()}}),r,null,[[3,15]])})));return function(e){return r.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"background_container",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section-search",children:[Object(j.jsx)(b,{changeInput:function(e){return s(e.target.value)},fetchData:_}),Object(j.jsx)(p,{metric:e,imperial:t,radioChange:function(r){return x("celsius"===r.target.value?e:t)},selectedUnit:m})]}),Object(j.jsx)("div",{className:"section-result",children:void 0!==g&&void 0!==N&&Object(j.jsx)(v,{data:m===e?g:N,selectedUnit:m})})]})})};r(41);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2a3c9585.chunk.js.map