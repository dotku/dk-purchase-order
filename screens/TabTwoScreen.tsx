import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
import { Paragraph } from "react-native-paper";
import { BaseStyles } from "../assets/styles/Base";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View
      style={{
        padding: 50,
      }}
    >
      <Paragraph style={BaseStyles.getStartedText}>
        We starting form 2020 due to covid-19. By the time, many people in the
        US need PPE products, and we have successfully helped millions people in
        the US to access the safety products. And we are going to do more, for
        2022, our goal is to build the US manufacture supply ecosystem and boot
        up the US industry need.
      </Paragraph>
      <Paragraph style={BaseStyles.getStartedText}>
        Please contact us if you want to promote your product, supply or want to
        source any product items from our vendors.
      </Paragraph>
      <Paragraph style={BaseStyles.getStartedText}>Thanks, </Paragraph>
      <Paragraph style={BaseStyles.getStartedText}>DK Wholesale</Paragraph>
      <Paragraph style={BaseStyles.getStartedText}>
        dkwholesale2020@gmail.com
      </Paragraph>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
