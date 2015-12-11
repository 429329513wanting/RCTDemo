'use strict';
var React = require('react-native');
var TCell = require('./cell')
//var HTTPURL = 'http://www.zhcc717.com/market/mobile/index.do';
var HTTPURL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';

var {
	Text,
	View,
	ListView,
	Image,
	ActivityIndicatorIOS,
	TouchableHighlight,

} = React;


var listView = React.createClass({

	getInitialState:function(){

		return {

			dataSource: new ListView.DataSource({
				rowHasChanged:(row1,row2)=>row1 !== row2,}),
			loaded:false,
		};
	},

	componentDidMount:function(){

		this.fetchData();
	},

	fetchData:function(){

		fetch(HTTPURL).then((response) => response.json()).then((responseData) => {

			this.setState({

				dataSource:this.state.dataSource.cloneWithRows(responseData.result.data),
				loaded:true,

			});
		})
		.done();
	},




	render:function(){
		if (!this.state.loaded) {
			return this.loadingView();
		};

		//var good = this.state.goods[0];
		//return this.renderGood(good);
		return(
			<ListView dataSource={this.state.dataSource}
			 renderRow={this.renderCell} 
			 style={styles.listV}/>

			);
	 
	},
	renderCell:function(data){
		return(<TCell 
			    onSelect={() => this.cellClick(data)}
			    data={data}>
			       

			  </TCell>

			);



	},
	cellClick:function(data){

		alert('click');



	},

	loadingView:function(){

		return(

			<View style={styles.loadWarn}>

			    <Text style={styles.loadText}>Loading...</Text>
			    <ActivityIndicatorIOS/>

			</View>

		);



	},
	renderGood:function(team){
		


		return(

		<View style={styles.containter}>

            <Image source={{uri: team.logo}} style={{width:50,height:81}}></Image>
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

	 },
	 thumbnail:{

	 	width:65,
	 	height:81,

	 },
	 rightContainer:{
	 	flex:1,
	 	backgroundColor:'#fff',
	 	borderWidth:1.0,
	 	borderColor:'#ccc',
	 },
	 titlee:{
	 	fontSize:20,
	 	marginBottom:8,
	 	textAlign:'center',
	 },
	 year:{
	 	textAlign:'center',
	 },
	loadWarn:{
		flex:1,
		backgroundColor:'#fff',
		justifyContent:'center',
		alignItems:'center',
	},
	loadText:{
		fontSize:14,
		marginBottom:20,
	},
	listV:{
		backgroundColor:'#f5fcff',
		marginTop:64,
		marginBottom:44,
	},
});
module.exports = listView;
