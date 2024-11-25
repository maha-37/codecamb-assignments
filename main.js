//--------------- CodeCamb assignments ---------------

//Some Operators and Expressions Exercise

// قم بكتابة برنامج يحسب مساحة مستطيل
function rectangle(uzunluk, genislik) {
    alan = uzunluk * genislik
    console.log(alan)
    return alan
}
rectangle(10, 5)

// كتب كوداً يتحقق إذا كان الرقم المدخل:
// أكبر من 10 وأقل من 20 باستخدام &&.
// أقل من 5 أو أكبر من 15 باستخدام ||.


num1 = 21;
num1 > 10 && num1 < 20 ? console.log("true") : console.log("false");
num2 = 11;
num2 < 5 || num2 > 15 ? console.log("true") : console.log("false");


// أوجد باقي القسمة عند تقسيم 100 على 7
console.log(100 % 7)

// اكتب برنامجاً يحسب الراتب الصافي لموظف بعد خصم ضريبة الدخل(15 %) وضريبة الضمان الاجتماعي(5 %)

let salary = 5000;
let incometax = (15 / 100) * salary;
let Socialsecurity = (5 / 100) * salary;
let netsalary = salary - incometax - Socialsecurity;

console.log(netsalary)


// اكتب برنامجاً يتحقق من هذه الحالة:
// إذا كان الرقم المدخل زوجياً، اضربه بـ 2.
// إذا كان فردياً، اطرحه من 1.

let input_num = 3;
input_num % 2 == 0 ? console.log(input_num * 2) : console.log(input_num - 1)



// اكتب برنامجاً يحسب عدد الدقائق في عدد أيام مدخل(استخدم العملية أيام×24×60أيام times 24 times 60أيام×24×60)

let input_days = 3;
let minutes = input_days * 24 * 60;
console.log(`in ${input_days} there are ${minutes} minutes.`)


// قم بتحويل هذا الكود الى IF ELSE

// let fruit = "apple";
// switch (fruit) {
//    case "apple":
//    case "pear":
//       console.log("This is a pome fruit.");
//       break;
//    case "banana":
//    case" mango":
//       console.log("This is a tropical fruit.");
//       break;
//    default:
//       console.log("Unknown fruit.");
// }



let fruit = "mango"
if (fruit === "apple" || fruit === "pear") {
    console.log("This is a pome fruit.")
}
else if (fruit === "banana" || fruit === "mango") {
    console.log("This is a  tropical fruit.")
}
else {
    console.log("Unknown fruit.")
}


fruit === "apple" || fruit === "pear" ? console.log("This is a pome fruit.")
    : fruit === fruit === "banana" || fruit === "mango" ? console.log("This is a  tropical fruit.")
        : console.log("Unknown fruit.")


// Challenge of Numbers

// let product = 350;
// let tax = (12 / 100) * product;
// let netprice = product - tax;


function product(price, tax) {

    let netPrice = price + tax;

    console.log(`
price: ${price} 
taxAmont: ${tax}
netprice:${netprice} `)
    netPrice > 100 ? console.log("pahaldır") : console.log("uygundur")
}

product(350, ((12 / 100) * 350))



























