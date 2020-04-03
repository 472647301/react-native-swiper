import { ViewStyle, ImageSourcePropType } from 'react-native'
import { Component } from 'react'

declare module 'react-native-byron-swiper' {
  interface SwiperProps {
    bannerImages: ImageSourcePropType[]
    bannerComponents: JSX.Element[]
    bannerHeight: number
    bannerTitles: string[]
    bannerTitleTextColor: string
    bannerTitleTextSize: number
    scrollInterval: number
    isAutoScroll: boolean
    isSeamlessScroll: boolean // 无缝滚动
    adaptSeamlessScrollValue: boolean // 无缝滚动显示异常时修改此值
    indicatorWidth: number
    indicatorHeight: number
    indicatorColor: string
    indicatorStyle: ViewStyle
    indicatorGap: number // 2个指示器之间的间隙
    activeIndicatorColor: string
    indicatorGroupPosition: 'right' | 'left' | 'center' // left, center, right
    indicatorGroupSideOffset: number // 左右边距
    indicatorContainerHeight: number
    indicatorContainerBackgroundColor: string

    onPress: (i:number) => void
    onScrollEnd: () => void
  }

  export default class Swiper extends Component<Partial<SwiperProps>> {}
}
