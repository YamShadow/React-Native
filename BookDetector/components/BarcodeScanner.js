import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import "../actions/index";
import { BarCodeScanner, Permissions } from "expo";
import { storeISBN } from "../actions/index";

class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log("ISBN: " + data);
    this.props.storeISBN(data);
    console.log(this.store);
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    storeISBN: isbn => {
      dispatch(storeISBN(isbn));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarcodeScanner);
