!function(){"use strict";function t(){"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com"))}function e(){var t;return[/labs/,/\w*-examples/].forEach(function(e){var i=location.href.match(e);!t&&i&&(t=location.href.indexOf(i))}),location.href.substr(0,t)}function i(t,i){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var o=new XMLHttpRequest;o.open("GET",e()+t,!0),o.send(),o.onload=function(){200===o.status&&i&&i(o.responseText)}}function o(t,e){if(!(this instanceof o))return new o(t,e);var i,n;if("object"!=typeof t)try{t=JSON.parse(t)}catch(r){return}e&&(i=e.template,n=e.framework),!i&&t.templates&&(i=t.templates.todomvc),!n&&document.querySelector("[data-framework]")&&(n=document.querySelector("[data-framework]").getAttribute("data-framework")),i&&t[n]&&(this.frameworkJSON=t[n],this.template=i,this.append())}var n=function(t){t.defaults=function(t){if(!t)return t;for(var e=1,i=arguments.length;i>e;e++){var o=arguments[e];if(o)for(var n in o)null==t[n]&&(t[n]=o[n])}return t},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var e=/(.)^/,i={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},o=/\\|'|\r|\n|\t|\u2028|\u2029/g;return t.template=function(n,r,a){var l;a=t.defaults({},a,t.templateSettings);var s=new RegExp([(a.escape||e).source,(a.interpolate||e).source,(a.evaluate||e).source].join("|")+"|$","g"),c=0,d="__p+='";n.replace(s,function(t,e,r,a,l){return d+=n.slice(c,l).replace(o,function(t){return"\\"+i[t]}),e&&(d+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'"),r&&(d+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),a&&(d+="';\n"+a+"\n__p+='"),c=l+t.length,t}),d+="';\n",a.variable||(d="with(obj||{}){\n"+d+"}\n"),d="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+d+"return __p;\n";try{l=new Function(a.variable||"obj","_",d)}catch(p){throw p.source=d,p}if(r)return l(r,t);var u=function(e){return l.call(this,e,t)};return u.source="function("+(a.variable||"obj")+"){\n"+d+"}",u},t}({});"todomvc.com"===location.hostname&&(window._gaq=[["_setAccount","UA-31081062-1"],["_trackPageview"]],function(t,e){var i=t.createElement(e),o=t.getElementsByTagName(e)[0];i.src="//www.google-analytics.com/ga.js",o.parentNode.insertBefore(i,o)}(document,"script")),o.prototype.append=function(){var t=document.createElement("aside");t.innerHTML=n.template(this.template,this.frameworkJSON),t.className="learn";var i=t.querySelectorAll(".demo-link");Array.prototype.forEach.call(i,function(t){t.setAttribute("href",e()+t.getAttribute("href"))}),document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",t.outerHTML)},t(),i("learn.json",o)}(),function(t){"use strict";t.$=document.querySelectorAll.bind(document),t.$$=document.querySelector.bind(document),t.$live=function(){var t={},e=function(e){var i=e.target;t[e.type]&&t[e.type].forEach(function(t){var o=document.querySelectorAll(t.selector),n=Array.prototype.indexOf.call(o,i)>=0;n&&t.handler(e)})};return function(i,o,n){t[o]||(document.documentElement.addEventListener(o,e,!0),t[o]=[]),t[o].push({selector:i,handler:n})}}(),t.$parent=function(e,i){return e.parentNode?e.parentNode.tagName.toLowerCase()===i.toLowerCase()?e.parentNode:t.$parent(e.parentNode,i):void 0},NodeList.prototype.forEach=Array.prototype.forEach}(window),function(t){"use strict";function e(t,e){var i,o;e=e||function(){},o=this._dbName=t,localStorage[o]||(i={todos:[]},localStorage[o]=JSON.stringify(i)),e.call(this,JSON.parse(localStorage[o]))}e.prototype.find=function(t,e){if(e){var i=JSON.parse(localStorage[this._dbName]).todos;e.call(this,i.filter(function(e){var i=!0;for(var o in t)t[o]!==e[o]&&(i=!1);return i}))}},e.prototype.findAll=function(t){t=t||function(){},t.call(this,JSON.parse(localStorage[this._dbName]).todos)},e.prototype.save=function(t,e,i){var o=JSON.parse(localStorage[this._dbName]),n=o.todos;if(i=i||function(){},"object"!=typeof t){for(var r=0;r<n.length;r++)if(n[r].id==t)for(var a in e)n[r][a]=e[a];localStorage[this._dbName]=JSON.stringify(o),i.call(this,JSON.parse(localStorage[this._dbName]).todos)}else i=e,e=t,e.id=(new Date).getTime(),n.push(e),localStorage[this._dbName]=JSON.stringify(o),i.call(this,[e])},e.prototype.remove=function(t,e){for(var i=JSON.parse(localStorage[this._dbName]),o=i.todos,n=0;n<o.length;n++)if(o[n].id==t){o.splice(n,1);break}localStorage[this._dbName]=JSON.stringify(i),e.call(this,JSON.parse(localStorage[this._dbName]).todos)},e.prototype.drop=function(t){localStorage[this._dbName]=JSON.stringify({todos:[]}),t.call(this,JSON.parse(localStorage[this._dbName]).todos)},t.app=t.app||{},t.app.Store=e}(window),function(t){"use strict";function e(t){this.storage=t}e.prototype.create=function(t,e){t=t||"",e=e||function(){};var i={title:t.trim(),completed:!1};this.storage.save(i,e)},e.prototype.read=function(t,e){var i=typeof t;return e=e||function(){},"function"===i?(e=t,this.storage.findAll(e)):("string"===i||"number"===i?(t=parseInt(t,10),this.storage.find({id:t},e)):this.storage.find(t,e),void 0)},e.prototype.update=function(t,e,i){this.storage.save(t,e,i)},e.prototype.remove=function(t,e){this.storage.remove(t,e)},e.prototype.removeAll=function(t){this.storage.drop(t)},e.prototype.getCount=function(){var t={active:0,completed:0,total:0};return this.storage.findAll(function(e){e.forEach(function(e){e.completed?t.completed++:t.active++,t.total++})}),t},t.app=t.app||{},t.app.Model=e}(window),function(t){"use strict";function e(){this.defaultTemplate='<li data-id="{{id}}" class="{{completed}}"><div class="view"><input class="toggle" type="checkbox" {{checked}}><label>{{title}}</label><button class="destroy"></button></div></li>'}e.prototype.show=function(t){var e,i,o="";for(e=0,i=t.length;i>e;e++){var n=this.defaultTemplate,r="",a="";t[e].completed&&(r="completed",a="checked"),n=n.replace("{{id}}",t[e].id),n=n.replace("{{title}}",t[e].title),n=n.replace("{{completed}}",r),n=n.replace("{{checked}}",a),o+=n}return o},e.prototype.itemCounter=function(t){var e=1===t?"":"s";return"<strong>"+t+"</strong> item"+e+" left"},e.prototype.clearCompletedButton=function(t){return t>0?"Clear completed ("+t+")":""},t.app=t.app||{},t.app.Template=e}(window),function(t){"use strict";function e(t){this.template=t,this.ENTER_KEY=13,this.ESCAPE_KEY=27,this.$todoList=$$("#todo-list"),this.$todoItemCounter=$$("#todo-count"),this.$clearCompleted=$$("#clear-completed"),this.$main=$$("#main"),this.$footer=$$("#footer"),this.$toggleAll=$$("#toggle-all"),this.$newTodo=$$("#new-todo")}e.prototype._removeItem=function(t){var e=$$('[data-id="'+t+'"]');e&&this.$todoList.removeChild(e)},e.prototype._clearCompletedButton=function(t,e){this.$clearCompleted.innerHTML=this.template.clearCompletedButton(t),this.$clearCompleted.style.display=e?"block":"none"},e.prototype._setFilter=function(t){$("#filters .selected").forEach(function(t){t.className=""}),$('#filters [href="#/'+t+'"]').forEach(function(t){t.className="selected"})},e.prototype._elementComplete=function(t,e){var i=$$('[data-id="'+t+'"]');i&&(i.className=e?"completed":"",i.querySelector("input").checked=e)},e.prototype._editItem=function(t,e){var i=$$('[data-id="'+t+'"]');if(i){i.className=i.className+" editing";var o=document.createElement("input");o.className="edit",i.appendChild(o),o.focus(),o.value=e}},e.prototype._editItemDone=function(t,e){var i=$$('[data-id="'+t+'"]');if(i){var o=i.querySelector("input.edit");i.removeChild(o),i.className=i.className.replace("editing",""),i.querySelectorAll("label").forEach(function(t){t.textContent=e})}},e.prototype.render=function(t,e){var i=this,o={showEntries:function(){i.$todoList.innerHTML=i.template.show(e)},removeItem:function(){i._removeItem(e)},updateElementCount:function(){i.$todoItemCounter.innerHTML=i.template.itemCounter(e)},clearCompletedButton:function(){i._clearCompletedButton(e.completed,e.visible)},contentBlockVisibility:function(){i.$main.style.display=i.$footer.style.display=e.visible?"block":"none"},toggleAll:function(){i.$toggleAll.checked=e.checked},setFilter:function(){i._setFilter(e)},clearNewTodo:function(){i.$newTodo.value=""},elementComplete:function(){i._elementComplete(e.id,e.completed)},editItem:function(){i._editItem(e.id,e.title)},editItemDone:function(){i._editItemDone(e.id,e.title)}};o[t]()},e.prototype._itemIdForEvent=function(t){var e=t.target,i=$parent(e,"li"),o=i.dataset.id;return o},e.prototype._bindItemEditDone=function(t){$live("#todo-list li .edit","blur",function(e){var i=e.target,o=this._itemIdForEvent(e);i.dataset.iscanceled||t({id:o,title:i.value})}.bind(this)),$live("#todo-list li .edit","keypress",function(t){var e=t.target;t.keyCode===this.ENTER_KEY&&e.blur()}.bind(this))},e.prototype._bindItemEditCancel=function(t){$live("#todo-list li .edit","keyup",function(e){var i=e.target,o=this._itemIdForEvent(e);e.keyCode===this.ESCAPE_KEY&&(i.dataset.iscanceled=!0,i.blur(),t({id:o}))}.bind(this))},e.prototype.bind=function(t,e){"newTodo"===t?this.$newTodo.addEventListener("change",function(){e(this.$newTodo.value)}.bind(this)):"removeCompleted"===t?this.$clearCompleted.addEventListener("click",function(){e()}.bind(this)):"toggleAll"===t?this.$toggleAll.addEventListener("click",function(t){var i=t.target;e({completed:i.checked})}.bind(this)):"itemEdit"===t?$live("#todo-list li label","dblclick",function(t){var i=this._itemIdForEvent(t);e({id:i})}.bind(this)):"itemRemove"===t?$live("#todo-list .destroy","click",function(t){var i=this._itemIdForEvent(t);e({id:i})}.bind(this)):"itemToggle"===t?$live("#todo-list .toggle","click",function(t){var i=t.target,o=this._itemIdForEvent(t);e({id:o,completed:i.checked})}.bind(this)):"itemEditDone"===t?this._bindItemEditDone(e):"itemEditCancel"===t&&this._bindItemEditCancel(e)},t.app=t.app||{},t.app.View=e}(window),function(t){"use strict";function e(t,e){this.model=t,this.view=e,this.view.bind("newTodo",function(t){this.addItem(t)}.bind(this)),this.view.bind("itemEdit",function(t){this.editItem(t.id)}.bind(this)),this.view.bind("itemEditDone",function(t){this.editItemSave(t.id,t.title)}.bind(this)),this.view.bind("itemEditCancel",function(t){this.editItemCancel(t.id)}.bind(this)),this.view.bind("itemRemove",function(t){this.removeItem(t.id)}.bind(this)),this.view.bind("itemToggle",function(t){this.toggleComplete(t.id,t.completed)}.bind(this)),this.view.bind("removeCompleted",function(){this.removeCompletedItems()}.bind(this)),this.view.bind("toggleAll",function(t){this.toggleAll(t.completed)}.bind(this))}e.prototype.setView=function(t){var e=t.split("/")[1],i=e||"";this._updateFilterState(i)},e.prototype.showAll=function(){this.model.read(function(t){this.view.render("showEntries",t)}.bind(this))},e.prototype.showActive=function(){this.model.read({completed:!1},function(t){this.view.render("showEntries",t)}.bind(this))},e.prototype.showCompleted=function(){this.model.read({completed:!0},function(t){this.view.render("showEntries",t)}.bind(this))},e.prototype.addItem=function(t){""!==t.trim()&&this.model.create(t,function(){this.view.render("clearNewTodo"),this._filter(!0)}.bind(this))},e.prototype.editItem=function(t){this.model.read(t,function(e){this.view.render("editItem",{id:t,title:e[0].title})}.bind(this))},e.prototype.editItemSave=function(t,e){e.trim()?this.model.update(t,{title:e},function(){this.view.render("editItemDone",{id:t,title:e})}.bind(this)):this.removeItem(t)},e.prototype.editItemCancel=function(t){this.model.read(t,function(e){this.view.render("editItemDone",{id:t,title:e[0].title})}.bind(this))},e.prototype.removeItem=function(t){this.model.remove(t,function(){this.view.render("removeItem",t)}.bind(this)),this._filter()},e.prototype.removeCompletedItems=function(){this.model.read({completed:!0},function(t){t.forEach(function(t){this.removeItem(t.id)}.bind(this))}.bind(this)),this._filter()},e.prototype.toggleComplete=function(t,e,i){this.model.update(t,{completed:e},function(){this.view.render("elementComplete",{id:t,completed:e})}.bind(this)),i||this._filter()},e.prototype.toggleAll=function(t){this.model.read({completed:!t},function(e){e.forEach(function(e){this.toggleComplete(e.id,t,!0)}.bind(this))}.bind(this)),this._filter()},e.prototype._updateCount=function(){var t=this.model.getCount();this.view.render("updateElementCount",t.active),this.view.render("clearCompletedButton",{completed:t.completed,visible:t.completed>0}),this.view.render("toggleAll",{checked:t.completed===t.total}),this.view.render("contentBlockVisibility",{visible:t.total>0})},e.prototype._filter=function(t){var e=this._activeRoute.charAt(0).toUpperCase()+this._activeRoute.substr(1);this._updateCount(),(t||"All"!==this._lastActiveRoute||this._lastActiveRoute!==e)&&this["show"+e](),this._lastActiveRoute=e},e.prototype._updateFilterState=function(t){this._activeRoute=t,""===t&&(this._activeRoute="All"),this._filter(),this.view.render("setFilter",t)},t.app=t.app||{},t.app.Controller=e}(window),function(){"use strict";function t(t){this.storage=new app.Store(t),this.model=new app.Model(this.storage),this.template=new app.Template,this.view=new app.View(this.template),this.controller=new app.Controller(this.model,this.view)}var e=new t("todos-vanillajs");window.addEventListener("load",function(){e.controller.setView(document.location.hash)}.bind(this)),window.addEventListener("hashchange",function(){e.controller.setView(document.location.hash)}.bind(this))}();