/* 
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/
const myNumber = [76, 87, 55, 43, 12];
for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] > 80) {
        console.log(myNumber[i]);
    }
}