import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { useRouter } from "expo-router";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";
import Loading from "../components/Loading";

const index = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loading />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
