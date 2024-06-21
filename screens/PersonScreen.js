import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

let { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function PersonScreen() {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})