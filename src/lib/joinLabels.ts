import { selectType } from "@/types/common"

export const joinLabels = (arr: selectType[]) => {
  return arr.map(item => item.label).join('　')
}