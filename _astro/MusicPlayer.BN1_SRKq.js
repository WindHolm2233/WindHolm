import{o as Ir,b as Rr,i as Dr,s as K,e as St,a as et}from"./props.WrJ9AHGX.js";import{a7 as Br,a9 as Nr,aF as Ur,aG as Wr,aH as Ne,u as Ue,aI as qr,aJ as We,aK as Hr,a0 as qe,aL as Mt,y as Or,aM as Yr,j as zt,k as ht,a as g,p as Kr,b as Vr,h as l,m as h,ag as O,i as t,f as C,s as f,c as s,r as n,ar as Gr,t as V,n as k}from"./utils.BZFIs17i.js";import{a as Xr,s as vt}from"./render.BZAoEM4_.js";import{i as y}from"./if.DSvGGf2i.js";import{e as Jr,i as Qr}from"./each.DLrycKnL.js";import{I as _}from"./Icon.Bs0XzUvZ.js";import{I as Zr}from"./zh_TW.mRp-V_dQ.js";import{i as ta}from"./translation.DncnDOTC.js";import"./navBarConfig.DgAfJBVk.js";const ea=()=>performance.now(),lt={tick:d=>requestAnimationFrame(d),now:()=>ea(),tasks:new Set};function He(){const d=lt.now();lt.tasks.forEach(o=>{o.c(d)||(lt.tasks.delete(o),o.f())}),lt.tasks.size!==0&&lt.tick(He)}function ra(d){let o;return lt.tasks.size===0&&lt.tick(He),{promise:new Promise(c=>{lt.tasks.add(o={c:d,f:c})}),abort(){lt.tasks.delete(o)}}}function Ot(d,o){We(()=>{d.dispatchEvent(new CustomEvent(o))})}function aa(d){if(d==="float")return"cssFloat";if(d==="offset")return"cssOffset";if(d.startsWith("--"))return d;const o=d.split("-");return o.length===1?o[0]:o[0]+o.slice(1).map(c=>c[0].toUpperCase()+c.slice(1)).join("")}function Re(d){const o={},c=d.split(";");for(const E of c){const[x,p]=E.split(":");if(!x||p===void 0)break;const D=aa(x.trim());o[D]=p.trim()}return o}const ia=d=>d;function oa(d,o,c,E){var x=(d&qr)!==0,p="both",D,Q=o.inert,pt=o.style.overflow,w,A;function rt(){return We(()=>D??=c()(o,E?.()??{},{direction:p}))}var Z={is_global:x,in(){o.inert=Q,Ot(o,"introstart"),w=se(o,rt(),A,1,()=>{Ot(o,"introend"),w?.abort(),w=D=void 0,o.style.overflow=pt})},out(U){o.inert=!0,Ot(o,"outrostart"),A=se(o,rt(),w,0,()=>{Ot(o,"outroend"),U?.()})},stop:()=>{w?.abort(),A?.abort()}},tt=Br;if((tt.transitions??=[]).push(Z),Xr){var Y=x;if(!Y){for(var b=tt.parent;b&&(b.f&Nr)!==0;)for(;(b=b.parent)&&(b.f&Ur)===0;);Y=!b||(b.f&Wr)!==0}Y&&Ne(()=>{Ue(()=>Z.in())})}}function se(d,o,c,E,x){var p=E===1;if(Hr(o)){var D,Q=!1;return qe(()=>{if(!Q){var U=o({direction:p?"in":"out"});D=se(d,U,c,E,x)}}),{abort:()=>{Q=!0,D?.abort()},deactivate:()=>D.deactivate(),reset:()=>D.reset(),t:()=>D.t()}}if(c?.deactivate(),!o?.duration)return x(),{abort:Mt,deactivate:Mt,reset:Mt,t:()=>E};const{delay:pt=0,css:w,tick:A,easing:rt=ia}=o;var Z=[];if(p&&c===void 0&&(A&&A(0,1),w)){var tt=Re(w(0,1));Z.push(tt,tt)}var Y=()=>1-E,b=d.animate(Z,{duration:pt,fill:"forwards"});return b.onfinish=()=>{b.cancel();var U=c?.t()??1-E;c?.abort();var S=E-U,st=o.duration*Math.abs(S),Ft=[];if(st>0){var Pt=!1;if(w)for(var $t=Math.ceil(st/16.666666666666668),ft=0;ft<=$t;ft+=1){var jt=U+S*rt(ft/$t),I=Re(w(jt,1-jt));Ft.push(I),Pt||=I.overflow==="hidden"}Pt&&(d.style.overflow="hidden"),Y=()=>{var G=b.currentTime;return U+S*rt(G/st)},A&&ra(()=>{if(b.playState!=="running")return!1;var G=Y();return A(G,1-G),!0})}b=d.animate(Ft,{duration:st,fill:"forwards"}),b.onfinish=()=>{Y=()=>E,A?.(E,1-E),x()}},{abort:()=>{b&&(b.cancel(),b.effect=null,b.onfinish=Mt)},deactivate:()=>{x=Mt},reset:()=>{E===0&&A?.(1,0)},t:()=>Y()}}function De(d,o){return d===o||d?.[Yr]===o}function Be(d={},o,c,E){return Ne(()=>{var x,p;return Or(()=>{x=p,p=[],Ue(()=>{d!==c(...p)&&(o(d,...p),x&&De(c(...x),d)&&o(null,...x))})}),()=>{qe(()=>{p&&De(c(...p),d)&&o(null,...p)})}}),d}function na(d){const o=d-1;return o*o*o+1}function la(d,{delay:o=0,duration:c=400,easing:E=na,axis:x="y"}={}){const p=getComputedStyle(d),D=+p.opacity,Q=x==="y"?"height":"width",pt=parseFloat(p[Q]),w=x==="y"?["top","bottom"]:["left","right"],A=w.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),rt=parseFloat(p[`padding${A[0]}`]),Z=parseFloat(p[`padding${A[1]}`]),tt=parseFloat(p[`margin${A[0]}`]),Y=parseFloat(p[`margin${A[1]}`]),b=parseFloat(p[`border${A[0]}Width`]),U=parseFloat(p[`border${A[1]}Width`]);return{delay:o,duration:c,easing:E,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*D};${Q}: ${S*pt}px;padding-${w[0]}: ${S*rt}px;padding-${w[1]}: ${S*Z}px;margin-${w[0]}: ${S*tt}px;margin-${w[1]}: ${S*Y}px;border-${w[0]}-width: ${S*b}px;border-${w[1]}-width: ${S*U}px;min-${Q}: 0`}}const sa={meting:{api:"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",requestTimeoutMs:8e3,playlist:{id:"14384854724",server:"netease",type:"playlist"},fallbackApis:["https://api.injahow.cn/bete/?server=:server&type=:type&id=:id","https://meting.owo.nz/api?server=:server&type=:type&id=:id","https://api.uomg.com/api/other/163music?format=json&id=:id"]},behavior:{defaultVolume:.7,defaultShuffle:!0,defaultRepeat:2,position:{bottom:16,right:16}},ui:{animation:{coverRotation:{enable:!1,speed:3}},playlist:{maxHeight:384,width:320}},responsive:{mobile:{position:{bottom:24,right:8}}},errorHandling:{errorDisplayDuration:3e3}};var da=C('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ca=C("<img/>"),ua=C('<div class="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 flex items-center justify-center"><!></div>'),va=C('<div class="absolute inset-0 bg-black/20 flex items-center justify-center"><div class="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center"><div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div></div></div>'),pa=C("<button><!></button>"),fa=C('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),ma=C('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>'),ba=C("<button><!></button>"),ga=C('<button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>',1),ha=C("<button><!></button>"),ya=C('<span class="text-sm text-[var(--content-meta)]"></span>'),_a=C('<div class="w-6 h-6 flex items-center justify-center"><!></div>'),xa=C('<span class="ml-2"> </span>'),wa=C('<div role="button" tabindex="0"><!> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> <!></div></div></div>'),ka=C('<div class="playlist-panel float-panel fixed bottom-20 right-4 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 scrollbar-custom"></div></div>'),Ea=C(`<!> <div><div style="width: 90px; height: 80px; background-color: var(--card-bg); "><div class="flex items-center gap-2 h-full"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer flex-shrink-0" tabindex="0" role="button"><!> <!></div> <button class="expand-btn w-8 h-8 rounded-full btn-regular border border-[var(--line-divider)] hover:border-[var(--primary)] active:scale-95 transition-all duration-200 flex items-center justify-center flex-shrink-0" tabindex="0" aria-label="展开音乐播放器"><!></button></div></div> <div style="width: 320px; background-color: var(--card-bg);"><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <button><!></button> <!> <!></div> <div class="bottom-controls flex items-center gap-2"><!> <!></div></div> <!></div> <style>@keyframes rotate {
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
    }</style>`,1);function ja(d,o){Vr(o,!1);const c=sa;let E=c.meting?.api,x=c.meting?.playlist?.id,p=c.meting?.playlist?.server,D=c.meting?.playlist?.type,Q=c.meting?.fallbackApis??[],pt=c.meting?.requestTimeoutMs,w=c.behavior?.defaultVolume,A=c.behavior?.defaultShuffle,rt=c.behavior?.defaultRepeat,Z=c.behavior?.position?.bottom,tt=c.behavior?.position?.right,Y=c.responsive?.mobile?.position?.bottom,b=c.responsive?.mobile?.position?.right,U=h(Z),S=h(tt);function st(){typeof window>"u"||(window.innerWidth<=768?(l(U,Y),l(S,b)):(l(U,Z),l(S,tt)))}let Ft=c.ui?.playlist?.maxHeight,Pt=c.ui?.playlist?.width,$t=c.ui?.animation?.coverRotation?.enable,ft=c.ui?.animation?.coverRotation?.speed,jt=c.errorHandling?.errorDisplayDuration,I=h(!1),G=h(!1),mt=h(!0),yt=h(!1),bt=h(0),X=h(0),dt=h(w),_t=h(!1),R=h(!1),ct=h(A),at=h(rt),de=h(""),Ct=h(!1),z=h({title:"Loading ...",artist:"Loading ...",cover:"",url:"",duration:0}),m=h([]),$=h(0),i=h(),Lt=h(),It=h(),Tt=null;function Oe(e){return(/^https?:\/\//i.test(e)?e:`https://${e.replace(/^\/+/,"")}`).replaceAll(":server",p).replaceAll(":type",D).replaceAll(":id",x).replaceAll(":auth","").replaceAll(":r",Date.now().toString())}function Ye(e){const v=Number(e??0);return!Number.isFinite(v)||v<=0?0:v>1e4?Math.floor(v/1e3):v}function Ke(e,v){const F=e.url??e.src,B=typeof F=="string"?F.trim():"";if(!B)return null;const it=e.artist??e.author??e.ar,ut=Array.isArray(it)?it.map(W=>typeof W=="string"?W:typeof W=="object"&&W&&"name"in W?String(W.name):"").filter(Boolean).join(" / "):String(it??"未知艺术家");return{id:Number(e.id??v+1),title:String(e.name??e.title??"未知歌曲"),artist:ut,cover:String(e.pic??e.cover??e.poster??""),url:B,duration:Ye(e.duration??e.dt??e.length)}}async function Ve(e){Tt?.abort(),Tt=new AbortController;const v=window.setTimeout(()=>{Tt?.abort()},pt);try{const F=await fetch(Oe(e),{signal:Tt.signal});if(!F.ok)throw new Error(`HTTP ${F.status}`);const B=await F.json();return(Array.isArray(B)?B:Array.isArray(B?.data)?B.data:Array.isArray(B?.songs)?B.songs:[]).map((ut,W)=>Ke(ut,W)).filter(ut=>!!ut)}finally{clearTimeout(v)}}async function Ge(){l(R,!0);const e=[E,...Q];for(let v=0;v<e.length;v++)try{if(l(m,await Ve(e[v])),t(m).length===0)throw new Error("Empty playlist");ue(t(m)[0]),l(R,!1);return}catch(F){console.warn(`API ${v+1} failed:`,F),v===e.length-1&&(Vt("所有 Meting API 都不可用，请稍后重试或切换到本地歌单。"),l(R,!1))}}function Yt(){!t(i)||!t(z).url||(t(I)?t(i).pause():t(i).play())}function Kt(){l(mt,!t(mt)),t(mt)?(l(G,!1),l(yt,!1)):(l(G,!0),l(yt,!1))}function ce(){l(yt,!t(yt))}function Xe(){l(ct,!t(ct))}function Je(){l(at,(t(at)+1)%3)}function Qe(){if(t(m).length===0)return;const e=t($)>0?t($)-1:t(m).length-1;Dt(e)}function Rt(){if(t(m).length===0)return;let e;if(t(ct))do e=Math.floor(Math.random()*t(m).length);while(e===t($)&&t(m).length>1);else e=t($)<t(m).length-1?t($)+1:0;console.log("nextSong 调用",{currentIndex:t($),newIndex:e,playlistLength:t(m).length,isShuffled:t(ct)}),Dt(e)}function Dt(e){if(e<0||e>=t(m).length)return;const v=t(I);l($,e),t(i)&&t(i).pause(),ue(t(m)[t($)]),(v||!t(I))&&setTimeout(()=>{t(i)&&(t(i).readyState>=2?t(i).play().catch(()=>{}):t(i).addEventListener("canplay",()=>{t(i).play().catch(()=>{})},{once:!0}))},100)}function Bt(e){return e.startsWith("http://")||e.startsWith("https://")?e:e.startsWith("/")?"/"+e.substring(1):"/"+e}function ue(e){!e||!t(i)||(l(z,{...e}),t(z).cover||O(z,t(z).cover="/favicon/favicon-light-192.png"),e.url?(l(R,!0),t(i).pause(),O(i,t(i).currentTime=0),l(bt,0),l(X,e.duration??0),t(i).removeEventListener("loadeddata",ve),t(i).removeEventListener("error",pe),t(i).removeEventListener("loadstart",fe),t(i).addEventListener("loadeddata",ve,{once:!0}),t(i).addEventListener("error",pe,{once:!0}),t(i).addEventListener("loadstart",fe,{once:!0}),O(i,t(i).src=Bt(e.url)),t(i).load()):l(R,!1))}function ve(){l(R,!1),t(i)?.duration&&t(i).duration>1&&(l(X,Math.floor(t(i).duration)),t(m)[t($)]&&O(m,t(m)[t($)].duration=t(X)),O(z,t(z).duration=t(X)))}function pe(e){l(R,!1),Vt(`无法播放 "${t(z).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>Rt(),1e3):t(m).length<=1&&Vt("播放列表中没有可用的歌曲")}function fe(){}function Vt(e){l(de,e),l(Ct,!0),setTimeout(()=>{l(Ct,!1)},jt)}function Ze(){l(Ct,!1)}function tr(e){if(!t(i)||!t(Lt))return;const v=t(Lt).getBoundingClientRect(),B=(e.clientX-v.left)/v.width*t(X);O(i,t(i).currentTime=B),l(bt,B)}function er(e){if(!t(i)||!t(It))return;const v=t(It).getBoundingClientRect(),F=Math.max(0,Math.min(1,(e.clientX-v.left)/v.width));l(dt,F),O(i,t(i).volume=t(dt)),l(_t,t(dt)===0)}function me(){t(i)&&(l(_t,!t(_t)),O(i,t(i).muted=t(_t)))}function Gt(e){if(!Number.isFinite(e)||e<0)return"0:00";const v=Math.floor(e/60),F=Math.floor(e%60);return`${v}:${F.toString().padStart(2,"0")}`}function rr(){t(i)&&(t(i).addEventListener("play",()=>{l(I,!0)}),t(i).addEventListener("pause",()=>{l(I,!1)}),t(i).addEventListener("timeupdate",()=>{l(bt,t(i).currentTime)}),t(i).addEventListener("ended",()=>{console.log("歌曲播放结束",{isRepeating:t(at),currentIndex:t($),playlistLength:t(m).length,isShuffled:t(ct)}),t(at)===1?(console.log("单曲循环：重新播放当前歌曲"),O(i,t(i).currentTime=0),t(i).play().catch(()=>{})):t(at)===2?(console.log("列表循环：播放下一首"),Rt()):t($)<t(m).length-1||t(ct)?(console.log("非循环模式：播放下一首"),Rt()):(console.log("非循环模式：播放列表结束，停止播放"),l(I,!1))}),t(i).addEventListener("error",e=>{l(R,!1)}),t(i).addEventListener("stalled",()=>{}),t(i).addEventListener("waiting",()=>{}))}Ir(()=>{l(i,new Audio),O(i,t(i).volume=t(dt)),O(i,t(i).muted=t(_t)),rr(),st(),typeof window<"u"&&window.addEventListener("resize",st),Ge().then(()=>{})}),Rr(()=>{Tt?.abort(),t(i)&&(t(i).pause(),O(i,t(i).src="")),typeof window<"u"&&window.removeEventListener("resize",st)}),Dr();var be=zt(),ar=ht(be);{var ir=e=>{var v=Ea(),F=ht(v);{var B=r=>{var a=da(),u=s(a),M=s(u);_(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var J=f(M,2),P=s(J,!0);n(J);var L=f(J,2),ot=s(L);_(ot,{icon:"material-symbols:close",class:"text-lg"}),n(L),n(u),n(a),V(()=>vt(P,t(de))),k("click",L,Ze),g(r,a)};y(F,r=>{t(Ct)&&r(B)})}var it=f(F,2);let ut;var W=s(it);let ge;var he=s(W),xt=s(he),ye=s(xt);{var or=r=>{var a=ca();let u;V(M=>{et(a,"src",M),et(a,"alt",`${t(z).title??""} - ${t(z).artist??""}`),u=K(a,1,"w-full h-full object-cover transition-transform duration-300",null,u,{spinning:t(I)&&!t(R)&&$t,"animate-pulse":t(R)}),St(a,`animation-duration: ${ft}s;`)},[()=>Bt(t(z).cover)]),g(r,a)},nr=r=>{var a=ua(),u=s(a);_(u,{icon:"fa6-solid:music",class:"text-white text-lg"}),n(a),g(r,a)};y(ye,r=>{t(z).cover?r(or):r(nr,!1)})}var lr=f(ye,2);{var sr=r=>{var a=va();g(r,a)};y(lr,r=>{t(I)&&r(sr)})}n(xt);var Nt=f(xt,2),dr=s(Nt);_(dr,{icon:"fa6-solid:chevron-left",class:"text-[var(--primary)] text-sm"}),n(Nt),n(he),n(W);var Ut=f(W,2);let _e;var Xt=s(Ut),Wt=s(Xt),Jt=s(Wt);let xe;n(Wt);var Qt=f(Wt,2),Zt=s(Qt),cr=s(Zt,!0);n(Zt);var te=f(Zt,2),ur=s(te,!0);n(te);var we=f(te,2),vr=s(we);n(we),n(Qt);var ke=f(Qt,2),ee=s(ke),pr=s(ee);_(pr,{icon:"material-symbols:expand-more",class:"text-lg"}),n(ee),n(ke),n(Xt);var re=f(Xt,2),wt=s(re),fr=s(wt);n(wt),Be(wt,r=>l(Lt,r),()=>t(Lt)),n(re);var ae=f(re,2),Ee=s(ae);{var mr=r=>{var a=pa();let u;var M=s(a);_(M,{icon:"material-symbols:shuffle",class:"text-lg"}),n(a),V(()=>{u=K(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(ct),"btn-plain":!t(ct)}),a.disabled=t(m).length<=1}),k("click",a,Xe),g(r,a)};y(Ee,r=>{r(mr)})}var Ae=f(Ee,2);{var br=r=>{var a=fa(),u=s(a);_(u,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(a),V(()=>a.disabled=t(m).length<=1),k("click",a,Qe),g(r,a)};y(Ae,r=>{r(br)})}var kt=f(Ae,2);let Se;var gr=s(kt);{var hr=r=>{_(r,{icon:"eos-icons:loading",class:"text-xl"})},yr=r=>{var a=zt(),u=ht(a);{var M=P=>{_(P,{icon:"material-symbols:pause",class:"text-xl"})},J=P=>{_(P,{icon:"material-symbols:play-arrow",class:"text-xl"})};y(u,P=>{t(I)?P(M):P(J,!1)},!0)}g(r,a)};y(gr,r=>{t(R)?r(hr):r(yr,!1)})}n(kt);var $e=f(kt,2);{var _r=r=>{var a=ma(),u=s(a);_(u,{icon:"material-symbols:skip-next",class:"text-xl"}),n(a),V(()=>a.disabled=t(m).length<=1),k("click",a,Rt),g(r,a)};y($e,r=>{r(_r)})}var xr=f($e,2);{var wr=r=>{var a=ba();let u;var M=s(a);{var J=L=>{_(L,{icon:"material-symbols:repeat-one",class:"text-lg"})},P=L=>{var ot=zt(),T=ht(ot);{var q=j=>{_(j,{icon:"material-symbols:repeat",class:"text-lg"})},N=j=>{_(j,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};y(T,j=>{t(at)===2?j(q):j(N,!1)},!0)}g(L,ot)};y(M,L=>{t(at)===1?L(J):L(P,!1)})}n(a),V(()=>u=K(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t(at)>0,"btn-plain":t(at)===0})),k("click",a,Je),g(r,a)};y(xr,r=>{r(wr)})}n(ae);var Le=f(ae,2),Te=s(Le);{var kr=r=>{var a=ga(),u=ht(a),M=s(u);{var J=T=>{_(T,{icon:"material-symbols:volume-off",class:"text-lg"})},P=T=>{var q=zt(),N=ht(q);{var j=nt=>{_(nt,{icon:"material-symbols:volume-down",class:"text-lg"})},qt=nt=>{_(nt,{icon:"material-symbols:volume-up",class:"text-lg"})};y(N,nt=>{t(dt)<.5?nt(j):nt(qt,!1)},!0)}g(T,q)};y(M,T=>{t(_t)||t(dt)===0?T(J):T(P,!1)})}n(u);var L=f(u,2),ot=s(L);n(L),Be(L,T=>l(It,T),()=>t(It)),V(()=>{et(L,"aria-valuenow",t(dt)*100),St(ot,`width: ${t(dt)*100}%`)}),k("click",u,me),k("click",L,er),k("keydown",L,T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),T.key==="Enter"&&me())}),g(r,a)};y(Te,r=>{r(kr)})}var Er=f(Te,2);{var Ar=r=>{var a=ha();let u;var M=s(a);_(M,{icon:"material-symbols:queue-music",class:"text-lg"}),n(a),V(()=>u=K(a,1,"btn-plain w-8 h-8 rounded-lg",null,u,{"text-[var(--primary)]":t(yt)})),k("click",a,ce),g(r,a)};y(Er,r=>{r(Ar)})}n(Le),n(Ut);var Sr=f(Ut,2);{var $r=r=>{var a=ka(),u=s(a),M=s(u),J=s(M,!0);n(M);var P=f(M,2),L=s(P);_(L,{icon:"material-symbols:close",class:"text-lg"}),n(P),n(u);var ot=f(u,2);Jr(ot,5,()=>t(m),Qr,(T,q,N)=>{var j=wa();let qt;var nt=s(j);{var Lr=H=>{var gt=_a(),ne=s(gt);{var le=Et=>{_(Et,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Fr=Et=>{var Ce=zt(),Pr=ht(Ce);{var jr=At=>{_(At,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Cr=At=>{var Ie=ya();Ie.textContent=N+1,g(At,Ie)};y(Pr,At=>{N===t($)?At(jr):At(Cr,!1)},!0)}g(Et,Ce)};y(ne,Et=>{N===t($)&&t(I)?Et(le):Et(Fr,!1)})}n(gt),g(H,gt)};y(nt,H=>{H(Lr)})}var ie=f(nt,2),Me=s(ie);n(ie);var ze=f(ie,2),Ht=s(ze);let Fe;var Tr=s(Ht,!0);n(Ht);var oe=f(Ht,2);let Pe;var je=s(oe),Mr=f(je);{var zr=H=>{var gt=xa(),ne=s(gt);n(gt),V(le=>vt(ne,`(${le??""})`),[()=>Gt(t(q).duration)]),g(H,gt)};y(Mr,H=>{t(q).duration>0&&H(zr)})}n(oe),n(ze),n(j),V(H=>{qt=K(j,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,qt,{"bg-[var(--btn-plain-bg)]":N===t($),"text-[var(--primary)]":N===t($)}),et(j,"aria-label",`播放 ${t(q).title??""} - ${t(q).artist??""}`),et(Me,"src",H),et(Me,"alt",t(q).title),Fe=K(Ht,1,"font-medium truncate",null,Fe,{"text-[var(--primary)]":N===t($),"text-90":N!==t($)}),vt(Tr,t(q).title),Pe=K(oe,1,"text-sm text-[var(--content-meta)] truncate",null,Pe,{"text-[var(--primary)]":N===t($)}),vt(je,`${t(q).artist??""} `)},[()=>Bt(t(q).cover)]),k("click",j,()=>Dt(N)),k("keydown",j,H=>{(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),Dt(N))}),g(T,j)}),n(ot),n(a),V(T=>{St(a,`width: ${Pt}px; max-height: ${Ft}px;`),vt(J,T)},[()=>ta(Zr.playlist)]),k("click",P,ce),oa(3,a,()=>la,()=>({duration:300,axis:"y"})),g(r,a)};y(Sr,r=>{t(yt)&&r($r)})}n(it),Gr(2),V((r,a,u)=>{ut=K(it,1,"music-player fixed z-[1001] transition-all duration-300 ease-in-out",null,ut,{expanded:t(G),"collapsed-mode":t(mt)}),St(it,`bottom: ${t(U)??""}px; right: ${t(S)??""}px; --rotation-speed: ${ft}s; --rotation-pause-hover: paused;`),ge=K(W,1,"collapsed-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ge,{"opacity-0":!t(mt),"scale-95":!t(mt),"pointer-events-none":!t(mt)}),et(xt,"aria-label",t(I)?"暂停音乐":"播放音乐"),_e=K(Ut,1,"expanded-player card-base bg-[var(--float-panel-bg)] dark:bg-zinc-800/90 dark:backdrop-blur-md dark:border dark:border-zinc-700/50 rounded-2xl p-4 transition-all duration-500 ease-in-out",null,_e,{"opacity-0":!t(G),"scale-95":!t(G),"pointer-events-none":!t(G)}),et(Wt,"title",`${t(z).title??""} - ${t(z).artist??""}`),et(Jt,"src",r),xe=K(Jt,1,"w-full h-full object-cover transition-transform duration-300",null,xe,{spinning:t(I)&&!t(R)&&$t,"animate-pulse":t(R)}),St(Jt,`animation-duration: ${ft}s;`),vt(cr,t(z).title),vt(ur,t(z).artist),vt(vr,`${a??""} / ${u??""}`),et(wt,"aria-valuenow",t(X)>0?t(bt)/t(X)*100:0),St(fr,`width: ${t(X)>0?t(bt)/t(X)*100:0}%`),Se=K(kt,1,"btn-regular w-12 h-12 rounded-full",null,Se,{"opacity-50":t(R)}),kt.disabled=t(R)},[()=>Bt(t(z).cover),()=>Gt(t(bt)),()=>Gt(t(X))]),k("click",xt,Yt),k("keydown",xt,r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),Yt())}),k("click",Nt,Kt),k("keydown",Nt,r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),Kt())}),k("click",ee,Kt),k("click",wt,tr),k("keydown",wt,r=>{if(r.key==="Enter"||r.key===" "){r.preventDefault(),t(Lt).getBoundingClientRect();const u=.5*t(X);t(i)&&(O(i,t(i).currentTime=u),l(bt,u))}}),k("click",kt,Yt),g(e,v)};y(ar,e=>{e(ir)})}g(d,be),Kr()}export{ja as default};
