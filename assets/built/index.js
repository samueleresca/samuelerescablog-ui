!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");!function(){const e=document.querySelector("#scroll-to-top"),t=1200;window.onscroll=function(){document.body.scrollTop>t||document.documentElement.scrollTop>t?e.style.display="block":e.style.display="none"},e.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}(),function(){if(!e)return;new IntersectionObserver(((t,o)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const o=await t.text(),n=(new DOMParser).parseFromString(o,"text/html"),r=n.querySelectorAll(".post"),c=n.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:r,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:n,nextLink:r}=t;n.forEach((e=>{document.querySelector(".postfeed").append(e)})),r?(e=r,o.observe(document.querySelector(".post:last-of-type"))):o.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}()}();
//# sourceMappingURL=index.js.map
