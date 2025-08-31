// Problem: রাফি, বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার প্রস্তুতি নিচ্ছে। সে বিভিন্ন মডেল টেস্ট দিয়েছে এবং প্রতিবার ভিন্ন ভিন্ন নম্বর পেয়েছে। কিন্তু সে দুশ্চিন্তায় আছে- সে কি চূড়ান্ত পরীক্ষায় সফল হতে পারবে? রাফির জন্য তুমি willSuccess() নামে একটা ফাংশন লিখে দাও, যেটা একটা Number এর Array ইনপুট নেবে এবং রাফির রেজাল্ট এনালাইসিস করে রাফি কে guideline দিবে।
// মডেল টেস্টে 50 বা তার বেশী মার্ক মানে হলো Pass। আর 50 এর নিচে পাওয়া মানে হলো Fail.
// যদি Pass করা পরীক্ষার সংখ্যা Fail করা পরীক্ষার সংখ্যা থেকে বেশি হয়, তাহলে সে মনে করবে যে সে প্রস্তুত এবং ফাংশন true রিটার্ন করবে
// অন্যথায়, সে মনে করবে এখনো প্রস্তুতি যথেষ্ট নয় এবং ফাংশন false রিটার্ন করবে. ফাংশন টি একটা boolean Value (true/false) কে return করবে ।
// 🚩Challenge: যদি ইনপুট টি Array না হয় তাহলে "Invalid" স্ট্রি ং রি টার্ন করবে ।

function willSuccess(marks) {
  let pass = 0;
  let fail = 0;
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  for (let pro of marks) {
    if (pro >= 50) {
      pass++;
    }
    if (pro < 50) {
      fail++;
    }
  }
  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}

let progress = [60, 70, 80, 40, 30];

console.log(willSuccess(progress));