import React, { useState } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Input, Button } from 'react-native-elements';

import {
  Container,
} from '../components/Styled'

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [validEmail, setValidEmail] = useState(null)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container flex={0.8}>

          <View style={{ alignItems: 'center' }}>


            <Image
              style={{ alignSelf: 'flex-start' }}
              style={{ height: 200, width: 200, marginTop: 20, marginBottom: 40 }}
              source={require('../assets/holding-phone.png')}
            />

            <Text style={{
              fontSize: 18,
              textAlign: 'center',
            }}>
              Enter the email address associated with your account
          </Text>
            <Input
              containerStyle={{ marginVertical: 15 }}
              onChangeText={(text) => setEmail(text)}
              inputStyle={{ fontFamily: 'Roboto', borderColor: '#100249' }}
              placeholder="Enter your email"
              errorStyle={{ color: 'red' }}
              errorMessage={email && !validEmail ? "Invalid email" : null}
            />
            <Button
              onPress={() => navigation.navigate('Verification')}
              title="Send"
              type="solid"
              titleStyle={{ color: '#100249', }}
              buttonStyle={{
                borderWidth: 1,
                backgroundColor: '#ffffff',
                paddingHorizontal: 35,
                borderColor: '#100249'
              }}
            />
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen