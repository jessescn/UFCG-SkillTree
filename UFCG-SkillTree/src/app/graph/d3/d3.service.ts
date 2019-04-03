import { Injectable } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models';
import * as d3 from 'd3';

@Injectable()
export class D3Service {

  constructor() {}

  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }
  
  applyDraggableBehaviour(element, node: Node) {
    const d3element = d3.select(element);

    function started() {     
      d3.event.sourceEvent.stopPropagation();

      function dragged() {
        node.x += d3.event.dx;
        node.y += d3.event.dy;

        d3.select(this).attr('cx', node.x).attr('cy', node.y);
      }

      d3.event.on('drag', dragged);
    }

    d3element.call(d3.drag().on('start', started));
  }

  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    return new ForceDirectedGraph(nodes, links, options);
  }
}
