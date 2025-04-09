import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../utils/navbar";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "../utils/contextProvider";

function Dashboard() {
  return (
    <ContextProvider>
      <Flex width={"100%"} height={"100vh"} alignItems={"center"} flexDirection={"column"} position={"relative"}>
        <header
          style={{ width: "inherit", position: "sticky", right: "0", top: 0 }}
        >
          <Flex
            width={"inherit"}
            height={"50px"}
            background={"#2c3957"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0 30px"}
            boxShadow={"0px 0px 5px #0000001a"}
            zIndex={"100"}
          >
            <Text padding={"5px"} fontSize={"xl"} color={"white"} fontWeight={"bold"}>
              ICT GOVERNANCE DASHBOARD
            </Text>{" "}
            <Navbar />
          </Flex>
        </header>

        <Center width={"inherit"} height={"100%"} overflowY={"auto"} backgroundColor={"#ccd5e8"}>
          <Outlet />
        </Center>
      
      </Flex>
    </ContextProvider>
  );
}

export default Dashboard;
