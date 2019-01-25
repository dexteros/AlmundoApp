import { StyleSheet } from 'react-native';
import { COLOR } from './config/colors';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
  },


  itembox_container:{
    flex: 1,
    backgroundColor: 'steelblue',
    width: 200,
    height: 200,
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'stretch',
  },

  bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },

  instructions: {
    textAlign: 'center',
    color: COLOR.TEXT_PRIMARY,
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 10,
  },
});
