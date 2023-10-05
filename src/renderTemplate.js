// 引入处理类似a.b.c
import lookup from "./lookup"
// 递归
import parseArray from "./parseArray"

/**
 * 函数功能：让tokens数组变为dom字符串
 */
export default function renderTemplate(tokens,data) {
  // console.log(tokens,data)
  // 结果字符串
  let resultStr = ''
  // 遍历tokens
  for(let i = 0; i < tokens.length; i++) {
    let token = tokens[i]

    // 看类型
    if(token[0] == 'text') { // 文本
      resultStr += token[1]
    }else if(token[0] == 'name') { // 模板{{}}
      // 需要使用lookup,可能是a.b.c形式的
      resultStr += lookup(data,token[1])
    }else if(token[0] == '#') {
      resultStr += parseArray(token,data)
    }
  }
  return  resultStr
}