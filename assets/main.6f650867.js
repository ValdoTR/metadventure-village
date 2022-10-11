var ne=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e)=>{for(var t in e||(e={}))ie.call(e,t)&&_(r,t,e[t]);if(D)for(var t of D(e))ae.call(e,t)&&_(r,t,e[t]);return r},q=(r,e)=>oe(r,se(e));class T{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(n!==void 0){if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class ue{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new T(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(r){const e=r?"#"+r.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+e)}async function le(r,e){const t=await WA.room.getTiledMap(),n=new Map;return J(t.layers,n,r,e),n}function J(r,e,t,n){for(const o of r)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"){if(!!t&&o.name!==t||!!n&&!n.includes(s.name))continue;e.set(s.name,new ue(s))}}else o.type==="group"&&J(o.layers,e,t,n)}let O;async function x(){return O===void 0&&(O=ce()),O}async function ce(){return fe(await WA.room.getTiledMap())}function fe(r){const e=new Map;return Q(r.layers,"",e),e}function Q(r,e,t){for(const n of r)n.type==="group"?Q(n.layers,e+n.name+"/",t):(n.name=e+n.name,t.set(n.name,n))}function pe(r){let e=1/0,t=1/0,n=0,o=0;const s=r.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<r.height;i++)for(let u=0;u<r.width;u++)s[u+i*r.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),t=Math.min(t,i),n=Math.max(n,i));return{top:t,left:e,right:o+1,bottom:n+1}}function z(r){let e=1/0,t=1/0,n=0,o=0;for(const s of r){const i=pe(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>n&&(n=i.bottom)}return{top:t,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var he=Object.prototype.toString,L=Array.isArray||function(e){return he.call(e)==="[object Array]"};function N(r){return typeof r=="function"}function de(r){return L(r)?"array":typeof r}function G(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $(r,e){return r!=null&&typeof r=="object"&&e in r}function ge(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var ye=RegExp.prototype.test;function me(r,e){return ye.call(r,e)}var ve=/\S/;function we(r){return!me(ve,r)}var Ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function be(r){return String(r).replace(/[&<>"'`=\/]/g,function(t){return Ae[t]})}var We=/\s*/,Se=/\s+/,Z=/\s*=/,Ce=/\s*\}/,Le=/#|\^|\/|>|\{|&|=|!/;function Be(r,e){if(!r)return[];var t=!1,n=[],o=[],s=[],i=!1,u=!1,a="",c=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var g,m,p;function b(A){if(typeof A=="string"&&(A=A.split(Se,2)),!L(A)||A.length!==2)throw new Error("Invalid tags: "+A);g=new RegExp(G(A[0])+"\\s*"),m=new RegExp("\\s*"+G(A[1])),p=new RegExp("\\s*"+G("}"+A[1]))}b(e||v.tags);for(var l=new E(r),f,d,w,B,M,W;!l.eos();){if(f=l.pos,w=l.scanUntil(g),w)for(var R=0,re=w.length;R<re;++R)B=w.charAt(R),we(B)?(s.push(o.length),a+=B):(u=!0,t=!0,a+=" "),o.push(["text",B,f,f+1]),f+=1,B===`
`&&(h(),a="",c=0,t=!1);if(!l.scan(g))break;if(i=!0,d=l.scan(Le)||"name",l.scan(We),d==="="?(w=l.scanUntil(Z),l.scan(Z),l.scanUntil(m)):d==="{"?(w=l.scanUntil(p),l.scan(Ce),l.scanUntil(m),d="&"):w=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(d==">"?M=[d,w,f,l.pos,a,c,t]:M=[d,w,f,l.pos],c++,o.push(M),d==="#"||d==="^")n.push(M);else if(d==="/"){if(W=n.pop(),!W)throw new Error('Unopened section "'+w+'" at '+f);if(W[1]!==w)throw new Error('Unclosed section "'+W[1]+'" at '+f)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&b(w)}if(h(),W=n.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return Pe(Te(o))}function Te(r){for(var e=[],t,n,o=0,s=r.length;o<s;++o)t=r[o],t&&(t[0]==="text"&&n&&n[0]==="text"?(n[1]+=t[1],n[3]=t[3]):(e.push(t),n=t));return e}function Pe(r){for(var e=[],t=e,n=[],o,s,i=0,u=r.length;i<u;++i)switch(o=r[i],o[0]){case"#":case"^":t.push(o),n.push(o),t=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],t=n.length>0?n[n.length-1][4]:e;break;default:t.push(o)}return e}function E(r){this.string=r,this.tail=r,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};E.prototype.scanUntil=function(e){var t=this.tail.search(e),n;switch(t){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=n.length,n};function C(r,e){this.view=r,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)};C.prototype.lookup=function(e){var t=this.cache,n;if(t.hasOwnProperty(e))n=t[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=$(s,i[u])||ge(s,i[u])),s=s[i[u++]];else s=o.view[e],a=$(o.view,e);if(a){n=s;break}o=o.parent}t[e]=n}return N(n)&&(n=n.call(this.view)),n};function y(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||v.tags).join(":"),s=typeof n!="undefined",i=s?n.get(o):void 0;return i==null&&(i=Be(e,t),s&&n.set(o,i)),i};y.prototype.render=function(e,t,n,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=t instanceof C?t:new C(t,void 0);return this.renderTokens(i,u,n,e,o)};y.prototype.renderTokens=function(e,t,n,o,s){for(var i="",u,a,c,h=0,g=e.length;h<g;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,t,n,o,s):a==="^"?c=this.renderInverted(u,t,n,o,s):a===">"?c=this.renderPartial(u,t,n,s):a==="&"?c=this.unescapedValue(u,t):a==="name"?c=this.escapedValue(u,t,s):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,t,n,o,s){var i=this,u="",a=t.lookup(e[1]);function c(m){return i.render(m,t,n,s)}if(!!a){if(L(a))for(var h=0,g=a.length;h<g;++h)u+=this.renderTokens(e[4],t.push(a[h]),n,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],t.push(a),n,o,s);else if(N(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(t.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],t,n,o,s);return u}};y.prototype.renderInverted=function(e,t,n,o,s){var i=t.lookup(e[1]);if(!i||L(i)&&i.length===0)return this.renderTokens(e[4],t,n,o,s)};y.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!n)&&(s[i]=o+s[i]);return s.join(`
`)};y.prototype.renderPartial=function(e,t,n,o){if(!!n){var s=this.getConfigTags(o),i=N(n)?n(e[1]):n[e[1]];if(i!=null){var u=e[6],a=e[5],c=e[4],h=i;a==0&&c&&(h=this.indentPartial(i,c,u));var g=this.parse(h,s);return this.renderTokens(g,t,n,h,o)}}};y.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(n!=null)return n};y.prototype.escapedValue=function(e,t,n){var o=this.getConfigEscape(n)||v.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===v.escape?String(s):o(s)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return L(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!L(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){P.templateCache=r},get templateCache(){return P.templateCache}},P=new y;v.clearCache=function(){return P.clearCache()};v.parse=function(e,t){return P.parse(e,t)};v.render=function(e,t,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+de(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,t,n,o)};v.escape=be;v.Scanner=E;v.Context=C;v.Writer=y;class Ee{constructor(e,t){this.template=e,this.state=t,this.ast=v.parse(e)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe(()=>{const o=v.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of t)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const o=n[0],s=n[1],i=n[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function Me(){var r;const e=await x();for(const[t,n]of e.entries()){const o=(r=n.properties)!==null&&r!==void 0?r:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ee(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();H(t,s.name,u),i.onChange(a=>{H(t,s.name,a)})}}}function H(r,e,t){WA.room.setProperty(r,e,t),e==="visible"&&(t?WA.room.showLayer(r):WA.room.hideLayer(r))}let I,F=0,U=0;function X(r){if(WA.state[r.name]){let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function ke(r){const e=r.properties.getString("openSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=te(r.properties.mustGetString("openLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function xe(r){const e=r.properties.getString("closeSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=te(r.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function ee(r){return r.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(r){const e=ee(r),t=z(e),n=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(F-n,2)+Math.pow(U-o,2))}function Re(r){WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]?ke(r):xe(r),X(r)}),X(r)}function Oe(r,e,t,n){const o=r.name;let s,i,u=!1;const a=t.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function g(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function p(l){const f=z(ee(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:n+"/keypad.html#"+encodeURIComponent(l),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function b(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,t.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(t.getString("code")||t.getString("codeVariable"))){p(o);return}!c||(WA.state[e.name]?g():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),b()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),i&&WA.state[e.name]===!0&&b(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ge(r){const e=r.properties.mustGetString("bellSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=Math.sqrt(Math.pow(r.x-F,2)+Math.pow(r.y-U,2));if(o>t)return;n=1-o/t}WA.sound.loadSound(e).play({volume:n})}function Ve(r){WA.state[r.name]===void 0&&(WA.state[r.name]=0),WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]&&Ge(r)})}function Ie(r,e,t){let n;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?n=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[r]=WA.state[r]+1}}]):WA.state[r]=WA.state[r]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{n&&(n.close(),n=void 0)})}async function Ne(r){r=r!=null?r:k;const e=await le();I=await x();for(const t of e.values())t.properties.get("door")&&Re(t),t.properties.get("bell")&&Ve(t);for(const t of I.values()){const n=new T(t.properties),o=n.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Oe(t,i,n,r)}const s=n.getString("bellVariable");s&&Ie(s,n,t.name)}WA.player.onPlayerMove(t=>{F=t.x,U=t.y})}function Fe(r,e){const t=r.getString("bindVariable");if(t){const n=r.get("enterValue"),o=r.get("leaveValue"),s=r.getString("triggerMessage"),i=r.getString("tag");Ue(t,e,n,o,s,i)}}function Ue(r,e,t,n,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[r]=t)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[r]=n}))}async function De(){const r=await x();for(const e of r.values()){const t=new T(e.properties);Fe(t,e.name)}}let Y;async function _e(r){const e=await WA.room.getTiledMap();r=r!=null?r:k,Y=await x();const t=e.layers.find(n=>n.name==="configuration");if(t){const o=new T(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(r+"/configuration.html",!0)});for(const s of Y.values()){const i=new T(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&je(u.split(","),s.name,i)}}}function je(r,e,t){let n;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;n&&n.remove(),n=WA.ui.displayActionMessage({message:(a=t.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>K(r)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=t.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():K(r))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),u()})}const qe=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ke=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function $e(){var r;const e=WA.player.state.tutorialDone,t=/Mobi|Android/i.test(navigator.userAgent),o=await((r=(await WA.room.getTiledMap()).properties)===null||r===void 0?void 0:r.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){Ze(t);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const b=i.x+a.x+a.width>u.x+u.width,l=i.x+a.x<u.x,f=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;b?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),f?a.y=-a.height:d&&(a.y=16)},h=p=>{a.width=p.width,a.height=p.height,a.scale=p.scale},g=p=>{const l=(t?qe:Ke).filter(f=>{if(f.lowerBound&&f.uppperBound)return f.lowerBound<p&&p<=f.uppperBound;if(f.lowerBound&&!f.uppperBound)return f.lowerBound<p;if(!f.lowerBound&&f.uppperBound)return p<=f.uppperBound;throw new Error(`Zoom level of: ${p} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},m=()=>{if(u===void 0)return;const p=u.zoom;g(p),c()};WA.player.onPlayerMove(p=>{i=p,m()}),WA.camera.onCameraUpdate().subscribe(p=>{u=p,m()}),WA.player.state.tutorialDone=!0}}function Ze(r){let e={allow:"",name:"tutorial",url:k+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};r&&(e=q(j({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function He(){return WA.onInit().then(()=>{Ne().catch(r=>console.error(r)),De().catch(r=>console.error(r)),_e().catch(r=>console.error(r)),Me().catch(r=>console.error(r)),$e().catch(r=>console.error(r))}).catch(r=>console.error(r))}console.log("Script started successfully");let S;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("Llamaverse").subscribe(()=>{S=WA.ui.openPopup("LlamaversePopup","Visit Llamaverse",[{label:"Teleport",className:"primary",callback:()=>WA.nav.goToRoom("/@/llamaverse")}])}),WA.room.area.onLeave("Llamaverse").subscribe(()=>{V(),WA.nav.closeCoWebSite()}),WA.room.area.onEnter("FestAdventure").subscribe(()=>{S=WA.ui.openPopup("FestAdventurePopup","Visit FestAdventure",[{label:"Teleport",className:"primary",callback:()=>WA.nav.goToRoom("/@/festadventure")}])}),WA.room.area.onLeave("FestAdventure").subscribe(()=>{V(),WA.nav.closeCoWebSite()}),WA.room.area.onEnter("ComingSoon").subscribe(()=>{S=WA.ui.openPopup("ComingSoonPopup","Coming Soon!",[])}),WA.room.area.onLeave("ComingSoon").subscribe(()=>{V(),WA.nav.closeCoWebSite()}),WA.room.area.onEnter("Office").subscribe(()=>{WA.room.hideLayer("roofOffice0"),WA.room.hideLayer("roofOffice1"),WA.room.hideLayer("roofOffice2"),WA.room.showLayer("roofOfficeOverlay")}),WA.room.area.onLeave("Office").subscribe(()=>{WA.room.showLayer("roofOffice0"),WA.room.showLayer("roofOffice1"),WA.room.showLayer("roofOffice2"),WA.room.hideLayer("roofOfficeOverlay")}),WA.room.area.onEnter("NFTs").subscribe(()=>{WA.room.hideLayer("roofNFT0"),WA.room.hideLayer("roofNFT1"),WA.room.hideLayer("roofNFT2"),WA.room.showLayer("roofNFTOverlay")}),WA.room.area.onLeave("NFTs").subscribe(()=>{WA.room.showLayer("roofNFT0"),WA.room.showLayer("roofNFT1"),WA.room.showLayer("roofNFT2"),WA.room.hideLayer("roofNFTOverlay")}),He().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function V(){S!==void 0&&(S.close(),S=void 0)}