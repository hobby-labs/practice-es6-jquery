
// This function closed in this module.
const subInstructionOfTest1 = () => {
  console.log("Hello subInstructionOfTest1()");
}

// Method test1 will be added jQuery's $ when this module is imported another module
$.test1 = () => {
  foo();
  console.log("Hello $.test1");
}

