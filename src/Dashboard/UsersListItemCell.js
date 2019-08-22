import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_THEME} from '../../GlobalConstants/Constants';

class UsersListItemCell extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.pushToUserDetailScreen(item)}>
          <Text style={styles.rowHeaderText}>
            {item.firstname} {item.lastname}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 61,
    flexDirection: 'row',
    backgroundColor: APP_THEME.APP_BASE_COLOR,
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowHeaderText: {
    flexWrap: 'wrap',
    fontSize: 16,
    color: APP_THEME.APP_COLOR_TEXT,
  },
});

export default UsersListItemCell;
