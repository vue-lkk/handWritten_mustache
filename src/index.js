// 引入将模板字符串变成tokens数组
import parseTemplateToTokens from "./parseTemplateToTokens";
// 引入让tokens数组变为dom字符串
import renderTemplate from "./renderTemplate";

// 全局
window.Lkk_TemplateEngine = {
  // 渲染方法
  render(templateStr,data) {
    // 调用 parseTemplateToTokens 函数，让模板字符串能够变为tokens数组
    const tokens = parseTemplateToTokens(templateStr)
    // 调用 renderTemplate 函数，让tokens数组变为dom字符串
    let domStr = renderTemplate(tokens,data)
    return domStr
  }
}