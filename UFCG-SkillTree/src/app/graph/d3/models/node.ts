import * as d3 from 'd3';

export class Node implements d3.SimulationNodeDatum {
  index?: number;

  x: number;
  y: number;
  r: number = 50;
  
  nome: string;
  categoria: string;
  codigo: string;
  dicas: string;
  periodo: number;
  pre_requisitos: string;
  sigla: string;
  linkCount: number;
  
  childrens: Node[] = [];

  constructor(nome, categoria, codigo, dicas, periodo, pre_requisitos, sigla, x, y) {
    this.nome = nome;
    this.categoria = categoria;
    this.codigo = codigo;
    this.dicas = dicas;
    this.periodo = periodo;
    this.pre_requisitos = pre_requisitos;
    this.sigla = sigla;
    this.x = x;
    this.y = y; 
  }

  get color() {
    const colors = d3.scaleOrdinal(d3.schemeSet3).domain(d3.range(0, 9));
    return colors(this.periodo);
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
