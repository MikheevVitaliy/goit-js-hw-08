!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,u,f,a,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function S(e){return l=e,a=setTimeout(w,t),s?j(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function O(e){return a=void 0,g&&r?j(e):(r=i=void 0,f)}function T(){var e=p(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return S(c);if(d)return a=setTimeout(w,t),j(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},T.flush=function(){return void 0===a?f:O(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const j=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),w="feedback-form-state",O={};j.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(w)})),j.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,console.log(O);const t=JSON.stringify(O);localStorage.setItem(w,t)}),500)),function(){const e=localStorage.getItem(w),t=JSON.parse(e);t&&(h.value=t.message||"",S.value=t.email||"")}()}();
//# sourceMappingURL=03-feedback.10d3f9cf.js.map
