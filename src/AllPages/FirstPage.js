import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {ADD,SUB} from '../Actions/FirstPageActions';

class FirstPage extends PureComponent {

    static navigationOptions = {
        title:'首页',
    };
    // componentWillUpdate(){
    //     alert(this.props.status);
    //
    // }
    // componentDidUpdate(){
    //     alert(this.props.status);
    // }

    // ES6 props
    // static defaultProps={
    //     zglNum:0,
    // }



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.dispatch(ADD());
                    }}
                >
                    <Text style={styles.welcome}>
                        +
                    </Text>
                </TouchableOpacity>

                <Text style={styles.welcome}>
                    {this.props.zglNum}
                </Text>

                <TouchableOpacity
                    onPress={()=>{
                        this.props.dispatch(SUB());
                    }}
                >
                    <Text style={styles.welcome}>
                        -
                    </Text>
                </TouchableOpacity>
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
    zglNum: store.FirstPageReducer.zglNum    //数字
});
export default connect(mapStateToProps)(FirstPage);

