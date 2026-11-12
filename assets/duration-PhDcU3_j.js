const e=n=>{if(n==null)return"—";if(n<1e3)return`${n} ms`;const t=Math.round(n/1e3);return t<60?`${t} s`:`${Math.floor(t/60)} min ${String(t%60).padStart(2,"0")} s`};export{e as f};
