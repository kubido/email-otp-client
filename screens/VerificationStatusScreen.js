import * as React from 'react';
import { Image, View } from 'react-native'
import {
  Container,
  Text,
} from '../components/Styled'

const VerificationStatusScreen = ({ route: { params: { status } } }) => {
  let isSuccess = status == "success"
  let asset = isSuccess ?
    require(`../assets/ok.png`) :
    require(`../assets/oops.png`)

  return (
    <Container>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ height: 130, width: 150, marginTop: 20, marginBottom: 40 }}
          source={asset}
        />
        <Text>{isSuccess ? "Success" : "Failed"}</Text>
      </View>
    </Container>
  );
}

export default VerificationStatusScreen