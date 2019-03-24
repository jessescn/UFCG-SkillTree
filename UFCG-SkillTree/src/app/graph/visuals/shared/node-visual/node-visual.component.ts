import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';
import * as bin from 'd3-hexbin';


@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
  radius = 60;
  path;
  borderPath;

  ngOnInit(){
    let hexbin = bin.hexbin().radius(this.radius);
    let borderHexbin = bin.hexbin().radius(this.radius + 6);
    this.path = hexbin.hexagon();
    this.borderPath = borderHexbin.hexagon();
  }

}
