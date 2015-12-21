'use strict';
var React = require('react-native');
var Saf = require('react-native-safari-view');
var CusView = require('./UICom/CustomView');
var CalView = require('./UICom/calendarView');


var {
	Text,
	View,
	TouchableHighlight,
	ScrollView,
} = React;

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex:1,
		flexDirection:'column',
	},
	item_style:{

		height:60,
		alignItems:'center',
		justifyContent:'center',
		borderColor:'#f00',
		borderWidth:1,
		borderRadius:5,
		marginTop:10,
	},
	font_16:{
		flex:1,
		fontSize:16,
		fontWeight:'bold',
	},


});

var mapView = React.createClass({

	componentDidMount:function(){

	},
	render:function(){

		return (<ScrollView style={Style.container}>

					<View style={Style.item_style}>

						<TouchableHighlight underlayColor='#fff' onPress={this.btnClick}>
							<Text style={Style.font_16}>WebView 使用</Text>
						</TouchableHighlight>

					</View>

					<View style={Style.item_style}>

						<TouchableHighlight underlayColor='#fff' onPress={this._customComponentClick}>
							<Text style={Style.font_16}>map函数使用</Text>
						</TouchableHighlight>

					</View>

					<View style={Style.item_style}>

						<TouchableHighlight underlayColor='#fff' onPress={this._calendarClick}>
							<Text style={Style.font_16}>日历组件</Text>
						</TouchableHighlight>

					</View>

		       </ScrollView>
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

	},
	_customComponentClick(){
		
		this.props.navigator.push({
			title:'自定义组件',
			component:CusView,
		})

	},
	_calendarClick(){

			this.props.navigator.push({
			title:'日历',
			component:CalView,
		})

	},
	

});
module.exports = mapView;
