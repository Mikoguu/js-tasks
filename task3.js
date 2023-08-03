const path = "/users/download/index.html";
const fileExtension = '.html';

const isHtml = path => path.includes(fileExtension);

console.log(isHtml(path));
     
