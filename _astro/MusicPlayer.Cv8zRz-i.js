import{o as La,b as $a,i as Sa,s as q,e as yt,a as at}from"./props.WrJ9AHGX.js";import{a7 as Ta,a9 as Ma,aF as Fa,aG as za,aH as je,u as Ie,aI as Ca,aJ as Pe,aK as Ra,a0 as Ae,aL as kt,y as ja,aM as Ia,j as Et,k as ft,a as b,p as Pa,b as Aa,h as d,m as g,ag as Y,i as t,f as R,s as f,c as n,r as o,ar as Da,t as K,n as w}from"./utils.BZFIs17i.js";import{a as Ba,s as ut}from"./render.BZAoEM4_.js";import{i as h}from"./if.DSvGGf2i.js";import{e as Wa,i as Oa}from"./each.DLrycKnL.js";import{I as x}from"./Icon.Bs0XzUvZ.js";import{I as Ya}from"./zh_TW.B9ptEsWo.js";import{i as Ha}from"./translation.DMp1dLlp.js";import"./navBarConfig.BjxhkySS.js";const Na=()=>performance.now(),st={tick:l=>requestAnimationFrame(l),now:()=>Na(),tasks:new Set};function De(){const l=st.now();st.tasks.forEach(i=>{i.c(l)||(st.tasks.delete(i),i.f())}),st.tasks.size!==0&&st.tick(De)}function Ua(l){let i;return st.tasks.size===0&&st.tick(De),{promise:new Promise(u=>{st.tasks.add(i={c:l,f:u})}),abort(){st.tasks.delete(i)}}}function Dt(l,i){Pe(()=>{l.dispatchEvent(new CustomEvent(i))})}function qa(l){if(l==="float")return"cssFloat";if(l==="offset")return"cssOffset";if(l.startsWith("--"))return l;const i=l.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(u=>u[0].toUpperCase()+u.slice(1)).join("")}function ze(l){const i={},u=l.split(";");for(const k of u){const[_,v]=k.split(":");if(!_||v===void 0)break;const I=qa(_.trim());i[I]=v.trim()}return i}const Ka=l=>l;function Va(l,i,u,k){var _=(l&Ca)!==0,v="both",I,V=i.inert,lt=i.style.overflow,y,E;function X(){return Pe(()=>I??=u()(i,k?.()??{},{direction:v}))}var G={is_global:_,in(){i.inert=V,Dt(i,"introstart"),y=ee(i,X(),E,1,()=>{Dt(i,"introend"),y?.abort(),y=I=void 0,i.style.overflow=lt})},out(N){i.inert=!0,Dt(i,"outrostart"),E=ee(i,X(),y,0,()=>{Dt(i,"outroend"),N?.()})},stop:()=>{y?.abort(),E?.abort()}},J=Ta;if((J.transitions??=[]).push(G),Ba){var H=_;if(!H){for(var m=J.parent;m&&(m.f&Ma)!==0;)for(;(m=m.parent)&&(m.f&Fa)===0;);H=!m||(m.f&za)!==0}H&&je(()=>{Ie(()=>G.in())})}}function ee(l,i,u,k,_){var v=k===1;if(Ra(i)){var I,V=!1;return Ae(()=>{if(!V){var N=i({direction:v?"in":"out"});I=ee(l,N,u,k,_)}}),{abort:()=>{V=!0,I?.abort()},deactivate:()=>I.deactivate(),reset:()=>I.reset(),t:()=>I.t()}}if(u?.deactivate(),!i?.duration)return _(),{abort:kt,deactivate:kt,reset:kt,t:()=>k};const{delay:lt=0,css:y,tick:E,easing:X=Ka}=i;var G=[];if(v&&u===void 0&&(E&&E(0,1),y)){var J=ze(y(0,1));G.push(J,J)}var H=()=>1-k,m=l.animate(G,{duration:lt,fill:"forwards"});return m.onfinish=()=>{m.cancel();var N=u?.t()??1-k;u?.abort();var L=k-N,pt=i.duration*Math.abs(L),j=[];if(pt>0){var rt=!1;if(y)for(var Z=Math.ceil(pt/16.666666666666668),tt=0;tt<=Z;tt+=1){var et=N+L*X(tt/Z),P=ze(y(et,1-et));j.push(P),rt||=P.overflow==="hidden"}rt&&(l.style.overflow="hidden"),H=()=>{var D=m.currentTime;return N+L*X(D/pt)},E&&Ua(()=>{if(m.playState!=="running")return!1;var D=H();return E(D,1-D),!0})}m=l.animate(j,{duration:pt,fill:"forwards"}),m.onfinish=()=>{H=()=>k,E?.(k,1-k),_()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=kt)},deactivate:()=>{_=kt},reset:()=>{k===0&&E?.(1,0)},t:()=>H()}}function Ce(l,i){return l===i||l?.[Ia]===i}function Re(l={},i,u,k){return je(()=>{var _,v;return ja(()=>{_=v,v=[],Ie(()=>{l!==u(...v)&&(i(l,...v),_&&Ce(u(..._),l)&&i(null,..._))})}),()=>{Ae(()=>{v&&Ce(u(...v),l)&&i(null,...v)})}}),l}function Xa(l){const i=l-1;return i*i*i+1}function Ga(l,{delay:i=0,duration:u=400,easing:k=Xa,axis:_="y"}={}){const v=getComputedStyle(l),I=+v.opacity,V=_==="y"?"height":"width",lt=parseFloat(v[V]),y=_==="y"?["top","bottom"]:["left","right"],E=y.map(L=>`${L[0].toUpperCase()}${L.slice(1)}`),X=parseFloat(v[`padding${E[0]}`]),G=parseFloat(v[`padding${E[1]}`]),J=parseFloat(v[`margin${E[0]}`]),H=parseFloat(v[`margin${E[1]}`]),m=parseFloat(v[`border${E[0]}Width`]),N=parseFloat(v[`border${E[1]}Width`]);return{delay:i,duration:u,easing:k,css:L=>`overflow: hidden;opacity: ${Math.min(L*20,1)*I};${V}: ${L*lt}px;padding-${y[0]}: ${L*X}px;padding-${y[1]}: ${L*G}px;margin-${y[0]}: ${L*J}px;margin-${y[1]}: ${L*H}px;border-${y[0]}-width: ${L*m}px;border-${y[1]}-width: ${L*N}px;min-${V}: 0`}}const Ja={local:{playlist:[{id:1,title:"使一颗心免于哀伤",artist:"知更鸟 / HOYO-MiX / Chevy",cover:"/assets/music/cover/109951169585655912.jpg",url:"/assets/music/使一颗心免于哀伤-哼唱.wav",duration:240}]},behavior:{defaultVolume:.7,defaultShuffle:!0,defaultRepeat:2,position:{bottom:16,right:16}},ui:{animation:{coverRotation:{enable:!0,speed:3}},playlist:{maxHeight:384,width:320}},responsive:{mobile:{position:{bottom:24,right:8}}},errorHandling:{errorDisplayDuration:3e3}};var Qa=R('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Za=R("<img/>"),tr=R('<div class="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 flex items-center justify-center"><!></div>'),er=R('<div class="absolute inset-0 bg-black/20 flex items-center justify-center"><div class="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center"><div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div></div></div>'),ar=R("<button><!></button>"),rr=R('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),ir=R('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),or=R("<button><!></button>"),nr=R('<button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>',1),sr=R("<button><!></button>"),lr=R('<span class="text-sm text-[var(--content-meta)]"></span>'),dr=R('<div class="w-6 h-6 flex items-center justify-center"><!></div>'),cr=R('<span class="ml-2"> </span>'),ur=R('<div role="button" tabindex="0"><!> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> <!></div></div></div>'),vr=R('<div class="playlist-panel float-panel fixed bottom-20 right-4 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 scrollbar-custom"></div></div>'),fr=R(`<!> <div><div style="width: 90px; height: 80px; background-color: var(--card-bg); "><div class="flex items-center gap-2 h-full"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer flex-shrink-0" tabindex="0" role="button"><!> <!></div> <button class="expand-btn w-8 h-8 rounded-full btn-regular border border-[var(--line-divider)] hover:border-[var(--primary)] active:scale-95 transition-all duration-200 flex items-center justify-center flex-shrink-0" tabindex="0" aria-label="展开音乐播放器"><!></button></div></div> <div style="width: 320px; background-color: var(--card-bg);"><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <button><!></button> <!> <!></div> <div class="bottom-controls flex items-center gap-2"><!> <!></div></div> <!></div> <style>@keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes musicWave {
        0%, 100% { transform: scaleY(0.5); }
        50% { transform: scaleY(1); }
    }
    .music-player.collapsed-mode {
        width: 96px;
        height: 80px;
    }
    .music-player {
        max-width: 320px;
        -webkit-user-select: none;
           -moz-user-select: none;
                user-select: none;
    }
    .expanded-player {
        width: 320px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .collapsed-player {
        position: absolute;
        bottom: 0;
        right: 0;
        backdrop-filter: blur(12px);
        border: 1px solid var(--line-divider) !important;
    }
    .expanded-player {
        border: 1px solid var(--line-divider) !important;
    }
    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
    .progress-section div:hover,
    .bottom-controls > div:hover {
        transform: scaleY(1.2);
        transition: transform 0.2s ease;
    }
    @media (max-width: 768px) {
        .music-player {
            max-width: 280px;
            /*left: 8px !important;*/
            bottom: 8px !important;
            right: 8px !important;
        }
        .music-player.expanded {
            width: calc(100vw - 16px);
            max-width: none;
            /*left: 8px !important;*/
            right: 8px !important;
        }
        .playlist-panel {
            width: calc(100vw - 16px) !important;
            /*left: 8px !important;*/
            right: 8px !important;
            max-width: none;
        }
        .controls {
            gap: 8px;
        }
        .controls button {
            width: 36px;
            height: 36px;
        }
        .controls button:nth-child(3) {
            width: 44px;
            height: 44px;
        }
    }
    @media (max-width: 480px) {
        .music-player {
            max-width: 260px;
        }
        .song-title {
            font-size: 14px;
        }
        .song-artist {
            font-size: 12px;
        }
        .controls {
            gap: 6px;
            margin-bottom: 12px;
        }
        .controls button {
            width: 32px;
            height: 32px;
        }
        .controls button:nth-child(3) {
            width: 40px;
            height: 40px;
        }
        .playlist-item {
            padding: 8px 12px;
        }
        .playlist-item .w-10 {
            width: 32px;
            height: 32px;
        }
    }
    @keyframes slide-up {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .animate-slide-up {
        animation: slide-up 0.3s ease-out;
    }
    @media (hover: none) and (pointer: coarse) {
        .music-player button,
        .playlist-item {
            min-height: 44px;
        }
        .progress-section > div,
        .bottom-controls > div:nth-child(2) {
            height: 12px;
        }
    }
    /* 自定义旋转动画，停止时保持当前位置 */
    @keyframes spin-continuous {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .cover-container img {
        animation: spin-continuous 3s linear infinite;
        animation-play-state: paused;
    }
    .cover-container img.spinning {
        animation-play-state: running;
    }
    .cover-container img:hover {
        animation-play-state: var(--rotation-pause-hover, running);
    }
    /* 让主题色按钮更有视觉反馈 */
    button.bg-\\[var\\(--primary\\)\\] {
        box-shadow: 0 0 0 2px var(--primary);
        border: none;
    }
    /* 播放列表自定义滚动条样式 */
    .scrollbar-custom {
        scrollbar-width: thin;
        scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
    }
    .scrollbar-custom::-webkit-scrollbar {
        width: 6px;
    }
    .scrollbar-custom::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 3px;
    }
    .scrollbar-custom::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, 0.3);
        border-radius: 3px;
        -webkit-transition: background-color 0.2s ease;
        transition: background-color 0.2s ease;
    }
    .scrollbar-custom::-webkit-scrollbar-thumb:hover {
        background-color: rgba(156, 163, 175, 0.5);
    }
    .scrollbar-custom::-webkit-scrollbar-thumb:active {
        background-color: rgba(156, 163, 175, 0.7);
    }
    /* 暗色模式下的滚动条样式 */
    :global(.dark) .scrollbar-custom {
        scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
    }
    :global(.dark) .scrollbar-custom::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
    }
    :global(.dark) .scrollbar-custom::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
    :global(.dark) .scrollbar-custom::-webkit-scrollbar-thumb:active {
        background-color: rgba(255, 255, 255, 0.4);
    }</style>`,1);function kr(l,i){Aa(i,!1);const u=Ja;let k=u.local?.playlist??[],_=u.behavior?.defaultVolume,v=u.behavior?.defaultShuffle,I=u.behavior?.defaultRepeat,V=u.behavior?.position?.bottom,lt=u.behavior?.position?.right,y=u.responsive?.mobile?.position?.bottom,E=u.responsive?.mobile?.position?.right,X=g(V),G=g(lt);function J(){typeof window>"u"||(window.innerWidth<=768?(d(X,y),d(G,E)):(d(X,V),d(G,lt)))}let H=u.ui?.playlist?.maxHeight,m=u.ui?.playlist?.width,N=u.ui?.animation?.coverRotation?.enable,L=u.ui?.animation?.coverRotation?.speed,pt=u.errorHandling?.errorDisplayDuration,j=g(!1),rt=g(!1),Z=g(!0),tt=g(!1),et=g(0),P=g(0),D=g(_),mt=g(!1),U=g(!1),dt=g(v),it=g(I),ae=g(""),Lt=g(!1),F=g({title:"Loading ...",artist:"Loading ...",cover:"",url:"",duration:0}),p=g([]),$=g(0),r=g(),wt=g(),$t=g();function Bt(){!t(r)||!t(F).url||(t(j)?t(r).pause():t(r).play())}function Wt(){d(Z,!t(Z)),t(Z)?(d(rt,!1),d(tt,!1)):(d(rt,!0),d(tt,!1))}function re(){d(tt,!t(tt))}function Be(){d(dt,!t(dt))}function We(){d(it,(t(it)+1)%3)}function Oe(){if(t(p).length===0)return;const s=t($)>0?t($)-1:t(p).length-1;Tt(s)}function St(){if(t(p).length===0)return;let s;if(t(dt))do s=Math.floor(Math.random()*t(p).length);while(s===t($)&&t(p).length>1);else s=t($)<t(p).length-1?t($)+1:0;console.log("nextSong 调用",{currentIndex:t($),newIndex:s,playlistLength:t(p).length,isShuffled:t(dt)}),Tt(s)}function Tt(s){if(s<0||s>=t(p).length)return;const B=t(j);d($,s),t(r)&&t(r).pause(),ie(t(p)[t($)]),(B||!t(j))&&setTimeout(()=>{t(r)&&(t(r).readyState>=2?t(r).play().catch(()=>{}):t(r).addEventListener("canplay",()=>{t(r).play().catch(()=>{})},{once:!0}))},100)}function Mt(s){return s.startsWith("http://")||s.startsWith("https://")?s:s.startsWith("/")?"/"+s.substring(1):"/"+s}function ie(s){!s||!t(r)||(d(F,{...s}),t(F).cover||Y(F,t(F).cover="/favicon/favicon-light-192.png"),s.url?(d(U,!0),t(r).pause(),Y(r,t(r).currentTime=0),d(et,0),d(P,s.duration??0),t(r).removeEventListener("loadeddata",oe),t(r).removeEventListener("error",ne),t(r).removeEventListener("loadstart",se),t(r).addEventListener("loadeddata",oe,{once:!0}),t(r).addEventListener("error",ne,{once:!0}),t(r).addEventListener("loadstart",se,{once:!0}),Y(r,t(r).src=Mt(s.url)),t(r).load()):d(U,!1))}function oe(){d(U,!1),t(r)?.duration&&t(r).duration>1&&(d(P,Math.floor(t(r).duration)),t(p)[t($)]&&Y(p,t(p)[t($)].duration=t(P)),Y(F,t(F).duration=t(P)))}function ne(s){d(U,!1),Ot(`无法播放 "${t(F).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>St(),1e3):t(p).length<=1&&Ot("播放列表中没有可用的歌曲")}function se(){}function Ot(s){d(ae,s),d(Lt,!0),setTimeout(()=>{d(Lt,!1)},pt)}function Ye(){d(Lt,!1)}function He(s){if(!t(r)||!t(wt))return;const B=t(wt).getBoundingClientRect(),Ft=(s.clientX-B.left)/B.width*t(P);Y(r,t(r).currentTime=Ft),d(et,Ft)}function Ne(s){if(!t(r)||!t($t))return;const B=t($t).getBoundingClientRect(),ct=Math.max(0,Math.min(1,(s.clientX-B.left)/B.width));d(D,ct),Y(r,t(r).volume=t(D)),d(mt,t(D)===0)}function le(){t(r)&&(d(mt,!t(mt)),Y(r,t(r).muted=t(mt)))}function Yt(s){if(!Number.isFinite(s)||s<0)return"0:00";const B=Math.floor(s/60),ct=Math.floor(s%60);return`${B}:${ct.toString().padStart(2,"0")}`}function Ue(){t(r)&&(t(r).addEventListener("play",()=>{d(j,!0)}),t(r).addEventListener("pause",()=>{d(j,!1)}),t(r).addEventListener("timeupdate",()=>{d(et,t(r).currentTime)}),t(r).addEventListener("ended",()=>{console.log("歌曲播放结束",{isRepeating:t(it),currentIndex:t($),playlistLength:t(p).length,isShuffled:t(dt)}),t(it)===1?(console.log("单曲循环：重新播放当前歌曲"),Y(r,t(r).currentTime=0),t(r).play().catch(()=>{})):t(it)===2?(console.log("列表循环：播放下一首"),St()):t($)<t(p).length-1||t(dt)?(console.log("非循环模式：播放下一首"),St()):(console.log("非循环模式：播放列表结束，停止播放"),d(j,!1))}),t(r).addEventListener("error",s=>{d(U,!1)}),t(r).addEventListener("stalled",()=>{}),t(r).addEventListener("waiting",()=>{}))}La(()=>{d(r,new Audio),Y(r,t(r).volume=t(D)),Y(r,t(r).muted=t(mt)),Ue(),J(),typeof window<"u"&&window.addEventListener("resize",J),d(p,[...k]),t(p).length>0?ie(t(p)[0]):Ot("本地播放列表为空")}),$a(()=>{t(r)&&(t(r).pause(),Y(r,t(r).src="")),typeof window<"u"&&window.removeEventListener("resize",J)}),Sa();var de=Et(),qe=ft(de);{var Ke=s=>{var B=fr(),ct=ft(B);{var Ft=e=>{var a=Qa(),c=n(a),M=n(c);x(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var Q=f(M,2),z=n(Q,!0);o(Q);var S=f(Q,2),ot=n(S);x(ot,{icon:"material-symbols:close",class:"text-lg"}),o(S),o(c),o(a),K(()=>ut(z,t(ae))),w("click",S,Ye),b(e,a)};h(ct,e=>{t(Lt)&&e(Ft)})}var zt=f(ct,2);let ce;var Ct=n(zt);let ue;var ve=n(Ct),bt=n(ve),fe=n(bt);{var Ve=e=>{var a=Za();let c;K(M=>{at(a,"src",M),at(a,"alt",`${t(F).title??""} - ${t(F).artist??""}`),c=q(a,1,"w-full h-full object-cover transition-transform duration-300",null,c,{spinning:t(j)&&!t(U)&&N,"animate-pulse":t(U)}),yt(a,`animation-duration: ${L}s;`)},[()=>Mt(t(F).cover)]),b(e,a)},Xe=e=>{var a=tr(),c=n(a);x(c,{icon:"fa6-solid:music",class:"text-white text-lg"}),o(a),b(e,a)};h(fe,e=>{t(F).cover?e(Ve):e(Xe,!1)})}var Ge=f(fe,2);{var Je=e=>{var a=er();b(e,a)};h(Ge,e=>{t(j)&&e(Je)})}o(bt);var Rt=f(bt,2),Qe=n(Rt);x(Qe,{icon:"fa6-solid:chevron-left",class:"text-[var(--primary)] text-sm"}),o(Rt),o(ve),o(Ct);var jt=f(Ct,2);let pe;var Ht=n(jt),It=n(Ht),Nt=n(It);let me;o(It);var Ut=f(It,2),qt=n(Ut),Ze=n(qt,!0);o(qt);var Kt=f(qt,2),ta=n(Kt,!0);o(Kt);var be=f(Kt,2),ea=n(be);o(be),o(Ut);var ge=f(Ut,2),Vt=n(ge),aa=n(Vt);x(aa,{icon:"material-symbols:expand-more",class:"text-lg"}),o(Vt),o(ge),o(Ht);var Xt=f(Ht,2),gt=n(Xt),ra=n(gt);o(gt),Re(gt,e=>d(wt,e),()=>t(wt)),o(Xt);var Gt=f(Xt,2),he=n(Gt);{var ia=e=>{var a=ar();let c;var M=n(a);x(M,{icon:"material-symbols:shuffle",class:"text-lg"}),o(a),K(()=>{c=q(a,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t(dt),"btn-plain":!t(dt)}),a.disabled=t(p).length<=1}),w("click",a,Be),b(e,a)};h(he,e=>{e(ia)})}var xe=f(he,2);{var oa=e=>{var a=rr(),c=n(a);x(c,{icon:"material-symbols:skip-previous",class:"text-xl"}),o(a),K(()=>a.disabled=t(p).length<=1),w("click",a,Oe),b(e,a)};h(xe,e=>{e(oa)})}var ht=f(xe,2);let _e;var na=n(ht);{var sa=e=>{x(e,{icon:"eos-icons:loading",class:"text-xl"})},la=e=>{var a=Et(),c=ft(a);{var M=z=>{x(z,{icon:"material-symbols:pause",class:"text-xl"})},Q=z=>{x(z,{icon:"material-symbols:play-arrow",class:"text-xl"})};h(c,z=>{t(j)?z(M):z(Q,!1)},!0)}b(e,a)};h(na,e=>{t(U)?e(sa):e(la,!1)})}o(ht);var ye=f(ht,2);{var da=e=>{var a=ir(),c=n(a);x(c,{icon:"material-symbols:skip-next",class:"text-xl"}),o(a),K(()=>a.disabled=t(p).length<=1),w("click",a,St),b(e,a)};h(ye,e=>{e(da)})}var ca=f(ye,2);{var ua=e=>{var a=or();let c;var M=n(a);{var Q=S=>{x(S,{icon:"material-symbols:repeat-one",class:"text-lg"})},z=S=>{var ot=Et(),T=ft(ot);{var W=C=>{x(C,{icon:"material-symbols:repeat",class:"text-lg"})},A=C=>{x(C,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};h(T,C=>{t(it)===2?C(W):C(A,!1)},!0)}b(S,ot)};h(M,S=>{t(it)===1?S(Q):S(z,!1)})}o(a),K(()=>c=q(a,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t(it)>0,"btn-plain":t(it)===0})),w("click",a,We),b(e,a)};h(ca,e=>{e(ua)})}o(Gt);var we=f(Gt,2),ke=n(we);{var va=e=>{var a=nr(),c=ft(a),M=n(c);{var Q=T=>{x(T,{icon:"material-symbols:volume-off",class:"text-lg"})},z=T=>{var W=Et(),A=ft(W);{var C=nt=>{x(nt,{icon:"material-symbols:volume-down",class:"text-lg"})},Pt=nt=>{x(nt,{icon:"material-symbols:volume-up",class:"text-lg"})};h(A,nt=>{t(D)<.5?nt(C):nt(Pt,!1)},!0)}b(T,W)};h(M,T=>{t(mt)||t(D)===0?T(Q):T(z,!1)})}o(c);var S=f(c,2),ot=n(S);o(S),Re(S,T=>d($t,T),()=>t($t)),K(()=>{at(S,"aria-valuenow",t(D)*100),yt(ot,`width: ${t(D)*100}%`)}),w("click",c,le),w("click",S,Ne),w("keydown",S,T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),T.key==="Enter"&&le())}),b(e,a)};h(ke,e=>{e(va)})}var fa=f(ke,2);{var pa=e=>{var a=sr();let c;var M=n(a);x(M,{icon:"material-symbols:queue-music",class:"text-lg"}),o(a),K(()=>c=q(a,1,"btn-plain w-8 h-8 rounded-lg",null,c,{"text-[var(--primary)]":t(tt)})),w("click",a,re),b(e,a)};h(fa,e=>{e(pa)})}o(we),o(jt);var ma=f(jt,2);{var ba=e=>{var a=vr(),c=n(a),M=n(c),Q=n(M,!0);o(M);var z=f(M,2),S=n(z);x(S,{icon:"material-symbols:close",class:"text-lg"}),o(z),o(c);var ot=f(c,2);Wa(ot,5,()=>t(p),Oa,(T,W,A)=>{var C=ur();let Pt;var nt=n(C);{var ga=O=>{var vt=dr(),Zt=n(vt);{var te=xt=>{x(xt,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},ya=xt=>{var Me=Et(),wa=ft(Me);{var ka=_t=>{x(_t,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ea=_t=>{var Fe=lr();Fe.textContent=A+1,b(_t,Fe)};h(wa,_t=>{A===t($)?_t(ka):_t(Ea,!1)},!0)}b(xt,Me)};h(Zt,xt=>{A===t($)&&t(j)?xt(te):xt(ya,!1)})}o(vt),b(O,vt)};h(nt,O=>{O(ga)})}var Jt=f(nt,2),Ee=n(Jt);o(Jt);var Le=f(Jt,2),At=n(Le);let $e;var ha=n(At,!0);o(At);var Qt=f(At,2);let Se;var Te=n(Qt),xa=f(Te);{var _a=O=>{var vt=cr(),Zt=n(vt);o(vt),K(te=>ut(Zt,`(${te??""})`),[()=>Yt(t(W).duration)]),b(O,vt)};h(xa,O=>{t(W).duration>0&&O(_a)})}o(Qt),o(Le),o(C),K(O=>{Pt=q(C,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Pt,{"bg-[var(--btn-plain-bg)]":A===t($),"text-[var(--primary)]":A===t($)}),at(C,"aria-label",`播放 ${t(W).title??""} - ${t(W).artist??""}`),at(Ee,"src",O),at(Ee,"alt",t(W).title),$e=q(At,1,"font-medium truncate",null,$e,{"text-[var(--primary)]":A===t($),"text-90":A!==t($)}),ut(ha,t(W).title),Se=q(Qt,1,"text-sm text-[var(--content-meta)] truncate",null,Se,{"text-[var(--primary)]":A===t($)}),ut(Te,`${t(W).artist??""} `)},[()=>Mt(t(W).cover)]),w("click",C,()=>Tt(A)),w("keydown",C,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),Tt(A))}),b(T,C)}),o(ot),o(a),K(T=>{yt(a,`width: ${m}px; max-height: ${H}px;`),ut(Q,T)},[()=>Ha(Ya.playlist)]),w("click",z,re),Va(3,a,()=>Ga,()=>({duration:300,axis:"y"})),b(e,a)};h(ma,e=>{t(tt)&&e(ba)})}o(zt),Da(2),K((e,a,c)=>{ce=q(zt,1,"music-player fixed z-[1001] transition-all duration-300 ease-in-out",null,ce,{expanded:t(rt),"collapsed-mode":t(Z)}),yt(zt,`bottom: ${t(X)??""}px; right: ${t(G)??""}px; --rotation-speed: ${L}s; --rotation-pause-hover: paused;`),ue=q(Ct,1,"collapsed-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ue,{"opacity-0":!t(Z),"scale-95":!t(Z),"pointer-events-none":!t(Z)}),at(bt,"aria-label",t(j)?"暂停音乐":"播放音乐"),pe=q(jt,1,"expanded-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-4 transition-all duration-500 ease-in-out",null,pe,{"opacity-0":!t(rt),"scale-95":!t(rt),"pointer-events-none":!t(rt)}),at(It,"title",`${t(F).title??""} - ${t(F).artist??""}`),at(Nt,"src",e),me=q(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,me,{spinning:t(j)&&!t(U)&&N,"animate-pulse":t(U)}),yt(Nt,`animation-duration: ${L}s;`),ut(Ze,t(F).title),ut(ta,t(F).artist),ut(ea,`${a??""} / ${c??""}`),at(gt,"aria-valuenow",t(P)>0?t(et)/t(P)*100:0),yt(ra,`width: ${t(P)>0?t(et)/t(P)*100:0}%`),_e=q(ht,1,"btn-regular w-12 h-12 rounded-full",null,_e,{"opacity-50":t(U)}),ht.disabled=t(U)},[()=>Mt(t(F).cover),()=>Yt(t(et)),()=>Yt(t(P))]),w("click",bt,Bt),w("keydown",bt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Bt())}),w("click",Rt,Wt),w("keydown",Rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Wt())}),w("click",Vt,Wt),w("click",gt,He),w("keydown",gt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(wt).getBoundingClientRect();const c=.5*t(P);t(r)&&(Y(r,t(r).currentTime=c),d(et,c))}}),w("click",ht,Bt),b(s,B)};h(qe,s=>{s(Ke)})}b(l,de),Pa()}export{kr as default};
