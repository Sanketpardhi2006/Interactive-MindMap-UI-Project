import data from "./data/mindmap.json";
import { MindMapProvider } from "./context/MindMapContext";
import MindMapCanvas from "./components/MindMapCanvas";
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import EditModal from "./components/EditModal";

export default function App() {
  return (
    <MindMapProvider initialData={data}>
      <Toolbar />
      <MindMapCanvas />
      <Sidebar />
      <EditModal />
    </MindMapProvider>
  );
}
