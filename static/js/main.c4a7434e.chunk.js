(this["webpackJsonpsvac-frontend"]=this["webpackJsonpsvac-frontend"]||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/logo_white.beb4bf9d.png"},56:function(e,t,a){e.exports=a.p+"static/media/project_visual.3b0ec7ac.png"},62:function(e,t,a){e.exports=a.p+"static/media/question32.332ac57b.png"},63:function(e,t,a){e.exports=a.p+"static/media/question13.5359130b.png"},64:function(e,t,a){e.exports=a.p+"static/media/question2.0525dfd3.png"},71:function(e,t,a){e.exports=a(94)},76:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),r=a.n(l),o=(a(76),a(125)),c=a(136),m=a(132),s=a(131),u=a(133),d=a(134),p=a(137),h=a(135),E=a(15),f=a(6),g=a(55),v=a.n(g),b=a(65),w=a(130),y=a(46),I=a(56),x=a.n(I),N=Object(o.a)((function(e){return{visual:{width:"22em",padding:"3em"}}}));function L(){var e=N();return i.a.createElement("main",null,i.a.createElement("img",{src:x.a,className:e.visual}),i.a.createElement(y.a,{variant:"h4"},"Project"),i.a.createElement(y.a,null,"In computer science, an estimation of hundreds of thousands to millions of scientific publications are published every year. Even though the content itself is usually placed behind a payment barrier, some metadata are freely accessible, such as title, abstract, keywords of the publication, name of the conference as well as names and universities of the authors.",i.a.createElement("br",null),i.a.createElement("br",null),"A well-known publication series for computer science is the \u201cLecture Notes in Computer Science\u201d by Springer-Verlag. Since 1973, more than 12 000 books containing over 360 000 papers have been published in this series. The aim of the project was to visualize and analyze the metadata of these publications. For this purpose, the data first had to be extracted using web scraping and prepared for further processing using a range of different methods. This involved the use of natural language processing, similarity matching and geolocation services. Over 320 000 keywords and 190 000 locations had to be normalized and matched. The main difficulties were to find duplicates within the inconsistent spellings and partially missing information of identical data sets. The processed data enabled numerous analyses to be carried out.",i.a.createElement("br",null),i.a.createElement("br",null),"Browse our topics to find answers to the questions you have about our data!"))}var k=Object(o.a)((function(e){return{listItem:{marginBottom:"2em"},section:{marginBottom:"2em"}}}));function q(){var e=k();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Limitations"),i.a.createElement(y.a,{className:e.listItem},"In this section we will point out the limitations our visualizations and analyses are bound to."))}var T=a(129),A=a(66),S=a(128),j=a(61),z=a.n(j),B=a(60),H=a.n(B),O=Object(o.a)((function(e){return{questionPreview:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"0.35em","&:hover":{cursor:"pointer"}},highlightAnimated:{fontStyle:"italic",color:"#2171A1",marginLeft:"0.5em"},highlightInteractive:{fontStyle:"italic",color:"#35A9A0",marginLeft:"0.5em"},titleBox:{display:"flex"},infoBox:{padding:"0.8em",background:"#288BA222",marginBottom:"5px",border:"1px solid #288BA255"}}}));function P(e){var t=O(),a=i.a.useState(!1),n=Object(A.a)(a,2),l=n[0],r=n[1],o=e.iframeHeight?e.iframeHeight:"600px",c="<iframe src='https://flo.uri.sh/visualisation/".concat(e.flourishId,"/embed' frameborder='0' scrolling='no' style='width:100%;height:",o,";'></iframe>"),m=e.secondIframeHeight?e.secondIframeHeight:"600px",s="<iframe src='https://flo.uri.sh/visualisation/".concat(e.secondFlourishId,"/embed' frameborder='0' scrolling='no' style='width:100%;height:",m,";'></iframe>"),u="Visualization of".concat(e.title);return i.a.createElement("main",null,i.a.createElement("div",{className:t.questionPreview,onClick:function(){r((function(e){return!e}))}},i.a.createElement("div",{className:t.titleBox},i.a.createElement(y.a,{variant:"h5"},e.title),e.animated&&i.a.createElement(y.a,{variant:"h5",className:t.highlightAnimated},"animated"),e.interactive&&i.a.createElement(y.a,{variant:"h5",className:t.highlightInteractive},"interactive")),l?i.a.createElement(H.a,null):i.a.createElement(z.a,null)),i.a.createElement("div",null,i.a.createElement(S.a,{in:l},e.children,e.info&&i.a.createElement(y.a,{className:t.infoBox},e.info),e.flourishId&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),e.secondFlourishId&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),e.imageSrc&&i.a.createElement("img",{src:e.imageSrc,width:"100%",alt:u}))))}var C=a(62),V=a.n(C),_=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function F(){var e=_();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Authors"),i.a.createElement(y.a,null,"In this section, we will display our findings related to the authors in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"Who are the top 100 authors in terms of number of publications?",interactive:!0,flourishId:"3139343",iframeHeight:"2500px",info:"This is a descriptive text about visualization #12 that briefly explains what is displayed here."}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#19",flourishId:"2993152"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#20",flourishId:"3137839",iframeHeight:"2500px"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#21",flourishId:"3139367",iframeHeight:"2500px"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#23",flourishId:"3126620"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#29",flourishId:"3080892"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#30",flourishId:"3194602"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#31",flourishId:"3194658"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#32",imageSrc:V.a})))}var J=a(63),M=a.n(J),W=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function D(){var e=W();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Geographic data"),i.a.createElement(y.a,null,"In this section, we will display our findings related to geographic data in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"#1",flourishId:"3072954"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#5",flourishId:"3073035"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#11",flourishId:"2905295"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#13",imageSrc:M.a}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#14",flourishId:"3118439"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#15",flourishId:"3107129"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#18",flourishId:"3125292"})))}var G=a(64),K=a.n(G),U=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function $(){var e=U();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Keywords"),i.a.createElement(y.a,null,"In this section, we will display our findings related to keywords in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"#2",imageSrc:K.a}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#4",flourishId:"3125292"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#6"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<iframe src='https://vacs.htw.bytex.digital/keywordmap/index.html' frameborder='0' scrolling='no' style='width: 100%; height: 600px'></iframe> "}})),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#8",flourishId:"3189384"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#25",flourishId:"3124774",secondFlourishId:"3125623"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#34",flourishId:"3126947"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#52",flourishId:"3125051",secondFlourishId:"3124894"})))}var Q=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function R(){var e=Q();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Paper metadata"),i.a.createElement(y.a,null,"In this section, we will display our findings related to paper meta data in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"#22",flourishId:"3080901"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#33",flourishId:"3126640"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#35",flourishId:"3148146",secondFlourishId:"3148165"})))}var X=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function Y(){var e=X();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Pricing"),i.a.createElement(y.a,null,"In this section, we will display our findings related to pricing in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"#10",flourishId:"3092096"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#24",flourishId:"3106275"})))}var Z=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function ee(){var e=Z();return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Universities"),i.a.createElement(y.a,null,"In this section, we will display our findings related to universities in our dataset."),i.a.createElement("div",{className:e.questionList},i.a.createElement(P,{title:"#7",flourishId:"3188543",iframeHeight:"2500px"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#9",flourishId:"3189234"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#16",flourishId:"3137816",iframeHeight:"2500px"}),i.a.createElement(T.a,null),i.a.createElement(P,{title:"#28",flourishId:"3114554",iframeHeight:"1400px"})))}var te=a(25),ae=(a(90),a(32)),ne=a.n(ae);a(91);function ie(){return i.a.createElement("main",null,i.a.createElement(y.a,{variant:"h4"},"Process"),i.a.createElement(y.a,null,"intro"),i.a.createElement(te.VerticalTimeline,{className:"vertical-timeline-custom-line",layout:"1-column"},i.a.createElement(te.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"April 2020",iconStyle:{background:"#3DBCA1",color:"#fff"},icon:i.a.createElement(ne.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Collection of questions and implementation of the data collection algorithm"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement(te.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"April 2020",iconStyle:{background:"#35A9A0",color:"#fff"},icon:i.a.createElement(ne.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Collection of a small test dataset"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement(te.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"April - July 2020",iconStyle:{background:"#288BA2",color:"#fff"},icon:i.a.createElement(ne.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Error detection and correction within data and collection algorithm"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement(te.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"July 2020",iconStyle:{background:"#2171A1",color:"#fff"},icon:i.a.createElement(ne.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Final data collection"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement(te.VerticalTimelineElement,{iconStyle:{background:"#185C9D",color:"#fff"},icon:i.a.createElement(ne.a,null),date:"July 2020"},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Publication"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}var le=Object(b.a)({palette:{primary:{main:"#2a2a2a"},secondary:{main:"#11cb5f"}},typography:{h4:{marginBottom:"0.35em"},h5:{marginBottom:"0.35em"}}}),re=Object(o.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto",marginTop:"6em"},content:{flexGrow:1,padding:e.spacing(3),marginTop:"6em"},logo:{height:"3em",marginTop:"1.5em",marginBottom:"1.5em"},nested:{paddingLeft:e.spacing(4)},drawerHeadline:{fontWeight:"bold"}}}));function oe(){var e=re();return i.a.createElement(w.a,{theme:le},i.a.createElement("div",{className:e.root},i.a.createElement(s.a,null),i.a.createElement(E.a,null,i.a.createElement(m.a,{position:"fixed",className:e.appBar},i.a.createElement(u.a,null,i.a.createElement(E.b,{to:"/project"},i.a.createElement("img",{src:v.a,alt:"VACS Logo",className:e.logo})))),i.a.createElement(c.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},i.a.createElement("div",{className:e.drawerContainer},i.a.createElement(d.a,null,i.a.createElement(p.a,{key:"About"},i.a.createElement(h.a,null,i.a.createElement(y.a,{className:e.drawerHeadline},"About"))),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/project"},i.a.createElement(h.a,{primary:"Project"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/process"},i.a.createElement(h.a,{primary:"Process"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/limitations"},i.a.createElement(h.a,{primary:"Limitations"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/imprint"},i.a.createElement(h.a,{primary:"Imprint"})),i.a.createElement(p.a,{key:"About"},i.a.createElement(h.a,null,i.a.createElement(y.a,{className:e.drawerHeadline},"Visualizations"))),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-authors"},i.a.createElement(h.a,{primary:"Authors"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-geographic-data"},i.a.createElement(h.a,{primary:"Geographic data"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-keywords"},i.a.createElement(h.a,{primary:"Keywords"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-paper-metadata"},i.a.createElement(h.a,{primary:"Paper metadata"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-pricing"},i.a.createElement(h.a,{primary:"Pricing"})),i.a.createElement(p.a,{button:!0,className:e.nested,component:E.b,to:"/visualizations-universities"},i.a.createElement(h.a,{primary:"Universities"}))))),i.a.createElement("main",{className:e.content},i.a.createElement(f.b,{exact:!0,path:"/project",component:L}),i.a.createElement(f.b,{exact:!0,path:"/process",component:ie}),i.a.createElement(f.b,{exact:!0,path:"/limitations",component:q}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-authors",component:F}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-geographic-data",component:D}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-keywords",component:$}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-paper-metadata",component:R}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-pricing",component:Y}),i.a.createElement(f.b,{exact:!0,path:"/visualizations-universities",component:ee}),i.a.createElement(f.b,{exact:!0,path:"/"},i.a.createElement(f.a,{to:"/project"}))))))}var ce=function(){return i.a.createElement(oe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.c4a7434e.chunk.js.map