function dependOn(){"use strict";return[require("communicate"),require("common"),require("util"),require("proxy"),require("analytics"),require("feat")]}var def;require=function(a){"use strict";return a},def=window.define?window.define:function(a,b){"use strict";return b.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),function(a,b,c,d,e,f){"use strict";var h,i,j,k,g=null;j=function(){return a.getModule("upload")},k=function(){return a.getModule("session")},h=function(){this.proxy=d.proxy.bind(this),this.LOG=b.LOG,this.uploadHandler=function(a){var d=["application/illustrator","image/bmp","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.adobe.form.fillsign","image/gif","application/x-indesign","image/jpeg","image/jpeg","application/vnd.oasis.opendocument.formula","application/vnd.oasis.opendocument.graphics","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","image/png","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/mspowerpoint","application/postscript","image/vnd.adobe.photoshop","application/vnd.ms-publisher","application/x-tika-msoffice","text/rtf","application/vnd.sun.xml.writer.template","application/vnd.sun.xml.draw","application/vnd.sun.xml.calc","application/vnd.sun.xml.impress","application/vnd.sun.xml.writer","text/plain","image/tiff","image/tiff","text/plain","application/vnd.ms-excel","application/msexcel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip"],f=a.request;a.id&&(f.assetId=a.id,c.ajax({url:b.settings.files_api+"assets/"+a.id+"/metadata",type:"GET",headers:b.GET_headers()}).done(this.proxy(function(b){if(delete f.create_path,delete f.export_path,delete f.form_path,delete f.preview_path,f.preview_path="file/"+a.id,f.send_path="send/file/"+a.id,f.fillsign=!1,e.event(e.e.UPLOAD_COMPLETE),"application/pdf"===b.content_type&&(f.export_path="exportpdf/"+a.id,f.fillsign=!0),d.indexOf(b.content_type)!==-1&&(f.create_path="convertpdf/"+a.id,f.fillsign=!1),"fillsign"===f.handleResult)delete f.handleResult,this.fill_sign(f);else if(f.handleResult){c.consoleLog("handleResult: "+f.handleResult);var g={preview:f.preview_path,image_preview:f.preview_path,export:f.export_path,send:f.send_path,to_pdf:f.create_path}[f.handleResult];e.event(e.e.REDIRECT),delete f.handleResult,k().gotoPath(g)}})))},this.do_upload=function(a,b){var c={"upload-image":e.e.CONTEXT_UPLOAD_IMAGE,upload_link:e.e.CONTEXT_UPLOAD_LINK,upload:e.e.CONTEXT_UPLOAD_PDF_PAGE}[a.menuItem];c&&(e.event(c),delete a.menuItem),j().upload(a).done(this.proxy(this.uploadHandler))},this.sign_out=function(a,b){k().signOut()},this.dismiss=function(a,b){c.consoleLog("dismiss/ok")},this.specialCases=SETTINGS.USE_FLICKR?[{regex:/http[s]:\/\/www\.flickr\.com/,action:"flickr",lastPromptTime:null}]:[],this.handleSpecialUrl=function(b,d){var e=!1;return c.each(this.specialCases,function(f,g){if(g.regex.test(b)){var h=!0,i=(new Date).getTime();g.lastPromptTime&&i-g.lastPromptTime<1e4&&(h=!1),h&&(g.lastPromptTime=i,c.consoleLog("INVITE: "+i),a.deferMessage({panel_op:g.action,tabId:d})),e=!0}}),e},this.fill_sign=function(a,f){var g=a.userSelectPromise||c.Deferred().resolve().promise();g.then(this.proxy(function(){c.consoleLog("fill and sign");var f={url:b.settings.fillsign_api+"createform",contentType:"application/json",accept:b.GET_headers().Accept,type:"POST",dataType:"json",xhrFields:{withCredentials:!0},headers:b.POST_headers()};f.data=JSON.stringify({asset_id:a.assetId}),k().message("Preparing for Fill and Sign",!0),e.event(e.e.CREATE_FORM_PROGRESS_SHOWN),c.ajax(f).then(this.proxy(function(b){c.consoleLog("form created"),c.consoleLogDir(b),a.form_path="fillsign/"+b.form_id,e.event(e.e.CREATE_FORM_COMPLETE),e.event(e.e.REDIRECT),k().gotoPath(a.form_path)}),this.proxy(function(a){return c.consoleLog("form create failed"),d.REST_error(a,this),a}))}))},this.newTab=function(c,d,f){var i,j=chrome.runtime.getURL("data/js/options.html");return SETTINGS.CHROME_VERSION<SETTINGS.SUPPORTED_VERSION?(chrome.browserAction.setIcon({path:"data/images/acrobat_dc_appicon_24.png",tabId:d}),void chrome.browserAction.enable(d)):0===c.indexOf(b.settings.redirect_uri+"?code=")?void k().foundCode(c):c.includes(j)?(i=e.getAnalyticsUsage(),j+=c.includes("?os=mac")?"?os=mac":"?anl="+i,SETTINGS.USE_ACROBAT||(j+="&env="+b.settings.env),c!==j?void chrome.tabs.update(d,{url:j,active:!0}):void e.event(e.e.OPTIONS_PAGE)):(k().checkSessionTab(d,c),a.avoidUrl(c)?void a.disable(d):void(g.handleSpecialUrl(c,d)||a.loaded(d)))},this.startup=function(b,c){this.started||(this.newTab(b.url,c.tab.id,b.is_pdf?"application/pdf":"text/html"),this.started=!0),b.is_pdf&&a.pdf_menu(b,c)}},g||(g=new h,a.registerModule("download-manager",g));for(i in g)g.hasOwnProperty(i)&&("function"==typeof g[i]?exports[i]=g[i].bind(g):exports[i]=g[i]);return a.registerHandlers({do_upload:g.proxy(g.do_upload),dismiss:g.proxy(g.dismiss),ok:g.proxy(g.dismiss),fillsign:g.proxy(g.fill_sign),"sign-out":g.proxy(g.sign_out),"html-startup":g.proxy(g.startup),"pdf-menu":g.proxy(g.startup)}),c.isChrome()&&chrome.tabs.onUpdated.addListener(g.proxy(function(b,c,d){"complete"===c.status?g.newTab(d.url,b):"loading"===c.status&&a.loading({id:b})})),c.isFF()&&(g.proxy(function(){var b=require("chrome").Cu,d=b.import("resource://gre/modules/Downloads.jsm").Downloads,e=b.import("resource://gre/modules/Task.jsm").Task,f={onDownloadAdded:function(b){if(c.consoleLog("Added",b),c.consoleLog("Added Content type: "+b.contentType),!a.avoidUrl(b.source.url)){var d={filename:b.target.path.replace(/\S*(\\|\/)/,""),url:b.source.url,panel_op:"pdf_menu"};a.deferMessage(d)}}};e.spawn(function(){try{d.getList(d.ALL).then(function(a){c.consoleLogDir(a),a.addView(f)})}catch(a){c.consoleError(a)}})})(),require("sdk/tabs").on("ready",function(a){a.url;g.newTab(a.url,a.id,a.contentType)}),require("chrome").Cu.import("resource://gre/modules/Services.jsm")),g});