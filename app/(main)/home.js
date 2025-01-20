import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

const Home = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", "Error signing out");
    }
    router.replace("/welcome");
  };

  return (
    <ScreenWrapper style={{ alignItems: "center ", margin: 50 }}>
      <Text>sfgsjfhgsjdfgjsdfgsdjfgsdjhß</Text>
      <Button title="Logout" onPress={onLogout} />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
