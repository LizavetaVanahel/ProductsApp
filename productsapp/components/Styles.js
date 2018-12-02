import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    borderRadius: 2,
    borderWidth: 2,
    width: 150,
    fontFamily: "vincHand",
    borderColor: '#CEDB56',
    backgroundColor: '#76cdd8',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontFamily: "vincHand",
    margin: 24,
    fontSize: 30,
    marginTop: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginFieldText: {
    fontFamily: "vincHand",
    margin: 24,
    fontSize: 20,
    marginTop: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
    backgroundColor: '#CCCCCC',
  },
  loginLogo: {
    height: 50,
    width: 50,
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 600,
  },
  productListContainer: {
    marginTop: 30,
    height:300,
    flexDirection: 'column',
    justifyContent:'space-between',
  },
  productParagraph: {
    fontFamily: "vincHand",
    fontSize: 15,
    height: 200,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  poductLogo: {
    alignItems: 'flex-start',
    height: 15,
    width: 15,
  },
  rightContainer: {
      paddingLeft: 250,
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  leftContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent:'flex-start',
  },
  productViewParagraph: {
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: "vincHand",
    flexDirection: 'row',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  productViewLogo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 15,
    width: 15,
  }
});