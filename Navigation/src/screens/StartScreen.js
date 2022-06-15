import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const StartScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.textStyle}>영어 공부 시작!</Text>
            <Button
                onPress={()=>{navigation.navigate("Speaking")}}
                title="Start"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        margin: 30,
        fontSize: 20,
    },
    blue: {
        color: "blue",
    }
});

export default StartScreen;