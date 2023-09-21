import React from "react";
import Lottie from 'lottie-react-native';

function Error() {
  return <Lottie style={{flex: 1}} source={require("../../assets/error.json")} autoPlay loop />;
}

export default Error;
