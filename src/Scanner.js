/**
 * 扫描器类
 */
export default class Scanner{
  constructor(templateStr) {
    // 将模板字符串写到自己实例上
    this.templateStr = templateStr
    //  指针
    this.pos = 0;
    // 尾巴  一开始就是模板字符串原文
    this.tail = templateStr;
  }

  // 功能弱，就是走过指定内容，没有返回值
  scan(tag) {
    if(this.tail.indexOf(tag) == 0) {
      // tag有多长，比如{{长度是2，就让指针后移多少位
      this.pos += tag.length;
      // 尾巴也变
      this.tail = this.templateStr.substr(this.pos)
    }
  }

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTag) {
    // 记录一下执行方法的时候pos的值
    let pos_backup = this.pos
    // 当尾巴的开头不是stopTag的时候，就说明还没有扫描到stopTag
    while(this.tail.indexOf(stopTag) != 0 && !this.eos()) {
      this.pos++
      // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substring(this.pos)
    }
    // 返回 
    return this.templateStr.substring(pos_backup,this.pos)
  }

  // 指针是否已经到头，返回布尔值
  eos() {
    return this.pos >= this.templateStr.length
  }
}