import{o as Fa,b as za,i as ja,s as q,e as St,a as et}from"./props.WrJ9AHGX.js";import{a7 as Pa,a9 as Aa,aF as Ca,aG as Ia,aH as De,u as Be,aI as Ra,aJ as We,aK as Da,a0 as Ne,aL as zt,y as Ba,aM as Wa,j as jt,k as mt,a as b,p as Na,b as Ua,h as s,m as g,ag as U,i as t,f as A,s as p,c as l,r as n,ar as Ya,t as K,n as k}from"./utils.BZFIs17i.js";import{a as Ha,s as ut}from"./render.BZAoEM4_.js";import{i as h}from"./if.DSvGGf2i.js";import{e as Oa,i as qa}from"./each.DLrycKnL.js";import{I as _}from"./Icon.Bs0XzUvZ.js";import{I as Ka}from"./zh_TW.B9ptEsWo.js";import{i as Va}from"./translation.BJybZ1XB.js";import"./navBarConfig.DgAfJBVk.js";const Ga=()=>performance.now(),st={tick:d=>requestAnimationFrame(d),now:()=>Ga(),tasks:new Set};function Ue(){const d=st.now();st.tasks.forEach(i=>{i.c(d)||(st.tasks.delete(i),i.f())}),st.tasks.size!==0&&st.tick(Ue)}function Xa(d){let i;return st.tasks.size===0&&st.tick(Ue),{promise:new Promise(c=>{st.tasks.add(i={c:d,f:c})}),abort(){st.tasks.delete(i)}}}function Ot(d,i){We(()=>{d.dispatchEvent(new CustomEvent(i))})}function Ja(d){if(d==="float")return"cssFloat";if(d==="offset")return"cssOffset";if(d.startsWith("--"))return d;const i=d.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(c=>c[0].toUpperCase()+c.slice(1)).join("")}function Ce(d){const i={},c=d.split(";");for(const E of c){const[x,v]=E.split(":");if(!x||v===void 0)break;const R=Ja(x.trim());i[R]=v.trim()}return i}const Qa=d=>d;function Za(d,i,c,E){var x=(d&Ra)!==0,v="both",R,J=i.inert,vt=i.style.overflow,y,$;function Q(){return We(()=>R??=c()(i,E?.()??{},{direction:v}))}var Z={is_global:x,in(){i.inert=J,Ot(i,"introstart"),y=le(i,Q(),$,1,()=>{Ot(i,"introend"),y?.abort(),y=R=void 0,i.style.overflow=vt})},out(B){i.inert=!0,Ot(i,"outrostart"),$=le(i,Q(),y,0,()=>{Ot(i,"outroend"),B?.()})},stop:()=>{y?.abort(),$?.abort()}},at=Pa;if((at.transitions??=[]).push(Z),Ha){var Y=x;if(!Y){for(var f=at.parent;f&&(f.f&Aa)!==0;)for(;(f=f.parent)&&(f.f&Ca)===0;);Y=!f||(f.f&Ia)!==0}Y&&De(()=>{Be(()=>Z.in())})}}function le(d,i,c,E,x){var v=E===1;if(Da(i)){var R,J=!1;return Ne(()=>{if(!J){var B=i({direction:v?"in":"out"});R=le(d,B,c,E,x)}}),{abort:()=>{J=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(c?.deactivate(),!i?.duration)return x(),{abort:zt,deactivate:zt,reset:zt,t:()=>E};const{delay:vt=0,css:y,tick:$,easing:Q=Qa}=i;var Z=[];if(v&&c===void 0&&($&&$(0,1),y)){var at=Ce(y(0,1));Z.push(at,at)}var Y=()=>1-E,f=d.animate(Z,{duration:vt,fill:"forwards"});return f.onfinish=()=>{f.cancel();var B=c?.t()??1-E;c?.abort();var L=E-B,bt=i.duration*Math.abs(L),Pt=[];if(bt>0){var Tt=!1;if(y)for(var gt=Math.ceil(bt/16.666666666666668),Mt=0;Mt<=gt;Mt+=1){var C=B+L*Q(Mt/gt),rt=Ce(y(C,1-C));Pt.push(rt),Tt||=rt.overflow==="hidden"}Tt&&(d.style.overflow="hidden"),Y=()=>{var H=f.currentTime;return B+L*Q(H/bt)},$&&Xa(()=>{if(f.playState!=="running")return!1;var H=Y();return $(H,1-H),!0})}f=d.animate(Pt,{duration:bt,fill:"forwards"}),f.onfinish=()=>{Y=()=>E,$?.(E,1-E),x()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=zt)},deactivate:()=>{x=zt},reset:()=>{E===0&&$?.(1,0)},t:()=>Y()}}function Ie(d,i){return d===i||d?.[Wa]===i}function Re(d={},i,c,E){return De(()=>{var x,v;return Ba(()=>{x=v,v=[],Be(()=>{d!==c(...v)&&(i(d,...v),x&&Ie(c(...x),d)&&i(null,...x))})}),()=>{Ne(()=>{v&&Ie(c(...v),d)&&i(null,...v)})}}),d}function tr(d){const i=d-1;return i*i*i+1}function er(d,{delay:i=0,duration:c=400,easing:E=tr,axis:x="y"}={}){const v=getComputedStyle(d),R=+v.opacity,J=x==="y"?"height":"width",vt=parseFloat(v[J]),y=x==="y"?["top","bottom"]:["left","right"],$=y.map(L=>`${L[0].toUpperCase()}${L.slice(1)}`),Q=parseFloat(v[`padding${$[0]}`]),Z=parseFloat(v[`padding${$[1]}`]),at=parseFloat(v[`margin${$[0]}`]),Y=parseFloat(v[`margin${$[1]}`]),f=parseFloat(v[`border${$[0]}Width`]),B=parseFloat(v[`border${$[1]}Width`]);return{delay:i,duration:c,easing:E,css:L=>`overflow: hidden;opacity: ${Math.min(L*20,1)*R};${J}: ${L*vt}px;padding-${y[0]}: ${L*Q}px;padding-${y[1]}: ${L*Z}px;margin-${y[0]}: ${L*at}px;margin-${y[1]}: ${L*Y}px;border-${y[0]}-width: ${L*f}px;border-${y[1]}-width: ${L*B}px;min-${J}: 0`}}const ar={meting:{api:"https://meting-api.233333.me/api?server=:server&type=:type&id=:id&r=:r",playlist:{id:"14384854724",server:"netease",type:"playlist"},fallbackApis:["https://api.injahow.cn/bete/?server=:server&type=:type&id=:id","https://api.uomg.com/api/other/163music?format=json&id=:id"]},behavior:{defaultVolume:.7,defaultShuffle:!0,defaultRepeat:2,position:{bottom:16,right:16}},ui:{animation:{coverRotation:{enable:!1,speed:3}},playlist:{maxHeight:384,width:320}},responsive:{mobile:{position:{bottom:24,right:8}}},errorHandling:{errorDisplayDuration:3e3}};var rr=A('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ir=A("<img/>"),or=A('<div class="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 flex items-center justify-center"><!></div>'),nr=A('<div class="absolute inset-0 bg-black/20 flex items-center justify-center"><div class="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center"><div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div></div></div>'),sr=A("<button><!></button>"),lr=A('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),dr=A('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),cr=A("<button><!></button>"),ur=A('<button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>',1),vr=A("<button><!></button>"),pr=A('<span class="text-sm text-[var(--content-meta)]"></span>'),fr=A('<div class="w-6 h-6 flex items-center justify-center"><!></div>'),mr=A('<span class="ml-2"> </span>'),br=A('<div role="button" tabindex="0"><!> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> <!></div></div></div>'),gr=A('<div class="playlist-panel float-panel fixed bottom-20 right-4 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 scrollbar-custom"></div></div>'),hr=A(`<!> <div><div style="width: 90px; height: 80px; background-color: var(--card-bg); "><div class="flex items-center gap-2 h-full"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer flex-shrink-0" tabindex="0" role="button"><!> <!></div> <button class="expand-btn w-8 h-8 rounded-full btn-regular border border-[var(--line-divider)] hover:border-[var(--primary)] active:scale-95 transition-all duration-200 flex items-center justify-center flex-shrink-0" tabindex="0" aria-label="展开音乐播放器"><!></button></div></div> <div style="width: 320px; background-color: var(--card-bg);"><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <button><!></button> <!> <!></div> <div class="bottom-controls flex items-center gap-2"><!> <!></div></div> <!></div> <style>@keyframes rotate {
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
    }</style>`,1);function Tr(d,i){Ua(i,!1);const c=ar;let E=c.meting?.api,x=c.meting?.playlist?.id,v=c.meting?.playlist?.server,R=c.meting?.playlist?.type,J=c.meting?.fallbackApis??[],vt=c.behavior?.defaultVolume,y=c.behavior?.defaultShuffle,$=c.behavior?.defaultRepeat,Q=c.behavior?.position?.bottom,Z=c.behavior?.position?.right,at=c.responsive?.mobile?.position?.bottom,Y=c.responsive?.mobile?.position?.right,f=g(Q),B=g(Z);function L(){typeof window>"u"||(window.innerWidth<=768?(s(f,at),s(B,Y)):(s(f,Q),s(B,Z)))}let bt=c.ui?.playlist?.maxHeight,Pt=c.ui?.playlist?.width,Tt=c.ui?.animation?.coverRotation?.enable,gt=c.ui?.animation?.coverRotation?.speed,Mt=c.errorHandling?.errorDisplayDuration,C=g(!1),rt=g(!1),H=g(!0),ht=g(!1),pt=g(0),V=g(0),lt=g(vt),_t=g(!1),I=g(!1),dt=g(y),it=g($),de=g(""),At=g(!1),z=g({title:"Loading ...",artist:"Loading ...",cover:"",url:"",duration:0}),m=g([]),S=g(0),r=g(),Ft=g(),Ct=g();async function Ye(){s(I,!0);const o=[E,...J];for(let w=0;w<o.length;w++)try{const O=o[w].replace(":server",v).replace(":type",R).replace(":id",x).replace(":auth","").replace(":r",Date.now().toString()),ct=await fetch(O);if(!ct.ok)throw new Error(`API ${w+1} error: ${ct.status}`);const xt=await ct.json();s(m,xt.map(G=>{let yt=G.name??G.title??"未知歌曲",Bt=G.artist??G.author??"未知艺术家",tt=G.duration??0;return tt>1e4&&(tt=Math.floor(tt/1e3)),(!Number.isFinite(tt)||tt<=0)&&(tt=0),{id:G.id,title:yt,artist:Bt,cover:G.pic??"",url:G.url??"",duration:tt}})),t(m).length>0&&ue(t(m)[0]),s(I,!1);return}catch(O){console.warn(`API ${w+1} failed:`,O),w===o.length-1&&(Vt("所有 Meting API 都无法访问，请检查网络连接"),s(I,!1))}}function qt(){!t(r)||!t(z).url||(t(C)?t(r).pause():t(r).play())}function Kt(){s(H,!t(H)),t(H)?(s(rt,!1),s(ht,!1)):(s(rt,!0),s(ht,!1))}function ce(){s(ht,!t(ht))}function He(){s(dt,!t(dt))}function Oe(){s(it,(t(it)+1)%3)}function qe(){if(t(m).length===0)return;const o=t(S)>0?t(S)-1:t(m).length-1;Rt(o)}function It(){if(t(m).length===0)return;let o;if(t(dt))do o=Math.floor(Math.random()*t(m).length);while(o===t(S)&&t(m).length>1);else o=t(S)<t(m).length-1?t(S)+1:0;console.log("nextSong 调用",{currentIndex:t(S),newIndex:o,playlistLength:t(m).length,isShuffled:t(dt)}),Rt(o)}function Rt(o){if(o<0||o>=t(m).length)return;const w=t(C);s(S,o),t(r)&&t(r).pause(),ue(t(m)[t(S)]),(w||!t(C))&&setTimeout(()=>{t(r)&&(t(r).readyState>=2?t(r).play().catch(()=>{}):t(r).addEventListener("canplay",()=>{t(r).play().catch(()=>{})},{once:!0}))},100)}function Dt(o){return o.startsWith("http://")||o.startsWith("https://")?o:o.startsWith("/")?"/"+o.substring(1):"/"+o}function ue(o){!o||!t(r)||(s(z,{...o}),t(z).cover||U(z,t(z).cover="/favicon/favicon-light-192.png"),o.url?(s(I,!0),t(r).pause(),U(r,t(r).currentTime=0),s(pt,0),s(V,o.duration??0),t(r).removeEventListener("loadeddata",ve),t(r).removeEventListener("error",pe),t(r).removeEventListener("loadstart",fe),t(r).addEventListener("loadeddata",ve,{once:!0}),t(r).addEventListener("error",pe,{once:!0}),t(r).addEventListener("loadstart",fe,{once:!0}),U(r,t(r).src=Dt(o.url)),t(r).load()):s(I,!1))}function ve(){s(I,!1),t(r)?.duration&&t(r).duration>1&&(s(V,Math.floor(t(r).duration)),t(m)[t(S)]&&U(m,t(m)[t(S)].duration=t(V)),U(z,t(z).duration=t(V)))}function pe(o){s(I,!1),Vt(`无法播放 "${t(z).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>It(),1e3):t(m).length<=1&&Vt("播放列表中没有可用的歌曲")}function fe(){}function Vt(o){s(de,o),s(At,!0),setTimeout(()=>{s(At,!1)},Mt)}function Ke(){s(At,!1)}function Ve(o){if(!t(r)||!t(Ft))return;const w=t(Ft).getBoundingClientRect(),ct=(o.clientX-w.left)/w.width*t(V);U(r,t(r).currentTime=ct),s(pt,ct)}function Ge(o){if(!t(r)||!t(Ct))return;const w=t(Ct).getBoundingClientRect(),O=Math.max(0,Math.min(1,(o.clientX-w.left)/w.width));s(lt,O),U(r,t(r).volume=t(lt)),s(_t,t(lt)===0)}function me(){t(r)&&(s(_t,!t(_t)),U(r,t(r).muted=t(_t)))}function Gt(o){if(!Number.isFinite(o)||o<0)return"0:00";const w=Math.floor(o/60),O=Math.floor(o%60);return`${w}:${O.toString().padStart(2,"0")}`}function Xe(){t(r)&&(t(r).addEventListener("play",()=>{s(C,!0)}),t(r).addEventListener("pause",()=>{s(C,!1)}),t(r).addEventListener("timeupdate",()=>{s(pt,t(r).currentTime)}),t(r).addEventListener("ended",()=>{console.log("歌曲播放结束",{isRepeating:t(it),currentIndex:t(S),playlistLength:t(m).length,isShuffled:t(dt)}),t(it)===1?(console.log("单曲循环：重新播放当前歌曲"),U(r,t(r).currentTime=0),t(r).play().catch(()=>{})):t(it)===2?(console.log("列表循环：播放下一首"),It()):t(S)<t(m).length-1||t(dt)?(console.log("非循环模式：播放下一首"),It()):(console.log("非循环模式：播放列表结束，停止播放"),s(C,!1))}),t(r).addEventListener("error",o=>{s(I,!1)}),t(r).addEventListener("stalled",()=>{}),t(r).addEventListener("waiting",()=>{}))}Fa(()=>{s(r,new Audio),U(r,t(r).volume=t(lt)),U(r,t(r).muted=t(_t)),Xe(),L(),typeof window<"u"&&window.addEventListener("resize",L),Ye().then(()=>{})}),za(()=>{t(r)&&(t(r).pause(),U(r,t(r).src="")),typeof window<"u"&&window.removeEventListener("resize",L)}),ja();var be=jt(),Je=mt(be);{var Qe=o=>{var w=hr(),O=mt(w);{var ct=e=>{var a=rr(),u=l(a),F=l(u);_(F,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var X=p(F,2),j=l(X,!0);n(X);var T=p(X,2),ot=l(T);_(ot,{icon:"material-symbols:close",class:"text-lg"}),n(T),n(u),n(a),K(()=>ut(j,t(de))),k("click",T,Ke),b(e,a)};h(O,e=>{t(At)&&e(ct)})}var xt=p(O,2);let G;var yt=l(xt);let Bt;var tt=l(yt),wt=l(tt),ge=l(wt);{var Ze=e=>{var a=ir();let u;K(F=>{et(a,"src",F),et(a,"alt",`${t(z).title??""} - ${t(z).artist??""}`),u=q(a,1,"w-full h-full object-cover transition-transform duration-300",null,u,{spinning:t(C)&&!t(I)&&Tt,"animate-pulse":t(I)}),St(a,`animation-duration: ${gt}s;`)},[()=>Dt(t(z).cover)]),b(e,a)},ta=e=>{var a=or(),u=l(a);_(u,{icon:"fa6-solid:music",class:"text-white text-lg"}),n(a),b(e,a)};h(ge,e=>{t(z).cover?e(Ze):e(ta,!1)})}var ea=p(ge,2);{var aa=e=>{var a=nr();b(e,a)};h(ea,e=>{t(C)&&e(aa)})}n(wt);var Wt=p(wt,2),ra=l(Wt);_(ra,{icon:"fa6-solid:chevron-left",class:"text-[var(--primary)] text-sm"}),n(Wt),n(tt),n(yt);var Nt=p(yt,2);let he;var Xt=l(Nt),Ut=l(Xt),Jt=l(Ut);let _e;n(Ut);var Qt=p(Ut,2),Zt=l(Qt),ia=l(Zt,!0);n(Zt);var te=p(Zt,2),oa=l(te,!0);n(te);var xe=p(te,2),na=l(xe);n(xe),n(Qt);var ye=p(Qt,2),ee=l(ye),sa=l(ee);_(sa,{icon:"material-symbols:expand-more",class:"text-lg"}),n(ee),n(ye),n(Xt);var ae=p(Xt,2),kt=l(ae),la=l(kt);n(kt),Re(kt,e=>s(Ft,e),()=>t(Ft)),n(ae);var re=p(ae,2),we=l(re);{var da=e=>{var a=sr();let u;var F=l(a);_(F,{icon:"material-symbols:shuffle",class:"text-lg"}),n(a),K(()=>{u=q(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(dt),"btn-plain":!t(dt)}),a.disabled=t(m).length<=1}),k("click",a,He),b(e,a)};h(we,e=>{e(da)})}var ke=p(we,2);{var ca=e=>{var a=lr(),u=l(a);_(u,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(a),K(()=>a.disabled=t(m).length<=1),k("click",a,qe),b(e,a)};h(ke,e=>{e(ca)})}var Et=p(ke,2);let Ee;var ua=l(Et);{var va=e=>{_(e,{icon:"eos-icons:loading",class:"text-xl"})},pa=e=>{var a=jt(),u=mt(a);{var F=j=>{_(j,{icon:"material-symbols:pause",class:"text-xl"})},X=j=>{_(j,{icon:"material-symbols:play-arrow",class:"text-xl"})};h(u,j=>{t(C)?j(F):j(X,!1)},!0)}b(e,a)};h(ua,e=>{t(I)?e(va):e(pa,!1)})}n(Et);var $e=p(Et,2);{var fa=e=>{var a=dr(),u=l(a);_(u,{icon:"material-symbols:skip-next",class:"text-xl"}),n(a),K(()=>a.disabled=t(m).length<=1),k("click",a,It),b(e,a)};h($e,e=>{e(fa)})}var ma=p($e,2);{var ba=e=>{var a=cr();let u;var F=l(a);{var X=T=>{_(T,{icon:"material-symbols:repeat-one",class:"text-lg"})},j=T=>{var ot=jt(),M=mt(ot);{var W=P=>{_(P,{icon:"material-symbols:repeat",class:"text-lg"})},D=P=>{_(P,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};h(M,P=>{t(it)===2?P(W):P(D,!1)},!0)}b(T,ot)};h(F,T=>{t(it)===1?T(X):T(j,!1)})}n(a),K(()=>u=q(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(it)>0,"btn-plain":t(it)===0})),k("click",a,Oe),b(e,a)};h(ma,e=>{e(ba)})}n(re);var Le=p(re,2),Se=l(Le);{var ga=e=>{var a=ur(),u=mt(a),F=l(u);{var X=M=>{_(M,{icon:"material-symbols:volume-off",class:"text-lg"})},j=M=>{var W=jt(),D=mt(W);{var P=nt=>{_(nt,{icon:"material-symbols:volume-down",class:"text-lg"})},Yt=nt=>{_(nt,{icon:"material-symbols:volume-up",class:"text-lg"})};h(D,nt=>{t(lt)<.5?nt(P):nt(Yt,!1)},!0)}b(M,W)};h(F,M=>{t(_t)||t(lt)===0?M(X):M(j,!1)})}n(u);var T=p(u,2),ot=l(T);n(T),Re(T,M=>s(Ct,M),()=>t(Ct)),K(()=>{et(T,"aria-valuenow",t(lt)*100),St(ot,`width: ${t(lt)*100}%`)}),k("click",u,me),k("click",T,Ge),k("keydown",T,M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),M.key==="Enter"&&me())}),b(e,a)};h(Se,e=>{e(ga)})}var ha=p(Se,2);{var _a=e=>{var a=vr();let u;var F=l(a);_(F,{icon:"material-symbols:queue-music",class:"text-lg"}),n(a),K(()=>u=q(a,1,"btn-plain w-8 h-8 rounded-lg",null,u,{"text-[var(--primary)]":t(ht)})),k("click",a,ce),b(e,a)};h(ha,e=>{e(_a)})}n(Le),n(Nt);var xa=p(Nt,2);{var ya=e=>{var a=gr(),u=l(a),F=l(u),X=l(F,!0);n(F);var j=p(F,2),T=l(j);_(T,{icon:"material-symbols:close",class:"text-lg"}),n(j),n(u);var ot=p(u,2);Oa(ot,5,()=>t(m),qa,(M,W,D)=>{var P=br();let Yt;var nt=l(P);{var wa=N=>{var ft=fr(),ne=l(ft);{var se=$t=>{_($t,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},La=$t=>{var Pe=jt(),Sa=mt(Pe);{var Ta=Lt=>{_(Lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ma=Lt=>{var Ae=pr();Ae.textContent=D+1,b(Lt,Ae)};h(Sa,Lt=>{D===t(S)?Lt(Ta):Lt(Ma,!1)},!0)}b($t,Pe)};h(ne,$t=>{D===t(S)&&t(C)?$t(se):$t(La,!1)})}n(ft),b(N,ft)};h(nt,N=>{N(wa)})}var ie=p(nt,2),Te=l(ie);n(ie);var Me=p(ie,2),Ht=l(Me);let Fe;var ka=l(Ht,!0);n(Ht);var oe=p(Ht,2);let ze;var je=l(oe),Ea=p(je);{var $a=N=>{var ft=mr(),ne=l(ft);n(ft),K(se=>ut(ne,`(${se??""})`),[()=>Gt(t(W).duration)]),b(N,ft)};h(Ea,N=>{t(W).duration>0&&N($a)})}n(oe),n(Me),n(P),K(N=>{Yt=q(P,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Yt,{"bg-[var(--btn-plain-bg)]":D===t(S),"text-[var(--primary)]":D===t(S)}),et(P,"aria-label",`播放 ${t(W).title??""} - ${t(W).artist??""}`),et(Te,"src",N),et(Te,"alt",t(W).title),Fe=q(Ht,1,"font-medium truncate",null,Fe,{"text-[var(--primary)]":D===t(S),"text-90":D!==t(S)}),ut(ka,t(W).title),ze=q(oe,1,"text-sm text-[var(--content-meta)] truncate",null,ze,{"text-[var(--primary)]":D===t(S)}),ut(je,`${t(W).artist??""} `)},[()=>Dt(t(W).cover)]),k("click",P,()=>Rt(D)),k("keydown",P,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),Rt(D))}),b(M,P)}),n(ot),n(a),K(M=>{St(a,`width: ${Pt}px; max-height: ${bt}px;`),ut(X,M)},[()=>Va(Ka.playlist)]),k("click",j,ce),Za(3,a,()=>er,()=>({duration:300,axis:"y"})),b(e,a)};h(xa,e=>{t(ht)&&e(ya)})}n(xt),Ya(2),K((e,a,u)=>{G=q(xt,1,"music-player fixed z-[1001] transition-all duration-300 ease-in-out",null,G,{expanded:t(rt),"collapsed-mode":t(H)}),St(xt,`bottom: ${t(f)??""}px; right: ${t(B)??""}px; --rotation-speed: ${gt}s; --rotation-pause-hover: paused;`),Bt=q(yt,1,"collapsed-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-3 transition-all duration-500 ease-in-out",null,Bt,{"opacity-0":!t(H),"scale-95":!t(H),"pointer-events-none":!t(H)}),et(wt,"aria-label",t(C)?"暂停音乐":"播放音乐"),he=q(Nt,1,"expanded-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,{"opacity-0":!t(rt),"scale-95":!t(rt),"pointer-events-none":!t(rt)}),et(Ut,"title",`${t(z).title??""} - ${t(z).artist??""}`),et(Jt,"src",e),_e=q(Jt,1,"w-full h-full object-cover transition-transform duration-300",null,_e,{spinning:t(C)&&!t(I)&&Tt,"animate-pulse":t(I)}),St(Jt,`animation-duration: ${gt}s;`),ut(ia,t(z).title),ut(oa,t(z).artist),ut(na,`${a??""} / ${u??""}`),et(kt,"aria-valuenow",t(V)>0?t(pt)/t(V)*100:0),St(la,`width: ${t(V)>0?t(pt)/t(V)*100:0}%`),Ee=q(Et,1,"btn-regular w-12 h-12 rounded-full",null,Ee,{"opacity-50":t(I)}),Et.disabled=t(I)},[()=>Dt(t(z).cover),()=>Gt(t(pt)),()=>Gt(t(V))]),k("click",wt,qt),k("keydown",wt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),qt())}),k("click",Wt,Kt),k("keydown",Wt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Kt())}),k("click",ee,Kt),k("click",kt,Ve),k("keydown",kt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Ft).getBoundingClientRect();const u=.5*t(V);t(r)&&(U(r,t(r).currentTime=u),s(pt,u))}}),k("click",Et,qt),b(o,w)};h(Je,o=>{o(Qe)})}b(d,be),Na()}export{Tr as default};
