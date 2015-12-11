
var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
	Image,
} = React;


module.exports = React.createClass({
	render: function(){
		var team = this.props.data;
		return (
			
			<View style={styles.containter}>

                <Image source={{uri: team.logo}} style={styles.thumbnail}></Image>
                <View style={styles.rightContainer}>
                    <Text style={styles.titlee}>{team.team_cn}</Text>
                    <Text style={styles.year}>{team.team_order}</Text>
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

	 	width:65,
	 	height:81,

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

