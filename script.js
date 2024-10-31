function stringChop(str, size) {
  // your code here
	// let arr=[];
	// let s='';
	// let i=0;

	// while(i<str.length){
	// 	if(s.length==size){
	// 		arr.push(s);
	// 		s="";
	// 	}
	// 	s+=str.charAt(i);
	// 	i++;
	// }
	// if(s) arr.push(s);
	// //console.log(arr);
	// return arr;

	let arr=[];
	
if(!str) return arr;
	for(let i=0;i<str.length;i+=size){
		arr.push(str.slice(i,i+size));
	}
	return arr;
	
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
 alert(stringChop(str, size));
