
// /*
// cách đặt tên biến
// var(let)
// int a 
// float
// string
// */



// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// // console.log(a % b);// chia lấy dư

// /*
// >= <= ===, !==, !
// nếu so sánh bằng hai đấu ==: nó chỉ so sánh phần nội dung
// mà không quan tâm kiểu dữ liệu
// 1 == '1' => hai thằng bằng nhau true
// ===:       1 === '1' => false
// */ // kha báo một biến a
// // toán tử + - * / (%)
// let b = 3;

// // tìm max trong hai số a, b
// // if(a > b)
// // {
// //     console.log("a lớn hơn b");
// // }
// // else{
// //     console.log("b lớn hon a");
// // }

// let a = 10;
// let string = "10";


// //hàm không có câu lệnh 
// //return trong thân hàm => hàm ko có giá trj trả về
// function hello(){
//     console.log("xin chao các bạn chả hạn");
// }
// // int tong(int a, int b)
// // {

// // }
// // truyền tham số cho hàm thì truyền trực tiếp tên biến
// function Tong(a, b)
// {
//     // hàm có câu lệnh retrun bên trong => hàm có giá trị trả về
//     return a + b;
// }

// let ketqua = Tong(5, 6);
// console.log(ketqua);

// // mọi người có thể gán trực tiếp hàm cho một biến
// let Tich = function(a, b){
//     return a * b;
// }

// let value = Tich(5, 4);

// console.log(value);
// console.log(Tich(5, 4));

// hello();

// /*
// VÒNG LẶP
// + FOR, FOREARCH, WHILE, DO WHILE
// */

// // tính gia thừa của một số n
// let n = 6;
// let giaithua = 1;
// // for(let i = 1; i <= n; ++i)
// // {
// //     giaithua *= i;
// // }

// let i = 1;
// while(i <= n)
// {
//     giaithua *= i;
//     ++i;
// }

// console.log(giaithua);


// /*
// mảng một chiều
// int a[100] = {1, 2, 3, 4,5};

// let arr = [1, 2, 3, 4, 5];

// let arr = {}; đối tượng
// */

// let arr = [1, 2, 3, 4 , 5];
// console.log(arr);
// for(let i = 0; i < arr.length; ++i)
// {
//     console.log(arr[i]);
// }

// let subject = 'Hoc Javascript';

// subject[0];

// console.log(subject.charAt(1));


// /*
// chuỗi
// giống hệt chuỗi c++ là một class
// đc hỗ trợ những phương thức xử lý
// */

//DOM DOCUMENT OBJECT MODEL(TƯƠNG TÁC ĐẾN NHỮNG PHẦN TỬ)

/* từ thằng cha(trình duyệt(document)) mình có thể
lấy ra những thẻ con thông qua
+ getElementById, getElementsByTagName, getElementClassName
+ querySelector, querySelectorAll

+ chú ý muốn lấy nội dung của phần tử khác input dùng 
innerText
còn muốn lấy nội dung của thẻ input => value

getElementById lấy ra thẻ con thông qua thuộc tính ID
 */
// getElementById chỉ lấy ra môt phần tử duy nhất
// getElementsByClassName nó trả về một mảng gồm các phần tử
// có class là mình truyền vào
// thePs là một mảng một chiều chứa tất cả các thẻ p
// let thePs = document.getElementsByClassName('one');
// // lấy ra thẻ P
// console.log(thePs);
// for(let i = 0; i < thePs.length; ++i)
// {
//     // lấy ra thẻ p thứ i trong tập hợp
//     thePs[i].innerText = 'HỌC JAVA';
// }

/*
div.item p : lấy ra những thẻ p nằm trong thẻ div có class là item

+ querySelector : trả về một thẻ
+ cú pháp truy xuất đến phần tử để thay đổi css
+ thông qua cú pháp selector(cú pháp css)
+ querySelectorAll(): trả về một mảng(danh sách) các phần tử
+ thông qua cú pháp selector
*/
// // lấy ra những thẻ p có class là one
// let theP = document.querySelector('p.one');
// console.log(theP);
// theP.innerText = "HỌC JAVA";


// lấy ra những thẻ p có class là one
// let thePs = document.querySelectorAll('p.one');
// console.log(thePs);


// for(let i = 0; i < thePs.length; ++i)
// {
//     thePs[i].innerText = "HỌC JAVA";
// }

let theA = document.querySelector('a');

// thay đổi thuộc tính của thẻ bằng cách . trực tiếp
// theA.href = "https://gokisoft.com/";
// setAttribiue('tên thuộc tính muốn xet', 'giá trj xét cho nó')
// theA.setAttribute('href', 'https://gokisoft.com/');
// console.log(theA.href);


//THAY ĐỔI THUỌC TÍNH CSS CỦA THẺ BẰNG CÁCH
// DÙNG thẻ.style.thuộc tính css cần thay đổi
// let thePs = document.querySelectorAll('p.one');
// console.log(thePs);

// for(let i = 0; i < thePs.length; ++i)
// {
//     // font-size
//     // chú ý khi thay đỏi css thuộc tính nào có 
//     // hai từ trở lên font-size => fontSize
//     // thì từ thứ hai trở đi thì viết hoa chữ cái đầu tiên
//     thePs[i].innerText = "HỌC JAVA";
//     thePs[i].style.color = 'red';
//     thePs[i].style.fontSize = '30px';
//     thePs[i].style.backgroundColor = 'blue';
// }


// CÁC SỰ KIỆN THÔNG DỤNG XẢY RA TRÊN CÁC PHẦN TỬ
/*
CLICK: CẢY RA KHI NGƯỜI DÙNG CLICK VÀ THẺ
MOUSEMOVE: XẢY RA KHI CON TRỎ CHUỘT DI CHUYỂN
MOUSELEAVE: XẢY RA KHI KHI CON TRỎ CHUỘT RỜI ĐI
MOUSEOVER: KHI CON TRỎ CHUỘT DI CHUYỂN ĐẾN PHẦN TỬ

FORM
+ BLUR: KHI CON TRỎ CHUỘT RỜI KHỎI Ô INPUT
+ FORCUS: KHI CON TRỎ CHUỘT NẰM TRONG Ô INPUT

CHÚ KHI BẮT SỰ KIỆN CHO MỘT PHẦN TỬ
CÚ PHÁP
TENBIEN.on[tên sự kiện] = function(){
}
*/
let theP = document.querySelector('p.one');

theP.onclick = function(){
    theP.style.color = 'red';
    theP.style.backgroundColor = 'blue';
}

theP.onmouseover = function(){
    theP.style.color = 'red';
}

theP.onmouseleave = function(){
    theP.style.color = 'blue';
}

// theP.innerText = 'HỌC CSS';
// mình muốn thay đổi nội dung của thẻ P thì mình dùng innerText
// console.log(theP.innerText);