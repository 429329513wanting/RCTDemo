var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
	Image,
	ScrollView,
	
} = React;

module.exports = React.createClass({


	render: function(){

	   var data = this.props.data

		return (
			<ScrollView style={styles.container}>
				<Image style={{flex:1,height:200,resizeMode:Image.resizeMode.stretch}} source={{uri:'http://www.zhcc717.com/market/system/download.do?id='+data.picId}}></Image>
				<View style={{flex:1,backgroundColor:'#fff',marginTop:5,}}>
					<View style={{flexDirection:'row',flex:1,height:100,}}>
						<Text style={[styles.text_font_18,{marginLeft:10,marginTop:10}]}>{data.name}</Text>
						<Text style={[styles.text_font_16,{marginLeft:10,marginTop:10}]}>{data.specifications}</Text>
						<Text style={{position:'absolute',bottom:10,right:20,fontSize:18,color:'#f00'}}>￥{data.price}元</Text>

					</View>

				</View>

			</ScrollView>	
		);
	},

	cellClick:function(){

		alert('click')
	},

	
});


var styles = React.StyleSheet.create({

	container:{
		flex:1,
		backgroundColor:'#ccc',
	    flexDirection:'column',

	},
	text_font_18:{

		fontSize:18,
		color:'#000',
	},
});