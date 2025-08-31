// Problem-01: একটি নতুন সিনেমা হলের জন্য একটি সিট প্ল্যানার তৈরি করতে হবে এই সিনেমা হলে সিটগুলো এমনভাবে ডিজাইন করা হয়েছে যে, যদি সিট নাম্বার ৩ বা ৫ ধারা বিভাজ্য হয় এবং কোন ভাগশেষ না হয় তাহলে সেটা 'প্রিমিয়াম' সিট হিসেবে গন্য হবে। অর্থাৎ, সিট নং যদি ১ হয় তাহলে সেটা হবে নরমাল সিট, যদি সিট নাম্বার হয় ৩/৫ তাহলে সেটা হবে প্রিমিয়াম সিট। আপনার কাজ হলো একটি প্রোগ্রাম তৈরি করা, যা মোট সিট সংখ্যা (totalRows) নেবে এবং প্রতিটি সিট জন্য এটি 'নরমাল সিট' (Normal Row) নাকি 'প্রিমিয়াম সিট' (Premium Row) তা প্রিন্ট করবে। Row 1 Normal Row, Row 4 Premium Row
// ADVANCED: যদি সিট নরমাল হয় তাহলে প্রাইজ হবে ৫০০ টাকা আর যদি প্রিমিয়াম সিট হয় তাহলে প্রাইজ হবে ৮০০ টাকা। আপনাকে ক্যালকুলেট করে বের করতে হবে এক শোতে মোট কত টাকা আয় হবে উদাঃ Total
// Income: 5000 Taka

let seatNumbers = 60;
let normalPrice = 500 ;
let premiumPrice = 800 ;
let normalIncome = 0 ;
let premiumIncome = 0 ;
for (let i = 1; i <= seatNumbers; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    premiumIncome = premiumPrice + premiumIncome;
    console.log("Row", i + " " + "Premium Row");
  } else {
    normalIncome = normalPrice + normalIncome;
    console.log("Row", i + " " + "Normal Row");
  }
}
console.log('Total income from premium' +" = "+ premiumIncome);
console.log('Total income from normal' +" = "+ normalIncome);

// Problem 02: একটি অনলাইন স্টোরের জন্য আপনাকে একটি প্রোগ্রাম লিখতে হবে (productDescription) যেটা (স্ট্রিং) ইনপুট নেবে যা প্রোডাক্ট details দেখে স্বয়ংক্রিয়ভাবে কিছু ট্যাগ (Tag) অ্যাড করবে। যেমনঃ
// details
// যদি details এ "cotton" শব্দটি থাকে তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Material: Cotton".
// "শব্দটি": ।
// যদি details এ "sale" শব্দটি থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Category: Sale Item".
// "শব্দটি":
// যদি details এ "new arrival" শব্দ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Status: New Arrival".
// যদি details এ "limited edition" শব্দগুচ্ছ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে
// "Availability: Limited".
// যদি কোনো শর্তই পূরণ না হয়, তাহলে একটি ডিফল্ট ট্যাগ
// I
// ADVANCED: কেস ইনসেনসিটিভ Handle করো।

let details = 'I want to know about the Cotton of this online product' ;

// lowercase and uppercase => can create case insensitive

if(details.toLowerCase().includes('cotton')){
    console.log("Material: Cotton");
} else if(details.toLowerCase().includes('sale')){
    console.log("Category: Sale Item");
} else if(details.toLowerCase().includes('new arraival')){
    console.log("Status: New Arrival");
} else if(details.toLowerCase().includes('limited edition')){
    console.log("Availability: Limited");
} else{
    console.log("Tag : General");
}

// Problem 03: একটি নতুন কোম্পানি, "AlphaCorp", তাদের employee দেরকে তাদের ডেটাবেজে একসেস দেওয়ার জন্য স্বয়ংক্রিয়ভাবে একটি Unique Employee username তৈরি করতে চায়। এই username employee দের কিছু ব্যক্তিগত তথ্যের উপর ভিত্তি করে তৈরি হবে।
// আপনাকে একটি প্রোগ্রাম লিখতে হবে যা একটি employee নামে অবজেক্ট ইনপুট নেবে, যেখানে কর্মীদের
// তথ্য নিম্নলিখিতভাবে থাকবে:
// { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }
// Output:
// username: doe101@alphacorp.com
// নিয়মাবলী:
// প্রথমে lastName এর প্রথম তিনটি অক্ষর ছোট হাতের হবে।
// তারপরে employeeId হবে।
// এরপরে হবে
// এরপরে কোম্পানি নাম ছোট হাতের হবে
// সর্বশেষে.com হবে।

let companyName = 'AlphaCorp';

let employInfo = {
    firstName : "John",
    lastName : "je",
    employId : 101,
    departmentCode : "HR"
}

employInfo.lastName.slice(1);

if(employInfo.lastName.length >= 3){
    console.log('ID'+" : "+ employInfo.lastName.slice(1).toLowerCase()+employInfo.employId+'@'+companyName.toLowerCase()+'.com' +" , "+ 'TempPass'+" : "+ employInfo.lastName.slice(1)+'1#AC');
} else{
    console.log('ID'+" : "+ employInfo.lastName.slice(1).toLowerCase()+employInfo.employId+'@'+companyName.toLowerCase()+'.com' +" , "+ 'TempPass'+" : "+ employInfo.lastName+'1#AC');
}



