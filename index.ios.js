/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  Text,
  View,
} = React;


// Import react-native-ibeacon module
var Beacons = require('react-native-ibeacon');

// Request for authorization while the app is open
Beacons.requestAlwaysAuthorization();

var region = {
  identifier: 'jaalee',
  uuid: 'C5893190-8A93-42EE-975B-F20080DD982B'  
};

Beacons.startRangingBeaconsInRegion(region);

var c2cble = React.createClass({
  getInitialState: function(){
    return {beacons:[]};
  },
  componentDidMount:function(){
    var _this = this;
    setTimeout(function(){
        DeviceEventEmitter.addListener(
        'beaconsDidRange',
        (data) => {
          _this.setState({
            beacons: data.beacons.filter(item => item.rssi < 0).map(item => item.rssi)
          });
        }
      );
    }, 2000);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to C2C BLE!
        </Text>
        <Text style={styles.beaconText}>
          {this.state.beacons.length > 0 ? 'Beacon Found' : 'Beacon Not Found'} 
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  beaconText: {
    color:'green',
    fontSize:30
  }
});

AppRegistry.registerComponent('c2cble', () => c2cble);
