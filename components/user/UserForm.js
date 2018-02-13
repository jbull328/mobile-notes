import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';


export default class UserForm extends Component {

  state = {
    email: "",
    password: "",
  };
  
  submitForm = () => {
    const { email, password } = this.state;
    this.props.onSubmit({
      email,
      password
    });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <input 
            keyboardType="email-address"
            value={this.state.email}
            onChangeText= {email => this.setState({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <input 
            SecureTextEntry
            value={this.state.password}
            onChangeText= {password => this.setState({ password })}
          />
        </Item>
        <Button 
          title={this.props.type}
          onPress={this.submitForm}
        />
      </Form>
    );
  }
}
