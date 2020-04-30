import  React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity}  from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors';

const CategoriesScreen = props  => {

    const renderGridItem = (itemData) => {
        return(
           <CategoryGridTile
           title={itemData.item.title}
           color={itemData.item.color}
           onSelect={()=>{
               props.navigation.navigate({
                   routeName:'CategoryMeals',
                   params:{
                       categoryID: itemData.item.id
                   }
               })
           }}
           />
        )
    }
    return(
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    )
};

CategoriesScreen.navigationOptions = (navData) => {
 return{
     headerTitle:'Meal Categories',
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
    },
    menuButton:{
        marginLeft:5
    }
});
export default CategoriesScreen;
