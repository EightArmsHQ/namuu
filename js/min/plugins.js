!function(e){var t="Close",n="BeforeClose",o="AfterClose",i="BeforeAppend",s="MarkupParse",a="Open",r="Change",l="mfp",c="."+l,p="mfp-ready",d="mfp-removing",u="mfp-prevent-close",f,m=function(){},g=!!window.jQuery,h,v=e(window),C,y,w,b,I,k=function(e,t){f.ev.on(l+e+c,t)},O=function(t,n,o,i){var s=document.createElement("div");return s.className="mfp-"+t,o&&(s.innerHTML=o),i?n&&n.appendChild(s):(s=e(s),n&&s.appendTo(n)),s},T=function(t,n){f.ev.triggerHandler(l+t,n),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,e.isArray(n)?n:[n]))},P=function(t){return t===I&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=e(f.st.closeMarkup.replace("%title%",f.st.tClose)),I=t),f.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(f=new m,f.init(),e.magnificPopup.instance=f)},x=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};m.prototype={constructor:m,init:function(){var t=navigator.appVersion;f.isIE7=-1!==t.indexOf("MSIE 7."),f.isIE8=-1!==t.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=x(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),y=e(document),f.popupsCache={}},open:function(t){C||(C=e(document.body));var n;if(t.isObj===!1){f.items=t.items.toArray(),f.index=0;var o=t.items,i;for(n=0;n<o.length;n++)if(i=o[n],i.parsed&&(i=i.el[0]),i===t.el[0]){f.index=n;break}}else f.items=e.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],b="",f.ev=t.mainEl&&t.mainEl.length?t.mainEl.eq(0):y,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=e.extend(!0,{},e.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=O("bg").on("click"+c,function(){f.close()}),f.wrap=O("wrap").attr("tabindex",-1).on("click"+c,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=O("container",f.wrap)),f.contentContainer=O("content"),f.st.preloader&&(f.preloader=O("preloader",f.container,f.st.tLoading));var r=e.magnificPopup.modules;for(n=0;n<r.length;n++){var l=r[n];l=l.charAt(0).toUpperCase()+l.slice(1),f["init"+l].call(f)}T("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(k(s,function(e,t,n,o){n.close_replaceWith=P(o.type)}),b+=" mfp-close-btn-in"):f.wrap.append(P())),f.st.alignTop&&(b+=" mfp-align-top"),f.wrap.css(f.fixedContentPos?{overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:y.height(),position:"absolute"}),f.st.enableEscapeKey&&y.on("keyup"+c,function(e){27===e.keyCode&&f.close()}),v.on("resize"+c,function(){f.updateSize()}),f.st.closeOnContentClick||(b+=" mfp-auto-cursor"),b&&f.wrap.addClass(b);var d=f.wH=v.height(),u={};if(f.fixedContentPos&&f._hasScrollBar(d)){var m=f._getScrollbarSize();m&&(u.marginRight=m)}f.fixedContentPos&&(f.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=f.st.mainClass;return f.isIE7&&(g+=" mfp-ie7"),g&&f._addClassToMFP(g),f.updateItemHTML(),T("BuildControls"),e("html").css(u),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||C),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(p),f._setFocus()):f.bgOverlay.addClass(p),y.on("focusin"+c,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(d),T(a),t},close:function(){f.isOpen&&(T(n),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(d),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){T(t);var n=d+" "+p+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(n+=f.st.mainClass+" "),f._removeClassFromMFP(n),f.fixedContentPos){var i={marginRight:""};f.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}y.off("keyup"+c+" focusin"+c),f.ev.off(c),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&e(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,T(o)},updateSize:function(e){if(f.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;f.wrap.css("height",n),f.wH=n}else f.wH=e||v.height();f.fixedContentPos||f.wrap.css("height",f.wH),T("Resize")},updateItemHTML:function(){var t=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),t.parsed||(t=f.parseEl(f.index));var n=t.type;if(T("BeforeChange",[f.currItem?f.currItem.type:"",n]),f.currItem=t,!f.currTemplate[n]){var o=f.st[n]?f.st[n].markup:!1;T("FirstMarkupParse",o),f.currTemplate[n]=o?e(o):!0}w&&w!==t.type&&f.container.removeClass("mfp-"+w+"-holder");var i=f["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,f.currTemplate[n]);f.appendContent(i,n),t.preloaded=!0,T(r,t),w=t.type,f.container.prepend(f.contentContainer),T("AfterChange")},appendContent:function(e,t){f.content=e,e?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[t]===!0?f.content.find(".mfp-close").length||f.content.append(P()):f.content=e:f.content="",T(i),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var n=f.items[t],o;if(n.tagName?n={el:e(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var i=f.types,s=0;s<i.length;s++)if(n.el.hasClass("mfp-"+i[s])){o=i[s];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||f.st.type||"inline",n.index=t,n.parsed=!0,f.items[t]=n,T("ElementParse",n),f.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,f._openClick(n,e,t)};t||(t={});var o="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(o).on(o,n)):(t.isObj=!1,t.delegate?e.off(o).on(o,t.delegate,n):(t.items=e,e.off(o).on(o,n)))},_openClick:function(t,n,o){var i=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(i||2!==t.which&&!t.ctrlKey&&!t.metaKey){var s=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(f))return!0}else if(v.width()<s)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),o.el=e(t.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),f.open(o)}},updateStatus:function(e,t){if(f.preloader){h!==e&&f.container.removeClass("mfp-s-"+h),!t&&"loading"===e&&(t=f.st.tLoading);var n={status:e,text:t};T("UpdateStatus",n),e=n.status,t=n.text,f.preloader.html(t),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),h=e}},_checkIfClose:function(t){if(!e(t).hasClass(u)){var n=f.st.closeOnContentClick,o=f.st.closeOnBgClick;if(n&&o)return!0;if(!f.content||e(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||e.contains(f.content[0],t)){if(n)return!0}else if(o&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?y.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||e.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(t,n,o){var i;o.data&&(n=e.extend(o.data,n)),T(s,[t,n,o]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(i=e.split("_"),i.length>1){var o=t.find(c+"-"+i[0]);if(o.length>0){var s=i[1];"replaceWith"===s?o[0]!==n[0]&&o.replaceWith(n):"img"===s?o.is("img")?o.attr("src",n):o.replaceWith('<img src="'+n+'" class="'+o.attr("class")+'" />'):o.attr(i[1],n)}}else t.find(c+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f.scrollbarSize}},e.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){_();var n=e(this);if("string"==typeof t)if("open"===t){var o,i=g?n.data("magnificPopup"):n[0].magnificPopup,s=parseInt(arguments[1],10)||0;i.items?o=i.items[s]:(o=n,i.delegate&&(o=o.find(i.delegate)),o=o.eq(s)),f._openClick({mfpEl:o},n,i)}else f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),g?n.data("magnificPopup",t):n[0].magnificPopup=t,f.addGroup(n,t);return n};var E="inline",B,M,S,z=function(){S&&(M.after(S.addClass(B)).detach(),S=null)};e.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){f.types.push(E),k(t+"."+E,function(){z()})},getInline:function(t,n){if(z(),t.src){var o=f.st.inline,i=e(t.src);if(i.length){var s=i[0].parentNode;s&&s.tagName&&(M||(B=o.hiddenClass,M=O(B),B="mfp-"+B),S=i.after(M).detach().removeClass(B)),f.updateStatus("ready")}else f.updateStatus("error",o.tNotFound),i=e("<div>");return t.inlineElement=i,i}return f.updateStatus("ready"),f._parseMarkup(n,{},t),n}}});var F,A=function(){return void 0===F&&(F=void 0!==document.createElement("p").style.MozTransform),F};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=f.st.zoom,o=".zoom",i;if(e.enabled&&f.supportsTransition){var s=e.duration,a=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},s="transition";return i["-webkit-"+s]=i["-moz-"+s]=i["-o-"+s]=i[s]=o,n.css(i),n},r=function(){f.content.css("visibility","visible")},l,c;k("BuildControls"+o,function(){if(f._allowZoom()){if(clearTimeout(l),f.content.css("visibility","hidden"),i=f._getItemToZoom(),!i)return void r();c=a(i),c.css(f._getOffset()),f.wrap.append(c),l=setTimeout(function(){c.css(f._getOffset(!0)),l=setTimeout(function(){r(),setTimeout(function(){c.remove(),i=c=null,T("ZoomAnimationEnded")},16)},s)},16)}}),k(n+o,function(){if(f._allowZoom()){if(clearTimeout(l),f.st.removalDelay=s,!i){if(i=f._getItemToZoom(),!i)return;c=a(i)}c.css(f._getOffset(!0)),f.wrap.append(c),f.content.css("visibility","hidden"),setTimeout(function(){c.css(f._getOffset())},16)}}),k(t+o,function(){f._allowZoom()&&(r(),c&&c.remove(),i=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(t){var n;n=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var o=n.offset(),i=parseInt(n.css("padding-top"),10),s=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-i;var a={width:n.width(),height:(g?n.innerHeight():n[0].offsetHeight)-s-i};return A()?a["-moz-transform"]=a.transform="translate("+o.left+"px,"+o.top+"px)":(a.left=o.left,a.top=o.top),a}}}),_()}(window.jQuery||window.Zepto);