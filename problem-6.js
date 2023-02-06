/* 
৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
*/
const myNumber = 60;
if (myNumber >= 80) {
    console.log('A+');
} else if (myNumber >= 70) {
    console.log('A');
} else if (myNumber >= 60) {
    console.log('B');
} else if (myNumber >= 50) {
    console.log('C');
} else if (myNumber >= 40) {
    console.log('D');
} else {
    console.log('F');
}