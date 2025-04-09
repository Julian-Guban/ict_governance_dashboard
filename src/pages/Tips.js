import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Flex, Text } from "@chakra-ui/react";
import icon from "../images/idea_1244883.png";

function Tips() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(4);
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
      <Flex gap={"20px"}>
        <img src={icon} alt="Icon" width={"50px"} height={"50px"} />
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingBlock={"5px"}
        >
          Important Tips:
        </Text>
      </Flex>
      <br />
      <ul
        style={{
          width: "70%",
          paddingLeft: "10px",
          borderBlock: "1px solid",
          paddingBlock: "10px",
        }}
      >
        <li>
          <Text>
            Never ignore suspicious account activity — report it immediately.
          </Text>
        </li>
        <li>
          <Text>
            Do not share OTPs or passwords with anyone, even if they claim to be
            from your bank or telco.
          </Text>
        </li>
        <li>
          <Text>
            Avoid clicking suspicious links or downloading attachments from
            unknown sources.
          </Text>
        </li>
        <li>
          <Text>
            Always use secure, personal devices and connections when accessing
            sensitive accounts.
          </Text>
        </li>
        <li>
          <Text>
            Keep your devices updated and protected with antivirus software.
          </Text>
        </li>
      </ul>
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        paddingBlock={"15px"}
      >
        Where to Report Cybercrime:
      </Text>
      <ol>
        <li>
          <Text fontWeight={"bold"}>DOJ – Office of Cybercrime (OOC)</Text>
          <Text>Handles cybercrime-related legal matters</Text>
          <Text>
            Email:{" "}
            <a href="mailto:cybercrime@doj.gov.ph">cybercrime@doj.gov.ph</a>
          </Text>
          <Text>
            Website:{" "}
            <a
              href="https://cybercrime.doj.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cybercrime.doj.gov.ph
            </a>
          </Text>
          <Text>Tel: +63 2 8524 8216</Text>
        </li>
        <li>
          <Text fontWeight={"bold"}>NBI – Cybercrime Division</Text>
          <Text>Investigates complex cybercrime cases</Text>
          <Text>
            Email: <a href="mailto:ccd@nbi.gov.ph">ccd@nbi.gov.ph</a>
          </Text>
          <Text>
            Website:{" "}
            <a
              href="https://nbi.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://nbi.gov.ph
            </a>
          </Text>
          <Text>Tel: +63 2 8523 8231</Text>
        </li>
        <li>
          <Text fontWeight={"bold"}>PNP – Anti-Cybercrime Group (ACG)</Text>
          <Text>Handles online scams, hacking, sextortion, identity theft</Text>
          <Text>
            Email:{" "}
            <a href="mailto:messagecenter.acg@pnp.gov.ph">
              messagecenter.acg@pnp.gov.ph
            </a>
          </Text>
          <Text>
            Website:{" "}
            <a
              href="https://acg.pnp.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://acg.pnp.gov.ph
            </a>
          </Text>
          <Text>Hotline: (02) 723-0401 loc. 5313</Text>
        </li>
        <li>
          <Text fontWeight={"bold"}>
            Cybercrime Investigation and Coordinating Center (CICC)
          </Text>
          <Text>Centralized hotline and reporting system for online fraud</Text>
          <Text>Hotline: 1326</Text>
          <Text>
            Website:{" "}
            <a
              href="https://cicc.gov.ph/report"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cicc.gov.ph/report
            </a>
          </Text>
        </li>
      </ol>
    </Flex>
  );
}

export default Tips;
