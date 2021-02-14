import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const MealItem = ({ itemData }) => (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: itemData.thumbnail }} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{itemData.title}</Text>
            <Text style={styles.text}>{itemData.ingredients}</Text>
        </View>
    </View>
);

export default MealItem;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        padding: 12
    },
    imageContainer: {
        flex: 0.25,
        height: 110,
        width: 110
    },
    image: {
        minWidth: '100%',
        minHeight: '100%'
    },
    textContainer: {
        flex: 0.75,
        flexDirection: 'column'
    },
    text: {
        padding: 0.2
    }
});