import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { shareAsync } from "expo-sharing";
import { Button, TextInput } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React, { useEffect } from "react";
import { getPOHTML } from "../components/pdf";
import * as Print from "expo-print";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [poNumber, setPoNumber] = React.useState(Math.trunc(Date.now() / 1000));
  const [companyName, setCompanyName] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [vendorAddress, setVendorAddress] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState(`
    2 x Cotton Shirt-S/Slim Fit, $200
    3 x Cotton Bag, $30
    Total: $230
  `);
  const [note, setNote] = React.useState(`
    It was great doing business with you.
    Upon accepting this purchase order, you hereby agree to the terms & conditions.
  `);

  useEffect(() => {
    const genData = async () => {
      const prevCompanyName = await AsyncStorage.getItem("companyName");
      const prevCompanyAddress = await AsyncStorage.getItem("companyAddress");
      const prevVendorName = await AsyncStorage.getItem("vendorName");
      const prevVendorAddress = await AsyncStorage.getItem("vendorAddress");
      const prevItemDescription = await AsyncStorage.getItem("itemDescription");
      const prevNote = await AsyncStorage.getItem("note");
      setCompanyName(prevCompanyName || "");
      setCompanyAddress(prevCompanyAddress || "");
      setVendorName(prevVendorName || "");
      setVendorAddress(prevVendorAddress || "");
      setItemDescription(
        prevItemDescription ||
          `
      2 x Cotton Shirt-S/Slim Fit, $200
      3 x Cotton Bag, $30
      Total: $230
    `
      );
      setNote(
        prevNote ||
          `
      It was great doing business with you.
      Upon accepting this purchase order, you hereby agree to the terms & conditions.
    `
      );
    };
    genData();
  }, []);

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html: getPOHTML({
        poNumber,
        companyName,
        companyAddress,
        vendorName,
        vendorAddress,
        itemDescription,
        footer: note,
      }),
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const handleSaveOnPress = async () => {
    await AsyncStorage.setItem("companyName", companyName);
    await AsyncStorage.setItem("companyAddress", companyAddress);
    await AsyncStorage.setItem("vendorName", vendorName);
    await AsyncStorage.setItem("vendorAddress", vendorAddress);
    await AsyncStorage.setItem("itemDescription", itemDescription);
    await AsyncStorage.setItem("note", note);
    await printToFile();
  };

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     paddingTop: StatusBar.currentHeight,
    //   }}
    // >
    <ScrollView style={styles.container}>
      <TextInput
        label="Purchase Order #"
        placeholder="PO Number"
        value={poNumber.toString()}
        onChangeText={(pon) => setPoNumber(parseInt(pon))}
        autoComplete={false}
        keyboardType="numeric"
      />
      <TextInput
        label="Company Name"
        placeholder="Your Company"
        autoFocus
        value={companyName}
        onChangeText={(com) => setCompanyName(com)}
        autoComplete={false}
      />
      <TextInput
        label="Address"
        value={companyAddress}
        onChangeText={(addr) => setCompanyAddress(addr)}
        autoComplete={false}
        multiline={true}
      />
      <TextInput
        label="Vendor Company Name"
        placeholder="Your Company"
        value={vendorName}
        onChangeText={(com) => setVendorName(com)}
        autoComplete={false}
      />
      <TextInput
        label="Vendor Address"
        value={vendorAddress}
        onChangeText={(addr) => setVendorAddress(addr)}
        autoComplete={false}
        multiline={true}
      />
      <TextInput
        label="Item(s) Description"
        value={itemDescription}
        onChangeText={(itemDesc) => setItemDescription(itemDesc)}
        autoComplete={false}
        multiline={true}
      />
      <TextInput
        label="Footnote"
        value={note}
        onChangeText={(newNote) => setNote(newNote)}
        autoComplete={false}
        multiline={true}
      />
      <Button style={{ marginVertical: 10 }} onPress={handleSaveOnPress}>
        Save
      </Button>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
