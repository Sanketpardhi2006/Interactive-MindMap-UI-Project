import { useState } from "react";
import { useMindMap } from "../context/MindMapContext";

export default function EditModal() {
  const { editing, setEditing, updateNode } = useMindMap();
  const [title, setTitle] = useState(editing?.title || "");
  const [summary, setSummary] = useState(editing?.summary || "");

  if (!editing) return null;

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Edit Node</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
        <button
          onClick={() => {
            updateNode(editing.id, { title, summary });
            setEditing(null);
          }}
        >
          Save
        </button>
        <button onClick={() => setEditing(null)}>Cancel</button>
      </div>
    </div>
  );
}
