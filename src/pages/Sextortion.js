import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Flex, Text } from "@chakra-ui/react";
import icon from "../images/caution_9121332.png";

function Sextortion() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(2);
  }, [setSubtab]);
  return (
    <Flex
      flexDirection={"column"}
      width={"95%"}
      maxHeight={"inherit"}
      justifyContent={"center"}
      alignItems={"center"}
      overflowY={"auto"}
      padding={"15px 10px"}
    >
      <Flex 
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems={"center"}
        gap={"20px"}>
        <img src={icon} alt="Icon" width={"50px"} height={"50px"} />
        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingBlock={"10px"}
        >
          Public Advisory on Sextortion
        </Text>
      </Flex>
      <br />
      <Text
        width={{base: "inherit", md: "inherit", lg:"95%"}}
        fontSize={"sm"}
        borderBlock={"1px solid"}
        paddingBlock={"10px"}
        textIndent={"15px"}
      >
        This Advisory is issued to increase awareness on the growing problem of
        <b> "Sextortion"</b> and to the public on how to avoid being victimized
        and what to do when the crime happens.
      </Text>
      <br />
      <Text fontWeight={"bold"} textAlign="center">
        In the view of foregoing, the following points are stated:
      </Text>
      <ol style={{ width: "inherit" }}>
        <li>
          <Text>
            The public should be cautious in sharing private information online
            and should watch out for suspicious social media accounts
          </Text>
        </li>
        <br />
        <li>
          <Text>
            School authorities and parents should guard minors from the dangers
            of the internet and educate them of internet etiquettes.
          </Text>
        </li>
        <br />
        <li>
          <Text>
            Any person with knowledge of sextortion violations should
            immediately report and ask for the assistance of law enforcement
            authorities.
          </Text>
        </li>
        <br />
        <li>
          <Text>
            Internet Service Providers and telecommunications companies should
            commit to preserve computer data and cooperate with law enforcement
            authorities in the prosecution of sextortion offenders.
          </Text>
        </li>
      </ol>
    </Flex>
  );
}

export default Sextortion;
