import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  },
  subTitle: {
    marginBottom: 7,
    fontSize: 12,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
