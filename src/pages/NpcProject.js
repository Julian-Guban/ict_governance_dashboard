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
import pic1 from "../images/NPC/dppc.png";
import pic2 from "../images/NPC/kd.png";
import pic3 from "../images/NPC/psst.png";
import pic4 from "../images/NPC/paw.png";
import pic5 from "../images/NPC/dppk.jpg";

const items = [
  {
    value: "a",
    pic: pic1,
    title: "Data Privacy Competency Program",
    text: "The Data Privacy Competency Program aims to enhance the quality and accessibility of data privacy education in the Philippines. Through this initiative, the NPC ensures that individuals gain a practical understanding of the Data Privacy Act and its application. The program’s structure and partnership strategies are outlined in NPC Circular 2023-02.",
  },
  {
    value: "b",
    pic: pic2,
    title: "Kabataang Digital",
    text: "Kabataang Digital is an advocacy campaign under PSST! Online that promotes a safe online environment for the youth. With the theme 'Matalino, Mapagmatyag, at Mapanuri', it encourages data protection for children and educates young Filipinos on responsible digital citizenship through collaboration with schools and parents.",
  },
  {
    value: "c",
    pic: pic3,
    title: "Privacy, Safety, Security & Trust Online (PSST!)",
    text: "The PSST! campaign by the NPC underscores the importance of data privacy in everyday digital interactions. It aims to raise awareness among Filipinos about their privacy rights and responsibilities, empowering them to make informed choices online and contribute to a culture of digital trust and resiliency.",
  },
  {
    value: "d",
    pic: pic4,
    title: "Privacy Awareness Week 2024 (PAW2024)",
    text: "PAW2024 is a key event organized by the NPC to promote data privacy in the Philippines. With the theme 'Data Privacy For All: Embracing Inclusivity and Diversity', the event highlights universal privacy rights and fosters discussions among professionals, aiming to build a more inclusive data privacy culture.",
  },
  {
    value: "e",
    pic: pic5,
    title: "Privacy Awareness Week 2019 (PAW2019)",
    text: "Celebrated from May 25 to 31, 2019, PAW2019 featured the launch of its official event website and invited both public and private sector organizations to join in privacy awareness activities. The NPC encouraged personal information controllers and processors to take part in strengthening privacy compliance and advocacy.",
  },
];

function NpcProject() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(4);
  }, [setSubtab]);
  return (
    <Center flexDirection={"column"} padding={"25px 20px"} width={"90%"}>
      <Text fontSize={"3xl"} color={"#2C3957"} textTransform={"uppercase"}>
        <b>DOJ Projects:</b>
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
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"20px"}
                  key={item.value}
                >
                  <Text>{item.text}</Text>
                  <img
                    src={item.pic}
                    alt={item.title}
                    width={550}
                    height={500}
                  />
                </AccordionPanel>
              </AccordionItem>
            </li>
          ))}
        </ol>
      </Accordion>
    </Center>
  );
}

export default NpcProject;
