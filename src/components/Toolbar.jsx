import { useMindMap } from "../context/MindMapContext";
import { exportJSON, exportPNG } from "./ExportUtils";

export default function Toolbar() {
  const { data, expandAll, collapseAll } = useMindMap();

  return (
    <div className="toolbar">
    <button onClick={expandAll}>Expand All</button>
<button onClick={collapseAll}>Collapse All</button>
<button onClick={() => exportJSON(data)}>Export JSON</button>
<button onClick={exportPNG}>Export PNG</button>

    </div>
  );
}
