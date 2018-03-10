import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import {connect} from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers,
    TabNavigator,
} from 'react-navigation';

import {addListener} from '../store';
class NavigatorPages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}

            />
        )
    }
}



const Tab = TabNavigator({
    page1: {
        screen: FirstPage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '苹果233',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    source={focused ?  require('../../image/one_selected.png') : require('../../image/one.png')}
                    style={{ width: 25, height: 25 }}
                />
            )
        }),
    },
    page2: {
        screen: SecondPage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '安卓',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    source={focused ? require('../../image/two_selected.png') : require('../../image/two.png') }
                    style={{ width: 25, height: 25 }}
                />
            )
        }),
    },


},{
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition:'bottom',
    lazy: false,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#979797',
        inactiveTintColor: '#979797',
        style: { backgroundColor: '#ffffff' },
    }
});

export const SimpleAppNavigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    page1 : {
        screen: FirstPage,
    },
    page2 : {
        screen: SecondPage
    },
});




const mapStateToProps = (store)=>({
    nav : store.TabNavigatorReducer,
});


export default connect(mapStateToProps)(NavigatorPages);