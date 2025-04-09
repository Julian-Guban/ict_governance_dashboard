import { Box, Center, Text } from "@chakra-ui/react";
import Workflow from "../pages/WorkFlow/Workflow";
import React from "react";
import { Outlet } from "react-router-dom";

function Agencies() {
  return (
    <Box width={"inherit"} backgroundColor={"White"} marginTop={"20px"}>
      <Text>Info:</Text>
      <Center>
        <Outlet/>
      </Center>
      <Center>
        <Workflow />
      </Center>
    </Box>
  );
}

export default Agencies;
