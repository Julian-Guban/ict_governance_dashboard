import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const active = {
  width: "100%",
  justifyContent: "left",
  padding: "15px",
  borderRadius: "0px 5px 5px 0px",
  background: "#EFF5FA",
  color: "black",
  zIndex: 10,
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderLeft: {
    md: "0px",
    lg: "10px solid #2c3957",
  },
  borderBottom: {
    base: "10px solid #2c3957",
    md: "10px solid #2c3957",
    lg: "0px",
  },
};
const inactive = {
  width: "100%",
  color: "gray",
  background: "transparent",
  justifyContent: "left",
  textOverflow: "ellipsis",
  padding: "15px",
  borderRadius: "0px 5px 5px 0px",
  zIndex: 10,
  overflow: "hidden",
  "&:hover": {
    color: "black",
    transition: "0.2s ease-in",
  },
};

function Alerts() {
  const navigate = useNavigate();
  const { setTab, subtab } = useContext(GlobalContext);

  useEffect(() => {
    setTab(3);
  }, [setTab]);

  const click = (path) => {
    navigate(path);
  };
  return (
    <Flex
      flexDirection={"column"}
      width={"inherit"}
      height={"100%"}
      padding={"20px"}
    >
      <Text
        width={"inherit"}
        textAlign={"start"}
        fontWeight={"light"}
        color={"gray"}
        fontSize={"lg"}
        paddingBottom={"10px"}
        borderBottom={"1px solid"}
      >
        Alerts | Public Advisory
      </Text>
      <Flex
        height={"100%"}
        width={"100%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        padding={"10px"}
        justifyContent={"space-around"}
        gap={"10px"}
      >
        <Flex
          flexDirection={{ base: "row", md: "row", lg: "column" }}
          gap={"10px"}
          width={{ base: "100%", md: "100%", lg: "20%" }}
          padding={"10px"}
        >
          <Button
            sx={subtab === 1 ? active : inactive}
            onClick={() => click("/alerts/phishing")}
          >
            Phishing, Vishing, and Smishing
          </Button>
          <Button
            sx={subtab === 2 ? active : inactive}
            onClick={() => click("/alerts/sextortion")}
          >
            Sextortion
          </Button>
          <Button
            sx={subtab === 3 ? active : inactive}
            onClick={() => click("/alerts/hacking")}
          >
            Identity Theft and Hacking
          </Button>
          <Button
            sx={subtab === 4 ? active : inactive}
            onClick={() => click("/alerts/tips")}
          >
            Important Tips
          </Button>
        </Flex>
        <Center
          width={"inherit"}
          height={"100%"}
          maxH={"inherit"}
          backgroundColor={"#EFF5FA"}
          border={"2px solid #266fe4"}
          borderRadius={"5px"}
        >
          <Outlet />
        </Center>
      </Flex>
    </Flex>
  );
}

export default Alerts;
