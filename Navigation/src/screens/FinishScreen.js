import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { BackHandler } from 'react-native-web';

const FinishScreen = () => {
    return (
        <View>
            <Text style={[styles.textStyle, styles.blue]}>정답</Text>
            <Text style={styles.textStyle}>welcome to react world.
            </Text>
            <Text style={[styles.textStyle, styles.blue]}>해석</Text>
            <Text style={styles.textStyle}>리액트 세계에 어서오세요.</Text>
            <Button
                title="Finish"
            />
            <Text style={styles.commentStyle}>앱 종료 구현 x</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        margin: 30,
        fontSize: 20,
    },
    commentStyle: {
        textAlign: 'center',
        color: 'gray',
        margin: 10,
        fontSize: 15,
    },
    blue: {
        color: "blue",
    }
});

export default FinishScreen;