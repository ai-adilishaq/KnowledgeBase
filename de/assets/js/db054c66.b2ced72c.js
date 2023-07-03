"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9536],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"Certificate installation in a Secure folder",sidebar_position:13},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/secure-folder",id:"adguard-for-android/solving-problems/secure-folder",title:"Certificate installation in a Secure folder",description:"If you are using the Secure folder on your Android(this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is that the Secure folder has its own space where the certificates are stored. However, if you do everything according to the instructions described here, the certificate will be installed into the main memory and will play no role for your ad blocker in the Secure folder. To solve this problem and install the certificate for your AdGuard for Android into the Secure folder's storage, please follow these instructions:",source:"@site/docs/adguard-for-android/solving-problems/secure-folder.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/secure-folder",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/secure-folder",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/secure-folder.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Certificate installation in a Secure folder",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/https-certificate-for-rooted"},next:{title:"Problems caused by multiple user profiles",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/multiple-profiles-issue"}},s={},d=[],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you are using ",(0,n.kt)("a",{parentName:"p",href:"https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/"},"the ",(0,n.kt)("em",{parentName:"a"},"Secure folder")," on your Android"),"(this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is that the ",(0,n.kt)("em",{parentName:"p"},"Secure folder")," has its own space where the certificates are stored. However, if you do everything according to the instructions ",(0,n.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"described here"),", the certificate will be installed into the main memory and will play no role for your ad blocker in the ",(0,n.kt)("em",{parentName:"p"},"Secure folder"),". To solve this problem and install the certificate for your AdGuard for Android into the ",(0,n.kt)("em",{parentName:"p"},"Secure folder's")," storage, please follow these instructions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After installing the app and connecting the VPN, tap ",(0,n.kt)("em",{parentName:"li"},"Turn on")," next to the ",(0,n.kt)("em",{parentName:"li"},"HTTPS filtering is off")," message."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Save it now")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Allow"),"."),(0,n.kt)("li",{parentName:"ol"},"Save the certificate (at this stage, you can rename it to make it easier to find)."),(0,n.kt)("li",{parentName:"ol"},"After the ",(0,n.kt)("em",{parentName:"li"},"How to install a certificate?")," popup appears, DO NOT tap ",(0,n.kt)("em",{parentName:"li"},"Open Settings"),"."),(0,n.kt)("li",{parentName:"ol"},"Minimize the app and go to the secure folder."),(0,n.kt)("li",{parentName:"ol"},"Tap the three-dot menu and go to additional security settings."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("em",{parentName:"li"},"Install from memory")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"CA certificate")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Install anyway")," \u2192 Enter a graphic key/password/fingerprint \u2192 Find and select the saved certificate."),(0,n.kt)("li",{parentName:"ol"},'Return to the AdGuard app and close the "How to install a certificate?" popup by tapping the cross button.'),(0,n.kt)("li",{parentName:"ol"},"Done! The certificate has been installed.")))}p.isMDXComponent=!0}}]);