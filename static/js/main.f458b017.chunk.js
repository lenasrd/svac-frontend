(this["webpackJsonpsvac-frontend"]=this["webpackJsonpsvac-frontend"]||[]).push([[0],{60:function(e,a,t){e.exports=t(73)},65:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),o=(t(65),t(107)),c=t(115),m=t(112),s=t(111),u=t(104),d=t(113),p=t(116),E=t(114),h=t(54),b=t.n(h),f=t(28),v=t(6),g=t(55),w=t(110),y=t(41);function N(){return r.a.createElement("main",null,r.a.createElement(u.a,null),r.a.createElement("h1",null,"Project"),r.a.createElement(y.a,{paragraph:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}function x(){return r.a.createElement("main",null,r.a.createElement(u.a,null),r.a.createElement("h1",null,"Limitations"),r.a.createElement(y.a,{paragraph:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}var j=t(56),L=t(108),_=t(53),k=t.n(_),z=t(52),S=t.n(z),A=Object(o.a)((function(e){return{questionPreview:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center","&:hover":{cursor:"pointer"}},highlightAnimated:{color:"lightsteelblue",marginLeft:"0.5em"},titleBox:{display:"flex"}}}));function I(e){var a=A(),t=r.a.useState(!1),n=Object(j.a)(t,2),l=n[0],i=n[1];return r.a.createElement("main",null,r.a.createElement("div",{className:a.questionPreview,onClick:function(){i((function(e){return!e}))}},r.a.createElement("div",{className:a.titleBox},r.a.createElement("h3",null,e.title),e.animated&&r.a.createElement("h3",{className:a.highlightAnimated},"animated")),l?r.a.createElement(S.a,null):r.a.createElement(k.a,null)),r.a.createElement("div",null,r.a.createElement(L.a,{in:l},e.children)))}var B=t(109),P=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function q(){var e=P();return r.a.createElement("main",null,r.a.createElement(u.a,null),r.a.createElement("h1",null,"Authors"),r.a.createElement(y.a,null,"In this section, we will display our findings related to the Authors in our dataset."),r.a.createElement("div",{className:e.questionList},r.a.createElement(I,{title:"Which authors have published most papers?",animated:!0},r.a.createElement(y.a,null,"I'm an explanatory text")),r.a.createElement(B.a,null),r.a.createElement(I,{title:"Which authors have been publishing over the longest time period?"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://public.tableau.com/views/CTSchoolDistrictsbyIncomeandGradeLevels2009-13/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>'}})),r.a.createElement(B.a,null),r.a.createElement(I,{title:"Which authors publish together often?"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://public.tableau.com/views/Superstore_upload_test/Leistung?:showVizHome=no&:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>'}}))))}var C=Object(g.a)({palette:{primary:{main:"#001B48"},secondary:{main:"#11cb5f"}}}),O=Object(o.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)},logo:{margin:"0.5em",fontSize:"2em"},nested:{paddingLeft:e.spacing(4)}}}));function W(){var e=O();return r.a.createElement(w.a,{theme:C},r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(m.a,{position:"fixed",className:e.appBar},r.a.createElement(u.a,null,r.a.createElement("h1",{component:f.b,to:"/project"},"Project SVAC"),r.a.createElement(b.a,{className:e.logo}))),r.a.createElement(f.a,null,r.a.createElement(c.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(d.a,null,r.a.createElement(p.a,{key:"About"},r.a.createElement("h2",{primary:"About"},"About")),r.a.createElement(p.a,{button:!0,className:e.nested,component:f.b,to:"/project"},r.a.createElement(E.a,{primary:"Project"})),r.a.createElement(p.a,{button:!0,className:e.nested,component:f.b,to:"/limitations"},r.a.createElement(E.a,{primary:"Limitations"})),r.a.createElement(p.a,{key:"Visualizations"},r.a.createElement("h2",null,"Visualizations")),r.a.createElement(p.a,{button:!0,className:e.nested,component:f.b,to:"/authors-visualizations"},r.a.createElement(E.a,{primary:"Authors"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Universities"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Keywords"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Downloads"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Keywords"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Abstract"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Specialization"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Paper meta"})),r.a.createElement(p.a,{button:!0,className:e.nested},r.a.createElement(E.a,{primary:"Book meta"}))))),r.a.createElement("main",{className:e.content},r.a.createElement(v.a,{exact:!0,path:"/project",component:N}),r.a.createElement(v.a,{exact:!0,path:"/limitations",component:x}),r.a.createElement(v.a,{exact:!0,path:"/authors-visualizations",component:q})))))}t(72);var T=function(){return r.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.f458b017.chunk.js.map