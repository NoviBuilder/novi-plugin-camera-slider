module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),o=r(i),l=n(3),a=r(l),u=n(4),c=r(u),s=n(5),d=r(s),f=novi.react.React,p={name:"novi-plugin-camera-slider",title:"Novi Camera Slider",description:"Novi Camera Slider description",version:"1.0.0",dependencies:{},defaults:{querySelector:".camera_wrap"},ui:{editor:[o.default,a.default,c.default],settings:f.createElement(d.default,null)}};novi.plugins.register(p)},function(e,t,n){"use strict";function r(e){s.fileUpload({path:novi.media.directory,accept:d,messages:{submit:"Upload an Image",title:"Upload an image",body:'Click on "Choose File" to upload your image.'},onSubmitClick:i.bind(this,e)})}function i(e,t){var n=t.replace(/['|"]/g,""),r=l.getCurrentSlideElement(e);r&&(novi.element.setAttribute(r,"data-src",n),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),a=novi.react.React,u=novi.ui.icons,c=novi.ui.icon,s=novi.modal,d=novi.types.images,f={trigger:a.createElement(c,null,u.ICON_BG_IMAGE),tooltip:"Replace Slide Image",closeIcon:"submit",title:"Replace Slide Image",onTriggerClick:r};t.default=f},function(e,t){"use strict";function n(e){var t=i(e);if(null===t)return null;var n=e.querySelector(".camera_src");if(!n)return null;for(var r=0,l=-1;r<n.childNodes.length;){if(o.dom.isElementNode(n.childNodes[r])&&++l===t)return n.childNodes[r];r++}return null}function r(e){var t=e.querySelector(".camera_src");if(!t)return null;for(var n=0,r=0;n<t.childNodes.length;)o.dom.isElementNode(t.childNodes[n])&&r++,n++;return r}function i(e){var t=e.querySelector(".cameraContent.cameracurrent");if(!t)return null;for(var n=t.parentNode.childNodes,r=0;r<n.length;r++)if(n[r]===t)return r;return null}Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentSlideElement=n,t.getSlidesCount=r;var o=novi.utils},function(e,t,n){"use strict";function r(e){var t=o.getCurrentSlideElement(e);t&&(novi.element.duplicate(t),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),l=novi.react.React,a=novi.ui.icons,u=novi.ui.icon,c={trigger:l.createElement(u,null,a.ICON_PLUS_SQUARE),tooltip:"Add Slide",closeIcon:"submit",title:"Add New Slide",collapsed:!0,onTriggerClick:r};t.default=c},function(e,t,n){"use strict";function r(e){var t=o.getCurrentSlideElement(e),n=o.getSlidesCount(e);!t||n<=1||(novi.element.remove(t),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),l=novi.react.React,a=novi.ui.icons,u=novi.ui.icon,c={trigger:l.createElement(u,null,a.ICON_MINUS_SQUARE),tooltip:"Remove Slide",closeIcon:"submit",title:"Remove Active Slide",collapsed:!0,onTriggerClick:r};t.default=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=novi.react.React,a=novi.react.Component,u=novi.ui.input,c=novi.ui.button,s=function(e){function t(e){n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.state={settings:e.settings},i.saveSettings=i.saveSettings.bind(i),i.onChange=i.onChange.bind(i),i}return i(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return l.createElement("div",null,l.createElement("span",{style:{letterSpacing:"0,0462em"}},"Camera Slider Plugin"),l.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),l.createElement(u,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),l.createElement("div",{style:{marginTop:30}},l.createElement(c,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-camera-slider",this.state.settings)}}]),t}(a);t.default=s}]);