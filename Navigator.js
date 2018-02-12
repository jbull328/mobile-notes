import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Fab, Icon } from 'native-base';


import Post from './components/posts/Post';
import Posts from "./components/posts/Posts";
import NewPost from "./components/posts/NewPost";
import navStyles from './styles/navStyles';

import Login from './components/user/Login'

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  newPost = () => {
    this.props.navigation.navigate('NewPost');
  };
 
  render() {
    return (
        <View style={styles.container}>
          <Posts {...this.props} />
          <Fab onPress={this.newPost} style={styles.newPost} >
            <Icon name="add" />
          </Fab>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  newPost: {
    backgroundColor: "#82D8D8",
  },
  newPostText: {
    fontSize: 20,
    textAlign: "center",
  }
});

const Navigator = StackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});

const NavWrapper = (props) => {
  return <Login />;  
  return <Navigator />;
}

export default NavWrapper;