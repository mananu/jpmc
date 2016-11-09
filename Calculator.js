class Calculator{
	
	//adds num1 and num2
	add(num1, num2){
		return num1 + num2; 
	}
	
	//subtracts num2 from num1
	subtract(num1, num2){
		return num1 - num2; 
	}
	
	//multiplies num1 and num2
	multiply(num1, num2){
		return num1 * num2; 
	}
	
	//divides num1 by num2
	divide(num1, num2){
		if (num2 === 0){
			return NaN; 
		}
		return num1/num2; 
	}
	
}