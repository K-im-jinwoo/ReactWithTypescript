// 길이를 파라미터로 받음, 그 길이만큼 null 값으로 초기화해서 새로운 array 생성
export const makeArray = (length: number) => new Array(length).fill(null)

export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((noUsed, index) => index + min)

export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
