import "./Test1";
import "./test2"
//import { jAlert } "jAlert";
import "jAlert";

window.onload = () => {
  console.log("Hello world.");
  //let test1 = new Test1();
  console.log($.test2);
  console.log($.test2());
  console.log("===================================");
  console.log($.jAlert);
  window.jAlert = $.jAlert;
  console.log("===================================");
}

