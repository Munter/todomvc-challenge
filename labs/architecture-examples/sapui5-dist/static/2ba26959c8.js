!function(){"use strict";function e(){"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com"))}function t(){var e;return[/labs/,/\w*-examples/].forEach(function(t){var n=location.href.match(t);!e&&n&&(e=location.href.indexOf(n))}),location.href.substr(0,e)}function n(e,n){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var r=new XMLHttpRequest;r.open("GET",t()+e,!0),r.send(),r.onload=function(){200===r.status&&n&&n(r.responseText)}}function r(e,t){if(!(this instanceof r))return new r(e,t);var n,i;if("object"!=typeof e)try{e=JSON.parse(e)}catch(o){return}t&&(n=t.template,i=t.framework),!n&&e.templates&&(n=e.templates.todomvc),!i&&document.querySelector("[data-framework]")&&(i=document.querySelector("[data-framework]").getAttribute("data-framework")),n&&e[i]&&(this.frameworkJSON=e[i],this.template=n,this.append())}var i=function(e){e.defaults=function(e){if(!e)return e;for(var t=1,n=arguments.length;n>t;t++){var r=arguments[t];if(r)for(var i in r)null==e[i]&&(e[i]=r[i])}return e},e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/,n={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},r=/\\|'|\r|\n|\t|\u2028|\u2029/g;return e.template=function(i,o,a){var s;a=e.defaults({},a,e.templateSettings);var u=new RegExp([(a.escape||t).source,(a.interpolate||t).source,(a.evaluate||t).source].join("|")+"|$","g"),c=0,l="__p+='";i.replace(u,function(e,t,o,a,s){return l+=i.slice(c,s).replace(r,function(e){return"\\"+n[e]}),t&&(l+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"),o&&(l+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),a&&(l+="';\n"+a+"\n__p+='"),c=s+e.length,e}),l+="';\n",a.variable||(l="with(obj||{}){\n"+l+"}\n"),l="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+l+"return __p;\n";try{s=new Function(a.variable||"obj","_",l)}catch(f){throw f.source=l,f}if(o)return s(o,e);var p=function(t){return s.call(this,t,e)};return p.source="function("+(a.variable||"obj")+"){\n"+l+"}",p},e}({});"todomvc.com"===location.hostname&&(window._gaq=[["_setAccount","UA-31081062-1"],["_trackPageview"]],function(e,t){var n=e.createElement(t),r=e.getElementsByTagName(t)[0];n.src="//www.google-analytics.com/ga.js",r.parentNode.insertBefore(n,r)}(document,"script")),r.prototype.append=function(){var e=document.createElement("aside");e.innerHTML=i.template(this.template,this.frameworkJSON),e.className="learn";var n=e.querySelectorAll(".demo-link");Array.prototype.forEach.call(n,function(e){e.setAttribute("href",t()+e.getAttribute("href"))}),document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",e.outerHTML)},e(),n("learn.json",r)}(),function(){"use strict";var e;jQuery.sap.registerModulePath("todo","js/todo"),e=sap.ui.view({type:sap.ui.core.mvc.ViewType.JS,id:"todoView",viewName:"todo.Todo"}),e.placeAt("main")}();