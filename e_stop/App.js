/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  TouchableOpacity, 
  Text
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle:
            (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>E - Stop</Text>
            </View>),
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: 'green',
            borderBottomWidth: 0,
            elevation: 0,
        },
        headerTitleStyle: {
            color: 'green'
        },
        headerTintColor: colors.MENU_ICON_COLOR,
        headerLeftContainerStyle: {
            paddingLeft: 5
        },
        headerRight: (
            <View />
        )
    };
}

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {/* <ScrollView> */}
            <View>
              <Image
                  source={require('./assets/stop.png')}
                  style={{resizeMode: 'contain', width: '100%'}}
              />
               {/* <View style={{ alignSelf: "center", justifyContent: "center", backgroundColor: 'green', width: 150, height: 40, margin: 30, borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => 'this.props.navigation.navigate()'}>
                                    <Text style={{ color: 'white', alignSelf: "center", fontSize: 20, fontWeight: '600' }}>Next</Text>
                                </TouchableOpacity>
                            </View> */}
            </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

