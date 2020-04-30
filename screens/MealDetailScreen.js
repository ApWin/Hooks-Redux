import  React, { useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {useDispatch, useSelector} from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
import Icon from 'react-native-vector-icons/Ionicons';

const MealDetailScreen = props  => {

    const availableMeals = useSelector(state => state.meals.meals);
    const mealID = props.navigation.getParam('mealID');
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealID))
    const selectedMeal = availableMeals.find(meal => meal.id===mealID);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(mealID));
    }, [dispatch, mealID]);

    useEffect(() => {
       props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [ toggleFavoriteHandler ]);

    useEffect(()=>{
        props.navigation.setParams({isFav: currentMealIsFavorite});
    },[currentMealIsFavorite]);

    return(
      <ScrollView>
          <Image source={{uri:selectedMeal.imageUrl}}  style={styles.image}/>
          <View style={styles.details}>
              <DefaultText>{selectedMeal.duration} m</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
          </View>
          <Text style={styles.title}>Ingredients</Text>
          {
              selectedMeal.ingredients.map(ingredient => (
                  <Text style={styles.ingredient} key={ingredient}>{ingredient}</Text>
              ))
          }
          <Text style={styles.title}>Steps</Text>
          {
              selectedMeal.steps.map(step => (
                  <Text style={styles.step} key={step}>{step}</Text>
              ))
          }
      </ScrollView>
    )
};

MealDetailScreen.navigationOptions = navigationData =>{


  //  const mealID = navigationData.navigation.getParam('mealID');

    const mealTitle = navigationData.navigation.getParam('mealTitle');

    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');
   // const selectedMeal = MEALS.find(meal => meal.id === mealID);

    return{
        headerTitle: mealTitle,
        headerRight:(
            <View style={{marginRight:10}}>
                <TouchableOpacity onPress={toggleFavorite} >
                    <Icon name={ isFavorite ? 'ios-star' : 'ios-star-outline'} size={30} color='white' />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   image:{
       width:'100%',
       height:200
   },
    details:{
       flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
       fontSize:25,
        textAlign:'center'
    },
    ingredient:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding: 10
    },
    step:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding: 10
    }
});
export default MealDetailScreen;
