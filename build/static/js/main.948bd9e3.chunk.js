(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),o=n(8),l=n(6),d=n(3),i=(n(13),n(14),n(0)),u=function(e){var t=e.showAnswers,n=e.handleAnswer,c=e.handleNextQuestion,s=e.data,a=s.question,r=s.correct_answer,o=s.answers;return Object(i.jsxs)("div",{className:"flex flex-col ",children:[Object(i.jsx)("div",{className:" text-black p-10 rounded shadow-md",style:{backgroundColor:"#7dced0"},children:Object(i.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:a}})}),Object(i.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:o.map((function(e,c){var s=t?e===r?"text-green-700":"text-red-600":"text-black";return Object(i.jsx)("button",{style:{backgroundColor:"#7dced0"},className:"kl-auto text-black ".concat(s," p-4 font-semibold rounded shadow"),onClick:function(){return n(e)},answer:e,dangerouslySetInnerHTML:{__html:e}},c)}))}),t&&Object(i.jsx)("button",{onClick:c,className:"ml-auto mt-6  bg-white text-purple-800 p-4 font-semibold rounded shadow",children:"Next Question"})]})};var b=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(d.a)(a,2),b=r[0],j=r[1],h=Object(c.useState)(0),x=Object(d.a)(h,2),m=x[0],p=x[1],O=Object(c.useState)(!1),f=Object(d.a)(O,2),w=f[0],g=f[1];return Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:[e.correct_answer].concat(Object(o.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));s(t)}))}),[]),n.length>0?Object(i.jsx)("div",{className:"container",children:b>=n.length?Object(i.jsxs)("h1",{className:"text-3xl font-bold ",style:{color:"#7dced0",textAlign:"center"},children:["Game ended! Your score is ",m]}):Object(i.jsx)(u,{data:n[b],showAnswers:w,handleAnswer:function(e){w||e===n[b].correct_answer&&p(m+1),g(!0)},handleNextQuestion:function(){g(!1),j(b+1)}})}):Object(i.jsx)("h3",{className:"font-bold",children:"Loading Please Wait"})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.948bd9e3.chunk.js.map