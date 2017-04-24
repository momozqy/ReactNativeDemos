/**
 * Created by momo on 2017/4/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {View,Text,StyleSheet,ListView,Image} from 'react-native';
import {NavigationPage} from 'teaset'
export  default  class ListViewExample extends NavigationPage{
    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: 'ListView 原生使用',
        showBackButton: true,
    };
    constructor(props){
        super(props);
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (r1,r2) => r1 !== r2
            }),
            loaded:false,
            isFocused: false,
        };
        this.fetchData();
    }
    fetchData(){
        fetch('https://api.douban.com/v2/movie/top250').then(response => response.json()).then(
            responseData => {
                this.setState({
                    movies : this.state.movies.cloneWithRows(responseData.subjects),
                    loaded : true
                })
            }
        ).done();
    }
    moviesListRow(movie){
        return (
            <View style={styles.item}>
                <View style={styles.itemImage}><Image
                    source={{uri:movie.images.large}}
                    style={styles.image}
                /></View>
                <View style={styles.itemContent}><Text>{movie.title}</Text></View>
            </View>
        );
    }
    renderPage(){
        if(!this.state.loaded){
                return (
                    <View style={styles.container}>
                        <View style={styles.loading}>
                            <Text style={styles.loadingText}>...加载中...</Text>
                        </View>
                    </View>
                )
        }
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.movies}
                          renderRow={this.moviesListRow}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row'
    },
    loading:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:90,
        height:120
    },
    itemContent:{

    },
    loadingText:{
        fontSize: 100,
        fontWeight: '600'
    },
    container:{
        flex:1,
        backgroundColor: '#EBD3E8'
    }
});