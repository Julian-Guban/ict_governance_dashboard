import { Center, Flex, Progress, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../utils/navbar";
import { Outlet } from "react-router-dom";
import GlobalContext from "../utils/contextProvider";

function Dashboard() {
  const { tab } = useContext(GlobalContext);
  const [scrollProgress, setScrollProgress] = useState();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
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
          flexDirection={"row" } // Stack on smaller screens
          position={"relative"}
        >
          <Text
          width={"100%"}
            padding="5px"
            fontSize={{ base: "xl", md: "xl" }} // Adjust font size for smaller screens
            color="white"
            fontWeight="bold"
            textAlign={{ base: "center", md: "center", lg: "left" }} // Center text on smaller screens
          >
            ICT GOVERNANCE DASHBOARD
          </Text>
          <Navbar />
        </Flex>
        {tab === 2 ? (
          <Progress
            value={scrollProgress}
            size="xs"
            width="100%"
            height={"5px"}
            position="sticky"
            top={0}
            left={0}
            right={0}
            padding={"0px 10px"}
            backgroundColor="#2C2C2C"
            colorScheme="blue"
          />
        ) : null}
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
  );
}

export default Dashboard;
