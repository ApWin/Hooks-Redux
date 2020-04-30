import  React from 'react';
import {StyleSheet, View, Text}  from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';


const CategoryMealScreen = props  => {
    const catID = props.navigation.getParam('categoryID');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

   const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID)>=0);

    if ( displayedMeals.length ===0 ){

        return (
            <View style={styles.screen}>
                <Text> Meals not found ! Maybe check your filters ?  </Text>
            </View>
        )

    }

    return(
     <MealList listData={displayedMeals} navigation={props.navigation}  />
    )
};

CategoryMealScreen.navigationOptions = navigationData =>{
    const catID = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(cat => cat.id ===catID)

    return{
        headerTitle: selectedCategory.title,

}};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15
    }
});
export default CategoryMealScreen;
