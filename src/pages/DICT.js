import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/dict-logo.png";
import Icon from "../images/dict.png";
import Workflow from "./WorkFlow/Workflow";
import { Position } from "@xyflow/react";
const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "(DICT Secretary)",
      position: "Henry Rhoel R. Aguda",
      description:
        "The head of the Department of Information and Communications Technology, responsible for leading and overseeing all ICT-related initiatives in the Philippines.",
    },
    position: { x: 100, y: -100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "2",
    data: {
      label: "Undersecretary for Infrastructure Management",
      position: "Jeffrey Ian C. Dy",
      description:
        "Responsible for overseeing the development and maintenance of ICT infrastructure projects.",
    },
    position: { x: -500, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Bureau of ICT Infrastructure",
      position: "",
      description:
        "Implements policies, plans, and programs related to ICT infrastructure development.",
    },
    position: { x: -500, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "4",
    data: {
      label: "Undersecretary for e-Government",
      position: "David L. Almirol Jr.",
      description:
        "Leads the development and implementation of e-government initiatives to improve public service delivery.",
    },
    position: { x: -300, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "e-Government Services Bureau",
      position: "",
      description: "Develops and manages e-government services and platforms.",
    },
    position: { x: -300, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "6",
    data: {
      label: "Undersecretary for ICT Industry Development",
      position: "Jocelle E. Batapa-Sigue",
      description:
        "Responsible for promoting the growth and competitiveness of the ICT industry.",
    },
    position: { x: -100, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "7",
    type: "output",
    data: {
      label: "ICT Industry Development Bureau",
      position: "",
      description:
        "Develops and implements programs to support the ICT industry.",
    },
    position: { x: -100, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "8",
    data: {
      label: "Undersecretary for Regional Operations",
      position: "Maria Teresa M. Camba",
      description: "Oversees ICT development and operations in the regions.",
    },
    position: { x: 100, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "9",
    type: "output",
    data: {
      label: "Luzon Cluster Office",
      position: "",
      description:
        "Responsible for ICT operations and development in the Luzon region.",
    },
    position: { x: 100, y: 100 },
    draggable: false,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "10",
    type: "output",
    data: {
      label: "Visayas Cluster Office",
      position: "",
      description:
        "Responsible for ICT operations and development in the Visayas region.",
    },
    position: { x: 100, y: 200 },
    draggable: false,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "11",
    type: "output",
    data: {
      label: "Mindanao Cluster Office",
      position: "",
      description:
        "Responsible for ICT operations and development in the Mindanao region.",
    },
    position: { x: 100, y: 300 },
    draggable: false,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "12",
    data: {
      label: "Undersecretary for Administration and Finance",
      position: "Heherson M. Asiddao",
      description:
        "Manages the administrative and financial operations of DICT.",
    },
    position: { x: 300, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "13",
    type: "output",
    data: {
      label: "Finance and Admin Services",
      position: "",
      description: "Provides financial and administrative support to DICT.",
    },
    position: { x: 300, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "14",
    data: {
      label: "Assistant Secretary for Cybersecurity",
      position: "Gerald James B. Reyes",
      description:
        "Leads efforts to enhance cybersecurity and protect critical information infrastructure.",
    },
    position: { x: 500, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "15",
    type: "output",
    data: {
      label: "Cybercrime Investigation and Coordinating Center (CICC)",
      position: "",
      description: "Coordinates cybercrime investigations and responses.",
    },
    position: { x: 500, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "16",
    data: {
      label: "Assistant Secretary for Digital Education",
      position: "Paul Joseph V. Mercado",
      description: "Promotes digital literacy and competency development.",
    },
    position: { x: 700, y: 0 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
  {
    id: "17",
    type: "output",
    data: {
      position: "",
      label: "ICT Literacy and Competency Development Bureau (ILCDB)",
      description:
        "Develops and implements programs for ICT literacy and skills development.",
    },
    position: { x: 700, y: 100 },
    draggable: false,
    style: {
      backgroundColor: "#2C3957", // Set background color
      color: "white", // Set text color
    },
  },
];

const lines = [
  { id: "1-2", type: "step", source: "1", target: "2", animated: true },
  { id: "1-4", type: "step", source: "1", target: "4", animated: true },
  { id: "1-6", type: "step", source: "1", target: "6", animated: true },
  { id: "1-8", type: "step", source: "1", target: "8", animated: true },
  { id: "1-12", type: "step", source: "1", target: "12", animated: true },
  { id: "1-14", type: "step", source: "1", target: "14", animated: true },
  { id: "1-16", type: "step", source: "1", target: "16", animated: true },
  { id: "2-3", type: "step", source: "2", target: "3", animated: true },
  { id: "4-5", type: "step", source: "4", target: "5", animated: true },
  { id: "6-7", type: "step", source: "6", target: "7", animated: true },
  { id: "8-9", type: "step", source: "8", target: "9", animated: true },
  { id: "8-10", type: "step", source: "8", target: "10", animated: true },
  { id: "8-11", type: "step", source: "8", target: "11", animated: true },
  { id: "12-13", type: "step", source: "12", target: "13", animated: true },
  { id: "14-15", type: "step", source: "14", target: "15", animated: true },
  { id: "16-17", type: "step", source: "16", target: "17", animated: true },
];

function DICT() {
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
          Department of Information and Communications Technology
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
          <b>Date Founded: </b>June 9, 2016
        </Text>
        <br />
        <Text>
          <b>Under which law was created by: (RA 10844)</b> <br /> - An Act
          Creating The Department Of Information And Communications Technology,
          Defining Its Powers And Functions Appropriating Funds Therefor, And
          For Other Purposes.
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
        <img src={Icon} alt="DICT" width={200} height={200} />
        <Text
          width={"100%"}
          color={"#2C3957"}
          fontSize={"md"}
          textIndent={"20px"}
        >
          <b>Logo Meaning: </b>The Logo uses curve radiating lines to represent
          the pulsating radio waves or frequencies, with the lines using the
          tri-colors of the National Flag: red, white, and blue. At the center
          of the sphere is the yellow silhouette of the map of the Philippines,
          in lieu of the yellow sun and stars of the Philippine Flag. The curve
          lines outside the map also indicate the sometimes placid or surging
          waters of the Philippine archipelago, evoking the feeling of dynamism
          brought about by ICT. The 17 connected dots within the silhouette of
          the map represent the 17 Philippine/DICT regions connected by
          technology. The numbers around the spherical Logo are the binary
          equivalent of the acronym DICT and 2016, the year the Department was
          established under Republic Act (R.A.) No. 10844. The straight lines
          radiating from the spherical Logo and intersecting the acronym DICT
          (outside the sphere) represent the frequency waves as they travel
          through space in straight lines; they also represent the encompassing
          reach of ICT and telecommunications. The colored sphere is not
          circumscribed because communications, the service, are without
          borders.
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
          <Text fontStyle={"italic"}>
            “DICT of the people and for the people.”
          </Text>
          <br />
          <b>
            The Department of Information and Communications Technology commits
            to:
          </b>
          <ul style={{ textAlign: "left" }}>
            <li>
              Provide every Filipino access to vital ICT infostructure and
              services.
            </li>
            <li>
              Ensure sustainable growth of Philippine ICT-enabled industries
              resulting to creation of more jobs.
            </li>
            <li>Establish a One Digitized Government, One Nation.</li>
            <li>Support the administration in fully achieving its goals.</li>
            <li>
              Be the enabler, innovator, achiever and leader in pushing the
              country’s development and transition towards a world-class digital
              economy
            </li>
          </ul>
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
          <Text fontStyle={"italic"}>
            “An innovative, safe and happy nation that thrives through and is
            enabled by Information and Communications Technology.”
          </Text>
          <br />
          <Text textIndent={"20px"}>
            - DICT aspires for the Philippines to develop and flourish through
            innovation and constant development of ICT in the pursuit of a
            progressive, safe, secured, contented and happy Filipino nation.
          </Text>
          <br />
          <Text fontSize={"2xl"} color={"#2C3957"}>
            <b>Core Values:</b>
          </Text>
          <ul style={{ width: "50%", textAlign: "left", alignSelf: "center" }}>
            <li>
              <b>D</b>– Dignity
            </li>
            <li>
              <b>I</b> – Integrity
            </li>
            <li>
              <b>C</b> – Competency and Compassion
            </li>
            <li>
              <b>T</b> – Transparency
            </li>
          </ul>
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
          <li>Develop and implement national ICT policies and guidelines.</li>
          <li>Promote digital literacy and ICT education.</li>
          <li>
            Enhance cybersecurity measures and protect critical ICT
            infrastructures.
          </li>
          <li> Foster the growth of ICT-enabled industries.</li>
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

export default DICT;
