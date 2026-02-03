import { APP_SETTINGS } from '../config/settings.js';

export function renderFooter() {
    const { author, role, year, version } = APP_SETTINGS.meta;
    
    const footerElement = document.getElementById('main-footer');
    footerElement.className = "mt-20 border-t border-slate-800/50 bg-card/30 py-12 px-6";

    const html = `
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div class="space-y-2 text-center md:text-left">
          <div class="flex items-center gap-3 justify-center md:justify-start">
            <div class="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden">
              <img src="assets/icons/dann.png" class="w-10 h-10 object-contain mc-pixelated" alt="Author">
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">${role}</p>
              <p class="text-sm font-bold text-white tracking-tight">${author} <span class="text-accent">|</span> v${version}</p>
            </div>
          </div>
        </div>
  
        <div class="text-center md:text-right space-y-3">
          <div class="flex items-center justify-center md:justify-end gap-3 opacity-60">
              <span class="px-1.5 py-0.5 border border-slate-700 rounded text-[8px] font-bold text-slate-400 uppercase">ES6+ Modules</span>
              <span class="px-1.5 py-0.5 border border-slate-700 rounded text-[8px] font-bold text-slate-400 uppercase">Tailwind v3</span>
              <span class="px-1.5 py-0.5 border border-slate-700 rounded text-[8px] font-bold text-slate-400 uppercase">Service Layer</span>
          </div>
          <div class="flex items-center justify-center md:justify-end gap-2">
            <span class="text-[8px] font-mono text-slate-600 uppercase">Arch: Modular MVC / Encryption: AES-256</span>
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(var(--color-accent),0.6)]"></span>
          </div>
        </div>
      </div>
  
      <div class="mt-12 pt-8 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[9px] font-medium text-slate-600 uppercase tracking-[0.5em]">
          Minecraft Dashboard &copy; ${year} <span class="mx-2">|</span> Survival Protocol
        </p>
        <div class="flex items-center gap-4 grayscale opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-3 w-auto" alt="JS">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="h-3 w-auto" alt="Tailwind">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" class="h-3 w-auto" alt="HTML5">
        </div>
      </div>
    </div>`;

    footerElement.innerHTML = html;
}