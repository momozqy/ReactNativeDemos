/**
 * Created by MoMo on 2017/4/23.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {ScrollView,View} from 'react-native';
import {NavigationPage,NavigationBar, ListRow} from 'teaset';
import ListViewExample from './ListViewExample';
import LoginViewExample from './LoginViewExample';
import MainViewExample from './MainViewExample';
export default class Root extends NavigationPage{
    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: 'React Native Demos',
    };
    renderPage(){
        return (
            <ScrollView style={{flex:1}}>
                <View style={{height: 20}} />
                <ListRow title='ListView' detail='原生ListView的使用' onPress={() => this.navigator.push({view: <ListViewExample />})} topSeparator='full' />
                <ListRow title='LoginView' detail='登录界面' onPress={() => this.navigator.push({view: <LoginViewExample />})}/>
                <ListRow title='TabView' detail='TabView展示' onPress={() => this.navigator.push({view: <MainViewExample />})}/>
            </ScrollView>
        );
    }
}