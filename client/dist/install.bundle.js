(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),console.log("before install",t),window.defferedPrompt=t,e.classList.toggle("hidden",!1)})),e.addEventListener("click",(async()=>{window.deferredPrompt,prompt})),window.addEventListener("appinstalled",(e=>{window.deferredPrompt=nul}))})();