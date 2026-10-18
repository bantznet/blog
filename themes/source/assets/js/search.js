(()=>{const s=document.currentScript,q=document.getElementById('q'),r=document.getElementById('results');let idx=null;
async function load(){if(!idx)idx=await (await fetch(s.dataset.index)).json();return idx}
q.addEventListener('input',async()=>{const t=q.value.trim().toLowerCase();if(!t){r.hidden=true;return}
const d=await load();const m=d.filter(p=>(p.title+' '+p.summary+' '+p.tags.join(' ')).toLowerCase().includes(t)).slice(0,8);
r.innerHTML=m.length?m.map(p=>`<li><a href="${p.url}"><b>${p.title}</b><span>${p.summary}</span></a></li>`).join(''):'<li class="none">No results</li>';r.hidden=false});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();q.focus()}if(e.key==='Escape'){r.hidden=true;q.blur()}});
document.addEventListener('click',e=>{if(!e.target.closest('.search'))r.hidden=true})})();

document.getElementById('tt').addEventListener('click',()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;localStorage.setItem('theme',n)});
