import { DisciplinasService } from './../../services/disciplinas.service';
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
  disciplinas;
  N = APP_CONFIG.N;

  constructor(private service: DisciplinasService) {
    service.list().subscribe(disc => {
      this.disciplinas = disc;
    })

    const NUMBER_OF_DISCIPLINES = this.N;
  
    this.nodes.push(new Node(0, window.innerWidth/2, window.innerHeight/2 - 55, 'Cadeiras de CC'));
    const centerNode = this.nodes[0];
  
    for (let i = 1; i <= NUMBER_OF_DISCIPLINES; i++) {

      let x = Math.random() * 1300;
      let y = Math.random() * 500;
      
      let newNode = new Node(i,x,y,'Sample II');
  
      this.nodes.push(newNode);
      this.links.push(new Link(newNode, centerNode));
  
      // Adicionar o filho ao node centro
      this.nodes[0].childrens.push(newNode);
     }
  }

  setDistanceAvailable(){
  }

}
