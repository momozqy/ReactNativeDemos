/**
 * Created by momo on 2017/4/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {NavigationPage} from 'teaset';
import EditView from './component/EditView';
import LoginButton from './component/LoginButton';
import NetUtil from './utils/NetUtil';

export default class LoginViewExample extends NavigationPage{
    static defaultProps = {
        ...NavigationPage.defaultProps,
        title:'登录界面',
        showBackButton:true,
        userName:'',
        password:'',
    };
    render(){
        return (
            <View style={LoginStyles.loginview}>
                <StatusBar
                    backgroundColor='#ffffff01'
                    translucent={true}
                    hidden={false}
                    animated={true}
                />
                <Image style={{flex:1,alignItems:'center',justifyContent:'center',width:null,height:null}} source={require('./image/background.png')}>
                <View style={{flexDirection: 'row',height:100,width:100,marginTop:1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',}}>
                    <Image source={require('./image/logo.png')} style={{width:150,height:150}}/>
                </View>
             <View style={{marginTop:50,justifyContent:'center'}}>
                <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
                    this.userName = text;
                }}/>
                <EditView name='输入密码' ref='passwd' onChangeText={(text) => {
                    this.password = text;
                    this.refs.passwd.setState({
                        text:text,
                        secureText:true,
                    });
                }}/>
                <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
            </View>
                </Image>
            </View>
        );
    }
    componentDidMount() {
    }
    onPressCallback = () => {
        let formData = new FormData();
        formData.append("username",this.userName);
        formData.append("password",this.password);
        let url = "http://192.168.191.1:8082/taihu-web/platform/login/doLogin";
        NetUtil.postJson(url,formData,(responseJson) => {
            alert(responseJson.msg);
            this.onLoginSuccess();
        })
    }
    //跳转到第二个页面去
    onLoginSuccess(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'LoginSuccess',
                component : LoginSuccess,
            });
        }
    }
}
class loginLineView extends Component {
    render() {
        return (
            <Text >
                没有帐号
            </Text>
        );
    }
}

const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});