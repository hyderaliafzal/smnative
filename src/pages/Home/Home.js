import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Left, Icon, Button, Body, Right, Text, Spinner, Thumbnail} from 'native-base';
import {graphql} from 'react-apollo';
import ImageSlider from 'react-native-image-slider';
import gql from "graphql-tag";

const store = gql`
    query getStore{
      getStore{
        name
        logo
      }
    }
`;

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    };
  }
  componentWillMount(){
    console.log('component will mount', this)
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.store.loading && !nextProps.store.error) {
      const {data} = this.state;
      this.setState({
          data: nextProps.store.getStore
      })
    }
  }

  render() {
    const {data} = this.state;
    if (this.props.store.loading) {
      return <Spinner style={styles.selfCenter} />
    } else if(this.props.store.error) {
      console.log('error',this.props.store.error);
        return <Text style={styles.selfCenter}>Network Error </Text>
    } else {
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
              <Icon name="menu"/>
              </Button>
            </Left>
            <Body>
            </Body>
            <Right/>
          </Header>
          <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          style={{height:10}}
          images={[
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any'
          ]}
          />
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  selfCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default graphql(store, {name: 'store'})(Home)
