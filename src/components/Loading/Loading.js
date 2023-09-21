import React from "react";
import Lottie from 'lottie-react-native';

function Loading() {
    return <Lottie style={{flex: 1}} source={require("../../assets/loading.json")} autoPlay loop/>;
}

export default Loading;
