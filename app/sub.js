function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world";
  return element;
}

//使用CommonJS的风格
module.exports = generateText;

// 使用es6
// export default generateText;