const init=[['修道院',tiles/tile_monastery.png],['道付修道院',tiles/tile_monastery_road.png],['ストレート',tiles/tile_straight.png],['カーブ',tiles/tile_curve.png],['三叉路',tiles/tile_crossroad.png],['十字路',tiles/tile_tjunction.png],['リップ',tiles/tile_city_cap.png],['アンダーバー',3],['隣接',2],['平行',3],['右折',3],['左折',3],['T字リップ',3],['土管',3],['2辺',5],['道付2辺',5],['3辺',4],['道付3辺',3],['4辺',1]];
let tiles=init.map(x=>({...{name:x[0],count:x[1],start:x[1]}}));let history=[];
const g=document.getElementById('grid'),t=document.getElementById('total');
function draw(){g.innerHTML='';let total=0;tiles.forEach((x,i)=>{total+=x.count;const d=document.createElement('div');d.className='card'+(x.count===0?' zero':'');d.innerHTML=`<img src="tiles/tile${i+1}.png" onerror="this.src='meeple/icon-192.png'"><div class=n>${x.name}</div><div class=c>${x.count}</div>`;d.onclick=()=>{if(x.count>0){history.push(i);x.count--;draw();}};g.appendChild(d)});t.textContent=total}
undo.onclick=()=>{const i=history.pop();if(i!==undefined&&tiles[i].count<tiles[i].start){tiles[i].count++;draw();}}
reset.onclick=()=>{tiles=init.map(x=>({...{name:x[0],count:x[1],start:x[1]}}));history=[];draw()}
draw();
