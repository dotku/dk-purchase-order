import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [poNumber, setPoNumber] = React.useState(Math.trunc(Date.now() / 1000));
  const [company, setCompany] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [vendorAddress, setVendorAddress] = React.useState("");
  const [vendorCompany, setVendorCompany] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState(
    `eg.
    2 x Cotton Shirt-S/Slim Fit, $200
    3 x Cotton Bag, $30
    Total: $230`
  );
  const [note, setNote] = React.useState(
    `It was great doing business with you.
    \nUpon accepting this purchase order, you hereby agree to the terms & conditions.`
  );
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
        value={company}
        onChangeText={(com) => setCompany(com)}
        autoComplete={false}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={(addr) => setAddress(addr)}
        autoComplete={false}
        multiline={true}
      />
      <TextInput
        label="Vendor Company Name"
        placeholder="Your Company"
        value={vendorCompany}
        onChangeText={(com) => setVendorCompany(com)}
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
        label="Item Description"
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
