'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView,
	Image,
	ActivityIndicatorIOS,
	TouchableHighlight,

} = React;


var listView = React.createClass({
	render:function(){
		return (
			<View style={styles.containter}></View>
	 );
	}
});

var styles = React.StyleSheet.create({

	containter:{
		flex:1,
		backgroundColor:'#ffeeff',
	},
});
module.exports = listView;
