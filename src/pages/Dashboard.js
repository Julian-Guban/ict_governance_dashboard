import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../utils/navbar";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "../utils/contextProvider";

function Dashboard() {
  return (
    <ContextProvider>
      <Flex
        width="100%"
        minHeight="100vh"
        alignItems="center"
        flexDirection="column"
        position="relative"
      >
        <header
          style={{
            width: "100%",
            position: "sticky",
            right: "0",
            top: 0,
            zIndex: "100", // Ensure header stays on top
          }}
        >
          <Flex
            width="100%"
            height={{ base: "auto", md: "50px" }} // Adjust height for smaller screens
            background="#2c3957"
            justifyContent="space-between"
            alignItems="center"
            padding={{ base: "10px 30px", md: "0 30px" }} // Adjust padding for smaller screens
            boxShadow="0px 0px 5px #0000001a"
            flexDirection={{ base: "column", md: "row" }} // Stack on smaller screens
          >
            <Text
              padding="5px"
              fontSize={{ base: "xl", md: "xl" }} // Adjust font size for smaller screens
              color="white"
              fontWeight="bold"
              textAlign={{ base: "center", md: "left" }} // Center text on smaller screens
            >
              ICT GOVERNANCE DASHBOARD
            </Text>
            <Navbar />
          </Flex>
        </header>

        <Center
          width="100%"
          flex="1" // Take remaining vertical space
          alignItems={"flex-start"}
          backgroundColor="#ccd5e8"
          padding="20px" // Add padding around the content
          border={"5px solid"}
        >

          <Outlet />
        </Center>
      </Flex>
    </ContextProvider>
  );
}

export default Dashboard;
