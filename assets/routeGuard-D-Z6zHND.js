(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m=e=>{var o;e.template?(document.getElementById("root").innerHTML=e.template,(o=e.init)==null||o.call(e)):document.getElementById("root").innerHTML=e};class A{constructor(){}render(){const o=this.getMatched();o&&m(o)}getMatched(){}navigate(){}}const f=()=>({init:()=>{const r=document.querySelector("a");r&&r.addEventListener("click",a=>{a.preventDefault(),window.navigate(a.target.href.replace(location.origin,""))})},template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}),l=()=>!!localStorage.getItem("user"),p=()=>l?JSON.parse(localStorage.getItem("user")):null,c=e=>{localStorage.setItem("user",JSON.stringify(e))},b=e=>{c(e),window.navigate(n.HOME.path,!0)},g=()=>{localStorage.clear(),window.navigate(n.LOGIN.path,!0)},h=()=>({init:()=>{const r=document.getElementById("login-form");r&&r.addEventListener("submit",a=>{a.preventDefault(),b({username:new FormData(a.target).get("username"),email:"",bio:""})})},template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" name="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `}),v=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,x=[{name:"홈",href:"/"},{name:"로그인",href:"/login"}],y=[{name:"홈",href:"/"},{name:"프로필",href:"/profile"},{name:"로그아웃",href:"#",id:"logout"}],w=()=>{const e=()=>{const a=document.getElementById("nav");a&&a.addEventListener("click",t=>{t.preventDefault(),t.target.id==="logout"?g():t.target.href&&t.target.href!==location.href&&window.navigate(t.target.href.replace(location.origin,""))})},o=a=>S(location.pathname)===a||location.hash===`#${a}`?"text-blue-600 font-bold":"text-gray-600",r=`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav id="nav" class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(l()?y:x).map(a=>`<li><a href=${a.href} class="${o(a.href)}" ${a.id?`id=${a.id}`:""}>${a.name}</a></li>`).join("")}
      </ul>
    </nav>
  `;return{init:e,template:r}},d=e=>{const o=w(),r=()=>{var t;o.init(),(t=e.init)==null||t.call(e)},a=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${o.template}
        ${e.template||e}
        ${v}
      </div>
    </div>
  `;return{init:r,template:a}},P=[{id:1,user:{name:"홍길동",image:"https://placehold.co/40"},content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createAt:"5분 전"},{id:2,user:{name:"김철수",image:"https://placehold.co/40"},content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createAt:"15분 전"},{id:3,user:{name:"이영희",image:"https://placehold.co/40"},content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createAt:"30분 전"},{id:4,user:{name:"박민수",image:"https://placehold.co/40"},content:"주말에 등산 가실 분 계신가요? 함께 가요!",createAt:"1시간 전"},{id:5,user:{name:"정수연",image:"https://placehold.co/40"},content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createAt:"2시간 전"}],E=`
  <div class="mb-4 bg-white rounded-lg shadow p-4">
    <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
    <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
  </div>
`,L=e=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="${e.user.image}" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${e.user.name}</p>
        <p class="text-sm text-gray-500">${e.createAt}</p>
      </div>
    </div>
    <p>${e.content}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`,$=`
  <main class="p-4">
    ${E}
    <div class="space-y-4">
      ${P.map(L).join("")}
    </div>
  </main>
`,O=()=>d($),I=()=>{const e=p(),o=()=>{const a=document.getElementById("profile-form");a&&a.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(t.target);c({username:(s==null?void 0:s.get("username"))||"",email:(s==null?void 0:s.get("email"))||"",bio:(s==null?void 0:s.get("bio"))||""})})},r=`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
            >
            <input
              type="text"
              id="username"
              name="username"
              value="${(e==null?void 0:e.username)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${(e==null?void 0:e.email)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${(e==null?void 0:e.bio)||""}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </main>
  `;return{init:o,template:r}},M=()=>d(I()),u="/front_5th_chapter1-1",n={HOME:{name:"홈",path:"/",hash:"#/",component:O},LOGIN:{name:"로그인",path:"/login",hash:"#/login",component:h,isPublic:!0},PROFILE:{name:"프로필",path:"/profile",hash:"#/profile",component:M,isPrivate:!0},PAGE_NOT_FOUND:{name:"404",path:"/404",hash:"#/404",component:f}},N=Object.values(n),T=e=>u+e,S=e=>e.replace(u,""),_=e=>e.isPublic&&l()?n.HOME:e.isPrivate&&!l()?n.LOGIN:null;export{A as R,N as a,n as b,_ as c,T as d,S as r};
