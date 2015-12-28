'use strict';
var React = require('react-native');
var SQLite = require('react-native-sqlite');
var GoodCell = require('./goodsCell');
var database = SQLite.open('iphone.sqlite');



var {
	Text,
	View,
	Image,
	TouchableHighlight,
	ListView,
} = React;

var styles = React.StyleSheet.create({
	container:{
		flex:1,
	},
	list:{
		flex:1,
	

	},

});

var quView = React.createClass({


	render:function() {

		if (!this.state.loaded) {

			return null;
		};

		return (

			<View style={styles.container}>

				<ListView style={styles.list} dataSource={this.state.dataSource}
				renderRow={this.renderCell}>

				</ListView>

			</View>

		);
		
	},

	getInitialState:function(){

		return {

			loaded:false,
			dataSource: new ListView.DataSource({
				rowHasChanged:(row1,row2) => row1 !== row2
			}),

		};
	},

	componentDidMount:function(){

		var results = [];
		database.executeSQL("select * from goods",[],(row) => {

			results.push(row);

		},(error) => {
			if (error) {

				throw error;

			} else {

				console.log("results:",results);

          		this.setState({loaded:true,dataSource: this.state.dataSource.cloneWithRows(results)});
			}

		})
   },

	renderCell: function(data){
		return (
				
				<GoodCell data={data}></GoodCell>

			);


	},

});
module.exports = quView;