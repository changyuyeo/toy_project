export const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)

export const dayList = Array.from({ length: 31 }, (_, i) => String(i + 1))

export const yearList = Array.from({ length: 121 }, (_, i) => String(2020 - i))
