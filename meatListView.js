'use strict';
var React = require('react-native');
//var HTTPURL = 'http://www.zhcc717.com/market/mobile/index.do';
var API = require('./API/API');
var MCell = require('./meatCell');
var GDetailView = require('./goodDetail');


var {
	Text,
	View,
	ListView,
	Image,
	ActivityIndicatorIOS,
	TouchableHighlight,

} = React;

var CACHE = [];
var meatListView = React.createClass({

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

		var type = this.props.type
		if (type == 'meat') {

		fetch('http://www.zhcc717.com/market/mobile/goodsList.do',{
		method:'POST',
	    headers:{"Content-Type":"application/json"},
	    body:"oid=f2573e864e49d503014e58c1d18a017b&order=asc&orderType=0&pageNumber=1&pageSize=20"})

		   .then((response) => response.json())

		   .catch((error) => {React.AlertIOS.alert('error','请求失败:'+error.message);return;})

		   .then((responseData) => {

		   	   this.cache(responseData.goodsList)

		   	   console.log(responseData)
		   	    this.setState({

				    dataSource:this.state.dataSource.cloneWithRows(responseData.goodsList),
				    loaded:true,
			      });

		})
		.done();


		}else{

		fetch('http://www.zhcc717.com/market/mobile/goodsList.do',{
		method:'POST',
	    headers:{"Content-Type":"application/json"},
	    body:"oid=f2573e864e49d503014e58c10c170165&order=asc&orderType=0&pageNumber=1&pageSize=20"})

		   .then((response) => response.json())

		   .catch((error) => {React.AlertIOS.alert('error','请求失败:'+error.message);return;})

		   .then((responseData) => {

		   	   this.cache(responseData.goodsList)

		   	   console.log(responseData)
		   	    this.setState({

				    dataSource:this.state.dataSource.cloneWithRows(responseData.goodsList),
				    loaded:true,
			      });

		})
		.done();


		}



	},

	cache:function(items){

		for (var i in items){
			CACHE.push(items[i]);
		}
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
	return(<MCell 
			    onSelect={() => this.cellClick(data)}
			    data={data}>
			       

			  </MCell>

			);




	},
	cellClick:function(data){

		this.props.navigator.push({

			title:'商品详情',
			component:GDetailView,
			passProps:{data:data},
		})


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
module.exports = meatListView;
