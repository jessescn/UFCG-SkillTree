import { Link } from './link';
import { Node } from './node';

export class ForceDirectedGraph {

  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor(nodes, links, options: { width, height }) {
    this.nodes = nodes;
    this.links = links;
  }

}
