const init = [
  ['修道院',4,'tiles/tile_monastery.png'],
  ['道付修道院',2,'tiles/tile_monastery_road.png'],
  ['ストレート',8,'tiles/tile_straight.png'],
  ['カーブ',9,'tiles/tile_curve.png'],
  ['三叉路',4,'tiles/tile_tjunction.png'],
  ['十字路',1,'tiles/tile_crossroad.png'],
  ['リップ',5,'tiles/tile_city_cap.png'],
  ['アンダーバー',3,'tiles/tile_city_road.png'],
  ['隣接',2,'tiles/tile_city_side.png'],
  ['平行',3,'tiles/tile_city_parallel.png'],
  ['右折',3,'tiles/tile_city_curve.png'],
  ['左折',3,'tiles/tile_city_road_curve.png'],
  ['T字リップ',3,'tiles/tile_city_tjunction.png'],
  ['土管',3,'tiles/tile_city_3side.png'],
  ['2辺',5,'tiles/tile_city_3side_road.png'],
  ['道付2辺',5,'tiles/tile_city_2side_road.png'],
  ['3辺',4,'tiles/tile_city_2side.png'],
  ['道付3辺',3,'tiles/tile_city_gate.png'],
  ['4辺',1,'tiles/tile_city_tube.png']
];

let tiles = init.map(x => ({
  name: x[0],
  count: x[1],
  start: x[1],
  img: x[2]
}));

let history = [];

const g = document.getElementById('grid');
const t = document.getElementById('total');

function draw() {
  g.innerHTML = '';
  let total = 0;

  tiles.forEach((x, i) => {
    total += x.count;

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${x.img}" alt="${x.name}">
      <div class="name">${x.name}</div>
      <button class="count">${x.count}</button>
    `;

    card.querySelector('.count').onclick = () => {
      if (x.count > 0) {
        x.count--;
        history.push(i);
        draw();
      }
    };

    g.appendChild(card);
  });

  t.textContent = total;
}

undo.onclick = () => {
  const i = history.pop();
  if (i !== undefined && tiles[i].count < tiles[i].start) {
    tiles[i].count++;
    draw();
  }
};

reset.onclick = () => {
  tiles = init.map(x => ({
    name: x[0],
    count: x[1],
    start: x[1],
    img: x[2]
  }));
  history = [];
  draw();
};

draw();
