"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[402],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var s=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,s,r=function(e,t){if(null==e)return{};var o,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)o=i[s],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)o=i[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=s.createContext({}),d=function(e){var t=s.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=d(e.components);return s.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=r,f=p["".concat(a,".").concat(h)]||p[h]||c[h]||i;return o?s.createElement(f,n(n({ref:t},u),{},{components:o})):s.createElement(f,n({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var d=2;d<i;d++)n[d]=o[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5309:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=o(7462),r=(o(7294),o(4137));const i={title:"Advanced (low-level) Settings guide",sidebar_position:7},n=void 0,l={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"Advanced (low-level) Settings guide",description:"Previously known as low-level settings, Advanced Settings mostly contain settings that go beyond the average user's competence and don't have application in the everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional options in some corner-case situations or when solving an uncommon problem.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced (low-level) Settings guide",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Common installer errors",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"How to create a dump file",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/dump-file"}},a={},d=[{value:"How to reach Advanced Settings",id:"how-to-reach-advanced-settings",level:2},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Block TCP Fast Open",id:"block-tcp-fast-open",level:3},{value:"Exclude app from filtering by entering the full path",id:"exclude-app-from-filtering-by-entering-the-full-path",level:3},{value:"Enable AdGuard pop-up notifications",id:"enable-adguard-pop-up-notifications",level:3},{value:"Automatically intercept filter subscription URLs",id:"automatically-intercept-filter-subscription-urls",level:3},{value:"Use redirect driver mode",id:"use-redirect-driver-mode",level:3},{value:"Open main window at system start-up",id:"open-main-window-at-system-start-up",level:3},{value:"Filter localhost",id:"filter-localhost",level:3},{value:"Enable HAR writing",id:"enable-har-writing",level:3},{value:"Show QUIC",id:"show-quic",level:3},{value:"Block Java",id:"block-java",level:3},{value:"Action applied to blocked DNS requests",id:"action-applied-to-blocked-dns-requests",level:3},{value:"Custom IPv4 address",id:"custom-ipv4-address",level:3},{value:"Custom IPv6 address",id:"custom-ipv6-address",level:3},{value:"Fallback servers",id:"fallback-servers",level:3},{value:"DNS server timeout period",id:"dns-server-timeout-period",level:3},{value:"List of custom fallback servers",id:"list-of-custom-fallback-servers",level:3},{value:"List of custom bootstrap addresses",id:"list-of-custom-bootstrap-addresses",level:3},{value:"DNS exclusions",id:"dns-exclusions",level:3},{value:"Block ECH",id:"block-ech",level:3},{value:"Enable filtering of secure DNS requests",id:"enable-filtering-of-secure-dns-requests",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Previously known as low-level settings, Advanced Settings mostly contain settings that go beyond the average user's competence and don't have application in the everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional options in some corner-case situations or when solving an uncommon problem."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mindlessly changing ",(0,r.kt)("em",{parentName:"p"},"Advanced Settings")," can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so.")),(0,r.kt)("h2",{id:"how-to-reach-advanced-settings"},"How to reach Advanced Settings"),(0,r.kt)("p",null,"To go to ",(0,r.kt)("em",{parentName:"p"},"Advanced settings"),", in the main windows click ",(0,r.kt)("em",{parentName:"p"},"Settings \u2014> General Settings")," and scroll down to ",(0,r.kt)("em",{parentName:"p"},"Advanced Settings"),". Alternatively, select ",(0,r.kt)("em",{parentName:"p"},"Advanced \u2192 Advanced settings...")," in the tray menu."),(0,r.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,r.kt)("p",null,"Once you open Advanced Settings, you will be presented with the following options:"),(0,r.kt)("h3",{id:"block-tcp-fast-open"},"Block TCP Fast Open"),(0,r.kt)("p",null,"If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser."),(0,r.kt)("h3",{id:"exclude-app-from-filtering-by-entering-the-full-path"},"Exclude app from filtering by entering the full path"),(0,r.kt)("p",null,"If you want AdGuard not to filter any specific application, specify the full path to them and the apps will be excluded from filtering. Separate different paths by semicolons."),(0,r.kt)("h3",{id:"enable-adguard-pop-up-notifications"},"Enable AdGuard pop-up notifications"),(0,r.kt)("p",null,"Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information. You can also use the tray menu to recall the last pop-up notification."),(0,r.kt)("h3",{id:"automatically-intercept-filter-subscription-urls"},"Automatically intercept filter subscription URLs"),(0,r.kt)("p",null,"Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," and alike) and to open a custom filter installation dialog."),(0,r.kt)("h3",{id:"use-redirect-driver-mode"},"Use redirect driver mode"),(0,r.kt)("p",null,"If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering."),(0,r.kt)("p",null,"Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster."),(0,r.kt)("h3",{id:"open-main-window-at-system-start-up"},"Open main window at system start-up"),(0,r.kt)("p",null,"Enable this option to make the main AdGuard window open after the system is loaded. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in ",(0,r.kt)("em",{parentName:"p"},"Settings \u2192 General Settings")),(0,r.kt)("h3",{id:"filter-localhost"},"Filter localhost"),(0,r.kt)("p",null,"If you want AdGuard to filter loopback connections, check the box. This option will always be on if you have AdGuard VPN installed, because otherwise it won't be able to work."),(0,r.kt)("h3",{id:"enable-har-writing"},"Enable HAR writing"),(0,r.kt)("p",null,"This option should be enabled ",(0,r.kt)("strong",{parentName:"p"},"only for debugging purposes"),". If you tick the checkmark, AdGuard will create a file that contains information about all filtered HTTP requests in HAR 1.2 format. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly."),(0,r.kt)("h3",{id:"show-quic"},"Show QUIC"),(0,r.kt)("p",null,"Allows displaying the QUIC protocol records in the filtering log. For blocked requests only."),(0,r.kt)("h3",{id:"block-java"},"Block Java"),(0,r.kt)("p",null,"Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use ",(0,r.kt)("em",{parentName:"p"},"Block Java")," option, Javascript will still be enabled."),(0,r.kt)("h3",{id:"action-applied-to-blocked-dns-requests"},"Action applied to blocked DNS requests"),(0,r.kt)("p",null,"Here you can select the way AdGuard will respond to DNS queries that should be blocked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reply with \u201cRefused\u201d error"),(0,r.kt)("li",{parentName:"ul"},"Reply with \u201cNxDomain\u201d error"),(0,r.kt)("li",{parentName:"ul"},"Reply with a custom IP address")),(0,r.kt)("h3",{id:"custom-ipv4-address"},"Custom IPv4 address"),(0,r.kt)("p",null,"If \u201cCustom IP address\u201d is selected as an action applied to blocked DNS requests, here you should specify the IPv4 address that will be returned in response to blocked \u201cA\u201d requests. If none are specified, AdGuard will reply with the default \u201cRefused\u201d error."),(0,r.kt)("h3",{id:"custom-ipv6-address"},"Custom IPv6 address"),(0,r.kt)("p",null,"If \u201cCustom IP address\u201d is selected as an action applied to blocked DNS requests, here you should specify the IPv6 address that will be returned in response to blocked \u201cAAAA\u201d requests. If none are specified, AdGuard will reply with the default \u201cRefused\u201d error."),(0,r.kt)("h3",{id:"fallback-servers"},"Fallback servers"),(0,r.kt)("p",null,"Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don\u2019t use fallback servers;"),(0,r.kt)("li",{parentName:"ul"},"Use system default servers;"),(0,r.kt)("li",{parentName:"ul"},"Use custom servers.")),(0,r.kt)("h3",{id:"dns-server-timeout-period"},"DNS server timeout period"),(0,r.kt)("p",null,"Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don\u2019t fill in this field or enter an invalid value, the value of 5000 will be used."),(0,r.kt)("h3",{id:"list-of-custom-fallback-servers"},"List of custom fallback servers"),(0,r.kt)("p",null,"If you want AdGuard to use custom fallback servers, list them in this section, one per line."),(0,r.kt)("h3",{id:"list-of-custom-bootstrap-addresses"},"List of custom bootstrap addresses"),(0,r.kt)("p",null,"A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in ",(0,r.kt)("em",{parentName:"p"},"DNS protection"),'. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.'),(0,r.kt)("p",null,"By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used."),(0,r.kt)("h3",{id:"dns-exclusions"},"DNS exclusions"),(0,r.kt)("p",null,"All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app\u2019s settings. Also, DNS blocking rules will not be applied to such requests."),(0,r.kt)("h3",{id:"block-ech"},"Block ECH"),(0,r.kt)("p",null,"If enabled, AdGuard strips Encrypted Client Hello parameters from responses."),(0,r.kt)("h3",{id:"enable-filtering-of-secure-dns-requests"},"Enable filtering of secure DNS requests"),(0,r.kt)("p",null,"When enabled, AdGuard redirects secure DNS requests to the local DNS proxy, in addition to plain DNS requests."))}c.isMDXComponent=!0}}]);