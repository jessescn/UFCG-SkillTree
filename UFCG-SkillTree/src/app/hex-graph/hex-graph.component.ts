import { geoPath } from 'd3-geo';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as bin from 'd3-hexbin';

@Component({
  selector: 'app-hex-graph',
  templateUrl: './hex-graph.component.html',
  styleUrls: ['./hex-graph.component.css']
})
export class HexGraphComponent implements OnInit {

  constructor() { }

  canvas;
  width =  600;
  height = 550;
  data;

  ngOnInit() {
    this.canvas = d3.select('#svgContainer')
    this.data = [[200,100]];

    this.hexbinHex();
  }

  hexbinHex(){
    let hexbin = bin.hexbin().radius(32);
    let data = this.data;

    this.canvas.selectAll('.hexagon')
               .data(hexbin(data))
               .enter().append('path')
               .attr('transform', function(d){ return 'translate(' + d.x + ',' + d.y + ')'})
               .attr('d', () =>{return hexbin.hexagon()})
              .style('fill','red')
              
  };

}
