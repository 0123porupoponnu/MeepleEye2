const defs=[
{name:"修道院",count:4},{name:"道付き修道院",count:2},
{name:"ストレート",count:8},{name:"カーブ",count:9},{name:"三叉路",count:4},{name:"十字路",count:1},
{name:"リップ",count:5},{name:"アンダーバー",count:3},{name:"隣接",count:2},{name:"平行",count:3},{name:"右折",count:3},{name:"左折",count:3},{name:"T字リップ",count:3},
{name:"土管",count:3},{name:"2辺",count:5},{name:"道付き2辺",count:5},{name:"3辺",count:4},{name:"道付き3辺",count:3},{name:"4辺",count:1}
];
let state=JSON.parse(localStorage.getItem('meepleEyeOfficial71')||'null')||defs.map(d=>({...d}));
const history=[];const grid=document.getElementById('grid');
function save(){localStorage.setItem('meepleEyeOfficial71',JSON.stringify(state));}
function render(){grid.innerHTML='';let total=0;state.forEach(tile=>{total+=tile.count;const el=document.createElement('div');el.className='tile'+(tile.count===1?' warn':'');el.innerHTML=`<div class=name>${tile.name}</div><div class=count>${tile.count}</div>`;el.onclick=()=>{if(tile.count>0){history.push(JSON.stringify(state));tile.count--;save();render();}};let t;el.onpointerdown=()=>{t=setTimeout(()=>{history.push(JSON.stringify(state));tile.count++;save();render();},550)};el.onpointerup=el.onpointerleave=()=>clearTimeout(t);grid.appendChild(el)});document.getElementById('remain').textContent=total;}
document.getElementById('undo').onclick=()=>{if(history.length){state=JSON.parse(history.pop());save();render();}};
document.getElementById('reset').onclick=()=>{history.push(JSON.stringify(state));state=defs.map(d=>({...d}));save();render();};
localStorage.removeItem('meepleEye002');render();