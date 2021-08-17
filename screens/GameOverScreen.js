import React from 'react';
import {View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>{props.roundsNumber === 1 ? 'Lucky Guess...' : 'The Game is Over!'}</TitleText>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image} />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text>
            rounds to guess number <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>New GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;