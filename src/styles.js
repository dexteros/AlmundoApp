import { StyleSheet } from 'react-native';
import { COLOR } from './config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:COLOR.TEXT_PRIMARY
  },
  instructions: {
    textAlign: 'center',
    color: COLOR.TEXT_PRIMARY,
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 20
  }
});
