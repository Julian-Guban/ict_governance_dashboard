import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
  Text,
} from "@chakra-ui/react";

const items = [
  {
    value: "a",
    title: "Operation Firestorm",
    text: "In December 2024, the NBI Cybercrime Division, in coordination with the Australian Federal Police and the Philippine Presidential Anti-Organized Crime Commission (PAOCC), raided a scam center in Pasay City. The operation led to the arrest of 250 individuals involved in online romance scams targeting Australian nationals.",
  },
  {
    value: "b",
    title: "Crackdown on Hacking Groups",
    text: "In June 2024, the NBI Cybercrime Division arrested members of the notorious hacking group LulzSec, responsible for breaching government websites, financial institutions, and social media platforms. Suspects involved in hacking the Philippine Navy's database were also apprehended.",
  },
  {
    value: "c",
    title: "Anti-Human Trafficking Operations",
    text: "In July 2024, the NBI Cybercrime Division dismantled a human trafficking syndicate linked to Chinese and Russian crime groups. The operation rescued 11 victims, including minors and foreign nationals.",
  },
  {
    value: "d",
    title: "Love Bug Virus Investigation",
    text: "In 2000, the NBI investigated the global cyberattack caused by the 'Love Bug' computer virus, which inflicted an estimated $7 billion in damages worldwide. The main suspect, Onel de Guzman, was identified and charged with creating and spreading the virus.",
  },
  {
    value: "e",
    title: "Online Scamming Syndicate Bust",
    text: "In October 2024, the NBI Cybercrime Division uncovered a large-scale online scamming syndicate operated by foreign nationals in Makati City. The operation resulted in the arrest of 17 individuals engaged in cyber fraud.",
  },
];

function NbiProject() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(3);
  }, [setSubtab]);
  return (
    <Center flexDirection={"column"} padding={"25px 20px"} width={"90%"}>
      <Text fontSize={"3xl"} color={"#2C3957"} textTransform={"uppercase"}>
        <b>NBI Projects:</b>
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple width={"100%"}>
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      flex="1"
                      textAlign="left"
                    >
                      {item.title}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  textIndent={"20px"}
                  gap={"20px"}
                  key={item.value}
                >
                  <Text>{item.text}</Text>
                </AccordionPanel>
              </AccordionItem>
            </li>
          ))}
        </ol>
      </Accordion>
    </Center>
  );
}

export default NbiProject;
