import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {APP_THEME} from '../../GlobalConstants/Constants';

class UserDetail extends Component {
  render() {
    const {
      state: {
        params: {address, bio, email, firstname, hobbies, lastname, zip},
      },
    } = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.mainView}>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              Name : {firstname} {lastname}
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>Email: {email}</Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>Address: {address}</Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>Bio : {bio}</Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>Hobbies: {hobbies}</Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>ZIP: {zip}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: APP_THEME.APP_BASE_COLOR},
  mainView: {
    flex: 1,
  },
  subView: {
    margin: 10,
  },
  dataText: {
    flexWrap: 'wrap',
    fontSize: 16,
    color: APP_THEME.APP_COLOR_TEXT,
  },
});

export default UserDetail;
