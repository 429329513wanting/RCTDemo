'use strict';
var React = require('react-native');
var Saf = require('react-native-safari-view');

var {
	Text,
	View,
	TouchableHighlight,
	ScrollView,
} = React;

var styles = React.StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
	},
	cell_style:{
		flex:1,
		height:60,
		marginTop:5,
		borderColor:'#ccc',
		borderWidth:1,
		flexDirection:'column',
		justifyContent:'center',
	},

	name_style:{

		flex:1,
		color:'#000',
		fontSize:18,
	},
	phone_style:{
		fontSize:14,
		position:'absolute',
		bottom:3,
		right:5,
	},
});

var Worker = React.createClass({
	render:function(){

		return(
				<View style={styles.cell_style}>

					<Text style={styles.name_style}>姓名:{this.props.name}</Text>
					<Text style={styles.phone_style}>电话:{this.props.phone}</Text>

				</View>
			)
	}
});

module.exports = React.createClass({
	getInitialState:function(){
		var data = [{
			name:"worker1",
			phone:"00000000000",
		},
		{
			name:"worker2",
			phone:"00000000001",
		},
		{
			name:"worker3",
			phone:"00000000002",
		},
		];
		return {workers:data};
	},

	render:function(){

		return(
				<ScrollView style={styles.container}>

					{this.state.workers.map(function(worker){
						return <Worker  name={worker.name} phone={worker.phone}></Worker>
					})}

				</ScrollView>

			)


	},

})