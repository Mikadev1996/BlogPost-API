(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEt0lEQVR4nO2aW4hVVRjH/2u0YOiuZTNmMApZaU6YvQyOXSYKTCLs9hAhOimZL/oQlL1UUFBQkBZRQi/2YCAxCF0kkQITM42osUDoRuhMzUzaTF5mRs/8eth7mMNprX3OWnvvMwPuH8zL2vv7f5c5Z531fXtLBQUFBQUFBQUFFyYmrQBwuaQ5kpolXSKpX1KvMeZ3T50WSbMlXS3ptKReSceMMUNpY8wcYC7wPHAQKGHnOLAd6EjQ6YjvOe7QKAFfA5vjAk0uwCzgLWDEEbCLQ8DSMp124LCnxgiwBbhmspLvAAY8gy7nHPBC/Hc+hU4/cFe9k18HjKYIOmtGgSfrlfxy0v3H8qIEPJB38guAoYQgfgCeARYBVwGNwM3AGmCfRzL7gNWxbWOs1RprdyfYDQI35VmAzx2OTwOdQEMV+4eAvoQE+oCVVTQagLWxTxu7s816wvG9Dof/AEs8dOYBPRadHmCeh86S2LcN509tMMCnFkdjwPIArVbgVJnOKWBRgM4KRwE+9tWq5uhS4KzF0c4Ump1lOmtS6HRZ4hoGLgvVtDlZ6ah0W0rdHcCOlBpLHbE9GKI33bE+37LWJ+lgiJMy1qe0l6QDkgYU9Qzl3Bgi5trFZ1vWjhpjxkKcjGOMGTTGDKbUGJN01HKpOUTPVYCZlrWTIQ5ywhZLUI/gKsCAZS2owjkx17L2d4iQqwA/W9ZuY7I6sf+zXVLl19Fr/pAIMN+x076SmZOUAM9VxLYwRMc5EQK6Jd1SsTwkqcUYk9t+EP+ePyqpTdJ1kkYl/SSpyxhzqOy+6ZK6JbVI2mmMWZV1IOscn4KtmTqa8NcAbCK5+doDNJXZtONxnPYNqBH7qKoE3J2xr2nABwmJl3MMmJOl/6TAVjuC+I1oGJqVn801Jj/OYWBabHsRcD/RjPINYAOwOKvAGoBvHEF0AVlMlWdi7zuqsRbYSDQis/Ed0J5FERYSNRs2XspAf31A8hB1ptUoAZ1ZFOHZhCAeTqn9TmABaqUE3JG2AA3AZw4HZ4A7U2jXuvml4QiOr2viSGucuAFZJekPy+VGSbsI33h6A+18WChpme1CTQWQJGNMv6QVkmzd3BWSdgO2Nroa3wbYhGB9llBzASTJGHNE0SntnOXyLElf4D+l3Sup5GkTgq2B8iuAJBlj9kh62nF5tqIiLPDQG5D0iW8cWeFdAEkyxrwv6WXH5SZFRWj1kNwWEocnv2SuCLyesPOepIZfB6CZ6NCSNzWP8n2L8GaC02HgkQTbG4Bf65D8h7kkHydhgLcTnJeATRa724G/6pD898CVuRWgrAhbqwSyDbg4vv8+4N+cE4foq3VtrslXFOLFKgF9SXT2d71gcR73M0BfPiLDjtWnCBtwvzaTxDDwGPBEysTPAhvrnnhFER7H3UHaOAEsi20N8FVg8vvxOIPkCtAG/FlD0D3ArRW2i/F7KeME0Wwg6FyTG0ALyS84/Ahc77B9r4bEzxBNgWbUO7eaIXrSvMsS/AGg8vleud0M3C9ljcQFsj3Cm3oQDT1fZWJz7AIaa7B7qiLxUeBd16dmygPcA7xGPNCs4X4D7CU6M2xhKrwsWW+AJvI+yRUUFBQUFBQUFFyA/AczM3ie6BInAgAAAABJRU5ErkJggg=="},,function(e,t,a){e.exports=a(40)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(11),r=a.n(l),o=a(4),s=a(0),m=a(2),i=a(7),u=a.n(i),p=(a(23),a(25),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),p=i[0],d=i[1],E=Object(s.f)();Object(n.useEffect)(function(){h()},[]),Object(n.useEffect)(function(){u.a.load({custom:{families:["Voga-Medium"],urls:["./fonts/Voga-Medium.otf"]}}),f()});var f=function(){var e=document.getElementById("theme-toggle"),t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");t&&document.documentElement.setAttribute("data-theme",t),"light"===localStorage.getItem("theme")?l(!1):l(!0),e.onclick=function(){l(function(e){return!e});var e="light";"light"===document.documentElement.getAttribute("data-theme")&&(e="dark"),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)}},h=function(){var e=localStorage.getItem("token");e&&d(e)};return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-content"},c.a.createElement("div",{className:"nav-title"},c.a.createElement(o.b,{to:"/"},c.a.createElement("h1",{style:{fontFamily:"Voga-Medium",fontSize:"28px"}},"EXPRESS-BLOG"))),c.a.createElement("div",{className:"nav-links"},c.a.createElement(o.b,{to:"/posts"},c.a.createElement("p",null,"Posts")),!p&&c.a.createElement(o.b,{to:"/sign-up"},c.a.createElement("p",null,"Sign Up")),!p&&c.a.createElement(o.b,{to:"/sign-in"},c.a.createElement("p",null,"Sign in")),p&&c.a.createElement("button",{onClick:function(e){e.preventDefault(),fetch("http://localhost:5000/api/users/sign-out",{method:"POST"}).then(function(e){localStorage.removeItem("user"),localStorage.removeItem("token"),d(""),E("/")}).catch(function(e){console.log(e)})}},"Sign Out"),p&&c.a.createElement(o.b,{to:"/profile"},c.a.createElement("p",null,"Your Profile"))),c.a.createElement("div",{id:"dark-mode-container"},c.a.createElement("p",null,"Dark Mode"),c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",id:"theme-toggle",checked:a}),c.a.createElement("span",{className:"slider round"})))))});a(27);var d=function(){u.a.load({custom:{families:["Voga-Medium"],urls:["./fonts/Voga-Medium.otf"]}});var e={fontFamily:"Voga-Medium"};return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"home-content"},c.a.createElement("div",{className:"content-left"},c.a.createElement("h1",{style:e},"Welcome"),c.a.createElement("p",{style:e},"Mika's First FullStack Development using MERN: MongoDB, Express.js, React, Node.js")),c.a.createElement("div",{className:"content-right"},c.a.createElement("div",{id:"home-image"}))))};var E=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Error 404"),c.a.createElement("p",null,"Page not found"))};a(9);var f=function(){var e=Object(s.f)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],d=i[1];return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"content"},c.a.createElement("div",{id:"form-container"},c.a.createElement("div",{className:"form-header"},c.a.createElement("h2",null,"Sign In")),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=JSON.stringify({username:l,password:u});fetch("http://localhost:5000/api/users/sign-in",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){void 0!==t.token?(localStorage.setItem("user",JSON.stringify(t.user)),localStorage.setItem("token",JSON.stringify(t.token)),e("/posts")):window.alert("Error, incorrect user/password")})},className:"account-form"},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("input",{type:"text",placeholder:"Username",id:"username",name:"username",onChange:function(e){return r(e.target.value)}}),c.a.createElement("small",null,"Error Message")),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",placeholder:"Password",id:"password",maxLength:"16",name:"password",onChange:function(e){return d(e.target.value)}}),c.a.createElement("small",null,"Error Message")),c.a.createElement("div",null,c.a.createElement("button",{className:"form-submit",type:"submit"},"Submit"))))))};var h=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"content"},c.a.createElement("div",{id:"form-container"},c.a.createElement("div",{className:"form-header"},c.a.createElement("h2",null,"Create Account")),c.a.createElement("form",{method:"POST",action:"http://localhost:5000/api/users/sign-up",className:"account-form"},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("input",{type:"text",placeholder:"Username",id:"username",name:"username"}),c.a.createElement("small",null,"Error Message")),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",placeholder:"Password",id:"password",maxLength:"16",name:"password"}),c.a.createElement("small",null,"Error Message")),c.a.createElement("div",null,c.a.createElement("button",{className:"form-submit",type:"submit"},"Submit"))))))},v=a(5),g=(a(30),a(6)),b=a.n(g),N=(a(33),function(e){var t=e.postid,a=e.title,l=e.text,r=e.user,s=e.timestamp,i=e.likes,u=e.isAuthor,p=e.published,d=b()(s).format("DD/MM/YYYY"),E=Object(n.useState)(p),f=Object(m.a)(E,2),h=f[0],v=f[1];return c.a.createElement("div",{className:"post-container"},c.a.createElement("div",{className:"post-likes-container"},c.a.createElement("p",null,i," Likes")),c.a.createElement("div",{className:"post-info"},c.a.createElement(o.b,{to:"/posts/".concat(t)},c.a.createElement("div",{className:"post-header"},c.a.createElement("p",{className:"post-header-text"},"Posted by user/",r.username," ",d," "),c.a.createElement("h2",null,a)),c.a.createElement("div",{className:"post-text"},l),c.a.createElement("div",{className:"post-links"},c.a.createElement("a",{href:"/posts/".concat(t,"#comment-section-container")},c.a.createElement("p",{className:"post-links-text"},"View Comments")))),u&&c.a.createElement("div",{className:"post-publish"},c.a.createElement("button",{onClick:function(){return function(){var e=localStorage.getItem("token"),a=JSON.stringify({published:!h});fetch("http://localhost:5000/api/posts/".concat(t,"/update"),{method:"PUT",body:a,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return e.json()}).then(function(e){v(function(e){return!e})}).catch(function(e){console.log(e)})}()}},h?"Hide Post":"Publish Post"))))}),A=(a(10),function(){return c.a.createElement("div",{className:"create-post-bar"},c.a.createElement("div",{className:"create-post-profile-pic-container"},c.a.createElement("img",{className:"create-post-profile-pic",src:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b",alt:"default"})),c.a.createElement("div",{className:"create-post-main"},c.a.createElement(o.b,{to:"/posts/create"},c.a.createElement("p",null,"Create Post"))))}),O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){r()},[]);var r=function(){fetch("http://localhost:5000/api/posts").then(function(e){return e.json()}).then(function(e){l(function(t){return[].concat(Object(v.a)(t),Object(v.a)(e.posts))})})};return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"content"},c.a.createElement("div",{className:"container"},c.a.createElement(A,null),c.a.createElement("div",{className:"post-list-container"},a.map(function(e){if(e.published)return c.a.createElement(N,{postid:e._id,title:e.title,text:e.text,user:e.user,timestamp:e.timestamp,likes:e.likes,isAuthor:!1,published:e.published})})))),c.a.createElement("footer",null))},S=a(13),j=a(12),k=a.n(j),w=(a(36),a(38),function(e){var t=e.comments;return c.a.createElement("div",{className:"comment-section-container"},t.map(function(e){return c.a.createElement("div",{className:"comment-container"},c.a.createElement("div",{className:"comment-header"},c.a.createElement("img",{className:"comment-profile-pic",src:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b",alt:"default"}),c.a.createElement("p",null,e.username),c.a.createElement("p",{className:"comment-timestamp"},"\xb7 ",b()(e.timestamp).fromNow(!0)," ago")),c.a.createElement("p",{className:"comment-text"},e.text))}))}),y=function(e){var t=e.postid,a=e.handleNewComment,l=Object(n.useState)(""),r=Object(m.a)(l,2),o=r[0],s=r[1],i=function(){document.getElementById("text-box").value=""};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=JSON.stringify({username:"Anonymous",text:o});fetch("http://localhost:5000/api/comments/".concat(t),{method:"POST",body:n,headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a(e.comment),i(),s("")}).catch(function(e){console.log(e)})},className:"add-comment-container"},c.a.createElement("textarea",{id:"text-box",placeholder:"What are your thoughts?",onChange:function(e){return s(e.target.value)}}),c.a.createElement("div",{className:"submit-comment-container"},c.a.createElement("button",{type:"submit",className:"submit-comment"},"Comment")))},x=function(){var e=Object(s.g)().postid,t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)({title:"",text:"",likes:0,user:{_id:"",username:""},timestamp:""}),i=Object(m.a)(o,2),u=i[0],d=i[1];Object(n.useEffect)(function(){E()},[]);var E=function(){fetch("http://localhost:5000/api/posts/".concat(e)).then(function(e){return e.json()}).then(function(e){d(e.post),r(e.comments)}).catch(function(e){return console.log(e)})};return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"content"},c.a.createElement("div",{className:"view-post-content-header"}),c.a.createElement("div",{className:"view-post-container"},c.a.createElement("div",{className:"view-post-content"},c.a.createElement("div",{className:"view-post-likes-container"},c.a.createElement("p",null,u.likes," Likes"),c.a.createElement("img",{src:k.a,alt:"like",onClick:function(){return function(){d(function(e){return Object(S.a)({},e,{likes:e.likes+1})});var t=JSON.stringify({likes:u.likes+1});fetch("http://localhost:5000/api/posts/".concat(e,"/like"),{method:"PUT",body:t,headers:{"Content-Type":"application/json"}}).catch(function(e){console.log(e)})}()},className:"like-icon"})),c.a.createElement("div",{className:"view-post-info"},c.a.createElement("div",{className:"post-header"},c.a.createElement("p",null,"Posted by user/",u.user.username," ",b()(u.timestamp).format("DD/MM/YYYY")),c.a.createElement("h2",null,u.title)),c.a.createElement("div",{className:"view-post-text"},u.text),c.a.createElement(y,{postid:e,handleNewComment:function(e){r(function(t){return[e].concat(Object(v.a)(t))})}}))),c.a.createElement("hr",{className:"hr-comments"}),c.a.createElement(w,{comments:l}))),c.a.createElement("footer",null))},C=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),o=Object(m.a)(r,2),i=o[0],u=o[1],d=Object(n.useState)(!1),E=Object(m.a)(d,2),f=E[0],h=E[1],v=Object(s.f)();return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("main",{className:"content"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{id:"form-container"},c.a.createElement("div",{className:"form-header"},c.a.createElement("h2",null,"Create Post")),c.a.createElement("form",{onSubmit:function(e){var t=localStorage.getItem("token");e.preventDefault();var n=JSON.stringify({title:a,text:i,published:f});fetch("http://localhost:5000/api/posts/create",{method:"POST",body:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(e){e.error?(localStorage.removeItem("user"),localStorage.removeItem("token"),v("/")):v("/posts")}).catch(function(e){console.log(e),v("/")})}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"title"},"Username"),c.a.createElement("input",{type:"text",placeholder:"Title",id:"title",name:"title",required:"true",onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"text"},"Password"),c.a.createElement("textarea",{placeholder:"Text",id:"text",maxLength:"500",name:"text",required:"true",onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{className:"form-control form-publish"},"Set Public?",c.a.createElement("input",{type:"checkbox",id:"published",name:"published",onChange:function(e){return h(function(e){return!e})}})),c.a.createElement("div",null,c.a.createElement("button",{className:"form-submit",type:"submit"},"Submit")))))))},M=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(s.f)();Object(n.useEffect)(function(){o()},[]);var o=function(){var e=localStorage.getItem("token");fetch("http://localhost:5000/api/posts/profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return e.json()}).then(function(e){e.error?(localStorage.removeItem("user"),localStorage.removeItem("token"),r("/")):l(function(t){return[].concat(Object(v.a)(t),Object(v.a)(e.posts))})}).catch(function(e){return console.log(e)})};return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"post-list-container"},a.map(function(e){return c.a.createElement(N,{postid:e._id,title:e.title,text:e.text,user:e.user,timestamp:e.timestamp,likes:e.likes,isAuthor:!0,published:e.published})})))),c.a.createElement("footer",null))},B=function(){return c.a.createElement(o.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",element:c.a.createElement(d,null)}),c.a.createElement(s.a,{path:"/profile",element:c.a.createElement(M,null)}),c.a.createElement(s.a,{path:"/posts",element:c.a.createElement(O,null)}),c.a.createElement(s.a,{path:"/posts/:postid",element:c.a.createElement(x,null)}),c.a.createElement(s.a,{path:"/posts/create",element:c.a.createElement(C,null)}),c.a.createElement(s.a,{path:"/sign-in",element:c.a.createElement(f,null)}),c.a.createElement(s.a,{path:"/sign-up",element:c.a.createElement(h,null)}),c.a.createElement(s.a,{path:"*",element:c.a.createElement(E,null)})))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)))}],[[14,2,1]]]);
//# sourceMappingURL=main.3bf784f3.chunk.js.map