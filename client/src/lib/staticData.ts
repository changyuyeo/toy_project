export const MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
export const DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`)
export const YEAR_LIST = Array.from({ length: 121 }, (_, i) => `${2022 - i}년`)

export const PASSWORD_MIN_LENGTH = 8 as const
