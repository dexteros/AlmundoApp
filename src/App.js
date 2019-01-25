import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainView from './views/MainView';
import DetailView from './views/DetailView';


//Enrutador
const AppNavigator = createStackNavigator(
    {
      Home: MainView,
      Details:{
        screen: DetailView,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.title}`,
        }),
      }
    },
    {
      initialRouteName: "Home"
    }
  );

const AppContainer = createAppContainer(AppNavigator);
//Modulo Padre
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
