import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SpeakingScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.textStyle}>영어 문장을 따라 말하세요.</Text>
            <TouchableOpacity>
                <Text style={[styles.textStyle, styles.blue]}>
                    듣기
                    <Ionicons name="play" size={20} color="blue" />
                </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>(사용자의 대답 위치)</Text>
            <Text style={styles.commentStyle}>정확하게 스피킹하면 다음 화면으로 전환</Text>
            <Text style={styles.commentStyle}>구현 x, 대신 버튼으로 화면 이동</Text>
            <Button 
                onPress={()=>{navigation.navigate("Finish")}}
                title="move"/>
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

export default SpeakingScreen;