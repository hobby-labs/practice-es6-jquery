import "./Test1";
import "./test2"
//import { jAlert } "jAlert";
import "jAlert";

$(document).ready(() => {
  console.log("Hello world.");
  //let test1 = new Test1();
  console.log($.test2);
  console.log($.test2());
  $(function(){
    $.jAlert({
      'title': 'Nice Size',
      'content': 'This is the  sized alert',
      'size': 'sm',
       'theme':'blue',
      'closeOnClick': true 
    });

  });
});

