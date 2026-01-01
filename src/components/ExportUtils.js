import { toPng } from "html-to-image";

export function exportPNG() {
  const node = document.querySelector(".react-flow");

  if (!node) {
    alert("Mindmap not ready");
    return;
  }

  toPng(node, { backgroundColor: "#0b1220" })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "mindmap.png";
      link.href = dataUrl;
      link.click();
    })
    .catch(() => {
      alert("PNG export failed");
    });
}

export function exportJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mindmap.json";
  a.click();
  URL.revokeObjectURL(url);
}
