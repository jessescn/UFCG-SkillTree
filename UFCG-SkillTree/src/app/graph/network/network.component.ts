import { DisciplinasService } from './../../services/disciplinas.service';
import { Component } from '@angular/core';
import { Node, Link } from '../../graph/d3';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {

  nodes: Node[] = [];
  links: Link[] = [];
  disciplinas = ["Cadeiras de CC", "Calculo I", "Calculo II","Cálculo III", "Programação I", "Programação II", "Algebra linear",
                 "Calculo I", "Calculo II","Cálculo III", "Programação I", "Programação II", "Algebra linear"];
  numberOfDisciplines;

  constructor(private service: DisciplinasService) {
    // service.getDisciplines().subscribe(disc => {
    //   this.disciplinas = disc;
    // })

    const NUMBER_OF_DISCIPLINES = this.disciplinas.length;    
  
    this.nodes.push(new Node(0, window.innerWidth/2, window.innerHeight/2 - 55, this.disciplinas[0]));

    for (let i = 1; i < NUMBER_OF_DISCIPLINES; i++) {

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      
      let newNode = new Node(i, x, y, this.disciplinas[i]);
  
      this.nodes.push(newNode);
      this.links.push(new Link(newNode, this.nodes[i - 1]));
  
      this.nodes[i - 1].childrens.push(newNode);
      this.nodes[0].childrens.push(newNode);
     }
  }

}
