
let value = 40



let a = [10,40,30,50,20,6]

for(let i=0;i<a.length;i++){

    for (let j = 1; j < a.length; j++) {
        
        if(a[i]===a[j]){
         
            console.log("Math Confirmed");

        }else{
            console.log("Nothing here");
        }
    }

}