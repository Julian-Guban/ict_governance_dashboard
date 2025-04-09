import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";


const active = {
  width: "100%",
  justifyContent: "left",
  padding: "15px",
  borderRadius: "5px",
  background: "white",
  color: "black",
  zIndex: 10,
  overflow: "hidden",
  borderLeft: "10px solid #2c3957",
};
const inactive = {
  width: "100%",
  color: "gray",
  background: "transparent",
  justifyContent: "left",
  padding: "15px",
  borderRadius: "5px",
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
  }
  return (
    <Flex flexDirection={"column"} width={"inherit"} height={"100%"} padding={"20px"}>
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
      <Flex height={"100%"} width={"100%"} flexDirection={"row"} padding={"10px"} justifyContent={"space-around"} gap={"10px"}>
        <Flex flexDirection={"column"} gap={"10px"} width={"20%"} padding={"10px"}>
          <Button sx={subtab === 1 ? active: inactive } onClick={()=>click("/alerts/phishing")}>Phishing, Vishing, and Smishing</Button>
          <Button sx={subtab === 2 ? active: inactive } onClick={()=>click("/alerts/sextortion")}>Sextortion</Button>
          <Button sx={subtab === 3 ? active: inactive } onClick={()=>click("/alerts/hacking")}>Identity Theft and Account Hacking</Button>
        </Flex>
        <Center width={"inherit"} height={"100%"} overflowY={"auto"} backgroundColor={"whitesmoke"} borderRadius={"5px"}>
          <Outlet />
        </Center>
      </Flex>
    </Flex>
  );
}

export default Alerts;
