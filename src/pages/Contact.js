import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../utils/contextProvider";
import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dict from "../images/dict-logo.png";
import doj from "../images/doj.png";
import nbi from "../images/nbi.png";
import npc from "../images/npc.png";

const agencies = [
  {
    logo: dict,
    abbvr: "DICT",
    name: "Department of Information and Communications Technology (DICT)",
    address: "DITC Building, CP Garcia Ave, Quezon City, Philippines",
    email: "contact@dict.gov.ph",
    number: "+63 2 8920 0101",
    website: "https://dict.gov.ph",
    facebook: "https://www.facebook.com/dictph",
    youtube: "https://www.youtube.com/user/dictgovph",
    x: "https://twitter.com/dictph",
    googleMap: "https://maps.app.goo.gl/7bDSyC4X2FNQXjDy6",
  },
  {
    logo: doj,
    abbvr: "DOJ",
    name: "Department of Justice - Cybercrime Division",
    address: "Padre Faura St., Ermita, Manila, Philippines",
    email: "cybercrime@doj.gov.ph",
    number: "+63 2 523 8486",
    website: "https://www.doj.gov.ph",
    facebook: "https://www.facebook.com/DOJPH",
    youtube: "https://www.youtube.com/user/DOJPH",
    x: "https://twitter.com/DOJPH",
    googleMap: "https://maps.app.goo.gl/YRcXqF3vYMURjjow5",
  },
  {
    logo: nbi,
    abbvr: "NBI",
    name: "Department of Justice - Cybercrime Division",
    address:
      "Filinvest Cyberzone Bay, Diosdado Macapagal Boulevard, Pasay City",
    email: "director@nbi.gov.ph",
    number: " 8523.8231 to 38",
    website: "https://nbi.gov.ph",
    facebook: "@nbi.gov.ph",
    youtube: "None",
    x: "None",
    googleMap: "https://maps.app.goo.gl/pC3w22g28s7WdEMKA",
  },
  {
    logo: npc,
    abbvr: "NPC",
    name: "National Privacy Commission (NPC)",
    address: "5th Floor, Cyberpark 3, McKinley Hill, Taguig City, Philippines",
    email: "info@privacy.gov.ph",
    number: "+63 2 8234 2222",
    website: "https://privacy.gov.ph",
    facebook: "https://www.facebook.com/privacyPH",
    youtube: "https://www.youtube.com/channel/UCkKNvzzTK5JvnkqL4GqV6_A",
    x: "https://twitter.com/privacyPH",
    googleMap: "https://maps.app.goo.gl/iFx7nqCyKFH6eiAZ9",
  },
];

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // const [nodeState, setNodeState] = useState(null); // For storing clicked node data
  const { setTab } = useContext(GlobalContext);

  const handleNodeClick = (agency) => {
    if (agency) {
      setModalContent(agency);
      setIsModalOpen(true); // Open modal with content
    } else {
      console.log(agency);
    }
  };

  useEffect(() => {
    setTab(5);
  }, [setTab]);
  return (
    <Center
      width={"100%"}
      height={"100%"}
      marginTop={"100px"}
      flexDirection={"column"}
    >
      <Text
        width={"inherit"}
        textAlign={"start"}
        fontWeight={"light"}
        paddingLeft={"20px"}
        color={"gray"}
        fontSize={"lg"}
      >
        Contact | Contact Informations
      </Text>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {agencies.map((agency, index) => (
          <Box
            key={index}
            width="320px"
            height={"inherit"}
            borderWidth="1px"
            backgroundColor={"#eff5fa"}
            borderRadius={"5px"}
            border={"2px solid #266fe4"}
            overflow="hidden"
            margin="4"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            _hover={{
              transform: "translateY(5px)",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.56)",
            }}
          >
            <Box padding="6" display="flex" flexDirection="column">
              <img
                src={agency.logo}
                alt="DICT"
                style={{ width: "100px", margin: "10px", alignSelf: "center" }}
              />
              <Text
                mt="2"
                fontWeight="bold"
                fontSize="xl"
                height={"80px"}
                textAlign={"center"}
              >
                {agency.name}
              </Text>
              <br />
              <Text mt="2">
                <strong>Address:</strong> {agency.address}
              </Text>
              <Text mt="2">
                <strong>Email:</strong> {agency.email}
              </Text>
              <Text mt="2">
                <strong>Phone:</strong> {agency.number}
              </Text>
              <Text mt="2" mb="2">
                <strong>Website: </strong>
                <Link href={agency.website}>{agency.website}</Link>
              </Text>
              <hr />
              <Box justifyContent={"center"} alignItems={"flex-start"}>
                <Text mt="2">
                  <strong>Social Media:</strong>
                </Text>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  gap="1"
                >
                  <Link href={agency.facebook}>Facebook</Link>
                  <Link href={agency.youtube}>YouTube</Link>
                  <Link href={agency.x}>X</Link>
                </Box>

                <Text mt="2">
                  <strong>Google Map: </strong>
                  <br />
                  <Link
                    href={agency.googleMap}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </Link>
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              padding="4"
              backgroundColor="gray.100"
            >
              <Button
                variant="outline"
                mr="2"
                _hover={{
                  backgroundColor: "#000001d",
                  color: "gray"
                }}
                onClick={() => handleNodeClick(agency)}
              >
                See Map
              </Button>
              <Center>
                <Link href={agency.website} target="_blank" rel="noreferrer">
                  Go to Website
                </Link>
              </Center>
            </Box>
          </Box>
        ))}
        {/* Modal */}
        <Center>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Center flexDirection={"column"}>
                  <Text fontWeight={"bold"} fontSize={"2xl"}>
                    {modalContent.abbvr}:
                  </Text>
                  <Text fontSize={"sm"}>{modalContent.name}</Text>
                </Center>
                <hr style={{ border: "1px solid", marginTop: "10px" }} />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody sx={{ padding: "15px" }}>
                <iframe
                  title={modalContent.abbvr}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                  }}
                  src={`${modalContent.googleMap}`}
                  allowFullScreen
                ></iframe>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Center>
      </Box>
    </Center>
  );
}

export default Contact;
