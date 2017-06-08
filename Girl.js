/**
 * Created by wtao on 2017/6/7.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text
}from 'react-native';

export default class Girl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text >I am a Good Girl!></Text>
                <Text>我收到男孩送的礼物:{this.props.word}</Text>
                <Text onPress={()=>{
                    this.props.navigator.pop();
                    this.props.onCallBack('一盒巧克力')
                }}>我送给男孩一盒巧克力</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:14
    }

})
