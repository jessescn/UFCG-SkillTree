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
  disciplinas: string[] = ["Cadeiras de CC", "Calculo I", "Calculo II","Cálculo III", "Programação I", "Programação II", "Algebra linear",
                 "Calculo I", "Calculo II","Cálculo III", "Programação I", "Programação II", "Algebra linear"];
  
  disciplines = ["Cálculo I", "FMCC I", "Programação I", "Laboratório de Programação I", "Lingua Portuguesa"];
  numberOfDisciplines: number;

  constructor(private service: DisciplinasService) {
    service.getDisciplines().subscribe(disc => {
      console.log(disc);
    })

    const NUMBER_OF_DISCIPLINES = this.disciplines.length;    
  
    this.nodes.push(new Node(-1, window.innerWidth/2, window.innerHeight/2 - 55, "Cadeiras de CC"));

    for (let i = 0; i < NUMBER_OF_DISCIPLINES; i++) {

      let numberOfChildrens = this.nodes[0].childrens.length;
      let position = this.getAvailablePosition(numberOfChildrens, this.nodes[0]);

      let newNode = new Node(i, position.x, position.y, this.disciplines[i]);
  
      this.nodes.push(newNode);
      this.links.push(new Link(this.nodes[0], newNode));
  
      this.nodes[0].childrens.push(newNode);
     }
  }

  getAvailablePosition(index: number, parentNode: Node){
    let position = {x: parentNode.x, y: parentNode.y};

    if(index % 2 == 0){
      return this.getDiagonalsPositions(index, position);
    }else{
      return this.getVerticalHorizontalPositions(index, position);
    }
  }

  getVerticalHorizontalPositions(index: number, position){
    const VERTICAL_HORIZONTAL_SUM = 400;

    if(index == 1){
      position.x -= VERTICAL_HORIZONTAL_SUM;
    }
    else if(index == 3){
      position.y -= VERTICAL_HORIZONTAL_SUM;
    }
    else if(index == 5){
      position.x += VERTICAL_HORIZONTAL_SUM;
    }
    else{
      position.y += VERTICAL_HORIZONTAL_SUM;
    }

    return position;
  }

  getDiagonalsPositions(index: number, position){
    const DIAGONAL_SUM = 550;

    if(index == 0){
      position.y += DIAGONAL_SUM;
      position.x -= DIAGONAL_SUM;
    }
    else if(index == 2){
      position.x -= DIAGONAL_SUM;
      position.y -= DIAGONAL_SUM;
    }
    else if(index == 4){
      position.x += DIAGONAL_SUM;
      position.y -= DIAGONAL_SUM;
    }else{
      position.x += DIAGONAL_SUM;
      position.y += DIAGONAL_SUM;
    }

    return position;
  }

}
