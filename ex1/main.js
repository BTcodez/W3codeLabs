function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? 
        
        //yes because it is within the global scope but still comes before the function.
		
        
        console.log(innerVar); // Can we access innerVar?

        //yes, this element is dfined within the local scope of the function.
	}

	innerFunction();
}

outerFunction();