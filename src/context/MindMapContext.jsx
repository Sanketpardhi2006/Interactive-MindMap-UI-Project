

import { createContext, useContext, useState } from "react";



const MindMapContext = createContext(null);

export function MindMapProvider({ children, initialData }) {
  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState(null);

  
  const [collapsed, setCollapsed] = useState({});

 
  const toggleNode = (id) => {
    setCollapsed((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };


  const expandAll = () => {
    setCollapsed({});
  };


  const collapseAll = () => {
    const all = {};

    const walk = (node) => {
      all[node.id] = true;
      node.children?.forEach(walk);
    };

    walk(data);
    setCollapsed(all);
  };

  return (
    <MindMapContext.Provider
      value={{
        data,
        setData,
        selected,
        setSelected,
        collapsed,
        toggleNode,
        expandAll,
        collapseAll
      }}
    >
      {children}
    </MindMapContext.Provider>
  );
}

// Custom hook
export function useMindMap() {
  const ctx = useContext(MindMapContext);
  if (!ctx) {
    throw new Error("useMindMap must be used inside MindMapProvider");
  }
  return ctx;
}
