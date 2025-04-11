import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text, // Import Text component from Chakra UI
} from "@chakra-ui/react";
import "@xyflow/react/dist/style.css";
import { MiniMap, ReactFlow } from "@xyflow/react";
import React, { useContext, useEffect, useState, useCallback } from "react";
import GlobalContext from "../../utils/contextProvider";

// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div>
      <Text fontWeight="bold">{data.label}</Text>
      <Text fontSize="sm" color="gray.500">
        {data.position}
      </Text>
    </div>
  );
};

function Workflow({ nodes, lines }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { setTab } = useContext(GlobalContext);

  const nodeTypes = useCallback(() => ({ custom: CustomNode }), []);

  useEffect(() => {
    setTab(2);
  }, [setTab]);

  const handleNodeClick = useCallback((event, element) => {
    // Access the clicked node's data
    if (element && element.data) {
      setModalContent(element.data);
      setIsModalOpen(true); // Open modal with content
    }
  }, []);

  return (
    <Box width="90%" height="65vh">
      <ReactFlow
        nodes={nodes}
        edges={lines}
        onNodeClick={handleNodeClick} // Capture node click
        fitView
        nodeTypes={nodeTypes}
        style={{ backgroundColor: "transparent" }}
        zoomOnScroll={false}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
        draggable={false} // Disable node dragging
        panOnDrag={true} // Disable pan on drag
        panOnScroll={false} // Disable pan on scroll
      >
        <MiniMap />
      </ReactFlow>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={"3xl"}
              color={"#2C3957"}
              textTransform={"uppercase"}
            >
              <b> Information :</b>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold">Position:</Text>
            {typeof modalContent === "object" && modalContent !== null ? (
              <Text>{modalContent?.label}</Text>
            ) : (
              <Text>Position data not available</Text>
            )}
            {typeof modalContent === "object" &&
            modalContent?.position !== "" ? (
              <>
                <Text fontWeight="bold">Officer:</Text>
                <Text>{modalContent?.position}</Text>
              </>
            ) : null}
            {typeof modalContent === "object" &&
            modalContent?.description !== "" ? (
              <>
                <Text fontWeight="bold">Description:</Text>
                <Text>{modalContent?.description}</Text>
              </>
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Workflow;
