import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {exp} from 'react-native-reanimated';

const CategoryGridTile = props =>{
    return(
    <View style={styles.gridItem}>
        <TouchableNativeFeedback style={{flex:1}} onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        elevation:5,
        overflow:'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        justifyContent:'flex-end',
        shadowColor:'black',
        padding:15,
        alignItems:'flex-end'
    },
    title:{
        fontSize:19,
        textAlign:'right'
    }
});
export default CategoryGridTile;
