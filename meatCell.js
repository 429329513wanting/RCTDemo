
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
		    <TouchableHighlight style={styles.containter} onPress={this.props.onSelect} underlayColor='#fff'>
                	<View style={{flexDirection:'row'}}>

                		<Image source={{uri: 'http://www.zhcc717.com/market/system/download.do?id='+good.picId}} style={styles.thumbnail}></Image>
                		<View style={styles.rightContainer}>
                    	<Text style={styles.titlee}>{good.name}</Text>
                    	<Text style={styles.year}>{good.specifications}</Text>
                		</View>


                	</View>

           </TouchableHighlight>
				
		);
	},

	cellClick:function(){

		alert('click')
	},

	
});

var styles = React.StyleSheet.create({

	containter:{
		flex:1,
		backgroundColor:'#fff',
		borderTopWidth:1.0,
	 	borderColor:'#ccc',

	 },
	 thumbnail:{

	 	height:135,
	 	width:150,
	 	left:10,
	 	top:10,

	 },
	 rightContainer:{

	 	flex:3,	
	 	justifyContent:"center", 	

	 },
	 titlee:{

	 	fontSize:20,
	 	textAlign:'center',
	 	top:10,
	 	height:30,
	 },
	 year:{
	 	textAlign:'center',
	 	marginTop:20,
	 },
	
});

