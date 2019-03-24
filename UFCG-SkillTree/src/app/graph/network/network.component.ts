import { Component } from '@angular/core';
import APP_CONFIG from './../../app.config';
import { Node, Link } from '../../graph/d3';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {

  nodes: Node[] = [];
  links: Link[] = [];
  N = 30;

  constructor() {
    const N = this.N;
    this.nodes.push(new Node(1, 100, 500, 'LOAC'))

    for (let i = 2; i <= N; i++) {
      let x = Math.random() * 2300;
      let y = Math.random() * 1500;

      this.nodes.push(new Node(i,x,y, 'Elmar'));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        let source = this.nodes[i];
        let target = this.nodes[0];

        this.links.push(new Link(source, target));
      }
    }
  }

}
