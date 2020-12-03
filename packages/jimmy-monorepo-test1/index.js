// Export a package to be imported in another package in the monorepo
function test1() {
  console.log("test1 function ran")
  return "test1 function value"
}

module.exports = test1
