(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},243:function(e,t,n){e.exports=n(550)},249:function(e,t,n){},550:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(0),c=n.n(r),l=n(8),o=n.n(l),i=(n(249),n(7)),s=n.n(i),u=n(103),m=n.n(u),f=n(25),p=n.n(f),d=n(47),h=n(54),E=(n(104),n(12)),v=n.n(E),g=n(242),w=n(14),y=n(55),b=n(21),x=n(150),k=n.n(x),j=n(41),O=n.n(j),S=n(102),I=n.n(S),C=n(27),A=n.n(C),T=n(18),z=n.n(T),P=n(96),L=function(e){return"/pin/code/".concat(e)},R=function(e){return"/history/".concat(e)},U=n(20);function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getCrawlers",t)}function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","loadPresets",t)}function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","saveAndStart",t)}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getCrawler",t)}function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getPages",t)}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getPins",t)}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getPin",t)}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","setPinCode",t)}function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getPinCode",t)}function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","getThumbnail",t)}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","pin",t)}function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","setZoneStatus",t)}function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","setZonesStatus",t)}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(U.remote)("server-crawler","setStatus",t)}var Y,_={lineHeight:1.2,borderLeft:"8px solid #EEE",paddingLeft:15,color:"#666",textAlign:"justify"},K=function(e){var t=e.children;return c.a.createElement("div",{style:_},t)},X=n(98),ee=n.n(X),te=n(22),ne=n.n(te),ae=function(e,t){return c.a.createElement(ne.a,null,e&&e.map(function(e){return c.a.createElement(ne.a.Item,{key:"preset-".concat(e.id),onClick:function(){t(e)}},e.name)}))},re=function(e){var t=e.setPreset,n=e.setDefault,a=Object(r.useState)([]),l=Object(b.a)(a,2),o=l[0],i=l[1],s=function(){var e=Object(w.a)(v.a.mark(function e(){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:a=e.sent,i(a),n&&-1!==(r=a.findIndex(function(e){return"Default"===e.name}))&&t(Object(y.a)({},a[r],{name:""}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){s()},[]),c.a.createElement(ee.a,{overlay:ae(o,t),trigger:["click"]},c.a.createElement(z.a,{icon:"folder-open"},"Load saved preset"))},ce=p.a.Paragraph,le=p.a.Text,oe={marginRight:10,display:"inline-block"},ie={backgroundColor:"#EEE",padding:"0px 10px",borderRadius:5,marginBottom:12},se=O.a.create({name:"start_crawler"})(function(e){var t=e.history,n=e.location.search,l=e.form,o=l.getFieldDecorator,i=l.validateFields,u=Object(a.b)().call,m=function(){var e=Object(w.a)(v.a.mark(function e(n){var a,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.saveAs,r=Object(g.a)(n,["saveAs"]),e.prev=1,e.next=4,D(Object(y.a)({},r,{viewport:{width:800,height:600}}),a);case 4:return c=e.sent,e.next=7,u(B);case 7:t.push(R(c.crawler.timestamp.toString())),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),A.a.error({message:"Something went wrong!",description:e.t0.toString()});case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t={name:"",id:"",crawlerInput:{method:"spiderbot",url:"http://localhost:3003/",viewport:{width:800,height:600}}},n=Object(r.useState)(t),a=Object(b.a)(n,2),c=a[0],l=a[1];return Object(r.useEffect)(function(){if(e){var n=Object(P.parse)(e);l(Object(y.a)({},t,{crawlerInput:n}))}},[e]),{preset:c,setPreset:l}}(n),p=f.preset,d=f.setPreset;return c.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),i(function(e,t){e||m(t)})}},c.a.createElement(O.a.Item,{style:ie},c.a.createElement(re,{setPreset:d,setDefault:!n})),c.a.createElement(O.a.Item,null,o("url",{rules:[{required:!0,message:"Please input an URL to crawl!"}],initialValue:p.crawlerInput.url})(c.a.createElement(k.a,{addonBefore:"URL"}))),c.a.createElement(O.a.Item,null,o("method",{initialValue:p.crawlerInput.method})(c.a.createElement(I.a.Group,{size:"small"},c.a.createElement(I.a.Button,{value:"spiderbot"},c.a.createElement(s.a,{type:"radar-chart"})," Spider bot"),c.a.createElement(I.a.Button,{value:"urls"},c.a.createElement(s.a,{type:"ordered-list"})," URLs list"))),c.a.createElement(K,null,c.a.createElement(ce,{ellipsis:{rows:1,expandable:!0}},c.a.createElement("b",null,"Spider bot")," crawling method will get all the links inside the page of the given URL and crawl the children. It will then continue do the same with the children till no new link is found. Be careful if you have big website, this might is most likely not the right solution for you."),c.a.createElement(ce,{ellipsis:{rows:1,expandable:!0}},c.a.createElement("b",null,"URLs list")," crawling method will crawl a specific sets of URLs. In the URL input field you must provide an endpoint containing a list of URLs (a simple text format, with one URL per line). The crawler will crawl each of those URL only and will not try to find links in the page."))),c.a.createElement(O.a.Item,null,c.a.createElement(O.a.Item,{style:oe},c.a.createElement(z.a,{type:"primary",icon:"caret-right",htmlType:"submit"},"Start")),c.a.createElement(O.a.Item,{style:oe},o("saveAs",{initialValue:p.name})(c.a.createElement(k.a,{addonBefore:"Save as",placeholder:"Leave empty to don't save"}))),c.a.createElement(K,null,c.a.createElement(ce,null,"If you save as ",c.a.createElement(le,{code:!0},"Default"),", this preset will always be load per default."))))}),ue=n(46),me=n.n(ue),fe=n(148),pe=n.n(fe),de=n(233),he=n.n(de),Ee=n(241),ve=n(234),ge=n(64),we=n.n(ge),ye=n(236),be=n.n(ye),xe=n(100),ke=n.n(xe),je=n(30),Oe=n.n(je),Se=function(e){var t=e.timestamp,n=e.id;return Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t.toString(),n);case 3:Oe.a.success("Page pinned as reference for comparison.",2),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),A.a.error({message:"Something went wrong!",description:e.t0.toString()});case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},Ie=function(e){return function(e){return c.a.createElement(s.a,{type:"pushpin",title:"pin as reference for comparison",onClick:Se(e)})}(e)},Ce={textAlign:"center"},Ae={width:300},Te={width:Ae.width+20,marginBottom:10},ze={paddingTop:10,paddingBottom:10},Pe={gutter:10,fitWidth:!0},Le=n(235),Re=n.n(Le),Ue={marginLeft:5,marginRight:5},Be=function(e,t,n){var a=n.timestamp,r=n.id,c=n.index;return Object(w.a)(v.a.mark(function n(){var l;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J(a.toString(),r,c,t);case 3:l=n.sent,e(l,N,a),Oe.a.success("Page pinned as reference for comparison.",2),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),A.a.error({message:"Something went wrong!",description:n.t0.toString()});case 11:case"end":return n.stop()}},n,null,[[0,8]])}))},Fe=function(e){var t=Object(a.b)().update;return c.a.createElement(c.a.Fragment,null,c.a.createElement(z.a,{style:Ue,icon:"check",size:"small",onClick:Be(t,"valid",e)},"Valid"),c.a.createElement(z.a,{style:Ue,icon:"pushpin",size:"small",onClick:Be(t,"pin",e)},"Always valid"),c.a.createElement(z.a,{style:Ue,icon:"warning",size:"small",type:"danger",onClick:Be(t,"report",e)},"Report"))},De=function(e){return"valid"===e||"pin"===e?"#0F0":"report"===e?"red":"yellow"},Me=function(e,t,n,a,r){var c=e.xMin,l=e.yMin,o=l/t,i=c/t;return{width:(e.xMax-c)/t+1,height:(e.yMax-l)/t+1,top:o,left:i+10,border:"1px solid ".concat(De(r)),position:"absolute",backgroundImage:a?'url("'.concat(n,'")'):"none",backgroundPosition:"".concat(-i,"px ").concat(-o,"px")}},Ne=function(e){var t=e.folder,n=e.id,a=e.index,l=e.originalWidth,o=e.zone,i=e.status,s=Object(r.useState)(),u=Object(b.a)(s,2),m=u[0],f=u[1],p=function(){var e=Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,$("base",n,Ae.width);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){p()},[]);var d=Object(r.useState)(!1),h=Object(b.a)(d,2),E=h[0],g=h[1],y=l/Ae.width;return c.a.createElement(Re.a,{key:"".concat(n,"-").concat(a),content:c.a.createElement(Fe,{index:a,timestamp:t,id:n}),trigger:"click"},c.a.createElement("div",{style:Me(o,y,m,E,i),onMouseOver:function(){return g(!0)},onMouseOut:function(){return g(!1)}}))},We=function(e){var t=e.folder,n=e.id,a=e.zones,l=e.originalWidth,o=void 0===l?0:l,i=e.onImg,s=void 0===i?function(){}:i,u=Object(r.useState)(),m=Object(b.a)(u,2),f=m[0],p=m[1],d=function(){var e=Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,$(t,n,Ae.width);case 3:e.t1=e.sent,(0,e.t0)(e.t1),s();case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){d()},[]),f?c.a.createElement("div",{style:Ce},a&&a.map(function(e,a){var r=e.zone,l=e.status;return c.a.createElement(Ne,Object.assign({folder:t,id:n,index:a,originalWidth:o,zone:r,status:l},{key:"zone-".concat(n,"-").concat(a)}))}),c.a.createElement("img",{style:Ae,alt:"",src:f})):null},He=function(e,t){var n=t.timestamp,a=t.id,r=(t.zones,t.status);t.type;return Object(w.a)(v.a.mark(function t(){var c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(n.toString(),a,r);case 3:c=t.sent,e(c,N,n),Oe.a.success('All zone are set to "'.concat(r,'".'),2),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),A.a.error({message:"Something went wrong!",description:t.t0.toString()});case 11:case"end":return t.stop()}},t,null,[[0,8]])}))},Ze=function(e){var t=Object(a.b)().update,n=e.status,r=e.type;return c.a.createElement(s.a,{type:r,title:'Set all zone to "'.concat(n,'".'),onClick:He(t,e)})},Ve=function(e){var t,n,r=e.timestamp,l=e.lastUpdate,o=Object(a.b)(),i=o.call,u=o.response;c.a.useEffect(function(){i(N,r)},[l]);var m=function(){t&&t.layout(),clearTimeout(n),n=setTimeout(function(){t&&t.layout()},500)};return u?c.a.createElement(ke.a,{style:ze,options:Pe,ref:function(e){t=e&&e.masonry}},u.map(function(e){var t=e.id,n=e.url,a=e.png;return c.a.createElement(we.a,{key:t,style:Te,cover:a&&c.a.createElement(We,{folder:r,id:t,zones:a.diff&&a.diff.zones,originalWidth:a.width,onImg:m}),actions:[c.a.createElement(Ze,{type:"check",timestamp:r,id:t,status:"valid",zones:a&&a.diff?a.diff.zones:[]}),c.a.createElement(Ze,{type:"warning",timestamp:r,id:t,status:"report",zones:a&&a.diff?a.diff.zones:[]}),c.a.createElement(Ie,{timestamp:r,id:t})]},c.a.createElement("p",null,c.a.createElement(s.a,{type:"link"})," ",c.a.createElement("a",{href:n},n)),!a&&c.a.createElement("p",null,c.a.createElement(s.a,{type:"picture",theme:"outlined"})," No screenshot available"),a&&!a.diff&&c.a.createElement("div",null,c.a.createElement(s.a,{type:"picture",theme:"outlined"})," New screenshot ",c.a.createElement(be.a,{color:"green"},"New")),a&&a.diff&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement(s.a,{type:"picture",theme:"outlined"})," Pixel diff ratio: ",a.diff.pixelDiffRatio),a.diff.zones.length>0&&c.a.createElement("p",null,c.a.createElement("b",null,"Zone:"),"\xa0",[["diff"],["valid","pin"],["report"]].map(function(e){var t,n,r=Object(ve.a)(e),l=r[0],o=r.slice(1);return c.a.createElement(c.a.Fragment,{key:l},c.a.createElement("span",{style:{marginLeft:10,color:De(l)}},"\u25a0")," ",c.a.createElement("b",null,(t=a.diff.zones,n=[l].concat(Object(Ee.a)(o)),t.filter(function(e){var t=e.status;return n.includes(t)}).length))," ",l)}))))})):c.a.createElement(me.a,null)},$e=n(238),qe=n.n($e),Je=n(74),Qe=(n(533),function(e){return Object(Je.unix)(e).calendar()}),Ge=n(237),Ye=n.n(Ge),_e=function(e,t){var n=t.timestamp;return function(){var t=Object(w.a)(v.a.mark(function t(a){var r,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a?"done":"review",t.next=4,G(n.toString(),r);case 4:c=t.sent,e(c,M,n.toString()),Oe.a.success('Status set to "'.concat(r,'".'),2),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),A.a.error({message:"Something went wrong!",description:t.t0.toString()});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},Ke=function(e){var t=Object(a.b)().update;return c.a.createElement(Ye.a,{checkedChildren:"done",unCheckedChildren:"review",checked:"done"===e.status,onChange:_e(t,e)})},Xe=p.a.Title,et=function(e){var t=e.crawler,n=t.timestamp,a=t.url,r=t.diffZoneCount,l=t.status,o=t.urlsCount,i=t.inQueue,s=t.startAt,u=t.lastUpdate,m=t.method,f=t.viewport,p=f.width,d=f.height,h=e.history,E=o+i,v=Math.floor(o/E*100);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Xe,{level:3},Qe(n)),c.a.createElement("p",null,c.a.createElement(z.a,{icon:"retweet",size:"small",onClick:function(){h.push({pathname:"/",search:Object(P.stringify)({url:a,width:p,height:d,method:m})})}},"Re-run")),c.a.createElement("p",null,c.a.createElement("b",null,"URL:")," ",a),c.a.createElement("p",null,c.a.createElement("b",null,"Screen:")," ",p,"x",d),c.a.createElement("p",null,c.a.createElement("b",null,"URL crawled:")," ",o),c.a.createElement("p",null,c.a.createElement("b",null,"Duration:")," ",Object(Je.duration)(u-s).format("h [hrs], m [min], s [sec]")),i>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(qe.a,{percent:v}),c.a.createElement("p",null,c.a.createElement("b",null,"In queue:")," ",i)),r>0&&c.a.createElement("p",null,c.a.createElement(Ke,{status:l,timestamp:n})))},tt=function(e){var t=e.match.params.timestamp,n=e.history,r=Object(a.b)(),l=r.call,o=r.response,i=r.cache,s=r.update;c.a.useEffect(function(){l(M,t)},[]),c.a.useEffect(function(){if(o){var e=i(B);if(e){var t=e.findIndex(function(e){return e.id===o.id});-1!==t&&(he()(e[t],o)||(e[t]=o,s(e,B)))}}},[o]);var u=pe()(o,"lastUpdate");return clearTimeout(Y),Y=setTimeout(function(){l(M,t)},1e3),o?c.a.createElement(c.a.Fragment,null,c.a.createElement(et,{crawler:o,history:n}),c.a.createElement(Ve,{timestamp:t,lastUpdate:u})):c.a.createElement(me.a,null)},nt=function(e){return 0===e?{borderTop:"1px solid #7e8791"}:{}},at=function(e,t,n){return n>0?"loading":e?"done"===t?"issues-close":"exclamation-circle":"check"},rt=function(){var e=Object(a.b)(),t=e.call,n=e.response;return c.a.useEffect(function(){t(B)},[]),c.a.createElement(ne.a,{theme:"dark",mode:"inline"},c.a.createElement(ne.a.Item,{key:"new"},c.a.createElement(s.a,{type:"plus"}),c.a.createElement("span",{className:"nav-text"},"New"),c.a.createElement(d.b,{to:"/"})),c.a.createElement(ne.a.Item,{key:"pins"},c.a.createElement(s.a,{type:"pushpin"}),c.a.createElement("span",{className:"nav-text"},"Pins"),c.a.createElement(d.b,{to:"/pins"})),n&&n.sort(function(e,t){var n=e.timestamp;return t.timestamp-n}).map(function(e,t){var n=e.timestamp,a=e.url,r=e.id,l=e.diffZoneCount,o=e.status,i=e.inQueue;return c.a.createElement(ne.a.Item,{key:"crawler-".concat(r),title:a,style:nt(t)},c.a.createElement(s.a,{type:at(l,o,i)}),c.a.createElement("span",{className:"nav-text"},Qe(n)),c.a.createElement(d.b,{to:R(n)}))}))},ct=p.a.Title,lt=function(){var e,t,n=c.a.useState(),a=Object(b.a)(n,2),r=a[0],l=a[1],o=function(){var e=Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,W();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();c.a.useEffect(function(){o()},[]);var i=function(){e&&e.layout(),clearTimeout(t),t=setTimeout(function(){e&&e.layout()},500)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(ct,{level:3},"Pins"),r?c.a.createElement(ke.a,{style:ze,options:Pe,ref:function(t){e=t&&t.masonry}},r.map(function(e){var t=e.id,n=e.url,a=e.png;return c.a.createElement(we.a,{key:t,style:Te,cover:a&&c.a.createElement(We,{folder:"base",id:t,onImg:i}),actions:[c.a.createElement(s.a,{type:"delete",title:"Delete pin"}),c.a.createElement(d.b,{to:L(t)},c.a.createElement(s.a,{type:"code",title:"Insert code while crawling"}))]},c.a.createElement("p",null,c.a.createElement(s.a,{type:"link"})," ",c.a.createElement("a",{href:n},n)),!a&&c.a.createElement("p",null,c.a.createElement(s.a,{type:"picture",theme:"outlined"})," No screenshot available"))})):c.a.createElement(me.a,null))},ot=n(240),it=n.n(ot),st=(n(546),n(548),function(e){return c.a.createElement(ne.a,null,c.a.createElement(ne.a.Item,{key:"1",onClick:function(){e('module.exports = async function run(page) {\n    await page.evaluate(() => {\n        const div = document.createElement("div");\n        div.innerHTML = "Test-crawler is awesome!";\n        document.body.insertBefore(div, document.body.firstChild);\n    });\n}')}},"Test-crawler is awesome"),c.a.createElement(ne.a.Item,{key:"2",onClick:function(){e("module.exports = async function run(page) {\n    await page.evaluate(() => {\n        hrefs = Array.from(document.links).map(\n            link => link.href.replace('/?', '/iframe.html?')\n        );\n\n        document.body.innerHTML = hrefs.map(\n            href => `<a href=\"${href}\">${href}</a>`\n        ).join('<br />');\n    });\n}")}},"Storybook"))}),ut=p.a.Title,mt=p.a.Paragraph,ft=p.a.Text,pt={border:"1px solid #EEE",marginBottom:15,marginRight:15,float:"left"},dt=Object(y.a)({},Te,{float:"left"}),ht={marginBottom:15},Et={marginRight:10},vt=function(e){var t=e.match.params.id,n=c.a.useState("module.exports = async function run(page) {\n// your code\n}"),a=Object(b.a)(n,2),r=a[0],l=a[1],o=c.a.useState(),i=Object(b.a)(o,2),u=i[0],m=i[1],f=function(){var e=Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,H(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=l,e.next=8,V(t);case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();c.a.useEffect(function(){f()},[]);var p=function(){var e=Object(w.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(t,r);case 3:Oe.a.success("Code saved.",2),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),A.a.error({message:"Something went wrong!",description:e.t0.toString()});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ut,{level:3},"Add some code"),u?c.a.createElement(c.a.Fragment,null,c.a.createElement(K,null,c.a.createElement(mt,null,"Inject some code in the crawler while you are parsing the page. This code will be executed just after the page finish loaded, before to make the screenshot and before extracting the links. You need to export a function that will take as first parameter the ",c.a.createElement(ft,{code:!0},"page")," coming from Puppeteer."),c.a.createElement(mt,null,c.a.createElement(ft,{code:!0},"module.exports = async (page) => ...some code"))),c.a.createElement("div",{style:ht},c.a.createElement(z.a,{icon:"save",onClick:p,style:Et},"Save"),c.a.createElement(z.a,{icon:"caret-right",onClick:function(){Oe.a.warn("To be implemented.",2)},style:Et},"Preview"),c.a.createElement(ee.a,{overlay:st(l)},c.a.createElement(z.a,{style:Et},"Code snippet ",c.a.createElement(s.a,{type:"down"})))),c.a.createElement(it.a,{mode:"javascript",theme:"tomorrow",onChange:l,fontSize:14,value:r,style:pt}),c.a.createElement(we.a,{style:dt,cover:u.png&&c.a.createElement(We,{folder:"base",id:u.id})},c.a.createElement("p",null,c.a.createElement(s.a,{type:"link"})," ",c.a.createElement("a",{href:u.url},u.url)),!u.png&&c.a.createElement("p",null,c.a.createElement(s.a,{type:"picture",theme:"outlined"})," No screenshot available"))):c.a.createElement(me.a,null))},gt=m.a.Sider,wt=m.a.Content,yt=p.a.Title,bt={minHeight:"100vh"},xt={color:"#fff",margin:10},kt={background:"#fff",padding:24,margin:10,minHeight:280},jt=function(){return c.a.createElement(d.a,null,c.a.createElement(m.a,{style:bt},c.a.createElement(gt,null,c.a.createElement(yt,{level:3,style:xt},c.a.createElement(s.a,{type:"eye"})," Test-crawler"),c.a.createElement(rt,null)),c.a.createElement(wt,{style:kt},c.a.createElement(h.a,{path:"/",exact:!0,component:se}),c.a.createElement(h.a,{path:"/pins",exact:!0,component:lt}),c.a.createElement(h.a,{path:L(":id"),exact:!0,component:vt}),c.a.createElement(h.a,{path:R(":timestamp"),component:tt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(a.a,null,c.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[243,1,2]]]);
//# sourceMappingURL=main.6ef6641e.chunk.js.map