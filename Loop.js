
// for (let i=1 ; i<=1000 ; i++){
//     console.log(i);
// }


// for (let a =1000 ; a>=300 ; a--){
//     console.log(a);
// }
    

// for (let b=1 ; b<=1000 ; b++){
    
//     if(
//         b % 2 ==0 
//     ){
//         console.log(b);
//     }
// }


// for ( let i =1 ; i <=1000 ; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }


// for ( let i =1 ; i <=1000 ; i++){
//     if(i % 7 == 0){
//         console.log(i);
//     }
// }


// for ( let c=1; c<=500 ; c++){
//     if(c % 3 == 0 || c % 4 ==0 ){
//     console.log(c);
//     }
// }


// for ( let c=1; c<=500 ; c++){
//     if(c % 3 == 0 && c % 4 ==0 ){
//     console.log(c);
//     }
// }



// for ( let c=1; c<=500 ; c++){
//     if(c % 3 == 0  ){
//     console.log(c);
//     }
//     else{
//         if(c % 4 == 0){
//             console.log(c);
//         }
//     }
// }




// for (let d=1000 ; d<1050 ; d++){
//     console.log(d);
// }



// for (let d=1000 ; d>950 ; d--){
//     console.log(d);
// }



// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11


for (let i=1 ; i <=500 ; i+=3){
    console.log(i);
    if(i % 11 == 0 ){
        console.log(i);
        break
    }
}