import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';
import * as bin from 'd3-hexbin';
import * as d3 from 'd3';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
  radius = 60;
  path;

  ngOnInit(){
    let hexbin = bin.hexbin().radius(this.radius);
    this.path = hexbin.hexagon();
  }

}
