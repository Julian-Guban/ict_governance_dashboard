import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Flex, Text } from "@chakra-ui/react";

function Phishing() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(1);
  }, [setSubtab]);
  return (
    <Flex
      flexDirection={"column"}
      width={"100%"}
      height={"inherit"}
      justifyContent={"center"}
      alignItems={"center"}
      overflowY={"auto"}
      padding={"15px 10px"}
    >
      <Text fontSize={"md"} fontWeight={"bold"} textAlign={"center"}>
        Public Advisory on Phishing, Vishing, and Smishing in relation to Online
        Banking
      </Text>
      <br/>
      <Text width={"90%"}>
        This Public Advisory is issued by the Department of Justice (DOJ) –
        Office of Cybercrime (OOC) in light of the increasing reports from the
        general public involving phishing electronic mails (emails), vishing
        (voice/phone call), and smishing (SMS/text) in relation to online
        banking.
      </Text>
      <br/>
      <ol>
        <li>
          <Text fontWeight={"bold"}>
            Be aware of the red flags or telltale signs of phishing, vishing, or smishing 
          </Text>
          <Text>
          The email, text message or phone call, usually uses one of the following lines to trick the victims into acting on their instructions.
          </Text>
        </li>
        <li>
          <Text fontWeight={"bold"}>

          </Text>
          <Text>
            
          </Text>
        </li>
      </ol>
    </Flex>
  );
}

export default Phishing;
