function decimalToBinary(num) {
   let ans="";
	while(num>0){
		ans=ans+num%2;
		num=Math.floor(num/2);
	}
    const reversed = ans.split('').reverse().join('');
	return  reversed || "0";
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num)); 
