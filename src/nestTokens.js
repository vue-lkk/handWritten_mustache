/**
 * 折叠tokens,将#和/之间的tokens能够整合起来，作为下标为2的项
 */
export default function nestTokens(tokens) {
  // 目标数组
  let nestTokens = []
  // 栈结构，存放小token，栈顶（靠近端口的，最新进入的）token
  let sections = []
  // 收集器  天使指向nestTokens结果数组，引用类型值，所以指向的是同一个数组
  // 收集器的指向会变化，当遇见#的时候，收集器会指向这个token的下标为2的新数组
  var collector = nestTokens;

  // console.log('未处理的',tokens)
  for(let i = 0; i < tokens.length; i++) {
    // 每一小项token
    let token = tokens[i]

    switch (token[0]) {
      case '#':
        // 收集器中放入这个token
        collector.push(token)
        // 入栈
        sections.push(token)
        // 收集器需要换人了。给token添加下标为2的项，并且让收集器指向它
        token[2] = []
        collector = token[2]
        break;
      case '/':
        // 出栈  pop()会返回刚刚弹出的项
        sections.pop()
        // 改变收集器为栈结构队尾（队尾就是栈顶） 那项的下标为2的数组
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
        break;
      default:
        // 甭管当前的collector谁，可能是结果nestedToken,也可能是某一个token的下标为2的数组，甭管是谁,推入collector即可。
        collector.push(token)
    }
  }
  // console.log(nestTokens)
  return nestTokens
}