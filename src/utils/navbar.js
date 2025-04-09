import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./contextProvider";

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
  background: "transparent",
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

function Navbar() {
  const { tab } = useContext(GlobalContext);
  const [subtab, setSubtab] = useState(0);
  const navigate = useNavigate();

  const navClick = (route) => {
    navigate(route);
  };
  const tabClick = (route, num) => {
    navigate(route);
    setSubtab(num);
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", position: "relative"}}>
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
        <MenuList sx={{backgroundColor: "#2c3957", paddingInline: '10px', zIndex: "1000"}}>
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
      <hr
        style={{ height: "inherit", width: "1px", backgroundColor: "gray" }}
      />
      <Button
        sx={tab === 5 ? active : inactive}
        onClick={() => navClick("/contact")}
      >
        Contact
      </Button>
    </nav>
  );
}

export default Navbar;
