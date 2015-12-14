'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ActivityIndicatorIOS
} = React;

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},

});

var mapView = React.createClass({
	render:function(){

		return (<View style={Style.container}>
					<Text style={{fontSize:20}}> 敬请期待 </Text>

		       </View>
		       )


	},
});
module.exports = mapView;
