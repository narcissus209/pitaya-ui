/**
 * 格式化字符串：str-str-str -> StrStrStr
 * @param str string
 * @returns string
 */
export const camelize = (str: string): string =>
  (str[0] === '-' ? str : '-' + str).replace(/-(\w)/g, (_, c) => c.toUpperCase())
