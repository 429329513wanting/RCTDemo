'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView,
	ActivityIndicatorIOS
} = React;

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#ff00ff',
		flex:1,
	},
	lab:{
		fontSize:18,
		color:'#ffeeff',
		alignSelf:'center',
	}
});

var moreView = React.createClass({
	render:function(){

	    return (

		    <View style={Style.container}>
		        <Text style={Style.lab}>hello world</Text>


			</View>

    );


	},
});
module.exports = moreView;
