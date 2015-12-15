'use strict';
var React = require('react-native');
var Tab = require('react-native-tab');

var {
	Text,
	View,
	ListView,
	ActivityIndicatorIOS
} = React;

var data = {
	"河南":{
		"全部":["郑州","新乡"],
		"信阳":["商城","辉县","潢川","固始"],
		"驻马店":["上蔡","新蔡","汝南"],
	},
	"浙江":{
		"全部":["湖州","宁波","嘉兴","温州"],
		"杭州":["上城区","西湖区","萧山区","滨江区"],
		"绍兴":["绍兴"],
	}

};

var Style = React.StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex:1,
		marginTop:64,
	},

});

var memberView = React.createClass({
	render:function(){

		return (<View style={Style.container}>
					<Tab data={data} nSelected={1} tabSelected={0} cliick={this.onPress}></Tab>
		       </View>
		       )


	},
	onPress:function(val){
		alert(val);
	}
});
module.exports = memberView;
