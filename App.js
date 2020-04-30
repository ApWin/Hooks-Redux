import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MealsNavigator from './Navigation/MealsNavigators';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  meals : mealsReducer
});
let store = createStore(rootReducer);

const App = () => {
  return (
      <Provider store={store}>
        <MealsNavigator/>
      </Provider>
  )

};

const styles = StyleSheet.create({
container:{
  textAlign:'center'
}
});

export default App;
