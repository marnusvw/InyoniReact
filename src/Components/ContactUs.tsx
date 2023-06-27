import {
  Box,
  FormControl,
  HStack,
  Input,
  Text,
  Image,
  Heading,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import iaSAIcon from "../assets/IA-SA-Icon-Small.jpg";

const ContactUs = () => {
  return (
    <>
      <HStack
        width={"90vw"}
        spacing={20}
        paddingTop={10}
        paddingBottom={10}
        alignItems={"flex-start"}
        marginTop={5}
      >
        <Box
          lineHeight={10}
          fontSize={20}
          display={"flex"}
          paddingLeft={200}
          flexDirection={"column"}
          alignItems={"flex-end"}
          color={"secondary.100"}
        >
          <Heading fontWeight={600} paddingBottom={3} fontSize={20}>
            Company name – Inyoni Africa Irrigation Specialists (Pty) Ltd
          </Heading>
          <Text>Registration number 2004/033490/07</Text>
          <Text>Contact details & Web address</Text>
          <Text>info@inyoniafrica.co.za</Text>
          <Text>Tel: +27 13 7122175</Text>
          <Text>Fax: +27 13 7124198</Text>
          <Text>
            Web:
            <Link to={"https://inyoniafrica.co.za/"}>
              {" "}
              www.inyoniacfrica.co.za
            </Link>
          </Text>
          <Text>Postal: PO Box 125, Barberton, 1300, South Africa</Text>
          <Text>
            Physical Address: 51 President Street, Barberton, 1300, South Africa
          </Text>
        </Box>
        <Image
          overflow={"hidden"}
          boxSize={"contain"}
          width={"350px"}
          src={iaSAIcon}
        ></Image>
      </HStack>
      <FormControl marginBottom={20} paddingX={"200px"}>
        <FormLabel fontSize={30} color={"primary.100"} fontWeight={400}>
          Contact Form
        </FormLabel>
        <HStack paddingY={5}>
          <Input
            bg={"gray.200"}
            focusBorderColor="primary.100"
            placeholder="Name"
          ></Input>
          <Input
            bg={"gray.200"}
            focusBorderColor="primary.100"
            placeholder="Email Address"
          ></Input>
        </HStack>
        <Textarea
          bg={"gray.200"}
          focusBorderColor="primary.100"
          placeholder="Message"
          height={"200px"}
        ></Textarea>
      </FormControl>
    </>
  );
};

export default ContactUs;