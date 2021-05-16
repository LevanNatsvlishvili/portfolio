(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(21),r=i.n(a),s=i(89),o=i(31),l=i(49),d=Object(l.a)({colors:{grey:"#888",darkBlue:"#1a1d22",blue:"#2d3138"}}),j=i(88),g=i(18),h=i(5),p={BASE:"/",ABOUT:"/portfolio/",EXPERIENCE:"/portfolio/experience",PROJECTS:"/portfolio/projects",EDUCATION:"/portfolio/education",SKILLS:"/portfolio/skills",SERVICES:"/portfolio/services"},m=i(83),x=i(28),b=i(85),u=i(0),f=Object(b.a)((function(e){return{boxPanel:{background:e.colors.darkBlue,borderRadius:6,padding:e.spacing(2),color:e.colors.grey,width:function(e){return e.width},margin:function(e){return e.margin},minHeight:function(e){return e.minHeight},height:"100%"}}})),O=function(e){var t=f({width:e.width,margin:e.margin,minHeight:e.minHeight}),i=e.children,n=Object(x.a)(e,["children"]);return Object(u.jsx)(m.a,Object(g.a)(Object(g.a)({container:!0,className:t.boxPanel},n),{},{children:i}))},v=Object(b.a)((function(e){return{img:{width:function(e){return e.width},borderRadius:function(e){return e.radius},marginRight:function(t){return e.spacing(t.marginRight)},marginLeft:function(t){return e.spacing(t.marginLeft)},height:function(e){return e.height}}}})),S=function(e){var t=v({width:e.width,height:e.height,radius:e.radius,marginRight:e.marginRight,marginLeft:e.marginLeft}),i=e.src,n=Object(x.a)(e,["src"]);return Object(u.jsx)("img",Object(g.a)({className:t.img,src:"".concat("/portfolio").concat(i),alt:""},n))},w=i(9),k=i(50),y=i(86),H=Object(b.a)((function(e){var t;return{root:(t={textTransform:"none",color:function(t){return e.colors[t.color||"orange"]},fontSize:function(e){return e.fontSize||"14px"},lineHeight:function(e){return e.lineHeight||"14px"},fontWeight:function(e){return e.fontWeight||"400"},margin:function(t){return e.spacing.apply(e,Object(k.a)(t.margin||"0"))}},Object(w.a)(t,e.breakpoints.down("md"),{fontSize:function(e){return e.fontSizeLg},lineHeight:function(e){return e.lineHeightMd}}),Object(w.a)(t,e.breakpoints.down("sm"),{fontSize:function(e){return e.fontSizeSm},lineHeight:function(e){return e.lineHeightSm}}),t)}})),I=function(e){var t=H({color:e.color,margin:e.margin,fontSize:e.fontSize,fontSizeMd:e.fontSizeMd,fontSizeSm:e.fontSizeSm,lineHeight:e.lineHeight,lineHeightMd:e.lineHeightMd,fontWeight:e.fontWeight,fontFamily:e.fontFamily}),i=e.children,n=Object(x.a)(e,["children"]);return Object(u.jsx)(y.a,Object(g.a)(Object(g.a)({className:t.root},n),{},{children:i}))},C=i(90),L=Object(b.a)((function(e){return{heading:Object(w.a)({fontSize:14,color:e.colors.grey,lineHeight:function(e){return e.lineHeight||"18px"},fontWeight:800,"& ul":{margin:0,paddingLeft:15}},e.breakpoints.down("sm"),{position:"unset"}),desc:Object(w.a)({fontSize:14,marginLeft:e.spacing(.5),color:e.colors.grey,"& a":{color:"#007bff"}},e.breakpoints.down("sm"),{position:"unset"})}})),T=function(e){var t=L({lineHeight:e.lineHeight}),i=e.heading,n=e.desc,c=e.link;return Object(u.jsx)("div",{children:Object(u.jsxs)(y.a,{className:t.heading,children:[i,Object(u.jsx)(y.a,{component:"span",className:t.desc,children:c?Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:c,children:n}):n})]})})},z=function(e){return Object(u.jsxs)(C.a,{display:"table",ml:"auto",children:[Object(u.jsx)(I,{fontWeight:"800",lineHeight:"36px",fontSize:"20px",children:"Languages"}),Object(u.jsx)(T,{heading:"Georgian",desc:"Native"}),Object(u.jsx)(T,{heading:"English",desc:"Fluent"}),Object(u.jsx)(T,{heading:"Russian",desc:"Low"})]})},M=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I,{fontWeight:"800",lineHeight:"36px",fontSize:"20px",children:"Contact Info"}),Object(u.jsx)(T,{heading:"Address",desc:"Georgia,Tbilisi"}),Object(u.jsx)(T,{heading:"E-mail",desc:"L.nats51@yahoo.com"}),Object(u.jsx)(T,{heading:"Github",desc:"Github.com/LevanNatsvlishvili/",link:"https://github.com/levannatsvlishvili/"}),Object(u.jsx)(T,{heading:"Linkedin",desc:"Linkedin.com/in/levnac/",link:"https://linkedin.com/in/levnac/"})]})},R=function(e){return Object(u.jsxs)(O,{margin:"0",width:"100%",spacing:2,children:[Object(u.jsx)(m.a,{item:!0,xs:12,sm:3,children:Object(u.jsx)(S,{width:"100%",radius:"6px",src:"/images/profile/LevanNatsvlishvili.jpeg"})}),Object(u.jsxs)(m.a,{item:!0,xs:12,sm:9,children:[Object(u.jsx)(I,{lineHeight:"36px",fontSize:"32px",children:"Levan Natsvlishvili"}),Object(u.jsxs)(m.a,{container:!0,children:[Object(u.jsx)(m.a,{xs:12,md:6,item:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(m.a,{xs:12,md:6,item:!0,children:Object(u.jsx)(z,{})})]})]})]})},A=function(e){return Object(u.jsx)(O,{margin:"0",width:"100%",spacing:2,children:Object(u.jsx)(I,{lineHeight:"20px",children:"In 2018.08 after taking some Udemy courses I decided I needed to gain some experience , so I started looking for freelance projects and after searching up and down, I finally landed my first contract, in which I designed and developed markup of part of a website, after completing contract it was followed by other similar small projects, not long after my graduation from university I landed my first full time job in 2019.08, as fullstack developer(PHP/MYSQL), where I contributed to making company\u2019s private application more user friendly . After gaining enough experience I decided to try my luck at Upwork, It took a lot of effort to get my first contract and it wasn\u2019t anything big , it was a start, gradually I size of projects increased until I was able to get offer to design , build small crude blog and finish it. In 2020.05 I realized that my knowledge was lacking and it was time to move to next level, so I signed up for react/javascript course, which turned out to be a wonderful experience. After finishing the course I was able to build small clothing ecommerce shop. Soon after graduation I was able to get an offer as junior front-end react developer, which I gladly accepted and started phase of new challenges. Soon after relocation I was accepted in Georgian University, and started Magister of IT management. Aside from technical experiences , I\u2019ve had pleasure to work in hotels, at front desk where I learned what is means to be professional and presentable , place where my life changed to very positive direction"})})},N=function(){return Object(u.jsxs)(m.a,{spacing:2,container:!0,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(R,{})}),Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(A,{})})]})},P=i(92),E=function(e){var t=e.text,i=e.icon;return Object(u.jsxs)(C.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(P.a,{xsDown:!0,children:i?Object(u.jsx)(S,{marginRight:"1",radius:"6px",width:"35px",src:i}):null}),Object(u.jsx)(I,{fontSize:"20px",fontWeight:"600",children:t})]})},D=function(e){var t=e.company,i=e.date,n=e.icon;return Object(u.jsxs)(m.a,{container:!0,spacing:1,children:[Object(u.jsx)(m.a,{xs:12,sm:8,item:!0,children:Object(u.jsx)(E,{text:t,icon:n})}),Object(u.jsx)(m.a,{xs:12,sm:4,item:!0,children:Object(u.jsx)(C.a,{ml:{xs:0,sm:"auto"},my:"auto",alignItems:"center",height:"100%",display:"table",children:Object(u.jsx)(C.a,{height:"100%",display:"flex",alignItems:"center",children:Object(u.jsx)(I,{fontWeight:"500",lineHeight:"22px",fontSize:"16px",children:i})})})})]})},W=function(e){var t=e.companyName,i=e.date,n=e.companyIcon,c=e.position,a=e.tech,r=e.descriptions;return Object(u.jsxs)(O,{margin:"0",width:"100%",spacing:2,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(D,{company:t,date:i,icon:n})}),Object(u.jsxs)(m.a,{item:!0,xs:12,children:[Object(u.jsx)(T,{lineHeight:"26px",heading:"Position:",desc:c}),Object(u.jsx)(T,{lineHeight:"26px",heading:"Technologies:",desc:a}),Object(u.jsx)(T,{lineHeight:"26px",heading:"Description:",desc:Object(u.jsx)("ul",{children:r.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})})]})]})},U=[{name:"Helix Nebula Capital",icon:"/images/companies/helixnebula.png",date:"[2020.09 - present]",position:"Front-end Reactjs developer",technologies:"ReactJS /HTML /CSS/Material Ui/",descriptions:["Creating reusable components","Building structured, easy to read and reconstruct code using SOLID principles","Converting XD to pixel perfect, responsive design","Improving UX and application speed performance","Mentoring and helping intern developers"]},{name:"Upwork",icon:"/images/companies/upwork.jpg",date:"[2020.01 - present]",position:"FullStack Web Developer",technologies:"PHP /MYSQL /HTML /CSS /BOOTSTRAP /Javascript /Adobe XD",descriptions:["Building and designing markups","Implementing specific functions according to customer\u2019s needs","Converting XD to pixel perfect, responsive design","Developing and launching web applications ","Improving, changing and redesigning websites"]},{name:"Georgian State Electrosystem",icon:"/images/companies/gse.png",date:"[2019.08 - 2020.09]",position:"FullStack Web Developer",technologies:"PHP /MYSQL /HTML /CSS /BOOTSTRAP/Javascript",descriptions:["Improving existing code","Managing database","Improving security of application","Coordinating with Accounting, Technical and other departments"]},{name:"Freelancer",icon:null,date:"[2019.09 - Present]",position:"Front-end developer",technologies:"PHP /MYSQL /HTML /CSS /BOOTSTRAP/Javascript",descriptions:["Designing and building markups","Developing responsive websites"]}],B=function(){return Object(u.jsx)(m.a,{spacing:2,container:!0,children:U.map((function(e,t){return Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(W,{companyName:e.name,companyIcon:e.icon,date:e.date,position:e.position,tech:e.technologies,descriptions:e.descriptions})})}))})},J=function(e){var t=e.name,i=e.link,n=e.image,c=e.tech;return Object(u.jsxs)(O,{margin:"0",width:"100%",spacing:1,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(S,{src:n,width:"100%"})}),Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsxs)(C.a,{minHeight:{xs:0,sm:140},children:[Object(u.jsx)(I,{fontSizeMd:"22px",fontSize:"26px",lineHeight:"28px",fontWeight:"600",children:t}),Object(u.jsx)(T,{lineHeight:"26px",link:i,heading:"Link:",desc:t}),Object(u.jsx)(T,{lineHeight:"26px",heading:"Technologies:",desc:c})]})})]})},F=[{name:"Dataninja",image:"/images/projects/dataninja.jpg",link:"https://mydataninja.com/",technologies:"Reactjs /Html /Css /material ui /"},{name:"Oraquick",image:"/images/projects/medweb.jpg",link:"https://levannatsvlishvili.github.io/MedWeb/",technologies:"Reactjs /Html /Css /material ui /Adobe XD/"},{name:"ClothingStore",image:"/images/projects/clothingstore.jpg",link:"https://levannatsvlishvili.github.io/clothingstoretemplate/",technologies:"Reactjs /Html /Css /material ui /Adobe XD/"},{name:"Tourism",image:"/images/projects/tourism.jpg",link:"https://levannatsvlishvili.github.io/geolabproject/",technologies:"HTML /CSS/Bootstrap/"},{name:"Christembassy",image:"/images/projects/christembassy.jpg",link:"https://www.christembassyewcaz5.org/",technologies:"ReactJS /HTML /CSS/Material Ui/"},{name:"Hotel",image:"/images/projects/hotel.jpg",link:"https://levannatsvlishvili.github.io/Hotel/",technologies:"ReactJS /HTML /CSS/Material Ui/"}],X=function(){return Object(u.jsx)(m.a,{spacing:2,container:!0,children:F.map((function(e,t){return Object(u.jsx)(m.a,{item:!0,xs:12,sm:6,lg:4,children:Object(u.jsx)(J,{name:e.name,image:e.image,link:e.link,tech:e.technologies})})}))})},G=Object(b.a)((function(e){return{link:{color:"#007bff",fontSize:"16px",lineHeight:"20px"}}})),V=function(e){var t=G(),i=e.text,n=e.link;return Object(u.jsx)("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:n,children:i})},Y=function(e){var t=e.link,i=e.isCertified,n=e.name;return Object(u.jsxs)(C.a,{justifyContent:{xs:"center",sm:"unset"},display:"flex",children:[i?Object(u.jsx)(V,{link:t,text:n}):Object(u.jsx)(I,{lineHeight:"20px",fontSize:"16px",children:n}),Object(u.jsx)(S,{marginLeft:"1",src:{true:"/icons/check.svg",false:"/icons/cross.svg"}[i]})]})},K=Object(b.a)((function(e){return{box:{border:"1px solid #888",borderRadius:20,padding:e.spacing(2.5),minHeight:170},imgContainer:Object(w.a)({display:"flex",alignItems:"center",padding:e.spacing(2),"& img":{maxWidth:"80px",margin:"auto"}},e.breakpoints.down("xs"),{"& img":{width:"110px",margin:"auto"}}),textArea:Object(w.a)({display:"flex",flexDirection:"column",justifyContent:"center"},e.breakpoints.down("xs"),{marginTop:e.spacing(2),textAlign:"center"})}})),Q=function(e){var t=K(),i=e.certificate,n=e.date,c=e.company,a=e.logo,r=e.degree;return Object(u.jsxs)(m.a,{className:t.box,container:!0,children:[Object(u.jsx)(m.a,{className:t.imgContainer,item:!0,xs:12,sm:4,lg:3,children:Object(u.jsx)(S,{width:"100%",radius:"6px",src:a})}),Object(u.jsxs)(m.a,{className:t.textArea,item:!0,xs:12,sm:8,lg:9,children:[Object(u.jsxs)(I,{fontWeight:"400",lineHeight:"20px",fontSize:"14px",children:[r," at",Object(u.jsx)(I,{fontWeight:"800",lineHeight:"20px",fontSize:"14px",children:c})]}),Object(u.jsxs)(C.a,{mt:1,children:[Object(u.jsx)(I,{lineHeight:"20px",fontSize:"16px",children:n}),Object(u.jsx)(Y,{name:i.name,link:i.link,isCertified:i.isCertified})]})]})]})},_=[{degree:"Informatics and Management Systems",company:"Georgian Technical University",date:"2015-2019",certificate:{link:"https://drive.google.com/file/d/1VWXaaJT2V1_26-kg5azd6NxggZ7dn7IA/view",isCertified:!0,name:"Diploma"},logo:"/images/education/gtu.png"},{degree:"IT Project Management",company:"University of Georgia ",date:"2020-Present",certificate:{link:"https://drive.google.com/file/d/1VWXaaJT2V1_26-kg5azd6NxggZ7dn7IA/view",isCertified:!1,name:"Diploma"},logo:"/images/education/ug.png"}],q=function(e){return Object(u.jsxs)(O,{margin:"0",width:"100%",spacing:2,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(C.a,{mb:2,children:Object(u.jsx)(I,{fontSize:"32px",children:"University"})})}),_.map((function(e,t){return Object(u.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(Q,{certificate:e.certificate,logo:e.logo,date:e.date,company:e.company,degree:e.degree},t)})}))]})},Z=[{degree:"React/Javascript Course",company:"Geolab",date:"2020",certificate:{link:"https://drive.google.com/file/d/1AAfGjjNuFvKf2Vab16pdqwLklnbL6KxT/view?usp=sharing",isCertified:!0,name:"Certificate"},logo:"/images/education/geolab.svg"},{degree:"PHP for Beginners \u2013 Become a PHP Master -CMS Project",company:"Udemy",date:"2019",certificate:{link:"",isCertified:!1,name:"Certificate"},logo:"/images/education/udemy.svg"},{degree:"The Web Developer Bootcamp",company:"Udemy",date:"2018",certificate:{link:"",isCertified:!1,name:"Certificate"},logo:"/images/education/udemy.svg"}],$=function(e){return Object(u.jsxs)(O,{margin:"0",width:"100%",spacing:2,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(C.a,{mb:2,children:Object(u.jsx)(I,{fontSize:"32px",children:"Courses"})})}),Z.map((function(e,t){return Object(u.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(Q,{certificate:e.certificate,logo:e.logo,date:e.date,company:e.company,degree:e.degree},t)})}))]})};function ee(e){var t=e.text;return Object(u.jsx)(I,{lineHeight:"26px",fontWeight:"bold",fontSize:"24px",children:t})}function te(e){var t=e.text;return Object(u.jsx)(I,{lineHeight:"22px",fontSize:"16px",children:t})}var ie=function(e){var t=e.set;return Object(u.jsx)(O,{spacing:2,container:!0,margin:"0",width:"100%",children:Object(u.jsxs)(m.a,{item:!0,xs:12,children:[Object(u.jsx)(ee,{text:t.title}),Object(u.jsx)(C.a,{mt:2,children:t.skills.map((function(e,t){return Object(u.jsx)(te,{text:e},t)}))})]})})},ne=[{title:"Front-end",skills:["React","Javascript/Typescript","HTML5","CSS3","BOOTSTRAP","Material Ui","Responsive Design"]},{title:"Back-end",skills:["Adobe XD","UI"]},{title:"Design",skills:["PHP","MYSQL"]}];function ce(e){var t=e.text;return Object(u.jsx)(I,{lineHeight:"22px",fontWeight:"bold",fontSize:"20px",children:t})}function ae(e){var t=e.text;return Object(u.jsx)(I,{lineHeight:"18px",fontSize:"16px",children:t})}var re=function(e){var t=e.set;return Object(u.jsxs)(O,{container:!0,margin:"0",width:"100%",children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(C.a,{height:{xs:"100%",sm:"100px",md:"130px"},children:Object(u.jsx)(S,{width:"100%",height:"100%",radius:"6px",src:t.img})})}),Object(u.jsxs)(C.a,{mt:1,children:[Object(u.jsx)(ce,{text:t.title}),Object(u.jsx)(C.a,{mt:1,children:Object(u.jsx)(ae,{text:t.desc})})]})]})},se=[{title:"Landing Page",desc:"I will build you landing page",img:"/images/services/website.jpg"},{title:"Web Application",desc:"I will build you a Front-end web application",img:"/images/services/webapplication.png"},{title:"Web Design",desc:"I will make you a beautiful web design",img:"/images/services/webdesign.jpg"}],oe=[{path:p.BASE,exact:!0,component:function(){return Object(u.jsx)(h.a,{to:p.ABOUT})}},{path:p.ABOUT,exact:!0,component:N},{path:p.EXPERIENCE,exact:!0,component:B},{path:p.PROJECTS,exact:!0,component:X},{path:p.EDUCATION,exact:!0,component:function(){return Object(u.jsxs)(m.a,{spacing:2,container:!0,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(q,{})}),Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)($,{})})]})}},{path:p.SKILLS,exact:!0,component:function(){return Object(u.jsx)(m.a,{spacing:2,container:!0,children:ne.map((function(e,t){return Object(u.jsx)(m.a,{xs:12,sm:4,item:!0,children:Object(u.jsx)(ie,{set:e},t)})}))})}},{path:p.SERVICES,exact:!0,component:function(){return Object(u.jsx)(m.a,{spacing:2,container:!0,children:se.map((function(e,t){return Object(u.jsx)(m.a,{xs:12,sm:4,item:!0,children:Object(u.jsx)(re,{set:e},t)})}))})}}],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.jsx)(h.d,Object(g.a)(Object(g.a)({},e),{},{children:oe.map((function(e,t){return Object(u.jsx)(h.b,{path:e.path,exact:e.exact,component:e.component,redirect:e.redirect},t)}))}))},de=Object(b.a)((function(e){return{profile:Object(w.a)({width:126,height:126,borderRadius:"100px",margin:"50px auto",boxShadow:" 0 0 0 7px #292d35, 0 0 0 12px #1a1d22, 0 0 0 13px #3c434f","& img":{float:"left",objectFit:"cover",width:"100%",height:"100%",borderRadius:"100px"}},e.breakpoints.down("sm"),{width:100,height:100,margin:"30px auto"})}})),je=function(){var e=de();return Object(u.jsx)(C.a,{className:e.profile,children:Object(u.jsx)(S,{src:"/images/profile/LevanNatsvlishvili.jpeg",alt:""})})},ge=Object(b.a)((function(e){return{socMediaLink:{background:e.colors.blue,"& img":{width:"100%"}}}})),he=function(e){var t=e.img,i=e.link,n=ge();return Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:i,children:Object(u.jsx)(C.a,{className:n.socMediaLink,width:"40px",height:"40px",mx:1,borderRadius:90,children:Object(u.jsx)(S,{src:t,alt:"socialmedia"})})})},pe=function(){return Object(u.jsxs)(C.a,{display:"flex",justifyContent:"center",children:[Object(u.jsx)(he,{link:"https://www.linkedin.com/in/levan-natsvlishvili-0488b9199",img:"/icons/linkedin.svg"}),Object(u.jsx)(he,{link:"https://github.com/levannatsvlishvili/",img:"/icons/github.svg"})]})},me=i(87),xe=i(91),be=Object(b.a)((function(e){return{item:{padding:0}}})),ue=function(e){var t=e.children,i=be();return Object(u.jsx)(xe.a,{className:i.item,children:t})},fe=Object(b.a)((function(e){return{link:Object(w.a)({color:e.colors.grey,fontWeight:600,fontSize:20,textDecoration:"none",padding:e.spacing(1),width:"100%",textAlign:"center","&:hover":{background:"#1f2228",color:"#fff"}},e.breakpoints.down("sm"),{fontSize:16}),active:{background:"#1f2228",color:"#fff"}}})),Oe=function(e){var t=fe(),i=e.children,n=e.to;return Object(u.jsx)(o.b,{to:n,exact:!0,className:t.link,activeClassName:t.active,children:i})},ve=Object(b.a)((function(e){return{list:{marginTop:e.spacing(2)}}})),Se=function(e){var t=ve();return Object(u.jsxs)(me.a,{className:t.list,children:[Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.ABOUT,children:" About Me"})}),Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.EXPERIENCE,children:"Work Experience"})}),Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.PROJECTS,children:"Projects"})}),Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.EDUCATION,children:"Education"})}),Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.SKILLS,children:"Skills"})}),Object(u.jsx)(ue,{children:Object(u.jsx)(Oe,{to:p.SERVICES,children:"Services"})})]})},we=function(e){return Object(u.jsxs)(m.a,{container:!0,children:[Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(je,{})}),Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(pe,{})}),Object(u.jsx)(m.a,{item:!0,xs:12,children:Object(u.jsx)(Se,{})})]})},ke=Object(b.a)((function(e){return{sidebar:Object(w.a)({top:0,zIndex:11111,overflowY:"auto",overflowX:"hidden",height:"100%",fontSize:15,padding:0,textAlign:"left",margin:0,position:"fixed",left:0,backgroundColor:"#1a1d22"},e.breakpoints.down("sm"),{position:"unset"})}})),ye=function(e){var t=ke();return Object(u.jsxs)("div",{children:[Object(u.jsx)(C.a,{width:{xs:"100%",md:"30%",lg:"20%"},className:t.sidebar,children:Object(u.jsx)(we,{})}),Object(u.jsx)(C.a,{ml:{xs:0,md:"30%",lg:"20%"},p:2,children:e.children})]})};i(44);var He=function(){return Object(u.jsx)(j.a,{theme:d,children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(ye,{children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(le,{})]})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(He,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b2eb1f23.chunk.js.map