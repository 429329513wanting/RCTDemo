'use strict';
var React = require('react-native');
var Saf = require('react-native-safari-view');

var {
	Text,
	View,
	ActivityIndicatorIOS,
	TouchableHighlight,
} = React;

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'column',
	},


});

var mapView = React.createClass({

	componentDidMount:function(){

	},
	render:function(){

		return (<View style={Style.container}>

					<TouchableHighlight underlayColor='#fff' onPress={this.btnClick}>
							<Text style={{fontSize:20,fontWeight:'bold',marginTop:20,}}>打开网址</Text>
					</TouchableHighlight>

		       </View>
		       )


	},
	btnClick(){
		
    Saf.isAvailable()
      .then(Saf.show({
        url: "https://www.baidu.com"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
        console.error(error)
      });

	}
});
module.exports = mapView;
