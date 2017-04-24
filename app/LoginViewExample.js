/**
 * Created by momo on 2017/4/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {View,ScrollView,Text,StyleSheet,ListView,Image} from 'react-native';

import {NavigationPage,ListRow,Label,Input} from 'teaset'

export default class LoginViewExample extends NavigationPage{
    static defaultProps = {
        ...NavigationPage.defaultProps,
        title:'登录界面',
        showBackButton:true,
    };
    renderPage(){
        return (
            <ScrollView style={{flex:1,backgroundColor:'#FFF'}}>
                <View style={{flex:1}}><Image style={{width:200,height:50}} source={{uri:'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/21.png'}}/></View>
                <ListRow title='             用户名：'detail={<Input style={{width: 400,marginRight:100}} size='md' value={this.state.valueMD} onChangeText={text => this.setState({valueMD: text})}/>} topSeparator='full'/>
            </ScrollView>
        );
    }
}