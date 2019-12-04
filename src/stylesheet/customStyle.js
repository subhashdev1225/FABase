import {StyleSheet} from 'react-native'


export default StyleSheet.create ( {

fieldheading: {
    fontSize: 25,
    textAlign :'center'
  },
fieldInput: {
    marginLeft : 40,
    marginRight : 40
  },

  parentView :{
    height : '30%',
    //backgroundColor:'white',
  },

  logoContainer: {
  },
  logo: {
  width : 150,
  height: 150
  },
  fieldlogo: {
    width : 20,
    height: 20
    },
  baseContainer: {
    flex: 1,
    marginTop: 10,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingLeft :2,
    paddingRight:2
  },
  text: {
    fontSize: 20,
  },
  headerText: {
    paddingBottom : 10,
    paddingTop : 10,
    fontSize: 20,
    backgroundColor : '#fff'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
customView :{
  justifyContent : 'center',
  borderColor: '#fff',
  borderWidth : 2,
  backgroundColor : 'rgba(255,255,255,0.1)',
paddingBottom : 30

},
bgStyle: {
  paddingLeft: 10,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',

}



})