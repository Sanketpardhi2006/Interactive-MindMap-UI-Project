import { Handle, Position } from "reactflow";
import { useMindMap } from "../context/MindMapContext";

export default function MindMapNode({ data }) {
  const { setSelected, toggleNode } = useMindMap();

  return (
    <div
      className="mind-node"
      onClick={() => setSelected(data)}
      onDoubleClick={() => toggleNode(data.id)}
      title="Click: Select | Double Click: Expand/Collapse"
    >
      {data.title}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
