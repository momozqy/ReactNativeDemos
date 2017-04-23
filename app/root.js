/**
 * Created by MoMo on 2017/4/23.
 */
import  React from 'react';
import {View,Text,StyleSheet,ListView,Image} from 'react-native';
export default class Root extends React.Component{
    constructor(props){
        super(props);
        let movies = [
            {title:'肖生克的救赎'},
            {title:'肖生克的救'},
            {title:'肖生克的'},
            {title:'肖生克'},
            {title:'肖生'}
        ];
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (r1,r2) => r1 !== r2
            }),
            loaded:false
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
    render(){
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