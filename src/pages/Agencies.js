import { Box, Center } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import GlobalContext from "../utils/contextProvider";

function Agencies() {
  const { setTab } = useContext(GlobalContext);

  useEffect(() => {
    setTab(2);
  }, [setTab]);

  return (
    <Box width={"inherit"} backgroundColor={"White"} marginTop={"20px"}>
      <Center width={"100%"} flexDirection={"column"} paddingBlock={"20px"}>
        <Outlet />
      </Center>
    </Box>
  );
}

export default Agencies;
