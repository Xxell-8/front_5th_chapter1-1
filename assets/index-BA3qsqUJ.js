(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const m=e=>{var a;e.template?(document.getElementById("root").innerHTML=e.template,(a=e.init)==null||a.call(e)):document.getElementById("root").innerHTML=e};class f{constructor(){this.baseUrl="/front_5th_chapter1-1"}render(){const a=this.getMatched();a&&m(a)}getMatched(){}navigate(){}addBasePath(a){return this.baseUrl+a}removeBasePath(a){return a.replace(this.baseUrl,"")}}const p=()=>({init:()=>{const n=document.querySelector("a");n&&n.addEventListener("click",r=>{r.preventDefault(),window.navigate(r.target.href.replace(location.origin,""))})},template:`
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
  `}),h=()=>({init:()=>{const n=document.getElementById("login-form");n&&n.addEventListener("submit",r=>{r.preventDefault(),S({username:new FormData(r.target).get("username"),email:"",bio:""})})},template:`
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
  `}),g=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,b=[{name:"홈",href:"/"},{name:"로그인",href:"/login"}],v=[{name:"홈",href:"/"},{name:"프로필",href:"/profile"},{name:"로그아웃",href:"#",id:"logout"}],x=()=>{const e=()=>{const r=document.getElementById("nav");r&&r.addEventListener("click",t=>{t.preventDefault(),t.target.id==="logout"?N():t.target.href&&t.target.href!==location.href&&window.navigate(t.target.href.replace(location.origin,""))})},a=r=>location.pathname===r?"text-blue-600 font-bold":"text-gray-600",n=`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav id="nav" class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(i()?v:b).map(r=>`<li><a href=${r.href} class="${a(r.href)}" ${r.id?`id=${r.id}`:""}>${r.name}</a></li>`).join("")}
      </ul>
    </nav>
  `;return{init:e,template:n}},d=e=>{const a=x(),n=()=>{var t;a.init(),(t=e.init)==null||t.call(e)},r=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${a.template}
        ${e.template||e}
        ${g}
      </div>
    </div>
  `;return{init:n,template:r}},w=[{id:1,user:{name:"홍길동",image:"https://placehold.co/40"},content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createAt:"5분 전"},{id:2,user:{name:"김철수",image:"https://placehold.co/40"},content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createAt:"15분 전"},{id:3,user:{name:"이영희",image:"https://placehold.co/40"},content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createAt:"30분 전"},{id:4,user:{name:"박민수",image:"https://placehold.co/40"},content:"주말에 등산 가실 분 계신가요? 함께 가요!",createAt:"1시간 전"},{id:5,user:{name:"정수연",image:"https://placehold.co/40"},content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createAt:"2시간 전"}],y=`
  <div class="mb-4 bg-white rounded-lg shadow p-4">
    <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
    <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
  </div>
`,P=e=>`
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
`,E=`
  <main class="p-4">
    ${y}
    <div class="space-y-4">
      ${w.map(P).join("")}
    </div>
  </main>
`,L=()=>d(E),O=()=>{const e=M(),a=()=>{const r=document.getElementById("profile-form");r&&r.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(t.target);u({username:(s==null?void 0:s.get("username"))||"",email:(s==null?void 0:s.get("email"))||"",bio:(s==null?void 0:s.get("bio"))||""})})},n=`
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
  `;return{init:a,template:n}},$=()=>d(O()),o={HOME:{name:"홈",path:"/",hash:"#/",component:L},LOGIN:{name:"로그인",path:"/login",hash:"#/login",component:h,isPublic:!0},PROFILE:{name:"프로필",path:"/profile",hash:"#/profile",component:$,isPrivate:!0},PAGE_NOT_FOUND:{name:"404",path:"/404",hash:"#/404",component:p}},I=Object.values(o),i=()=>!!localStorage.getItem("user"),M=()=>i?JSON.parse(localStorage.getItem("user")):null,u=e=>{localStorage.setItem("user",JSON.stringify(e))},S=e=>{u(e),window.navigate(o.HOME.path,!0)},N=()=>{localStorage.clear(),window.navigate(o.LOGIN.path,!0)},U=e=>e.isPublic&&i()?o.HOME:e.isPrivate&&!i()?o.LOGIN:null;class A extends f{constructor(){super()}getMatched(){const a=this.removeBasePath(location.pathname),n=I.find(t=>t.path===a);if(!n)return this.navigate(o.PAGE_NOT_FOUND.path,!0),null;const r=U(n);return r?(this.navigate(r.path,!0),null):n.component()}navigate(a,n=!1){n?history.replaceState({},"",this.addBasePath(a)):history.pushState({},"",this.addBasePath(a)),window.dispatchEvent(new Event("popstate"))}}const c=new A;window.navigate=c.navigate;window.addEventListener("popstate",()=>c.render());c.render();
