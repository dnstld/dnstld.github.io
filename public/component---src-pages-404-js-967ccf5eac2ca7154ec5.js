(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7oih":function(e,t,n){"use strict";var a=n("5D9J"),r=n("q1tI"),o=n.n(r),l=n("Wbzz"),i=n("IP2g"),c=n("8tEE"),u=n("LyGV"),s=n.n(u),d=n("Kfvu"),h=n("euIH"),f=a.a.div({display:"inline-flex",alignItems:"center"}),v=a.a.label({marginRight:"0.5rem",fontSize:"0.75rem",textTransform:"uppercase",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),p=function(){var e=o.a.useContext(h.a),t=e.colorMode,n=e.setColorMode;return t?o.a.createElement(f,null,o.a.createElement(v,{htmlFor:"theme-toggle"},"Dark mode"),o.a.createElement(s.a,{id:"theme-toggle",checked:"dark"===t,icons:!1,onChange:function(e){Object(d.trackCustomEvent)({category:"Theme Color",action:"Change",label:"Theme  Color Analyzes"}),n(e.target.checked?"dark":"light")}})):null},g=a.a.header({width:"100vw",display:"flex"}),m=a.a.div({width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"var(--color-tools)",borderRadius:"0.25rem",boxShadow:"5px 5px 10px var(--color-shadow-dark), -5px -5px 10px var(--color-shadow-light)",padding:"0.5rem",margin:"1rem",boxSizing:"border-box"}),k=a.a.a({width:"3rem",height:"3rem",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"3px 3px 6px var(--color-shadow-dark), -3px -3px 6px var(--color-shadow-light)",borderRadius:"9999px",marginRight:"1rem",backgroundColor:"var(--color-tools)",":hover":{backgroundColor:"var(--color-body)"}}),b=a.a.div({}),y=function(){return o.a.createElement(g,null,o.a.createElement(m,null,o.a.createElement("div",null,o.a.createElement(k,{href:"https://github.com/dnstld",target:"_blank",rel:"noopener norefferer"},o.a.createElement(i.a,{icon:c.a,size:"lg"})),o.a.createElement(k,{href:"https://www.linkedin.com/in/denistoledo/",target:"_blank",rel:"noopener norefferer"},o.a.createElement(i.a,{icon:c.b,size:"lg"}))),o.a.createElement(b,null,o.a.createElement(p,null))))},w=a.a.div({height:"100vh",display:"grid",gridTemplateRows:"auto 1fr"}),C=a.a.main({display:"flex",flexWrap:"wrap",justifyContent:"center",overflowY:"scroll",maxWidth:"1280px",margin:"auto","@media (min-width: 768px)":{alignItems:"center"}});t.a=function(e){var t=e.children,n=Object(l.b)("3649515864");return o.a.createElement(w,null,o.a.createElement(y,{siteTitle:n.site.siteMetadata.title}),o.a.createElement(C,null,t))}},Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,o=e.nonInteraction,l=void 0!==o&&o,i=e.transport,c=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:l,transport:i};c&&"function"==typeof c&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(c,s)),window.ga("send","event",d)}};var r=a(n("pVnL")),o=a(n("8OQS")),l=a(n("q1tI")),i=a(n("17x9"));function c(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,i=e.eventValue,c=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return l.default.createElement("a",(0,r.default)({},c,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var o=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},LyGV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("q1tI"),l=h(o),i=h(n("TSYQ")),c=h(n("17x9")),u=h(n("z7Wo")),s=h(n("lZVL")),d=n("fdH9");function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return l.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(u.default,null),unchecked:l.default.createElement(s.default,null)}},f.propTypes={checked:c.default.bool,disabled:c.default.bool,defaultChecked:c.default.bool,onChange:c.default.func,onFocus:c.default.func,onBlur:c.default.func,className:c.default.string,name:c.default.string,value:c.default.string,id:c.default.string,"aria-labelledby":c.default.string,"aria-label":c.default.string,icons:c.default.oneOfType([c.default.bool,c.default.shape({checked:c.default.node,unchecked:c.default.node})])}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},fdH9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},lZVL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("q1tI"),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("7oih");t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"))}},z7Wo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("q1tI"),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}}}]);
//# sourceMappingURL=component---src-pages-404-js-967ccf5eac2ca7154ec5.js.map