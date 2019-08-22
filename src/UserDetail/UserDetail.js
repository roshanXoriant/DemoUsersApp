import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import {APP_THEME, LOCALIZE_STRINGS} from '../../GlobalConstants/Constants';

class UserDetail extends Component {
  render() {
    const {
      state: {
        params: {address, bio, email, firstname, hobbies, lastname, zip},
      },
    } = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.mainView}>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.NAME} :{' '}
              <Text style={styles.valueText}>
                {firstname} {lastname}
              </Text>
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.EMAIL}:{' '}
              <Text style={styles.valueText}>{email}</Text>
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.ADDRESS} :{' '}
              <Text style={styles.valueText}>{address}</Text>
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.ZIP}:{' '}
              <Text style={styles.valueText}>{zip}</Text>
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.HOBBIES} :{' '}
              <Text style={styles.valueText}>{hobbies}</Text>
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.dataText}>
              {LOCALIZE_STRINGS.BIO} :{' '}
              <Text style={styles.valueText}>{bio}</Text>
            </Text>
          </View>
        </ScrollView>
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  dataText: {
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: APP_THEME.APP_COLOR_TITLE,
  },
  valueText: {
    flexWrap: 'wrap',
    fontSize: 12,
    textAlign: 'left',
    color: APP_THEME.APP_COLOR_VALUE,
  },
});

export default UserDetail;
