const xhr = new XMLHttpRequest();
xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});
// these are with url path and each url path give different responses from the backend
// xhr.open('GET','https://supersimplebackend.dev/products/first');
// xhr.open('GET','https://supersimplebackend.dev/hello');\
// this is the url which is not-supported by the backend so it will give an error
// xhr.open('GET','https://supersimplebackend.dev/not-supported');
 xhr.open('GET','https://supersimplebackend.dev');
xhr.send();
xhr.response