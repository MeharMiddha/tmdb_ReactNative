import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { theme } from "../theme/theme";

const {width,height} = Dimensions.get("window");

export default function Loading() {
  return (
    <View style={{height,width}} className="absoulte flex-row justify-center items-center pb-52">
        <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </View>
  )
}

const styles = StyleSheet.create({})