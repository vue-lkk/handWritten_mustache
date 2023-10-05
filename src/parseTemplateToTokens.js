// 引入扫描器类
import Scanner from "./Scanner"
// 折叠tokens
import nestTokens from "./nestTokens";

/**
 * 将模板字符串 变为 tokens数组
 */
export default function parseTemplateToTokens(templateStr) {
    let tokens = []
    // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串
    // 也就是说这个扫描器是针对这个模板字符串工作的
    const scanner = new Scanner(templateStr)

    let word;
    // 让扫描器工作
    while (!scanner.eos()) {
      // 收集开始标记出现之前的文字
      word = scanner.scanUtil('{{') 
      if(word != '') {
        tokens.push(['text',word])
      }
      // 跳过{{
      scanner.scan('{{')

      // 收集开始标记出现之前的文字
      word = scanner.scanUtil('}}')
      if(word != '') {
        if(word[0] === '#') {
          tokens.push(['#',word.substring(1)])
        }else if(word[0] === '/'){
          tokens.push(['/',word.substring(1)])
        }else{
          tokens.push(['name',word])
        }
      }  
      // 跳过}}
      scanner.scan('}}')
    }

    // 返回折叠的tokens
    return nestTokens(tokens)
}