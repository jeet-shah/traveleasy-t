import React, { Component } from 'react';
import { Header,Icon } from 'react-native-elements';

export default class MyHeaderDate extends Component{

    render(){
        return(
            <Header
                centerComponent={{ text: this.props.title, style: { color: 'black', fontSize:20,fontWeight:"bold", } }}
                backgroundColor = "#eaf8fe"
                rightComponent={ <Icon size={40} color='#696969' name='shopping-cart' type='font-awesome' onPress={()=>{this.props.navigation.navigate('Cart')}} /> }
            />
        )
    }
}