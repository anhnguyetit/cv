(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/profile.3f529d0c.png"},34:function(e,a,t){e.exports=t(63)},39:function(e,a,t){},40:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(30),r=t.n(c),m=(t(39),t(40),t(19),t(41),t(14)),s=t(1),i=t(3),o=t(4),u=t(6),E=t(5),d=t(31),v=t.n(d),h="https://5fec1da2573752001730b1bf.mockapi.io/informations/";function f(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2?arguments[2]:void 0;return v()({method:a,url:"".concat(h,"/").concat(e),data:t}).catch((function(e){console.log(e)}))}var N=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={items:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f("informations","GET",null).then((function(a){e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null," ABOUT ME ")),l.a.createElement("p",{className:"grey-text"},"Hi ! My name is Nguyet and I am 21 years old. I am from QuangNam.  I have experience in software testing. I am a person who always learns and tries hard at work.")),l.a.createElement("div",{className:"card-action"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null," PERSONAL INFO ")),l.a.createElement("div",{className:"row mt"},l.a.createElement("div",{className:"col s12 m6 l6 xl6"},e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Full name: ")," ",e.FullName)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Gender: ")," ",e.Gender)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Date of birth: ")," ",e.DateOfBirth)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Email: ")," ",e.Email)}))),l.a.createElement("div",{className:"col s12 m6 l6 xl6"},e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Address: ")," ",e.Address)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Phone number: ")," ",e.Phone)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Main language: ")," ",e.MainLanguage)})),e.map((function(e){return l.a.createElement("p",{key:e.id},l.a.createElement("strong",null,"Second language: ")," ",e.SecondLanguage)})))))))}}]),t}(n.Component),p=t(7),g=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement(p.HashLink,{to:"/CV/",className:"brand-logo"},"My CV"),l.a.createElement(p.HashLink,{to:"/CV/","data-target":"side-nav",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"sidenav",id:" side-nav"},l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/"},l.a.createElement("i",{className:"fas fa-home"}),"Home")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/skills"},l.a.createElement("i",{className:"fas fa-copy"}),"Skills")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/experiences"},l.a.createElement("i",{className:"fas fa-id-badge"}),"Experiences")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/educations"},l.a.createElement("i",{className:"fas fa-graduation-cap"}),"Educations")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/contacts"},l.a.createElement("i",{className:"fas fa-address-card"}),"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://drive.google.com/file/d/1nHUtIUZJh6L-xmHdAtfHnfZJf1ekLJMz/view?usp=sharing",target:"blank"},l.a.createElement("i",{className:"fas fa-download"})," Download CV"))),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/"},l.a.createElement("i",{className:"fas fa-home"})," Home")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/skills"},l.a.createElement("i",{className:"fas fa-copy"})," Skills")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/experiences"},l.a.createElement("i",{className:"fas fa-id-badge"})," Experiences")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/educations"},l.a.createElement("i",{className:"fas fa-graduation-cap"})," Educations")),l.a.createElement("li",null,l.a.createElement(p.HashLink,{to:"/CV/contacts"},l.a.createElement("i",{className:"fas fa-address-card"})," Contact")))))))))}}]),t}(n.Component),b=t(33),k=t.n(b),y=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{className:"activator",src:k.a,alt:"avatar"}),l.a.createElement(p.HashLink,{to:"/CV/",className:"btn-floating halfway-fab waves-effect waves-light teal"},l.a.createElement("i",{className:"activator material-icons right"},"more_vert"))),l.a.createElement("div",{style:{textAlign:"center"},className:"card-content"},l.a.createElement("span",{className:"card-title teal-text"},"Nguyen Thi Anh Nguyet"),l.a.createElement("p",null,"Tester")),l.a.createElement("div",{className:"card-reveal"},l.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Flow me",l.a.createElement("i",{className:"material-icons right"},"close")),l.a.createElement("p",{className:"flex-container"},l.a.createElement("a",{href:"https://www.facebook.com/kim.thanh.150399",target:"blank"}," ",l.a.createElement("i",{className:"fab fa-facebook-f blue-text text-darken-4 social-style"})),l.a.createElement("a",{href:"https://myaccount.google.com/u/1/?utm_source=OGB&tab=wk&utm_medium=act&pli=1",target:"blank"}," ",l.a.createElement("i",{className:"fab fa-google-plus-g red-text text-darken-4 social-style"})),l.a.createElement("a",{href:"https://www.instagram.com/kimthanh.150399/?hl=vi",target:"blank"},l.a.createElement("i",{className:"fab fa-instagram orange-text text-darken-4 social-style"}))))))}}]),t}(n.Component),w=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={items:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f("Careers","GET",null).then((function(a){e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,l.a.createElement("i",{className:"fas fa-user-check icon"}),"Career Objective"),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},e.map((function(e){return l.a.createElement("p",{key:e.id}," - ",e.content)})))))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,l.a.createElement("i",{className:"fas fa-user-graduate icon"}),"The skill itself"),l.a.createElement("hr",null),l.a.createElement("div",{className:""},l.a.createElement("p",null," - Group skill."),l.a.createElement("br",null),l.a.createElement("p",null,"- Easily adaptable to new environments."))))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,l.a.createElement("i",{className:"fas fa-language icon"}),"Language level"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 m10 l10"},l.a.createElement("p",null," - English")),l.a.createElement("div",{className:"col s4 m2 l2"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-star active"}),l.a.createElement("i",{className:"fas fa-star active"}),l.a.createElement("i",{className:"fas fa-star active"}),l.a.createElement("i",{className:"fas fa-star active"}),l.a.createElement("i",{className:"fas fa-star "}))))))))}}]),t}(n.Component),O=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement(N,null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement(w,null)))))}}]),t}(n.Component),C=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={items:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f("skills","GET",null).then((function(a){e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement("section",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,"PROFESSION SKILLS")),l.a.createElement("div",{className:"row mt-top"},e.map((function(e){return l.a.createElement("div",{className:"col s6",key:e.id},l.a.createElement("p",null,e.skills),l.a.createElement("div",{className:"progress grey lighten-1"},l.a.createElement("div",{className:"determinate teal lighten-3",style:{width:e.completed}})))})))))))))}}]),t}(n.Component),j=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={items:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f("experiences","GET",null).then((function(a){return e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement("section",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,"EXPERIENCES")," ",l.a.createElement("hr",null),e.map((function(e){return l.a.createElement("div",{className:"row",key:e.id},l.a.createElement("div",{className:"col s12 m4 l4 xl4"},l.a.createElement("p",{className:"teal lighten-3 year_exp white-text"},l.a.createElement("strong",null,e.date))),l.a.createElement("div",{className:"col s12 m8 l8 xl8"},l.a.createElement("blockquote",{className:"no-pad"},l.a.createElement("h6",{className:"no-pad mt-button"},l.a.createElement("strong",null,e.title)),l.a.createElement("p",null,e.content))))})))))))))}}]),t}(n.Component),x=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,"EDUCATIONS")),l.a.createElement("table",{className:"striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Certificate"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Danang University - University of Education"),l.a.createElement("td",null,"2017 - Present"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://ued.udn.vn/",target:"blank",className:"btn pink lighten-2 "},"View"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Athena English Center"),l.a.createElement("td",null,"2018 - 2019"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://anhnguathena.vn/",target:"blank",className:"btn pink lighten-2 "},"View")))))))))))}}]),t}(n.Component),V=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",{className:"mt-button"},l.a.createElement("strong",null,"CONTACT")),l.a.createElement("table",{className:"striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Mail ID"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"anhnguyet100199@gmail.com"),l.a.createElement("td",null,l.a.createElement("a",{target:"blank",href:"https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKCJDtpDcPnpczfvVmVppCXvjsMKvbzZqqvmFLPJMsXwdJPQcNcMXVqgMRGhcvrCGMqtjWL",className:"btn pink lighten-2 "},"Click to send mail")))))))))))}}]),t}(n.Component);var L=function(){return l.a.createElement(m.BrowserRouter,{basename:"/my_cv"},l.a.createElement(m.BrowserRouter,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s.d,{exact:!0,path:"/CV/",component:O}),l.a.createElement(s.g,null,l.a.createElement(s.d,{path:"/CV/skills",component:C}),l.a.createElement(s.d,{path:"/CV/experiences",component:j}),l.a.createElement(s.d,{path:"/CV/educations",component:x}),l.a.createElement(s.d,{path:"/CV/contacts",component:V})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.61b67e1a.chunk.js.map