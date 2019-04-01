import { Component, Input } from '@angular/core';
import { Link, Node } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
  @Input('nodevisual') node: Node;

}
