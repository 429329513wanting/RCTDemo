
var React = require('react-native');

var { requireNativeComponent } = require('react-native');

// requireNativeComponent automatically resolves this to "RCTMapManager"

var MapView = React.createClass({

	render:function(){

		return(
			<RCTMap></RCTMap>
		)
	},
});


var RCTMap = requireNativeComponent('RCTMap',MapView);
module.exports = MapView;