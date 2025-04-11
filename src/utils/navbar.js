import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./contextProvider";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { tab } = useContext(GlobalContext);
  const [subtab, setSubtab] = useState(0);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const active = {
    width: "100px",
    justifyContent: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "20px",
    borderRadius: "0px",
    background: "white",
    color: "black",
    zIndex: 10,
  };
  const inactive = {
    width: "100px",
    color: "white",
    background: {
      base: "#2c3957",
      md: "#2c3957",
      lg: "transparent",
    },
    justifyContent: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "20px",
    borderRadius: "0px",
    zIndex: 10,
    "&:hover": {
      color: "black",
      transition: "0.2s ease-in",
    },
  };

  const navClick = (route) => {
    navigate(route);
  };
  const tabClick = (route, num) => {
    navigate(route);
    setSubtab(num);
  };
  return (
    <Flex
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <IconButton
        aria-label="Open Menu"
        display={{ base: "block", md: "block", lg: "none" }} // Show only on smaller screens
        icon={<HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen} // Toggle menu
        variant="ghost" // Removes background and border
        color="white"
      />
      <Flex
        display={{ base: isOpen ? "block" : "none", md: isOpen ? "block" : "none", lg: "flex" }} // Toggle visibility
        flexDirection={{ base: "column", md: "row" }} // Stack on small screens
        position={{ base: "absolute", md: "absolute", lg: "relative" }}
        top={{ base: "55px", md: "55px", lg: "5px" }}
        right={0}
        alignItems="center"
        justifyContent="flex-start" // Align items to start on smaller screens
        ml={{ base: 4, md: 0 }} // Add some left margin on smaller screens
      >
        <Button
          sx={tab === 1 ? active : inactive}
          onClick={() => navClick("/home")}
        >
          Home
        </Button>
        <hr
          style={{ height: "inherit", width: "1px", backgroundColor: "gray" }}
        />
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="transparent"
            sx={tab === 2 ? active : inactive}
          >
            Agencies
          </MenuButton>
          <MenuList
            sx={{
              width: "fit-content",
              display:"flex",
              flexDirection: { base: "column", md: "column", lg: "row" },
              justifyContent: "center",
              alignItems: "center",
              right: "100px",
              backgroundColor: "#2c3957",
              paddingInline: "10px",
            }}
          >
            <Button
              sx={subtab === 1 ? active : inactive}
              onClick={() => tabClick("/agencies/dict", 1)}
            >
              DICT
            </Button>
            <Button
              sx={subtab === 2 ? active : inactive}
              onClick={() => tabClick("/agencies/doj", 2)}
            >
              DOJ
            </Button>
            <Button
              sx={subtab === 3 ? active : inactive}
              onClick={() => tabClick("/agencies/nbi", 3)}
            >
              NBI
            </Button>
            <Button
              sx={subtab === 4 ? active : inactive}
              onClick={() => tabClick("/agencies/npc", 4)}
            >
              NPC
            </Button>
          </MenuList>
        </Menu>

        <hr
          style={{ height: "inherit", width: "1px", backgroundColor: "gray" }}
        />
        <Button
          sx={tab === 3 ? active : inactive}
          onClick={() => navClick("/alerts")}
        >
          Alerts
        </Button>
        <hr
          style={{ height: "inherit", width: "1px", backgroundColor: "gray" }}
        />
        <Button
          sx={tab === 4 ? active : inactive}
          onClick={() => navClick("/projects")}
        >
          Projects
        </Button>
        <Button
          sx={tab === 5 ? active : inactive}
          onClick={() => navClick("/contact")}
        >
          Contact
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
