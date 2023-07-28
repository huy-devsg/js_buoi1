// Bài 1 : tính tiền lương nhân viên

// b1: các dữ liệu đầu vào
var workDay = 26;
var payDay = 100000;
var salary;
// b2: xử lí bài toán
salary = workDay * payDay;

// b3 : các dữ liệu đầu ra
console.log('salary: ', salary);
// <--------------------------------------------------->
// Bài 2 : Tính giá trị trung bình

// b1: các dữ liệu đầu vào
var num1,num2,num3,num4,num5;
var avg;
num1=1;
num2=2;
num3=3;
num4=4;
num5=5;
// b2: xử lí bài toán
avg = (num1+num2+num3+num4+num5)/5;
console.log('<---------------------------->');

// b3 : các dữ liệu đầu ra
console.log('avg: ', avg);
console.log('<---------------------------->');


// <---------------------------------------------------
// Bài 3 : Quy đổi tiền

// b1: các dữ liệu đầu vào
const USD=23500;
var VND;
var money;
VND = 2;
// b2: xử lí bài toán
money = USD * VND;
// b3 : các dữ liệu đầu ra
console.log('money: ', money);
console.log('<---------------------------->');

// <--------------------------------------------------->
// Bài 4 : Tính diện tích, chu vi chữ nhật

// b1: các dữ liệu đầu vào
var width,length,perimeter,area;
width = 2;
length = 4;
// b2: xử lí bài toán
perimeter = (width+length)*2;
area = width * length;
// b3 : các dữ liệu đầu ra
console.log('perimeter: ', perimeter);
console.log('area: ', area);
console.log('<---------------------------->');


// <--------------------------------------------------->
// Bài 5 : Tính tổng 2 kí số

// b1: các dữ liệu đầu vào
var num,ten,unit;
num = 12;
// b2: xử lí bài toán
ten = num / 10;
unit = num % 10;
ten=Math.floor(ten);
total = ten + unit;
// b3 : các dữ liệu đầu ra
console.log('ten + unit = ', total);
