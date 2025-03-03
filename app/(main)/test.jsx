import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const uploadFile = async (folderName, fileUri, isImage) => {
  let fileName = getFileName(folderName, isImage); // will return -> /postImage/1234234.png
  const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  let imageData = decode(fileBase64);
  let { data, error } = await supabase.storage
    .from("uploads")
    .upload(fileName, imageData, {
      cacheControl: "3600",
      upsert: false,
      contentType: isImage ? "image/*" : "video/*",
    });
};

// data: {
// file: image,
// body: text,
// userId: userId
// }

export const createPost = async (post) => {
  if (post.file && typeof post.file == "object") {
    let isImage = post?.file?.type == Image;
    let folderName = isImage ? "postImages" : "postVideos";
    let res = await uploadFile(folderName, post?.file?.uri, isImage);
  }
};

const getFileName = (folderName, isImage) => {
  return `/${folderName}/time/${isImage ? ".png" : ".mp4"}`;
};

const test = () => {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
