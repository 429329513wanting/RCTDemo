'use strict';
var React = require('react-native');
var Swiper = require('./UICom/Swiper');
var HomeView = require('./home');

var {
	Text,
	View,
	ScrollView,
	Image,
	TouchableHighlight,
} = React;



var moreView = React.createClass({
	render:function(){

	    return (

		    <ScrollView style={styles.container}>

		    	<Swiper style={{height:180}}></Swiper>

		    	<View style={styles.menu_container}>

		    		<View style={styles.menu_cell_container}>

		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>充值9.5折</Text>

		    			</View>

		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>套餐余量</Text>

		    			</View>

		    		    <View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>账单查询</Text>

		    			</View>


		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>订单查询</Text>

		    			</View>



		    		</View>


		    		<View style={styles.menu_cell_container}>

		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>流量订购</Text>

		    			</View>

		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>亲情网</Text>

		    			</View>

		    		    <View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>安心小号</Text>

		    			</View>


		    			<View style={styles.menu_cell}>

		    				<TouchableHighlight underlayColor='#fff' onPress={this.menuClick}>

		    					<Image style={styles.icon_style} source={require('image!2-3')}></Image>

		    				</TouchableHighlight>
		    				<Text style={styles.menu_text_style}>更多</Text>

		    			</View>



		    		</View>


		    	</View>

		    	<View style={{backgroundColor:'#eee',flex:1,height:5,top:5}}></View>
		    	<Text style={{fontSize:16,color:'#b4d7f7',top:10,left:10,height:30,}}>4G时代</Text>
		    	<View style={{backgroundColor:'#eee',flex:1,height:1,top:5}}></View>

		    	<View style={styles.fourG_timer}>

		    		<View style={{flex:2,borderColor:'#eee',borderWidth:1,flexDirection:'column'}}>
		    			<Text style={styles.text_font}>飞享套餐</Text>
		    			<Text style={styles.text_gray}>体验4G高速网络</Text>
		    			<Image style={styles.icon} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>

		    		</View>
		    		<View style={{flex:1,borderColor:'#eee',borderTopWidth:1,flexDirection:'column'}}>
		    			<Text style={[styles.text_font]}>流量钱包</Text>
		    			<Text style={styles.text_gray}></Text>
		    			<Image style={styles.icon_2} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>


		    		</View>
		    		<View style={{flex:1,borderColor:'#eee',borderLeftWidth:1,borderTopWidth:1}}>

		    			<Text style={[styles.text_font]}>话费券</Text>
		    			<Text style={styles.text_gray}></Text>
		    			<Image style={styles.icon_2} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>

		    		</View>



		    	</View>


		    	<View style={styles.fourG_timer}>

		    		<View style={{flex:1,borderColor:'#eee',borderLeftWidth:1}}>

		    			<Text style={[styles.text_font]}>流量加油</Text>
		    			<Text style={styles.text_gray}>最多敢送100M</Text>
		    			<Image style={styles.icon} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>

		    		</View>

		    		<View style={{flex:1,borderColor:'#eee',borderLeftWidth:1,borderTopWidth:1}}>

		    			<Text style={[styles.text_font]}>靓号自选</Text>
		    			<Text style={styles.text_gray}>号码开户预约</Text>
		    			<Image style={styles.icon} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>

		    		</View>

		    	</View>

		    	<View style={{backgroundColor:'#eee',flex:1,height:5,}}></View>
		    	<Text style={{fontSize:16,color:'#b4d7f7',top:10,left:10,height:30,}}>移动光宽带</Text>

		    	<View style={styles.move_online_style}>

		    		<View style={{flex:1,flexDirection:'column',borderColor:'#eee',borderWidth:1,}}>

		    			<Text style={[styles.text_font]}>新装</Text>
		    			<Text style={styles.text_gray}>足不出户轻松办理</Text>
		    			<Image style={{width:100,height:100,marginLeft:40}} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>



		    		</View>

		    		<View style={{flex:1,flexDirection:'column',}}>

		    			<View style={{flex:1,flexDirection:'column',borderTopWidth:1,borderBottomWidth:1,borderColor:'#eee'}}>
		    				<Text style={[styles.text_font]}>续包</Text>
		    				<Text style={styles.text_gray}>更优惠更便捷</Text>
		    				<Image style={styles.icon} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>

		    			</View>

		    			<View style={{flex:1,flexDirection:'column',borderBottomWidth:1,borderColor:'#eee'}}>

		    				<Text style={[styles.text_font]}>提速</Text>
		    				<Text style={styles.text_gray}>畅享高速网络</Text>
		    				<Image style={styles.icon} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
		    				

		    			</View>


		    		</View>


		    	</View>







			</ScrollView>

    );


	},

	menuClick:function(){

	    this.props.navigator.push({

	    	title:'更多',
	    	component:HomeView,
	    })

    }

});

var styles = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flexDirection:'column',
		flex:1,
	},
	text_font:{

		fontSize:16,
		color:'#000',
		marginLeft:10,
		marginTop:10,
	},
	icon:{
		width:60,
		height:60,
		position:'absolute',
		bottom:3,
		right:10,
	},
	icon_2:{
		width:50,height:50,position:'absolute',bottom:-5,left:20,
	},
	text_gray:{

		fontSize:14,
		color:'#b6b6b6',
		marginLeft:10,
		marginTop:10,



	},
	fourG_timer:{

		height:80,
		flex:1,
		flexDirection:'row',
	},
	move_online_style:{

		flex:1,
		flexDirection:'row',
		height:160,
	},
	menu_container:{

		flex:1,
		height:175,
		flexDirection:'column',
	},
	menu_cell_container:{

		flex:1,
		flexDirection:'row',
	},
	menu_cell:{

		flex:1,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
	},
	icon_style:{
		width:55,
		height:52,
		top:5,
	},
	menu_text_style:{
		fontSize:14,
		color:'#595959',
		marginTop:10,
	},

});
module.exports = moreView;
