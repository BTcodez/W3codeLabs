// Declare a global variable here
let x = 34;

function modifyGlobal() {
    // Try to modify the global variable here
    let y = 8;
    console.log(x + y)

}



function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let x = 34;
    console.log(x + 8);
}

// Call both functions here

modifyGlobal()
localScopeTest()
