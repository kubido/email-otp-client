import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import {
  Container,
} from '../components/Styled'

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [validEmail, setValidEmail] = useState(null)

  const getCode = () => {
    setLoading(true)
    let url = "https://blys.bukawa.xyz/otp/code"
    axios.post(url, {
      email
    })
      .then(resp => {
        navigation.navigate('Verification', { email, code: resp.data.code })
        setLoading(false)
      })
      .catch(err => {
        alert(err)
        setLoading(false)
      })

  }

  const inputHandler = (text) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = re.test(text.toLowerCase());
    setValidEmail(valid)
    setEmail(text)
  }
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
              onChangeText={(text) => inputHandler(text)}
              inputStyle={{ fontFamily: 'Roboto', borderColor: '#100249' }}
              placeholder="Enter your email"
              errorStyle={{ color: 'red' }}
              errorMessage={email && !validEmail ? "Invalid email" : null}
            />
            <Button
              onPress={() => getCode()}
              title="Send"
              disabled={!validEmail}
              loading={loading}
              titleStyle={{ color: '#100249', }}
              type="solid"
              loadingProps={{ color: '#100249', }}
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