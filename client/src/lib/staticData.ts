const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
const dayList = Array.from({ length: 31 }, (_, i) => `${i + 1}일`)
const yearList = Array.from({ length: 121 }, (_, i) => `${2022 - i}년`)

export { monthList, dayList, yearList }
