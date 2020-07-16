(this["webpackJsonpsvac-frontend"]=this["webpackJsonpsvac-frontend"]||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/logo_white.beb4bf9d.png"},56:function(e,t,a){e.exports=a.p+"static/media/project_visual.3b0ec7ac.png"},62:function(e,t,a){e.exports=a.p+"static/media/question32.332ac57b.png"},63:function(e,t,a){e.exports=a.p+"static/media/question2.0525dfd3.png"},64:function(e,t,a){e.exports=a.p+"static/media/question24.5b93adc4.png"},71:function(e,t,a){e.exports=a(94)},76:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(76),a(125)),s=a(136),c=a(132),m=a(131),u=a(133),h=a(134),d=a(137),p=a(135),f=a(15),E=a(6),b=a(55),g=a.n(b),v=a(65),w=a(130),y=a(46),x=a(56),k=a.n(x),I=Object(o.a)((function(e){return{visual:{width:"22em",padding:"3em"}}}));function N(){var e=I();return r.a.createElement("main",null,r.a.createElement("img",{src:k.a,className:e.visual,alt:"data visual representing the project"}),r.a.createElement(y.a,{variant:"h4"},"Project"),r.a.createElement(y.a,null,"In computer science, an estimation of hundreds of thousands of scientific publications are published every year. Even though the content itself is usually placed behind a payment barrier, some metadata are freely accessible, such as title, abstract, keywords of the publication, name of the conference as well as names and universities of the authors.",r.a.createElement("br",null),r.a.createElement("br",null),"A well-known publication series for computer science is the \u201cLecture Notes in Computer Science\u201d by Springer-Verlag. Since 1973, more than 12 000 books containing over 360 000 papers have been published in this series. The aim of the project was to visualize and analyze the metadata of these publications. For this purpose, the data first had to be extracted using web scraping and prepared for further processing using a range of different methods. This involved the use of natural language processing, similarity matching and geolocation services. Over 320 000 keywords and 190 000 locations had to be normalized and matched. The main difficulties were to find duplicates within the inconsistent spellings and partially missing information of identical data sets. The processed data enabled numerous analyses to be carried out.",r.a.createElement("br",null),r.a.createElement("br",null),"Browse our topics to find answers to the questions you have about our data!"))}var T=Object(o.a)((function(e){return{listItem:{marginBottom:"2em"},section:{marginBottom:"2em"}}}));function L(){var e=T();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Limitations"),r.a.createElement(y.a,{className:e.listItem},"In this section we will point out the limitations our visualizations and analyses are bound to."))}var S=a(129),A=a(66),j=a(128),z=a(61),W=a.n(z),H=a(60),q=a.n(H),B=Object(o.a)((function(e){return{infoBox:{padding:"0.8em",background:"#288BA222",marginBottom:"8px",border:"1px solid #288BA255"}}}));function C(e){var t=B();return r.a.createElement("div",{className:t.infoBox},e.children)}var P=Object(o.a)((function(e){return{questionPreview:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"0.35em","&:hover":{cursor:"pointer"}},highlightAnimated:{fontStyle:"italic",color:"#2171A1",marginLeft:"0.5em"},highlightInteractive:{fontStyle:"italic",color:"#35A9A0",marginLeft:"0.5em"},titleBox:{display:"flex"}}}));function O(e){var t=P(),a=r.a.useState(!1),n=Object(A.a)(a,2),l=n[0],i=n[1],o=e.iframeHeight?e.iframeHeight:"600px",s="<iframe src='https://flo.uri.sh/visualisation/".concat(e.flourishId,"/embed' frameborder='0' scrolling='no' style='width:100%;height:",o,";'></iframe>"),c=e.secondIframeHeight?e.secondIframeHeight:"600px",m="<iframe src='https://flo.uri.sh/visualisation/".concat(e.secondFlourishId,"/embed' frameborder='0' scrolling='no' style='width:100%;height:",c,";'></iframe>"),u="Visualization of".concat(e.title);return r.a.createElement("main",null,r.a.createElement("div",{className:t.questionPreview,onClick:function(){i((function(e){return!e}))}},r.a.createElement("div",{className:t.titleBox},r.a.createElement(y.a,{variant:"h5"},e.title),e.animated&&r.a.createElement(y.a,{variant:"h5",className:t.highlightAnimated},"animated"),e.interactive&&r.a.createElement(y.a,{variant:"h5",className:t.highlightInteractive},"interactive")),l?r.a.createElement(q.a,null):r.a.createElement(W.a,null)),r.a.createElement("div",null,r.a.createElement(j.a,{in:l},e.children,e.info&&r.a.createElement(C,null,e.info),e.flourishId&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),e.secondFlourishId&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),e.imageSrc&&r.a.createElement("img",{src:e.imageSrc,width:"100%",alt:u}))))}var V=a(62),F=a.n(V),D=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function J(){var e=D();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Authors"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#12 Which are the top 100 authors in terms of the number of their papers?",flourishId:"3139343",iframeHeight:"2500px"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#19 What is the distribution of the collaborations of authors?"},r.a.createElement(C,null,r.a.createElement(y.a,null,"We investigated the distribution of how often authors have published together There are a total of 1.587.756 author pairs that published together at least once.",r.a.createElement("br",null),"Below is a list of how many author pairs have published X times together: ",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"1 time: 1.382.284 (~87% of total)"),r.a.createElement("li",null,"2 times: 139.193 (~8,77% of total)"),r.a.createElement("li",null,"3 times: 34.828 (~2,19% of total)"),r.a.createElement("li",null,"4 times: 15.053 (~0,95% of total)"),r.a.createElement("li",null,"5 times: 6290 (~0,4% of total)"),r.a.createElement("li",null,"5 to 19 times: 9750 (~0,61% of total)"),r.a.createElement("li",null,"20 times or more: 327 (~0,021% of total)")),"The Top three authorpairs are the following:",r.a.createElement("ul",null,r.a.createElement("li",null,"Yi Mu and Willy Susilo, both from University of Wollongon, North Wollongon, Australia with 91 joint papers"),r.a.createElement("li",null,"Pew-Thian Yap and Dinggang Shen, both from University of North Carolina, Greensboro, USA with 59 joint papers"),r.a.createElement("li",null,"Xilin Chen and Shiguang Shan, both from Chinese Academy of Science, Hefei, China with 57 joint papers"))))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#20 Which are the top 100 papers in terms of the count of authors involved?",flourishId:"3137839",iframeHeight:"2500px"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#21 Which are the top 100 authors in terms of the number of downloads?",flourishId:"3139367",iframeHeight:"2500px"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#23 What is the distribution of the number of authors in all papers?",flourishId:"3126620"},r.a.createElement(C,null,r.a.createElement(y.a,null,"This bar chart shows the distribution of the number of authors in all papers. The x-axis defines the number of authors from a paper while the y-axis shows the number of papers which were published by that number of authors."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#29 What is the distribution between the number of authors of a paper and its number of downloads?",flourishId:"3080892"},r.a.createElement(C,null,r.a.createElement(y.a,null,"This scatterplot shows the distribution between the number of authors of a paper on the x-axis and its number of downloads on the y-axis."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#30 Do authors rather work with people from the same country?",flourishId:"3194602"},r.a.createElement(C,null,r.a.createElement(y.a,null,"A higher number indicates cooperations across multiple countries."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#31 Do authors rather work with people from the same institution?",flourishId:"3194658"},r.a.createElement(C,null,r.a.createElement(y.a,null,"A higher number indicates cooperations across multiple institutions."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#32 Which authors' papers have been downloaded the most?",imageSrc:F.a})))}var _=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function M(){var e=_();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Geographic data"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#1 Which countries have published the most papers?",flourishId:"3072954",interactive:!0},r.a.createElement(C,null,r.a.createElement(y.a,null,"This map shows the total number of papers per country. A paper is assigned to a country if at least one of the author's institutions is in this country.",r.a.createElement("br",null),r.a.createElement("strong",null,"Limitations:")," Some papers might not count into the total, if they can not be mapped due to missing country information in the data set of the associated institution."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#5 How much and with which keywords have german institutions been publishing?",flourishId:"3073035",interactive:!0},r.a.createElement(C,null,r.a.createElement(y.a,null,"The data points on this map each represent an institution located in Germany. The size visualizes the number of pubications that this institution has published. On hover the three most commonly used keywords in said papers are displayed.",r.a.createElement("br",null),r.a.createElement("strong",null,"Limitations:")," It is possible that positions displayed on the map are not correct. This may be due to inaccurate or incomplete data. Some institutions have been localized only by the indicated city, so that several institutions may be displayed in the same position. In some cases several data points of the same institution may be displayed. In these cases the data could not be mapped."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#11 How has the annual number of papers per university developed?",flourishId:"2905295",interactive:!0,animated:!0},r.a.createElement(C,null,r.a.createElement(y.a,null,"This map shows the annual distribution of papers of all given institutions worldwide."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#13 How has the number of papers published worldwide developed?",flourishId:"3196692"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#14 Which countries publish how much per year?",flourishId:"3118439",animated:!0}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#15 Which countries contributed to the 1000 most downloaded papers?",flourishId:"3107129"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#18 Which are the top three keywords per country?",flourishId:"3125292",interactive:!0})))}var G=a(63),U=a.n(G),K=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function X(){var e=K();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Keywords"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#2 How have the most commonly used keywords developed?",flourishId:"3030521",secondFlourishId:"3189384",imageSrc:U.a,animated:!0}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#6 Which keywords occur together in papers?",interactive:!0},r.a.createElement(C,null,r.a.createElement(y.a,null,"A Keyword-Cloud-Cluster that visualizes the relation between keywords that appear together in papers and their density.",r.a.createElement("br",null),r.a.createElement("strong",null,"Limitations:")," The map shows only keywords that appear at least in 200 different papers and have at least one collaboration to another keyword with at least 15 occurences (the two keywords appear together in at least 15 different papers).")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<iframe src='https://vacs.htw.bytex.digital/keywordmap/index.html' frameborder='0' scrolling='no' style='width: 100%; height: 600px'></iframe> "}})),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#25 Do the listed keywords appear in the introduction or abstract?",flourishId:"3124774",secondFlourishId:"3200456"},r.a.createElement(C,null,r.a.createElement(y.a,null,"The keywords of each book/paper were searched in the introduction/abstract. If, for example, only 5 out of 10 keywords could be found, the percentage would be 50%. 100% means all keywords were also present.",r.a.createElement("br",null),"Papers also contain auto generated keywords. The data was visualized separately for those."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#34 What are the most used keywords for open access and for paid papers? Are they different?",flourishId:"3126947"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#52 How many keywords are used to describe books and papers?",flourishId:"3125051",secondFlourishId:"3124894"})))}var Y=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function $(){var e=Y();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Paper metadata"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#22 What is the distribution between the length of the abstract of a paper and its number of downloads?",flourishId:"3080901"},r.a.createElement(C,null,r.a.createElement(y.a,null,"This scatter plot shows the distribution between the length of the abstract of a paper on the x-axis and its number of downloads on the y-axis."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#33 Did the average length of papers change over time?",flourishId:"3126640"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#35 Does an increasing number of citations result in more downloads of the cited paper?",flourishId:"3148146",secondFlourishId:"3148165"})))}var Q=a(64),R=a.n(Q),Z=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function ee(){var e=Z();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Pricing"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#10 How many of the papers are open access and how did the share develop?",flourishId:"3092096"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#24 Is the price of a book related to the page count?",imageSrc:R.a})))}var te=Object(o.a)((function(e){return{questionList:{marginTop:"3em"}}}));function ae(){var e=te();return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Universities"),r.a.createElement("div",{className:e.questionList},r.a.createElement(O,{title:"#7 Which institutions have published the most?",flourishId:"3188543",iframeHeight:"2500px"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#9 Which institutions have been collaborating?",flourishId:"3189234",interactive:!0},r.a.createElement(C,null,r.a.createElement(y.a,null,"The arcs on this map represent the proximity of collaborations between two institutions.",r.a.createElement("br",null),r.a.createElement("strong",null,"Limitations:")," For better visibility only arcs with a minimum weight of 15 are displayed."))),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#16 Which are the top 100 universities in terms of the number of downloads of their papers?",flourishId:"3137816",iframeHeight:"2500px"}),r.a.createElement(S.a,null),r.a.createElement(O,{title:"#28 Which are the institutions with the most authors?",flourishId:"3114554",iframeHeight:"1400px"})))}var ne=a(25),re=(a(90),a(32)),le=a.n(re);a(91);function ie(){return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Process"),r.a.createElement(ne.VerticalTimeline,{className:"vertical-timeline-custom-line",layout:"1-column"},r.a.createElement(ne.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:{background:"#3DBCA1",color:"#fff"},icon:r.a.createElement(le.a,null)},r.a.createElement(y.a,null,r.a.createElement("strong",null,"Data collection analysis"),r.a.createElement("br",null),"The first step was to analyze how to locate all the data that needs to be collected for the project. Starting with the"," ",r.a.createElement("a",{href:"https://link.springer.com/search/page/1?facet-series=%22558%22&facet-content-type=%22Book%22"},"root page")," ","for the \u201cLecture Notes in Computer Science\u201d series, all links to all books from the over 600 pages in the listing had to be collected. For each book the process was repeated in order to get all links to its papers.")),r.a.createElement(ne.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:{background:"#35A9A0",color:"#fff"},icon:r.a.createElement(le.a,null)},r.a.createElement(y.a,null,r.a.createElement("strong",null,"Scraping the data"),r.a.createElement("br",null),"The Springer-Verlag does not offer a structured data set for the target books and papers so the information had to be scraped from each web page. The scraping was done using the python framework"," ",r.a.createElement("a",{href:"https://scrapy.org/"},"scrapy"),".",r.a.createElement("br",null),r.a.createElement("br",null),"To assist further processing steps the data was first trimmed to remove all unwanted characters.",r.a.createElement("br",null),r.a.createElement("code",null,"\u201d 11 June 1997, \u201d => 11 June 1997"),r.a.createElement("br",null),r.a.createElement("br",null),"Then the different date and number formats could be parsed.",r.a.createElement("br",null),r.a.createElement("code",null,"11 June 1997 => 11.06.1997",r.a.createElement("br",null),"IV => 4",r.a.createElement("br",null),"1.4k => 1400"),r.a.createElement("br",null),r.a.createElement("br",null),"Additionally keywords were scanned for abbreviations.",r.a.createElement("br",null),r.a.createElement("code",null,"ML (machine learning) => machine learning ",r.a.createElement("br",null)," Natural language processing (NPL) => Natural language processing"))),r.a.createElement(ne.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"April - July 2020",iconStyle:{background:"#288BA2",color:"#fff"},icon:r.a.createElement(le.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Error detection and correction within data and collection algorithm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),r.a.createElement(ne.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"July 2020",iconStyle:{background:"#2171A1",color:"#fff"},icon:r.a.createElement(le.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Final data collection"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),r.a.createElement(ne.VerticalTimelineElement,{iconStyle:{background:"#185C9D",color:"#fff"},icon:r.a.createElement(le.a,null),date:"July 2020"},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Publication"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}function oe(){return r.a.createElement("main",null,r.a.createElement(y.a,{variant:"h4"},"Legal"),r.a.createElement(y.a,null,"Legally legal legalz"))}var se=Object(v.a)({palette:{primary:{main:"#2a2a2a"},secondary:{main:"#11cb5f"}},typography:{h4:{marginBottom:"0.35em"},h5:{marginBottom:"0.35em"}}}),ce=Object(o.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto",marginTop:"6em",justifyContent:"space-between",height:"100%",display:"flex",flexFlow:"column"},content:{flexGrow:1,padding:e.spacing(3),marginTop:"6em"},logo:{height:"3em",marginTop:"1.5em",marginBottom:"1.5em"},nested:{paddingLeft:e.spacing(4)},drawerHeadline:{fontWeight:"bold"}}}));function me(){var e=ce();return r.a.createElement(w.a,{theme:se},r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(f.a,null,r.a.createElement(c.a,{position:"fixed",className:e.appBar},r.a.createElement(u.a,null,r.a.createElement(f.b,{to:"/project"},r.a.createElement("img",{src:g.a,alt:"VACS Logo",className:e.logo})))),r.a.createElement(s.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(h.a,null,r.a.createElement(d.a,{key:"About"},r.a.createElement(p.a,null,r.a.createElement(y.a,{className:e.drawerHeadline},"About"))),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/project"},r.a.createElement(p.a,{primary:"Project"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/process"},r.a.createElement(p.a,{primary:"Process"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/limitations"},r.a.createElement(p.a,{primary:"Limitations"})),r.a.createElement(d.a,{key:"About"},r.a.createElement(p.a,null,r.a.createElement(y.a,{className:e.drawerHeadline},"Visualizations"))),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-authors"},r.a.createElement(p.a,{primary:"Authors"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-geographic-data"},r.a.createElement(p.a,{primary:"Geographic data"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-keywords"},r.a.createElement(p.a,{primary:"Keywords"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-paper-metadata"},r.a.createElement(p.a,{primary:"Paper metadata"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-pricing"},r.a.createElement(p.a,{primary:"Pricing"})),r.a.createElement(d.a,{button:!0,className:e.nested,component:f.b,to:"/visualizations-universities"},r.a.createElement(p.a,{primary:"Universities"}))),r.a.createElement(d.a,{button:!0,component:f.b,to:"/legal"},r.a.createElement(p.a,null,"Legal")))),r.a.createElement("main",{className:e.content},r.a.createElement(E.b,{exact:!0,path:"/project",component:N}),r.a.createElement(E.b,{exact:!0,path:"/process",component:ie}),r.a.createElement(E.b,{exact:!0,path:"/limitations",component:L}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-authors",component:J}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-geographic-data",component:M}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-keywords",component:X}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-paper-metadata",component:$}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-pricing",component:ee}),r.a.createElement(E.b,{exact:!0,path:"/visualizations-universities",component:ae}),r.a.createElement(E.b,{exact:!0,path:"/legal",component:oe}),r.a.createElement(E.b,{exact:!0,path:"/"},r.a.createElement(E.a,{to:"/project"}))))))}var ue=function(){return r.a.createElement(me,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.e17b5e74.chunk.js.map