import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";
import { Flex, Text } from "@chakra-ui/react";
import icon from "../images/caution_9121332.png";

function Phishing() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(1);
  }, [setSubtab]);
  return (
    <Flex
      flexDirection={"column"}
      width={"95%"}
      maxHeight={"inherit"}
      justifyContent={"center"}
      alignItems={"center"}
      overflowY={"auto"}
      padding={"15px 10px"}
    >
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems={"center"}
        gap={"20px"}>
        <img src={icon} alt="Icon" width={"50px"} height={"50px"} />
        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingBlock={"10px"}
        >
          Public Advisory on Phishing, Vishing, and Smishing in relation to
          Online Banking
        </Text>
      </Flex>
      <br />
      <Text
        width={{base: "inherit", md: "inherit", lg:"95%"}}
        fontSize={"sm"}
        borderBlock={"1px solid"}
        paddingBlock={"10px"}
        textIndent={"15px"}
      >
        This Public Advisory is issued by the{" "}
        <b>Department of Justice (DOJ) – Office of Cybercrime (OOC)</b> in light
        of the increasing reports from the general public involving phishing
        electronic mails (emails), vishing (voice/phone call), and smishing
        (SMS/text) in relation to online banking.
      </Text>
      <br />
      <ol style={{ width: "inherit" }}>
        <li>
          <Text fontWeight={"bold"}>
            Be aware of the red flags or telltale signs of phishing, vishing, or
            smishing -
          </Text>
          <Text>
            The email, text message or phone call, usually uses one of the
            following lines to trick the victims into acting on their
            instructions.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Ignore any suspicious emails, text messages, or calls -
          </Text>
          <Text>
            If you receive suspicious emails, text messages, or calls,
            immediately mark the emails as “spam” and block the number that sent
            the message or made the call. Moreover, avoid opening or clicking
            any links, and downloading any attachments from suspicious and
            unverified senders. It is also advisable to contact your bank
            immediately and check the authenticity of the email, message, or
            call.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Download and use only the official apps of your banks -
          </Text>
          <Text>
            Download only the official apps of the banks thru their official
            website, Google Play, or Apple App Store. Do not download and use
            apps from unknown and unverified sources.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Use multi-factor authentication for your accounts -
          </Text>
          <Text>
            Some online accounts offer extra security by requiring two (2) or
            more credentials to log in to your account. This is called
            multi-factor authentication. The additional credentials you need to
            log in to your account fall into two categories:
          </Text>
          <Text>
            <b>a. Something you have</b> —— like a passcode or one-time password
            (OTP) you get via text message, email, or an authentication app.
          </Text>
          <Text>
            <b>b. Something you are </b> —— like a scan of your fingerprint,
            your retina, or your face. Multi-factor authentication makes it
            harder for scammers to log in to your accounts even if they do get
            your username and password.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>Never share your OTP to anyone -</Text>
          <Text>
            Banks, financial institutions, and their agents will never ask for
            your OTP. If you receive an email, text message, or call asking for
            your OTP, immediately mark the emails as “spam” and block the number
            that sent the message or made the call.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Avoid divulging sensitive and personal information -
          </Text>
          <Text>
            Avoid divulging personal information to anyone you don’t know
            through emails, text messages, or calls. Do not even share sensitive
            information, such as passwords and login credentials, to someone you
            know.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Avoid online transactions while inside internet cafes or by using
            shared computers -
          </Text>
          <Text>
            Avoid doing online banking, online payments, and other online
            transactions while inside internet cafes or by using shared
            computers. As much as possible, online transactions should be done
            using your own computer or electronic gadgets connected to the
            internet using your own mobile data or WiFi. Do not undertake online
            financial transactions if you are connected to a public WiFi.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Install security software on your computer -
          </Text>
          <Text>
            Install security software on your computer, such as firewalls and
            anti-virus, and set the software to update automatically. These
            software updates usually include patches to reported security
            threats.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>
            Always update your mobile phone apps -
          </Text>
          <Text>
            Set your mobile banking, online payment, and online store apps to
            update automatically in order to be protected from security threats.
            These software updates usually include patches to the app’s reported
            vulnerabilities.
          </Text>
        </li>
        <br />
        <li>
          <Text fontWeight={"bold"}>Check the website address -</Text>
          <Text>
            Make it a habit to scrutinize and validate the website address
            before entering any login credentials and personal information.
            Moreover, make it a habit to enter the full website address into
            your browser address bar instead of clicking the embedded links in
            the emails you received. Only enter your login credentials and
            personal information on a secure website.
          </Text>
        </li>
      </ol>
    </Flex>
  );
}

export default Phishing;
