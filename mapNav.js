'use strict';
var React = require('react-native');
var Saf = require('react-native-safari-view');
var CusView = require('./UICom/CustomView');
var CalView = require('./UICom/calendarView');
var DBView = require('./views/queryDBView');
var isClick = false;



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

	getInitialState:function(){

		return {isClick:false}
	},

	componentWillMount:function(){//将要插入真实dom
		console.log('will mount');

	},
	componentDidMount:function(){//已经插入
		console.log('did mount');


	},
	componentWillUnmount:function(){//将要移出真实dom
		console.log('will uncomount');


	},
	componentWillUpdate:function(nextProps,nextState){//将要重新渲染
		console.log('将要重新渲染');


	},
	componentDidUpdate:function(prevProps,prevState){//已经重新渲染
		console.log('已经重新重新渲染');

	},

	componentWillReceiveProps:function(nextProps){

		 console.log('已经加载组件收到新的参数时调用');

	},
	// shouldComponentUpdate:function(nextProps,nextState){
	// 	 console.log('组件判断是否重新渲染时调用');
	// 	 return nextProps.id !== this.props.id;


	// },





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
					<View style={Style.item_style}>

						<TouchableHighlight underlayColor='#fff' onPress={this._update}>
							<Text style={Style.font_16}>{this.state.isClick?'clicked':'state改变刷新界面'}</Text>
						</TouchableHighlight>

					</View>

					<View style={Style.item_style}>

						<TouchableHighlight underlayColor='#fff' onPress={this._gotoDBView}>
							<Text style={Style.font_16}>数据库读取</Text>
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

	_update(){


        isClick = !isClick;

		this.setState({isClick:isClick});
	},
	_gotoDBView(){

		this.props.navigator.push({
			title:'读取数据',
			component:DBView,
		});


	},
	

});
module.exports = mapView;
