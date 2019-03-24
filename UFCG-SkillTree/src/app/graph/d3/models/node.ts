import APP_CONFIG from '../../../app.config';
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
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get color() {
    let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}
