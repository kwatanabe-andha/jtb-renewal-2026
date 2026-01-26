import { selectType } from "@/types/common"

export const multipleText = (ary: selectType[]): string => {
  let text = ''

  ary.forEach((item, index) => {
    if (index > 0) text += '　'
    text += item.label
  })

  return text
}