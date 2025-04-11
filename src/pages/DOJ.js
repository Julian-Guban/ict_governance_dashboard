import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/doj.png";

function DOJ() {
  return (
    <Center width={"inherit"} flexDirection={"column"}>
      <Flex
        width={"100%"}
        alignItems={"center"}
        gap={"10px"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={{ base: "center", md: "center", lg: "left" }}
        padding={{ base: "10px 15px", md: "20px 100px" }}
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
          Department of Justice - <br /> Cybercrime Task Force
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
          <b>Date Founded: </b> September 12, 2012
        </Text>
        <br />
        <Text>
          <b>Under which law was created by: (RA 10175)</b> <br /> - Republic
          Act No. 10175 or the Cybercrime Prevention Act of 2012 created the
          Office of Cybercrime (OOC) within the DOJ and designated it as the
          Central Authority in all matters relating to international mutual
          assistance and extradition for cybercrime and cyber-related matters.
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
        <img src={Logo} alt="DOJ" width={200} height={200} />
        <Text
          width={"100%"}
          color={"#2C3957"}
          fontSize={"md"}
          textIndent={"20px"}
        >
          <b>Logo Meaning: </b>The Department of Justice (DOJ) logo/seal
          features three stars representing the three main geographical islands
          of the Philippines; a scale symbolizing equality, which is balanced
          over a sword, symbolic of authority in the dispensation of justice.
          Republic Act No. 10175 or the Cybercrime Prevention Act of 2012
          created the Office of Cybercrime (OOC) within the DOJ and designated
          it as the Central Authority in all matters relating to international
          mutual assistance and extradition for cybercrime and cyber-related
          matters. It also acts as the focal agency in formulating and
          implementing law enforcement investigation and prosecution strategies
          in curbing cybercrime and cyber-related offenses nationwide.
        </Text>
      </Flex>
      <Flex
        width={"100%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Flex
          width={"100%"}
          flexDirection={"column"}
          padding={{ base: "20px 30px", md: "20px 50px", lg: "20px 120px" }}
          backgroundColor={"#2C3957"}
          color={"white"}
          textAlign={"center"}
        >
          <Text fontSize={"2xl"}>
            <b>Functions/Mandates : </b>
          </Text>
          <Text fontStyle={"italic"}>
            <b> DOJ OCC</b> acts as the focal agency in formulating and
            implementing law enforcement investigation and prosecution
            strategies in curbing cybercrime and cyber-related offenses
            nationwide
          </Text>
          <br />
          <ol style={{ textAlign: "left" }}>
            <li>
              Act as a competent authority for all requests for assistance for
              investigation or proceedings concerning cybercrimes, facilitate
              the provisions of legal or technical advice, preservation and
              production of data, collection of evidence, giving legal
              information and location of suspects;
            </li>
            <li>
              Act on complaints/referrals, and cause the investigation and
              prosecution of cybercrimes and other violations of the Act;
            </li>
            <li>Issue preservation orders addressed to service providers;</li>
            <li>
              Administer oaths, issue subpoena and summon witnesses to appear in
              an investigation or proceedings for cybercrime;
            </li>
            <li>
              Require the submission of timely and regular reports including
              pre-operation, post-operation and investigation results, and such
              other documents from the PNP and NBI for monitoring and review;
            </li>
            <li>
              Monitor the compliance of the service providers with the
              provisions of Chapter IV of the Act, and Rules 7 and 8 hereof;
            </li>
            <li>
              Facilitate international cooperation with other law enforcement
              agencies on intelligence, investigations, training and
              capacity-building related to cybercrime prevention, suppression
              and prosecution;
            </li>
            <li>
              Issue and promulgate guidelines, advisories, and procedures in all
              matters related to cybercrime investigation, forensic evidence
              recovery, and forensic data analysis consistent with industry
              standard practices;
            </li>
            <li>
              Prescribe forms and templates, including, but not limited to,
              those for preservation orders, chain of custody, consent to
              search, consent to assume account/online identity, and request for
              computer forensic examination;
            </li>
            <li>
              Undertake the specific roles and responsibilities of the DOJ
              related to cybercrime under the Implementing Rules and Regulation
              of Republic Act No. 9775 or the “Anti-Child Pornography Act of
              2009”; and
            </li>
            <li>
              Perform such other acts necessary for the implementation of the
              Act.
            </li>
          </ol>
        </Flex>
      </Flex>
      <br />
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
          <li>Investigating and Prosecuting Cybercrimes.</li>
          <li>Handling International Requests.</li>
          <li>Issuing Preservation Orders.</li>
          <li> Administering Oaths and Issuing Subpoenas.</li>
          <li> Coordinating Law Enforcement Efforts.</li>
          <li> Monitoring Compliance.</li>
        </ul>
      </Flex>
    </Center>
  );
}

export default DOJ;
