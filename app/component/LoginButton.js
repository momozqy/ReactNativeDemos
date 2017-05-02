/**
 * Created by MoMo on 2017/4/24.
 */
import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback} style={LoginStyles.loginTextView}>
                <Image source={require('../image/loginbutton.png')} style={{alignItems:'center',justifyContent:'center',flexDirection: 'row',width:150,height:45,borderRadius:5}}>
                    <Text style={LoginStyles.loginText} >
                        {this.props.name}
                    </Text>
                </Image>
            </TouchableOpacity>
        );
    }
}
const LoginStyles = StyleSheet.create({

    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        width:30,
    },
    loginTextView: {
        marginTop: 10,
        height:45,
        width:220,
        borderRadius:5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
});