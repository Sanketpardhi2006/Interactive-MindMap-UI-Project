export function buildGraph(node, x, y, radius, collapsed, nodes, edges, parent) {
  nodes.push({
    id: node.id,
    type: "mind",
    data: node,
    position: { x, y }
  });

  if (parent) {
    edges.push({
      id: parent + "-" + node.id,
      source: parent,
      target: node.id,
      type: "smoothstep"
    });
  }

  if (collapsed[node.id]) return;

  const children = node.children || [];
  const step = (2 * Math.PI) / Math.max(children.length, 1);

  children.forEach((child, i) => {
    const angle = i * step - Math.PI / 2;
    const cx = x + radius * Math.cos(angle);
    const cy = y + radius * Math.sin(angle);
    buildGraph(child, cx, cy, radius * 0.65, collapsed, nodes, edges, node.id);
  });
}





