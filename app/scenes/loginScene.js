import React, { Component } from 'react'
import {
  Container,
  Content,
  View
} from 'native-base'
import { Image } from 'react-native'
import Login from '../components/login'
import { observer } from 'mobx-react/native'

@observer


export default class LoginScene extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {theme, stores} = this.props
    return (
      <Container theme={theme}>
        <View>
        <Content scrollEnabled={false}>
          <Image source={stores.settings.LoginBG}>
            <View>
              <Login {...this.props} />
            </View>
          </Image>
        </Content>
        </View>
      </Container>
    )
  }
}
