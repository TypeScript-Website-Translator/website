(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();var O,u,ue,A,Z,ve,G,M={},fe=[],Ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(a,e){for(var n in e)a[n]=e[n];return a}function de(a){var e=a.parentNode;e&&e.removeChild(a)}function He(a,e,n){var i,o,t,l={};for(t in e)t=="key"?i=e[t]:t=="ref"?o=e[t]:l[t]=e[t];if(arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):n),typeof a=="function"&&a.defaultProps!=null)for(t in a.defaultProps)l[t]===void 0&&(l[t]=a.defaultProps[t]);return E(a,l,i,o,null)}function E(a,e,n,i,o){var t={type:a,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++ue};return o==null&&u.vnode!=null&&u.vnode(t),t}function T(a){return a.children}function $(a,e){this.props=a,this.context=e}function P(a,e){if(e==null)return a.__?P(a.__,a.__.__k.indexOf(a)+1):null;for(var n;e<a.__k.length;e++)if((n=a.__k[e])!=null&&n.__e!=null)return n.__e;return typeof a.type=="function"?P(a):null}function he(a){var e,n;if((a=a.__)!=null&&a.__c!=null){for(a.__e=a.__c.base=null,e=0;e<a.__k.length;e++)if((n=a.__k[e])!=null&&n.__e!=null){a.__e=a.__c.base=n.__e;break}return he(a)}}function Q(a){(!a.__d&&(a.__d=!0)&&A.push(a)&&!U.__r++||Z!==u.debounceRendering)&&((Z=u.debounceRendering)||ve)(U)}function U(){var a,e,n,i,o,t,l,m;for(A.sort(G);a=A.shift();)a.__d&&(e=A.length,i=void 0,o=void 0,l=(t=(n=a).__v).__e,(m=n.__P)&&(i=[],(o=S({},t)).__v=t.__v+1,J(m,t,o,n.__n,m.ownerSVGElement!==void 0,t.__h!=null?[l]:null,i,l??P(t),t.__h),be(i,t),t.__e!=l&&he(t)),A.length>e&&A.sort(G));U.__r=0}function pe(a,e,n,i,o,t,l,m,_,v){var r,h,c,s,f,C,p,g=i&&i.__k||fe,b=g.length;for(n.__k=[],r=0;r<e.length;r++)if((s=n.__k[r]=(s=e[r])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?E(null,s,null,null,s):Array.isArray(s)?E(T,{children:s},null,null,null):s.__b>0?E(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(c=g[r])===null||c&&s.key==c.key&&s.type===c.type)g[r]=void 0;else for(h=0;h<b;h++){if((c=g[h])&&s.key==c.key&&s.type===c.type){g[h]=void 0;break}c=null}J(a,s,c=c||M,o,t,l,m,_,v),f=s.__e,(h=s.ref)&&c.ref!=h&&(p||(p=[]),c.ref&&p.push(c.ref,null,s),p.push(h,s.__c||f,s)),f!=null?(C==null&&(C=f),typeof s.type=="function"&&s.__k===c.__k?s.__d=_=Ne(s,_,a):_=ge(a,s,c,g,f,_),typeof n.type=="function"&&(n.__d=_)):_&&c.__e==_&&_.parentNode!=a&&(_=P(c))}for(n.__e=C,r=b;r--;)g[r]!=null&&(typeof n.type=="function"&&g[r].__e!=null&&g[r].__e==n.__d&&(n.__d=ye(i).nextSibling),we(g[r],g[r]));if(p)for(r=0;r<p.length;r++)ke(p[r],p[++r],p[++r])}function Ne(a,e,n){for(var i,o=a.__k,t=0;o&&t<o.length;t++)(i=o[t])&&(i.__=a,e=typeof i.type=="function"?Ne(i,e,n):ge(n,i,i,o,i.__e,e));return e}function ge(a,e,n,i,o,t){var l,m,_;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=t||o.parentNode==null)e:if(t==null||t.parentNode!==a)a.appendChild(o),l=null;else{for(m=t,_=0;(m=m.nextSibling)&&_<i.length;_+=1)if(m==o)break e;a.insertBefore(o,t),l=t}return l!==void 0?l:o.nextSibling}function ye(a){var e,n,i;if(a.type==null||typeof a.type=="string")return a.__e;if(a.__k){for(e=a.__k.length-1;e>=0;e--)if((n=a.__k[e])&&(i=ye(n)))return i}return null}function Pe(a,e,n,i,o){var t;for(t in n)t==="children"||t==="key"||t in e||z(a,t,null,n[t],i);for(t in e)o&&typeof e[t]!="function"||t==="children"||t==="key"||t==="value"||t==="checked"||n[t]===e[t]||z(a,t,e[t],n[t],i)}function ee(a,e,n){e[0]==="-"?a.setProperty(e,n??""):a[e]=n==null?"":typeof n!="number"||Ce.test(e)?n:n+"px"}function z(a,e,n,i,o){var t;e:if(e==="style")if(typeof n=="string")a.style.cssText=n;else{if(typeof i=="string"&&(a.style.cssText=i=""),i)for(e in i)n&&e in n||ee(a.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||ee(a.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")t=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in a?e.toLowerCase().slice(2):e.slice(2),a.l||(a.l={}),a.l[e+t]=n,n?i||a.addEventListener(e,t?ne:ae,t):a.removeEventListener(e,t?ne:ae,t);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in a)try{a[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?a.removeAttribute(e):a.setAttribute(e,n))}}function ae(a){return this.l[a.type+!1](u.event?u.event(a):a)}function ne(a){return this.l[a.type+!0](u.event?u.event(a):a)}function J(a,e,n,i,o,t,l,m,_){var v,r,h,c,s,f,C,p,g,b,L,H,Y,j,I,y=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(_=n.__h,m=e.__e=n.__e,e.__h=null,t=[m]),(v=u.__b)&&v(e);try{e:if(typeof y=="function"){if(p=e.props,g=(v=y.contextType)&&i[v.__c],b=v?g?g.props.value:v.__:i,n.__c?C=(r=e.__c=n.__c).__=r.__E:("prototype"in y&&y.prototype.render?e.__c=r=new y(p,b):(e.__c=r=new $(p,b),r.constructor=y,r.render=Le),g&&g.sub(r),r.props=p,r.state||(r.state={}),r.context=b,r.__n=i,h=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,y.getDerivedStateFromProps(p,r.__s))),c=r.props,s=r.state,r.__v=e,h)y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(y.getDerivedStateFromProps==null&&p!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,b),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,b)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(r.props=p,r.state=r.__s,r.__d=!1),r.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(x){x&&(x.__=e)}),L=0;L<r._sb.length;L++)r.__h.push(r._sb[L]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,b),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,s,f)})}if(r.context=b,r.props=p,r.__P=a,H=u.__r,Y=0,"prototype"in y&&y.prototype.render){for(r.state=r.__s,r.__d=!1,H&&H(e),v=r.render(r.props,r.state,r.context),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[]}else do r.__d=!1,H&&H(e),v=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Y<25);r.state=r.__s,r.getChildContext!=null&&(i=S(S({},i),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(f=r.getSnapshotBeforeUpdate(c,s)),I=v!=null&&v.type===T&&v.key==null?v.props.children:v,pe(a,Array.isArray(I)?I:[I],e,n,i,o,t,l,m,_),r.base=e.__e,e.__h=null,r.__h.length&&l.push(r),C&&(r.__E=r.__=null),r.__e=!1}else t==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Te(n.__e,e,n,i,o,t,l,_);(v=u.diffed)&&v(e)}catch(x){e.__v=null,(_||t!=null)&&(e.__e=m,e.__h=!!_,t[t.indexOf(m)]=null),u.__e(x,e,n)}}function be(a,e){u.__c&&u.__c(e,a),a.some(function(n){try{a=n.__h,n.__h=[],a.some(function(i){i.call(n)})}catch(i){u.__e(i,n.__v)}})}function Te(a,e,n,i,o,t,l,m){var _,v,r,h=n.props,c=e.props,s=e.type,f=0;if(s==="svg"&&(o=!0),t!=null){for(;f<t.length;f++)if((_=t[f])&&"setAttribute"in _==!!s&&(s?_.localName===s:_.nodeType===3)){a=_,t[f]=null;break}}if(a==null){if(s===null)return document.createTextNode(c);a=o?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),t=null,m=!1}if(s===null)h===c||m&&a.data===c||(a.data=c);else{if(t=t&&O.call(a.childNodes),v=(h=n.props||M).dangerouslySetInnerHTML,r=c.dangerouslySetInnerHTML,!m){if(t!=null)for(h={},f=0;f<a.attributes.length;f++)h[a.attributes[f].name]=a.attributes[f].value;(r||v)&&(r&&(v&&r.__html==v.__html||r.__html===a.innerHTML)||(a.innerHTML=r&&r.__html||""))}if(Pe(a,c,h,o,m),r)e.__k=[];else if(f=e.props.children,pe(a,Array.isArray(f)?f:[f],e,n,i,o&&s!=="foreignObject",t,l,t?t[0]:n.__k&&P(n,0),m),t!=null)for(f=t.length;f--;)t[f]!=null&&de(t[f]);m||("value"in c&&(f=c.value)!==void 0&&(f!==a.value||s==="progress"&&!f||s==="option"&&f!==h.value)&&z(a,"value",f,h.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==a.checked&&z(a,"checked",f,h.checked,!1))}return a}function ke(a,e,n){try{typeof a=="function"?a(e):a.current=e}catch(i){u.__e(i,n)}}function we(a,e,n){var i,o;if(u.unmount&&u.unmount(a),(i=a.ref)&&(i.current&&i.current!==a.__e||ke(i,null,e)),(i=a.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){u.__e(t,e)}i.base=i.__P=null,a.__c=void 0}if(i=a.__k)for(o=0;o<i.length;o++)i[o]&&we(i[o],e,n||typeof a.type!="function");n||a.__e==null||de(a.__e),a.__=a.__e=a.__d=void 0}function Le(a,e,n){return this.constructor(a,n)}function je(a,e,n){var i,o,t;u.__&&u.__(a,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,t=[],J(e,a=(!i&&n||e).__k=He(T,null,[a]),o||M,M,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?O.call(e.childNodes):null,t,!i&&n?n:o?o.__e:e.firstChild,i),be(t,a)}O=fe.slice,u={__e:function(a,e,n,i){for(var o,t,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((t=o.constructor)&&t.getDerivedStateFromError!=null&&(o.setState(t.getDerivedStateFromError(a)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(a,i||{}),l=o.__d),l)return o.__E=o}catch(m){a=m}throw a}},ue=0,$.prototype.setState=function(a,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof a=="function"&&(a=a(S({},n),this.props)),a&&S(n,a),a!=null&&this.__v&&(e&&this._sb.push(e),Q(this))},$.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),Q(this))},$.prototype.render=T,A=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(a,e){return a.__v.__b-e.__v.__b},U.__r=0;const w={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"аҧсуа бызшәа"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"አማርኛ"},an:{name:"Aragonese",nativeName:"aragonés"},ar:{name:"Arabic",nativeName:"اَلْعَرَبِيَّةُ"},as:{name:"Assamese",nativeName:"অসমীয়া"},av:{name:"Avaric",nativeName:"авар мацӀ"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"azərbaycan dili"},ba:{name:"Bashkir",nativeName:"башҡорт теле"},be:{name:"Belarusian",nativeName:"беларуская мова"},bg:{name:"Bulgarian",nativeName:"български език"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"বাংলা"},bo:{name:"Tibetan",nativeName:"བོད་ཡིག"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"Català"},ce:{name:"Chechen",nativeName:"нохчийн мотт"},ch:{name:"Chamorro",nativeName:"Chamoru"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"ᓀᐦᐃᔭᐍᐏᐣ"},cs:{name:"Czech",nativeName:"čeština"},cu:{name:"Old Church Slavonic",nativeName:"ѩзыкъ словѣньскъ"},cv:{name:"Chuvash",nativeName:"чӑваш чӗлхи"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"ދިވެހި"},dz:{name:"Dzongkha",nativeName:"རྫོང་ཁ"},ee:{name:"Ewe",nativeName:"Eʋegbe"},el:{name:"Greek",nativeName:"Ελληνικά"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Español"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"فارسی"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"vosa Vakaviti"},fo:{name:"Faroese",nativeName:"føroyskt"},fr:{name:"French",nativeName:"Français"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"Gàidhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaraní",nativeName:"Avañe'ẽ"},gu:{name:"Gujarati",nativeName:"ગુજરાતી"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"هَوُسَ"},he:{name:"Hebrew",nativeName:"עברית"},hi:{name:"Hindi",nativeName:"हिन्दी"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"Hrvatski"},ht:{name:"Haitian",nativeName:"Kreyòl ayisyen"},hu:{name:"Hungarian",nativeName:"magyar"},hy:{name:"Armenian",nativeName:"Հայերեն"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Bahasa Indonesia"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"Asụsụ Igbo"},ii:{name:"Nuosu",nativeName:"ꆈꌠ꒿ Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"Iñupiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"Íslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"ᐃᓄᒃᑎᑐᑦ"},ja:{name:"Japanese",nativeName:"日本語"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"ქართული"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"Gĩkũyũ"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"қазақ тілі"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"ខេមរភាសា"},kn:{name:"Kannada",nativeName:"ಕನ್ನಡ"},ko:{name:"Korean",nativeName:"한국어"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"कश्मीरी"},ku:{name:"Kurdish",nativeName:"Kurdî"},kv:{name:"Komi",nativeName:"коми кыв"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"Кыргызча"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"Lëtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Lingála"},lo:{name:"Lao",nativeName:"ພາສາລາວ"},lt:{name:"Lithuanian",nativeName:"lietuvių kalba"},lu:{name:"Luba-Katanga",nativeName:"Kiluba"},lv:{name:"Latvian",nativeName:"latviešu valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M̧ajeļ"},mi:{name:"Māori",nativeName:"te reo Māori"},mk:{name:"Macedonian",nativeName:"македонски јазик"},ml:{name:"Malayalam",nativeName:"മലയാളം"},mn:{name:"Mongolian",nativeName:"Монгол хэл"},mr:{name:"Marathi",nativeName:"मराठी"},ms:{name:"Malay",nativeName:"Bahasa Melayu"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"ဗမာစာ"},na:{name:"Nauru",nativeName:"Dorerin Naoero"},nb:{name:"Norwegian Bokmål",nativeName:"Norsk bokmål"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"नेपाली"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Diné bizaad"},ny:{name:"Chichewa",nativeName:"chiCheŵa"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"ᐊᓂᔑᓈᐯᒧᐎᓐ"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"ଓଡ଼ିଆ"},os:{name:"Ossetian",nativeName:"ирон æвзаг"},pa:{name:"Panjabi",nativeName:"ਪੰਜਾਬੀ"},pi:{name:"Pāli",nativeName:"पाऴि"},pl:{name:"Polish",nativeName:"Polski"},ps:{name:"Pashto",nativeName:"پښتو"},pt:{name:"Portuguese",nativeName:"Português"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"Română"},ru:{name:"Russian",nativeName:"Русский"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"संस्कृतम्"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"सिन्धी"},se:{name:"Northern Sami",nativeName:"Davvisámegiella"},sg:{name:"Sango",nativeName:"yângâ tî sängö"},si:{name:"Sinhala",nativeName:"සිංහල"},sk:{name:"Slovak",nativeName:"slovenčina"},sl:{name:"Slovenian",nativeName:"slovenščina"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"српски језик"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"Svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"தமிழ்"},te:{name:"Telugu",nativeName:"తెలుగు"},tg:{name:"Tajik",nativeName:"тоҷикӣ"},th:{name:"Thai",nativeName:"ไทย"},ti:{name:"Tigrinya",nativeName:"ትግርኛ"},tk:{name:"Turkmen",nativeName:"Türkmençe"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"Türkçe"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"татар теле"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"ئۇيغۇرچە‎"},uk:{name:"Ukrainian",nativeName:"Українська"},ur:{name:"Urdu",nativeName:"اردو"},uz:{name:"Uzbek",nativeName:"Ўзбек"},ve:{name:"Venda",nativeName:"Tshivenḓa"},vi:{name:"Vietnamese",nativeName:"Tiếng Việt"},vo:{name:"Volapük",nativeName:"Volapük"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"ייִדיש"},yo:{name:"Yoruba",nativeName:"Yorùbá"},za:{name:"Zhuang",nativeName:"Saɯ cueŋƅ"},zh:{name:"Chinese",nativeName:"中文"},zu:{name:"Zulu",nativeName:"isiZulu"}};class F{static getLanguages(e=[]){return e.map(n=>({code:n,name:F.getName(n),nativeName:F.getNativeName(n)}))}static getName(e){return F.validate(e)?w[e].name:""}static getAllNames(){return Object.values(w).map(e=>e.name)}static getNativeName(e){return F.validate(e)?w[e].nativeName:""}static getAllNativeNames(){return Object.values(w).map(e=>e.nativeName)}static getCode(e){return Object.keys(w).find(i=>{const o=w[i];return o.name.toLowerCase()===e.toLowerCase()||o.nativeName.toLowerCase()===e.toLowerCase()})||""}static getAllCodes(){return Object.keys(w)}static validate(e){return w.hasOwnProperty(e)}}const Ie="_path_2hnjd_1",xe="_segment_2hnjd_8",te={path:Ie,segment:xe};var Ee=0;function d(a,e,n,i,o,t){var l,m,_={};for(m in e)m=="ref"?l=e[m]:_[m]=e[m];var v={type:a,props:_,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ee,__source:o,__self:t};if(typeof a=="function"&&(l=a.defaultProps))for(m in l)_[m]===void 0&&(_[m]=l[m]);return u.vnode&&u.vnode(v),v}function $e({path:a,disabled:e=!1}){return d("div",{class:te.path,children:a.split("/").map((n,i,o)=>[!!i&&d("span",{children:"/"}),d("span",{class:te.segment,children:n})])})}const De="_header_1j58w_1",Be={header:De};function Me({disabled:a=!1}){function e(){return F.getAllCodes().filter(n=>n!=="en").map(n=>[n,F.getName(n)]).sort(([n,i],[o,t])=>i.localeCompare(t))}return d("header",{class:Be.header,children:[d("span",{children:"TypeScript Website Translator"}),d("span",{children:"English (en)"}),d("span",{children:"→"}),d("select",{disabled:a,children:e().map(([n,i])=>d("option",{value:n,children:[i," (",n,")"]}))}),d("button",{disabled:a,children:"View Source"}),d($e,{path:"foo/bar-baz/qux",disabled:a})]})}var V={},Ue={get exports(){return V},set exports(a){V=a}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var e={}.hasOwnProperty;function n(){for(var i=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var l=typeof t;if(l==="string"||l==="number")i.push(t);else if(Array.isArray(t)){if(t.length){var m=n.apply(null,t);m&&i.push(m)}}else if(l==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){i.push(t.toString());continue}for(var _ in t)e.call(t,_)&&t[_]&&i.push(_)}}}return i.join(" ")}a.exports?(n.default=n,a.exports=n):window.classNames=n})()})(Ue);const ze=V;var X,N,W,ie,K=0,Se=[],D=[],re=u.__b,oe=u.__r,_e=u.diffed,se=u.__c,le=u.unmount;function Ae(a,e){u.__h&&u.__h(N,a,K||e),K=0;var n=N.__H||(N.__H={__:[],__h:[]});return a>=n.__.length&&n.__.push({__V:D}),n.__[a]}function q(a){return K=1,Ke(Fe,a)}function Ke(a,e,n){var i=Ae(X++,2);if(i.t=a,!i.__c&&(i.__=[n?n(e):Fe(void 0,e),function(m){var _=i.__N?i.__N[0]:i.__[0],v=i.t(_,m);_!==v&&(i.__N=[v,i.__[1]],i.__c.setState({}))}],i.__c=N,!N.u)){var o=function(m,_,v){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter(function(c){return c.__c});if(r.every(function(c){return!c.__N}))return!t||t.call(this,m,_,v);var h=!1;return r.forEach(function(c){if(c.__N){var s=c.__[0];c.__=c.__N,c.__N=void 0,s!==c.__[0]&&(h=!0)}}),!(!h&&i.__c.props===m)&&(!t||t.call(this,m,_,v))};N.u=!0;var t=N.shouldComponentUpdate,l=N.componentWillUpdate;N.componentWillUpdate=function(m,_,v){if(this.__e){var r=t;t=void 0,o(m,_,v),t=r}l&&l.call(this,m,_,v)},N.shouldComponentUpdate=o}return i.__N||i.__}function me(a){return K=5,Oe(function(){return{current:a}},[])}function Oe(a,e){var n=Ae(X++,7);return Ve(n.__H,e)?(n.__V=a(),n.i=e,n.__h=a,n.__V):n.__}function We(){for(var a;a=Se.shift();)if(a.__P&&a.__H)try{a.__H.__h.forEach(B),a.__H.__h.forEach(R),a.__H.__h=[]}catch(e){a.__H.__h=[],u.__e(e,a.__v)}}u.__b=function(a){N=null,re&&re(a)},u.__r=function(a){oe&&oe(a),X=0;var e=(N=a.__c).__H;e&&(W===N?(e.__h=[],N.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=D,n.__N=n.i=void 0})):(e.__h.forEach(B),e.__h.forEach(R),e.__h=[])),W=N},u.diffed=function(a){_e&&_e(a);var e=a.__c;e&&e.__H&&(e.__H.__h.length&&(Se.push(e)!==1&&ie===u.requestAnimationFrame||((ie=u.requestAnimationFrame)||Ge)(We)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==D&&(n.__=n.__V),n.i=void 0,n.__V=D})),W=N=null},u.__c=function(a,e){e.some(function(n){try{n.__h.forEach(B),n.__h=n.__h.filter(function(i){return!i.__||R(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],u.__e(i,n.__v)}}),se&&se(a,e)},u.unmount=function(a){le&&le(a);var e,n=a.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{B(i)}catch(o){e=o}}),n.__H=void 0,e&&u.__e(e,n.__v))};var ce=typeof requestAnimationFrame=="function";function Ge(a){var e,n=function(){clearTimeout(i),ce&&cancelAnimationFrame(e),setTimeout(a)},i=setTimeout(n,100);ce&&(e=requestAnimationFrame(n))}function B(a){var e=N,n=a.__c;typeof n=="function"&&(a.__c=void 0,n()),N=e}function R(a){var e=N;a.__c=a.__(),N=e}function Ve(a,e){return!a||a.length!==e.length||e.some(function(n,i){return n!==a[i]})}function Fe(a,e){return typeof e=="function"?e(a):e}const qe="_dragFileArea_j5jrv_1",Re="_browseFilesText_j5jrv_15",Je="_uploadFileIcon_j5jrv_19",Xe="_instructions_j5jrv_23",Ye="_alternativeInstructions_j5jrv_29",k={dragFileArea:qe,"drag-file-area-hover":"_drag-file-area-hover_j5jrv_12",browseFilesText:Re,uploadFileIcon:Je,instructions:Xe,alternativeInstructions:Ye},Ze="/website/master/assets/upload-file-icon-bb0ab46a.svg";function Qe({onFileUploaded:a}){const e=me(null),n=me(null),[i,o]=q(!1),t=_=>{_.preventDefault(),_.stopPropagation()},l=_=>{var v;(v=e.current)==null||v.classList.add(k.dragFileAreaHover)},m=_=>{var v;(v=e.current)==null||v.classList.remove(k.dragFileAreaHover)};return d("div",{class:k.formContainer,children:d("label",{class:ze(k.dragFileArea,{[k.dragFileAreaHover]:i}),ref:e,onDrag:_=>{t(_)},onDragStart:_=>{t(_)},onDragOver:_=>{t(_),l()},onDragEnter:_=>{t(_),l()},onDragLeave:_=>{t(_),m()},onDragEnd:_=>{t(_),m()},onDrop:_=>{t(_),m()},children:[d("img",{class:k.uploadFileIcon,src:Ze,alt:"Upload Folder"}),d("p",{class:k.instructions,children:"Drag & Drop your folder here"}),"or",d("p",{class:k.alternativeInstructions,children:[" ",d("u",{class:k.browseFilesText,children:"click here"})," ","to browser for a folder"]}),d("input",{class:k.fileInput,type:"file",webkitdirectory:!0,ref:n,hidden:!0,onChange:()=>{}})]})})}const ea="_spacer_1lfqk_1",aa={spacer:ea};function na({}){const[a,e]=q(!1),[n,i]=q([]),o=t=>{e(!0),i(t)};return a?d("div",{children:[d("h2",{children:"Uploaded Files"}),d("ul",{children:n.map(t=>d("li",{children:t.name},t.name))})]}):d("div",{class:aa.spacer,children:d(Qe,{onFileUploaded:o})})}function ta(){return d(T,{children:[d(Me,{disabled:!0}),d(na,{}),!1,!1,!1]})}je(d(ta,{}),document.getElementById("app"));
