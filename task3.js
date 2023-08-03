const path = "/users/download/index.html"
const fileExtension = 'html'

function isHtml(path) {
  if (path.includes('html')) {
	return true;
  } else {
    return false;
  }
 }

console.log(isHtml(path));
     
