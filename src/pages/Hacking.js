import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Flex, Text } from "@chakra-ui/react";
import icon from "../images/caution_9121332.png";

function Hacking() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(3);
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
        gap={"20px"}
      >
        <img src={icon} alt="Icon" width={"50px"} height={"50px"} />
        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingBlock={"10px"}
        >
          Reporting Identity Theft and Account Hacking
        </Text>
      </Flex>
      <br />
      <Text
        width={"95%"}
        fontSize={"sm"}
        borderBlock={"1px solid"}
        paddingBlock={"10px"}
        textIndent={"15px"}
      >
        If you believe you've been a victim of identity theft, account hacking,
        or any form of cybercrime, it's important to act quickly and report it
        to the proper authorities. Here’s what you need to know and do:
      </Text>
      <br />
      <ol style={{ width: "inherit" }}>
        <li>
          <Text fontWeight={"bold"}>Collect all evidence</Text>
          <ul style={{ paddingLeft: "10px" }}>
            <li>
              <Text>
                Take screenshots of suspicious messages, emails, transactions,
                or activities.
              </Text>
            </li>
            <li>
              <Text>
                Save any communication, receipts, and logs related to the
                incident.
              </Text>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Change your passwords and secure your accounts{" "}
          </Text>
          <ul style={{ paddingLeft: "10px" }}>
            <li>
              <Text>
                Enable multi-factor authentication (MFA) wherever possible.
              </Text>
            </li>
            <li>
              <Text>
                Log out from all devices and secure your emails, social media,
                and banking apps.
              </Text>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Contact your bank or affected service provider
          </Text>
          <ul style={{ paddingLeft: "10px" }}>
            <li>
              <Text>
                Notify them immediately so they can freeze or secure your
                accounts.
              </Text>
            </li>
          </ul>
        </li>
      </ol>
    </Flex>
  );
}

export default Hacking;
