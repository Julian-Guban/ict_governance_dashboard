export const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Philippine Government (Malacanang)" },
    position: { x: 100, y: -10 },
    draggable: false, // Make the node non-draggable
  },
  {
    id: "2",
    data: { label: "DILG" },
    position: { x: 0, y: 100 },
    draggable: false, // Make the node non-draggable
  },
  {
    id: "3",
    data: { label: "PDEA" },
    position: { x: 200, y: 100 },
    draggable: false, // Make the node non-draggable
  },
  {
    id: "4",
    type: "output",
    data: { label: "Citizen" },
    position: { x: 100, y: 200 },
    draggable: false, // Make the node non-draggable
  },
];

export const lines = [
  { id: "1-2", type: "step", source: "1", target: "2", animated: true },
  { id: "1-3", type: "step", source: "1", target: "3", animated: true },
  { id: "2-4", type: "step", source: "2", target: "4", animated: true },
  { id: "3-4", type: "step", source: "3", target: "4", animated: true },
];
