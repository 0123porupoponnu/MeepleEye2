const DEFS=[('修道院', 4), ('道付き修道院', 2), ('ストレート', 8), ('カーブ', 9), ('三叉路', 4), ('十字路', 1), ('リップ', 5), ('アンダーバー', 3), ('隣接', 2), ('平行', 3), ('右折', 3), ('左折', 3), ('T字リップ', 3), ('土管', 3), ('2辺', 5), ('道付き2辺', 5), ('3辺', 4), ('道付き3辺', 3), ('4辺', 1)].map(([name,count])=>({name,count}));
const KEY='meepleEye_build0041';
let state=JSON.parse(localStorage.getItem(KEY)||'null');
if(!Array.isArray(state)||state.length!==DEFS.length) state=DEFS.map(t=>({...t}));
let hist=[],last=-1;
const grid=document.getElementById('grid');
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function draw(){grid.innerHTML='';let total=0;state.forEach((t,i)=>{total+=t.count;const el=document.createElement('div');el.className='tile'+(i===last?' last':'')+(t.count===1?' one':'');el.innerHTML=`<img src="icons/icon.png"><div class=name>${t.name}</div><div class=count>${t.count}</div>`;el.onclick=()=>{if(t.count>0){hist.push(JSON.stringify(state));t.count--;last=i;save();draw();}};let tm;el.onpointerdown=()=>tm=setTimeout(()=>{hist.push(JSON.stringify(state));t.count++;last=i;save();draw();},550);el.onpointerup=el.onpointerleave=()=>clearTimeout(tm);grid.appendChild(el);});document.getElementById('remain').textContent=total;}
document.getElementById('undo').onclick=()=>{if(hist.length){state=JSON.parse(hist.pop());save();draw();}};
document.getElementById('reset').onclick=()=>{hist.push(JSON.stringify(state));state=DEFS.map(t=>({...t}));last=-1;save();draw();};
draw();