import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/nbi.png";

function NBI() {
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
          National Bureau of Investigation - <br /> Cybercrime Division
        </Text>
      </Flex>
      <Flex
        width={"inherit"}
        flexDirection={"column"}
        padding={{ base: "20px", md: "20px 50px", lg: "20px 115px" }}
        backgroundColor={"#eff5fa"}
      >
        <Text fontSize={"2xl"} color={"#2C3957"}>
          <b>INFORMATION :</b>
        </Text>
        <br />
        <Text fontStyle={"italic"}>
          <b>Date Founded: </b>November 13, 1936; 88 years ago
        </Text>
        <br />
        <Text>
          <b>Under which law was created by: (RA 10175)</b> <br />- The
          Cybercrime Division was signed into law on September 12, 2012, and
          took effect on October 3, 2012 , which corresponds to the enactment of
          the Cybercrime Prevention Act of 2012 (Republic Act No. 10175).
        </Text>
        <br />
        <Text>
          <b>Brief Introduction:</b>The National Bureau of Investigation (NBI)
          is an agency under the Department of Justice in the Philippines,
          modeled after the United States' Federal Bureau of Investigation
          (FBI). It is responsible for handling and solving major high-profile
          cases of national interest.
        </Text>
        <br />
        <Text>
          <b>Its Objectives: </b>
          The main objective of the National Bureau of Investigation is the
          establishment and maintenance of a modern, effective and efficient
          investigative service and research agency for the purpose of
          implementing fully principal functions provided under Republic Act No.
          157, as amended.
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
        <img src={Logo} alt="NBI" width={200} height={200} />
        <Text
          width={"100%"}
          color={"#2C3957"}
          fontSize={"md"}
          textIndent={"20px"}
        >
          <b>Logo Meaning: </b>The National Bureau of Investigation (NBI) logo
          embodies the agency's core values and mission through its carefully
          chosen elements:​
          <br />
          <b>Shield:</b> Represents protection and defense, symbolizing the
          NBI's commitment to safeguarding Philippine citizens.
          <br />
          <b>Colors:</b>
          <br />
          &nbsp; &nbsp; <b>Gold:</b> Denotes excellence and integrity.
          <br />
          &nbsp; &nbsp; <b>Blue:</b> Signifies justice and loyalty.
          <br />
          &nbsp; &nbsp; <b>Red:</b> Embodies bravery and courage.
          <br />
          <b>Eagle:</b> Symbolizes vigilance, independence, and authority,
          reflecting the NBI's readiness to combat crime.
          <br />
          <b>Torch:</b> Represents truth and knowledge, highlighting the
          agency's role in uncovering criminal activities
          <br />
          <b>Laurel Wreath: </b>Stands for honor and excellence, indicating the
          NBI's dedication to high standards in law enforcement.
          <br />
          <i>
            These elements collectively illustrate the NBI's dedication to
            justice, integrity, and public service.
          </i>
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
            A world-class investigative institution - dynamic, respected and
            committed to the high ideals of law and order.
          </Text>
          <br />
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
            To provide quality investigative and forensic services to the people
            through advanced methods and equipment in the pursuit of truth and
            justice.
          </Text>
        </Flex>
      </Flex>
      <br />

      <Flex
        width={"90%"}
        flexDirection={"column"}
        paddingBlock={"20px"}
        borderTop={"2px solid gray"}
      >
        <Text fontSize={"3xl"} color={"#2C3957"} textTransform={"uppercase"}>
          <b>Purpose of the NBI Cybercrime Division:</b>
        </Text>
        <Text>
          <b>The NBI Cybercrime Division</b> exists to investigate, prevent, and
          combat cyber-related crimes in the Philippines. It aims to protect
          individuals, institutions, and the national interest from threats
          involving computer systems, online fraud, data breaches, hacking, and
          other forms of cybercrime. The division also provides forensic
          analysis, technical support, and works closely with both public and
          private sectors to enhance cybersecurity and uphold justice in the
          digital space.
        </Text>
      </Flex>
      <Flex
        width={{ base: "100%", md: "50%" }}
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
          <li>
            Investigate major high-profile cases and offenses against Philippine
            laws.
          </li>
          <li>
            Conduct forensic examinations and provide technical services.​
          </li>
          <li>
            Collect and analyze intelligence related to criminal activities.
          </li>
          <li>Maintain a central database of criminal records.</li>
          <li>
            Collaborate with local and international law enforcement agencies.
          </li>
        </ul>
      </Flex>
      <br />
      <Text fontSize={"3xl"} color={"#2C3957"} textTransform={"uppercase"}>
        <b>Section 10: </b>
      </Text>
      <Flex
        width={"100%"}
        flexDirection={"column"}
        padding={{ base: "20px", md: "20px 50px", lg: "20px 120px" }}
        backgroundColor={"#2C3957"}
        color={"white"}
        textAlign={"center"}
      >
        <Text fontSize={"2xl"}>
          <b>Powers and Functions of Law Enforcement Authorities.</b>
        </Text>
        <Text fontStyle={"italic"}>
          The <b>NBI and PNP</b> cybercrime unit or division shall have the
          following powers and functions:
        </Text>
        <br />
        <ol style={{ textAlign: "left" }}>
          <li>
            Investigate all cybercrimes where computer systems are involved;
          </li>
          <li>
            Conduct data recovery and forensic analysis on computer systems and
            other electronic evidence seized;
          </li>
          <li>
            Formulate guidelines in investigation, forensic evidence recovery,
            and forensic data analysis consistent with industry standard
            practices;
          </li>
          <li>
            Provide technological support to investigating units within the PNP
            and NBI including the search, seizure, evidence preservation and
            forensic recovery of data from crime scenes and systems used in
            crimes, and provide testimonies;
          </li>
          <li>
            Develop public, private sector, and law enforcement agency relations
            in addressing cybercrimes;
          </li>
          <li>
            Maintain necessary and relevant databases for statistical and/or
            monitoring purposes;
          </li>
          <li>
            Develop capacity within their organizations in order to perform such
            duties necessary for the enforcement of the Act;
          </li>
          <li>
            Support the formulation and enforcement of the national
            cybersecurity plan; and
          </li>
          <li>Perform other functions as may be required by the Act.</li>
        </ol>
      </Flex>
    </Center>
  );
}

export default NBI;
