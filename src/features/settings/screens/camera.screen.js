import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../components/camera.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const snap = () => {
    if (cameraRef) {
      cameraRef.current.takePictureAsync().then(onSavePicture);
    }
  };

  const onSavePicture = ({ uri }) => {
    AsyncStorage.setItem(`${user.uid}-photo`, uri);
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted");
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ratio={"16:9"}
        onCameraReady={() => snap}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-android" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={snap} style={styles.button}>
            <MaterialIcons name="camera-alt" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
