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

var LiView = require('./listView');
var MeatView = require('./meatListView');

var homeView = React.createClass({

	render:function(){

		return (

			<View style={Style.container}>

			    <View style={Style.top}>
			    <Image style={Style.top_image} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
			    </View>

			    <View style={Style.h_bottom}>

			         <View style={[Style.bottom_1,{flexDirection:'row'}]}>

			             <TouchableHighlight style={Style.button} underlayColor='#99d9f4'
			                 onPress={this.btn1Click}>

			             	  <Text style={{fontSize:25,color:'#000',}}>产品</Text>

			             </TouchableHighlight>
			             


			         </View>

			         <View style={[Style.bottom_2,{flexDirection:'row'}]}>

			             <TouchableHighlight style={Style.button} underlayColor='#99d9f4'
		    			 onPress={this.twoBtnClick}>

			             	  <Text style={{fontSize:25,color:'#000',}}>蔬菜</Text>

			             </TouchableHighlight>
			             

			         </View>

			    </View>


			</View>
	 );


	},
	btn1Click(){

		this.props.navigator.push({
        title: '测试列表',
        component: LiView,
        passProps: {type:'shu'}
      });
		
	},

	twoBtnClick(){

		this.props.navigator.push({
        title: '蔬菜列表',
        component: MeatView,
        passProps: {type:'meati'}
      });



	}


	
});

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex:1,
		flexDirection:'column'
	},
	top:{
		flex:1.3,
		flexDirection:'row',
		backgroundColor:'#cccfff',
		marginTop:64,
	},
	h_bottom:{
		flex:2,
		backgroundColor:'ffffff',
		marginTop:20,
		padding:10,
		flexDirection:'column',
		marginBottom:64,
	},
	top_image:{
		
		alignSelf:'center',
		width:400,
		height:350,

	},
	bottom_1:{

		flex:1,
	},
	bottom_2:{

		flex:1,
		marginTop:5,
		
	},
	button:{

		flex:1,
		justifyContent:'center',
		alignSelf:'stretch',
		alignItems:'center',
		justifyContent:'center',
		borderWidth:1,
		borderColor:'#cccccc',

	},
	

});
module.exports = homeView;
