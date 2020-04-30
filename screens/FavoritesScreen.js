import  React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MealList from '../components/MealList';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const FavoritesScreen = props  => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length ===0 || !favMeals){
        return (
            <View style={styles.container}>
                <Text> No favorite  meals found. Start adding some !</Text>
            </View>
        )
    }


    return(
     <MealList listData={favMeals} navigation={props.navigation} />
    )
};

FavoritesScreen.navigationOptions = (navData) => {
    return{
        headerTitle:'Your Favorites',
        headerLeft: (
            <View style={{marginLeft: 10}}>
                <TouchableOpacity onPress={()=>{
                    navData.navigation.toggleDrawer()
                }}>
                    <Icon name='ios-menu' color='white'  size={30}/>
                </TouchableOpacity>
            </View>

        )
    }
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavoritesScreen;
