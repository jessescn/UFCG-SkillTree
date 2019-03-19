import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as bin from 'd3-hexbin';

@Component({
  selector: 'app-beehive-graph',
  templateUrl: './beehive-graph.component.html',
  styleUrls: ['./beehive-graph.component.css']
})
export class beeHiveGraphComponent implements OnInit {

  constructor() { }

  canvas;
  width = 1350;
  height = 500;
  data = [];
  numberOfCapsules = 750;
  radius = 22;

  ngOnInit() {
    this.canvas = d3.select('#svgContainer')
                    .style('border','3px solid #806600')
                    .style('background-color',' #e6b800')
                    .append('g')
                    .attr('class','beehive')

    for(let i = 1; i < this.numberOfCapsules; i++){
      let newData = [Math.random() * 1350, Math.random() * 550];
      this.data.push(newData);
    }
    this.beeHive();
  }

  beeHive(){
    let hexbin = bin.hexbin().radius(this.radius);

    let beehive = this.canvas.selectAll('.hexagon')
               .data(hexbin(this.data))
               .enter()
               .append('g')
                  .attr('class','capsule')  
               .append('path')
               .attr('transform', function(d){return 'translate(' + d.x + ',' + d.y + ')'})
               .attr('d', function(){return hexbin.hexagon()})
              .style('fill',' #ffcc00')
              .style('stroke','black')
              .style('stroke-width',1)

    
    beehive.on('mouseover', handleMouseOver)
           .on('mouseout', handleMouseOut)

    function handleMouseOver(){
      d3.select(this).style('fill','#997a00').style('stroke-width',2)
    }

    function handleMouseOut(){
      let that = this;
      setTimeout(function() {
        d3.select(that).transition().duration(500).style('fill','#ffcc00').style('stroke-width',1)
      },500) 
    }
              
  };

}
