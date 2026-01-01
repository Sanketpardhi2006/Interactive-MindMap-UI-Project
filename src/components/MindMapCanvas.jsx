import React, { useMemo } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import { buildGraph } from "../engine/buildGraph";
import { useMindMap } from "../context/MindMapContext";
import MindMapNode from "./MindMapNode";
import "reactflow/dist/style.css";

export default function MindMapCanvas() {
  const { data, collapsed, setSelected } = useMindMap();

 
  const graph = useMemo(() => {
    const nodes = [];
    const edges = [];
    buildGraph(data, 250, 250, 320, collapsed, nodes, edges); 
    return { nodes, edges };
  }, [data, collapsed]);

 
  const nodeTypes = useMemo(() => ({ mind: MindMapNode }), []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        nodeTypes={nodeTypes}
        onNodeClick={(_, n) => setSelected(n.data)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
