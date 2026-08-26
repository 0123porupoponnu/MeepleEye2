const defs=[("修道院", 4), ("道付き修道院", 2), ("ストレート", 8), ("カーブ", 9), ("三叉路", 4), ("十字路", 1), ("リップ", 5), ("アンダーバー", 3), ("隣接", 2), ("平行", 3), ("右折", 3), ("左折", 3), ("T字リップ", 3), ("土管", 3), ("2辺", 5), ("道付き2辺", 5), ("3辺", 4), ("道付き3辺", 3), ("4辺", 1)];

let s=JSON.parse(localStorage.getItem('meepleEyeOfficial71')||'null')||defs.map(d=>({n:d[0],c:d[1]}));
let hist=[];const g=document.getElementById('grid');
function save(){localStorage.setItem('meepleEyeOfficial71',JSON.stringify(s));}
function draw(){g.innerHTML='';let total=0;
s.forEach((t,i)=>{total+=t.c;const d=document.createElement('div');d.className='tile'+(t.c===1?' warn':'');d.innerHTML=`<div class=name>${t.n}</div><div class=count>${t.c}</div>`;
d.onclick=()=>{if(t.c>0){hist.push(JSON.stringify(s));t.c--;save();draw();}};
let tm;d.onpointerdown=()=>{tm=setTimeout(()=>{hist.push(JSON.stringify(s));t.c++;save();draw();},550);};d.onpointerup=d.onpointerleave=()=>clearTimeout(tm);
g.appendChild(d);});document.getElementById('remain').textContent=total;}
document.getElementById('undo').onclick=()=>{if(hist.length){s=JSON.parse(hist.pop());save();draw();}};
document.getElementById('reset').onclick=()=>{hist.push(JSON.stringify(s));s=defs.map(d=>({n:d[0],c:d[1]}));save();draw();};
draw();if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
