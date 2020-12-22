import React, { useState } from 'react';
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import Clipboard from 'expo-clipboard';
import { Button } from 'react-native-elements';

import {
  Container,
  Text,
  InputBox
} from '../components/Styled'


const VerificationScreen = ({ navigation }) => {
  const codesLength = 6
  const [codes, setCodes] = useState(Array(codesLength).fill(null))
  const textInputs = []

  const inputFocusHandler = (val, idx) => {
    let nextIdx = val ? idx + 1 : idx - 1
    let input = textInputs[nextIdx]

    if (input && !val) input.clear()
    if (input) input.focus()

    let newCodes = [...codes]
    newCodes[idx] = val
    setCodes(newCodes)
  }

  const inputClipboardHandler = async (val) => {
    let newCodes = val.slice(0, codesLength).split("")
    let input = textInputs[newCodes.length]
    codes.map((code, idx) => {
      let val = newCodes[idx]
      newCodes[idx] = val ? val : null
    })
    setCodes(newCodes)
    Clipboard.setString(null)
    if (input) input.focus()

  }

  const inputHandler = async (val, idx, direction) => {
    const clipboard = await Clipboard.getStringAsync();
    if (clipboard) {
      inputClipboardHandler(clipboard)
    } else {
      inputFocusHandler(val, idx, direction)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container flex={0.8}>
          <View style={{ alignItems: 'center' }} >
            <Image
              style={{ height: 200, width: 200, marginTop: 20, marginBottom: 40 }}
              source={require('../assets/holding-phone.png')}
            />
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
            }}>Enter the verification code we just sent you on your email address</Text>


            <View style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 40,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              {codes.map((code, idx) => (
                <InputBox
                  key={idx}
                  keyboardType='decimal-pad'
                  value={code}
                  maxLength={1}
                  textAlign="center"
                  onKeyPress={(event) => {
                    if (event.nativeEvent.key === 'Backspace') {
                      inputHandler(null, idx)
                    }
                  }}
                  onChangeText={(text) => inputHandler(text, idx)}
                  ref={ref => textInputs[idx] = ref}
                />
              ))}


            </View>


            <Button
              onPress={() => navigation.navigate('VerificationStatus')}
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

    </KeyboardAvoidingView >
  );
}

export default VerificationScreen