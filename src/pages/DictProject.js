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
import pic1 from "../images/DICTPROJECTS/NBP.jpeg";
import pic2 from "../images/DICTPROJECTS/NGDC.jpeg";
import pic3 from "../images/DICTPROJECTS/DTC.jpg";
import pic4 from "../images/DICTPROJECTS/FREEWIFI.png";
import pic5 from "../images/DICTPROJECTS/eBPLS.png";
import pic6 from "../images/DICTPROJECTS/PHUB.jpg";
import pic7 from "../images/DICTPROJECTS/MITHI.png";
import pic8 from "../images/DICTPROJECTS/NICTHS.jpeg";
import pic9 from "../images/DICTPROJECTS/NICTEF.jpg";

const items = [
  {
    value: "a",
    pic: pic1,
    title: "The National Broadband Plan (NBP)",
    text: "The National Broadband Plan (NBP) provides the blueprint for a broadband infrastructure in the Philippines. It aims to lay the backbone of connectivity network across the country through the deployment of fiber optic cables and wireless technologies, thereby, improving the Internet speed and affordability. The NBP aims to ensure that all Filipinos have access to broadband capability through government investment in broadband infostructure, policy reforms and stimulation of market demand.",
  },
  {
    value: "b",
    pic: pic2,
    title: "National Government Data Center (NGDC) ",
    text: "The National Government Data Center (NGDC) aims to plan, design, develop, implement, and integrate a secure data infrastructure that would ensure the delivery of speedy and efficient government services to the people. It can reduce government spending by providing resources to government agencies either through its colocation services or its cloud services. ",
  },
  {
    value: "c",
    pic: pic3,
    title: "Digital Transformation Centers",
    text: "Digital Transformation Centers are venues where digital skills, from basic, and intermediate to  advanced, will be developed and acquired, in order to ensure that Filipinos have the digital skills needed to participate in the digital economy.",
  },
  {
    value: "d",
    pic: pic4,
    title: "The Free Wi-Fi for All",
    text: " Free Public Internet Access Program aims to accelerate the Philippine government’s efforts in enhancing internet accessibility for Filipinos so that economic, social, and educational opportunities will be bolstered, and the growing digital divide can be bridged. Drawing its mandate from the provisions of Republic Act No. 10929, the Free Wi-Fi for All Program provides free, fast and secure Internet access in public places across the Philippines, such as hospitals, basic education institutions, state universities and colleges, airports and seaports, terminal, among others.",
  },
  {
    value: "e",
    pic: pic5,
    title:
      "Integrated /Electronic Business Permits and Licensing System (eBPLS)",
    text: "The Integrated /Electronic Business Permits and Licensing System (eBPLS) is a cloud-based software that enables Local Government Units (LGUs) to process application for new and renewal of business permits electronically. It aims to integrate barangay clearances, building permits, and sanitary permit processing systems into the business permitting process of the LGUs to further streamline and facilitate the issuance of the business processing transactions.",
  },
  {
    value: "f",
    pic: pic6,
    title: "Philippine Business Hub",
    text: "Central Business Portal (PBH-CBP) is an online one-stop-shop for all business registration needs created pursuant to R.A. 11032 or the Ease of Doing Business and Efficient Government Service Delivery Act of 2018.",
  },
  {
    value: "g",
    pic: pic7,
    title:
      "Medium-Term Information and Communications Technology Harmonization Initiative (MITHI)",
    text: "The Medium-Term Information and Communications Technology Harmonization Initiative (MITHI) is an e-Government and ICT support initiative that harmonizes and ensures interoperability among ICT resources, programs and projects of National Government Agencies (NGAs), Government Owned and Controlled Corporations (GOCCs), and State Universities and Colleges (SUC). It ensures that NGAs, GOCCs and SUCs proceed with their ICT projects in a way that would guarantee higher possibility of success. In turn, NGAs, GOCCs and SUCs can offer their services to their clients or to the public more effectively.",
  },
  {
    value: "h",
    pic: pic8,
    title: "National ICT Household Survey (NICTHS)",
    text: "The National ICT Household Survey (NICTHS) is envisioned to collect vital indicators regarding ICT demand, access and use. It aims to collect data at the community, household and individual level, and is expected to generate baseline ICT data for national development plans, policies and program.",
  },
  {
    value: "i",
    pic: pic9,
    title: "National ICT Ecosystem Framework (NICTEF)",
    text: "The National ICT Ecosystem Framework (NICTEF) serves as a viewfinder, strategic compass, and implementation and communication plan.  It shall collate national ICT data regarding plans, programs and projects to aid in policymaking.",
  },
];

function DictProject() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(1);
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
              <AccordionItem >
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
                  key={index}
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

export default DictProject;
