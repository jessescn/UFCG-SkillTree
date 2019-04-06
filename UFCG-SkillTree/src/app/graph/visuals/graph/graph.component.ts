import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node, Link } from '../../d3';

@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:'./graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input('nodes') nodes: Node[] = [];
  @Input('links') links: Link[] = [];
  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 800, height: 600 };


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight - 55
    };
  }

}
