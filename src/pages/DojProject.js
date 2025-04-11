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
import pic1 from "../images/DOJ OCC/DOJPROGRAM1.png";
import pic2 from "../images/DOJ OCC/DOJPROGRAM2.png";
import pic3 from "../images/DOJ OCC/DOJPROGRAM3.png";
import pic4 from "../images/DOJ OCC/DOJPROGRAM4.png";
import pic5 from "../images/DOJ OCC/DOJPROGRAM5.png";
import pic6 from "../images/DOJ OCC/DOJPROGRAM6.png";
import pic7 from "../images/DOJ OCC/DOJPROGRAM7.jpg";

const items = [
  {
    value: "a",
    pic: pic1,
    title: "Advisory Opinions and Reports",
    text: "The Office of Cybercrime (OOC) of the DOJ provides advisory opinions and publishes reports that offer legal guidance related to cybercrime. These resources inform both the public and stakeholders, supporting better cybercrime understanding and response.",
  },
  {
    value: "b",
    pic: pic2,
    title: "Cybercrime First Responders Training (Region 10)",
    text: "Held on 14–17 January 2025 in Cagayan De Oro City, this training program was organized by the DOJ-OOC and UNODC. Participants included NBI, NMC, PDEA, and PNP officers, aiming to enhance regional cybercrime response skills.",
  },
  {
    value: "c",
    pic: pic3,
    title: "Digital Evidence Training for PNPA Cadets",
    text: "From 07–10 January 2025, DOJ-OOC and UNODC conducted a Digital Evidence Training course to equip cadets of the Philippine National Police Academy (PNPA) with the knowledge and tools to handle digital evidence in cybercrime cases.",
  },
  {
    value: "d",
    pic: pic4,
    title: "Cybercrime & Electronic Evidence Case Conference",
    text: "The DOJ-OOC hosted its first Case Conference on Cybercrime and Electronic Evidence in February 2020. Recognized by CyberDigest (C-PROC), the event aimed to improve the handling of cybercrime cases by prosecutors and law enforcement.",
  },
  {
    value: "e",
    pic: pic5,
    title: "Online Sexual Exploitation of Children Webinar",
    text: "On 22 July 2020, the DOJ-OOC held a webinar on OSEC, focusing on the threats and trends that emerged during the pandemic. The event emphasized the rise of online child exploitation amid the global health crisis.",
  },
  {
    value: "f",
    pic: pic6,
    title: "PH Cybercrime Trends During COVID-19",
    text: "The DOJ-OOC's webinar, 'Cybercrime in the Time of Corona,' explored the evolving nature of digital offenses during the pandemic. It served as a platform to educate and raise awareness about emerging cyber threats in the Philippines.",
  },
  {
    value: "g",
    pic: pic7,
    title: "Cyber Hygiene & Prosecutor Engagement (Region VIII)",
    text: "From 22–24 October 2024, DOJ-OOC held a cyber hygiene seminar and case conference in Region VIII. The event gathered prosecutors, local government officials (Tanauan, Leyte), and law enforcement to discuss cybersecurity best practices and case coordination.",
  },
];

function DojProject() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(2);
  }, [setSubtab]);
  return (
    <Center flexDirection={"column"} padding={"25px 20px"} width={"90%"}>
      <Text fontSize={"3xl"} color={"#2C3957"} textTransform={"uppercase"}>
        <b>DICT Projects:</b>
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
                  <img src={item.pic} alt={item.title} width={550} height={500} />
                </AccordionPanel>
              </AccordionItem>
            </li>
          ))}
        </ol>
      </Accordion>
    </Center>
  );
}

export default DojProject;
