const DEFS=[("修道院", 4), ("道付き修道院", 2), ("ストレート", 8), ("カーブ", 9), ("三叉路", 4), ("十字路", 1), ("リップ", 5), ("アンダーバー", 3), ("隣接", 2), ("平行", 3), ("右折", 3), ("左折", 3), ("T字リップ", 3), ("土管", 3), ("2辺", 5), ("道付き2辺", 5), ("3辺", 4), ("道付き3辺", 3), ("4辺", 1)];
const KEY="meepleEye_v0031";
let state=JSON.parse(localStorage.getItem(KEY)||"null");
if(!Array.isArray(state)||state.length!==DEFS.length){state=DEFS.map(([name,count])=>({name,count}));}
let history=[];const grid=document.getElementById("grid");
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function render(){grid.innerHTML="";let total=0;state.forEach(tile=>{total+=tile.count;const el=document.createElement("div");el.className="tile"+(tile.count===1?" warn":"");el.innerHTML=`<div class=name>${tile.name}</div><div class=count>${tile.count}</div>`;el.onclick=()=>{if(tile.count>0){history.push(JSON.stringify(state));tile.count--;save();render();}};let t;el.onpointerdown=()=>t=setTimeout(()=>{history.push(JSON.stringify(state));tile.count++;save();render();},550);el.onpointerup=el.onpointerleave=()=>clearTimeout(t);grid.appendChild(el);});document.getElementById("remain").textContent=total;}
document.getElementById("undo").onclick=()=>{if(history.length){state=JSON.parse(history.pop());save();render();}};
document.getElementById("reset").onclick=()=>{history.push(JSON.stringify(state));state=DEFS.map(([name,count])=>({name,count}));save();render();};
render();
