import  React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props =>{
    return(
        <View style={styles.filterContainer}>
            <Text style={styles.label}> {props.label} </Text>
            <Switch
                value={props.state}
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Colors.primaryColor}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FiltersScreen = props  => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch( )

    const saveFilters = useCallback(()=>{
        const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegetarian:isVegetarian
        };

     dispatch(setFilters(appliedFilters));     //Shu joyidan Reducerga olib bersa kk !!! ?????

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(()=>{
        navigation.setParams({save: saveFilters})
    }, [saveFilters])


    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions </Text>
           <FilterSwitch
               label='Gluten-free'
               state={isGlutenFree}
               onChange={newValue => setIsGlutenFree(newValue)}
           />
            <FilterSwitch
                label='Lactose-free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />

        </View>
    )
};

FiltersScreen.navigationOptions = (navData) => {
    return{
        headerTitle:'Filtered Meals',
        headerLeft: (
            <View style={{marginLeft: 10}}>
                <TouchableOpacity onPress={()=>{
                    navData.navigation.toggleDrawer()
                }}>
                    <Icon name='ios-menu' color='white'  size={30}/>
                </TouchableOpacity>
            </View>
        ),
        headerRight:(
          <View style={{marginRight:10}}>
              <TouchableOpacity onPress={navData.navigation.getParam('save')} >
                  <Icon name='ios-save' size={30} color='white' />
              </TouchableOpacity>
          </View>
        )
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
        marginVertical:10
    },
    label:{
        fontSize: 17
    }
});
export default FiltersScreen;
