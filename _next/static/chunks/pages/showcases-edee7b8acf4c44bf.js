(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{3780:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcases",function(){return t(7320)}])},487:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var l=t(5893),s=t(5582),r=t(6886),o=t(7183),n=t.n(o);function i(e){return e.item,(0,l.jsx)(r.ZP,{container:!0,className:"".concat(n().Footer),children:(0,l.jsx)(s.Z,{maxWidth:"xl",children:(0,l.jsx)("p",{children:"Copyright \xa9 2023 @ksin8909"})})})}},9339:function(e,a,t){"use strict";t.d(a,{Z:function(){return N}});var l=t(5893),s=t(7294),r=t(1664),o=t.n(r),n=t(1163),i=t(2293),c=t(7357),m=t(8815),g=t(1519),p=t(2873),A=t(3946),f=t(8462),u=t(1700),h=t(8619),d=t(9953),b=t(155),j=t(5861),x=t(3321),S=t(3795),w=t(8298),k=t(7814),y=t(9417),C=t(3636);t(6656);var I=JSON.parse('[{"title":"DAPP","url":"DAPP"},{"title":"Effect","url":"Effect"},{"title":"Full Stack","url":"Full Stack"},{"title":"Mobile","url":"Mobile"}]'),T=t(8402),D=t.n(T);function R(e){let{children:a,window:t}=e,l=e.isHome,r=(0,w.Z)({disableHysteresis:!0,threshold:0,target:t?t():void 0});return s.cloneElement(a,{className:r?D().TriggerTopbar:l?D().HomeTopbar:D().PageTopbar})}function N(e){let{locale:a,locales:t,asPath:r}=(0,n.useRouter)(),{window:w}=e,[C,T]=s.useState(!1),N=e.isHome,L=()=>{T(e=>!e)},F=(0,l.jsxs)(c.Z,{onClick:L,sx:{textAlign:"center"},children:[(0,l.jsx)(j.Z,{variant:"h6",sx:{my:2},children:"Showcase"}),(0,l.jsx)(g.Z,{}),(0,l.jsx)(f.Z,{children:I.map((e,a)=>(0,l.jsx)(u.ZP,{disablePadding:!0,children:(0,l.jsx)(h.Z,{sx:{textAlign:"center"},children:(0,l.jsx)(d.Z,{primary:e.title})})},a))})]});return(0,l.jsx)(s.Fragment,{children:(0,l.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,l.jsx)(m.ZP,{}),(0,l.jsx)(R,{...e,children:(0,l.jsx)(i.Z,{component:"nav",elevation:0,className:"".concat(N?D().HomeTopbar:D().PageTopbar),children:(0,l.jsxs)(b.Z,{children:[(0,l.jsx)(A.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:L,sx:{mr:2,display:{sm:"none"}},children:(0,l.jsx)(k.G,{icon:y.xiG})}),(0,l.jsxs)(S.Z,{component:o(),href:"/",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(k.G,{icon:y.Krp,className:D().TopbarIcon}),(0,l.jsx)(j.Z,{variant:"h6",component:"div",sx:{flexGrow:1,ml:1,fontWeight:"bold",display:{xs:"none",sm:"block"}},children:"Showcase"})]}),(0,l.jsx)(c.Z,{sx:{ml:"auto",display:{xs:"none",sm:"block"}},children:I.map((e,a)=>(0,l.jsx)(x.Z,{sx:{color:"#fff"},className:"button-rounded",component:o(),href:"/showcases/?category=".concat(e.url),children:e.title},a))})]})})}),(0,l.jsx)(c.Z,{component:"nav",children:(0,l.jsx)(p.ZP,{container:void 0!==w?()=>w().document.body:void 0,variant:"temporary",open:C,onClose:L,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:360}},children:F})}),(0,l.jsx)(c.Z,{component:"main",children:(0,l.jsx)(b.Z,{})})]})})}C.vc.autoAddCss=!1},7320:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Z}});var l=t(5893),s=t(7294),r=t(9008),o=t.n(r),n=t(1664),i=t.n(n),c=t(9332),m=t(7357),g=t(5582),p=t(6886),A=t(2963),f=t(5861),u=t(4421),h=t(8895),d=t(2797),b=t(7814),j=t(9417),x=t(3636);t(6656);var S=t(9339),w=t(487),k=t(1163),y=t(7918),C=t(1233),I=t(5496),T=t.n(I);function D(e){let{locale:a,locales:t,asPath:r}=(0,k.useRouter)(),o=e.title,n=e.options,c=e.category,g=e.tag,[A,u]=(0,s.useState)(""),[h,d]=(0,s.useState)();return(0,l.jsx)(C.Z,{direction:"row",spacing:2,sx:{mt:1},children:(0,l.jsxs)(p.ZP,{container:!0,children:[(0,l.jsx)(p.ZP,{item:!0,xs:12,sm:2,md:1,sx:{display:"flex",alignItems:"center"},children:(0,l.jsx)(f.Z,{variant:"h6",component:"h6",className:"".concat(T().Title),children:o})}),(0,l.jsx)(p.ZP,{item:!0,xs:12,sm:10,md:11,children:(0,l.jsx)(m.Z,{sx:{overflow:"auto",whiteSpace:"nowrap"},children:n.map((e,a)=>(0,l.jsx)(y.Z,{label:e.option,component:i(),href:function(e){let a="";switch(o){case"Category":a="/showcases/?category=".concat(e,"&tag=").concat(g);case"Tag":a="/showcases/?category=".concat(c,"&tag=").concat(e);default:a=""}return a}(e.option),className:"\n                                            ".concat(T().Options,"\n                                            ").concat("Category"===o&&e.option===c?T().Active:null,"\n                                            ").concat("Tag"===o&&e.option===g?T().Active:null,"\n                                        "),clickable:!0},a))})})]})})}var R=t(6242),N=t(4267),L=t(3965),F=t(7538),B=t.n(F);function P(e){let a=e.item;return(0,l.jsx)(R.Z,{className:"".concat(B().Cardbox),children:(0,l.jsx)(i(),{href:a.Url,target:"_blank",children:(0,l.jsxs)(m.Z,{className:"".concat(B().CardboxOverlayContainer),children:[(0,l.jsx)(L.Z,{component:"img",alt:a.Name,image:"/showcase/".concat(a.Image)}),(0,l.jsx)(m.Z,{className:"".concat(B().CardboxOverlay),children:(0,l.jsxs)(m.Z,{className:"".concat(B().CardboxOverlayText),children:[(0,l.jsx)(f.Z,{gutterBottom:!0,sx:{pb:2},className:"".concat(B().CardboxOverlayTextTitle),children:a.Name}),(0,l.jsx)(f.Z,{gutterBottom:!0,children:a["Info-1"]}),(0,l.jsx)(f.Z,{gutterBottom:!0,children:a["Info-3"]}),(0,l.jsx)(f.Z,{gutterBottom:!0,children:a["Info-4"]})]})}),(0,l.jsx)(N.Z,{children:(0,l.jsx)(f.Z,{gutterBottom:!0,className:"".concat(B().CardboxTitle),children:a.Name})})]})})})}var E=JSON.parse('{"W":[{"option":"All"},{"option":"DAPP"},{"option":"Effect"},{"option":"Full Stack"},{"option":"Mobile"}],"_":[{"option":"All"},{"option":"AI"},{"option":"Auth"},{"option":"Camera"},{"option":"CMS"},{"option":"CRUD"},{"option":"Database"},{"option":"QR"},{"option":"Realtime"},{"option":"Smart Contract"},{"option":"Wallet"},{"option":"2D"},{"option":"3D"},{"option":"360"}]}'),_=JSON.parse('[{"Name":"ERC-20 Token Project","Image":"/assets/images/dapp/dragon-token-beta.webp","Url":"https://ksin8909.github.io/Project-Dragon-Token-Beta/","Blank":true,"Category":"All,DAPP","Tag":"All,Smart Contract","Skill":"All,Bootstrap,Ethers.js,React.js,Solidity,TypeScript","Language":"All,JS with TypeScript,Solidity","Framework":"All,React.js","Cssframework":"All,Bootstrap","Database":"All","Data":"All","Library":"All,Ethers.js","Info-1":"Chain: Ethereum Goerli Testnet","Info-2":"Smart Contract: Solidity","Info-3":"Library: React.js, Ethers.js","Info-4":"Host: Github","Homepage":true,"Status":true},{"Name":"ERC-721 NFT Project (Image)","Image":"/assets/images/dapp/number-nft-beta.webp","Url":"https://ksin8909.github.io/Project-Number-NFT-Beta/","Blank":true,"Category":"All,DAPP","Tag":"All,Smart Contract","Skill":"All,Bootstrap,Ethers.js,React.js,Solidity,TypeScript","Language":"All,JS with TypeScript,Solidity","Framework":"All,React.js","Cssframework":"All,Bootstrap","Database":"All","Data":"All","Library":"All,Ethers.js","Info-1":"Chain: Ethereum Goerli Testnet","Info-2":"Smart Contract: Solidity","Info-3":"Library: React.js, Ethers.js","Info-4":"Host: Github, Pinata IPFS","Homepage":true,"Status":true},{"Name":"ERC-721 NFT Project (3D Model)","Image":"/assets/images/dapp/3d-nft-beta.webp","Url":"https://ksin8909.github.io/Project-3D-NFT-Beta/","Blank":true,"Category":"All,DAPP","Tag":"All,Smart Contract,3D","Skill":"All,Bootstrap,Ethers.js,React.js,Solidity,Three.js","Language":"All,JS,Solidity","Framework":"All,React.js","Cssframework":"All,Bootstrap","Database":"All","Data":"All","Library":"All,Ethers.js,Three.js","Info-1":"Chain: Ethereum Goerli Testnet","Info-2":"Smart Contract: Solidity","Info-3":"Library: React.js, Ethers.js","Info-4":"Host: Github, Pinata IPFS","Homepage":true,"Status":true},{"Name":"Interact with MetaMask","Image":"/assets/images/dapp/metamask.webp","Url":"/showcase/dapp/metamask","Blank":false,"Category":"All,DAPP","Tag":"All,Wallet","Skill":"All,Ethers.js,React.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Ethers.js","Info-1":"Library: Ethers.js","Homepage":false,"Status":true},{"Name":"Interact with WalletConnect","Image":"/assets/images/dapp/walletconnect.webp","Url":"/showcase/dapp/walletconnect","Blank":false,"Category":"All,DAPP","Tag":"All,Wallet","Skill":"All,React.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All","Info-1":"Library: Web3-react","Homepage":false,"Status":true},{"Name":"Interact with Coinbase Wallet","Image":"/assets/images/dapp/coinbasewallet.webp","Url":"/showcase/dapp/coinbasewallet","Blank":false,"Category":"All,DAPP","Tag":"All,Wallet","Skill":"All,React.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All","Info-1":"Library: Web3-react","Homepage":false,"Status":true},{"Name":"Links","Image":"/assets/images/effect/tsparticles/links.webp","Url":"/showcase/effect/tsparticles/links","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Snow","Image":"/assets/images/effect/tsparticles/snow.webp","Url":"/showcase/effect/tsparticles/snow","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Characters","Image":"/assets/images/effect/tsparticles/characters.webp","Url":"/showcase/effect/tsparticles/characters","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Icons","Image":"/assets/images/effect/tsparticles/icons.webp","Url":"/showcase/effect/tsparticles/icons","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Image Mask","Image":"/assets/images/effect/tsparticles/image-mask.webp","Url":"/showcase/effect/tsparticles/image-mask","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Confetti","Image":"/assets/images/effect/tsparticles/confetti.webp","Url":"/showcase/effect/tsparticles/confetti","Blank":false,"Category":"All,Effect","Tag":"All,2D","Skill":"All,React.js,tsParticles","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,tsParticles","Info-1":"Library: tsParticles","Homepage":false,"Status":true},{"Name":"Load 3D Model","Image":"/assets/images/effect/threejs/3dmodel.webp","Url":"/showcase/effect/threejs/3dmodel","Blank":false,"Category":"All,Effect","Tag":"All,3D","Skill":"All,React.js,Three.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Three.js","Info-1":"Library: Three.js","Homepage":false,"Status":true},{"Name":"Load 3D Model with Animation","Image":"/assets/images/effect/threejs/3dmodelanimation.webp","Url":"/showcase/effect/threejs/3dmodelanimation","Blank":false,"Category":"All,Effect","Tag":"All,3D","Skill":"All,React.js,Three.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Three.js","Info-1":"Library: Three.js","Homepage":false,"Status":true},{"Name":"360 Image","Image":"/assets/images/effect/threejs/360image.webp","Url":"/showcase/effect/threejs/360image","Blank":false,"Category":"All,Effect","Tag":"All,360","Skill":"All,React.js,Three.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Three.js","Info-1":"Library: Three.js","Homepage":true,"Status":true},{"Name":"Sphere with Texture","Image":"/assets/images/effect/threejs/spheretexture.webp","Url":"/showcase/effect/threejs/spheretexture","Blank":false,"Category":"All,Effect","Tag":"All,3D","Skill":"All,React.js,Three.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Three.js","Info-1":"Library: Three.js","Homepage":false,"Status":true},{"Name":"Cube","Image":"/assets/images/effect/threejs/cube.webp","Url":"/showcase/effect/threejs/cube","Blank":false,"Category":"All,Effect","Tag":"All,3D","Skill":"All,React.js,Three.js","Language":"All,JS","Framework":"All,React.js","Cssframework":"All","Database":"All","Data":"All","Library":"All,Three.js","Info-1":"Library: Three.js","Homepage":false,"Status":true},{"Name":"AI Chatbot with Dialogflow","Image":"/assets/images/fullstack/AI-Chatbot-Dialogflow.webp","Url":"https://project-chatbot-frontend.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,AI","Skill":"All,Express,MUI,Next.js","Language":"All,JS","Framework":"All,Express.js,Next.js","Cssframework":"All,MUI","Database":"All","Data":"All","Library":"All","Info-1":"Back-end: Express.js","Info-3":"Front-end: Next.js","Info-4":"Host: Render","Homepage":true,"Status":true},{"Name":"Blog with GraphCMS","Image":"/assets/images/fullstack/Project-Blog-GraphCMS.webp","Url":"https://project-blog-graph-cms.vercel.app/","Blank":true,"Category":"All,Full Stack","Tag":"All,CMS","Skill":"All,GraphQL,Next.js","Language":"All,JS","Framework":"All,Next.js","Cssframework":"All,Tailwind CSS","Database":"All","Data":"All,GraphQL","Library":"All","Info-1":"CMS: GraphCMS","Info-2":"Query: GraphQL","Info-3":"Front-end: Next.js","Info-4":"Host: Vercel","Homepage":false,"Status":true},{"Name":"Chat Room with Socket.IO","Image":"/assets/images/fullstack/Project-Chat-Room.webp","Url":"https://project-chat-room-frontend.vercel.app/","Blank":true,"Category":"All,Full Stack","Tag":"All,Realtime","Skill":"All,Express,Next.js","Language":"All,JS","Framework":"All,Express.js,Next.js","Cssframework":"All,MUI","Database":"All","Data":"All","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: Next.js","Info-3":"Host: Render, Vercel","Homepage":false,"Status":true},{"Name":"Generate QR Code","Image":"/assets/images/fullstack/project-qrcode.webp","Url":"https://ksin8909.github.io/Project-QRCode/","Blank":true,"Category":"All,Full Stack","Tag":"All,QR","Skill":"All,Bootstrap,React.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,React.js","Cssframework":"All,Bootstrap","Database":"All","Data":"All","Library":"All","Info-1":"Library: qrcode.react","Info-2":"Host: Github","Homepage":false,"Status":true},{"Name":"Sign In with Third Party Platform (Next.js)","Image":"/assets/images/fullstack/Signin-Third-Party-Nextjs.webp","Url":"https://nextjs-signin-third-party.vercel.app/","Blank":true,"Category":"All,Full Stack","Tag":"All,Auth","Skill":"All,Next.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,Next.js","Cssframework":"All,MUI","Database":"All","Data":"All","Library":"All","Info-1":"Front-end: Next.js","Info-2":"Library: NextAuth.js","Info-3":"Host: Vercel","Homepage":false,"Status":true},{"Name":"Sign In with Third Party Platform","Image":"/assets/images/fullstack/Signin-Third-Party.webp","Url":"https://signin-third-party-oneport.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,Auth","Skill":"All,Bootstrap,Express,React.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,Express.js.React.js","Cssframework":"All,Bootstrap","Database":"All","Data":"All","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: React.js","Info-3":"Host: Render","Homepage":false,"Status":true},{"Name":"Sign In with JWT","Image":"/assets/images/fullstack/Signin-JWT.webp","Url":"https://signin-jwt-frontend.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,Auth,Database","Skill":"All,Bootstrap,Express,MongoDB,React.js","Language":"All,JS","Framework":"All,Express.js.React.js","Cssframework":"All,Bootstrap","Database":"All,MongoDB","Data":"All,REST","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: React.js","Info-3":"Database: MongoDB","Info-4":"Host: Render","Homepage":false,"Status":true},{"Name":"Upload/Download Image with JWT","Image":"/assets/images/fullstack/Upload-Download-Image-JWT.webp","Url":"https://upload-download-image-jwt-oneport.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,Auth,CRUD,Database","Skill":"All,Bootstrap,Express,MongoDB,React.js","Language":"All,JS","Framework":"All,Express.js.React.js","Cssframework":"All,Bootstrap","Database":"All,MongoDB","Data":"All,REST","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: React.js","Info-3":"Database: MongoDB","Info-4":"Host: Render","Homepage":false,"Status":true},{"Name":"Memo with Firebase Cloud Firestore","Image":"/assets/images/fullstack/firestore.webp","Url":"https://memo-firestore.vercel.app/","Blank":true,"Category":"All,Full Stack","Tag":"All,CRUD,Database","Skill":"All,Firebase,Next.js","Language":"All,JS","Framework":"All,Next.js","Cssframework":"All,Tailwind CSS","Database":"All,Firebase","Data":"All","Library":"All","Info-1":"Front-end: Next.js","Info-2":"Database: Firebase Cloud Firestore","Info-3":"Host: Vercel","Homepage":false,"Status":true},{"Name":"CRUD with Nuxt.js, MongoDB","Image":"/assets/images/fullstack/mongodb.webp","Url":"https://crud-nuxtjs-mongo-db-frontend.vercel.app/","Blank":true,"Category":"All,Full Stack","Tag":"All,CRUD,Database","Skill":"All,Express,MongoDB,Nuxt.js.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,Express.js,Nuxt.js","Cssframework":"All,Tailwind CSS","Database":"All,MongoDB","Data":"All,REST","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: Nuxt.js","Info-3":"Database: MongoDB","Info-4":"Host: Render, Vercel","Homepage":false,"Status":true},{"Name":"CRUD with React.js, MongoDB","Image":"/assets/images/fullstack/mongodb.webp","Url":"https://test-react-crud-mongodb-frontend.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,CRUD,Database","Skill":"All,Bootstrap,Express,MongoDB,React.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,Express.js,React.js","Cssframework":"All,Bootstrap","Database":"All,MongoDB","Data":"All,REST","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: React.js","Info-3":"Database: MongoDB","Info-4":"Host: Render","Homepage":false,"Status":true},{"Name":"CRUD with React.js, PostgreSQL","Image":"/assets/images/fullstack/postgresql.webp","Url":"https://test-react-crud-postgresql-oneport.onrender.com/","Blank":true,"Category":"All,Full Stack","Tag":"All,CRUD,Database","Skill":"All,Bootstrap,Express,PostgreSQL,React.js,TypeScript","Language":"All,JS with TypeScript","Framework":"All,Express.js,React.js","Cssframework":"All,Bootstrap","Database":"All,PostgreSQL","Data":"All,REST","Library":"All","Info-1":"Back-end: Express.js","Info-2":"Front-end: React.js","Info-3":"Database: PostgreSQL","Info-4":"Host: Render","Homepage":false,"Status":true},{"Name":"AI Text Recognition","Image":"/assets/images/mobile/AITextRecognition.webp","Url":"/showcase/mobile/ai-text-recognition","Blank":false,"Category":"All,Mobile","Tag":"All,AI,Camera","Skill":"All,React Native,TypeScript","Language":"All,,JS with TypeScript","Framework":"All,React Native","Cssframework":"All,MUI","Database":"All","Data":"All","Library":"All","Info-1":"Framework: React Native","Homepage":true,"Status":true},{"Name":"QR Code Scanner","Image":"/assets/images/mobile/QRCodeScanner.webp","Url":"/showcase/mobile/qrcode-scanner","Blank":false,"Category":"All,Mobile","Tag":"All,Camera,QR","Skill":"All,React Native","Language":"All,JS","Framework":"All,React Native","Cssframework":"All","Database":"All","Data":"All","Library":"All","Info-1":"Framework: React Native","Homepage":true,"Status":true},{"Name":"React Native App with Camera","Image":"/assets/images/mobile/ReactNativeCamera.webp","Url":"/showcase/mobile/camera","Blank":false,"Category":"All,Mobile","Tag":"All,Camera","Skill":"All,React Native","Language":"All,JS","Framework":"All,React Native","Cssframework":"All","Database":"All","Data":"All","Library":"All","Info-1":"Framework: React Native","Homepage":false,"Status":true},{"Name":"React Native App with Map","Image":"/assets/images/mobile/ReactNativeMap.webp","Url":"/showcase/mobile/map","Blank":false,"Category":"All,Mobile","Tag":"All","Skill":"All,React Native","Language":"All,JS","Framework":"All,React Native","Cssframework":"All","Database":"All","Data":"All","Library":"All","Info-1":"Framework: React Native","Homepage":false,"Status":true}]'),v=t(5601),H=t.n(v);function Z(e){let{Component:a,pageProps:t}=e,r=(0,c.useSearchParams)(),n=r.get("category")?r.get("category"):"All",x=r.get("tag")?r.get("tag"):"All";return(0,s.useEffect)(()=>{},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o(),{children:[(0,l.jsx)("title",{children:"Showcases | Showcase @ksin8909"}),(0,l.jsx)("meta",{name:"description",content:"Showcase @ksin8909"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/showcase/favicon.ico"})]}),(0,l.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)(S.Z,{...t,isHome:!1}),(0,l.jsxs)(g.Z,{maxWidth:"xl",children:[(0,l.jsxs)(A.Z,{separator:"›","aria-label":"breadcrumb",sx:{py:3},children:[(0,l.jsx)(i(),{href:"/",children:"Home"}),(0,l.jsx)(f.Z,{children:"Showcases"})]}),(0,l.jsx)(f.Z,{variant:"h2",component:"h2",textAlign:"center",className:"".concat(H().Header),children:"Showcases"}),(0,l.jsx)(p.ZP,{item:!0,xs:12,sx:{py:3},textAlign:"left",className:"showcase-filter",children:(0,l.jsxs)(u.Z,{defaultExpanded:!0,sx:{boxShadow:"none",justifyContent:"end",py:0},children:[(0,l.jsx)(h.Z,{expandIcon:(0,l.jsx)(b.G,{icon:j.ptq}),sx:{p:0},className:"".concat(H().FilterIcon),children:(0,l.jsx)(f.Z,{sx:{pr:1},children:"Filter"})}),(0,l.jsx)(d.Z,{sx:{p:0},children:(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(f.Z,{variant:"h6",component:"h6",sx:{mt:2},className:"".concat(H().FilterTitle),children:"Basic"}),(0,l.jsx)(D,{title:"Category",options:E.W,category:n,tag:x}),(0,l.jsx)(D,{title:"Tag",options:E._,category:n,tag:x}),(0,l.jsx)(f.Z,{variant:"h6",component:"h6",sx:{mt:2},className:"".concat(H().FilterTitle),children:"Skill"})]})})]})}),(0,l.jsx)(p.ZP,{container:!0,spacing:{xs:2,sm:4,md:8},sx:{py:{xs:0,sm:3}},children:_.filter(e=>e.Category.includes(n)).filter(e=>e.Tag.includes(x)).map((e,a)=>(0,l.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:4,textAlign:"center",children:(0,l.jsx)(P,{item:e})},a))})]}),(0,l.jsx)(w.Z,{...t})]})]})}x.vc.autoAddCss=!1},5496:function(e){e.exports={Title:"FilterStack_Title__2dMV7",Options:"FilterStack_Options__AZJNB",Active:"FilterStack_Active__QIczL"}},7183:function(e){e.exports={Footer:"Footer_Footer__eFKt0"}},7538:function(e){e.exports={Cardbox:"ShowcasesCard_Cardbox__wlwFe",CardboxTitle:"ShowcasesCard_CardboxTitle__Pdz1o",CardboxOverlay:"ShowcasesCard_CardboxOverlay__pOF1C",CardboxOverlayText:"ShowcasesCard_CardboxOverlayText__MHCD9",CardboxOverlayTextTitle:"ShowcasesCard_CardboxOverlayTextTitle__vulTu",CardboxOverlayContainer:"ShowcasesCard_CardboxOverlayContainer__IbOig"}},8402:function(e){e.exports={HomeTopbar:"Topbar_HomeTopbar__Ym4qq",PageTopbar:"Topbar_PageTopbar__d2pH8",TriggerTopbar:"Topbar_TriggerTopbar__aBB_l",TopbarIcon:"Topbar_TopbarIcon__Ic6qp"}},5601:function(e){e.exports={Header:"Showcases_Header__b1TGY",FilterTitle:"Showcases_FilterTitle__KR_UG",FilterIcon:"Showcases_FilterIcon__a9H5y"}}},function(e){e.O(0,[976,815,585,774,888,179],function(){return e(e.s=3780)}),_N_E=e.O()}]);