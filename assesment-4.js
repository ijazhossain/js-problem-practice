/* 
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/
const friendName = ['asif', 'muna', 'mike', 'alija banu', 'sakib', 'jahan', 'kodu'];
function bestFriend(array) {
    let largest = '';
    for (const name of array) {
        if (name.length > largest.length) {
            largest = name;
        }
    }
    return largest;
}
const result = bestFriend(friendName);
console.log(result);