/*******************  McAfee CONFIDENTIAL AND PROPRIETARY  **************************
*
*  Copyright (c) 2017 McAfee Inc.  All Rights Reserved.
*
*  This file and the information contained herein is the confidential and
*  proprietary information of Intel Corporation.  Your rights to this file and its
*  information are subject to the terms of the license agreement between
*  Intel Corporation and you or your company.
*
********************  McAfee CONFIDENTIAL AND PROPRIETARY  **************************/

mcafee_wa_annotationoptions={Unknown:-1,None:1,OnlySecureSearch:2,All:4};
var mcafee_wa_bkconstants={uninstallUrl:"https://home.mcafee.com/root/landingpage.aspx?lpname=get-it-now",siteAdvisorUrl:"http://www.siteadvisor.com/",siteAdvisorUrlSecure:"https://www.siteadvisor.com/",siteReportUrl:"https://www.mcafee.com/threat-intelligence/site/default.aspx?url=",blockPageUrl:"https://www.siteadvisor.com/restricted.html",phishingPageUrl:"https://www.siteadvisor.com/phishing.html",maxCacheRecords:1E3,browsertype:"browsertype",useragent:"useragent",whitelistUrl:"about:blank?command=whitelist&token=1",
domain:"domain",redirectURL:"redirectURL",originalURL:"originalURL",chromeExtensionVersion:"chromeExtVer",disabled:"disabled",notchromecompliant:"SearchExtensionDisabled",viewport:"viewport",annonlyonssearch:"*OnlyShowAnnotationsOnSecureSearch",showicons:"*Icons",pnaclenabled:"Pnaclenabled",phishingcategory:169,pprotectfeaturedisabled:"*FeatureDisablePasswordCheck",userdisabledpprotect:"*UserOptionDisablePasswordCheck",SystemGEO:"SystemGEO",BingCountrySet:"BingCountrySet",ProviderForced:"ProviderForced",
BingQString:"PC=MC",BingProvider:23,cookie:"Cookie",maxreservedcallbackid:5};mcafee_wa_browsertypes={Unknown:-1,Firefox:1,Chrome:2,McAfeeSecureBrowser:3,Opera:4,Edge:5,Agnostic:6};mcafee_wa_color={SA_Green:0,SA_Yellow:1,SA_Red:2,SA_Unknown:3,SA_HackerSafe:4,SA_Cashback:5,SA_Disabled:6};
var mcafee_wa_commands={dssrequest:"dssrequest",reportstat:"reportstat",executecommand:"executecommand",ondoccomplete:"ondoccomplete",onnavigateiframe:"onnavigateiframe",onredirectiframe:"onredirectiframe",onnavigate:"onnavigate",onoptionreceived:"onoptionreceived",setoption:"setoption",getsupportedfeatures:"getsupportedfeatures",isframeblocked:"isframeblocked",whitelistediframe:"whitelistediframe",ispageblocked:"ispageblocked",logmsg:"logmsg",getxyviewport:"getxyviewport",getres:"getres",showoptions:"showoptions",
addpagescanstat:"addpagescanstat",getbingsecuresearchenabled:"getbingsecuresearchenabled"},mcafee_wa_disabledflags={disabledChrome:1,disabledSafeBrowser:2,disabledFirefox:4,disabledEdge:8,disabledOpera:16};mcafee_wa_executecommands={showsettingsdialog:1,checkpassword:2,raisenewtabevent:3,showwelcomemessage:4};mcafee_wa_extensiontypes={Unknown:-1,Main:0,Search:1};var mcafee_wa_loggertype={defaultLogger:0,nativeLogger:1};function mcafee_wa_msghandler(){this._client=null}
mcafee_wa_msghandler.prototype.init=function(a){this._client=a;var b=this;window.addEventListener("message",function(a){a.source==window&&null!=b._client&&b._client.processpagemsg(a)})};function mcafee_wa_mutationobserver(){this._observers=new Map}mcafee_wa_mutationobserver.prototype.isAnyLinkNode=function(a){for(var b=0;b<a.length;++b)if("a"==a[b].nodeName.toLowerCase())return!0;return!1};
mcafee_wa_mutationobserver.prototype.Observe=function(a){try{var b=this,c=new MutationObserver(function(d,c){for(var f=d.length,g=0;g<f;++g){var l=d[g].addedNodes;if(0<l.length&&b.isAnyLinkNode(l)){mcafee_wa_coreengine.annotate(a);break}}});c.observe(a,{childList:!0,subtree:!0});this._observers.set(a,c)}catch(d){return mcafee_wa_globals.logger.error(d),!1}return!0};
mcafee_wa_mutationobserver.prototype.Disconnect=function(a){var b=this._observers.get(a);null!=b&&"undefined"!=b&&(b.disconnect(),this._observers["delete"](a),mcafee_wa_globals.logger.log("Disconnected observer: Total items left: "+this._observers.size))};mcafee_wa_scorevals={ScoreMinimal:15,ScoreUnknown:30,ScoreMedium:50};
var mcafee_wa_searchoption={securesearch:1,anysearch:2,nosearch:0},mcafee_wa_supportedfeatures={none:0,annotations:1,blockpages:2,iframeblocking:4,pprotection:8},mcafee_wa_telemetrycounters={incrstatsrchitunk:"INCREMENTSTAT_SearchHit_Unknown_",incrstat:"INCREMENTSTAT_",browsererr:"BrowserError"},mcafee_wa_uriparser=function(){return{getParam:function(a,b){var c=a.indexOf("?");if(-1==c)return null;for(var c=a.substring(c+1).split("&"),d=0;d<c.length;++d){var e=c[d].indexOf("=");if(-1!=e&&c[d].substring(0,
e)==b)return c[d].substring(e+1)}return null},getURI:function(a){var b=a.split("?");return 2>b.length&&(hashParts=a.split("#"),2<=hashParts.length)?hashParts[0]:b[0]}}}(),mcafee_wa_backgroundipc=function(){return{makeDSSRequest:function(a,b,c,d,e){chrome.runtime.sendMessage({command:mcafee_wa_commands.dssrequest,searchEngineType:b,Url:a,isSecureSearch:c,requestData:d},e);return!0},reportStat:function(a,b){chrome.runtime.sendMessage({command:mcafee_wa_commands.reportstat,Name:a,Value:b})},onNavigate:function(a,
b){chrome.runtime.sendMessage({command:mcafee_wa_commands.onnavigate,Url:a,FrameId:b})},executeCommand:function(a,b){chrome.runtime.sendMessage({command:mcafee_wa_commands.executecommand,commandId:a,params:b})},getSupportedFeatures:function(a){chrome.runtime.sendMessage({command:mcafee_wa_commands.getsupportedfeatures},a)},isFrameBlocked:function(a,b){chrome.runtime.sendMessage({command:mcafee_wa_commands.isframeblocked,Url:a},b)},logMsg:function(a,b){chrome.runtime.sendMessage({command:mcafee_wa_commands.logmsg,
logflags:a,message:b})},isPageBlocked:function(a,b){chrome.runtime.sendMessage({command:mcafee_wa_commands.ispageblocked,Url:a},b)},addPageScanStat:function(){chrome.runtime.sendMessage({command:mcafee_wa_commands.addpagescanstat})},getBingSecureSearchEnabled:function(a){chrome.runtime.sendMessage({command:mcafee_wa_commands.getbingsecuresearchenabled},a)}}}(),mcafee_wa_browsertypefinder=function(){return{getBrowserType:function(a){return a==mcafee_wa_browsertypes.Chrome&&/Secure\//.test(navigator.userAgent)?
mcafee_wa_browsertypes.McAfeeSecureBrowser:a},browserTypeToString:function(a){switch(a){case 1:return"FF";case 2:return"CH";case 3:return"MSB";case 4:return"OP";case 5:return"ED";case 6:return"AG"}return"UN"}}}();function mcafee_wa_contentnativelogger(a,b){this._logTypes=a;this._browserType=b}mcafee_wa_contentnativelogger.prototype.log=function(a){mcafee_wa_logtypes.Info&this._logTypes&&mcafee_wa_backgroundipc.logMsg(0|this._browserType<<16|mcafee_wa_logtypes.Info,a)};
mcafee_wa_contentnativelogger.prototype.error=function(a){mcafee_wa_logtypes.Err&this._logTypes&&mcafee_wa_backgroundipc.logMsg(0|this._browserType<<16|mcafee_wa_logtypes.Err,a)};
var _wa={LoginLinter:function(a,b,c,d){this.w=c;this.html=a;this.url=b;this.hints={};this.reasons=[];this.flags={hasLoginOrSignupForm:!1,hasTwoFactorForm:!1,hasLoginLink:!1,hasLogoutLinkOrInput:!1,hasLogoutLinkOrInputAndLoginOrSignupForm:!1,hasLoginAttribute:!1,hasLogoutAttribute:!1,hasLoginUrl:!1,hasLoginValidationError:!1};this.log=d}};_wa.LoginLinter.prototype.isLoginPage=function(){return 2<this.score()};
_wa.LoginLinter.prototype.score=function(){if(!this._score){this._score=0;var a=_wa.$("a,btn,button",this.html),b=_wa.$("input",this.html);if(this.hasLoginForm()||this.hasSignupForm())this.addReason("has a login or signup form +2","hasLoginOrSignupForm"),this._score+=2;this.hasTwoFactorForm()&&(this.addReason("has a two factor form -2","hasTwoFactorForm"),this._score-=2);if(this.hasLoginLink(a)||this.hasLoginInput(b))this.addReason("has a login link or input +1","hasLoginLinkOrInput"),this._score+=
1;this.hasLogoutLink(a)||this.hasLogoutInput(b)?(this.addReason("has a logout link or input -2","hasLogoutLinkOrInput"),this._score-=2):(this.addReason("does not have a logout link or input +1"),this._score+=1);(this.hasLogoutLink(a)||this.hasLogoutInput(b))&&(this.hasLoginForm()||this.hasSignupForm())&&(this.addReason("has a logout link and login/signup form +2","hasLogoutLinkOrInputAndLoginOrSignupForm"),this._score+=2);if(this.hasNonHiddenLogoutLink(a)||this.hasNonHiddenLogoutInput(b))this.addReason("has a non hidden logout link or input -3",
"hasNonHiddenLogoutLinkOrInput"),this._score-=3;(this.hasNonHiddenLogoutLink(a)||this.hasNonHiddenLogoutInput(b))&&(this.hasLoginForm()||this.hasSignupForm())&&(this.addReason("has both logout and login/signup, but logout is not hidden -5","hasLoginAndNonHiddenLogout"),this._score-=5);this.hasLoginAttribute()&&(this.addReason("has a login attribute +1","hasLoginAttribute"),this._score+=1);this.hasLogoutAttribute()&&(this.addReason("has a logout attribute -1","hasLogoutAttribute"),--this._score);this.hasNonHiddenLogoutAttribute()&&
(this.addReason("has non hidden logout attribute -2","hasNonHiddenLogoutAttribute"),this._score-=2);this.hasLoginUrl()&&(this.addReason("has a login url +1","hasLoginUrl"),this._score+=1);this.hasLoginValidationError()&&(this.addReason("has a validation error +1","hasLoginValidationError"),this._score+=1)}return this._score};
var loginRegxs="(sign|log)(.?)(in|on);\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644;P\u0159ihl\u00e1sit;Log p\u00e5;Log ind;Anmelden;\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7;\u0395\u03af\u03c3\u03bf\u03b4\u03bf\u03c2;Iniciar sesi\u00f3n;Entrar;Kirjaudu sis\u00e4\u00e4n;Se connecter;Connexion;S\u2019identifier;\u05d4\u05d9\u05db\u05e0\u05e1;\u05d4\u05ea\u05d7\u05d1\u05e8;Prijava;Bejelentkez\u00e9s;Accesso;Accedi;\u30ed\u30b0\u30a4\u30f3;\u30b5\u30a4\u30f3\u30a4\u30f3;\ub85c\uadf8\uc778;Logg p\u00e5;Logg inn;Aanmelden;Inloggen;Zaloguj si\u0119;Efetuar login;Entrar;Iniciar sess\u00e3o;\u0412\u0445\u043e\u0434;\u0412\u043e\u0439\u0442\u0438;Prihl\u00e1si\u0165 sa;Prijavite se;\u041f\u0440\u0438\u0458\u0430\u0432\u0438 \u0441\u0435;Logga in;Oturum A\u00e7;Giri\u015f Yap;\u767b\u5165;\u767b\u5f55".split(";"),logoutRegxs=
"(sign|log)(.?)(out|off);\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c;Odhl\u00e1sit;Log af;Abmelden;\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7;Cerrar sesi\u00f3n;Salir;Kirjaudu ulos;Se d\u00e9connecter;D\u00e9connexion;\u05d4\u05ea\u05e0\u05ea\u05e7;Odjava;Kijelentkez\u00e9s;Disconnessione;Esci;\u30ed\u30b0\u30a2\u30a6\u30c8;\ub85c\uadf8\uc544\uc6c3;Afmelden;Logg av;Wyloguj si\u0119;Efetuar logout;Salir;Terminar Sess\u00e3o;\u0412\u044b\u0439\u0442\u0438;\u0412\u044b\u0445\u043e\u0434;Odhl\u00e1si\u0165 sa;Odjavite se;\u041e\u0434\u0458\u0430\u0432\u0438\u0442\u0435 \u0441\u0435;Logga ut;Logg ut;Oturumu Kapat;\u00c7\u0131k\u0131\u015f Yap;\u6ce8\u9500;\u9000\u51fa;\u767b\u51fa".split(";");
_wa.LoginLinter.prototype.addReason=function(a,b){this.reasons.push(a);b&&(this.flags[b]=!0)};_wa.LoginLinter.prototype.hasLoginForm=function(){return Boolean(this.hints.hasLoginForm)};_wa.LoginLinter.prototype.hasTwoFactorForm=function(){return Boolean(this.hints.hasTwoFactorForm)};_wa.LoginLinter.prototype.hasSignupForm=function(){return Boolean(this.hints.hasSignupForm)};_wa.LoginLinter.prototype.hasLoginLink=function(a){var b=new RegExp(loginRegxs.join("|"),"i");return a.toArray().some(function(a){return _wa.$(a).text().match(b)})};
_wa.LoginLinter.prototype.hasLoginInput=function(a){var b=new RegExp(loginRegxs.join("|"),"i");return a.toArray().some(function(a){return _wa.$(a).val().match(b)})};_wa.LoginLinter.prototype.hasLogoutLink=function(a){var b=new RegExp(logoutRegxs.join("|"),"i");return a.toArray().some(function(a){return _wa.$(a).text().match(b)||_wa.$(a,a).find("img").attr("alt")&&_wa.$(a,a).find("img").attr("alt").match(b)})};
_wa.LoginLinter.prototype.hasNonHiddenLogoutLink=function(a){var b=this,c=new RegExp(logoutRegxs.join("|"),"i");return a.toArray().some(function(a){var e=_wa.$(a,a).find("img").attr("alt");return(_wa.$(a).text().match(c)||c.test(e))&&b.isVisible(a)})};_wa.LoginLinter.prototype.hasLogoutInput=function(a){var b=new RegExp(logoutRegxs.join("|"),"i");return a.toArray().some(function(a){return _wa.$(a).val().match(b)})};
_wa.LoginLinter.prototype.hasNonHiddenLogoutInput=function(a){var b=this,c=new RegExp(logoutRegxs.join("|"),"i");return a.toArray().some(function(a){return!(!_wa.$(a).val().match(c)||!b.isVisible(a))})};_wa.LoginLinter.prototype.hasLoginAttribute=function(){return _wa.$("[class*=login],[id*=login],[class*=signin],[id*=signin],[class*=Login],[id*=Login],[class*=Signin],[id*=Signin]",this.html).toArray().some(function(a){return a.innerHTML&&a.innerHTML.length})};
_wa.LoginLinter.prototype.hasLogoutAttribute=function(){return(new _wa.$("[class*=logout],[id*=logout],[class*=signout],[id*=signout],[class*=Logout],[id*=Logout],[class*=Signout],[id*=Signout]",this.html)).toArray().some(function(a){return a.innerHTML&&a.innerHTML.length})};
_wa.LoginLinter.prototype.hasNonHiddenLogoutAttribute=function(){var a=this;return _wa.$("[class*=logout],[id*=logout],[class*=signout],[id*=signout],[class*=Logout],[id*=Logout],[class*=Signout],[id*=Signout]",this.html).toArray().some(function(b){return!!(b.innerHTML&&b.innerHTML.length&&a.isVisible(b))})};_wa.LoginLinter.prototype.hasLoginUrl=function(){var a=/(sign|log)(.?)(in|on)/i;return this.url&&Boolean(this.url.match(a))};
_wa.LoginLinter.prototype.hasLoginValidationError=function(){if(!this.loginFailedRegExp){var a=_wa.$("enter (a|an|your)?\\s?(valid)?\\s?(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account);(forgot|reset) (your )?(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account);(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account) (you entered )?(is|were|was|are)?\\s?(locked|incorrect|invalid|missing|unknown|do not match);(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account) was entered incorrectly;(incorrect|invalid|unknown|wrong|not a valid) (avatar )?(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account);enter a (value for|valid|correct) (id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account);(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account)(is|has been) (temporarily )?(disabled|blocked|de-activated);(sign|signing|log|loging)(s|-)?(in|on)? failed;unable to (sign|signing|log|loging)(s|-)?(in|on)?;(id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account) (doesn't|does not) exist;(does not|doesn't) match (an account|our records);the (id|name|username|nick|screen name|handle|e-?mail( address)?|password|user id|login|account) or password (you) entered is not correct".split(";")).toArray().map(function(a){return"("+
a+")"});this.loginFailedRegExp=new RegExp(a.join("|"),"gi")}a=_wa.$("div, span, p, section, h1, h2, h3, h4, li, article, nav, main, form",this.html).text();return Boolean(this.loginFailedRegExp.test(a))};
_wa.LoginLinter.prototype.isVisible=function(a){var b=this.w.getComputedStyle(a),c=b.visibility||a.style.visibility,d=b.display||a.style.display,b=b.overflow||a.style.overflow;(c=-999<a.offsetLeft&&-999<a.offsetTop&&"hidden"!=c&&"none"!=d)&&"hidden"==b&&(c=1<a.offsetHeight&&1<a.offsetWidth);c&&a.parentElement&&(c=this.isVisible(a.parentElement));return c};
_wa.$=function(){var a;return function(b,c){c&&(a=c);return{context:c,nodeArray:[],length:function(){return this.nodeArray.length},init:function(){this.context=this.context||a;var d=this.find(b);this.isArray(d)?this.nodeArray=this.makeArray(d):d.length&&!d.nodeArray?this.nodeArray=this.makeArray(d):d.nodeType&&this.nodeArray.push(d);return this},find:function(a){if(!a)return null;if("string"===typeof a||a instanceof String){if(this.context.querySelectorAll)try{var b=this.context.querySelectorAll(a);
b&&(this.nodeArray=this.makeArray(b))}catch(c){}return this}return a},attr:function(a){for(var b="",c=0;c<this.nodeArray.length;c++){var g=this.nodeArray[c].getAttribute(a);null!=g&&0<g.length&&(b+=g)}return b},text:function(){for(var a="",b=0;b<this.nodeArray.length;b++)a=this.nodeArray[b].textContent?a+this.nodeArray[b].textContent:a+this.nodeArray[b].innerText;return a},val:function(){for(var a="",b=0;b<this.nodeArray.length;b++)this.nodeArray[b].value&&0<this.nodeArray[b].value.length&&(a+=this.nodeArray[b].value);
return a},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},toArray:function(){return this.nodeArray},makeArray:function(a){var b=[];if(a&&a.length)for(var c=0;c<a.length;c++)a.item?1==a.item(c).nodeType&&b.push(a.item(c)):b.push(a[c]);a={};a.list=b;a.some=function(a){for(var b=this.list.length,c=0;c<b;c++)if(c in this.list&&a.call(null,this.list[c],c,this.list))return!0;return!1};a.map=function(a){for(var b=this.list.length,c=Array(b),d=0;d<b;d++)d in this.list&&(c[d]=
a.call(null,this.list[d],d,this.list));return c};return a}}.init()}}();_wa.DomDocument=function(a,b){this.doc=a.document||a.originalTarget||document;this.helper=b;this.x=a;this.window=null;this.entryCheckAttribute="WAid71FA0D88-5390-4b5b-A2F4-E45FA93D85E2";this.entryCheckValue="SA password protect entry checker";this.log=null};
_wa.DomDocument.prototype.load=function(a){var b=this,c=this.doc.body,d="ie";"undefined"!==typeof this.helper.browser&&(d=this.helper.browser);if("ff"===d)try{c=content.document.body}catch(e){c=this.doc.body}if(!this.isAlreadyLoaded(c)){this.markLoaded(c);if("ie"===d)try{this.window=this.doc.parentWindow,this.log=function(a){b.helper.log(a)}}catch(e){this.log(e.message)}else if("ff"===d)try{this.window=this.x,this.log=function(a){b.x.console.log(a)}}catch(e){this.log(e.message)}else if("ch"===d)try{this.window=
window,this.log=function(a){console.log(a)}}catch(e){this.log(e.message)}this.registerOnLoad(a,b)}};_wa.DomDocument.prototype.registerOnLoad=function(a,b){b&&a&&"function"===typeof a&&("complete"===this.window.document.readyState?a(b):this.window.addEventListener("load",function(){a(b)}))};_wa.DomDocument.prototype.isAlreadyLoaded=function(a){try{return a?a.getAttribute(this.entryCheckAttribute)===this.entryCheckValue:!1}catch(b){}return!1};
_wa.DomDocument.prototype.markLoaded=function(a){try{a&&a.setAttribute(this.entryCheckAttribute,this.entryCheckValue)}catch(b){}};
_wa.passwordProtect={addSubmitEventListener:function(a){var b=a.doc,c=a.log,d=b.querySelectorAll("[type=password]"),e=b.location.hostname,f=this;a=a.window;var g=!1;try{g=(new _wa.LoginLinter(b,b.URL,a,c)).isLoginPage()}catch(l){c(l.message)}b=function(){for(var a=this.querySelectorAll("[type=password]"),b=0;b<a.length;++b){var c=a[b],d=c.value;f.isValid(c)&&g&&mcafee_wa_backgroundipc.executeCommand(2,e+" "+d)}};for(c=0;c<d.length;++c)d[c].form.addEventListener("submit",b)},isValid:function(a){return 0<
a.value.length&&!a.disabled}};function addPasswordHandler(a,b){"undefined"!==typeof _wa.DomDocument&&(new _wa.DomDocument(a,b)).load(function(a){_wa.passwordProtect.addSubmitEventListener(a)})}function mcafee_wa_gtiproxy(){}
mcafee_wa_gtiproxy.prototype.post=function(a,b,c,d,e){try{if(c){var f=decodeURIComponent(a);c="mcafee"==mcafee_wa_uriparser.getParam(f,"fr")}b==mcafee_wa_senginetypes.SearchEngine_BING&&null!=document.cookie&&document.cookie.split(";").forEach(function(a){-1!=a.indexOf(mcafee_wa_bkconstants.BingQString)&&(c=!0)});mcafee_wa_backgroundipc.makeDSSRequest(a,b,c,d,e)}catch(g){mcafee_wa_globals.logger.error(g)}};function mcafee_wa_iframehandler(){}
mcafee_wa_iframehandler.prototype.processmsg=function(a,b){switch(a.command){case mcafee_wa_commands.onredirectiframe:this._processIFrameBlocking(a,document),b({succeeded:!0})}};mcafee_wa_iframehandler.prototype.process=function(a){if(!mcafee_wa_bkcommon.isSiteAdvisorURL(a.location.href)){var b=this;mcafee_wa_backgroundipc.isFrameBlocked(a.location.href,function(c){1==c.blocked&&b._processIFrameBlocking(c,a)})}};mcafee_wa_iframehandler.prototype.processpagemsg=function(a){};
mcafee_wa_iframehandler.prototype._processIFrameBlocking=function(a,b){var c=mcafee_wa_uriparser.getParam(a.uri,"domain"),d=mcafee_wa_uriparser.getParam(a.uri,"originalURL");null!=c&&null!=d&&(d=b.documentURI||b.URL||b.baseURI,unescape(c)==d&&(c=mcafee_wa_uriparser.getParam(a.uri,"subframe"),c="1"!=c?"&subframe=1":"",mcafee_wa_globals.logger.log("Replacing iFrame to "+a.uri+c),window.location.replace(a.uri+c)))};
var mcafee_wa_settings={loggertype:mcafee_wa_loggertype.defaultLogger,logtype:mcafee_wa_logtypes.None,debugmode:!1,browsertype:mcafee_wa_browsertypes.Chrome,extnversion:"5.1.0.633",extensiontype:mcafee_wa_extensiontypes.Main};function stat(a,b,c,d,e){this._regex=a;this._searchStatName=b;this._secureSearchStatName=c;this._engineAddendum=d;this._type=e}
var telemetryOrigin={typosquatting:"TypoSquatting",blockpage:"BlockPage",unknown:"Unknown",defaultsearch:"DefaultSearch",toolbar:"Toolbar",blank:""},mcafee_wa_telemetry=function(){var a=[new stat(/^http(s)?:\/\/(us\.|ar\.|au\.|br\.|ca\.|fr\.|de\.|hk\.|in\.|it\.|kr\.|mx\.|es\.|tw\.|uk\.|cf\.|cl\.|co\.|id\.|nz\.|pe\.|ph\.|sg\.|th\.|espanol\.|ve\.|vn\.|malaysia\.)?search\.yahoo\.(com|co\.jp)\/yhs\/search.*(\?|&)hspart=mcafee/,"srch_t","SecureSearchHit_","_YahooYHS",telemetryOrigin.unknown),new stat(/^http(s)?:\/\/(us\.|ar\.|au\.|br\.|ca\.|fr\.|de\.|hk\.|in\.|it\.|kr\.|mx\.|es\.|tw\.|uk\.|cf\.|cl\.|co\.|id\.|nz\.|pe\.|ph\.|sg\.|th\.|espanol\.|ve\.|vn\.|malaysia\.)?search\.yahoo\.(com|co\.jp)\/search.*(\?|&)fr=mcafee/,
"srch_h","SecureSearchHit_","_Yahoo",telemetryOrigin.defaultsearch),new stat(/^http(s)?:\/\/(us\.|ar\.|au\.|br\.|ca\.|fr\.|de\.|hk\.|in\.|it\.|kr\.|mx\.|es\.|tw\.|uk\.|cf\.|cl\.|co\.|id\.|nz\.|pe\.|ph\.|sg\.|th\.|espanol\.|ve\.|vn\.|malaysia\.)?search\.yahoo\.(com|co\.jp)\/search.*(\?|&)fr=(mcasa|mcsaoff|mcsaoffblock|slv8-mcafee|slv8-mc)/,"srch_p","SecureSearchHit_","_Yahoo",telemetryOrigin.toolbar),new stat(/^http(s)?:\/\/(www\.)?yandex\.(com|ru)\/yandsearch.*(\?|&)clid=1963438/,"srch_h","SecureSearchHit_",
"_Yandex",telemetryOrigin.defaultsearch)],b={OK:"GR",CERTIFIED:"GR",INFO:"YW",WARN:"RD",HACKERSAFE:"HS",CASHBACK:"CB",UNKNOWN:"UN"},c=null,d=null,e=mcafee_wa_browsertypes.Unknown,f={},g=function(){switch(e){case mcafee_wa_browsertypes.Firefox:return"FF";case mcafee_wa_browsertypes.Chrome:return"CH";case mcafee_wa_browsertypes.Agnostic:return"AG";case mcafee_wa_browsertypes.Opera:return"OP";case mcafee_wa_browsertypes.Edge:return"ED";case mcafee_wa_browsertypes.McAfeeSecureBrowser:return"MSB"}return"Unknown"};
return{init:function(a){e=a},onBeginAnnotation:function(b,e,h){mcafee_wa_backgroundipc.addPageScanStat();if(null!=h&&"undefined"!=typeof h&&(null==c||c!=h||null==d||d!=e))for(mcafee_wa_backgroundipc.reportStat(mcafee_wa_telemetrycounters.incrstatsrchitunk+g()+"_"+e,h),c=h,d=e,e=telemetryOrigin.blank,b.match(/^http(s)?:\/\/.*&type=\w\d3/)?e=telemetryOrigin.typosquatting:b.match(/^http(s)?:\/\/.*&type=\w\d4/)&&(e=telemetryOrigin.blockpage),h=0;h<a.length;++h){var k=a[h];if(b.match(k._regex)){var m=
e==telemetryOrigin.blank?k._type:e;mcafee_wa_backgroundipc.reportStat(mcafee_wa_telemetrycounters.incrstat+k._searchStatName,1);mcafee_wa_backgroundipc.reportStat(mcafee_wa_telemetrycounters.incrstat+k._secureSearchStatName+m+"_"+g()+k._engineAddendum,1)}}f={}},onShowBalloon:function(a,c,d){mcafee_wa_backgroundipc.reportStat(mcafee_wa_telemetrycounters.incrstat+("SERP_CL_"+b[a.score]),1)},onCompleteAnnotation:function(a){for(var b in f)mcafee_wa_backgroundipc.reportStat(mcafee_wa_telemetrycounters.incrstat+
b,f[b]);f={}},onAnnotatingLink:function(a,c){var d="SERP_VW_"+b[a.score];"undefined"==typeof f[d]?f[d]=1:f[d]++}}}(),mcafee_wa_warnbannconsts={WARNING_BANNER_BASIC:"WARNING_BANNER_BASIC",WARNING_BANNER_LIVE:"WARNING_BANNER_LIVE",show_all_content:"show_all_content",close_btn_x:"close_btn_x"};function mcafee_wa_warnbanner(){this._document=null;this._frameUrls=new Map;this._totalWhitelisted=0}
mcafee_wa_warnbanner.prototype.hideWarning=function(){var a=this._document.getElementById(mcafee_wa_warnbannconsts.WARNING_BANNER_BASIC);a&&(a.style.visibility="hidden");if(a=this._document.getElementById(mcafee_wa_warnbannconsts.WARNING_BANNER_LIVE))a.style.visibility="hidden"};
mcafee_wa_warnbanner.prototype.showAllContent=function(){this._document.getElementById(mcafee_wa_warnbannconsts.show_all_content).disabled=!0;this._frameUrls.forEach(function(a,b,c){mcafee_wa_backgroundipc.onNavigate(mcafee_wa_bkconstants.whitelistUrl+"&whitelisturl="+b+"&"+mcafee_wa_bkconstants.redirectURL+"="+a,-1)})};mcafee_wa_warnbanner.prototype.isBannerCreated=function(){return null!=this._document.getElementById(mcafee_wa_warnbannconsts.WARNING_BANNER_LIVE)};
mcafee_wa_warnbanner.prototype.setWarningImage=function(a){var b=a.getAttribute("src");mcafee_wa_resourcemanager.getImage(b,function(b){a.setAttribute("src",b)})};mcafee_wa_warnbanner.prototype.addFrameURI=function(a,b){this._frameUrls.set(a,b)};
mcafee_wa_warnbanner.prototype.showWarningBanner=function(a){this._document=a;try{if(this.isBannerCreated())return!0;var b=this;mcafee_wa_resourcemanager.getHtml(mcafee_wa_constants.warningHtmlName,function(a){if(b.isBannerCreated())return!0;if(null==a||""==a)return!1;mcafee_wa_scriptinjector.injectscript(b._document,mcafee_wa_scripts.showiframe+mcafee_wa_scripts.hidewarning);var d=b._document.createElement("DIV");d.setAttribute("id","BannerLayer"+mcafee_wa_globals.uid);d.innerHTML=a;b._document.body.insertBefore(d,
b._document.body.childNodes[0]);a=b._document.getElementById(mcafee_wa_warnbannconsts.WARNING_BANNER_LIVE);if("undefined"!=a&&null!=a)for(a.style.visibility="visible",a=a.getElementsByTagName("img"),d=0;d<a.length;++d)b.setWarningImage(a[d]);var e=b._document.getElementById("warning_text_live");"undefined"!=e&&null!=e&&mcafee_wa_resourcemanager.getResString("res_20041",function(a){e.innerHTML=a});var f=b._document.getElementById(mcafee_wa_warnbannconsts.show_all_content);null!=f&&mcafee_wa_resourcemanager.getResString("res_20042",
function(a){f.value=a})})}catch(c){return mcafee_wa_globals.logger.error("showWarningBanner: "+c.message),!1}return!0};var blockpageconstants={acceptrisk:"acceptrisk",fnacceptrisk:"acceptrisk()"},mcafee_wa_blockpagehandler=function(){};
mcafee_wa_blockpagehandler.prototype._insertScript=function(a){a=a.createElement("script");a.text="function "+blockpageconstants.fnacceptrisk+" { window.postMessage({ type: '"+blockpageconstants.acceptrisk+"'}, '*'); }";var b=document.getElementsByTagName("head");null!=b&&"undefined"!=typeof b&&b[0].appendChild(a)};mcafee_wa_blockpagehandler.prototype.processpagemsg=function(a){};
mcafee_wa_blockpagehandler.prototype.process=function(a){var b=mcafee_wa_uriparser.getParam(a.location.href,mcafee_wa_bkconstants.domain),c=mcafee_wa_uriparser.getParam(a.location.href,mcafee_wa_bkconstants.originalURL);null!=c&&(this._insertScript(a),window.addEventListener("message",function(a){if(a.source==window&&a.data.type&&a.data.type==blockpageconstants.acceptrisk)mcafee_wa_backgroundipc.onNavigate(null!=b?mcafee_wa_bkconstants.whitelistUrl+"&whitelisturl="+b+"&"+mcafee_wa_bkconstants.redirectURL+
"="+c:mcafee_wa_bkconstants.whitelistUrl+"&"+mcafee_wa_bkconstants.redirectURL+"="+c,0)},!1),a=a.getElementById("DontWarn"),null!=a&&(a.href="javascript:"+blockpageconstants.fnacceptrisk))};mcafee_wa_blockpagehandler.prototype.procesmsg=function(a,b){};
var mcafee_wa_bkcommon=function(){return{toColor:function(a){var b=mcafee_wa_color.SA_Unknown;return b=a<mcafee_wa_scorevals.ScoreMinimal?mcafee_wa_color.SA_Green:a<mcafee_wa_scorevals.ScoreUnknown?mcafee_wa_color.SA_Unknown:a<mcafee_wa_scorevals.ScoreMedium?mcafee_wa_color.SA_Yellow:mcafee_wa_color.SA_Red},isDisabled:function(a,b){for(var c=[{browser:mcafee_wa_browsertypes.Chrome,flag:mcafee_wa_disabledflags.disabledChrome},{browser:mcafee_wa_browsertypes.McAfeeSecureBrowser,flag:mcafee_wa_disabledflags.disabledSafeBrowser},
{browser:mcafee_wa_browsertypes.Firefox,flag:mcafee_wa_disabledflags.disabledFirefox},{browser:mcafee_wa_browsertypes.Edge,flag:mcafee_wa_disabledflags.disabledEdge},{browser:mcafee_wa_browsertypes.Opera,flag:mcafee_wa_disabledflags.disabledOpera}],d=0;d<c.length;++d)if(c[d].browser==b)return 0!=(c[d].flag&a)?!0:!1;return!1},isSiteAdvisorURL:function(a){return a.startsWith(mcafee_wa_bkconstants.siteAdvisorUrl)||a.startsWith(mcafee_wa_bkconstants.siteAdvisorUrlSecure)?!0:!1},isProperWebURL:function(a){return a.startsWith("http://")||
a.startsWith("https://")||a.startsWith("ftp://")?!0:!1},toStringExtensionType:function(a){return a==mcafee_wa_extensiontypes.Main?" (Main)":" (Search)"}}}();function mcafee_wa_annotatehandler(){this._mutationObserver=new mcafee_wa_mutationobserver}
mcafee_wa_annotatehandler.prototype.process=function(a){mcafee_wa_globals.cacheStats.localCacheHits=0;mcafee_wa_globals.cacheStats.localCacheMiss=0;mcafee_wa_backgroundipc.isPageBlocked(a.location.href,function(a){1==a.blocked&&(mcafee_wa_globals.logger.log("Top page is blocked so redirecting to blockpage"),window.location.replace(a.rediruri))});mcafee_wa_coreengine.annotate(a)&&this._mutationObserver.Observe(a)};
mcafee_wa_annotatehandler.prototype.processpagemsg=function(a){switch(a.data.id){case mcafee_wa_scriptmessages.msgShowBalloon:mcafee_wa_globals.eventHandler.showBalloon(a);break;case mcafee_wa_scriptmessages.msgHideBalloon:mcafee_wa_globals.eventHandler.hideBalloon(a);break;case mcafee_wa_scriptmessages.msgShowIFrame:this._warningBanner.showAllContent();break;case mcafee_wa_scriptmessages.msgHideWarning:this._warningBanner.hideWarning()}};
mcafee_wa_annotatehandler.prototype.processmsg=function(a,b){switch(a.command){case mcafee_wa_commands.onredirectiframe:null==this._warningBanner&&(this._warningBanner=new mcafee_wa_warnbanner);var c=mcafee_wa_uriparser.getParam(a.uri,"domain"),d=mcafee_wa_uriparser.getParam(a.uri,"originalURL");this._warningBanner.addFrameURI(c,d);this._warningBanner.showWarningBanner(document);break;case mcafee_wa_commands.whitelistediframe:++this._warningBanner._totalWhitelisted==this._warningBanner._frameUrls.size&&
window.location.reload()}};function mcafee_wa_standaloneclient(){this.browser="ch";this._initialized=this._loadInvoked=!1;this._handler=null;this._messages=[];this._otherExtensionEnabled=!1;this._supportedFeatures=mcafee_wa_supportedfeatures.none}mcafee_wa_standaloneclient.prototype.isLoaded=function(){return this._loadInvoked};
mcafee_wa_standaloneclient.prototype.processXYViewPortRequest=function(){if(null!=window){var a=(window.mozInnerScreenX-window.screenX)*window.devicePixelRatio,a=Math.round(a),b=(window.mozInnerScreenY-window.screenY)*window.devicePixelRatio,b=Math.round(b);return{X:a,Y:b}}return null};mcafee_wa_standaloneclient.prototype.processpagemsg=function(a){null!=this._handler&&this._handler.processpagemsg(a)};
mcafee_wa_standaloneclient.prototype.initMsgHandler=function(){var a=this;chrome.runtime.onMessage.addListener(function(b,c,d){try{if(null==a._handler){mcafee_wa_globals.logger.log("Message received however handler not initialized so msg is cached");a._messages.push({request:b,sender:c,fncallback:d});return}mcafee_wa_globals.logger.log(b.command+" received in frame with uri: "+document.location.href);if(b.command==mcafee_wa_commands.getxyviewport){var e=a.processXYViewPortRequest();d(e)}else a._handler.processmsg(b,
d)}catch(f){mcafee_wa_globals.logger.error(f)}return!1})};mcafee_wa_standaloneclient.prototype.init=function(a,b){this._supportedFeatures=a;this._initialized=!0;this._otherExtensionEnabled=b;mcafee_wa_browsertypes.Chrome==mcafee_wa_settings.browsertype&&0==(this._supportedFeatures&mcafee_wa_supportedfeatures.annotations)&&0==b&&(mcafee_wa_globals.onlyShowMcAfeeSecure=!0);mcafee_wa_backgroundipc.getBingSecureSearchEnabled(function(a){mcafee_wa_globals.isBingSecureSearchEnabled=a})};
mcafee_wa_standaloneclient.prototype.createHandler=function(a){if(a.defaultView==a.defaultView.top){if(this._supportedFeatures&mcafee_wa_supportedfeatures.blockpages&&mcafee_wa_bkcommon.isSiteAdvisorURL(a.location.href))return new mcafee_wa_blockpagehandler;if(this._supportedFeatures&mcafee_wa_supportedfeatures.annotations||this._supportedFeatures&mcafee_wa_supportedfeatures.iframeblocking||mcafee_wa_browsertypes.Chrome==mcafee_wa_settings.browsertype)return new mcafee_wa_annotatehandler}else if(this._supportedFeatures&
mcafee_wa_supportedfeatures.iframeblocking)return new mcafee_wa_iframehandler;return null};
mcafee_wa_standaloneclient.prototype.process=function(a){try{this._handler=this.createHandler(a);if(null!=this._handler){this._handler.process(a);for(var b=0;b<this._messages.length;++b)this._handler.processmsg(this._messages[b].request,this._messages[b].fncallback);this._messages=[]}"undefined"!=typeof addPasswordHandler&&0!=(this._supportedFeatures&mcafee_wa_supportedfeatures.pprotection)&&addPasswordHandler(a,this)}catch(c){mcafee_wa_globals.logger.error(c)}};
mcafee_wa_standaloneclient.prototype.onDocumentComplete=function(a){a=a.target;a instanceof HTMLDocument&&this.process(a)};mcafee_wa_standaloneclient.prototype.executeCommand=function(a,b){mcafee_wa_backgroundipc.executeCommand(a,b)};mcafee_wa_standaloneclient.prototype.handleEvent=function(a){try{switch(a.type){case "load":this._loadInvoked=!0,this._initialized&&(mcafee_wa_globals.logger.log("Since initialized proceeding with handling of event from loadHandler for "+document.location.href),this.onDocumentComplete(a))}}catch(b){mcafee_wa_globals.logger.error(b)}};
var mcafee_wa_main=function(){return{main:function(){var a=new mcafee_wa_standaloneclient;a.initMsgHandler();(new mcafee_wa_msghandler).init(a);try{window.addEventListener("load",function(){a.handleEvent({type:"load",target:document})},!1)}catch(b){console.log("exception adding event listener 'load'")}mcafee_wa_backgroundipc.getSupportedFeatures(function(b){if(b.features!=mcafee_wa_supportedfeatures.none)try{var c=mcafee_wa_browsertypefinder.getBrowserType(mcafee_wa_settings.browsertype),d=new mcafee_wa_coreproperties;
mcafee_wa_settings.loggertype==mcafee_wa_loggertype.nativeLogger?d.logger=new mcafee_wa_contentnativelogger(mcafee_wa_settings.logtype,c):d.logType=mcafee_wa_settings.logtype;d.dssRequestor=new mcafee_wa_gtiproxy;d.events.onShowBalloon=mcafee_wa_telemetry.onShowBalloon;d.events.onBeginAnnotation=mcafee_wa_telemetry.onBeginAnnotation;d.events.onAnnotatingLink=mcafee_wa_telemetry.onAnnotatingLink;d.events.onCompleteAnnotation=mcafee_wa_telemetry.onCompleteAnnotation;d.debugMode=mcafee_wa_settings.debugmode;
d.browserType=c;d.binjectBalloon=mcafee_wa_browsertypes.Edge==c;d.debugTitle=mcafee_wa_bkcommon.toStringExtensionType(mcafee_wa_settings.extensiontype);mcafee_wa_telemetry.init(c);mcafee_wa_coreengine.init(d,function(){a.init(b.features,b.otherextensionenabled);a.isLoaded()&&(mcafee_wa_globals.logger.log("Since already loaded invoking processDocument explicitly for "+document.location.href),a.process(document))})}catch(e){mcafee_wa_globals.logger.log(e)}})}}}();mcafee_wa_main.main();