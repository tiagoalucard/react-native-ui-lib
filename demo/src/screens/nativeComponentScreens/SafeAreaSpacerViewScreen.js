import React, {PureComponent} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Text, View, Colors, SafeAreaSpacerView} from 'react-native-ui-lib'; //eslint-disable-line

export default class SafeAreaSpacerViewScreen extends PureComponent {

  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <View flex>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View paddingH-25 center>
            <Text text50 center>
              {'When there are absolute-positioned view at the bottom and top, it is sometimes hard or impossible to change the layout and avoid it.'}
              <Text red50> SafeAreaSpacerView </Text>
              {'can be used as a BOTTOM or TOP spacer and will get the height of the safe area insets'}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.topView}>
          <SafeAreaSpacerView spacerType={SafeAreaSpacerView.type.TOP}/>
          <Text>{'This is an absolute position top view'}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text>{'This is an absolute position bottom view'}</Text>
          <SafeAreaSpacerView/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});