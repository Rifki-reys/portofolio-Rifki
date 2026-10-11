/**
 * Theme resolution.
 *
 * The stored preference is read from localStorage, defaulting to light (paper).
 * The script below is injected into <head> so the correct class lands on <html>
 * before first paint — no flash of the wrong canvas.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme')==='dark'?'dark':'light';var d=document.documentElement;d.classList.toggle('dark',t==='dark');d.dataset.theme=t;}catch(e){}})();`;