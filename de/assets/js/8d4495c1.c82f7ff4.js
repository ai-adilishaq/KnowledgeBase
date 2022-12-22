"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[905],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={title:"Advanced Settings guide",sidebar_position:9},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/advanced-settings",id:"adguard-for-mac/solving-problems/advanced-settings",title:"Advanced Settings guide",description:"How to reach the Advanced settings",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/advanced-settings.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/advanced-settings",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/advanced-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/advanced-settings.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Advanced Settings guide",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Protect Mail Activity and AdGuard",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/protect-mail-activity"},next:{title:"Features overview",permalink:"/KnowledgeBase/de/adguard-for-android/overview"}},s={},p=[{value:"How to reach the Advanced settings",id:"how-to-reach-the-advanced-settings",level:2},{value:"Advanced settings",id:"advanced-settings",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-reach-the-advanced-settings"},"How to reach the Advanced settings"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changing ",(0,o.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support team has asked you to do it. To go to ",(0,o.kt)("em",{parentName:"p"},"Advanced settings"),", follow this route: the AdGuard icon at the tray menu \u2192 the gear icon \u2192 Advanced \u2192 Advanced settings.")),(0,o.kt)("h2",{id:"advanced-settings"},"Advanced settings"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.domains")),(0,o.kt)("p",null,"The listed domains will be excluded from filtering in ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," mode. Use a comma or line break to separate values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.ports")),(0,o.kt)("p",null,"The listed ports will be excluded from filtering in ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," mode. Use a comma or line break to separate values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.route.exclude")),(0,o.kt)("p",null,"The listed routes will be excluded from filtering in ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," mode. Set routes using an IP address or destination CIDR. Separate values with commas or line breaks."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.http.downgrade.bundleids")),(0,o.kt)("p",null,"Here you can specify a list of applications for which the HTTP/2 protocol will be downgraded to HTTP/1.1 in the ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," filtering mode. The bundle ID should be separated by a comma or a line break."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")),(0,o.kt)("p",null,'Here you can prohibit AdGuard from using the "default route" which is enabled by default in ',(0,o.kt)("em",{parentName:"p"},"Network Extension"),' mode on macOS Monterey. AdGuard uses "default route" to disable iCloud Private Relay and Protect Mail Activity, because it cannot work with them simultaneously.'),(0,o.kt)("p",null,"You will find more information about the problem ",(0,o.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"in this article"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.dns.redirect.exclude.bundleids")),(0,o.kt)("p",null,"Here you can specify a list of applications that make DNS queries directly not via system DNS resolver (for example, some VPN clients or DNS filtering applications). DNS filtering will be disabled for them in the ",(0,o.kt)("em",{parentName:"p"},"Network Extension mode"),". The bundle IDs should be separated by a comma or line break."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.https.ocsp.check")),(0,o.kt)("p",null,"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you enable HTTPS certificate revocation checking."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.filtering.localnetwork")),(0,o.kt)("p",null,"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you enable local network filtering."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"network.filtering.localhost")),(0,o.kt)("p",null,"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you enable LoopBack filtering."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy")),(0,o.kt)("p",null,"In this string, you can specify a proxy server for upstream connections. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SOCKS5 proxy with authentication \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"socks5://username:password@proxy.example.org:1080")),(0,o.kt)("li",{parentName:"ul"},"Local HTTP proxy without authentication \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3128"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")),(0,o.kt)("p",null,"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you enable redirection of UDP traffic through the local server in SOCKS5 mode. Note: If your SOCKS5 server does not support the UDP protocol, enabling this setting will cause your Internet connection to fail."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.bootstrap.ips")),(0,o.kt)("p",null,"Here you can enter the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.ips")),(0,o.kt)("p",null,"Here you can specify a list of IP addresses of DNS servers that will be used as backups in case the encrypted DNS server fails to respond."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.detect.search.domains")),(0,o.kt)("p",null,"This option enables automatic detection of the local network domain, which will be automatically redirected to the fallback DNS server instead of the main DNS server."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.domains")),(0,o.kt)("p",null,"Here you can list domains for which the fallback DNS server will be used instead of the main DNS server."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")),(0,o.kt)("p",null,"Here you can specify the type of DNS server response to blocked requests, corresponding to ad-blocker-style rules."),(0,o.kt)("p",null,"0 \u2014 respond with REFUSED 1 \u2014 respond with NXDOMAIN 2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv6.address")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode")),(0,o.kt)("p",null,"Here you can specify the type of DNS server response to blocked requests, corresponding to hosts rules:"),(0,o.kt)("p",null,"0 \u2014 respond with REFUSED 1 \u2014 respond with NXDOMAIN 2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv6.address")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv4.address")),(0,o.kt)("p",null,'Here you can specify the IPv4 address that will be returned in response to blocked "A" requests when ',(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode"),' is set to the response type "ADDRESS".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv6.address")),(0,o.kt)("p",null,'Here you can specify the IPv6 address that will be returned in response to blocked "AAAA" requests when ',(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode"),' is set to the response type "ADDRESS".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.block.AAAA.requests")),(0,o.kt)("p",null,"Here you can enable IPv6 DNS query blocking."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocked.response.TTL.in.seconds")),(0,o.kt)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.userscript")),(0,o.kt)("p",null,"Activate this feature if you want AdGuard to automatically intercept the URLs of userscripts and open the installation window."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.filter")),(0,o.kt)("p",null,"Activate this feature if you want AdGuard to automatically intercept subscription URLs (for example, abp:subscribe, etc.) and open the custom filter setup window."))}c.isMDXComponent=!0}}]);