import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {SECOND} from '../Actions/SecondPageActions';


class SecondPage extends PureComponent {
    static navigationOptions = {
        title:'第二'
    };

    // ES6 props
    static defaultProps={
        secondState:'默认',
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>{this.props.secondState}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});
const mapStateToProps = (store)=>({
     secondState:store.FirstPageReducer.secondState
});
export default connect(mapStateToProps)(SecondPage);
