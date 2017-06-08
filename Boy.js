/**
 * Created by wtao on 2017/6/7.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    View,
    Text
}from 'react-native';
import Girl from './Girl';

export default class Boy extends Component{
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am Good Boy!</Text>
                <Text style={styles.text} onPress={()=>{
                    this.props.navigator.push({
                       component:Girl,
                        params:{
                            word:'一朵玫瑰花',
                            onCallBack:(word)=>{
                                this.setState({
                                    word:word
                                })
                            }
                        }
                    })
                }}>我要送女孩一朵玫瑰花</Text>
                <Text style={styles.text}>我收到女孩送的礼物:{this.state.word}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:14
    }

})
