let fruits = ['Apple', 'Banana', 'Pear', 'Orange', 'Plums']

let fruit_ar = fruits.length - 1

console.log(fruits);
alert("Boshlanadigan Arrayining uzunligi: " + fruits.length)

if (confirm("sizning arrayingizdan malumotlarni olib tashlamoqchimiz") == true) {
    alert("Arrayning uzunligi: " + fruit_ar);

    fruits.pop();
    
    console.log(fruits);
} else {
    alert("Arrayning uzunligi: " + fruits.length);

    console.log(fruits);
}


