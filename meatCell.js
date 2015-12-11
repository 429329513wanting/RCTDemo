
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
			
			<View style={styles.containter}>

                <Image source={{uri: 'http://www.zhcc717.com/market/system/download.do?id='+good.picId}} style={styles.thumbnail}></Image>
                <View style={styles.rightContainer}>
                    <Text style={styles.titlee}>{good.name}</Text>
                    <Text style={styles.year}>{good.specifications}</Text>
                </View>


        </View>
				
		);
	},

	
});

var styles = React.StyleSheet.create({

	containter:{
		flex:1,
		backgroundColor:'#ffeeff',
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
		borderWidth:1.0,
	 	borderColor:'#ccc',

	 },
	 thumbnail:{

	 	width:100,
	 	height:100,
	 	marginLeft:3,
	 	marginTop:3,

	 },
	 rightContainer:{
	 	flex:1,	 	

	 },
	 titlee:{
	 	fontSize:20,
	 	marginBottom:8,
	 	textAlign:'center',
	 },
	 year:{
	 	textAlign:'center',
	 },
	
});

