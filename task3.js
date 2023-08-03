const path = "/users/download/index.html";

const isHtml = path => path.length - path.indexOf('.html') == 5;

console.log(isHtml(path));
