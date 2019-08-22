import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {
  WEBSERICE_URL,
  WEBSERVICE_METHODS,
  APP_THEME,
  APP_ROUTE,
} from '../../GlobalConstants/Constants';
import UsersListItemCell from './UsersListItemCell';

class Dashboard extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const URL = `${WEBSERICE_URL}${WEBSERVICE_METHODS.GET_ALL_USERS}`;
    try {
      let response = await fetch(URL);
      let responseJson = await response.json();
      this.setState({users: responseJson.users});
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  pushToUserDetailScreen = user => {
    this.props.navigation.navigate(APP_ROUTE.USERDETAIL, user);
  };

  _keyExtractor = (item, index) => `${item.guid}`;

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.mainView}>
          <FlatList
            data={this.state.users}
            style={{flex: 1, paddingLeft: 15, paddingRight: 15}}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => (
              <UsersListItemCell
                item={item}
                pushToUserDetailScreen={this.pushToUserDetailScreen}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: APP_THEME.APP_BASE_COLOR},
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Dashboard;
