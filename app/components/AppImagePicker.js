import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import Screen from './Screen';
import { AppButton } from './forms';

function AppImagePicker(props) {
    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        // const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATIONS);
        // same as below
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) alert('You need to enable permission to access library');
    };

    const selectedImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                setImageUri(result.uri);
            }

        } catch (error) {
            console.log('Error loading image', error);
        }
    }

    useEffect(() => {
        requestPermission();
    }, []);

    return <Screen>
        <AppButton title="Select Image" onPress={selectedImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>;
}

export default AppImagePicker;
