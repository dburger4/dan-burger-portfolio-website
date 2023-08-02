(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Et+L":function(n,e,t){"use strict";var a,r,i=t("MUpH"),o=t("5D9J"),l=t("q1tI"),c=t.n(l),m=t("ckOl"),p=o.a.section(a||(a=Object(i.a)(["\n  margin-top: 0.8rem;\n  display: flex;\n  flex-wrap: wrap;\n"]))),s=o.a.span(r||(r=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n\n  color: var(--body-color);\n  margin: 0 1rem 0.5rem 0;\n\n  & > svg {\n    color: var(--primary-color);\n    height: 0.8rem;\n    margin-right: 0.25rem;\n  }\n"])));e.a=function(n){var e=n.techs;return c.a.createElement(p,null,e.map((function(n){return c.a.createElement(s,{key:n},c.a.createElement(m.a,{icon:"caret-right"}),n)})))}},FZxV:function(n,e,t){"use strict";var a,r=t("MUpH"),i=t("5D9J"),o=t("Wbzz"),l=t("q1tI"),c=t.n(l),m=t("ckOl"),p=t("sH8X"),s=Object(i.a)(o.Link)(a||(a=Object(r.a)(["\n  ",";\n  text-decoration: none;\n  font-size: 1.5rem;\n  white-space: normal;\n  font-weight: 500;\n  padding: 0.4rem 0.8rem;\n  color: var(--primary-color);\n\n  &:hover {\n    color: var(--secondary-color);\n    text-decoration: underline;\n  }\n\n  & > svg {\n    height: 0.8rem;\n    fill: currentColor;\n    margin-left: 0.25rem;\n    transition: margin-left var(--transition-fast) ease;\n  }\n\n  &:hover > svg {\n    margin-left: 0.5rem;\n  }\n"])),p.b);e.a=function(n){var e=n.label,t=n.link;return c.a.createElement(c.a.Fragment,null,e&&t&&c.a.createElement(s,{to:t||"#"},e,c.a.createElement(m.a,{icon:"arrow-right"})))}},"I/mr":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return c}));var a,r,i=t("MUpH"),o=t("5D9J"),l=o.a.h1(a||(a=Object(i.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  // margin: 10px 0;\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]))),c=o.a.h2(r||(r=Object(i.a)(["\n  color: var(--title-color);\n  // margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"])))},RXBc:function(n,e,t){"use strict";t.r(e);var a,r,i,o,l,c,m,p,s,d,g,h,u,b,f,v,x,E,j,w,y,O,k,z,_,M,H,L,I,F,J,S,D,U,X,q,R,K,T=t("q1tI"),Z=t.n(T),B=t("MUpH"),C=t("5D9J"),N=t("9eSz"),P=t.n(N),V=t("Et+L"),W=t("hGpq"),Y=t("I/mr"),A=C.a.div(a||(a=Object(B.a)(["\n  min-width: 300px;\n  min-height: 200px;\n  position: relative;\n  padding-top: 2rem;\n\n  & .gatsby-image-wrapper * {\n    transition: transform var(--transition-fast) ease-in-out !important;\n  }\n\n  &:hover .gatsby-image-wrapper * {\n    transform: scale(1.1);\n  }\n"]))),G=C.a.div(r||(r=Object(B.a)(["\n  min-width: 300px;\n  min-height: 200px;\n  position: relative;\n\n  .gatsby-image-wrapper {\n    overflow: unset !important;\n  }\n\n  .gatsby-image-wrapper:before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    right: -10px;\n    width: 98%;\n    height: 98%;\n    border: 2px solid var(--primary-color);\n    transition: all ease var(--transition-fast);\n  }\n"]))),Q=t("cDEv"),$=C.a.article(i||(i=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1.5rem;\n  // padding: 1rem 0;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),W.a.gt.sm),nn=C.a.section(o||(o=Object(B.a)(["\n  white-space: pre-line;\n"]))),en=function(n){var e=n.data,t=e.frontmatter,a=t.title,r=t.techs,i=t.about_image,o=e.html,l=i?i.childImageSharp.fluid:null;return Z.a.createElement(Q.b,{id:"about"},Z.a.createElement(Y.a,null,"About Me"),Z.a.createElement($,null,l&&Z.a.createElement(G,null,Z.a.createElement(P.a,{fluid:l,objectFit:"contain"})),Z.a.createElement("div",null,Z.a.createElement(Y.b,null,a),Z.a.createElement(nn,{dangerouslySetInnerHTML:{__html:o}}),Z.a.createElement(V.a,{techs:r}))))},tn=t("ckOl"),an=(C.a.section(l||(l=Object(B.a)(["\n  white-space: pre-line;\n"]))),C.a.section(c||(c=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1.5rem;\n  margin-top: 1rem;\n  width: 100%;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),W.a.gt.xs,W.a.gt.sm),C.a.article(m||(m=Object(B.a)(["\n  border: 1px solid var(--body-color);\n  border-radius: var(--radius);\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-height: 200px;\n  padding: 1rem;\n\n  & svg {\n    height: 2rem;\n    width: 2rem;\n    font-size: 2rem;\n  }\n"]))),C.a.h2(p||(p=Object(B.a)(["\n  font-size: 1.5rem;\n  margin: rem 0;\n  color: var(--body-color);\n"]))),C.a.div(s||(s=Object(B.a)(["\n  width: 15%;\n  height: 2px;\n  background-color: var(--primary-color);\n  // margin-bottom: 1rem;\n"]))),C.a.p(d||(d=Object(B.a)(["\n  font-size: 0.8rem;\n"]))),t("Wbzz")),rn=Object(C.a)(Q.b)(g||(g=Object(B.a)(["\n  margin-bottom: 70px;\n"]))),on=C.a.section(h||(h=Object(B.a)(["\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    font-size: 2rem;\n    margin-right: 0.75rem;\n  }\n"]))),ln=C.a.section(u||(u=Object(B.a)(["\n  & > span {\n    font-size: 0.75rem;\n    font-weight: 500;\n  }\n"]))),cn=C.a.div(b||(b=Object(B.a)(["\n  color: var(--primary-color);\n\n  font-weight: normal;\n"]))),mn=C.a.section(f||(f=Object(B.a)(["\n  white-space: pre-line;\n  width: 100%;\n  max-width: 500px;\n  margin-left: 3px;\n"]))),pn=C.a.div(v||(v=Object(B.a)(["\n  height: 1px;\n  width: 50%;\n  background-color: var(--body-color);\n"]))),sn=C.a.div(x||(x=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px;\n  width: 100%;\n  margin-top: 2rem;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),W.a.gt.xs,W.a.gt.sm),dn=function(n){var e=n.data,t=e.frontmatter,a=(t.linkedin,t.email),r=t.address,i=e.html;return Z.a.createElement(Z.a.Fragment,null,Z.a.createElement(rn,{id:"contact"},Z.a.createElement(Y.a,null,"Contact Me"),Z.a.createElement(mn,{dangerouslySetInnerHTML:{__html:i}}),Z.a.createElement(pn,null),Z.a.createElement(sn,null,a&&Z.a.createElement(on,null,Z.a.createElement(tn.a,{icon:"paper-plane"}),Z.a.createElement(ln,null,Z.a.createElement(cn,null,"My E-Mail"),Z.a.createElement("span",null,a))),r&&Z.a.createElement(on,null,Z.a.createElement(tn.a,{icon:"home"}),Z.a.createElement(ln,null,Z.a.createElement(cn,null,"My City"),Z.a.createElement("span",null,r))))))},gn=t("FZxV"),hn=t("bjXa"),un=t("sH8X"),bn=C.a.article(E||(E=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1.5rem;\n  padding: 1.5rem 0;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  &:nth-of-type(even) {\n    direction: rtl;\n  }\n  &:nth-of-type(even) * {\n    direction: ltr;\n  }\n"])),W.a.gt.sm),fn=C.a.section(j||(j=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),vn=C.a.section(w||(w=Object(B.a)(["\n  ","\n  max-height: 160px;\n  position: relative;\n  padding: 10px;\n\n  > p {\n    height: 100%;\n    margin: 0;\n    font-size: 0.8rem;\n    overflow: hidden;\n  }\n"])),un.a),xn=C.a.section(y||(y=Object(B.a)(["\n  ",";\n  // margin: 10px 0;\n\n  & > a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--body-color);\n\n    &:hover {\n      color: var(--primary-color);\n    }\n  }\n\n  & svg {\n    margin: 0 0.5rem;\n  }\n"])),un.c),En=C.a.div(O||(O=Object(B.a)(["\n  ",";\n  width: 100%;\n  margin-top: 1.5rem;\n"])),un.b),jn=function(n){var e=n.featured.map((function(n,e){var t=n.frontmatter.cover_image?n.frontmatter.cover_image.childImageSharp.fluid:null,a=n.frontmatter.title,r=n.frontmatter.demo_link,i=n.frontmatter.repo_link,o="featured project "+a+" demo",l="featured project "+a+" repo";return Z.a.createElement(bn,{key:a+e},Z.a.createElement("a",{"aria-label":r?o:i?l:"featured project "+a,href:r||(i||"#"),target:"_blank",rel:"noopener"},t&&Z.a.createElement(A,{hasHover:!0},Z.a.createElement(P.a,{fluid:t}))),Z.a.createElement(fn,null,Z.a.createElement(hn.a,{href:r||(i||"#"),target:"_blank",rel:"noopener"},Z.a.createElement(Y.b,null,a)),Z.a.createElement(vn,{dangerouslySetInnerHTML:{__html:n.html}}),Z.a.createElement(V.a,{techs:n.frontmatter.techs}),Z.a.createElement(xn,null,i&&Z.a.createElement("a",{href:i,target:"_blank",rel:"noopener",title:"Repository Link","aria-label":l},Z.a.createElement(tn.a,{icon:"github",prefix:"fab"})),r&&Z.a.createElement("a",{href:r,target:"_blank",rel:"noopener",title:"Demo Link","aria-label":o},Z.a.createElement(tn.a,{icon:"external-link-alt"})))))}));return Z.a.createElement(Q.b,{id:"projects"},Z.a.createElement(Y.a,null,"Featured Projects"),e,Z.a.createElement(En,null,Z.a.createElement(gn.a,{label:"See all my projects",link:"/projects"})),Z.a.createElement(En,null,Z.a.createElement(gn.a,{label:"Books I've read\nto keep my skills sharp",link:"/blog"})))},wn=C.a.a(k||(k=Object(B.a)(["\n  ",";\n  text-decoration: none;\n  color: var(--bg-content-color) !important;\n  background-color: var(--title-color);\n  font-size: 0.9rem;\n  font-weight: 500;\n  white-space: nowrap;\n  position: relative;\n  border: none;\n  padding: 0.4rem 0.8rem;\n\n  &:hover {\n    color: var(--primary-color) !important;\n  }\n\n  &:after {\n    content: '';\n    z-index: -1;\n    border: 1px solid var(--title-color);\n    position: absolute;\n    bottom: -3px;\n    right: -3px;\n    width: 100%;\n    height: 100%;\n    transition: all ease var(--transition-fast);\n  }\n\n  &:hover:after {\n    border: 1px solid var(--primary-color);\n    bottom: -5px;\n    right: -5px;\n  }\n\n  & > svg {\n    fill: var(--bg-content-color);\n    height: 0.8rem;\n    margin-left: 0.25rem;\n  }\n\n  &:hover > svg {\n    fill: var(--primary-color);\n  }\n"])),un.b),yn=function(n){var e=n.label,t=n.link;return Z.a.createElement(Z.a.Fragment,null,e&&t&&Z.a.createElement(wn,{href:t||"#",target:"_blank",rel:"noopener"},e,Z.a.createElement(tn.a,{icon:"arrow-right"})))},On=t("qKvR"),kn=Object(On.c)(z||(z=Object(B.a)(["\n  0% {\n    opacity: 0;\n  }\n\n  10% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n"]))),zn=C.a.div(_||(_=Object(B.a)(["\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  ",";\n  flex-direction: column;\n\n  display: none;\n\n  "," {\n    display: flex;\n  }\n"])),un.b,W.a.gt.xs),_n=C.a.div(M||(M=Object(B.a)(["\n  width: 20px;\n  height: 30px;\n  padding: 0 6px;\n  border: 2px solid #fff;\n  border-radius: 20px;\n"]))),Mn=C.a.div(H||(H=Object(B.a)(["\n  position: relative;\n  left: 50%;\n  top: 6px;\n  margin-left: -1px;\n  width: 2px;\n  height: 6px;\n  background: var(--primary-color);\n  border-radius: 25%;\n  animation-name: ",";\n  animation-duration: 2.2s;\n  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);\n  animation-iteration-count: infinite;\n"])),kn),Hn=C.a.span(L||(L=Object(B.a)(["\n  font-size: 0.7rem;\n  margin: 20px 0;\n"]))),Ln=function(){return Z.a.createElement(zn,null,Z.a.createElement(Hn,null,"Scroll down"),Z.a.createElement(_n,null,Z.a.createElement(Mn,null)))},In=Object(C.a)(Q.b)(I||(I=Object(B.a)(["\n  min-height: calc(100vh - 2 * var(--header-height));\n  position: relative;\n\n  "," {\n    min-height: calc(100vh - var(--header-height));\n  }\n"])),W.a.gt.sm),Fn=C.a.div(F||(F=Object(B.a)(["\n  color: var(--primary-color);\n  font-weight: normal;\n"]))),Jn=C.a.h1(J||(J=Object(B.a)(["\n  margin-left: -4px !important;\n  font-size: 40px;\n  line-height: 1.1;\n  margin: 0;\n  word-break: break-word;\n\n  "," {\n    font-size: 80px;\n  }\n"])),W.a.gt.xs),Sn=C.a.h2(S||(S=Object(B.a)(["\n  margin-left: -4px !important;\n  font-size: 40px;\n  line-height: 1.1;\n  margin: 0;\n  color: var(--primary-color);\n  word-break: break-word;\n\n  "," {\n    font-size: 80px;\n  }\n"])),W.a.gt.xs),Dn=C.a.div(D||(D=Object(B.a)(["\n  margin-top: 0.5rem;\n  width: 100%;\n  max-width: 500px;\n"]))),Un=function(n){var e=n.data,t=e.introduction,a=e.author,r=e.tagline,i=e.description,o=e.ctaLink,l=e.ctaLabel;return Z.a.createElement(In,null,Z.a.createElement(Fn,null,t),Z.a.createElement(Jn,null,a),Z.a.createElement(Sn,null,r),Z.a.createElement(Dn,{dangerouslySetInnerHTML:{__html:i}}),Z.a.createElement(yn,{label:l,link:o}),Z.a.createElement(Ln,null))},Xn=t("Bl7J"),qn=(t("whKl"),t("sRKZ"),C.a.article(U||(U=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 2.5rem;\n  margin-top: 2.5rem;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),W.a.gt.xs),C.a.article(X||(X=Object(B.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--radius);\n\n  & .gatsby-image-wrapper {\n    max-height: 300px;\n  }\n"]))),C.a.div(q||(q=Object(B.a)(["\n  pointer-events: none;\n  z-index: 1;\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 3rem;\n  width: 3rem;\n  color: var(--title-color);\n  background: var(--bg-code);\n  align-items: center;\n  border-radius: var(--radius);\n  font-weight: 500;\n  line-height: 1rem;\n"]))),Object(C.a)(an.Link)(R||(R=Object(B.a)(["\n  text-decoration: none;\n\n  &:hover h2 {\n    color: var(--primary-color);\n  }\n"]))),C.a.div(K||(K=Object(B.a)(["\n  ",";\n  width: 100%;\n  margin-top: 2.5rem;\n"])),un.b),t("vrFN")),Rn=t("Q+NF");e.default=function(n){var e=n.data,t={author:e.site.siteMetadata.author,tagline:e.hero.frontmatter.tagline,description:e.hero.html,introduction:e.hero.frontmatter.introduction,ctaLabel:e.hero.frontmatter.cta_label,ctaLink:e.hero.frontmatter.cta_link};return Z.a.createElement(Xn.a,{menuLinks:Rn.b},Z.a.createElement(qn.a,{title:"Home"}),Z.a.createElement(Un,{data:t}),Z.a.createElement(en,{data:e.about}),Z.a.createElement(jn,{featured:e.featuredProjects.nodes}),Z.a.createElement(dn,{data:e.contact}))}},bjXa:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a,r=t("MUpH"),i=t("5D9J").a.a(a||(a=Object(r.a)(["\n  text-decoration: none;\n\n  &:hover > * {\n    cursor: pointer;\n    color: var(--primary-color);\n  }\n"])))},sRKZ:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var a,r=t("MUpH"),i=t("5D9J"),o=t("sH8X"),l=i.a.section(a||(a=Object(r.a)(["\n  white-space: pre-line;\n\n  ","\n  max-width: unset;\n  max-height: 180px;\n  position: relative;\n  padding: 10px;\n  margin: 0;\n\n  > p {\n    height: 100%;\n    margin: 0;\n    font-size: 0.8rem;\n    overflow: hidden;\n  }\n"])),o.a)}}]);
//# sourceMappingURL=component---src-pages-index-js-1219d49d47ceb449c123.js.map