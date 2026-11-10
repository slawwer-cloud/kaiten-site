(function(){
  const cfg=window.KAITEN_ANALYTICS_CONFIG||{};
  const gaId=cfg.ga4MeasurementId;
  const ymId=Number(cfg.yandexMetricaId||0);
  const validGA=gaId && !gaId.includes("X");
  if(validGA){
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments);} window.gtag=gtag;
    gtag('js',new Date()); gtag('config',gaId,{send_page_view:true});
    const s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(gaId); document.head.appendChild(s);
  }
  if(ymId>0){
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();
      for(let j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
    })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
    ym(ymId,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
  }
  window.trackKaitenEvent=function(eventName,params){
    if(window.gtag) window.gtag('event',eventName,params||{});
    if(window.ym && ymId>0){
      const goalMap={cta_click:'cta_click',demo_form_start:'demo_form_start',generate_lead:'demo_form_submit'};
      if(goalMap[eventName]) window.ym(ymId,'reachGoal',goalMap[eventName],params||{});
    }
  };
})();