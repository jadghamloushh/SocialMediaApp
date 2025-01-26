import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { wp, hp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import ScreenWrapper from "../../components/ScreenWrapper";
import Header from "../../components/Header";
import { Image } from "expo-image";
import { useAuth } from "../../context/AuthContext";
import { getUserImageSrc } from "../../services/imageService";
import Icon from "../../assets/icons";
import { Input } from "@rneui/themed/dist/Input";

const EditProfile = () => {
  const { user: currentUser } = useAuth();

  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    image: null,
    bio: "",
    address: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser.name || "",
        phoneNumber: currentUser.phoneNumber || "",
        image: currentUser.image || null,
        bio: currentUser.bio || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser]);

  let imageSource = getUserImageSrc(user.image);

  const onPickImage = async () => {};

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header title="Edit Profile" />

          {/* form */}
          <View style={styles.form}>
            <View style={styles.avatarContainer}>
              <Image source={imageSource} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={onPickImage}>
                <Icon name="camera" size={20} strokeWidth={2.5} />
              </Pressable>
            </View>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please fill all your profile details
            </Text>
            <Input
              icon={<Icon name="user" />}
              placeholder="Enter your name"
              value={user.name}
              onChange={(value) => {
                setUser({ ...user, name: value });
              }}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: theme.radius.xxl * 1.8,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  input: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    padding: 17,
    paddingHorizontal: 20,
    gap: 15,
  },
  bio: {
    flexDirection: "row",
    height: hp(15),
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});
