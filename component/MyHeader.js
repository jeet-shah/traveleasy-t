import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';

export default class MyHeader extends Component{

    render(){
        return(
            <Header
                leftComponent={<Icon size={40} color='#696969' name='arrow-circle-left' type='font-awesome' onPress={()=>{this.props.navigation.navigate('Catalogue1')}} />}
                centerComponent={{ text: this.props.title, style: { color: 'black', fontSize:20,fontWeight:"bold", } }}
                rightComponent={<Icon size={40} color='#696969' name='shopping-cart' type='font-awesome' onPress={()=>{this.props.navigation.navigate('Cart')}} />}
                backgroundColor = "#eaf8fe"
            />
        )
    }
}