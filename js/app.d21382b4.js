(function(t){function e(e){for(var i,c,o=e[0],s=e[1],l=e[2],u=0,f=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},r=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/stegano-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ac":function(t,e,a){var i,n;(function(r,c,o){t.exports?t.exports=o():(i=o,n="function"===typeof i?i.call(e,a,e,t):i,void 0===n||(t.exports=n))})(0,0,(function(){var t=function(){},e={isPrime:function(t){if(isNaN(t)||!isFinite(t)||t%1||t<2)return!1;if(t%2===0)return 2===t;if(t%3===0)return 3===t;for(var e=Math.sqrt(t),a=5;a<=e;a+=6){if(t%a===0)return!1;if(t%(a+2)===0)return!1}return!0},findNextPrime:function(t){for(var a=t;1;a+=1)if(e.isPrime(a))return a},sum:function(t,e,a){var i=0;a=a||{};for(var n=a.start||0;n<e;n+=a.inc||1)i+=t(n)||0;return 0===i&&a.defValue?a.defValue:i},product:function(t,e,a){var i=1;a=a||{};for(var n=a.start||0;n<e;n+=a.inc||1)i*=t(n)||1;return 1===i&&a.defValue?a.defValue:i},createArrayFromArgs:function(t,e,a){for(var i=new Array(a-1),n=0;n<a;n+=1)i[n]=t(n>=e?n+1:n);return i},loadImg:function(t){var e=new Image;return e.src=t,e}};return t.prototype.config={t:3,threshold:1,codeUnitSize:16,args:function(t){return t+1},messageDelimiter:function(t,e){for(var a=new Array(3*e),i=0;i<a.length;i+=1)a[i]=255;return a},messageCompleted:function(t,e,a){for(var i=!0,n=0;n<16&&i;n+=1)i=i&&255===t[e+4*n];return i}},t.prototype.getHidingCapacity=function(t,e){e=e||{};var a=this.config,i=e.width||t.width,n=e.height||t.height,r=e.t||a.t,c=e.codeUnitSize||a.codeUnitSize;return r*i*n/c>>0},t.prototype.encode=function(t,a,i){if(a.length)a=e.loadImg(a);else if(a.src)a=e.loadImg(a.src);else if(!(a instanceof HTMLImageElement))throw new Error("IllegalInput: The input image is neither an URL string nor an image.");i=i||{};var n=this.config,r=i.t||n.t,c=i.threshold||n.threshold,o=i.codeUnitSize||n.codeUnitSize,s=e.findNextPrime(Math.pow(2,r)),l=i.args||n.args,d=i.messageDelimiter||n.messageDelimiter;if(!r||r<1||r>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');var u=document.createElement("canvas"),f=u.getContext("2d");u.style.display="none",u.width=i.width||a.width,u.height=i.height||a.height,i.height&&i.width?f.drawImage(a,0,0,i.width,i.height):f.drawImage(a,0,0);var g,b,h,p,m,O,j,v,w,y,x,I,k,S=f.getImageData(0,0,u.width,u.height),C=S.data,M=o/r>>0,z=o%r,E=[];for(w=0;w<=t.length;w+=1){if(O=t.charCodeAt(w)||0,j=z*w%r,j>0&&b){if(v=Math.pow(2,r-j)-1,h=Math.pow(2,o)*(1-Math.pow(2,-j)),p=(O&v)<<j,m=(b&h)>>o-j,E.push(p+m),w<t.length){for(v=Math.pow(2,2*r-j)*(1-Math.pow(2,-r)),y=1;y<M;y+=1)g=O&v,E.push(g>>(y-1)*r+(r-j)),v<<=r;z*(w+1)%r===0?(v=Math.pow(2,o)*(1-Math.pow(2,-r)),g=O&v,E.push(g>>o-r)):z*(w+1)%r+(r-j)<=r&&(g=O&v,E.push(g>>(M-1)*r+(r-j)))}}else if(w<t.length)for(v=Math.pow(2,r)-1,y=0;y<M;y+=1)g=O&v,E.push(g>>y*r),v<<=r;b=O}var T,U,L=d(E,c);for(x=0;4*(x+c)<=C.length&&x+c<=E.length;x+=c){for(U=[],w=0;w<c&&w+x<E.length;w+=1){for(T=0,y=x;y<c+x&&y<E.length;y+=1)T+=E[y]*Math.pow(l(w),y-x);U[w]=255-s+1+T%s}for(w=4*x;w<4*(x+U.length)&&w<C.length;w+=4)C[w+3]=U[w/4%c];k=U.length}for(I=x+k;I-(x+k)<L.length&&4*(x+L.length)<C.length;I+=1)C[4*I+3]=L[I-(x+k)];for(w=4*(I+1)+3;w<C.length;w+=4)C[w]=255;return S.data=C,f.putImageData(S,0,0),u.toDataURL()},t.prototype.decode=function(t,a){if(t.length)t=e.loadImg(t);else if(t.src)t=e.loadImg(t.src);else if(!(t instanceof HTMLImageElement))throw new Error("IllegalInput: The input image is neither an URL string nor an image.");a=a||{};var i=this.config,n=a.t||i.t,r=a.threshold||i.threshold,c=a.codeUnitSize||i.codeUnitSize,o=e.findNextPrime(Math.pow(2,n)),s=(a.args||i.args,a.messageCompleted||i.messageCompleted);if(!n||n<1||n>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');var l=document.createElement("canvas"),d=l.getContext("2d");l.style.display="none",l.width=a.width||t.width,l.height=a.width||t.height,a.height&&a.width?d.drawImage(t,0,0,a.width,a.height):d.drawImage(t,0,0);var u,f,g=d.getImageData(0,0,l.width,l.height),b=g.data,h=[];if(1===r)for(u=3,f=!1;!f&&u<b.length&&!f;u+=4)f=s(b,u,r),f||h.push(b[u]-(255-o+1));var p="",m=0,O=0,j=Math.pow(2,c)-1;for(u=0;u<h.length;u+=1)m+=h[u]<<O,O+=n,O>=c&&(p+=String.fromCharCode(m&j),O%=c,m=h[u]>>n-O);return 0!==m&&(p+=String.fromCharCode(m&j)),p},new t}))},"0e1c":function(t,e,a){},"1c9b":function(t,e,a){"use strict";a("69eb")},"22cb":function(t,e,a){"use strict";a("0e1c")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=a("cf05"),r=a.n(n);const c=Object(i["p"])("data-v-0e79bffa");Object(i["i"])("data-v-0e79bffa");const o={class:"container"},s=Object(i["f"])("header",{class:"navbar"},[Object(i["f"])("section",{class:"navbar-section"},[Object(i["f"])("a",{href:"#",class:"navbar-brand mr-2"},"Stegano Vue")]),Object(i["f"])("section",{class:"navbar-center"},[Object(i["f"])("img",{alt:"Vue logo",width:"40",src:r.a})]),Object(i["f"])("section",{class:"navbar-section"},[Object(i["f"])("a",{href:"https://github.com/skotniczny/stegano-vue",class:"btn btn-link"},"GitHub")])],-1);Object(i["h"])();const l=c((t,e,a,n,r,c)=>{const l=Object(i["k"])("Tabs");return Object(i["g"])(),Object(i["c"])("div",o,[s,Object(i["f"])(l)])}),d=Object(i["p"])("data-v-257873fd");Object(i["i"])("data-v-257873fd");const u={class:"hello"},f={key:0,class:"loader"},g=Object(i["f"])("div",{class:"loading-lg loading"},null,-1),b={class:"tab tab-block"};Object(i["h"])();const h=d((t,e,a,n,r,c)=>(Object(i["g"])(),Object(i["c"])("div",u,[r.isLoading?(Object(i["g"])(),Object(i["c"])("div",f,[g])):Object(i["d"])("",!0),Object(i["f"])("ul",b,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(r.tabs,t=>(Object(i["g"])(),Object(i["c"])("li",{class:["tab-item",{active:c.isActive(t.id)}],key:t.id,onClick:e[1]||(e[1]=(...t)=>c.handleTabs&&c.handleTabs(...t))},[Object(i["f"])("a",{href:t.id},Object(i["m"])(t.text),9,["href"])],2))),128))]),(Object(i["g"])(),Object(i["c"])(Object(i["l"])(c.currentTab),{onToggleLoader:c.toggleLoader,class:"tab-content"},null,8,["onToggleLoader"]))]))),p=Object(i["p"])("data-v-e7267fa6");Object(i["i"])("data-v-e7267fa6");const m={id:"hide"},O={class:"columns"},j={class:"column col-4"},v={class:"panel bg-secondary"},w={class:"panel-body"},y=Object(i["f"])("h2",null,"Krok 1",-1),x={class:"form-group"},I=Object(i["f"])("label",{class:"form-label",for:"input-text"},"Wpisz tekst do ukrycia",-1),k={class:"text-right text-muted text-small"},S=Object(i["f"])("h2",null,"Krok 2",-1),C={class:"form-group"},M=Object(i["f"])("label",{class:"form-label",for:"input-file"},"Wyślij plik graficzny",-1),z=Object(i["f"])("h2",null,"Krok 3",-1),E={class:"form-group"},T=Object(i["e"])(" Ukryj wiadomość "),U=Object(i["f"])("i",{class:"icon icon-edit"},null,-1),L={class:"column col-8"},D={class:"columns"},P={class:"column"},_={class:"p-relative"},$=Object(i["f"])("span",{class:"p-absolute label"},"Oryginalny obraz",-1),A=Object(i["f"])("div",{class:"divider-vert","data-content":"⤰"},null,-1),V={class:"column"},H={class:"p-relative"},R=Object(i["f"])("span",{class:"p-absolute label label-secondary"},"Zakodowany obraz",-1);Object(i["h"])();const K=p((t,e,a,n,r,c)=>(Object(i["g"])(),Object(i["c"])("div",m,[Object(i["f"])("div",O,[Object(i["f"])("div",j,[Object(i["f"])("div",v,[Object(i["f"])("div",w,[y,Object(i["f"])("div",x,[I,Object(i["o"])(Object(i["f"])("textarea",{autofocus:"",class:"form-input",id:"input-text",placeholder:"Ukryta wiadomość",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>r.textInput=t),onKeyup:e[2]||(e[2]=(...t)=>c.updateCapacity&&c.updateCapacity(...t))},null,544),[[i["n"],r.textInput]]),Object(i["f"])("div",k,Object(i["m"])(r.capacity),1)]),S,Object(i["f"])("div",C,[M,Object(i["f"])("input",{class:"form-input",id:"input-file",type:"file",onChange:e[3]||(e[3]=(...t)=>c.uploadOriginalImage&&c.uploadOriginalImage(...t)),accept:"image/png, image/jpeg"},null,32)]),z,Object(i["f"])("div",E,[Object(i["f"])("button",{class:"btn btn-primary btn-block",disabled:c.isBtnDisabled,onClick:e[4]||(e[4]=(...t)=>c.hide&&c.hide(...t))},[T,U],8,["disabled"])])])])]),Object(i["f"])("div",L,[Object(i["f"])("div",D,[Object(i["f"])("div",P,[Object(i["f"])("div",_,[Object(i["f"])("img",{class:"img-responsive",ref:"orig",src:r.imgSrc},null,8,["src"]),$])]),A,Object(i["f"])("div",V,[Object(i["f"])("div",H,[Object(i["f"])("img",{class:"img-responsive",src:r.imgEncodedSrc},null,8,["src"]),R])])])])])])));var N=a("01ac"),B=a.n(N),F={name:"HideMessage",data(){return{imgSrc:"",imgEncodedSrc:"",textInput:"",capacity:"0 / 0"}},computed:{isBtnDisabled(){return""===this.textInput||""===this.imgSrc}},methods:{uploadOriginalImage(t){this.$emit("toggle-loader");const e=t.target.files[0],a=new FileReader;a.onload=t=>{this.imgSrc=t.target.result,this.$emit("toggle-loader"),this.$nextTick(()=>this.updateCapacity())},a.readAsDataURL(e)},hide(){this.$emit("toggle-loader"),setTimeout(()=>{this.imgEncodedSrc=B.a.encode(this.textInput,this.imgSrc),this.$emit("toggle-loader")},1)},updateCapacity(){const t=this.textInput.length,e=B.a.getHidingCapacity(this.$refs.orig);this.capacity=`${t} / ${e}`}}};a("22cb");F.render=K,F.__scopeId="data-v-e7267fa6";var W=F;const Z=Object(i["p"])("data-v-2a45e0f4");Object(i["i"])("data-v-2a45e0f4");const J={id:"show"},q={class:"columns"},G={class:"column col-4"},Q={class:"panel bg-secondary"},X={class:"panel-body"},Y=Object(i["f"])("h2",null,"Krok 1",-1),tt={class:"form-group"},et=Object(i["f"])("label",{class:"form-label",for:"input-file"},"Wyślij plik graficzny",-1),at=Object(i["f"])("h2",null,"Krok 2",-1),it={class:"form-group"},nt=Object(i["e"])(" Odczytaj wiadomość "),rt=Object(i["f"])("i",{class:"icon icon-upload"},null,-1),ct=Object(i["f"])("label",{class:"form-label",for:"output-text"},"Odczytana wiadomości",-1),ot={class:"column col-8"},st={class:"p-relative"},lt=Object(i["f"])("span",{class:"p-absolute label label-secondary"},"Zakodowany obraz",-1);Object(i["h"])();const dt=Z((t,e,a,n,r,c)=>(Object(i["g"])(),Object(i["c"])("div",J,[Object(i["f"])("div",q,[Object(i["f"])("div",G,[Object(i["f"])("div",Q,[Object(i["f"])("div",X,[Y,Object(i["f"])("div",tt,[et,Object(i["f"])("input",{class:"form-input",id:"input-file",type:"file",onChange:e[1]||(e[1]=(...t)=>c.uploadEncodedImage&&c.uploadEncodedImage(...t)),accept:"image/png"},null,32)]),at,Object(i["f"])("div",it,[Object(i["f"])("button",{class:"btn btn-primary btn-block mb-2",disabled:c.isBtnDisabled,onClick:e[2]||(e[2]=(...t)=>c.show&&c.show(...t))},[nt,rt],8,["disabled"]),ct,Object(i["o"])(Object(i["f"])("textarea",{ref:"output",class:"form-input",id:"output-text",placeholder:"Wyślij obraz żeby odczytać wiadomość!",rows:"3","onUpdate:modelValue":e[3]||(e[3]=t=>r.textOutput=t)},null,512),[[i["n"],r.textOutput]])])])])]),Object(i["f"])("div",ot,[Object(i["f"])("div",st,[Object(i["f"])("img",{class:"img-responsive",src:r.imgEncodedSrc},null,8,["src"]),lt])])])])));var ut={name:"HideMessage",data(){return{imgEncodedSrc:"",textOutput:""}},computed:{isBtnDisabled(){return""===this.imgEncodedSrc}},methods:{uploadEncodedImage(t){this.$emit("toggle-loader");const e=t.target.files[0],a=new FileReader;a.onload=t=>{this.imgEncodedSrc=t.target.result,this.$emit("toggle-loader")},a.readAsDataURL(e)},show(){this.$emit("toggle-loader"),setTimeout(()=>{this.textOutput=B.a.decode(this.imgEncodedSrc),this.$refs.output.focus(),this.$emit("toggle-loader")},500)}}};a("6b0a");ut.render=dt,ut.__scopeId="data-v-2a45e0f4";var ft=ut,gt={name:"Tabs",data(){return{isLoading:!1,target:"#hide",tabs:[{id:"#hide",text:"Zapisz wiadomość"},{id:"#show",text:"Odczytaj wiadomość"}]}},computed:{currentTab(){switch(this.target){case"#hide":return W;case"#show":return ft;default:return W}}},methods:{handleTabs(t){t.preventDefault();const e=t.target;this.target=e.hash},isActive(t){return this.target===t},toggleLoader(){this.isLoading=!this.isLoading}}};a("651c");gt.render=h,gt.__scopeId="data-v-257873fd";var bt=gt,ht=(a("bc12"),a("8966"),{name:"App",components:{Tabs:bt}});a("1c9b");ht.render=l,ht.__scopeId="data-v-0e79bffa";var pt=ht;Object(i["b"])(pt).mount("#app")},"651c":function(t,e,a){"use strict";a("bec6")},"69eb":function(t,e,a){},"6b0a":function(t,e,a){"use strict";a("ca5c")},bec6:function(t,e,a){},ca5c:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d21382b4.js.map