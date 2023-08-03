const path = "/users/download/index.html";

const isHtml = (path) => {
  
  const startIdx = path.indexOf('.html');
  const htmlExtension = (path.slice(startIdx, startIdx + 5)).toString();
  
  return htmlExtension == '.html'
}

console.log(isHtml(path));
