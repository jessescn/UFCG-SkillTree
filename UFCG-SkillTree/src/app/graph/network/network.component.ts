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
  
  disciplines = [{nome:"Cadeiras de CC",categoria:"", codigo:"",
                  dicas:"", periodo:0, pre_requisitos:"",sigla: "Cadeiras",
                  x:window.innerWidth/2, y:window.innerHeight/2 - 55}];

  disciplinas;

  constructor(private disciplinaService: DisciplinasService) {
    disciplinaService.getDisciplines().subscribe(disc => {
      this.disciplinas = disc; 
      this.updateNodes();                                                                           
    })
  }

  ngOnInit(){ 
    this.nodes.push(this.getNewNode(this.disciplines[0], {x:this.disciplines[0].x, y:this.disciplines[0].y}));    

    this.updateNodes();    
  }

  updateNodes(){
    console.log(this.disciplinas);
    
    const NUMBER_OF_DISCIPLINES = this.disciplines.length;        
    
    for (let i = 1; i < NUMBER_OF_DISCIPLINES; i++) {
      
      let numberOfChildrens = this.nodes[0].childrens.length;
      let position = this.getAvailablePosition(numberOfChildrens, this.nodes[0]);

      let newNode = this.getNewNode(this.disciplines[i], position);
  
      this.nodes.push(newNode);
      this.links.push(new Link(this.nodes[0], newNode));
  
      this.nodes[0].childrens.push(newNode);
     }
  }

  getNewNode(node, position){
    return new Node(node.nome, node.categoria, node.codigo, node.dicas, node.periodo, node.pre_requisitos, node.sigla, position.x, position.y);
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
      position.x -= VERTICAL_HORIZONTAL_SUM + 50;
    }
    else if(index == 3){
      position.y -= VERTICAL_HORIZONTAL_SUM - 75;
    }
    else if(index == 5){
      position.x += VERTICAL_HORIZONTAL_SUM + 25;
    }
    else{
      position.y += VERTICAL_HORIZONTAL_SUM;
    }

    return position;
  }

  getDiagonalsPositions(index: number, position){
    const DIAGONAL_SUM = 400;

    if(index == 0){
      position.y += DIAGONAL_SUM + 50;
      position.x -= DIAGONAL_SUM - 75;
    }
    else if(index == 2){
      position.x -= DIAGONAL_SUM - 50;
      position.y -= DIAGONAL_SUM;
    }
    else if(index == 4){
      position.x += DIAGONAL_SUM + 75;
      position.y -= DIAGONAL_SUM - 25;
    }else{
      position.x += DIAGONAL_SUM + 10;
      position.y += DIAGONAL_SUM + 25;
    }

    return position;
  }

}
