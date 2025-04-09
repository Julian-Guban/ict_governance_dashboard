import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import "@xyflow/react/dist/style.css";
import { MiniMap, Panel, ReactFlow } from "@xyflow/react";
import React, { useContext, useEffect, useState } from "react";
import {nodes, lines} from "../../utils/initialElements";
import GlobalContext from "../../utils/contextProvider";

function Workflow() {
  const [colorMode, setColorMode] = useState("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [nodeState, setNodeState] = useState(null); // For storing clicked node data
  const { setTab } = useContext(GlobalContext);

  useEffect(() => {
    setTab(2);
  }, [setTab]); 
  // Open modal with node data
  const handleNodeClick = (event, element) => {
    // Access the clicked node's data
    if (element && element.data) {
      setNodeState(element.data); // Set state with node data
      setModalContent(`Node ID: ${element.id}, Label: ${element.data.label}`);
      setIsModalOpen(true); // Open modal with content
    }
  };
  const onChange = (evt) => {
    setColorMode(evt.target.value);
  };
  
  return (
    <Box width="90%" height="90vh" >
      <ReactFlow
        nodes={nodes}
        edges={lines}
        onNodeClick={handleNodeClick} // Capture node click
        fitView
        attributionPosition="top-right"
        style={{ backgroundColor: "transparent" }}
        colorMode={colorMode}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        draggable={false} // Disable node dragging
        panOnDrag={false} // Disable pan on drag
        panOnScroll={false} // Disable pan on scroll
      >
        <MiniMap />
        <Panel position="top-right">
          <select onChange={onChange} data-testid="colormode-select">
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
          </select>
        </Panel>
      </ReactFlow>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Node Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{modalContent}</p>
            <pre>{JSON.stringify(nodeState, null, 2)}</pre>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Workflow;
