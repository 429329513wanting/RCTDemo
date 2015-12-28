
var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
	Image,
} = React;


module.exports = React.createClass({
	render: function(){
		var good = this.props.data;
		return (
		    <TouchableHighlight style={styles.mask} onPress={this.props.onSelect} underlayColor='#fff'>
                	<View style={{flexDirection:'column'}}>

                		<Image style={styles.image_style} source={{uri:'http://111.122.209.83:211/'+good.picture}}></Image>
                		<View style={styles.bottom}>
                		     <Text style={styles.font_word}>{good.goods_name}</Text>


                		</View>

                	</View>

           </TouchableHighlight>
				
		);
	},

	
});

var styles = React.StyleSheet.create({

	mask:{
		flex:1,
		borderTopWidth:1.0,
	 	borderColor:'#fff',
	 	height:255,

	 },
	 bottom:{
	 	flex:1,
	 	height:45,
	 	backgroundColor:'#fff',
	 },
	 image_style:{

	 	height:200,
	 	flex:1,
	 	backgroundColor:'#ccc',

	 },
	 font_word:{
	 	fontSize:18,
	 	color:'#000',
	 	height:25,
	 	marginLeft:10,
	 	top:10,
	 },

	
});

