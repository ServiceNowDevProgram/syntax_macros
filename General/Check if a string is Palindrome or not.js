//check if particular string is a palindrome or not
  var str = "SERVICENOW"; 
	var arr = str.split("").reverse().join("");
	gs.print(arr);	 
	if(arr === str){
	    gs.print("true");//returns true if it is a palindrome
	}
	else {
	    gs.print("false");//returns false if it is not a palindrome
	}
