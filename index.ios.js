/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;


var HelloWorld = React.createClass({
  getInitialState:function(){

    return{

      selectedTab:'home'
    };
  },
  render:function(){
    return(

      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item accessibilityLabel= {"One"}
              selected={this.state.selectedTab ==='home'}
              title='首页'
              name='home'
              icon={{uri:'icon_index_home',isStatic:true}}
              onPress={() => {
                    this.setState({
                      selectedTab: 'home'
                    });
                }}>

              <NavigatorIOS style={styles.container}
                  tintColor={'#333344'}
                  initialRoute={{title:'首页',
                                 component:require('./more.js')}
                               }
                  itemWrapperStyle={styles.navigator}>

              </NavigatorIOS>

          </TabBarIOS.Item>


         <TabBarIOS.Item accessibilityLabel= {"Two"}
              selected={this.state.selectedTab ==='mapNav'}
              title='地图导航'
              name='mapNav'
              icon={{uri:'icon_index_navigation',isStatic:true}}
              onPress={() => {
                    this.setState({
                      selectedTab: 'mapNav'
                    });
                }}>

              <NavigatorIOS style={styles.container}
                  tintColor={'#333344'}
                  initialRoute={{title:'地图导航',
                                 component:require('./mapNav.js')}
                               }
                  itemWrapperStyle={styles.navigator}>

              </NavigatorIOS>

          </TabBarIOS.Item>

         <TabBarIOS.Item accessibilityLabel= {"Three"}
              selected={this.state.selectedTab ==='member'}
              title='个人中心'
              name='member'
              icon={{uri:'icon_index_user',isStatic:true}}
              onPress={() => {
                    this.setState({
                      selectedTab: 'member'
                    });
                }}>

              <NavigatorIOS style={styles.container}
                  tintColor={'#333344'}
                  initialRoute={{title:'个人中心',
                                 component:require('./member.js')}
                               }
                  itemWrapperStyle={styles.navigator}>

              </NavigatorIOS>

          </TabBarIOS.Item>


         <TabBarIOS.Item accessibilityLabel= {"Four"}
              selected={this.state.selectedTab ==='more'}
              title='更多'
              name='more'
              icon={{uri:'icon_index_setting',isStatic:true}}
              onPress={() => {
                    this.setState({
                      selectedTab: 'more'
                    });
                }}>

              <NavigatorIOS style={styles.container}
                  tintColor={'#333344'}
                  initialRoute={{title:'更多',
                                 component:require('./home.js')}
                               }
                  itemWrapperStyle={styles.navigator}>

              </NavigatorIOS>

          </TabBarIOS.Item>

       </TabBarIOS>



      );
  }
});


var styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  navigator: {
    backgroundColor: '#E7EAEC'
  },

 
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
