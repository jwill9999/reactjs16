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

var mcafee_wa_bkconstants={uninstallUrl:"https://home.mcafee.com/root/landingpage.aspx?lpname=get-it-now",siteAdvisorUrl:"http://www.siteadvisor.com/",siteAdvisorUrlSecure:"https://www.siteadvisor.com/",siteReportUrl:"https://www.mcafee.com/threat-intelligence/site/default.aspx?url=",blockPageUrl:"https://www.siteadvisor.com/restricted.html",phishingPageUrl:"https://www.siteadvisor.com/phishing.html",maxCacheRecords:1E3,browsertype:"browsertype",useragent:"useragent",whitelistUrl:"about:blank?command=whitelist&token=1",
domain:"domain",redirectURL:"redirectURL",originalURL:"originalURL",chromeExtensionVersion:"chromeExtVer",disabled:"disabled",notchromecompliant:"SearchExtensionDisabled",viewport:"viewport",annonlyonssearch:"*OnlyShowAnnotationsOnSecureSearch",showicons:"*Icons",pnaclenabled:"Pnaclenabled",phishingcategory:169,pprotectfeaturedisabled:"*FeatureDisablePasswordCheck",userdisabledpprotect:"*UserOptionDisablePasswordCheck",SystemGEO:"SystemGEO",BingCountrySet:"BingCountrySet",ProviderForced:"ProviderForced",
BingQString:"PC=MC",BingProvider:23,cookie:"Cookie",maxreservedcallbackid:5};mcafee_wa_browsertypes={Unknown:-1,Firefox:1,Chrome:2,McAfeeSecureBrowser:3,Opera:4,Edge:5,Agnostic:6};
var mcafee_wa_commands={dssrequest:"dssrequest",reportstat:"reportstat",executecommand:"executecommand",ondoccomplete:"ondoccomplete",onnavigateiframe:"onnavigateiframe",onredirectiframe:"onredirectiframe",onnavigate:"onnavigate",onoptionreceived:"onoptionreceived",setoption:"setoption",getsupportedfeatures:"getsupportedfeatures",isframeblocked:"isframeblocked",whitelistediframe:"whitelistediframe",ispageblocked:"ispageblocked",logmsg:"logmsg",getxyviewport:"getxyviewport",getres:"getres",showoptions:"showoptions",
addpagescanstat:"addpagescanstat",getbingsecuresearchenabled:"getbingsecuresearchenabled"};mcafee_wa_extensiontypes={Unknown:-1,Main:0,Search:1};var mcafee_wa_loggertype={defaultLogger:0,nativeLogger:1};mcafee_wa_logtypes={None:0,Info:1,Err:2,All:3};
var mcafee_wa_resources={IDS_PROVOCATIVEATTIRE:12035,IDS_INCIDENTALNUDITY:12077,IDS_TOBACCO:12049,IDS_ONLINESHOPPING:12034,IDS_REDIRECTURL_PHISHING:1001,IDS_HISTORICALREVISIONISM:12086,IDS_NUDITY:12031,IDS_PLUSPRODUCTNAME_W_TM:213,IDS_MEDIADOWNLOADS:12028,IDS_VERSION:170,IDS_BUILD:172,IDS_HACKINGCOMPUTERCRIME:12017,IDS_FORKIDS:12094,IDS_ENTERTAINMENTCULTURE:14102,IDS_LOCALE_DISPLAY:101,IDS_SPORTS:12044,IDS_PROFANITY:12058,IDS_PLUSEXTENSION:209,IDS_LIFESTYLE:14106,IDS_SITEDETAILS:166,IDS_MCAFEEWEBADVISORTEXT:30010,
IDS_LANGUAGE_SHORT:102,IDS_RELIGIONIDEOLOGY:12041,IDS_LASTUPDATE:173,IDS_SAFESEARCH_CashBack:20034,IDS_URL_CASHBACK_EBATES_PORTAL:1116,IDS_SAFESEARCH_moreInfoElipses:20022,IDS_TEXTTRANSLATORS:12092,IDS_ILLEGALUK:12101,IDR_MENU_TOOLBAR:103,IDS_MODERATED:12096,IDS_SPAMURLS:12069,IDS_MCAFEEWEBADVISOR:30006,IDS_ANONYMIZINGUTILITIES:12004,IDS_LANGUAGE:171,IDS_USENETNEWS:12030,IDS_PROFESSIONALNETWORKING:12090,IDS_MCAFEEWEBADVISORLIVETEXT:30011,IDS_WARNING_CAREFUL_REC:3321,IDS_RECREATIONHOBBIES:12083,IDS_SAFESEARCH_CC_Header:20029,
_APS_NEXT_SYMED_VALUE:60001,IDS_WARNING_UNSAFE_REC:3320,IDS_INTERACTIVEWEBAPPLICATIONS:12070,IDS_LOCALE_POSIX:100,IDS_REALESTATE:12082,IDS_ALCOHOL:12002,IDS_INFORMATIONCOMMUNICATION:14105,IDS_UNDOCK_YT_MSG:4E3,IDS_SOCIETYEDUCATIONRELIGION:14111,IDS_UNDOCK_YT_DONE_MSG:4001,IDS_PLUSPRODUCTNAME:212,IDS_BROWSEREXPLOITS:12098,IDS_STREAMINGMEDIA:12045,IDS_BANNER_BLOCKED:20041,IDS_CONTROVERSIALOPINIONS:12100,IDS_GENERALNEWS:12033,IDS_URL_CLIENT_UPSELL:1110,IDS_PORNOGRAPHY:12047,IDS_PUBLICINFORMATION:12007,
IDS_SAFESEARCH_okMsg:20010,IDS_ENTERTAINMENT:12011,IDS_RESIDENTIALIPADDRESSES:12105,IDS_WARNINGTEXT_UNSAFE_BLURB:3305,IDS_WARNINGTEXT_CAREFUL_BLURB:3306,ID_TOOL_MORE:113,IDS_SOCIALNETWORKING:12091,IDS_HEALTH:12018,IDS_DATINGPERSONALS:12088,IDS_HS_Recommendation:20031,IDS_INTERNETSERVICES:12075,IDS_BANNER_WARNING:20040,IDS_INFORMATIONTECHNOLOGY:14104,IDS_PHARMACY:12080,IDS_WEAPONS:12053,IDS_FINANCEBANKING:12013,IDS_BANNER_SHOWCONTENT:20042,IDS_DRUGS:12009,IDS_SEARCHENGINES:12043,IDS_EDUCATIONREFERENCE:12010,
IDS_SHAREWAREFREEWARE:12046,IDS_BLOGSWIKI:12084,IDS_ARTCULTUREHERITAGE:12001,IDS_ILLEGALSOFTWARE:12073,IDS_TECHNICALINFORMATION:12087,IDS_SEARCHBOX_EMPTYTEXT:4102,IDS_P2PFILESHARING:12036,IDS_WEBMEETINGS:12093,IDS_PERSONALPAGES:12038,IDS_MAJORGLOBALREGIONS:12102,IDS_BUSINESS:12005,IDS_SEXUALMATERIALS:12060,_APS_NEXT_COMMAND_VALUE:40001,IDS_GAMBLING:12014,IDS_GAMES:12015,ID_TOOL_SETTINGS:114,IDS_SAFESEARCH_redMsg:20033,IDS_INSTALL_DONE_MSG:10016,IDS_URL_UPGRADE_MSADP:1107,IDS_WEBPHONE:12055,IDS_DIGITALPOSTCARDS:12085,
IDS_CHROMEWARNING_MSG:3166,IDS_GAMBLINGRELATED:12064,IDS_INSTANTMESSAGING:12021,ID_TOOL_SETTINGS_SEARCH:128,IDS_SAFESEARCH_bannerWarn:20017,IDS_POLITICSOPINION:12037,IDS_INSTALL_CLOSE_BROWSER_MSG:10019,IDS_PURCHASING:14109,IDS_CONTENTSERVER:12074,IDS_COMPANYNAME:207,IDS_INSTALL_WIZARD_REBOOT_REQUIRED:2918,IDS_ANONYMIZERS:12003,_APS_NEXT_RESOURCE_VALUE:30008,IDS_PUPS:12104,IDS_JOBSEARCH:12024,IDS_INTERNETRADIOTV:12023,IDS_AUCTIONSCLASSIFIEDS:12056,IDS_RISKFRAUDCRIME:14110,IDS_INFORMATIONSECURITY:12025,
IDS_PORNOGRAPHYNUDITY:14108,IDS_HISTORY:12095,IDS_MARKETINGMERCHANDISING:12078,IDS_SAFESEARCH_cautionMsg:20009,IDS_GRUESOMECONTENT:12061,IDS_SAVE:164,IDS_CONSUMERPROTECTION:12099,IDS_SEARCHBUTTON_TOOLTIP:4101,IDS_REDIRECTURL_RESTRICTED:1E3,IDS_BUSINESSSERVICES:14100,IDS_HUMORCOMICS:12019,IDS_SCHOOLCHEATINGINFORMATION:12059,IDS_FORUMBULLETINBOARDS:12057,IDS_SEARCHBUTTON_LABEL:4100,IDS_WEBMAIL:12054,IDS_SAFESEARCH_untestedMsg:20008,IDS_VIOLENCE:12051,IDS_EXTREME:12012,IDS_VISUALSEARCHENGINE:12062,IDS_RESOURCESHARING:12042,
IDS_PARKEDDOMAIN:12079,_APS_NEXT_CONTROL_VALUE:50001,IDS_HATEDISCRIMINATION:12020,IDS_MALICIOUSSITES:12029,IDS_SPYWAREADWARE:12048,IDS_GAMESGAMBLING:14103,IDS_PERSONALNETWORKSTORAGE:12068,IDS_MOTORVEHICLES:12089,IDS_MEDIASHARING:12076,IDS_WARNING_REPUTATION_REC:3322,IDS_TRAVEL:12050,IDS_MESSAGING:12065,IDS_YAHOO_SEARCH_DISPLAYNAME:11010,IDS_SAFESEARCH_UPSELL:140,IDS_PORTALSITES:12039,IDS_BANNER_BLOCKED_TITLE:20043,IDS_TEXTSPOKENONLY:12097,IDS_GAMECARTOONVIOLENCE:12066,IDS_PHISHING:12067,IDS_SAFESEARCH_unsafeLinks:20018,
IDS_URL_HELP:1102,IDS_RESTAURANTS:12081,IDS_CHAT:12006,IDS_DRUGSGROUP:14101,IDS_MATUREVIOLENT:14107,IDS_MOBILEPHONE:12027,IDS_MCAFEEWEBADVISORLIVE:30009,IDS_SAFESEARCH_yahoo_block_text:20028,IDS_GOVERNMENTMILITARY:12016,IDS_UNINSTALL_REBOOT_MSG:3752,IDS_WEBADS:12052,IDS_DATINGSOCIALNETWORKING:12026,IDS_CRIMINALACTIVITIES:12008,IDS_PRODUCTNAME:208,IDS_MALICIOUSDOWNLOADS:12103,IDS_SOFTWAREHARDWARE:12072,IDS_TECHNICALBUSINESSFORUMS:12063,IDS_VIEWSITEREPORT:30007,IDS_REMOTEACCESS:12040,IDS_FASHIONBEAUTY:12071,
IDS_NONPROFITADVOCACYNGO:12032,IDS_STOCKTRADING:12022,IDS_WARNINGTEXT_REPUTATION_BLURB:3302},mcafee_wa_menuids={siteReport:0,options:114};function mcafee_wa_popup(){}mcafee_wa_popup.prototype.showSiteReport=function(a){if(null!=a.url&&0<a.url.length){a=encodeURI(a.url);var b={};b.url=mcafee_wa_bkconstants.siteReportUrl+a;chrome.tabs.create(b)}};
mcafee_wa_popup.prototype.showOptions=function(a){null!=a.url&&0<a.url.length&&(a=encodeURI(a.url),chrome.runtime.sendMessage({command:mcafee_wa_commands.showoptions,Url:a}))};
mcafee_wa_popup.prototype.createMenuItem=function(a,b,e,d){var h=document.getElementById("samenuul"),f=document.createElement("li"),c=document.createElement("a");c.id=a;c.innerHTML=b;c.menuEnabled=e;c.tabId=d;c.style.color="black";c.style.background="white";c.onmouseover=function(){this.style.color="white";this.style.background="#2586d7"};c.onmouseout=function(){this.style.color="black";this.style.background="white"};var g=this;c.addEventListener("click",function(){switch(a){case mcafee_wa_menuids.siteReport:g.showSiteReport(d);
window.close();break;case mcafee_wa_menuids.options:g.showOptions(d),window.close()}});f.appendChild(c);h.appendChild(f)};mcafee_wa_popup.prototype.createSeparator=function(){var a=document.getElementById("samenuul"),b=document.createElement("hr");a.appendChild(b)};
mcafee_wa_popup.prototype.init=function(){var a=this;document.addEventListener("DOMContentLoaded",function(){chrome.tabs.query({active:!0,currentWindow:!0},function(b){chrome.runtime.getBackgroundPage(function(e){var d=new e.mcafee_wa_resourcerequestor;d.getResStr("res_"+mcafee_wa_resources.IDS_VIEWSITEREPORT,function(e){d.getResStr("res_"+mcafee_wa_resources.ID_TOOL_SETTINGS,function(d){if(b[0].url.startsWith("http://")||b[0].url.startsWith("https://")||b[0].url.startsWith("www."))a.createMenuItem(mcafee_wa_menuids.siteReport,
e,!0,b[0]),mcafee_wa_settings.extensiontype==mcafee_wa_extensiontypes.Main&&a.createSeparator();mcafee_wa_settings.extensiontype==mcafee_wa_extensiontypes.Main&&a.createMenuItem(mcafee_wa_menuids.options,d,!0,b[0])})})})})})};var popup=new mcafee_wa_popup;popup.init();var mcafee_wa_settings={loggertype:mcafee_wa_loggertype.defaultLogger,logtype:mcafee_wa_logtypes.None,debugmode:!1,browsertype:mcafee_wa_browsertypes.Chrome,extnversion:"5.1.0.633",extensiontype:mcafee_wa_extensiontypes.Main};
