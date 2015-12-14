'use strict';
var Swiper = require('react-native-swiper');
var React = require('react-native');

var {
	Text,
	View,
	Image,
	StyleSheet,
} = React;

var swiper = React.createClass({
	render:function(){
		return (
			<Swiper style={styles.wrapper} autoplay={true} showsPagination={true}>
			    <View style={styles.head_container}>

			    	<Image style={styles.image_style} source={require('image!main_title')}></Image>

			    </View>

			    <View style={styles.head_container}>
			    
			    	<Image style={styles.image_style} source={require('image!main_title')}></Image>

			    </View>

			    <View style={styles.head_container}>
			    
			    	<Image style={styles.image_style} source={require('image!main_title')}></Image>

			    </View>

			</Swiper>
		)
	}
});

var styles = React.StyleSheet.create({
	wrapper:{

		flex:1,

	},
	head_container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	image_style:{

		flex:1,
		width:400,
	},


});


module.exports = swiper;
