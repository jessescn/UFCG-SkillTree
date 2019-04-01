import * as d3 from 'd3';

export class Node implements d3.SimulationNodeDatum {
  index?: number;

  x: number;
  y: number;
  r: number = 50;
  
  disciplina: string;
  periodo = Math.floor(Math.random() * 10);
  id: string;
  linkCount: number = Math.floor(Math.random() * 10);
  childrens: Node[] = [];

  constructor(id, x, y, disciplina) {
    this.id = id;
    this.x = x;
    this.y = y; 
    this.disciplina = disciplina;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / 6);
  }

  get color() {
    let colors = d3.scaleOrdinal(d3.schemeSet3).domain(d3.range(0, 20));
    return colors(this.id);
  }

  borderColor(hex){
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let lum = -0.4;
    let rgb = "#", c, i;

    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }
}
