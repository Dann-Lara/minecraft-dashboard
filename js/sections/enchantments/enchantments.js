import { EnchantmentService } from '../../services/enchantments.service.js';

window.initEnchantments = async function() {
  const grid = document.getElementById('enchantments-grid');
  if (!grid) return;

  const categories = await EnchantmentService.getCatalog();
  let userProgress = await EnchantmentService.getProgress();

  async function render() {
    grid.innerHTML = '';
    let total = 0;
    let checked = 0;

    categories.forEach(cat => {
      const catDiv = document.createElement('div');
      catDiv.className = 'space-y-4';
      
      let booksHtml = '';
      cat.books.forEach(book => {
          total++;
          const isActive = !!userProgress[book.id]; 
          if (isActive) checked++;
  
          booksHtml += `
              <div data-id="${book.id}" 
                   class="ench-item ${isActive ? 'active' : ''} group relative flex flex-col p-3 bg-card border border-slate-800 rounded-xl cursor-pointer transition-all hover:border-slate-600">
              
                  <div class="flex items-center justify-between w-full">
                      <div class="flex items-center gap-3">
                          <div class="check-indicator w-5 h-5 border-2 ${isActive ? 'border-accent bg-accent' : 'border-slate-700'} rounded-md flex items-center justify-center transition-all">
                              <svg class="w-3 h-3 text-black ${isActive ? 'block' : 'hidden'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"/>
                              </svg>
                          </div>
                          <span class="label text-[11px] font-bold uppercase tracking-tight ${isActive ? 'text-white' : 'text-slate-400'} group-hover:text-slate-200">
                              ${book.name}
                          </span>
                      </div>
                      ${book.optional ? '<span class="text-[7px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded font-black uppercase">Opt</span>' : ''}
                  </div>
  
                  <div class="mt-1.5 pl-8 pr-2">
                      <p class="text-[9px] leading-relaxed text-slate-500 font-medium group-hover:text-slate-400 transition-colors">
                          ${book.desc}
                      </p>
                  </div>
              </div>
          `;
      });
  
      catDiv.innerHTML = `
          <div class="flex items-center gap-4 px-2 mt-6 mb-4 group/cat cursor-default">
              <div class="relative">
                  <div class="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover/cat:opacity-100 transition-all duration-500 scale-50 group-hover/cat:scale-150"></div>
                  
                  <div class="w-12 h-12 bg-slate-900 border-2 border-slate-800 rounded-xl flex items-center justify-center relative z-10 group-hover/cat:border-purple-500/50 group-hover/cat:-translate-y-1 transition-all duration-300">
                      <img src="assets/icons/${cat.icon}" 
                          class="w-8 h-8 object-contain mc-pixelated transition-all duration-300 group-hover/cat:scale-150 group-hover/cat:rotate-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" 
                          alt="${cat.title}">
                  </div>
              </div>
  
              <div>
                  <h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover/cat:text-purple-400 transition-colors">
                      ${cat.title}
                  </h3>
                  <div class="h-0.5 w-0 group-hover/cat:w-full bg-purple-500/30 transition-all duration-500 mt-1"></div>
              </div>
          </div>
  
          <div class="grid grid-cols-1 gap-2">${booksHtml}</div>
      `;
      
      grid.appendChild(catDiv);
    });

    updateUIProgress(checked, total);
    attachEvents();
  }

  function attachEvents() {
    grid.querySelectorAll('.ench-item').forEach(el => {
      el.onclick = async () => {
        const id = el.dataset.id;
        userProgress = await EnchantmentService.toggleEnchantment(id);
        render();
      };
    });
  }

  function updateUIProgress(checked, total) {
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
    const bar = document.getElementById('ench-bar');
    const label = document.getElementById('ench-percent');
    if (bar) bar.style.width = `${percent}%`;
    if (label) label.innerText = `${percent}%`;
  }

  render();
};