let hashes = [];

// for(let i = 1; i< 10; i++){
//     if (i<6){
//         hash = '#';
//         hashes.push(hash);
//     }else hashes.pop();
//     console.log(hashes.join(''));
// }

// for(let i = 0; i< 10; i++){
//     if (i%2 === 0){
//         hash = '# # # # #'
//     }else hash = ' # # # # '
//     console.log(hash);
// }

// for(let i = 0; i< 10; i++){

//     for(let j = 0; j< 11; j++){
//     if (i%2 === 0){ 
//         if (j%2 ===0){
//         hashes.push('#');
//         } else hashes.push(' ');   
//     } else {
//         if (j%2 > 0){
//             hashes.push('#');
//         } else hashes.push(' '); 
//     }
//     }
// console.log(hashes.join(' '));
// hashes = [];
// }

let hash = ""
let val = 0;
for(let j = 0; j< 30; j++){
    if (j%5 == 0){
        val = val + 5;
        hash = hash + '\n';
    }
    if (val%10 == 0){
        hash = hash + ' X';
    }else hash = hash + 'X ';
}

console.log(hash);



    //for(let j = 0; j< 10; j++){
        // if (hash.length % 2 === 0){
        //     hash = hash + '\n';
        // } else hash = hash + ' ' + '#';
    //}
