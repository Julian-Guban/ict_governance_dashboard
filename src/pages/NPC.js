import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/npc.png";
import Workflow from "./WorkFlow/Workflow";
const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Privacy Commissioner and Chairman",
      position: "Atty. John Henry D. Naga",
      description:
        "Leads the NPC and oversees its operations to ensure compliance with data privacy laws.",
    },
    position: { x: 0, y: -100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "2",
    data: {
      label: "Deputy Privacy Commissioner",
      position: "Atty. Leandro Angelo Y. Aguirre",
      description:
        "Supports the Privacy Commissioner and assists in policy development and enforcement.",
    },
    position: { x: -200, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "3",
    data: {
      label: "Deputy Privacy Commissioner",
      position: "Atty. Nerissa N. De Jesus-Lazaro",
      description:
        "Supports the Privacy Commissioner and assists in policy development and enforcement.",
    },
    position: { x: 200, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "4",
    data: {
      label: "Executive Director",
      position: "Atty. Ivin Ronald D.M. Alzona",
      description: "Oversees the operational aspects of the NPC.",
    },
    position: { x: 0, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "5",
    data: {
      label: "Privacy Policy Office",
      position: "Atty. Franklin Anthony M. Tabaquin IV (Director IV)",
      description: "Develops policies related to data privacy.",
    },
    position: { x: -300, y: 200 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "6",
    data: {
      label: "Data Security and Compliance Office",
      position: "Atty. Aubin Arn R. Nieva (Director IV)",
      description: "Ensures adherence to data protection standards.",
    },
    position: { x: -100, y: 200 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "7",
    data: {
      label: "Legal and Enforcement Office",
      position: "Atty. Maria Theresita E. Patula (Director IV)",
      description:
        "Handles legal matters and enforcement actions concerning data privacy violations.",
    },
    position: { x: 100, y: 200 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "8",
    data: {
      label: "Finance and Administrative Office",
      position: "Ms. Maria Delia S. Presquito (Director IV)",
      description:
        "Manages financial operations and administrative functions. ",
    },
    position: { x: 300, y: 200 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "9",
    data: {
      label: "Public Information and Assistance Division",
      position: "Dr. Roren Marie M. Chin (Chief)",
      description:
        "Disseminates information and assists the public on data privacy concerns.",
    },
    position: { x: -300, y: 300 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "10",
    data: {
      label: "Financial Planning and Management Division",
      position: "Mr. Mark G. Enriquez (Officer-in-Charge)",
      description: "Oversees financial planning and management activities.",
    },
    position: { x: -100, y: 300 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "11",
    data: {
      label: "Human Resource Development Division",
      position: "Ms. Rosaly B. Santos (Chief)",
      description: "Responsible for human resource development and management.",
    },
    position: { x: 100, y: 300 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "12",
    data: {
      label: "Administrative Services Division",
      position: "Mr. Marlon Ruben N. Fabricante (Chief)",
      description: "Manages administrative services within the NPC.",
    },
    position: { x: 300, y: 300 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "13",
    data: {
      label: "Policy Review Division",
      position: "Atty. Vida Zora G. Bocar (Chief)",
      description: "Reviews policies related to data privacy.",
    },
    position: { x: -300, y: 400 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "14",
    data: {
      label: "Policy Development Division",
      position: "Atty. Ivy Grace T. Villasoto (Chief)",
      description: "Develops new policies to enhance data protection.",
    },
    position: { x: -100, y: 400 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "15",
    data: {
      label: "Legal Division",
      position: "Atty. Rasiele Rebekah D.L. Rellosa-Saguiguit (Chief)",
      description: "Handles legal affairs concerning data privacy issues.",
    },
    position: { x: 100, y: 400 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "16",
    data: {
      label: "Complaints and Investigation Division",
      position: "Atty. Marc Russel Ann P. Lubangco (Chief)",
      description:
        "Manages complaints and investigations into data privacy breaches.",
    },
    position: { x: 300, y: 400 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "17",
    data: {
      label: "Enforcement Division",
      position: "Atty. Rodolfo S. Cabatu, Jr. (Chief)",
      description:
        "Enforces compliance with data privacy laws and regulations.",
    },
    position: { x: -300, y: 500 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "18",
    data: {
      label: "Compliance and Monitoring Division",
      position: "Atty. Cleto E. Monsanto Jr. (Chief)",
      description:
        "Monitors and ensures compliance with data protection standards.",
    },
    position: { x: -100, y: 500 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "19",
    data: {
      label: "Data Security and Technology Standards Division",
      position: "Engr. McCloven C. Querubin (Chief)",
      description:
        "Develops and oversees data security and technology standards.",
    },
    position: { x: 100, y: 500 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "20",
    data: {
      label: "Internal Audit Division",
      position: "Mr. Timothy Ralph R. Gamurot (Chief)",
      description:
        "Conducts internal audits to ensure operational efficiency and compliance.",
    },
    position: { x: 300, y: 500 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
];

const lines = [
  { id: "1-2", type: "step", source: "1", target: "2", animated: true },
  { id: "1-3", type: "step", source: "1", target: "3", animated: true },
  { id: "1-4", type: "step", source: "1", target: "4", animated: true },
  { id: "4-5", type: "step", source: "4", target: "5", animated: true },
  { id: "4-6", type: "step", source: "4", target: "6", animated: true },
  { id: "4-7", type: "step", source: "4", target: "7", animated: true },
  { id: "4-8", type: "step", source: "4", target: "8", animated: true },
  { id: "5-9", type: "step", source: "5", target: "9", animated: true },
  { id: "6-10", type: "step", source: "6", target: "10", animated: true },
  { id: "7-11", type: "step", source: "7", target: "11", animated: true },
  { id: "8-12", type: "step", source: "8", target: "12", animated: true },
  { id: "9-13", type: "step", source: "9", target: "13", animated: true },
  { id: "10-14", type: "step", source: "10", target: "14", animated: true },
  { id: "11-15", type: "step", source: "11", target: "15", animated: true },
  { id: "12-16", type: "step", source: "12", target: "16", animated: true },
  { id: "13-17", type: "step", source: "13", target: "17", animated: true },
  { id: "14-18", type: "step", source: "14", target: "18", animated: true },
  { id: "15-19", type: "step", source: "15", target: "19", animated: true },
  { id: "16-20", type: "step", source: "16", target: "20", animated: true },
];

function NPC() {
  return (
    <Center width={"inherit"} flexDirection={"column"}>
      <Flex
        width={"100%"}
        alignItems={"center"}
        gap={"10px"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={{ base: "center", md: "center", lg: "left" }}
        padding={{ base: "10px 0px", md: "20px 100px" }}
      >
        <img src={Logo} alt="DICT" width={120} height={120} />
        <Text
          width={{ md: "100%", lg: "40%" }}
          color={"#2C3957"}
          fontSize={"2xl"}
          fontStyle={"italic bold"}
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"serif"}
          textTransform={"uppercase"}
        >
          National Privacy Commission
        </Text>
      </Flex>
      <Flex
        width={"100%"}
        flexDirection={"column"}
        padding={{ base: "20px", md: "20px 50px", lg: "20px 115px" }}
        backgroundColor={"#eff5fa"}
      >
        <Text fontSize={"2xl"} color={"#2C3957"}>
          <b>INFORMATION :</b>
        </Text>
        <br />
        <Text fontStyle={"italic"}>
          <b>Date Founded: </b>March 7, 2016
        </Text>
        <br />
        <Text>
          <b>Under which law was created by: (RA 10173)</b> <br /> - Republic
          Act 10173 - Data Privacy Act of 2012
        </Text>
        <br />
        <Text>
          <b>About :</b>
          <br /> The National Privacy Commission is the country’s privacy
          watchdog; an independent body mandated to administer and implement the
          Data Privacy Act of 2012 and to monitor and ensure compliance of the
          country with international standards set for data protection.
        </Text>
        <br />
        <Text>
          <b>Quality Policy :</b>
          <br /> As the Philippines’ data privacy authority, the National
          Privacy Commission is committed to protect the personal information of
          data subjects and to foster a culture of privacy towards a
          competitive, knowledge-based, and innovative nation.
          <br />
          <br />
          To this end, we shall:
          <br />
          Nurture and empower our employees to provide competent and effective
          service as a technology and results-driven regulatory authority;
          Perform our mandate with passion and utmost integrity through
          continually improving policies and systems at par with international
          standards; and Commit to regulatory and statutory requirements of
          public service for the benefit of the Filipino people.
          <br />
          <i>" Datos ng Pilipino, Protektado Ko! "</i>
        </Text>
      </Flex>
      <Flex
        width={"80%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems={"center"}
        gap={"10px"}
        justifyContent={"left"}
        padding={{ base: "10px 15px", md: "20px 100px" }}
      >
        <img src={Logo} alt="NPC" width={200} height={200} />
        <Text
          width={"100%"}
          color={"#2C3957"}
          fontSize={"md"}
          textIndent={"20px"}
        >
          <b>Logo Meaning: </b>A pearl buried inside a tightly-shut shell is
          practically worthless.
          <br />
          Government information is a pearl, meant to be shared with the public
          in order to maximize its inherent value.
          <br />
          The Transparency Seal, depicted by a pearl shining out of an open
          shell, is a symbol of a policy shift towards openness in access to
          government information.
          <br />
          On the one hand, it hopes to inspire Filipinos in the civil service to
          be more open to citizen engagement; on the other, to invite the
          Filipino citizenry to exercise their right to participate in
          governance.
          <br />
          This initiative is envisioned as a step in the right direction towards
          solidifying the position of the Philippines as the Pearl of the Orient
          – a shining example for democratic virtue in the region.
        </Text>
      </Flex>
      <Flex
        width={"100%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Flex
          width={{ base: "100%", md: "100%", lg: "50%" }}
          flexDirection={"column"}
          padding={{ base: "20px 30px", md: "20px 50px", lg: "20px 120px" }}
          backgroundColor={"#2C3957"}
          color={"white"}
          textAlign={"center"}
        >
          <Text fontSize={"2xl"}>
            <b>Mission: </b>
          </Text>
          <br />
          <b>We shall continuously deliver services to:</b>
          <ol style={{ textAlign: "left" }}>
            <li>
              Be the authority on data privacy and protection, providing
              knowledge, know-how, and relevant technology.
            </li>
            <li>
              Establish a regulatory environment that ensures accountability in
              the processing of personal data and promotes global standards for
              data privacy and protection.
            </li>
            <li>
              Build a culture of privacy, through people empowerment, that
              enables and upholds the right to privacy and supports free flow of
              information.
            </li>
          </ol>
        </Flex>
        <Flex
          width={{ base: "100%", md: "100%", lg: "50%" }}
          flexDirection={"column"}
          padding={{ base: "20px 30px", md: "20px 50px", lg: "20px 120px" }}
          textAlign={"center"}
        >
          <Text fontSize={"2xl"} color={"#2C3957"}>
            <b>Vision: </b>
          </Text>
          <br />
          <Text textIndent={"20px"}>
            - A world-class regulatory and enforcement agency upholding the
            right to privacy and data protection while ensuring the free flow of
            information, committed to excellence, driven by a workforce that is
            highly competent, future-oriented, and ethical, towards a
            competitive, knowledge-based, and innovative nation.
          </Text>
        </Flex>
      </Flex>
      <br />
      <Flex
        width={{ base: "100%", md: "100%", lg: "50%" }}
        flexDirection={"column"}
        padding={{ base: "20px", md: "20px 50px", lg: "20px 100px" }}
        borderBlock={"2px solid gray"}
      >
        <Text
          fontSize={"3xl"}
          color={"#2C3957"}
          textTransform={"uppercase"}
          whiteSpace={{ base: "nowrap", md: "nowrap", lg: "wrap" }}
          overflow={{ base: "hidden", md: "hidden", lg: "visible" }}
          textOverflow={{ base: "ellipsis", md: "ellipsis", lg: "clip" }}
        >
          <b>List of Responsibilities:</b>
        </Text>
        <ul style={{ padding: "5px" }}>
          <li>Issue compliance or enforcement orders.</li>
          <li>
            Award indemnity on matters affecting personal data or rights of data
            subjects.
          </li>
          <li>
            Issue cease and desist orders or impose bans on data processing
            detrimental to national security or public interest.
          </li>
          <li>
            Monitor and ensure compliance with international data protection
            standards.
          </li>
          <li>
            Conduct compliance checks, privacy sweeps, and on-site visits to
            assess adherence to data privacy regulations.
          </li>
        </ul>
      </Flex>
      <br />
      <Text
      width={"inherit"}
      fontSize={"3xl"}
        color={"#2C3957"}
        textTransform={"uppercase"}
        padding={"10px"}
        whiteSpace={{ base: "nowrap", md: "nowrap", lg: "wrap" }}
        overflow={{ base: "hidden", md: "hidden", lg: "visible" }}
        textOverflow={{ base: "ellipsis", md: "ellipsis", lg: "clip" }}
      >
        <b>Current Officials:</b>
      </Text>
      <Center width={"100%"}>
        <Workflow nodes={nodes} lines={lines} />
      </Center>
    </Center>
  );
}

export default NPC;
