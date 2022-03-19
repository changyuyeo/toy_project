const monthList = Array.from({ length: 12 }, (_, i) => i).map(v => `${v + 1}월`)
const dayList = Array.from({ length: 31 }, (_, i) => String(i + 1))
const yearList = Array.from({ length: 121 }, (_, i) => String(2022 - i))

export { monthList, dayList, yearList }
