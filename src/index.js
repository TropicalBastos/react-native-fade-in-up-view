import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class FadeInUpView extends Component{

    constructor(props){
        super(props);
        this.duration = (props.duration) ? props.duration: 1000;
        this.position = (props.position) ? props.position: 100;
        this.state = {
            opacity: new Animated.Value(0),
            position: new Animated.Value(this.position)
        }
    }

    componentDidMount(){
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: this.duration
        }).start();
        Animated.timing(this.state.position, {
            toValue: 0,
            duration: this.duration
        }).start();
    }

    render(){
        return(
            <Animated.View style={[
                {opacity: this.state.opacity,
                top: this.state.position},
                this.props.style
            ]}>
                {this.props.children}
            </Animated.View>
        );
    }

}