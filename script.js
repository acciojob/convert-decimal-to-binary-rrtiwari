function decimalToBinary(num) {
   let ans="";
	while(num>0){
		ans=ans+num%2;
		num=Math.floor(num/2);
	}

	return  ans;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num)); 
