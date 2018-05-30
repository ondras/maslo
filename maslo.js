!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).markdownit=e()}}(function(){return function e(r,t,n){function s(i,a){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[i]={exports:{}};r[i][0].call(u.exports,function(e){var t=r[i][1][e];return s(t||e)},u,u.exports,e,r,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,r,t){"use strict";r.exports=e("entities/maps/entities.json")},{"entities/maps/entities.json":52}],2:[function(e,r,t){"use strict";r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},{}],3:[function(e,r,t){"use strict";var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",s="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",o=new RegExp("^(?:"+n+"|"+s+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),i=new RegExp("^(?:"+n+"|"+s+")");r.exports.HTML_TAG_RE=o,r.exports.HTML_OPEN_CLOSE_TAG_RE=i},{}],4:[function(e,r,t){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e,r){return l.call(e,r)}function o(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function i(e){if(e>65535){var r=55296+((e-=65536)>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}function a(e,r){var t=0;return s(d,r)?d[r]:35===r.charCodeAt(0)&&f.test(r)&&(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10),o(t))?i(t):e}function c(e){return g[e]}var l=Object.prototype.hasOwnProperty,u=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,p=/&([a-z#][a-z0-9]{1,31});/gi,h=new RegExp(u.source+"|"+p.source,"gi"),f=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,d=e("./entities"),m=/[&<>"]/,_=/[&<>"]/g,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},b=/[.?*+^$[\]\\(){}|-]/g,k=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t]})}}),e},t.isString=function(e){return"[object String]"===n(e)},t.has=s,t.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(u,"$1")},t.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(h,function(e,r,t){return r||a(e,t)})},t.isValidEntityCode=o,t.fromCodePoint=i,t.escapeHtml=function(e){return m.test(e)?e.replace(_,c):e},t.arrayReplaceAt=function(e,r,t){return[].concat(e.slice(0,r),t,e.slice(r+1))},t.isSpace=function(e){switch(e){case 9:case 32:return!0}return!1},t.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},t.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},t.isPunctChar=function(e){return k.test(e)},t.escapeRE=function(e){return e.replace(b,"\\$&")},t.normalizeReference=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},{"./entities":1,mdurl:58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(e,r,t){"use strict";t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title")},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace,s=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,i,a=r,c={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(10===(o=e.charCodeAt(r))||n(o))return c;if(62===o)return c.pos=r+1,c.str=s(e.slice(a+1,r)),c.ok=!0,c;92===o&&r+1<t?r+=2:r++}return c}for(i=0;r<t&&32!==(o=e.charCodeAt(r))&&!(o<32||127===o);)if(92===o&&r+1<t)r+=2;else{if(40===o&&i++,41===o){if(0===i)break;i--}r++}return a===r?c:0!==i?c:(c.str=s(e.slice(a,r)),c.lines=0,c.pos=r,c.ok=!0,c)}},{"../common/utils":4}],7:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(93===(o=e.src.charCodeAt(e.pos))&&0==--n){s=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a}},{}],8:[function(e,r,t){"use strict";var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:!1,pos:0,lines:0,str:""};if(r>=t)return c;if(34!==(o=e.charCodeAt(r))&&39!==o&&40!==o)return c;for(r++,40===o&&(o=41);r<t;){if((s=e.charCodeAt(r))===o)return c.pos=r+1,c.lines=i,c.str=n(e.slice(a+1,r)),c.ok=!0,c;10===s?i++:92===s&&r+1<t&&(r++,10===e.charCodeAt(r)&&i++),r++}return c}},{"../common/utils":4}],9:[function(e,r,t){"use strict";function n(e){var r=e.trim().toLowerCase();return!g.test(r)||!!b.test(r)}function s(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toASCII(r.hostname)}catch(e){}return d.encode(d.format(r))}function o(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toUnicode(r.hostname)}catch(e){}return d.decode(d.format(r))}function i(e,r){if(!(this instanceof i))return new i(e,r);r||a.isString(e)||(r=e||{},e="default"),this.inline=new h,this.block=new p,this.core=new u,this.renderer=new l,this.linkify=new f,this.validateLink=n,this.normalizeLink=s,this.normalizeLinkText=o,this.utils=a,this.helpers=a.assign({},c),this.options={},this.configure(e),r&&this.set(r)}var a=e("./common/utils"),c=e("./helpers"),l=e("./renderer"),u=e("./parser_core"),p=e("./parser_block"),h=e("./parser_inline"),f=e("linkify-it"),d=e("mdurl"),m=e("punycode"),_={default:e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},g=/^(vbscript|javascript|file|data):/,b=/^data:image\/(gif|png|jpeg|webp);/,k=["http:","https:","mailto:"];i.prototype.set=function(e){return a.assign(this.options,e),this},i.prototype.configure=function(e){var r,t=this;if(a.isString(e)&&(r=e,!(e=_[r])))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2)}),this},i.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},i.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},i.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},i.prototype.parse=function(e,r){if("string"!=typeof e)throw new Error("Input data should be a String");var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},i.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},i.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},i.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=i},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,mdurl:58,punycode:60}],10:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var s=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","blockquote","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];n.prototype.tokenize=function(e,r,t){for(var n,s=this.ruler.getRules(""),o=s.length,i=r,a=!1,c=e.md.options.maxNesting;i<t&&(e.line=i=e.skipEmptyLines(i),!(i>=t))&&!(e.sCount[i]<e.blkIndent);){if(e.level>=c){e.line=t;break}for(n=0;n<o&&!s[n](e,i,t,!1);n++);e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(i=e.line)<t&&e.isEmpty(i)&&(a=!0,i++,e.line=i)}},n.prototype.parse=function(e,r,t,n){var s;e&&(s=new this.State(e,r,t,n),this.tokenize(s,s.line,s.lineMax))},n.prototype.State=e("./rules_block/state_block"),r.exports=n},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1])}var s=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];n.prototype.process=function(e){var r,t,n;for(r=0,t=(n=this.ruler.getRules("")).length;r<t;r++)n[r](e)},n.prototype.State=e("./rules_core/state_core"),r.exports=n},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(e,r,t){"use strict";function n(){var e;for(this.ruler=new s,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new s,e=0;e<i.length;e++)this.ruler2.push(i[e][0],i[e][1])}var s=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],i=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];n.prototype.skipToken=function(e){var r,t,n=e.pos,s=this.ruler.getRules(""),o=s.length,i=e.md.options.maxNesting,a=e.cache;if(void 0===a[n]){if(e.level<i)for(t=0;t<o&&(e.level++,r=s[t](e,!0),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos}else e.pos=a[n]},n.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;t<s&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},n.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),i=(o=this.ruler2.getRules("")).length,s=0;s<i;s++)o[s](a)},n.prototype.State=e("./rules_inline/state_inline"),r.exports=n},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(e,r,t){"use strict";r.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},{}],14:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},{}],15:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},{}],16:[function(e,r,t){"use strict";function n(){this.rules=s({},a)}var s=e("./common/utils").assign,o=e("./common/utils").unescapeAll,i=e("./common/utils").escapeHtml,a={};a.code_inline=function(e,r,t,n,s){var o=e[r];return"<code"+s.renderAttrs(o)+">"+i(e[r].content)+"</code>"},a.code_block=function(e,r,t,n,s){var o=e[r];return"<pre"+s.renderAttrs(o)+"><code>"+i(e[r].content)+"</code></pre>\n"},a.fence=function(e,r,t,n,s){var a,c,l,u,p=e[r],h=p.info?o(p.info).trim():"",f="";return h&&(f=h.split(/\s+/g)[0]),0===(a=t.highlight?t.highlight(p.content,f)||i(p.content):i(p.content)).indexOf("<pre")?a+"\n":h?(c=p.attrIndex("class"),l=p.attrs?p.attrs.slice():[],c<0?l.push(["class",t.langPrefix+f]):l[c][1]+=" "+t.langPrefix+f,u={attrs:l},"<pre><code"+s.renderAttrs(u)+">"+a+"</code></pre>\n"):"<pre><code"+s.renderAttrs(p)+">"+a+"</code></pre>\n"},a.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},a.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,r){return i(e[r].content)},a.html_block=function(e,r){return e[r].content},a.html_inline=function(e,r){return e[r].content},n.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return"";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+i(e.attrs[r][0])+'="'+i(e.attrs[r][1])+'"';return n},n.prototype.renderToken=function(e,r,t){var n,s="",o=!1,i=e[r];return i.hidden?"":(i.block&&-1!==i.nesting&&r&&e[r-1].hidden&&(s+="\n"),s+=(-1===i.nesting?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=!0,1===i.nesting&&r+1<e.length&&("inline"===(n=e[r+1]).type||n.hidden?o=!1:-1===n.nesting&&n.tag===i.tag&&(o=!1))),s+=o?">\n":">")},n.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;i<a;i++)void 0!==o[n=e[i].type]?s+=o[n](e,i,r,t,this):s+=this.renderToken(e,i,r);return s},n.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=0,o=e.length;s<o;s++)"text"===e[s].type?n+=e[s].content:"image"===e[s].type&&(n+=this.renderInlineAsText(e[s].children,r,t));return n},n.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;n<s;n++)"inline"===(o=e[n].type)?i+=this.renderInline(e[n].children,r,t):void 0!==a[o]?i+=a[e[n].type](e,n,r,t,this):i+=this.renderToken(e,n,r,t);return i},r.exports=n},{"./common/utils":4}],17:[function(e,r,t){"use strict";function n(){this.__rules__=[],this.__cache__=null}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return-1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e)})}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn))})})},n.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null},n.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e)},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,r)},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e)},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n},{}],18:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,x,y,C,A,w=e.lineMax,D=e.bMarks[r]+e.tShift[r],q=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(62!==e.src.charCodeAt(D++))return!1;if(s)return!0;for(c=f=e.sCount[r]+D-(e.bMarks[r]+e.tShift[r]),32===e.src.charCodeAt(D)?(D++,c++,f++,o=!1,v=!0):9===e.src.charCodeAt(D)?(v=!0,(e.bsCount[r]+f)%4==3?(D++,c++,f++,o=!1):o=!0):v=!1,d=[e.bMarks[r]],e.bMarks[r]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?f+=4-(f+e.bsCount[r]+(o?1:0))%4:f++,D++;for(m=[e.bsCount[r]],e.bsCount[r]=e.sCount[r]+1+(v?1:0),u=D>=q,b=[e.sCount[r]],e.sCount[r]=f-c,k=[e.tShift[r]],e.tShift[r]=D-e.bMarks[r],y=e.md.block.ruler.getRules("blockquote"),g=e.parentType,e.parentType="blockquote",A=!1,h=r+1;h<t&&(e.sCount[h]<e.blkIndent&&(A=!0),D=e.bMarks[h]+e.tShift[h],q=e.eMarks[h],!(D>=q));h++)if(62!==e.src.charCodeAt(D++)||A){if(u)break;for(x=!1,a=0,l=y.length;a<l;a++)if(y[a](e,h,t,!0)){x=!0;break}if(x){e.lineMax=h,0!==e.blkIndent&&(d.push(e.bMarks[h]),m.push(e.bsCount[h]),k.push(e.tShift[h]),b.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}d.push(e.bMarks[h]),m.push(e.bsCount[h]),k.push(e.tShift[h]),b.push(e.sCount[h]),e.sCount[h]=-1}else{for(c=f=e.sCount[h]+D-(e.bMarks[h]+e.tShift[h]),32===e.src.charCodeAt(D)?(D++,c++,f++,o=!1,v=!0):9===e.src.charCodeAt(D)?(v=!0,(e.bsCount[h]+f)%4==3?(D++,c++,f++,o=!1):o=!0):v=!1,d.push(e.bMarks[h]),e.bMarks[h]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?f+=4-(f+e.bsCount[h]+(o?1:0))%4:f++,D++;u=D>=q,m.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(v?1:0),b.push(e.sCount[h]),e.sCount[h]=f-c,k.push(e.tShift[h]),e.tShift[h]=D-e.bMarks[h]}for(_=e.blkIndent,e.blkIndent=0,(C=e.push("blockquote_open","blockquote",1)).markup=">",C.map=p=[r,0],e.md.block.tokenize(e,r,h),(C=e.push("blockquote_close","blockquote",-1)).markup=">",e.lineMax=w,e.parentType=g,p[1]=e.line,a=0;a<k.length;a++)e.bMarks[a+r]=d[a],e.tShift[a+r]=k[a],e.sCount[a+r]=b[a],e.bsCount[a+r]=m[a];return e.blkIndent=_,!0}},{"../common/utils":4}],19:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o;if(e.sCount[r]-e.blkIndent<4)return!1;for(s=n=r+1;n<t;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;s=++n}return e.line=s,o=e.push("code_block","code",0),o.content=e.getLines(r,s,4+e.blkIndent,!0),o.map=[r,e.line],!0}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t,n){var s,o,i,a,c,l,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(h+3>f)return!1;if(126!==(s=e.src.charCodeAt(h))&&96!==s)return!1;if(c=h,h=e.skipChars(h,s),(o=h-c)<3)return!1;if(u=e.src.slice(c,h),(i=e.src.slice(h,f)).indexOf(String.fromCharCode(s))>=0)return!1;if(n)return!0;for(a=r;!(++a>=t)&&(h=c=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],!(h<f&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s))-c<o||(h=e.skipSpaces(h))<f)){p=!0;break}return o=e.sCount[r],e.line=a+(p?1:0),l=e.push("fence","code",0),l.info=i,l.content=e.getLines(r+1,a,o,!0),l.markup=u,l.map=[r,e.line],!0}},{}],21:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(35!==(o=e.src.charCodeAt(l))||l>=u)return!1;for(i=1,o=e.src.charCodeAt(++l);35===o&&l<u&&i<=6;)i++,o=e.src.charCodeAt(++l);return!(i>6||l<u&&!n(o))&&(!!s||(u=e.skipSpacesBack(u,l),(a=e.skipCharsBack(u,35,l))>l&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,c=e.push("heading_open","h"+String(i),1),c.markup="########".slice(0,i),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(i),-1),c.markup="########".slice(0,i),!0))}},{"../common/utils":4}],22:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(42!==(o=e.src.charCodeAt(l++))&&45!==o&&95!==o)return!1;for(i=1;l<u;){if((a=e.src.charCodeAt(l++))!==o&&!n(a))return!1;a===o&&i++}return!(i<3)&&(!!s||(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(i+1).join(String.fromCharCode(o)),!0))}},{"../common/utils":4}],23:[function(e,r,t){"use strict";var n=e("../common/html_blocks"),s=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(s.source+"\\s*$"),/^$/,!1]];r.exports=function(e,r,t,n){var s,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(l))return!1;for(c=e.src.slice(l,u),s=0;s<o.length&&!o[s][0].test(c);s++);if(s===o.length)return!1;if(n)return o[s][2];if(i=r+1,!o[s][1].test(c))for(;i<t&&!(e.sCount[i]<e.blkIndent);i++)if(l=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],c=e.src.slice(l,u),o[s][1].test(c)){0!==c.length&&i++;break}return e.line=i,a=e.push("html_block","",0),a.map=[r,i],a.content=e.getLines(r,i,e.blkIndent,!0),!0}},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a,c,l,u,p,h,f=r+1,d=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return!1;for(h=e.parentType,e.parentType="paragraph";f<t&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(c=e.bMarks[f]+e.tShift[f],l=e.eMarks[f],c<l&&(45===(p=e.src.charCodeAt(c))||61===p)&&(c=e.skipChars(c,p),(c=e.skipSpaces(c))>=l))){u=61===p?1:2;break}if(!(e.sCount[f]<0)){for(s=!1,o=0,i=d.length;o<i;o++)if(d[o](e,f,t,!0)){s=!0;break}if(s)break}}return!!u&&(n=e.getLines(r,f,e.blkIndent,!1).trim(),e.line=f+1,a=e.push("heading_open","h"+String(u),1),a.markup=String.fromCharCode(p),a.map=[r,e.line],a=e.push("inline","",0),a.content=n,a.map=[r,e.line-1],a.children=[],a=e.push("heading_close","h"+String(u),-1),a.markup=String.fromCharCode(p),e.parentType=h,!0)}},{}],25:[function(e,r,t){"use strict";function n(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],42!==(t=e.src.charCodeAt(n++))&&45!==t&&43!==t?-1:n<s&&(o=e.src.charCodeAt(n),!i(o))?-1:n}function s(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return-1;if((t=e.src.charCodeAt(s++))<48||t>57)return-1;for(;;){if(s>=o)return-1;if(!((t=e.src.charCodeAt(s++))>=48&&t<=57)){if(41===t||46===t)break;return-1}if(s-n>=10)return-1}return s<o&&(t=e.src.charCodeAt(s),!i(t))?-1:s}function o(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var i=e("../common/utils").isSpace;r.exports=function(e,r,t,i){var a,c,l,u,p,h,f,d,m,_,g,b,k,v,x,y,C,A,w,D,q,E,S,F,L,z,T,I,R=!1,M=!0;if(e.sCount[r]-e.blkIndent>=4)return!1;if(i&&"paragraph"===e.parentType&&e.tShift[r]>=e.blkIndent&&(R=!0),(S=s(e,r))>=0){if(f=!0,L=e.bMarks[r]+e.tShift[r],k=Number(e.src.substr(L,S-L-1)),R&&1!==k)return!1}else{if(!((S=n(e,r))>=0))return!1;f=!1}if(R&&e.skipSpaces(S)>=e.eMarks[r])return!1;if(b=e.src.charCodeAt(S-1),i)return!0;for(g=e.tokens.length,f?(I=e.push("ordered_list_open","ol",1),1!==k&&(I.attrs=[["start",k]])):I=e.push("bullet_list_open","ul",1),I.map=_=[r,0],I.markup=String.fromCharCode(b),x=r,F=!1,T=e.md.block.ruler.getRules("list"),w=e.parentType,e.parentType="list";x<t;){for(E=S,v=e.eMarks[x],h=y=e.sCount[x]+S-(e.bMarks[r]+e.tShift[r]);E<v;){if(9===(a=e.src.charCodeAt(E)))y+=4-(y+e.bsCount[x])%4;else{if(32!==a)break;y++}E++}if(c=E,(p=c>=v?1:y-h)>4&&(p=1),u=h+p,I=e.push("list_item_open","li",1),I.markup=String.fromCharCode(b),I.map=d=[r,0],C=e.blkIndent,q=e.tight,D=e.tShift[r],A=e.sCount[r],e.blkIndent=u,e.tight=!0,e.tShift[r]=c-e.bMarks[r],e.sCount[r]=y,c>=v&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,!0),e.tight&&!F||(M=!1),F=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=C,e.tShift[r]=D,e.sCount[r]=A,e.tight=q,I=e.push("list_item_close","li",-1),I.markup=String.fromCharCode(b),x=r=e.line,d[1]=x,c=e.bMarks[r],x>=t)break;if(e.sCount[x]<e.blkIndent)break;for(z=!1,l=0,m=T.length;l<m;l++)if(T[l](e,x,t,!0)){z=!0;break}if(z)break;if(f){if((S=s(e,x))<0)break}else if((S=n(e,x))<0)break;if(b!==e.src.charCodeAt(S-1))break}return I=f?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),I.markup=String.fromCharCode(b),_[1]=x,e.line=x,e.parentType=w,M&&o(e,g),!0}},{"../common/utils":4}],26:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=r+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax;for(a=e.parentType,e.parentType="paragraph";c<u&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(n=!1,s=0,o=l.length;s<o;s++)if(l[s](e,c,u,!0)){n=!0;break}if(n)break}return t=e.getLines(r,c,e.blkIndent,!1).trim(),e.line=c,i=e.push("paragraph_open","p",1),i.map=[r,e.line],i=e.push("inline","",0),i.content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,!0}},{}],27:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,x,y=0,C=e.bMarks[r]+e.tShift[r],A=e.eMarks[r],w=r+1;if(e.sCount[r]-e.blkIndent>=4)return!1;if(91!==e.src.charCodeAt(C))return!1;for(;++C<A;)if(93===e.src.charCodeAt(C)&&92!==e.src.charCodeAt(C-1)){if(C+1===A)return!1;if(58!==e.src.charCodeAt(C+1))return!1;break}for(l=e.lineMax,v=e.md.block.ruler.getRules("reference"),m=e.parentType,e.parentType="reference";w<l&&!e.isEmpty(w);w++)if(!(e.sCount[w]-e.blkIndent>3||e.sCount[w]<0)){for(k=!1,p=0,h=v.length;p<h;p++)if(v[p](e,w,l,!0)){k=!0;break}if(k)break}for(A=(b=e.getLines(r,w,e.blkIndent,!1).trim()).length,C=1;C<A;C++){if(91===(i=b.charCodeAt(C)))return!1;if(93===i){d=C;break}10===i?y++:92===i&&++C<A&&10===b.charCodeAt(C)&&y++}if(d<0||58!==b.charCodeAt(d+1))return!1;for(C=d+2;C<A;C++)if(10===(i=b.charCodeAt(C)))y++;else if(!s(i))break;if(!(_=e.md.helpers.parseLinkDestination(b,C,A)).ok)return!1;if(u=e.md.normalizeLink(_.str),!e.md.validateLink(u))return!1;for(a=C=_.pos,c=y+=_.lines,g=C;C<A;C++)if(10===(i=b.charCodeAt(C)))y++;else if(!s(i))break;for(_=e.md.helpers.parseLinkTitle(b,C,A),C<A&&g!==C&&_.ok?(x=_.str,C=_.pos,y+=_.lines):(x="",C=a,y=c);C<A&&(i=b.charCodeAt(C),s(i));)C++;if(C<A&&10!==b.charCodeAt(C)&&x)for(x="",C=a,y=c;C<A&&(i=b.charCodeAt(C),s(i));)C++;return!(C<A&&10!==b.charCodeAt(C))&&(!!(f=n(b.slice(1,d)))&&(!!o||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[f]&&(e.env.references[f]={title:x,href:u}),e.parentType=m,e.line=r+y+1,!0)))}},{"../common/utils":4}],28:[function(e,r,t){"use strict";function n(e,r,t,n){var s,i,a,c,l,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.parentType="root",this.level=0,this.result="",h=!1,a=c=u=p=0,l=(i=this.src).length;c<l;c++){if(s=i.charCodeAt(c),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=!0}10!==s&&c!==l-1||(10!==s&&c++,this.bMarks.push(a),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(p),this.bsCount.push(0),h=!1,u=0,p=0,a=c+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}var s=e("../token"),o=e("../common/utils").isSpace;n.prototype.push=function(e,r,t){var n=new s(e,r,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},n.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},n.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},n.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),o(r));e++);return e},n.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},n.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},n.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},n.prototype.getLines=function(e,r,t,n){var s,i,a,c,l,u,p,h=e;if(e>=r)return"";for(u=new Array(r-e),s=0;h<r;h++,s++){for(i=0,p=c=this.bMarks[h],l=h+1<r||n?this.eMarks[h]+1:this.eMarks[h];c<l&&i<t;){if(a=this.src.charCodeAt(c),o(a))9===a?i+=4-(i+this.bsCount[h])%4:i++;else{if(!(c-p<this.tShift[h]))break;i++}c++}u[s]=i>t?new Array(i-t+1).join(" ")+this.src.slice(c,l):this.src.slice(c,l)}return u.join("")},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],29:[function(e,r,t){"use strict";function n(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,s=e.length,o=0,i=0,a=!1,c=0;for(r=e.charCodeAt(n);n<s;)96===r?a?(a=!1,c=n):o%2==0&&(a=!0,c=n):124!==r||o%2!=0||a||(t.push(e.substring(i,n)),i=n+1),92===r?o++:o=0,++n===s&&a&&(a=!1,n=c+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}var o=e("../common/utils").isSpace;r.exports=function(e,r,t,i){var a,c,l,u,p,h,f,d,m,_,g,b;if(r+2>t)return!1;if(p=r+1,e.sCount[p]<e.blkIndent)return!1;if(e.sCount[p]-e.blkIndent>=4)return!1;if((l=e.bMarks[p]+e.tShift[p])>=e.eMarks[p])return!1;if(124!==(a=e.src.charCodeAt(l++))&&45!==a&&58!==a)return!1;for(;l<e.eMarks[p];){if(124!==(a=e.src.charCodeAt(l))&&45!==a&&58!==a&&!o(a))return!1;l++}for(h=(c=n(e,r+1)).split("|"),m=[],u=0;u<h.length;u++){if(!(_=h[u].trim())){if(0===u||u===h.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;58===_.charCodeAt(_.length-1)?m.push(58===_.charCodeAt(0)?"center":"right"):58===_.charCodeAt(0)?m.push("left"):m.push("")}if(-1===(c=n(e,r).trim()).indexOf("|"))return!1;if(e.sCount[r]-e.blkIndent>=4)return!1;if(h=s(c.replace(/^\||\|$/g,"")),(f=h.length)>m.length)return!1;if(i)return!0;for((d=e.push("table_open","table",1)).map=g=[r,0],(d=e.push("thead_open","thead",1)).map=[r,r+1],(d=e.push("tr_open","tr",1)).map=[r,r+1],u=0;u<h.length;u++)(d=e.push("th_open","th",1)).map=[r,r+1],m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),(d=e.push("inline","",0)).content=h[u].trim(),d.map=[r,r+1],d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),(d=e.push("tbody_open","tbody",1)).map=b=[r+2,0],p=r+2;p<t&&!(e.sCount[p]<e.blkIndent)&&-1!==(c=n(e,p).trim()).indexOf("|")&&!(e.sCount[p]-e.blkIndent>=4);p++){for(h=s(c.replace(/^\||\|$/g,"")),d=e.push("tr_open","tr",1),u=0;u<f;u++)d=e.push("td_open","td",1),m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),(d=e.push("inline","",0)).content=h[u]?h[u].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1)}return d=e.push("tbody_close","tbody",-1),d=e.push("table_close","table",-1),g[1]=b[1]=p,e.line=p,!0}},{"../common/utils":4}],30:[function(e,r,t){"use strict";r.exports=function(e){var r;e.inlineMode?((r=new e.Token("inline","",0)).content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},{}],31:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;t<n;t++)"inline"===(r=s[t]).type&&e.md.inline.parse(r.content,e.md,e.env,r.children)}},{}],32:[function(e,r,t){"use strict";function n(e){return/^<a[>\s]/i.test(e)}function s(e){return/^<\/a\s*>/i.test(e)}var o=e("../common/utils").arrayReplaceAt;r.exports=function(e){var r,t,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,x=e.tokens;if(e.md.options.linkify)for(t=0,i=x.length;t<i;t++)if("inline"===x[t].type&&e.md.linkify.pretest(x[t].content))for(_=0,r=(a=x[t].children).length-1;r>=0;r--)if("link_close"!==(l=a[r]).type){if("html_inline"===l.type&&(n(l.content)&&_>0&&_--,s(l.content)&&_++),!(_>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(h=l.content,v=e.md.linkify.match(h),u=[],m=l.level,d=0,p=0;p<v.length;p++)g=v[p].url,b=e.md.normalizeLink(g),e.md.validateLink(b)&&(k=v[p].text,k=v[p].schema?"mailto:"!==v[p].schema||/^mailto:/i.test(k)?e.md.normalizeLinkText(k):e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),(f=v[p].index)>d&&((c=new e.Token("text","",0)).content=h.slice(d,f),c.level=m,u.push(c)),(c=new e.Token("link_open","a",1)).attrs=[["href",b]],c.level=m++,c.markup="linkify",c.info="auto",u.push(c),(c=new e.Token("text","",0)).content=k,c.level=m,u.push(c),(c=new e.Token("link_close","a",-1)).level=--m,c.markup="linkify",c.info="auto",u.push(c),d=v[p].lastIndex);d<h.length&&((c=new e.Token("text","",0)).content=h.slice(d),c.level=m,u.push(c)),x[t].children=a=o(a,r,u)}}else for(r--;a[r].level!==l.level&&"link_open"!==a[r].type;)r--}},{"../common/utils":4}],33:[function(e,r,t){"use strict";var n=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,s=/\u0000/g;r.exports=function(e){var r;r=(r=e.src.replace(n,"\n")).replace(s,"\ufffd"),e.src=r}},{}],34:[function(e,r,t){"use strict";function n(e,r){return l[r.toLowerCase()]}function s(e){var r,t,s=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||s||(t.content=t.content.replace(c,n)),"link_open"===t.type&&"auto"===t.info&&s--,"link_close"===t.type&&"auto"===t.info&&s++}function o(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||n||i.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1\u2014$2").replace(/(^|\s)--(\s|$)/gm,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1\u2013$2")),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,a=/\((c|tm|r|p)\)/i,c=/\((c|tm|r|p)\)/gi,l={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(a.test(e.tokens[r].content)&&s(e.tokens[r].children),i.test(e.tokens[r].content)&&o(e.tokens[r].children))}},{}],35:[function(e,r,t){"use strict";function n(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function s(e,r){var t,s,c,p,h,f,d,m,_,g,b,k,v,x,y,C,A,w,D,q,E;for(D=[],t=0;t<e.length;t++){for(s=e[t],d=e[t].level,A=D.length-1;A>=0&&!(D[A].level<=d);A--);if(D.length=A+1,"text"===s.type){h=0,f=(c=s.content).length;e:for(;h<f&&(l.lastIndex=h,p=l.exec(c));){if(y=C=!0,h=p.index+1,w="'"===p[0],_=32,p.index-1>=0)_=c.charCodeAt(p.index-1);else for(A=t-1;A>=0;A--)if("text"===e[A].type){_=e[A].content.charCodeAt(e[A].content.length-1);break}if(g=32,h<f)g=c.charCodeAt(h);else for(A=t+1;A<e.length;A++)if("text"===e[A].type){g=e[A].content.charCodeAt(0);break}if(b=a(_)||i(String.fromCharCode(_)),k=a(g)||i(String.fromCharCode(g)),v=o(_),(x=o(g))?y=!1:k&&(v||b||(y=!1)),v?C=!1:b&&(x||k||(C=!1)),34===g&&'"'===p[0]&&_>=48&&_<=57&&(C=y=!1),y&&C&&(y=!1,C=k),y||C){if(C)for(A=D.length-1;A>=0&&(m=D[A],!(D[A].level<d));A--)if(m.single===w&&D[A].level===d){m=D[A],w?(q=r.md.options.quotes[2],E=r.md.options.quotes[3]):(q=r.md.options.quotes[0],E=r.md.options.quotes[1]),s.content=n(s.content,p.index,E),e[m.token].content=n(e[m.token].content,m.pos,q),h+=E.length-1,m.token===t&&(h+=q.length-1),f=(c=s.content).length,D.length=A;continue e}y?D.push({token:t,pos:p.index,single:w,level:d}):C&&w&&(s.content=n(s.content,p.index,u))}else w&&(s.content=n(s.content,p.index,u))}}}}var o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct,c=/['"]/,l=/['"]/g,u="\u2019";r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&c.test(e.tokens[r].content)&&s(e.tokens[r].children,e)}},{"../common/utils":4}],36:[function(e,r,t){"use strict";function n(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r}var s=e("../token");n.prototype.Token=s,r.exports=n},{"../token":51}],37:[function(e,r,t){"use strict";var n=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,s=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,o,i,a,c,l,u=e.pos;return 60===e.src.charCodeAt(u)&&!((t=e.src.slice(u)).indexOf(">")<0||(s.test(t)?(o=t.match(s),a=o[0].slice(1,-1),c=e.md.normalizeLink(a),!e.md.validateLink(c)||(r||((l=e.push("link_open","a",1)).attrs=[["href",c]],l.markup="autolink",l.info="auto",(l=e.push("text","",0)).content=e.md.normalizeLinkText(a),(l=e.push("link_close","a",-1)).markup="autolink",l.info="auto"),e.pos+=o[0].length,0)):!n.test(t)||(i=t.match(n),a=i[0].slice(1,-1),c=e.md.normalizeLink("mailto:"+a),!e.md.validateLink(c)||(r||((l=e.push("link_open","a",1)).attrs=[["href",c]],l.markup="autolink",l.info="auto",(l=e.push("text","",0)).content=e.md.normalizeLinkText(a),(l=e.push("link_close","a",-1)).markup="autolink",l.info="auto"),e.pos+=i[0].length,0))))}},{}],38:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=e.pos;if(96!==e.src.charCodeAt(c))return!1;for(t=c,c++,n=e.posMax;c<n&&96===e.src.charCodeAt(c);)c++;for(s=e.src.slice(t,c),o=i=c;-1!==(o=e.src.indexOf("`",i));){for(i=o+1;i<n&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return r||((a=e.push("code_inline","code",0)).markup=s,a.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=i,!0}return r||(e.pending+=s),e.pos+=s.length,!0}},{}],39:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s,o=e.delimiters,i=e.delimiters.length;for(r=0;r<i;r++)if((n=o[r]).close)for(t=r-n.jump-1;t>=0;){if((s=o[t]).open&&s.marker===n.marker&&s.end<0&&s.level===n.level&&!((s.close||n.open)&&void 0!==s.length&&void 0!==n.length&&(s.length+n.length)%3==0)){n.jump=r-t,n.open=!1,s.end=r,s.jump=0;break}t-=s.jump+1}}},{}],40:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s=e.pos,o=e.src.charCodeAt(s);if(r)return!1;if(95!==o&&42!==o)return!1;for(n=e.scanDelims(e.pos,42===o),t=0;t<n.length;t++)e.push("text","",0).content=String.fromCharCode(o),e.delimiters.push({marker:o,length:n.length,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i,a=e.delimiters;for(r=e.delimiters.length-1;r>=0;r--)95!==(t=a[r]).marker&&42!==t.marker||-1!==t.end&&(n=a[t.end],i=r>0&&a[r-1].end===t.end+1&&a[r-1].token===t.token-1&&a[t.end+1].token===n.token+1&&a[r-1].marker===t.marker,o=String.fromCharCode(t.marker),(s=e.tokens[t.token]).type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?o+o:o,s.content="",(s=e.tokens[n.token]).type=i?"strong_close":"em_close",s.tag=i?"strong":"em",s.nesting=-1,s.markup=i?o+o:o,s.content="",i&&(e.tokens[a[r-1].token].content="",e.tokens[a[t.end+1].token].content="",r--))}},{}],41:[function(e,r,t){"use strict";var n=e("../common/entities"),s=e("../common/utils").has,o=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint,a=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,c=/^&([a-z][a-z0-9]{1,31});/i;r.exports=function(e,r){var t,l,u=e.pos,p=e.posMax;if(38!==e.src.charCodeAt(u))return!1;if(u+1<p)if(35===e.src.charCodeAt(u+1)){if(l=e.src.slice(u).match(a))return r||(t="x"===l[1][0].toLowerCase()?parseInt(l[1].slice(1),16):parseInt(l[1],10),e.pending+=i(o(t)?t:65533)),e.pos+=l[0].length,!0}else if((l=e.src.slice(u).match(c))&&s(n,l[1]))return r||(e.pending+=n[l[1]]),e.pos+=l[0].length,!0;return r||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":4}],42:[function(e,r,t){"use strict";for(var n=e("../common/utils").isSpace,s=[],o=0;o<256;o++)s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){s[e.charCodeAt(0)]=1}),r.exports=function(e,r){var t,o=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(o))return!1;if(++o<i){if((t=e.src.charCodeAt(o))<256&&0!==s[t])return r||(e.pending+=e.src[o]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),o++;o<i&&(t=e.src.charCodeAt(o),n(t));)o++;return e.pos=o,!0}}return r||(e.pending+="\\"),e.pos++,!0}},{"../common/utils":4}],43:[function(e,r,t){"use strict";function n(e){var r=32|e;return r>=97&&r<=122}var s=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,i,a=e.pos;return!!e.md.options.html&&(i=e.posMax,!(60!==e.src.charCodeAt(a)||a+2>=i)&&(!(33!==(t=e.src.charCodeAt(a+1))&&63!==t&&47!==t&&!n(t))&&(!!(o=e.src.slice(a).match(s))&&(r||(e.push("html_inline","",0).content=e.src.slice(a,a+o[0].length)),e.pos+=o[0].length,!0))))}},{"../common/html_re":3}],44:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f,d,m,_,g="",b=e.pos,k=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(l=e.pos+2,(c=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return!1;if((u=c+1)<k&&40===e.src.charCodeAt(u)){for(u++;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(u>=k)return!1;for(_=u,(h=e.md.helpers.parseLinkDestination(e.src,u,e.posMax)).ok&&(g=e.md.normalizeLink(h.str),e.md.validateLink(g)?u=h.pos:g=""),_=u;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(h=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<k&&_!==u&&h.ok)for(f=h.str,u=h.pos;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);else f="";if(u>=k||41!==e.src.charCodeAt(u))return e.pos=b,!1;u++}else{if(void 0===e.env.references)return!1;if(u<k&&91===e.src.charCodeAt(u)?(_=u+1,(u=e.md.helpers.parseLinkLabel(e,u))>=0?a=e.src.slice(_,u++):u=c+1):u=c+1,a||(a=e.src.slice(l,c)),!(p=e.env.references[n(a)]))return e.pos=b,!1;g=p.href,f=p.title}return r||(i=e.src.slice(l,c),e.md.inline.parse(i,e.md,e.env,m=[]),(d=e.push("image","img",0)).attrs=t=[["src",g],["alt",""]],d.children=m,d.content=i,f&&t.push(["title",f])),e.pos=u,e.posMax=k,!0}},{"../common/utils":4}],45:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f="",d=e.pos,m=e.posMax,_=e.pos,g=!0;if(91!==e.src.charCodeAt(e.pos))return!1;if(c=e.pos+1,(a=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return!1;if((l=a+1)<m&&40===e.src.charCodeAt(l)){for(g=!1,l++;l<m&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(l>=m)return!1;for(_=l,(u=e.md.helpers.parseLinkDestination(e.src,l,e.posMax)).ok&&(f=e.md.normalizeLink(u.str),e.md.validateLink(f)?l=u.pos:f=""),_=l;l<m&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(u=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<m&&_!==l&&u.ok)for(h=u.str,l=u.pos;l<m&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);else h="";(l>=m||41!==e.src.charCodeAt(l))&&(g=!0),l++}if(g){if(void 0===e.env.references)return!1;if(l<m&&91===e.src.charCodeAt(l)?(_=l+1,(l=e.md.helpers.parseLinkLabel(e,l))>=0?i=e.src.slice(_,l++):l=a+1):l=a+1,i||(i=e.src.slice(c,a)),!(p=e.env.references[n(i)]))return e.pos=d,!1;f=p.href,h=p.title}return r||(e.pos=c,e.posMax=a,e.push("link_open","a",1).attrs=t=[["href",f]],h&&t.push(["title",h]),e.md.inline.tokenize(e),e.push("link_close","a",-1)),e.pos=l,e.posMax=m,!0}},{"../common/utils":4}],46:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r){var t,s,o=e.pos;if(10!==e.src.charCodeAt(o))return!1;for(t=e.pending.length-1,s=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),o++;o<s&&n(e.src.charCodeAt(o));)o++;return e.pos=o,!0}},{"../common/utils":4}],47:[function(e,r,t){"use strict";function n(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}var s=e("../token"),o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct;n.prototype.pushPending=function(){var e=new s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},n.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new s(e,r,t);return t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(n),n},n.prototype.scanDelims=function(e,r){var t,n,s,c,l,u,p,h,f,d=e,m=!0,_=!0,g=this.posMax,b=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;d<g&&this.src.charCodeAt(d)===b;)d++;return s=d-e,n=d<g?this.src.charCodeAt(d):32,p=a(t)||i(String.fromCharCode(t)),f=a(n)||i(String.fromCharCode(n)),u=o(t),(h=o(n))?m=!1:f&&(u||p||(m=!1)),u?_=!1:p&&(h||f||(_=!1)),r?(c=m,l=_):(c=m&&(!_||p),l=_&&(!m||f)),{can_open:c,can_close:l,length:s}},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],48:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o,i=e.pos,a=e.src.charCodeAt(i);if(r)return!1;if(126!==a)return!1;if(n=e.scanDelims(e.pos,!0),s=n.length,o=String.fromCharCode(a),s<2)return!1;for(s%2&&(e.push("text","",0).content=o,s--),t=0;t<s;t+=2)e.push("text","",0).content=o+o,e.delimiters.push({marker:a,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i=[],a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)126===(n=a[r]).marker&&-1!==n.end&&(s=a[n.end],(o=e.tokens[n.token]).type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",(o=e.tokens[s.token]).type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&i.push(s.token-1));for(;i.length;){for(t=(r=i.pop())+1;t<e.tokens.length&&"s_close"===e.tokens[t].type;)t++;r!==--t&&(o=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=o)}}},{}],49:[function(e,r,t){"use strict";function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}},{}],50:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;r<o;r++)n+=s[r].nesting,s[r].level=n,"text"===s[r].type&&r+1<o&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t)}},{}],51:[function(e,r,t){"use strict";function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return-1;for(t=0,n=(r=this.attrs).length;t<n;t++)if(r[t][0]===e)return t;return-1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},n.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n},n.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},n.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r},r.exports=n},{}],52:[function(e,r,t){r.exports={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105",in:"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba",int:"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"\t",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"}},{}],53:[function(e,r,t){"use strict";function n(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t]})}),e}function s(e){return Object.prototype.toString.call(e)}function o(e){return"[object String]"===s(e)}function i(e){return"[object Object]"===s(e)}function a(e){return"[object RegExp]"===s(e)}function c(e){return"[object Function]"===s(e)}function l(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function u(e){return Object.keys(e||{}).reduce(function(e,r){return e||b.hasOwnProperty(r)},!1)}function p(e){e.__index__=-1,e.__text_cache__=""}function h(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}function f(){return function(e,r){r.normalize(e)}}function d(r){function t(e){return e.replace("%TLDS%",s.src_tlds)}function n(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}var s=r.re=e("./lib/re")(r.__opts__),u=r.__tlds__.slice();r.onCompile(),r.__tlds_replaced__||u.push(v),u.push(s.src_xn),s.src_tlds=u.join("|"),s.email_fuzzy=RegExp(t(s.tpl_email_fuzzy),"i"),s.link_fuzzy=RegExp(t(s.tpl_link_fuzzy),"i"),s.link_no_ip_fuzzy=RegExp(t(s.tpl_link_no_ip_fuzzy),"i"),s.host_fuzzy_test=RegExp(t(s.tpl_host_fuzzy_test),"i");var d=[];r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var s={validate:null,link:null};if(r.__compiled__[e]=s,i(t))return a(t.validate)?s.validate=h(t.validate):c(t.validate)?s.validate=t.validate:n(e,t),void(c(t.normalize)?s.normalize=t.normalize:t.normalize?n(e,t):s.normalize=f());o(t)?d.push(e):n(e,t)}}),d.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize)}),r.__compiled__[""]={validate:null,normalize:f()};var m=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(l).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),p(r)}function m(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s}function _(e,r){var t=new m(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function g(e,r){if(!(this instanceof g))return new g(e,r);r||u(e)&&(r=e,e={}),this.__opts__=n({},b,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},k,e),this.__compiled__={},this.__tlds__=x,this.__tlds_replaced__=!1,this.re={},d(this)}var b={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},k={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},v="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",x="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");g.prototype.add=function(e,r){return this.__schemas__[e]=r,d(this),this},g.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},g.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,t,n,s,o,i,a,c;if(this.re.schema_test.test(e))for((a=this.re.schema_search).lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i)),this.__index__>=0},g.prototype.pretest=function(e){return this.re.pretest.test(e)},g.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},g.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(_(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(_(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},g.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),d(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,d(this),this)},g.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},g.prototype.onCompile=function(){},r.exports=g},{"./lib/re":54}],54:[function(e,r,t){"use strict";r.exports=function(r){var t={};t.src_Any=e("uc.micro/properties/Any/regex").source,t.src_Cc=e("uc.micro/categories/Cc/regex").source,t.src_Z=e("uc.micro/categories/Z/regex").source,t.src_P=e("uc.micro/categories/P/regex").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");return t.src_pseudo_letter="(?:(?![><\uff5c]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><\uff5c]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[><\uff5c]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(r&&r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-(?!-)|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|[><\uff5c]|\\(|"+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},{"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)n[t=e.charCodeAt(r)]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}function s(e,r){var t;return"string"!=typeof r&&(r=s.defaultChars),t=n(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;r<n;r+=3)(s=parseInt(e.slice(r+1,r+3),16))<128?l+=t[s]:192==(224&s)&&r+3<n&&128==(192&(o=parseInt(e.slice(r+4,r+6),16)))?(l+=(c=s<<6&1984|63&o)<128?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224==(240&s)&&r+6<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128==(192&o)&&128==(192&i))?(l+=(c=s<<12&61440|o<<6&4032|63&i)<2048||c>=55296&&c<=57343?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240==(248&s)&&r+9<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128==(192&o)&&128==(192&i)&&128==(192&a))?((c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a)<65536||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l})}var o={};s.defaultChars=";/?:@&=+$,#",s.componentChars="",r.exports=s},{}],56:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?n.push(t):n.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)n[e.charCodeAt(r)]=e[r];return n}function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),void 0===t&&(t=!0),l=n(r),o=0,i=e.length;o<i;o++)if(a=e.charCodeAt(o),t&&37===a&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(a<128)u+=l[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i&&(c=e.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o]);return u}var o={};s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()",r.exports=s},{}],57:[function(e,r,t){"use strict";r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",e.hostname&&-1!==e.hostname.indexOf(":")?r+="["+e.hostname+"]":r+=e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""}},{}],58:[function(e,r,t){"use strict";r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse")},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(e,r,t){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var s=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,a=["<",">",'"',"`"," ","\r","\n","\t"],c=["{","}","|","\\","^","`"].concat(a),l=["'"].concat(c),u=["%","/","?",";","#"].concat(l),p=["/","?","#"],h=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};n.prototype.parse=function(e,r){var t,n,o,a,c,l=e;if(l=l.trim(),!r&&1===e.split("#").length){var _=i.exec(l);if(_)return this.pathname=_[1],_[2]&&(this.search=_[2]),this}var g=s.exec(l);if(g&&(o=(g=g[0]).toLowerCase(),this.protocol=g,l=l.substr(g.length)),(r||g||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(c="//"===l.substr(0,2))||g&&d[g]||(l=l.substr(2),this.slashes=!0)),!d[g]&&(c||g&&!m[g])){var b=-1;for(t=0;t<p.length;t++)-1!==(a=l.indexOf(p[t]))&&(-1===b||a<b)&&(b=a);var k,v;for(-1!==(v=-1===b?l.lastIndexOf("@"):l.lastIndexOf("@",b))&&(k=l.slice(0,v),l=l.slice(v+1),this.auth=k),b=-1,t=0;t<u.length;t++)-1!==(a=l.indexOf(u[t]))&&(-1===b||a<b)&&(b=a);-1===b&&(b=l.length),":"===l[b-1]&&b--;var x=l.slice(0,b);l=l.slice(b),this.parseHost(x),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y){var C=this.hostname.split(/\./);for(t=0,n=C.length;t<n;t++){var A=C[t];if(A&&!A.match(h)){for(var w="",D=0,q=A.length;D<q;D++)A.charCodeAt(D)>127?w+="x":w+=A[D];if(!w.match(h)){var E=C.slice(0,t),S=C.slice(t+1),F=A.match(f);F&&(E.push(F[1]),S.unshift(F[2])),S.length&&(l=S.join(".")+l),this.hostname=E.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=l.indexOf("#");-1!==L&&(this.hash=l.substr(L),l=l.slice(0,L));var z=l.indexOf("?");return-1!==z&&(this.search=l.substr(z),l=l.slice(0,z)),l&&(this.pathname=l),m[o]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=o.exec(e);r&&(":"!==(r=r[0])&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)},r.exports=function(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t}},{}],60:[function(e,r,t){(function(e){!function(n){function s(e){throw new RangeError(L[e])}function o(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function i(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),n+o((e=e.replace(F,".")).split("."),r).join(".")}function a(e){for(var r,t,n=[],s=0,o=e.length;s<o;)(r=e.charCodeAt(s++))>=55296&&r<=56319&&s<o?56320==(64512&(t=e.charCodeAt(s++)))?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--):n.push(r);return n}function c(e){return o(e,function(e){var r="";return e>65535&&(r+=I((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=I(e)}).join("")}function l(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:v}function u(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function p(e,r,t){var n=0;for(e=t?T(e/A):e>>1,e+=T(e/r);e>z*y>>1;n+=v)e=T(e/z);return T(n+(z+1)*e/(e+C))}function h(e){var r,t,n,o,i,a,u,h,f,d,m=[],_=e.length,g=0,b=D,C=w;for((t=e.lastIndexOf(q))<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&s("not-basic"),m.push(e.charCodeAt(n));for(o=t>0?t+1:0;o<_;){for(i=g,a=1,u=v;o>=_&&s("invalid-input"),((h=l(e.charCodeAt(o++)))>=v||h>T((k-g)/a))&&s("overflow"),g+=h*a,f=u<=C?x:u>=C+y?y:u-C,!(h<f);u+=v)a>T(k/(d=v-f))&&s("overflow"),a*=d;C=p(g-i,r=m.length+1,0==i),T(g/r)>k-b&&s("overflow"),b+=T(g/r),g%=r,m.splice(g++,0,b)}return c(m)}function f(e){var r,t,n,o,i,c,l,h,f,d,m,_,g,b,C,A=[];for(_=(e=a(e)).length,r=D,t=0,i=w,c=0;c<_;++c)(m=e[c])<128&&A.push(I(m));for(n=o=A.length,o&&A.push(q);n<_;){for(l=k,c=0;c<_;++c)(m=e[c])>=r&&m<l&&(l=m);for(l-r>T((k-t)/(g=n+1))&&s("overflow"),t+=(l-r)*g,r=l,c=0;c<_;++c)if((m=e[c])<r&&++t>k&&s("overflow"),m==r){for(h=t,f=v;d=f<=i?x:f>=i+y?y:f-i,!(h<d);f+=v)C=h-d,b=v-d,A.push(I(u(d+C%b,0))),h=T(C/b);A.push(I(u(h,0))),i=p(t,g,n==o),t=0,++n}++t,++r}return A.join("")}var d="object"==typeof t&&t&&!t.nodeType&&t,m="object"==typeof r&&r&&!r.nodeType&&r,_="object"==typeof e&&e;_.global!==_&&_.window!==_&&_.self!==_||(n=_);var g,b,k=2147483647,v=36,x=1,y=26,C=38,A=700,w=72,D=128,q="-",E=/^xn--/,S=/[^\x20-\x7E]/,F=/[\x2E\u3002\uFF0E\uFF61]/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},z=v-x,T=Math.floor,I=String.fromCharCode;if(g={version:"1.4.1",ucs2:{decode:a,encode:c},decode:h,encode:f,toASCII:function(e){return i(e,function(e){return S.test(e)?"xn--"+f(e):e})},toUnicode:function(e){return i(e,function(e){return E.test(e)?h(e.slice(4).toLowerCase()):e})}},d&&m)if(r.exports==d)m.exports=g;else for(b in g)g.hasOwnProperty(b)&&(d[b]=g[b]);else n.punycode=g}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],61:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/},{}],62:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},{}],63:[function(e,r,t){r.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},{}],64:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/},{}],65:[function(e,r,t){"use strict";t.Any=e("./properties/Any/regex"),t.Cc=e("./categories/Cc/regex"),t.Cf=e("./categories/Cf/regex"),t.P=e("./categories/P/regex"),t.Z=e("./categories/Z/regex")},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(e,r,t){r.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},{}],67:[function(e,r,t){"use strict";r.exports=e("./lib/")},{"./lib/":9}]},{},[67])(67)});
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownItAttrs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var patterns = require('./patterns.js');

module.exports = function attributes(md) {

  function curlyAttrs(state) {
    var tokens = state.tokens;

    var _loop = function _loop(i) {
      for (var p = 0; p < patterns.length; p++) {
        var pattern = patterns[p];
        var j = null; // position of child with offset 0
        var match = pattern.tests.every(function (t) {
          var res = test(tokens, i, t);
          if (res.j !== null) {
            j = res.j;
          }
          return res.match;
        });
        if (match) {
          pattern.transform(tokens, i, j);
          if (pattern.name === 'inline attributes') {
            // retry, may be several inline attributes
            p--;
          }
        }
      }
    };

    for (var i = 0; i < tokens.length; i++) {
      _loop(i);
    }
  }

  md.core.ruler.before('linkify', 'curly_attributes', curlyAttrs);
};

/**
 * Test if t matches token stream.
 *
 * @param {array} tokens
 * @param {number} i
 * @param {object} t Test to match.
 * @return {object} { match: true|false, j: null|number }
 */
function test(tokens, i, t) {
  var res = {
    match: false,
    j: null // position of child
  };

  var ii = t.shift !== undefined ? i + t.shift : t.position;
  var token = get(tokens, ii); // supports negative ii


  if (token === undefined) {
    return res;
  }

  var _loop2 = function _loop2(key) {
    if (key === 'shift' || key === 'position') {
      return 'continue';
    }

    if (token[key] === undefined) {
      return {
        v: res
      };
    }

    if (key === 'children' && isArrayOfObjects(t.children)) {
      var _ret3 = function () {
        if (token.children.length === 0) {
          return {
            v: {
              v: res
            }
          };
        }
        var match = void 0;
        var childTests = t.children;
        var children = token.children;
        if (childTests.every(function (tt) {
          return tt.position !== undefined;
        })) {
          // positions instead of shifts, do not loop all children
          match = childTests.every(function (tt) {
            return test(children, tt.position, tt).match;
          });
          if (match) {
            // we may need position of child in transform
            var j = last(childTests).position;
            res.j = j >= 0 ? j : children.length + j;
          }
        } else {
          var _loop3 = function _loop3(_j) {
            match = childTests.every(function (tt) {
              return test(children, _j, tt).match;
            });
            if (match) {
              res.j = _j;
              // all tests true, continue with next key of pattern t
              return 'break';
            }
          };

          for (var _j = 0; _j < children.length; _j++) {
            var _ret4 = _loop3(_j);

            if (_ret4 === 'break') break;
          }
        }

        if (match === false) {
          return {
            v: {
              v: res
            }
          };
        }

        return {
          v: 'continue'
        };
      }();

      if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
    }

    switch (_typeof(t[key])) {
      case 'boolean':
      case 'number':
      case 'string':
        if (token[key] !== t[key]) {
          return {
            v: res
          };
        }
        break;
      case 'function':
        if (!t[key](token[key])) {
          return {
            v: res
          };
        }
        break;
      case 'object':
        if (isArrayOfFunctions(t[key])) {
          var r = t[key].every(function (tt) {
            return tt(token[key]);
          });
          if (r === false) {
            return {
              v: res
            };
          }
          break;
        }
      // fall through for objects !== arrays of functions
      default:
        throw new Error('Unknown type of pattern test (key: ' + key + '). Test should be of type boolean, number, string, function or array of functions.');
    }
  };

  for (var key in t) {
    var _ret2 = _loop2(key);

    switch (_ret2) {
      case 'continue':
        continue;

      default:
        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }
  }

  // no tests returned false -> all tests returns true
  res.match = true;
  return res;
}

function isArrayOfObjects(arr) {
  return Array.isArray(arr) && arr.length && arr.every(function (i) {
    return (typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object';
  });
}

function isArrayOfFunctions(arr) {
  return Array.isArray(arr) && arr.length && arr.every(function (i) {
    return typeof i === 'function';
  });
}

/**
 * Get n item of array. Supports negative n, where -1 is last
 * element in array.
 * @param {array} arr
 * @param {number} n
 */
function get(arr, n) {
  return n >= 0 ? arr[n] : arr[arr.length + n];
}

// get last element of array, safe - returns {} if not found
function last(arr) {
  return arr.slice(-1)[0] || {};
}

},{"./patterns.js":2}],2:[function(require,module,exports){
'use strict';
/**
 * If a pattern matches the token stream,
 * then run transform.
 */

var utils = require('./utils.js');

module.exports = [{
  /**
   * ```python {.cls}
   * for i in range(10):
   *     print(i)
   * ```
   */
  name: 'fenced code blocks',
  tests: [{
    shift: 0,
    block: true,
    info: utils.hasCurly('end')
  }],
  transform: function transform(tokens, i) {
    var token = tokens[i];
    var start = token.info.lastIndexOf('{');
    var attrs = utils.getAttrs(token.info, start);
    utils.addAttrs(attrs, token);
    token.info = utils.removeCurly(token.info);
  }
}, {
  /**
   * bla `click()`{.c} ![](img.png){.d}
   *
   * differs from 'inline attributes' as it does
   * not have a closing tag (nesting: -1)
   */
  name: 'inline nesting 0',
  tests: [{
    shift: 0,
    type: 'inline',
    children: [{
      shift: -1,
      type: function type(str) {
        return str === 'image' || str === 'code_inline';
      }
    }, {
      shift: 0,
      type: 'text',
      content: utils.hasCurly('start')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var endChar = token.content.indexOf('}');
    var attrToken = tokens[i].children[j - 1];
    var attrs = utils.getAttrs(token.content, 0);
    utils.addAttrs(attrs, attrToken);
    if (token.content.length === endChar + 1) {
      tokens[i].children.splice(j, 1);
    } else {
      token.content = token.content.slice(endChar + 1);
    }
  }
}, {
  /**
   * | h1 |
   * | -- |
   * | c1 |
   * {.c}
   */
  name: 'tables',
  tests: [{
    // let this token be i, such that for-loop continues at
    // next token after tokens.splice
    shift: 0,
    type: 'table_close'
  }, {
    shift: 1,
    type: 'paragraph_open'
  }, {
    shift: 2,
    type: 'inline',
    content: utils.hasCurly('only')
  }],
  transform: function transform(tokens, i) {
    var token = tokens[i + 2];
    var tableOpen = utils.getMatchingOpeningToken(tokens, i);
    var attrs = utils.getAttrs(token.content, 0);
    // add attributes
    utils.addAttrs(attrs, tableOpen);
    // remove <p>{.c}</p>
    tokens.splice(i + 1, 3);
  }
}, {
  /**
   * *emphasis*{.with attrs=1}
   */
  name: 'inline attributes',
  tests: [{
    shift: 0,
    type: 'inline',
    children: [{
      shift: -1,
      nesting: -1 // closing inline tag, </em>{.a}
    }, {
      shift: 0,
      type: 'text',
      content: utils.hasCurly('start')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var content = token.content;
    var attrs = utils.getAttrs(content, 0);
    var openingToken = utils.getMatchingOpeningToken(tokens[i].children, j - 1);
    utils.addAttrs(attrs, openingToken);
    token.content = content.slice(content.indexOf('}') + 1);
  }
}, {
  /**
   * - item
   * {.a}
   */
  name: 'list softbreak',
  tests: [{
    shift: -2,
    type: 'list_item_open'
  }, {
    shift: 0,
    type: 'inline',
    children: [{
      position: -2,
      type: 'softbreak'
    }, {
      position: -1,
      content: utils.hasCurly('only')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var content = token.content;
    var attrs = utils.getAttrs(content, 0);
    var ii = i - 2;
    while (tokens[ii - 1] && tokens[ii - 1].type !== 'ordered_list_open' && tokens[ii - 1].type !== 'bullet_list_open') {
      ii--;
    }
    utils.addAttrs(attrs, tokens[ii - 1]);
    tokens[i].children = tokens[i].children.slice(0, -2);
  }
}, {
  /**
   * - nested list
   *   - with double \n
   *   {.a} <-- apply to nested ul
   *
   * {.b} <-- apply to root <ul>
   */
  name: 'list double softbreak',
  tests: [{
    // let this token be i = 0 so that we can erase
    // the <p>{.a}</p> tokens below
    shift: 0,
    type: function type(str) {
      return str === 'bullet_list_close' || str === 'ordered_list_close';
    }
  }, {
    shift: 1,
    type: 'paragraph_open'
  }, {
    shift: 2,
    type: 'inline',
    content: utils.hasCurly('only'),
    children: function children(arr) {
      return arr.length === 1;
    }
  }, {
    shift: 3,
    type: 'paragraph_close'
  }],
  transform: function transform(tokens, i) {
    var token = tokens[i + 2];
    var content = token.content;
    var attrs = utils.getAttrs(content, 0);
    var openingToken = utils.getMatchingOpeningToken(tokens, i);
    utils.addAttrs(attrs, openingToken);
    tokens.splice(i + 1, 3);
  }
}, {
  /**
   * - end of {.list-item}
   */
  name: 'list item end',
  tests: [{
    shift: -2,
    type: 'list_item_open'
  }, {
    shift: 0,
    type: 'inline',
    children: [{
      position: -1,
      content: utils.hasCurly('end')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var content = token.content;
    var attrs = utils.getAttrs(content, content.lastIndexOf('{'));
    utils.addAttrs(attrs, tokens[i - 2]);
    var trimmed = content.slice(0, content.lastIndexOf('{'));
    token.content = last(trimmed) !== ' ' ? trimmed : trimmed.slice(0, -1);
  }
}, {
  /**
   * something with softbreak
   * {.cls}
   */
  name: '\n{.a} softbreak then curly in start',
  tests: [{
    shift: 0,
    type: 'inline',
    children: [{
      position: -2,
      type: 'softbreak'
    }, {
      position: -1,
      type: 'text',
      content: utils.hasCurly('only')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var attrs = utils.getAttrs(token.content, 0);
    // find last closing tag
    var ii = i + 1;
    while (tokens[ii + 1] && tokens[ii + 1].nesting === -1) {
      ii++;
    }
    var openingToken = utils.getMatchingOpeningToken(tokens, ii);
    utils.addAttrs(attrs, openingToken);
    tokens[i].children = tokens[i].children.slice(0, -2);
  }
}, {
  /**
   * end of {.block}
   */
  name: 'end of block',
  tests: [{
    shift: 0,
    type: 'inline',
    children: [{
      position: -1,
      content: utils.hasCurly('end')
    }]
  }],
  transform: function transform(tokens, i, j) {
    var token = tokens[i].children[j];
    var content = token.content;
    var attrs = utils.getAttrs(content, content.lastIndexOf('{'));
    var ii = i + 1;
    while (tokens[ii + 1] && tokens[ii + 1].nesting === -1) {
      ii++;
    }
    var openingToken = utils.getMatchingOpeningToken(tokens, ii);
    utils.addAttrs(attrs, openingToken);
    var trimmed = content.slice(0, content.lastIndexOf('{'));
    token.content = last(trimmed) !== ' ' ? trimmed : trimmed.slice(0, -1);
  }
}];

// get last element of array or string
function last(arr) {
  return arr.slice(-1)[0];
}

},{"./utils.js":3}],3:[function(require,module,exports){
'use strict';
/**
 * parse {.class #id key=val} strings
 * @param {string} str: string to parse
 * @param {int} start: where to start parsing (including {)
 * @returns {2d array}: [['key', 'val'], ['class', 'red']]
 */

exports.getAttrs = function (str, start, end) {
  // TODO: do not require `end`, stop when } is found
  // not tab, line feed, form feed, space, solidus, greater than sign, quotation mark, apostrophe and equals sign
  var allowedKeyChars = /[^\t\n\f />"'=]/;
  var pairSeparator = ' ';
  var keySeparator = '=';
  var classChar = '.';
  var idChar = '#';
  var endChar = '}';

  var attrs = [];
  var key = '';
  var value = '';
  var parsingKey = true;
  var valueInsideQuotes = false;

  // read inside {}
  // start + 1 to avoid beginning {
  // breaks when } is found or end of string
  for (var i = start + 1; i < str.length; i++) {
    var char_ = str.charAt(i);
    if (char_ === endChar) {
      if (key !== '') {
        attrs.push([key, value]);
      }
      break;
    }

    // switch to reading value if equal sign
    if (char_ === keySeparator) {
      parsingKey = false;
      continue;
    }

    // {.class} {..css-module}
    if (char_ === classChar) {
      if (key === '') {
        key = 'class';
        parsingKey = false;
        continue;
      } else if (key === 'class') {
        key = 'css-module';
        continue;
      }
    }

    // {#id}
    if (char_ === idChar && key === '') {
      key = 'id';
      parsingKey = false;
      continue;
    }

    // {value="inside quotes"}
    if (char_ === '"' && value === '') {
      valueInsideQuotes = true;
      continue;
    }
    if (char_ === '"' && valueInsideQuotes) {
      valueInsideQuotes = false;
      continue;
    }

    // read next key/value pair
    if (char_ === pairSeparator && !valueInsideQuotes || i === end) {
      if (key === '') {
        // beginning or ending space: { .red } vs {.red}
        continue;
      }
      attrs.push([key, value]);
      key = '';
      value = '';
      parsingKey = true;
      continue;
    }

    // continue if character not allowed
    if (parsingKey && char_.search(allowedKeyChars) === -1) {
      continue;
    }

    // no other conditions met; append to key/value
    if (parsingKey) {
      key += char_;
      continue;
    }
    value += char_;
  }
  return attrs;
};

/**
 * add attributes from [['key', 'val']] list
 * @param {array} attrs: [['key', 'val']]
 * @param {token} token: which token to add attributes
 * @returns token
 */
exports.addAttrs = function (attrs, token) {
  for (var j = 0, l = attrs.length; j < l; ++j) {
    var key = attrs[j][0];
    if (key === 'class') {
      token.attrJoin('class', attrs[j][1]);
    } else if (key === 'css-module') {
      token.attrJoin('css-module', attrs[j][1]);
    } else {
      token.attrPush(attrs[j]);
    }
  }
  return token;
};

/**
 * Does string have properly formatted curly?
 *
 * start: '{.a} asdf'
 * middle: 'a{.b}c'
 * end: 'asdf {.a}'
 * only: '{.a}'
 *
 * @param {string} where to expect {} curly. start, middle, end or only.
 * @return {function(string)} Function which testes if string has curly.
 */
exports.hasCurly = function (where) {

  if (!where) {
    throw new Error('Parameter `where` not passed. Should be "start", "middle", "end" or "only".');
  }

  /**
   * @param {string} str
   * @return {boolean}
   */
  return function (str) {
    // we need minimum four chars, example {.b}
    if (!str || typeof str !== 'string' || str.length < 4) {
      return false;
    }

    var start = void 0,
        end = void 0;
    switch (where) {
      case 'start':
        // first char should be {, } found in char 3 or more
        return str.charAt(0) === '{' && str.indexOf('}', 3) !== -1;

      case 'middle':
        // 'a{.b}'
        start = str.indexOf('{', 1);
        end = start !== -1 && str.indexOf('}', start + 3);
        return start !== -1 && end !== -1;

      case 'end':
        // last char should be }
        end = str.charAt(str.length - 1) === '}';
        start = end && str.indexOf('{');
        return end && start + 3 < str.length;

      case 'only':
        // '{.a}'
        return str.charAt(0) === '{' &&
        // make sure first occurence is last occurence
        str.indexOf('}', 3) === str.length - 1;
    }
  };
};

/**
 * Removes last curly from string.
 */
exports.removeCurly = function (str) {
  var curly = /[ \n]?{[^{}}]+}$/;
  var pos = str.search(curly);

  return pos !== -1 ? str.slice(0, pos) : str;
};

/**
 * find corresponding opening block
 */
exports.getMatchingOpeningToken = function (tokens, i) {
  if (tokens[i].type === 'softbreak') {
    return false;
  }
  // non closing blocks, example img
  if (tokens[i].nesting === 0) {
    return tokens[i];
  }

  // inline tokens changes level on same token
  // that have .nesting +- 1
  var level = tokens[i].block ? tokens[i].level : tokens[i].level + 1; // adjust for inline tokens

  var type = tokens[i].type.replace('_close', '_open');

  for (; i >= 0; --i) {
    if (tokens[i].type === type && tokens[i].level === level) {
      return tokens[i];
    }
  }
};

/**
 * from https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js
 */
var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

exports.escapeHtml = function (str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
};

},{}]},{},[1])(1)
});/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function a(e,t){var r=e&&e.exec(t);return r&&0===r.index}function n(e){return E.test(e)}function i(e){var t,r,a,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",r=M.exec(s))return w(r[1])?r[1]:"no-highlight";for(s=s.split(/\s+/),t=0,a=s.length;a>t;t++)if(i=s[t],n(i)||w(i))return i}function s(e){var t,r={},a=Array.prototype.slice.call(arguments,1);for(t in e)r[t]=e[t];return a.forEach(function(e){for(t in e)r[t]=e[t]}),r}function c(e){var t=[];return function a(e,n){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?n+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:n,node:i}),n=a(i,n),r(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:i}));return n}(e,0),t}function o(e,a,n){function i(){return e.length&&a.length?e[0].offset!==a[0].offset?e[0].offset<a[0].offset?e:a:"start"===a[0].event?e:a:e.length?e:a}function s(e){function a(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}u+="<"+r(e)+N.map.call(e.attributes,a).join("")+">"}function c(e){u+="</"+r(e)+">"}function o(e){("start"===e.event?s:c)(e.node)}for(var l=0,u="",d=[];e.length||a.length;){var b=i();if(u+=t(n.substring(l,b[0].offset)),l=b[0].offset,b===e){d.reverse().forEach(c);do o(b.splice(0,1)[0]),b=i();while(b===e&&b.length&&b[0].offset===l);d.reverse().forEach(s)}else"start"===b[0].event?d.push(b[0].node):d.pop(),o(b.splice(0,1)[0])}return u+t(n.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return s(e,{v:null},t)})),e.cached_variants||e.eW&&[s(e)]||[e]}function u(e){function t(e){return e&&e.source||e}function r(r,a){return new RegExp(t(r),"m"+(e.cI?"i":"")+(a?"g":""))}function a(n,i){if(!n.compiled){if(n.compiled=!0,n.k=n.k||n.bK,n.k){var s={},c=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof n.k?c("keyword",n.k):k(n.k).forEach(function(e){c(e,n.k[e])}),n.k=s}n.lR=r(n.l||/\w+/,!0),i&&(n.bK&&(n.b="\\b("+n.bK.split(" ").join("|")+")\\b"),n.b||(n.b=/\B|\b/),n.bR=r(n.b),n.e||n.eW||(n.e=/\B|\b/),n.e&&(n.eR=r(n.e)),n.tE=t(n.e)||"",n.eW&&i.tE&&(n.tE+=(n.e?"|":"")+i.tE)),n.i&&(n.iR=r(n.i)),null==n.r&&(n.r=1),n.c||(n.c=[]),n.c=Array.prototype.concat.apply([],n.c.map(function(e){return l("self"===e?n:e)})),n.c.forEach(function(e){a(e,n)}),n.starts&&a(n.starts,i);var o=n.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([n.tE,n.i]).map(t).filter(Boolean);n.t=o.length?r(o.join("|"),!0):{exec:function(){return null}}}}a(e)}function d(e,r,n,i){function s(e,t){var r,n;for(r=0,n=t.c.length;n>r;r++)if(a(t.c[r].bR,e))return t.c[r]}function c(e,t){if(a(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,t):void 0}function o(e,t){return!n&&a(t.iR,e)}function l(e,t){var r=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,a){var n=a?"":L.classPrefix,i='<span class="'+n,s=r?"":R;return i+=e+'">',i+t+s}function m(){var e,r,a,n;if(!N.k)return t(E);for(n="",r=0,N.lR.lastIndex=0,a=N.lR.exec(E);a;)n+=t(E.substring(r,a.index)),e=l(N,a),e?(M+=e[1],n+=p(e[0],t(a[0]))):n+=t(a[0]),r=N.lR.lastIndex,a=N.lR.exec(E);return n+t(E.substr(r))}function f(){var e="string"==typeof N.sL;if(e&&!x[N.sL])return t(E);var r=e?d(N.sL,E,!0,k[N.sL]):b(E,N.sL.length?N.sL:void 0);return N.r>0&&(M+=r.r),e&&(k[N.sL]=r.top),p(r.language,r.value,!1,!0)}function g(){C+=null!=N.sL?f():m(),E=""}function _(e){C+=e.cN?p(e.cN,"",!0):"",N=Object.create(e,{parent:{value:N}})}function h(e,t){if(E+=e,null==t)return g(),0;var r=s(t,N);if(r)return r.skip?E+=t:(r.eB&&(E+=t),g(),r.rB||r.eB||(E=t)),_(r,t),r.rB?0:t.length;var a=c(N,t);if(a){var n=N;n.skip?E+=t:(n.rE||n.eE||(E+=t),g(),n.eE&&(E=t));do N.cN&&(C+=R),N.skip||(M+=N.r),N=N.parent;while(N!==a.parent);return a.starts&&_(a.starts,""),n.rE?0:t.length}if(o(t,N))throw new Error('Illegal lexeme "'+t+'" for mode "'+(N.cN||"<unnamed>")+'"');return E+=t,t.length||1}var v=w(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var y,N=i||v,k={},C="";for(y=N;y!==v;y=y.parent)y.cN&&(C=p(y.cN,"",!0)+C);var E="",M=0;try{for(var B,S,$=0;;){if(N.t.lastIndex=$,B=N.t.exec(r),!B)break;S=h(r.substring($,B.index),B[0]),$=B.index+S}for(h(r.substr($)),y=N;y.parent;y=y.parent)y.cN&&(C+=R);return{r:M,value:C,language:e,top:N}}catch(A){if(A.message&&-1!==A.message.indexOf("Illegal"))return{r:0,value:t(r)};throw A}}function b(e,r){r=r||L.languages||k(x);var a={r:0,value:t(e)},n=a;return r.filter(w).forEach(function(t){var r=d(t,e,!1);r.language=t,r.r>n.r&&(n=r),r.r>a.r&&(n=a,a=r)}),n.language&&(a.second_best=n),a}function p(e){return L.tabReplace||L.useBR?e.replace(B,function(e,t){return L.useBR&&"\n"===e?"<br>":L.tabReplace?t.replace(/\t/g,L.tabReplace):""}):e}function m(e,t,r){var a=t?C[t]:r,n=[e.trim()];return e.match(/\bhljs\b/)||n.push("hljs"),-1===e.indexOf(a)&&n.push(a),n.join(" ").trim()}function f(e){var t,r,a,s,l,u=i(e);n(u)||(L.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,l=t.textContent,a=u?d(u,l,!0):b(l),r=c(t),r.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=a.value,a.value=o(r,c(s),l)),a.value=p(a.value),e.innerHTML=a.value,e.className=m(e.className,u,a.language),e.result={language:a.language,re:a.r},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.r}))}function g(e){L=s(L,e)}function _(){if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,f)}}function h(){addEventListener("DOMContentLoaded",_,!1),addEventListener("load",_,!1)}function v(t,r){var a=x[t]=r(e);a.aliases&&a.aliases.forEach(function(e){C[e]=t})}function y(){return k(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[C[e]]}var N=[],k=Object.keys,x={},C={},E=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,B=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,R="</span>",L={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=d,e.highlightAuto=b,e.fixMarkup=p,e.highlightBlock=f,e.configure=g,e.initHighlighting=_,e.initHighlightingOnLoad=h,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=w,e.inherit=s,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,r,a){var n=e.inherit({cN:"comment",b:t,e:r,c:[]},a||{});return n.c.push(e.PWM),n.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),n},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"section",b:"</?",e:">"},{cN:"attribute",b:/\w+/,r:0,k:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"meta",b:"\\s\\[",e:"\\]$"},{cN:"variable",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),e.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,a,t]}}),e.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",a={cN:"subst",b:/#\{/,e:/}/,k:t},n=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,a]},{b:/"/,e:/"/,c:[e.BE,a]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[a,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+r},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];a.c=n;var i=e.inherit(e.TM,{b:r}),s="(\\(.*\\))?\\s*\\B[-=]>",c={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(n)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:n.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,c]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[c]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),e.registerLanguage("cpp",function(e){var t={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U)?L?"',e:'"',i:"\\n",c:[e.BE]},{b:'(u8?|U)?R"',e:'"',c:[e.BE]},{b:"'\\\\?.",e:"'",i:"."}]},a={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},n={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},e.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:/<[^\n>]*>/,e:/$/,i:"\\n"},e.CLCM,e.CBCM]},i=e.IR+"\\s*\\(",s={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},c=[t,e.CLCM,e.CBCM,a,r];return{aliases:["c","cc","h","c++","h++","hpp"],k:s,i:"</",c:c.concat([n,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:s,c:["self",t]},{b:e.IR+"::",k:s},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:s,c:c.concat([{b:/\(/,e:/\)/,k:s,c:c.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:s,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:s,r:0,c:[e.CLCM,e.CBCM,r,a,t]},e.CLCM,e.CBCM,n]},{cN:"class",bK:"class struct",e:/[{;:]/,c:[{b:/</,e:/>/,c:["self"]},e.TM]}]),exports:{preprocessor:n,strings:r,k:s}}}),e.registerLanguage("cs",function(e){var t={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a=e.inherit(r,{i:/\n/}),n={cN:"subst",b:"{",e:"}",k:t},i=e.inherit(n,{i:/\n/}),s={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,i]},c={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},n]},o=e.inherit(c,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},i]});n.c=[c,s,r,e.ASM,e.QSM,e.CNM,e.CBCM],i.c=[o,s,a,e.ASM,e.QSM,e.CNM,e.inherit(e.CBCM,{i:/\n/})];var l={v:[c,s,r,e.ASM,e.QSM]},u=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp"],k:t,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},l,e.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{cN:"meta",b:"^\\s*\\[",eB:!0,e:"\\]",eE:!0,c:[{cN:"meta-string",b:/"/,e:/"/}]},{bK:"new return throw await else",r:0},{cN:"function",b:"("+u+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,r:0,c:[l,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}}),e.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:t,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}}),e.registerLanguage("diff",function(e){return{aliases:["patch"],c:[{cN:"meta",r:10,v:[{b:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"comment",v:[{b:/Index: /,e:/$/},{b:/={3,}/,e:/$/},{b:/^\-{3}/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+{3}/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"addition",b:"^\\!",e:"$"}]}}),e.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),e.registerLanguage("ini",function(e){var t={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_-]+/},{b:/=/,eW:!0,r:0,c:[{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},t,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM]}]}]}}),e.registerLanguage("java",function(e){var t="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",r=t+"(<"+t+"(\\s*,\\s*"+t+")*>)?",a="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",n="\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",i={cN:"number",b:n,r:0};return{aliases:["jsp"],k:a,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{b:/\w+@/,r:0},{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"("+r+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:a,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:a,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},i,{cN:"meta",b:"@[A-Za-z]+"}]}}),e.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,i,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),e.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],a={e:",",eW:!0,eE:!0,c:r,k:t},n={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(a,{b:/:/})],i:"\\S"},i={b:"\\[",e:"\\]",c:[e.inherit(a)],i:"\\S"};return r.splice(r.length,0,n,i),{c:r,k:t,i:"\\S"}}),e.registerLanguage("makefile",function(e){var t={cN:"variable",v:[{b:"\\$\\("+e.UIR+"\\)",c:[e.BE]},{b:/\$[@%<?\^\+\*]/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t]},a={cN:"variable",b:/\$\([\w-]+\s/,e:/\)/,k:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},c:[t]},n={b:"^"+e.UIR+"\\s*[:+?]?=",i:"\\n",rB:!0,c:[{b:"^"+e.UIR,e:"[:+?]?=",eE:!0}]},i={cN:"meta",b:/^\.PHONY:/,e:/$/,k:{"meta-keyword":".PHONY"},l:/[\.\w]+/},s={cN:"section",b:/^[^\s]+:/,e:/$/,c:[t]};return{aliases:["mk","mak"],k:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",l:/[\w-]+/,c:[e.HCM,t,r,a,n,i,s]}}),e.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={eW:!0,i:/</,r:0,c:[{cN:"attr",b:t,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},r]}]}}),e.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}}),e.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},r={eW:!0,l:"[a-z/_]+",k:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s+{",rB:!0,e:"{",c:[{cN:"section",b:e.UIR}],r:0},{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"attribute",b:e.UIR,starts:r}],r:0}],i:"[^\\s\\}]"}}),e.registerLanguage("objectivec",function(e){var t={cN:"built_in",b:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},a=/[a-zA-Z@][a-zA-Z0-9_]*/,n="@interface @class @protocol @implementation";return{aliases:["mm","objc","obj-c"],k:r,l:a,i:"</",c:[t,e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"meta",b:"#",e:"$",c:[{cN:"meta-string",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+n.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:n,l:a,c:[e.UTM]},{b:"\\."+e.UIR,r:0}]}}),e.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},a={b:"->{",e:"}"},n={v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],s=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),a,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"function",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",eE:!0,r:5,c:[e.TM]},{b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=s,a.c=s,{aliases:["pl","pm"],l:/[\w\.]+/,k:t,c:s}}),e.registerLanguage("php",function(e){var t={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"meta",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[r]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},r,{cN:"keyword",b:/\$this\b/},t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}}),e.registerLanguage("python",function(e){var t={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},r={cN:"meta",b:/^(>>>|\.\.\.) /},a={cN:"subst",b:/\{/,e:/\}/,k:t,i:/#/},n={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[r,a]},{b:/(fr|rf|f)"""/,e:/"""/,c:[r,a]},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[a]},{b:/(fr|rf|f)"/,e:/"/,c:[a]},e.ASM,e.QSM]},i={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},s={cN:"params",b:/\(/,e:/\)/,c:["self",r,i,n]};return a.c=[n,i,r],{aliases:["py","gyp"],k:t,i:/(<\/|->|\?)|=>/,c:[r,i,n,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,s,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}}),e.registerLanguage("ruby",function(e){
var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},a={cN:"doctag",b:"@[A-Za-z]+"},n={b:"#<",e:">"},i=[e.C("#","$",{c:[a]}),e.C("^\\=begin","^\\=end",{c:[a],r:10}),e.C("^__END__","\\n$")],s={cN:"subst",b:"#\\{",e:"}",k:r},c={cN:"string",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},o={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},l=[c,n,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(i)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[c,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[n,{cN:"regexp",c:[e.BE,s],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(i),r:0}].concat(i);s.c=l,o.c=l;var u="[>?]>",d="[\\w#]+\\(\\w+\\):\\d+:\\d+>",b="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",p=[{b:/^\s*=>/,starts:{e:"$",c:l}},{cN:"meta",b:"^("+u+"|"+d+"|"+b+")",starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:i.concat(p).concat(l)}}),e.registerLanguage("shell",function(e){return{aliases:["console"],c:[{cN:"meta",b:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{e:"$",sL:"bash"}}]}}),e.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*#]/,c:[{bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",e:/;/,eW:!0,l:/[\w\.]+/,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}}),e});(function () {
'use strict';

function load(href) {
	let node = document.createElement("link");
	node.rel = "stylesheet";
	node.href = href;
	document.head.appendChild(node);

	return new Promise((resolve, reject) => {
		node.onload = resolve;
		node.onerror = e => console.warn(e), resolve();
	});
}

function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		let html = hljs.highlight(lang, str).value;
		return html.replace(/([^\n]*)\n/g, `<div>$1</div>`);
	} else {
		return "";
	}
}

// import markdownIt from "markdown-it";
function newSlide(slides) {
	let slide = document.createElement("section");
	slide.classList.add("slide");
	slides.push(slide);
	return slide;
}

function parse(source) {
	let md = markdownit({highlight: highlight, html:true});
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slides = [];
	let slide = newSlide(slides);

	Array.from(tmp.children).forEach(child => {
		if (child.nodeName == "HR") {
			slide = newSlide(slides);
		} else {
			slide.appendChild(child);
		}
	});

	return slides;
}

function xhr(url) {
	let r = new XMLHttpRequest();
	r.open("get", url, true);
	r.send();
	return new Promise((resolve, reject) => {
		r.onload = resolve;
		r.onerror = reject;
	});
}

let nodes = [];
let currentIndex = -1;

const root = document.documentElement;

function initFromString(str, node) {
	nodes = parse(str);

	let fragment = document.createDocumentFragment();
	nodes.forEach(node => fragment.appendChild(node));

	node.parentNode.replaceChild(fragment, node);
	root.style.setProperty("--total", nodes.length);
}

function findIndex(node) {
	return nodes.findIndex(slide => {
		let tmp = node;
		while (tmp) {
			if (tmp == slide) { return true; }
			tmp = tmp.parentNode;
		}
		return false;
	});
}

function show(index) {
	index = Math.max(index, 0);
	index = Math.min(index, nodes.length-1);
	if (index == currentIndex) { return; }

	currentIndex = index;
	nodes.forEach((node, i) => node.classList.toggle("current", i == currentIndex));

	window.dispatchEvent(new CustomEvent("slide-change"));
	root.style.setProperty("--current", currentIndex+1);
}

function init$1(node) {
	let src = node.dataset.src;
	if (src) {
		return xhr(src).then(e => initFromString(e.target.responseText, node));
	} else {
		initFromString(node.innerHTML, node);
		return Promise.resolve();
	}
}

const root$1 = document.documentElement;
let width;
let height;
let current = 1;

const META = {
	name: "viewport",
	content: "width=device-width, initial-scale=1, user-scalable=no"
};

function sync() {
	let rw = window.innerWidth/width;
	let rh = window.innerHeight/height;
	current = Math.min(rw, rh);
	root$1.style.setProperty("--scale", current);
}

function init$2() {
	let meta = document.createElement("meta");
	Object.assign(meta, META);
	document.head.appendChild(meta);

	let style = getComputedStyle(root$1);
	width = Number(style.getPropertyValue("--width"));
	height = Number(style.getPropertyValue("--height"));
	sync();

	window.addEventListener("resize", e => sync());
}


var scale = Object.freeze({
	get current () { return current; },
	init: init$2
});

const node = document.body;
let current$1 = "";

function setMode(mode) {
	if (current$1 == mode) { return; }

	try {
		node.classList.remove(current$1);
	} catch (e) {}

	current$1 = mode;
	node.classList.add(current$1);

	window.dispatchEvent(new CustomEvent("mode-change"));
}

function toggle$1() {
	setMode(current$1 == "full" ? "overview" : "full");
}

function init$5() {
	setMode("full");
}


var mode = Object.freeze({
	get current () { return current$1; },
	toggle: toggle$1,
	init: init$5
});

let path = [];
let paths = [];
let ctx = null;

function drawPath(path) {
	ctx.beginPath();
	path.forEach((pos, index) => {
		(index ? ctx.lineTo(pos[0], pos[1]) : ctx.moveTo(pos[0], pos[1]));
	});
	ctx.stroke();
}

function redraw() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	paths.forEach(drawPath);
	if (path.length > 1) { drawPath(path); }
}

function setupStyle(parent) {
	let style = getComputedStyle(parent);
	ctx.strokeStyle = style.getPropertyValue("--highlight");
	ctx.lineWidth = style.getPropertyValue("--brush");
	ctx.lineJoin = ctx.lineCap = "round";
}

function start(pos) {
	path.push(pos);
}

function stop() {
	if (path.length > 1) { paths.push(path); }
	path = [];
}

function add(pos) {
	path.push(pos);
	redraw();
}

function show$1(parent) {
	parent.appendChild(ctx.canvas);
	ctx.canvas.width = parent.offsetWidth;
	ctx.canvas.height = parent.offsetHeight;
	setupStyle(parent);
}

function hide() {
	paths = [];
	redraw();
	ctx.canvas.parentNode.removeChild(ctx.canvas);
}

function init$6() {
	let canvas = document.createElement("canvas");
	canvas.id = "draw";
	ctx = canvas.getContext("2d");
}


var draw = Object.freeze({
	start: start,
	stop: stop,
	add: add,
	show: show$1,
	hide: hide,
	init: init$6
});

let active = false;
let drawing = false;
let cursor = null;

function eventToPosition(e) {
	let rect = nodes[currentIndex].getBoundingClientRect();
	return [e.clientX-rect.left, e.clientY-rect.top].map(x => x/current);
}

function onMouseDown(e) {
	if (!active || current$1 == "overview") { return; }
	drawing = true;
	start(eventToPosition(e));
}

function onMouseUp(e) {
	stop();
	drawing = false;
}

function onMouseMove(e) {
	cursor.style.left = `${e.clientX}px`;
	cursor.style.top = `${e.clientY}px`;

	if (drawing) {
		e.preventDefault(); // no text selection
		add(eventToPosition(e));
	}
}

function onClick(e) {
	if (current$1 != "overview") { return; }

	let index = findIndex(e.target);
	if (index > -1) {
		show(index);
		toggle$1();
	}
}

function toggle() {
	if (!active && current$1 == "overview") { return; }
	active = !active;

	document.body.classList.toggle("cursor", active);
	if (active) {
		document.body.appendChild(cursor);
		show$1(nodes[currentIndex]);
	} else {
		cursor.parentNode.removeChild(cursor);
		hide();
	}
}

function onModeChange(e) {
	if (active && current$1 == "overview") { toggle(); }
}

function onSlideChange(e) {
	if (!active) { return; }
	hide();
	show$1(nodes[currentIndex]);
}

function init$4() {
	cursor = document.createElement("div");
	cursor.id = "cursor";

	window.addEventListener("mousedown", onMouseDown);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("mouseup", onMouseUp);
	window.addEventListener("click", onClick);

	window.addEventListener("mode-change", onModeChange);
	window.addEventListener("slide-change", onSlideChange);
}


var mouse = Object.freeze({
	toggle: toggle,
	init: init$4
});

function onKeyDown(e) {
	switch (e.code) {
		case "Home": show(0); break;
		case "End": show(nodes.length-1); break;

		case "ArrowLeft":
		case "ArrowUp":
		case "PageUp":
		case "Backspace":
			show(currentIndex-1);
		break;

		case "ArrowRight":
		case "ArrowDown":
		case "PageDown":
		case "Space":
			show(currentIndex+1);
		break;

		case "CapsLock": toggle(); break;

		case "Escape": toggle$1(); break;
	}
}

function swipeBy(diff, e) {
	if (e.pointerType == "mouse") { return; }
	show(currentIndex+diff);
}
function onSwipeLeft(e) { swipeBy(+1, e); }
function onSwipeRight(e) { swipeBy(-1, e); }

function init$3() {
	window.addEventListener("keydown", onKeyDown);
	let hammer = new Hammer(window);
	hammer.on("swipeleft", onSwipeLeft);
	hammer.on("swiperight", onSwipeRight);
}


var control = Object.freeze({
	init: init$3
});

function onHashChange(e) {
	show(get());
}

function onSlideChange$1(e) {
	set(currentIndex);
}

function get() {
	if (location.hash) {
		return Number(location.hash.substring(1))-1;
	} else {
		return 0;
	}
}

function set(index) {
	location.hash = (index ? (index+1) : "");
}

function init$7() {
	show(get());

	window.addEventListener("hashchange", onHashChange);
	window.addEventListener("slide-change", onSlideChange$1);
}


var url = Object.freeze({
	init: init$7
});

const title = document.title;

function onSlideChange$2(e) {
	document.title = `(${currentIndex+1}) ${title}`;
}

function init$8() {
	window.addEventListener("slide-change", onSlideChange$2);
}


var title$1 = Object.freeze({
	init: init$8
});

const base = document.currentScript.src;

function makeURL(rel) {
	return new URL(rel, base).href;
}

function initStyles(skin) {
	function loadApp() { return load(makeURL("maslo.css")); }
	function loadSkin() { return skin ? load(makeURL(`skin/${skin}.css`)) : Promise.resolve(); }

	return loadApp().then(loadSkin);
}

function initApp() {
	[scale, control, title$1, mouse, draw, mode, url].forEach(c => c.init());
}

function error(e) {
	console.log(e);
	alert("Error loading the app, see console for more details.");
}

function init(selector) {
	let node = document.querySelector(selector);
	function initSlides() { return init$1(node); }

	let skin = ("skin" in node.dataset ? node.dataset.skin : "dark");
	initStyles(skin).then(initSlides).then(initApp).catch(error);
}

init(document.currentScript.dataset.selector || "template");

}());
