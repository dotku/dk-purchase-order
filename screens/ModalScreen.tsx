import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
import { BaseStyles } from "../assets/styles/Base";
import { View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View>
      <View
        style={{
          margin: 50,
        }}
      >
        <Paragraph style={BaseStyles.getStartedText}>
          We starting form 2020 due to covid-19. By the time, many people in the
          US need PPE products, and we have successfully helped millions people
          in the US to access the safety products. And we are going to do more,
          for 2022, our goal is to build the US manufacture supply ecosystem and
          boot up the US industry need.
        </Paragraph>
        <Paragraph style={BaseStyles.getStartedText}>
          Please contact us if you want to promote your product, supply or want
          to source any product items from our vendors.
        </Paragraph>
        <Paragraph style={BaseStyles.getStartedText}>Thanks, </Paragraph>
        <Paragraph style={BaseStyles.getStartedText}>DK Wholesale</Paragraph>
        <Paragraph style={BaseStyles.getStartedText}>
          dkwholesale2020@gmail.com
        </Paragraph>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
