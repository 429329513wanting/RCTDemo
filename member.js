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
		backgroundColor: '#fff',
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listView: {
		marginTop: 65,
		marginBottom: 0
	},
});

var memberView = React.createClass({
	render:function(){

		return (<View style={Style.container}>
					<Text style={{fontSize:20}}> 敬请期待 </Text>
		       </View>
		       )


	},
});
module.exports = memberView;
