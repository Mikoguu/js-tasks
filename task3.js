const path = "/users/download/index.html";

const isHtml = (path) => {
  
  const startIdx = path.indexOf('.html');
  const extension = (path.slice(startIdx, startIdx + 5)).toString();
  
  return extension == '.html'
}

console.log(isHtml(path));
