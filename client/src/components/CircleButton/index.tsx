import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './style'

const CircleButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/ok.png")} />
    </View>
  )
}

export { CircleButton }
