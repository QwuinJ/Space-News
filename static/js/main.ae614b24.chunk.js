(this["webpackJsonpapi-proj"]=this["webpackJsonpapi-proj"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(11),n(2)),o=n.n(i),u=n(3),j=n(4),h=(n(13),n(14),n(0)),d=function(){return Object(h.jsxs)("div",{className:"header-wrapper",children:[Object(h.jsx)("h1",{className:"header",children:"API Examples"}),Object(h.jsx)("h3",{children:"All you see has been rendered with React, and the information gathered from APIs..."})]})},l=(n(16),function(e){return Object(h.jsxs)("div",{className:"headline-wrapper",children:[Object(h.jsx)("div",{className:"headline-header-wrapper",children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("h2",{className:"headline-header",children:e.title})})}),Object(h.jsxs)("div",{className:"headline-content-wrapper",children:[Object(h.jsxs)("h3",{className:"headline-source",children:["From ",e.site]}),Object(h.jsxs)("h3",{children:["Published at ",e.published]}),Object(h.jsx)("img",{alt:e.title,className:"headline-image",src:e.image}),Object(h.jsx)("p",{className:"headline-summary",children:e.summary})]})]})}),p=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.quote}),Object(h.jsx)("p",{children:e.author}),Object(h.jsx)("button",{children:"Click for new quote"})]})},b=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:e.joke}),Object(h.jsx)("button",{children:"Get new Dad Joke"})]})},f=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Cat Fact"}),Object(h.jsx)("p",{children:e.fact}),Object(h.jsx)("button",{children:"Get new fact"})]})},x=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{quote:e.quote,author:e.quoteAuth}),Object(h.jsx)(b,{joke:e.joke,id:e.jokeKey}),Object(h.jsx)(f,{fact:e.catFact})]})};var O=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spaceflightnewsapi.net/v3/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(c.useState)(""),i=Object(j.a)(s,2),p=i[0],b=i[1],f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cat-fact.herokuapp.com/facts/random");case 2:t=e.sent,console.log(t),n=t.json(),b(n),console.log(n),console.log(p.text);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=Object(c.useState)(""),m=Object(j.a)(O,2),v=m[0],w=m[1],k=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://programming-quotes-api.herokuapp.com/quotes/random");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(c.useState)(""),y=Object(j.a)(g,2),N=y[0],q=y[1],A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Accept","application/json"),e.next=4,fetch("https://icanhazdadjoke.com/",{headers:t});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,q(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a(),f(),k(),A()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{}),Object(h.jsxs)("div",{className:"main-site-wrapper",children:[Object(h.jsx)("div",{children:Object(h.jsx)(x,{quote:v.en,quoteAuth:v.author,joke:N.joke,jokeKey:N.id,catFact:p.text})}),Object(h.jsx)("div",{children:n.map((function(e,t){return Object(h.jsx)(l,{title:e.title,image:e.imageUrl,summary:e.summary,site:e.newsSite,published:e.publishedAt,url:e.url},t)}))})]})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ae614b24.chunk.js.map