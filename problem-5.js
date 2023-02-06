/* 
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/
var myMoney = 50;
var price = 20;
var isHot = true;
if (myMoney >= 20 && isHot == true) {
    console.log('Give me an omelette & a cake');
} else if (myMoney >= 20 || isHot == true) {
    console.log('Give me a tea');
}