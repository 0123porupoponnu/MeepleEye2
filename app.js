const t=[
["修道院",4],["道付修道院",2],["ストレート",8],["カーブ",9],
["三叉路",4],["十字路",1],["リップ",5],["アンダーバー",3],
["隣接",2],["平行",3],["右折",3],["左折",3],
["T字リップ",3],["土管",3],["2辺",5],["道付2辺",5],
["3辺",4],["道付3辺",3],["4辺",1]];
const g=document.getElementById("grid");
t.forEach((x,i)=>g.innerHTML+=`<div class=card><img src="tiles/tile${i+1}.png" onerror="this.src='icons/icon-192.png'"><div class=n>${x[0]}</div><div class=c>${x[1]}</div></div>`);