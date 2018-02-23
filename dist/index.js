module.exports=function(r){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=2)}([function(r,t){r.exports=require("lodash")},function(r,t){r.exports=require("errno")},function(r,t,e){"use strict";var n=function(){return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var e=[],n=!0,a=!1,o=void 0;try{for(var s,i=r[Symbol.iterator]();!(n=(s=i.next()).done)&&(e.push(s.value),!t||e.length!==t);n=!0);}catch(r){a=!0,o=r}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return e}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function a(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}var o=e(0),s=e(3),i=e(4),u=e(5),c=e(6),l=e(1).custom.createError,p=e(7),f=p.ERR_TYPE__JSON_PATH_NOT_FOUND,h="schema",m="examples",v="$.."+m+".application/json",d=l(f);function y(r){return function(r,t){var e=P(),n=function(r){return r.reduce(function(r,t){var e=function(r){var t=u.toPathArray(r).slice(),e=t.lastIndexOf(m);return t.splice(e,t.length-e,h),u.toPathString(t)}(t);return r[e]=t,r},{})}(r),o=Object.keys(n),s=E({schemaPaths:o}),i={valid:!0,statistics:s,errors:[]};return o.forEach(function(r){var o=i.errors,c=n[r],l=g(c,t),p=_(r,t,!0),f=S({validator:e,responseSchema:p,example:l,statistics:s}).map(function(r){return r.examplePath=u.toPointer(u.toPathArray(c)),r});f.length&&(i.valid=!1,o.splice.apply(o,[o.length-1,0].concat(a(f))))}),i}(function(r){return u({json:r,path:v,resultType:"path"})}(r),r)}function x(r,t){var e=E({schemaPaths:r});return O({errors:t(e),statistics:e})}function O(r){var t=r.errors,e=r.statistics,n=void 0===e?{}:e;return{valid:!t.length,statistics:n,errors:t}}function E(r){return{responseSchemasWithExamples:r.schemaPaths.length,responseExamplesTotal:0,responseExamplesWithoutSchema:0}}function g(r,t){return u({json:t,path:r,flatten:!0,wrap:!1,resultType:"value"})}function S(r){var t=r.validator,e=r.responseSchema,n=r.example,o=r.statistics,s=[];return o.responseExamplesTotal++,e?t.validate(e,n)?s:s.concat.apply(s,a(t.errors.map(p.create))):(o.responseSchemasWithExamples--,o.responseExamplesWithoutSchema++,s)}function P(){return new c({allErrors:!0})}function _(r,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=g(r,t);if(!e&&!n)throw new d("Path to response-schema can't be found: '"+r+"'",{params:{path:r}});return n}r.exports={default:y,validateFile:function(r){var t=null;try{t=JSON.parse(s.readFileSync(r,"utf-8"))}catch(r){return O({errors:[p.create(r)]})}return y(t)},validateExample:function(r,t,e){var n=null,a=null,o=null;try{n=JSON.parse(s.readFileSync(e,"utf-8")),o=JSON.parse(s.readFileSync(r,"utf-8")),a=_(t,o)}catch(r){return O({errors:[p.create(r)]})}return x([t],function(r){return S({validator:P(),responseSchema:a,example:n,statistics:r}).map(function(r){return r.exampleFilePath=e,r})})},validateExamplesByMap:function(r,t){var e=0,a=i.sync(t,{nonull:!0}).map(function(t){var a=null,i=null;try{a=JSON.parse(s.readFileSync(t,"utf-8")),i=JSON.parse(s.readFileSync(r,"utf-8"))}catch(r){return O({errors:[p.create(r)]})}return e++,x(Object.keys(a),function(r){return function(r,t,e){return o(t).entries().flatMap(function(t){var a=n(t,2),i=a[0],u=a[1],c=null;try{c=_(i,r)}catch(r){return p.create(r)}return o([u]).flatten().flatMap(function(r){var t=null;try{t=JSON.parse(s.readFileSync(r,"utf-8"))}catch(r){return p.create(r)}return S({validator:P(),responseSchema:c,example:t,statistics:e}).map(function(t){return t.exampleFilePath=r,t})}).value()}).value()}(i,a,r).map(function(r){return Object.assign(r,{mapFilePath:t})})})});return o.merge(a.reduce(function(r,t){return r?(a=t,O({errors:(e=r).errors.concat(a.errors),statistics:o.entries(e.statistics).reduce(function(r,t){var e=n(t,2),o=e[0],s=e[1];return r[o]=s+a.statistics[o],r},{})})):t;var e,a},null),{statistics:{matchingFilePathsMapping:e}})}}},function(r,t){r.exports=require("fs")},function(r,t){r.exports=require("glob")},function(r,t){r.exports=require("jsonpath-plus")},function(r,t){r.exports=require("ajv")},function(r,t,e){"use strict";var n=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r};var a=e(0),o=e(1).code.ENOENT,s=function(){function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),Object.assign(this,n({type:t},e))}return r.create=function(t){var e=r.ERR_TYPE__VALIDATION,n=t.code,o=t.message,s=t.path,i=t.cause,u=n||t.type||e,c={message:o};return e===u?a.merge(c,t):(s&&a.merge(c,{params:{path:s}}),i&&a.merge(c,i)),new r(u,c)},r}();r.exports=s,s.ERR_TYPE__VALIDATION="Validation",s.ERR_TYPE__JSON_PATH_NOT_FOUND="JsonPathNotFound",s.ERR_TYPE__JS_ENOENT=o.code}]);