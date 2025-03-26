(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const m=e=>{var n;e.template?(document.getElementById("root").innerHTML=e.template,(n=e.init)==null||n.call(e)):document.getElementById("root").innerHTML=e};class f{constructor(){}render(){const n=this.getMatched();n&&m(n)}getMatched(){}navigate(){}}const h=()=>({init:()=>{const s=document.querySelector("a");s&&s.addEventListener("click",t=>{t.preventDefault(),window.navigate(t.target.href.replace(location.origin,""))})},template:`
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
  `}),g=()=>({init:()=>{const s=document.getElementById("login-form");s&&s.addEventListener("submit",t=>{t.preventDefault(),A({username:new FormData(t.target).get("username"),email:"",bio:""})})},template:`
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
  `}),p=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,b=[{name:"홈",href:"/"},{name:"로그인",href:"/login"}],v=[{name:"홈",href:"/"},{name:"프로필",href:"/profile"},{name:"로그아웃",href:"#",id:"logout"}],x=e=>e.replace(M,""),w=()=>{const e=()=>{const t=document.getElementById("nav");t&&t.addEventListener("click",a=>{a.preventDefault(),a.target.id==="logout"?T():a.target.href&&a.target.href!==location.href&&window.navigate(a.target.href.replace(location.origin,""))})},n=t=>x(location.pathname)===t||location.hash===`#${t}`?"text-blue-600 font-bold":"text-gray-600",s=`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav id="nav" class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(l()?v:b).map(t=>`<li><a href=${t.href} class="${n(t.href)}" ${t.id?`id=${t.id}`:""}>${t.name}</a></li>`).join("")}
      </ul>
    </nav>
  `;return{init:e,template:s}},d=e=>{const n=w(),s=()=>{var a;n.init(),(a=e.init)==null||a.call(e)},t=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${n.template}
        ${e.template||e}
        ${p}
      </div>
    </div>
  `;return{init:s,template:t}},y=[{id:1,user:{name:"홍길동",image:"https://placehold.co/40"},content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createAt:"5분 전"},{id:2,user:{name:"김철수",image:"https://placehold.co/40"},content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createAt:"15분 전"},{id:3,user:{name:"이영희",image:"https://placehold.co/40"},content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createAt:"30분 전"},{id:4,user:{name:"박민수",image:"https://placehold.co/40"},content:"주말에 등산 가실 분 계신가요? 함께 가요!",createAt:"1시간 전"},{id:5,user:{name:"정수연",image:"https://placehold.co/40"},content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createAt:"2시간 전"}],E=`
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
`,P=`
  <main class="p-4">
    ${E}
    <div class="space-y-4">
      ${y.map(L).join("")}
    </div>
  </main>
`,O=()=>d(P),$=()=>{const e=S(),n=()=>{const t=document.getElementById("profile-form");t&&t.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(a.target);u({username:(r==null?void 0:r.get("username"))||"",email:(r==null?void 0:r.get("email"))||"",bio:(r==null?void 0:r.get("bio"))||""})})},s=`
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
  `;return{init:n,template:s}},I=()=>d($()),M="/front_5th_chapter1-1",o={HOME:{name:"홈",path:"/",hash:"#/",component:O},LOGIN:{name:"로그인",path:"/login",hash:"#/login",component:g,isPublic:!0},PROFILE:{name:"프로필",path:"/profile",hash:"#/profile",component:I,isPrivate:!0},PAGE_NOT_FOUND:{name:"404",path:"/404",hash:"#/404",component:h}},N=Object.values(o),l=()=>!!localStorage.getItem("user"),S=()=>l?JSON.parse(localStorage.getItem("user")):null,u=e=>{localStorage.setItem("user",JSON.stringify(e))},A=e=>{u(e),window.navigate(o.HOME.path,!0)},T=()=>{localStorage.clear(),window.navigate(o.LOGIN.path,!0)},_=e=>e.isPublic&&l()?o.HOME:e.isPrivate&&!l()?o.LOGIN:null;class D extends f{constructor(){super()}getMatched(){const n=N.find(t=>t.hash===location.hash);if(!n)return this.navigate(o.PAGE_NOT_FOUND.hash,!0),null;const s=_(n);return s?(this.navigate(s.hash,!0),null):n.component()}navigate(n){location.hash=n,window.dispatchEvent(new Event("hashchange"))}}const c=new D;window.navigate=c.navigate;window.addEventListener("hashchange",()=>c.render());c.render();
