import React, { useContext, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import dict from "../images/dict-logo.png";
import doj from "../images/doj.png";
import nbi from "../images/nbi.png";
import npc from "../images/npc.png";
import GlobalContext from "../utils/contextProvider";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const COLORS = ["#266fe4", "#396bbc", "#4067a4", "#3a5683"];

function Home() {
  const navigate = useNavigate();
  const { setTab } = useContext(GlobalContext);
  const data = [
    { type: "2020-2021", allocation: 19000 },
    { type: "2022", allocation: 11523 },
    { type: "2023", allocation: 19472 },
    { type: "2024", allocation: 19000 },
    { type: "2025 (1st Quarter)", allocation: 3251 },
  ];
  const data2 = [
    { name: "DICT", value: 10 },
    { name: "DOJ", value: 1 },
    { name: "NBI", value: 2 },
    { name: "NPC", value: 2 },
  ];

  useEffect(() => {
    setTab(1);
  }, [setTab]);

  return (
    <Center
      padding={"20px"}
      marginTop={"200px"}
      width={"100%"}
      flexDirection={"column"}
    >
      <Text
        width={"inherit"}
        textAlign={"start"}
        fontWeight={"light"}
        color={"gray"}
        fontSize={"lg"}
      >
        Home | General Information
      </Text>
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"1em"}
      >
        <Center
          width={"100%"}
          flexDirection={"column"}
          backgroundColor={"#eff5fa"}
          border={"2px solid #266fe4"}
          padding={"15px"}
          borderRadius={"5px"}
        >
          <Box width={"95%"} textAlign={"left"} marginBottom={"10px"}>
            <Text
              fontSize={"xx-large"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              color={"#2c3957"}
            >
              Total Cybercrime cases :
            </Text>
            <Text
              fontSize={"2xs"}
              fontWeight={"bold"}
              textTransform={"capitalize"}
              color={"#2c3957"}
            >
              ( in the philippines by year )
            </Text>
          </Box>
          <Center width={"90%"}>
            <BarChart width={900} height={375} data={data}>
              <CartesianGrid stroke="#666" vertical={false} />
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey="type"
                tick={{ fontSize: 14, fontWeight: "bold" }}
              />
              <YAxis
                axisLine={true}
                tickLine={true}
                domain={[0, Math.max(...data.map((d) => d.allocation)) * 1.1]}
                tickFormatter={(value) => `${value.toLocaleString()}`}
                tick={{ fontSize: 14, fontWeight: "bold" }}
              />
              <Tooltip />
              <Bar
                dataKey="allocation"
                fill="#96b4f5"
                isAnimationActive={false}
              />
            </BarChart>
          </Center>
        </Center>
        <Flex
          width={"100%"}
          height={"inherit"}
          flexDirection={"column"}
          gap={"1em"}
          position={"relative"}
        >
          <Center
            width={"inherit"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            backgroundColor={"#eff5fa"}
            border={"2px solid #266fe4"}
            padding={"15px"}
            borderRadius={"5px"}
          >
            <Text fontSize={"md"} fontWeight={"bold"} padding={"5px"}>
              TOTAL ACTIVE ICT PROJECTS: 15
            </Text>
            <Flex justifyContent={"space-between"} width={"100%"}>
              <ul style={{ width: "40%" }}>
                <li style={{ display: "flex" }}>
                  &#9900; &nbsp;
                  <b>DICT:</b>&nbsp;
                  <p>10</p>
                </li>
                <li style={{ display: "flex" }}>
                  &#9900; &nbsp;
                  <b>DOJ:</b>&nbsp;
                  <p>1</p>
                </li>
                <li style={{ display: "flex" }}>
                  &#9900; &nbsp;
                  <b>NBI:</b> &nbsp;
                  <p>2</p>
                </li>
                <li style={{ display: "flex" }}>
                  &#9900; &nbsp;
                  <b>NPC:</b>&nbsp;
                  <p>2</p>
                </li>
              </ul>
              <Center width={"100%"}>
                <PieChart width={150} height={150}>
                  <Pie
                    data={data2}
                    cx={70}
                    cy={70}
                    innerRadius={0}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data2.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Center>
            </Flex>
          </Center>
          <Center
            width={"100%"}
            flexDirection={"column"}
            backgroundColor={"#eff5fa"}
            border={"2px solid #266fe4"}
            padding={"15px"}
            borderRadius={"5px"}
          >
            <Text fontSize={"md"} fontWeight={"bold"} padding={"5px"}>
              CYBERCRIME CASES BY TYPE(2022-2023) :
            </Text>
            <ul>
              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b> Total Online Scams - </b>&nbsp;
                <p>21,238</p>
              </li>
              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b>Total sextortion -</b>&nbsp;
                <p> 231</p>
              </li>

              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b> Illegal Access - </b> &nbsp;
                <p>4,821</p>
              </li>
              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b>Computer-Related Identity Theft -</b>&nbsp;
                <p>2,384</p>
              </li>
            </ul>
            <Text fontSize={"md"} fontWeight={"bold"} padding={"5px"}>
              Pricvacy Complaints:
            </Text>
            <ul>
              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b> 2023 - </b>&nbsp;
                <p>28,824</p>
              </li>
              <li style={{ display: "flex" }}>
                &#9900; &nbsp;
                <b>2024 -</b>&nbsp;
                <p>13000</p>
              </li>
            </ul>
          </Center>
        </Flex>
      </Flex>

      <Flex width={"100%"} marginTop={"15px"} gap={"1em"}>
        <Center
          onClick={() => navigate("/agencies/dict")}
          width={"95%"}
          height={"300px"}
          backgroundColor={"#eff5fa"}
          borderRadius={"5px"}
          border={"2px solid #266fe4"}
          flexDirection={"column"}
          marginBottom={"10px"}
          cursor={"pointer"}
          _hover={{
            transform: "translateY(5px)",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.56)",
          }}
        >
          <img
            src={dict}
            alt="DICT"
            style={{ width: "150px", margin: "10px" }}
          />
          <Text
            fontSize={"xx-large"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"#2c3957"}
          >
            DICT
          </Text>
          <Text
            fontSize={"2xs"}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            color={"#2c3957"}
          >
            Department of Information and Communications Technology
          </Text>
        </Center>
        <Center
          onClick={() => navigate("/agencies/doj")}
          width={"95%"}
          height={"300px"}
          backgroundColor={"#eff5fa"}
          borderRadius={"5px"}
          border={"2px solid #266fe4"}
          flexDirection={"column"}
          marginBottom={"10px"}
          cursor={"pointer"}
          _hover={{
            transform: "translateY(5px)",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.56)",
          }}
        >
          <img src={doj} alt="DOJ" style={{ width: "150px", margin: "10px" }} />
          <Text
            fontSize={"xx-large"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"#2c3957"}
          >
            DOJ
          </Text>
          <Text
            fontSize={"2xs"}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            color={"#2c3957"}
          >
            Department of Justice - Cybercrime Task Force
          </Text>
        </Center>
        <Center
          onClick={() => navigate("/agencies/nbi")}
          width={"95%"}
          height={"300px"}
          backgroundColor={"#eff5fa"}
          borderRadius={"5px"}
          border={"2px solid #266fe4"}
          flexDirection={"column"}
          marginBottom={"10px"}
          cursor={"pointer"}
          _hover={{
            transform: "translateY(5px)",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.56)",
          }}
        >
          <img src={nbi} alt="NBI" style={{ width: "150px", margin: "10px" }} />
          <Text
            fontSize={"xx-large"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"#2c3957"}
          >
            NBI
          </Text>
          <Text
            fontSize={"2xs"}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            color={"#2c3957"}
          >
            National Bureau of Investigation - Cybercrime Division
          </Text>
        </Center>
        <Center
          onClick={() => navigate("/agencies/npc")}
          width={"95%"}
          height={"300px"}
          backgroundColor={"#eff5fa"}
          borderRadius={"5px"}
          border={"2px solid #266fe4"}
          flexDirection={"column"}
          marginBottom={"10px"}
          cursor={"pointer"}
          _hover={{
            transform: "translateY(5px)",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.56)",
          }}
        >
          <img src={npc} alt="NPC" style={{ width: "150px", margin: "10px" }} />
          <Text
            fontSize={"xx-large"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"#2c3957"}
          >
            NPC
          </Text>
          <Text
            fontSize={"2xs"}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            color={"#2c3957"}
          >
            National Privacy Commission
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default Home;
