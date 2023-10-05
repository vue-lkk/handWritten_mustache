/**
 * 函数功能：可以在dataObj对象中，寻找用连续点符号的keyName属性
 * 比如：dataObj = {
 *  a:{
 *    b:{
 *      c: 100
 *    }
 *  }
 * }
 * 那么 lookup(dataObj,'a.b.c') 结果就是100
 */
export default function lookup(dataObj,keyName) {
  // 看看keyName中有没有点符号，但是不能是"."本身
  if(keyName.indexOf('.') != -1 && keyName != '.') {
    // 如果有
    let keys = keyName.split('.')
    // 此处为核心：设置一个临时变量用于中转，一层一层找下去
    let temp = dataObj
    // 每找一层就设置为新的临时变量
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]]
      console.log(temp)
    }

    return temp;
  }
  // 如果没有点符号
  return dataObj[keyName]
}