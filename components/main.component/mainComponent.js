import React from 'react';
import Directory from '../directory.component/directory.component'
import CampsiteInfo from '../infoComponent/campsiteInfo.component'
import { View, Platform } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

const Directorynavigator = createStackNavigator(
    {
        Directory:{ screen: Directory},
        CampsiteInfo:{ screen: CampsiteInfo}
    },
    {
        initialRouteName: 'Directory',

        defaultNavigationOptions: {

            headerStyle:{
                backgroundColor:'#5637DD'
            },

            headerTintColor:'#fff',
            headerTitleStyle: {
                color:'#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(Directorynavigator);

class Main extends React.Component {
    render(){
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        )
    }
}

export default Main