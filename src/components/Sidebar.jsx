import { useMindMap } from "../context/MindMapContext";

export default function Sidebar() {
  const { selected, setEditing } = useMindMap();

  return (
    <div className="sidebar">
      {selected ? (
        <>
          <h2>{selected.title}</h2>
          <p>{selected.summary}</p>
          <button onClick={() => setEditing(selected)}>Edit</button>
        </>
      ) : (
        <p>Select a node</p>
      )}
    </div>
  );
}
