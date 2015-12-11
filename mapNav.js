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
		backgroundColor: '#eeffcc',
		flex:1,
	},
	listView: {
		marginTop: 65,
		marginBottom: 0
	},
});

var mapView = React.createClass({
	render:function(){

		return <View style={Style.container}></View>


	},
});
module.exports = mapView;
