import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { PictureDispatchContext } from "../../api/context";
import { insertTileIntoDB } from "../../api/api_utils";

export default function CameraScreen({ navigation }) {
  const setPicture = useContext(PictureDispatchContext);

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const options = {
    quality: 0.5,
    base64: true,
    skipProcessing: true,
    onPictureSaved: this.onPictureSaved
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync(options);
    }
  };

  onPictureSaved = (photo) => {
    insertTileIntoDB(photo.base64);
    // setPicture(photo);
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.pop()} style={styles.xiconContainer}>
        <AntDesign name="close" size={30} color="lightgray" />
      </Pressable>

      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          this.camera = ref;
        }}
      ></Camera>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={this.takePicture}>
          <FontAwesome name="circle-thin" size={100} color="lightgray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    marginBottom: -122,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  xiconContainer: {
    zIndex: 4,
    padding: 25,
    paddingVertical: 35,
    position: "absolute",
    top: 10,
  },
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    paddingBottom: 20,
  },
});
