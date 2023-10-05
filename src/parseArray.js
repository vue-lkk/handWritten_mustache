import lookup from "./lookup"
import renderTemplate from "./renderTemplate"

/**
 * 函数功能：处理数组，结果renderTemplate实现递归
 * 注意：这个函数接受的参数是小项token， 不是tokens
 * token是['#','students',[]]
 * 
 * 这个函数要递归调用renderTemplate函数，调用多少次？？？
 * 调用的次数是由提供的数据data长度来决定的
 * 
 */
export default function parseArray(token,data) {
  let v = lookup(data,token[1])
  // 结果字符串
  let resultStr = ''
  // 遍历v数组，v一定是数组
  // 注意：下面这个循环可能是整个包中最难思考的一个循环
  // 它遍历的是数据，而不是遍历token,数组中的数据有几条，就要遍历几条
  for (let i = 0; i < v.length; i++) {
    // 这里要补一个“.”属性
    resultStr += renderTemplate(token[2],{
      ...v[i],
      '.':v[i]
    })
  }
  return resultStr
}