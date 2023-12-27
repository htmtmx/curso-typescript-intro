(() => {
  let myName = "John";
  myName = "Jane";
  console.log("My name:", myName);
  myName = "John Doe"
  console.log(`"My name is: '${myName}'"`);

  const summary = `
    My name is ${myName}.
    I'm a developer.`;
  console.log(summary);
})();