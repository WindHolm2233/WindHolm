import{o as Fr,b as zr,i as jr,s as q,e as St,a as et}from"./props.WrJ9AHGX.js";import{a7 as Pr,a9 as Ar,aF as Cr,aG as Ir,aH as De,u as Be,aI as Rr,aJ as We,aK as Dr,a0 as Ne,aL as zt,y as Br,aM as Wr,j as jt,k as mt,a as b,p as Nr,b as Ur,h as s,m as h,ag as U,i as t,f as A,s as p,c as l,r as n,ar as Yr,t as K,n as k}from"./utils.BZFIs17i.js";import{a as Hr,s as ut}from"./render.BZAoEM4_.js";import{i as g}from"./if.DSvGGf2i.js";import{e as Or,i as qr}from"./each.DLrycKnL.js";import{I as _}from"./Icon.Bs0XzUvZ.js";import{I as Kr}from"./zh_TW.B9ptEsWo.js";import{i as Vr}from"./translation.BA56Aigs.js";import"./navBarConfig.CsQu4Igt.js";const Gr=()=>performance.now(),st={tick:d=>requestAnimationFrame(d),now:()=>Gr(),tasks:new Set};function Ue(){const d=st.now();st.tasks.forEach(i=>{i.c(d)||(st.tasks.delete(i),i.f())}),st.tasks.size!==0&&st.tick(Ue)}function Xr(d){let i;return st.tasks.size===0&&st.tick(Ue),{promise:new Promise(c=>{st.tasks.add(i={c:d,f:c})}),abort(){st.tasks.delete(i)}}}function Ot(d,i){We(()=>{d.dispatchEvent(new CustomEvent(i))})}function Jr(d){if(d==="float")return"cssFloat";if(d==="offset")return"cssOffset";if(d.startsWith("--"))return d;const i=d.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(c=>c[0].toUpperCase()+c.slice(1)).join("")}function Ce(d){const i={},c=d.split(";");for(const E of c){const[x,v]=E.split(":");if(!x||v===void 0)break;const R=Jr(x.trim());i[R]=v.trim()}return i}const Qr=d=>d;function Zr(d,i,c,E){var x=(d&Rr)!==0,v="both",R,J=i.inert,vt=i.style.overflow,y,$;function Q(){return We(()=>R??=c()(i,E?.()??{},{direction:v}))}var Z={is_global:x,in(){i.inert=J,Ot(i,"introstart"),y=le(i,Q(),$,1,()=>{Ot(i,"introend"),y?.abort(),y=R=void 0,i.style.overflow=vt})},out(B){i.inert=!0,Ot(i,"outrostart"),$=le(i,Q(),y,0,()=>{Ot(i,"outroend"),B?.()})},stop:()=>{y?.abort(),$?.abort()}},rt=Pr;if((rt.transitions??=[]).push(Z),Hr){var Y=x;if(!Y){for(var f=rt.parent;f&&(f.f&Ar)!==0;)for(;(f=f.parent)&&(f.f&Cr)===0;);Y=!f||(f.f&Ir)!==0}Y&&De(()=>{Be(()=>Z.in())})}}function le(d,i,c,E,x){var v=E===1;if(Dr(i)){var R,J=!1;return Ne(()=>{if(!J){var B=i({direction:v?"in":"out"});R=le(d,B,c,E,x)}}),{abort:()=>{J=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(c?.deactivate(),!i?.duration)return x(),{abort:zt,deactivate:zt,reset:zt,t:()=>E};const{delay:vt=0,css:y,tick:$,easing:Q=Qr}=i;var Z=[];if(v&&c===void 0&&($&&$(0,1),y)){var rt=Ce(y(0,1));Z.push(rt,rt)}var Y=()=>1-E,f=d.animate(Z,{duration:vt,fill:"forwards"});return f.onfinish=()=>{f.cancel();var B=c?.t()??1-E;c?.abort();var L=E-B,bt=i.duration*Math.abs(L),Pt=[];if(bt>0){var Tt=!1;if(y)for(var ht=Math.ceil(bt/16.666666666666668),Mt=0;Mt<=ht;Mt+=1){var C=B+L*Q(Mt/ht),at=Ce(y(C,1-C));Pt.push(at),Tt||=at.overflow==="hidden"}Tt&&(d.style.overflow="hidden"),Y=()=>{var H=f.currentTime;return B+L*Q(H/bt)},$&&Xr(()=>{if(f.playState!=="running")return!1;var H=Y();return $(H,1-H),!0})}f=d.animate(Pt,{duration:bt,fill:"forwards"}),f.onfinish=()=>{Y=()=>E,$?.(E,1-E),x()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=zt)},deactivate:()=>{x=zt},reset:()=>{E===0&&$?.(1,0)},t:()=>Y()}}function Ie(d,i){return d===i||d?.[Wr]===i}function Re(d={},i,c,E){return De(()=>{var x,v;return Br(()=>{x=v,v=[],Be(()=>{d!==c(...v)&&(i(d,...v),x&&Ie(c(...x),d)&&i(null,...x))})}),()=>{Ne(()=>{v&&Ie(c(...v),d)&&i(null,...v)})}}),d}function ta(d){const i=d-1;return i*i*i+1}function ea(d,{delay:i=0,duration:c=400,easing:E=ta,axis:x="y"}={}){const v=getComputedStyle(d),R=+v.opacity,J=x==="y"?"height":"width",vt=parseFloat(v[J]),y=x==="y"?["top","bottom"]:["left","right"],$=y.map(L=>`${L[0].toUpperCase()}${L.slice(1)}`),Q=parseFloat(v[`padding${$[0]}`]),Z=parseFloat(v[`padding${$[1]}`]),rt=parseFloat(v[`margin${$[0]}`]),Y=parseFloat(v[`margin${$[1]}`]),f=parseFloat(v[`border${$[0]}Width`]),B=parseFloat(v[`border${$[1]}Width`]);return{delay:i,duration:c,easing:E,css:L=>`overflow: hidden;opacity: ${Math.min(L*20,1)*R};${J}: ${L*vt}px;padding-${y[0]}: ${L*Q}px;padding-${y[1]}: ${L*Z}px;margin-${y[0]}: ${L*rt}px;margin-${y[1]}: ${L*Y}px;border-${y[0]}-width: ${L*f}px;border-${y[1]}-width: ${L*B}px;min-${J}: 0`}}const ra={meting:{api:"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",playlist:{id:"13268510787",server:"netease",type:"playlist"},fallbackApis:["https://api.injahow.cn/bete/?server=:server&type=:type&id=:id","https://api.uomg.com/api/other/163music?format=json&id=:id"]},behavior:{defaultVolume:.7,defaultShuffle:!0,defaultRepeat:2,position:{bottom:16,right:16}},ui:{animation:{coverRotation:{enable:!0,speed:3}},playlist:{maxHeight:384,width:320}},responsive:{mobile:{position:{bottom:24,right:8}}},errorHandling:{errorDisplayDuration:3e3}};var aa=A('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ia=A("<img/>"),oa=A('<div class="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 flex items-center justify-center"><!></div>'),na=A('<div class="absolute inset-0 bg-black/20 flex items-center justify-center"><div class="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center"><div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div></div></div>'),sa=A("<button><!></button>"),la=A('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),da=A('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),ca=A("<button><!></button>"),ua=A('<button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>',1),va=A("<button><!></button>"),pa=A('<span class="text-sm text-[var(--content-meta)]"></span>'),fa=A('<div class="w-6 h-6 flex items-center justify-center"><!></div>'),ma=A('<span class="ml-2"> </span>'),ba=A('<div role="button" tabindex="0"><!> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> <!></div></div></div>'),ha=A('<div class="playlist-panel float-panel fixed bottom-20 right-4 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 scrollbar-custom"></div></div>'),ga=A(`<!> <div><div style="width: 90px; height: 80px; background-color: var(--card-bg); "><div class="flex items-center gap-2 h-full"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer flex-shrink-0" tabindex="0" role="button"><!> <!></div> <button class="expand-btn w-8 h-8 rounded-full btn-regular border border-[var(--line-divider)] hover:border-[var(--primary)] active:scale-95 transition-all duration-200 flex items-center justify-center flex-shrink-0" tabindex="0" aria-label="展开音乐播放器"><!></button></div></div> <div style="width: 320px; background-color: var(--card-bg);"><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <button><!></button> <!> <!></div> <div class="bottom-controls flex items-center gap-2"><!> <!></div></div> <!></div> <style>@keyframes rotate {
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
    }</style>`,1);function Ta(d,i){Ur(i,!1);const c=ra;let E=c.meting?.api,x=c.meting?.playlist?.id,v=c.meting?.playlist?.server,R=c.meting?.playlist?.type,J=c.meting?.fallbackApis??[],vt=c.behavior?.defaultVolume,y=c.behavior?.defaultShuffle,$=c.behavior?.defaultRepeat,Q=c.behavior?.position?.bottom,Z=c.behavior?.position?.right,rt=c.responsive?.mobile?.position?.bottom,Y=c.responsive?.mobile?.position?.right,f=h(Q),B=h(Z);function L(){typeof window>"u"||(window.innerWidth<=768?(s(f,rt),s(B,Y)):(s(f,Q),s(B,Z)))}let bt=c.ui?.playlist?.maxHeight,Pt=c.ui?.playlist?.width,Tt=c.ui?.animation?.coverRotation?.enable,ht=c.ui?.animation?.coverRotation?.speed,Mt=c.errorHandling?.errorDisplayDuration,C=h(!1),at=h(!1),H=h(!0),gt=h(!1),pt=h(0),V=h(0),lt=h(vt),_t=h(!1),I=h(!1),dt=h(y),it=h($),de=h(""),At=h(!1),z=h({title:"Loading ...",artist:"Loading ...",cover:"",url:"",duration:0}),m=h([]),S=h(0),a=h(),Ft=h(),Ct=h();async function Ye(){s(I,!0);const o=[E,...J];for(let w=0;w<o.length;w++)try{const O=o[w].replace(":server",v).replace(":type",R).replace(":id",x).replace(":auth","").replace(":r",Date.now().toString()),ct=await fetch(O);if(!ct.ok)throw new Error(`API ${w+1} error: ${ct.status}`);const xt=await ct.json();s(m,xt.map(G=>{let yt=G.name??G.title??"未知歌曲",Bt=G.artist??G.author??"未知艺术家",tt=G.duration??0;return tt>1e4&&(tt=Math.floor(tt/1e3)),(!Number.isFinite(tt)||tt<=0)&&(tt=0),{id:G.id,title:yt,artist:Bt,cover:G.pic??"",url:G.url??"",duration:tt}})),t(m).length>0&&ue(t(m)[0]),s(I,!1);return}catch(O){console.warn(`API ${w+1} failed:`,O),w===o.length-1&&(Vt("所有 Meting API 都无法访问，请检查网络连接"),s(I,!1))}}function qt(){!t(a)||!t(z).url||(t(C)?t(a).pause():t(a).play())}function Kt(){s(H,!t(H)),t(H)?(s(at,!1),s(gt,!1)):(s(at,!0),s(gt,!1))}function ce(){s(gt,!t(gt))}function He(){s(dt,!t(dt))}function Oe(){s(it,(t(it)+1)%3)}function qe(){if(t(m).length===0)return;const o=t(S)>0?t(S)-1:t(m).length-1;Rt(o)}function It(){if(t(m).length===0)return;let o;if(t(dt))do o=Math.floor(Math.random()*t(m).length);while(o===t(S)&&t(m).length>1);else o=t(S)<t(m).length-1?t(S)+1:0;console.log("nextSong 调用",{currentIndex:t(S),newIndex:o,playlistLength:t(m).length,isShuffled:t(dt)}),Rt(o)}function Rt(o){if(o<0||o>=t(m).length)return;const w=t(C);s(S,o),t(a)&&t(a).pause(),ue(t(m)[t(S)]),(w||!t(C))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function Dt(o){return o.startsWith("http://")||o.startsWith("https://")?o:o.startsWith("/")?"/"+o.substring(1):"/"+o}function ue(o){!o||!t(a)||(s(z,{...o}),t(z).cover||U(z,t(z).cover="/favicon/favicon-light-192.png"),o.url?(s(I,!0),t(a).pause(),U(a,t(a).currentTime=0),s(pt,0),s(V,o.duration??0),t(a).removeEventListener("loadeddata",ve),t(a).removeEventListener("error",pe),t(a).removeEventListener("loadstart",fe),t(a).addEventListener("loadeddata",ve,{once:!0}),t(a).addEventListener("error",pe,{once:!0}),t(a).addEventListener("loadstart",fe,{once:!0}),U(a,t(a).src=Dt(o.url)),t(a).load()):s(I,!1))}function ve(){s(I,!1),t(a)?.duration&&t(a).duration>1&&(s(V,Math.floor(t(a).duration)),t(m)[t(S)]&&U(m,t(m)[t(S)].duration=t(V)),U(z,t(z).duration=t(V)))}function pe(o){s(I,!1),Vt(`无法播放 "${t(z).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>It(),1e3):t(m).length<=1&&Vt("播放列表中没有可用的歌曲")}function fe(){}function Vt(o){s(de,o),s(At,!0),setTimeout(()=>{s(At,!1)},Mt)}function Ke(){s(At,!1)}function Ve(o){if(!t(a)||!t(Ft))return;const w=t(Ft).getBoundingClientRect(),ct=(o.clientX-w.left)/w.width*t(V);U(a,t(a).currentTime=ct),s(pt,ct)}function Ge(o){if(!t(a)||!t(Ct))return;const w=t(Ct).getBoundingClientRect(),O=Math.max(0,Math.min(1,(o.clientX-w.left)/w.width));s(lt,O),U(a,t(a).volume=t(lt)),s(_t,t(lt)===0)}function me(){t(a)&&(s(_t,!t(_t)),U(a,t(a).muted=t(_t)))}function Gt(o){if(!Number.isFinite(o)||o<0)return"0:00";const w=Math.floor(o/60),O=Math.floor(o%60);return`${w}:${O.toString().padStart(2,"0")}`}function Xe(){t(a)&&(t(a).addEventListener("play",()=>{s(C,!0)}),t(a).addEventListener("pause",()=>{s(C,!1)}),t(a).addEventListener("timeupdate",()=>{s(pt,t(a).currentTime)}),t(a).addEventListener("ended",()=>{console.log("歌曲播放结束",{isRepeating:t(it),currentIndex:t(S),playlistLength:t(m).length,isShuffled:t(dt)}),t(it)===1?(console.log("单曲循环：重新播放当前歌曲"),U(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(it)===2?(console.log("列表循环：播放下一首"),It()):t(S)<t(m).length-1||t(dt)?(console.log("非循环模式：播放下一首"),It()):(console.log("非循环模式：播放列表结束，停止播放"),s(C,!1))}),t(a).addEventListener("error",o=>{s(I,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Fr(()=>{s(a,new Audio),U(a,t(a).volume=t(lt)),U(a,t(a).muted=t(_t)),Xe(),L(),typeof window<"u"&&window.addEventListener("resize",L),Ye().then(()=>{})}),zr(()=>{t(a)&&(t(a).pause(),U(a,t(a).src="")),typeof window<"u"&&window.removeEventListener("resize",L)}),jr();var be=jt(),Je=mt(be);{var Qe=o=>{var w=ga(),O=mt(w);{var ct=e=>{var r=aa(),u=l(r),F=l(u);_(F,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var X=p(F,2),j=l(X,!0);n(X);var T=p(X,2),ot=l(T);_(ot,{icon:"material-symbols:close",class:"text-lg"}),n(T),n(u),n(r),K(()=>ut(j,t(de))),k("click",T,Ke),b(e,r)};g(O,e=>{t(At)&&e(ct)})}var xt=p(O,2);let G;var yt=l(xt);let Bt;var tt=l(yt),wt=l(tt),he=l(wt);{var Ze=e=>{var r=ia();let u;K(F=>{et(r,"src",F),et(r,"alt",`${t(z).title??""} - ${t(z).artist??""}`),u=q(r,1,"w-full h-full object-cover transition-transform duration-300",null,u,{spinning:t(C)&&!t(I)&&Tt,"animate-pulse":t(I)}),St(r,`animation-duration: ${ht}s;`)},[()=>Dt(t(z).cover)]),b(e,r)},tr=e=>{var r=oa(),u=l(r);_(u,{icon:"fa6-solid:music",class:"text-white text-lg"}),n(r),b(e,r)};g(he,e=>{t(z).cover?e(Ze):e(tr,!1)})}var er=p(he,2);{var rr=e=>{var r=na();b(e,r)};g(er,e=>{t(C)&&e(rr)})}n(wt);var Wt=p(wt,2),ar=l(Wt);_(ar,{icon:"fa6-solid:chevron-left",class:"text-[var(--primary)] text-sm"}),n(Wt),n(tt),n(yt);var Nt=p(yt,2);let ge;var Xt=l(Nt),Ut=l(Xt),Jt=l(Ut);let _e;n(Ut);var Qt=p(Ut,2),Zt=l(Qt),ir=l(Zt,!0);n(Zt);var te=p(Zt,2),or=l(te,!0);n(te);var xe=p(te,2),nr=l(xe);n(xe),n(Qt);var ye=p(Qt,2),ee=l(ye),sr=l(ee);_(sr,{icon:"material-symbols:expand-more",class:"text-lg"}),n(ee),n(ye),n(Xt);var re=p(Xt,2),kt=l(re),lr=l(kt);n(kt),Re(kt,e=>s(Ft,e),()=>t(Ft)),n(re);var ae=p(re,2),we=l(ae);{var dr=e=>{var r=sa();let u;var F=l(r);_(F,{icon:"material-symbols:shuffle",class:"text-lg"}),n(r),K(()=>{u=q(r,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(dt),"btn-plain":!t(dt)}),r.disabled=t(m).length<=1}),k("click",r,He),b(e,r)};g(we,e=>{e(dr)})}var ke=p(we,2);{var cr=e=>{var r=la(),u=l(r);_(u,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(r),K(()=>r.disabled=t(m).length<=1),k("click",r,qe),b(e,r)};g(ke,e=>{e(cr)})}var Et=p(ke,2);let Ee;var ur=l(Et);{var vr=e=>{_(e,{icon:"eos-icons:loading",class:"text-xl"})},pr=e=>{var r=jt(),u=mt(r);{var F=j=>{_(j,{icon:"material-symbols:pause",class:"text-xl"})},X=j=>{_(j,{icon:"material-symbols:play-arrow",class:"text-xl"})};g(u,j=>{t(C)?j(F):j(X,!1)},!0)}b(e,r)};g(ur,e=>{t(I)?e(vr):e(pr,!1)})}n(Et);var $e=p(Et,2);{var fr=e=>{var r=da(),u=l(r);_(u,{icon:"material-symbols:skip-next",class:"text-xl"}),n(r),K(()=>r.disabled=t(m).length<=1),k("click",r,It),b(e,r)};g($e,e=>{e(fr)})}var mr=p($e,2);{var br=e=>{var r=ca();let u;var F=l(r);{var X=T=>{_(T,{icon:"material-symbols:repeat-one",class:"text-lg"})},j=T=>{var ot=jt(),M=mt(ot);{var W=P=>{_(P,{icon:"material-symbols:repeat",class:"text-lg"})},D=P=>{_(P,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};g(M,P=>{t(it)===2?P(W):P(D,!1)},!0)}b(T,ot)};g(F,T=>{t(it)===1?T(X):T(j,!1)})}n(r),K(()=>u=q(r,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(it)>0,"btn-plain":t(it)===0})),k("click",r,Oe),b(e,r)};g(mr,e=>{e(br)})}n(ae);var Le=p(ae,2),Se=l(Le);{var hr=e=>{var r=ua(),u=mt(r),F=l(u);{var X=M=>{_(M,{icon:"material-symbols:volume-off",class:"text-lg"})},j=M=>{var W=jt(),D=mt(W);{var P=nt=>{_(nt,{icon:"material-symbols:volume-down",class:"text-lg"})},Yt=nt=>{_(nt,{icon:"material-symbols:volume-up",class:"text-lg"})};g(D,nt=>{t(lt)<.5?nt(P):nt(Yt,!1)},!0)}b(M,W)};g(F,M=>{t(_t)||t(lt)===0?M(X):M(j,!1)})}n(u);var T=p(u,2),ot=l(T);n(T),Re(T,M=>s(Ct,M),()=>t(Ct)),K(()=>{et(T,"aria-valuenow",t(lt)*100),St(ot,`width: ${t(lt)*100}%`)}),k("click",u,me),k("click",T,Ge),k("keydown",T,M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),M.key==="Enter"&&me())}),b(e,r)};g(Se,e=>{e(hr)})}var gr=p(Se,2);{var _r=e=>{var r=va();let u;var F=l(r);_(F,{icon:"material-symbols:queue-music",class:"text-lg"}),n(r),K(()=>u=q(r,1,"btn-plain w-8 h-8 rounded-lg",null,u,{"text-[var(--primary)]":t(gt)})),k("click",r,ce),b(e,r)};g(gr,e=>{e(_r)})}n(Le),n(Nt);var xr=p(Nt,2);{var yr=e=>{var r=ha(),u=l(r),F=l(u),X=l(F,!0);n(F);var j=p(F,2),T=l(j);_(T,{icon:"material-symbols:close",class:"text-lg"}),n(j),n(u);var ot=p(u,2);Or(ot,5,()=>t(m),qr,(M,W,D)=>{var P=ba();let Yt;var nt=l(P);{var wr=N=>{var ft=fa(),ne=l(ft);{var se=$t=>{_($t,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Lr=$t=>{var Pe=jt(),Sr=mt(Pe);{var Tr=Lt=>{_(Lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Mr=Lt=>{var Ae=pa();Ae.textContent=D+1,b(Lt,Ae)};g(Sr,Lt=>{D===t(S)?Lt(Tr):Lt(Mr,!1)},!0)}b($t,Pe)};g(ne,$t=>{D===t(S)&&t(C)?$t(se):$t(Lr,!1)})}n(ft),b(N,ft)};g(nt,N=>{N(wr)})}var ie=p(nt,2),Te=l(ie);n(ie);var Me=p(ie,2),Ht=l(Me);let Fe;var kr=l(Ht,!0);n(Ht);var oe=p(Ht,2);let ze;var je=l(oe),Er=p(je);{var $r=N=>{var ft=ma(),ne=l(ft);n(ft),K(se=>ut(ne,`(${se??""})`),[()=>Gt(t(W).duration)]),b(N,ft)};g(Er,N=>{t(W).duration>0&&N($r)})}n(oe),n(Me),n(P),K(N=>{Yt=q(P,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Yt,{"bg-[var(--btn-plain-bg)]":D===t(S),"text-[var(--primary)]":D===t(S)}),et(P,"aria-label",`播放 ${t(W).title??""} - ${t(W).artist??""}`),et(Te,"src",N),et(Te,"alt",t(W).title),Fe=q(Ht,1,"font-medium truncate",null,Fe,{"text-[var(--primary)]":D===t(S),"text-90":D!==t(S)}),ut(kr,t(W).title),ze=q(oe,1,"text-sm text-[var(--content-meta)] truncate",null,ze,{"text-[var(--primary)]":D===t(S)}),ut(je,`${t(W).artist??""} `)},[()=>Dt(t(W).cover)]),k("click",P,()=>Rt(D)),k("keydown",P,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),Rt(D))}),b(M,P)}),n(ot),n(r),K(M=>{St(r,`width: ${Pt}px; max-height: ${bt}px;`),ut(X,M)},[()=>Vr(Kr.playlist)]),k("click",j,ce),Zr(3,r,()=>ea,()=>({duration:300,axis:"y"})),b(e,r)};g(xr,e=>{t(gt)&&e(yr)})}n(xt),Yr(2),K((e,r,u)=>{G=q(xt,1,"music-player fixed z-[1001] transition-all duration-300 ease-in-out",null,G,{expanded:t(at),"collapsed-mode":t(H)}),St(xt,`bottom: ${t(f)??""}px; right: ${t(B)??""}px; --rotation-speed: ${ht}s; --rotation-pause-hover: paused;`),Bt=q(yt,1,"collapsed-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-3 transition-all duration-500 ease-in-out",null,Bt,{"opacity-0":!t(H),"scale-95":!t(H),"pointer-events-none":!t(H)}),et(wt,"aria-label",t(C)?"暂停音乐":"播放音乐"),ge=q(Nt,1,"expanded-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,{"opacity-0":!t(at),"scale-95":!t(at),"pointer-events-none":!t(at)}),et(Ut,"title",`${t(z).title??""} - ${t(z).artist??""}`),et(Jt,"src",e),_e=q(Jt,1,"w-full h-full object-cover transition-transform duration-300",null,_e,{spinning:t(C)&&!t(I)&&Tt,"animate-pulse":t(I)}),St(Jt,`animation-duration: ${ht}s;`),ut(ir,t(z).title),ut(or,t(z).artist),ut(nr,`${r??""} / ${u??""}`),et(kt,"aria-valuenow",t(V)>0?t(pt)/t(V)*100:0),St(lr,`width: ${t(V)>0?t(pt)/t(V)*100:0}%`),Ee=q(Et,1,"btn-regular w-12 h-12 rounded-full",null,Ee,{"opacity-50":t(I)}),Et.disabled=t(I)},[()=>Dt(t(z).cover),()=>Gt(t(pt)),()=>Gt(t(V))]),k("click",wt,qt),k("keydown",wt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),qt())}),k("click",Wt,Kt),k("keydown",Wt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Kt())}),k("click",ee,Kt),k("click",kt,Ve),k("keydown",kt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Ft).getBoundingClientRect();const u=.5*t(V);t(a)&&(U(a,t(a).currentTime=u),s(pt,u))}}),k("click",Et,qt),b(o,w)};g(Je,o=>{o(Qe)})}b(d,be),Nr()}export{Ta as default};
