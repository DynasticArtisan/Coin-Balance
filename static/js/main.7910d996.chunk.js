(this["webpackJsonpcoin-balance"]=this["webpackJsonpcoin-balance"]||[]).push([[0],{199:function(e,t,n){},201:function(e,t,n){},229:function(e,t){},231:function(e,t){},240:function(e,t){},242:function(e,t){},267:function(e,t){},269:function(e,t){},270:function(e,t){},275:function(e,t){},277:function(e,t){},283:function(e,t){},285:function(e,t){},304:function(e,t){},316:function(e,t){},319:function(e,t){},345:function(e,t){},445:function(e,t,n){"use strict";n.r(t);var c=n(14),a=n.n(c),s=n(191),r=n.n(s),i=(n(199),n(107)),l=n.n(i),o=n(194),u=n(192),j=n(32),d=(n(201),n(193)),b=n(3),f=n(209),O=[{label:"Coin",key:"coin"},{label:"Address",key:"address"},{label:"Balance",key:"balance"}];var h=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],h=r[1],x=Object(c.useState)(!1),p=Object(j.a)(x,2),v=p[0],m=p[1],k=Object(c.useState)(null),y=Object(j.a)(k,2),N=y[0],S=y[1],C=Object(c.useState)(""),g=Object(j.a)(C,2),w=g[0],_=g[1],B=Object(c.useState)([]),E=Object(j.a)(B,2),A=E[0],D=E[1];Object(c.useEffect)((function(){fetch("https://api.coinsocialstory.com/api/v1/currencies/all-ticker").then((function(e){return e.json()})).then((function(e){a(e.response)}))}),[]);var J=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.prev=2,e.next=5,f(w,N);case 5:n=e.sent,console.log(n),n.error?h("Such address not found"):(c=n.address_type,a=n.balances[c],D([{coin:c,address:w,balance:a}].concat(Object(o.a)(A))),h(null)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),h(e.t0);case 13:m(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"container",children:[v&&Object(b.jsx)("div",{className:"loader",children:Object(b.jsxs)("div",{class:"css-loader",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),!v&&i&&Object(b.jsx)("p",{className:"error",children:i}),Object(b.jsxs)("form",{className:"form",children:[Object(b.jsxs)("select",{className:"form__select",onChange:function(e){return S(e.target.value)},value:N,children:[Object(b.jsx)("option",{value:null,children:"Choose coin"}),n.map((function(e){return Object(b.jsx)("option",{children:e.ticker},e.id)}))]}),Object(b.jsx)("input",{type:"text",className:"form__address",onChange:function(e){return _(e.target.value)},value:w,placeholder:"Enter your address"}),Object(b.jsx)("input",{type:"submit",className:"form__submit",onClick:J,value:"Get Balance"})]}),A.length>0&&Object(b.jsxs)("div",{className:"wallets",children:[Object(b.jsxs)("table",{border:1,children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Coin"}),Object(b.jsx)("th",{children:"Wallet address"}),Object(b.jsx)("th",{children:"Current balance"})]}),A.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.coin}),Object(b.jsx)("td",{children:e.address}),Object(b.jsx)("td",{children:e.balance})]},e.address)}))]}),Object(b.jsx)(d.CSVLink,{className:"download",filename:"balance",headers:O,data:A,children:"Download CSV"})]})]})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[445,1,2]]]);
//# sourceMappingURL=main.7910d996.chunk.js.map