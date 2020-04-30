import { createStackNavigator,  createAppContainer, createDrawerNavigator } from 'react-navigation';
import React from 'react';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions ={
    headerStyle:{
        backgroundColor:Colors.primaryColor
    },
    headerTintColor:'white',
    headerTitle:'A Screen'
};

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,

   CategoryMeals:{
        screen: CategoryMealScreen
   },
    MealDetail:MealDetailScreen

}, {
        defaultNavigationOptions:defaultStackNavOptions
    });

 const FavNavigator = createStackNavigator({
   Favorites: FavoritesScreen,
   MealDetail: MealDetailScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
});

const tabScreenConfig = {
    Meal: {
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return <Icon name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.primaryColor
        }
    },

    Favorites: {
        screen:FavNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return <Icon name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig,{
    activeTintColor:'white',
    shifting:true
});

const FiltersNavigator = createStackNavigator({
    Filters:FiltersScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filter:{
        screen:FiltersNavigator,
            navigationOptions:{
                drawerLabel: 'Filtered Meals'
            }

    }
},{
    contentOptions:{
        activeTintColor:Colors.accentColor
    }
})


export default createAppContainer(MainNavigator);
