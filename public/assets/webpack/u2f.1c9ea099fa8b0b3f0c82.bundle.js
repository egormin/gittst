webpackJsonp(["u2f"],{"../../../vendor/assets/javascripts/u2f.js":function(e,t,o){"use strict";(function(e){var t,o=o||{};o.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",o.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_SIGN_RESPONSE:"u2f_sign_response",U2F_GET_API_VERSION_REQUEST:"u2f_get_api_version_request",U2F_GET_API_VERSION_RESPONSE:"u2f_get_api_version_response"},o.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},o.U2fRequest,o.U2fResponse,o.Error,o.Transport,o.Transports,o.SignRequest,o.SignResponse,o.RegisterRequest,o.RegisterResponse,o.RegisteredKey,o.GetJsApiVersionResponse,o.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:o.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(o.EXTENSION_ID,t,function(){chrome.runtime.lastError?o.getIframePort_(e):o.getChromeRuntimePort_(e)})}else o.isAndroidChrome_()?o.getAuthenticatorPort_(e):o.isIosChrome_()?o.getIosPort_(e):o.getIframePort_(e)},o.isAndroidChrome_=function(){var e=navigator.userAgent;return-1!=e.indexOf("Chrome")&&-1!=e.indexOf("Android")},o.isIosChrome_=function(){return e.inArray(navigator.platform,["iPhone","iPad","iPod"])>-1},o.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(o.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout(function(){e(new o.WrappedChromeRuntimePort_(t))},0)},o.getAuthenticatorPort_=function(e){setTimeout(function(){e(new o.WrappedAuthenticatorPort_)},0)},o.getIosPort_=function(e){setTimeout(function(){e(new o.WrappedIosPort_)},0)},o.WrappedChromeRuntimePort_=function(e){this.port_=e},o.formatSignRequest_=function(e,r,n,s,i){if(void 0===t||t<1.1){for(var a=[],p=0;p<n.length;p++)a[p]={version:n[p].version,challenge:r,keyHandle:n[p].keyHandle,appId:e};return{type:o.MessageTypes.U2F_SIGN_REQUEST,signRequests:a,timeoutSeconds:s,requestId:i}}return{type:o.MessageTypes.U2F_SIGN_REQUEST,appId:e,challenge:r,registeredKeys:n,timeoutSeconds:s,requestId:i}},o.formatRegisterRequest_=function(e,r,n,s,i){if(void 0===t||t<1.1){for(var a=0;a<n.length;a++)n[a].appId=e;for(var p=[],a=0;a<r.length;a++)p[a]={version:r[a].version,challenge:n[0],keyHandle:r[a].keyHandle,appId:e};return{type:o.MessageTypes.U2F_REGISTER_REQUEST,signRequests:p,registerRequests:n,timeoutSeconds:s,requestId:i}}return{type:o.MessageTypes.U2F_REGISTER_REQUEST,appId:e,registerRequests:n,registeredKeys:r,timeoutSeconds:s,requestId:i}},o.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},o.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var o=e.toLowerCase();"message"==o||"onmessage"==o?this.port_.onMessage.addListener(function(e){t({data:e})}):console.error("WrappedChromeRuntimePort only supports onMessage")},o.WrappedAuthenticatorPort_=function(){this.requestId_=-1,this.requestObject_=null},o.WrappedAuthenticatorPort_.prototype.postMessage=function(e){var t=o.WrappedAuthenticatorPort_.INTENT_URL_BASE_+";S.request="+encodeURIComponent(JSON.stringify(e))+";end";document.location=t},o.WrappedAuthenticatorPort_.prototype.getPortType=function(){return"WrappedAuthenticatorPort_"},o.WrappedAuthenticatorPort_.prototype.addEventListener=function(e,t){if("message"==e.toLowerCase()){var o=this;window.addEventListener("message",o.onRequestUpdate_.bind(o,t),!1)}else console.error("WrappedAuthenticatorPort only supports message")},o.WrappedAuthenticatorPort_.prototype.onRequestUpdate_=function(e,t){var o=JSON.parse(t.data),r=(o.intentURL,o.errorCode,null);o.hasOwnProperty("data")&&(r=JSON.parse(o.data)),e({data:r})},o.WrappedAuthenticatorPort_.INTENT_URL_BASE_="intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE",o.WrappedIosPort_=function(){},o.WrappedIosPort_.prototype.postMessage=function(e){var t=JSON.stringify(e),o="u2f://auth?"+encodeURI(t);location.replace(o)},o.WrappedIosPort_.prototype.getPortType=function(){return"WrappedIosPort_"},o.WrappedIosPort_.prototype.addEventListener=function(e,t){"message"!==e.toLowerCase()&&console.error("WrappedIosPort only supports message")},o.getIframePort_=function(e){var t="chrome-extension://"+o.EXTENSION_ID,r=document.createElement("iframe");r.src=t+"/u2f-comms.html",r.setAttribute("style","display:none"),document.body.appendChild(r);var n=new MessageChannel,s=function(t){"ready"==t.data?(n.port1.removeEventListener("message",s),e(n.port1)):console.error('First event on iframe port was not "ready"')};n.port1.addEventListener("message",s),n.port1.start(),r.addEventListener("load",function(){r.contentWindow.postMessage("init",t,[n.port2])})},o.EXTENSION_TIMEOUT_SEC=30,o.port_=null,o.waitingForPort_=[],o.reqCounter_=0,o.callbackMap_={},o.getPortSingleton_=function(e){o.port_?e(o.port_):(0==o.waitingForPort_.length&&o.getMessagePort(function(e){for(o.port_=e,o.port_.addEventListener("message",o.responseHandler_);o.waitingForPort_.length;)o.waitingForPort_.shift()(o.port_)}),o.waitingForPort_.push(e))},o.responseHandler_=function(e){var t=e.data,r=t.requestId;if(!r||!o.callbackMap_[r])return void console.error("Unknown or missing requestId in response.");var n=o.callbackMap_[r];delete o.callbackMap_[r],n(t.responseData)},o.sign=function(e,r,n,s,i){void 0===t?o.getApiVersion(function(a){t=void 0===a.js_api_version?0:a.js_api_version,console.log("Extension JS API Version: ",t),o.sendSignRequest(e,r,n,s,i)}):o.sendSignRequest(e,r,n,s,i)},o.sendSignRequest=function(e,t,r,n,s){o.getPortSingleton_(function(i){var a=++o.reqCounter_;o.callbackMap_[a]=n;var p=void 0!==s?s:o.EXTENSION_TIMEOUT_SEC,u=o.formatSignRequest_(e,t,r,p,a);i.postMessage(u)})},o.register=function(e,r,n,s,i){void 0===t?o.getApiVersion(function(a){t=void 0===a.js_api_version?0:a.js_api_version,console.log("Extension JS API Version: ",t),o.sendRegisterRequest(e,r,n,s,i)}):o.sendRegisterRequest(e,r,n,s,i)},o.sendRegisterRequest=function(e,t,r,n,s){o.getPortSingleton_(function(i){var a=++o.reqCounter_;o.callbackMap_[a]=n;var p=void 0!==s?s:o.EXTENSION_TIMEOUT_SEC,u=o.formatRegisterRequest_(e,r,t,p,a);i.postMessage(u)})},o.getApiVersion=function(e,t){o.getPortSingleton_(function(r){if(r.getPortType){var n;switch(r.getPortType()){case"WrappedIosPort_":case"WrappedAuthenticatorPort_":n=1.1;break;default:n=0}return void e({js_api_version:n})}var s=++o.reqCounter_;o.callbackMap_[s]=e;var i={type:o.MessageTypes.U2F_GET_API_VERSION_REQUEST,timeoutSeconds:void 0!==t?t:o.EXTENSION_TIMEOUT_SEC,requestId:s};r.postMessage(i)})},window.u2f||(window.u2f=o)}).call(t,o("../../../node_modules/jquery/dist/jquery.js"))},"multi vendor/u2f":function(e,t,o){e.exports=o("../../../vendor/assets/javascripts/u2f.js")}},["multi vendor/u2f"]);
//# sourceMappingURL=u2f.1c9ea099fa8b0b3f0c82.bundle.js.map