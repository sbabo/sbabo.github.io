(function(e){function t(t){for(var o,s,l=t[0],i=t[1],u=t[2],c=0,m=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c2288143"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04f1":function(e,t,n){},"2ffa":function(e){e.exports=JSON.parse('{"title":"Quiz about Foo","questions":[{"text":"Quel est le comble pour un boulanger ?","answers":["Avoir un coup de foudre","Se faire rouler dans la farine","Trouver chaussure à son pied"],"answer":"Se faire rouler dans la farine"},{"text":"WHO RUN THE WORLD ?","answers":["Un petit groupe d\'élite en secret","GIRLS !","J\'sais pas, j\'m\'en fout"],"answer":"GIRLS !"},{"text":"A vaincre sans péril..","answers":["..On triomphe sans gloire","..On triomphe sans Magloire","..Bah il est où Péril alors?"],"answer":"..On triomphe sans gloire"},{"text":"Toujours vivant, rassurez vous..","answers":["Toujours la pêche","Toujours la forme","Toujours la banane"],"answer":"Toujours la banane"},{"text":"Qui m\'a tué?","answers":["La mort","Omar","Ramo","Xavier Dupont de ligonnes"],"answer":"Omar"},{"text":"What do you want ?","answers":["Me to go back to my plane?","Be proud of what you are","a cheesburger plz","freedom"],"answer":"Me to go back to my plane?"},{"text":"Quel est le meilleur moyen de transport?","answers":["La trottinette életctrique","l\'avion A380","la dacia sandero","le tram un lundi a 17h30"],"answer":"la dacia sandero"},{"text":" 1+1 ?","answers":["2","3","11 et ca c\'est beau"],"answer":"11 et ca c\'est beau"},{"text":"Qui à été le dj attitré du Bigdil avec Lagaf en 1999 ?","answers":["DJ Aspe","David Guetta","Jean-Jacques GoldMan"],"answer":"DJ Aspe"},{"text":"Quoi ?","answers":["Feur !","la Lumpu"],"answer":"Feur"},{"text":"Pourquoi on est mieux à L.A ?","answers":["Parce que touters les feuilles sont marrons","Et le ciel est gris","Ce sera sûr et chaud"],"answer":"Ce sera sûr et chaud"}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),l={},i=Object(s["a"])(l,r,a,!1,null,null,null),u=i.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},v=b,d=(n("eb23"),Object(s["a"])(v,f,h,!1,null,"1cb8d93c",null)),g=d.exports,_={name:"home",components:{HelloWorld:g}},w=_,j=Object(s["a"])(w,p,m,!1,null,null,null),y=(j.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("Question")],1)}),k=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("b-row",[n("b-col"),n("b-col",[n("h1",[e._v("Question n°"+e._s(this.countQuestion+1))])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",{attrs:{cols:"9"}},[n("h2",[e._v(e._s(e.obj[e.countQuestion].text))])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",[n("div",[n("b-form-group",{attrs:{label:"Choisissez une ou plusieurs réponses:"}},[n("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:e.obj[e.countQuestion].answers,name:"flavour-1"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("div",[e._v("Réponse: "),n("strong",[e._v(e._s(e.selected))])]),n("div",[n("b-button",{on:{click:e.validResponse}},[e._v("Valider et passer à la question suivante")])],1)],1)]),n("b-col")],1)],1)],1)},$=[],O=(n("7f7f"),n("bc3a"),n("2ffa")),E={data:function(){return{countQuestion:0,score:0,obj:O.questions,selected:[],form:{email:this.$route.params.email,name:this.$route.params.name,company:this.$route.params.company,scoreFinal:0}}},created:function(){},methods:{fetchData:function(){},increment:function(){this.countQuestion++},validResponse:function(){this.selected[0]==this.obj[this.countQuestion].answer&&this.score++,this.increment(),this.selected=[],this.countQuestion==this.obj.length&&(this.form.scoreFinal=this.score,console.log(this.form.scoreFinal),this.$router.push({name:"result",params:this.form}),console.log("C'est fini"))}}},C=E,Q=Object(s["a"])(C,x,$,!1,null,null,null),q=Q.exports,T={name:"question",components:{Question:q}},L=T,P=Object(s["a"])(L,y,k,!1,null,null,null),R=P.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profil"},[n("Profil")],1)},F=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("b-container",{staticClass:"login"},[n("b-row",[n("b-col"),n("b-col",[n("h1",[e._v("Bienvenue "+e._s(e.$route.params.name))])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",[n("b-button",{on:{click:e.navigate}},[e._v("Commencer le test")])],1),n("b-col")],1)],1)],1)},D=[],J={name:"profil",data:function(){return{form:{email:this.$route.params.email,name:this.$route.params.name,company:this.$route.params.company}}},methods:{navigate:function(){this.$router.push({name:"question",params:this.form})}}},M=J,z=Object(s["a"])(M,A,D,!1,null,null,null),N=z.exports,W={name:"profil",components:{Profil:N}},B=W,H=Object(s["a"])(B,S,F,!1,null,null,null),V=H.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("Login")],1)},I=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("b-container",{staticClass:"login"},[n("b-row",[n("b-col"),n("b-col",[n("h1",[e._v("App Questionnaire")]),n("p",[e._v("Veuillez saisir votre adresse mail, votre Nom/Prénom et le nom de votre entreprise.")])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",[e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Your first name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Enter your email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Your name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter your last name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Your company:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"Enter your company's name"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Commencer")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1),n("b-col")],1)],1)],1)},U=[],X={name:"login",data:function(){return{form:{email:"",name:"",company:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault(),this.$router.push({name:"question",params:this.form})},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.company="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},K=X,Z=Object(s["a"])(K,Y,U,!1,null,null,null),ee=Z.exports,te={name:"login",components:{Login:ee}},ne=te,oe=Object(s["a"])(ne,G,I,!1,null,null,null),re=oe.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result"},[n("Result")],1)},se=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result"},[n("b-container",{staticClass:"result"},[n("b-row",[n("b-col"),n("b-col",[n("h1",[e._v("Resultat")])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",[n("p",[e._v("Félicitation "+e._s(e.$route.params.name)+" !")]),n("p",[e._v("Vous avez inscrit "+e._s(e.$route.params.scoreFinal)+" bonnes réponses ! ")])]),n("b-col")],1),n("b-row",[n("b-col"),n("b-col",[n("b-button",{attrs:{variant:"primary"},on:{click:e.goToQuestion}},[e._v("Recommencer le test")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.goToLogin}},[e._v("Quitter")])],1),n("b-col")],1)],1)],1)},ie=[],ue={name:"result",data:function(){return{form:{email:this.$route.params.email,name:this.$route.params.name,company:this.$route.params.company}}},created:function(){console.log(this.$route.params.scoreFinal)},methods:{goToQuestion:function(){this.$router.push({name:"question",params:this.form})},goToLogin:function(){this.$router.push({name:"login"})}}},ce=ue,pe=Object(s["a"])(ce,le,ie,!1,null,null,null),me=pe.exports,fe={name:"result",components:{Result:me}},he=fe,be=Object(s["a"])(he,ae,se,!1,null,null,null),ve=be.exports;o["default"].use(c["a"]);var de=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:re},{path:"/login",name:"login",component:re},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/questionnaire",name:"question",component:R},{path:"/profil",name:"profil",component:V},{path:"/result",name:"result",component:ve}]}),ge=n("9483");Object(ge["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _e=n("5f5b");n("f9e3"),n("2dd8");o["default"].config.productionTip=!1,o["default"].use(_e["a"]),new o["default"]({router:de,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("e332"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e332:function(e,t,n){},eb23:function(e,t,n){"use strict";var o=n("04f1"),r=n.n(o);r.a}});
//# sourceMappingURL=app.6813d1f5.js.map