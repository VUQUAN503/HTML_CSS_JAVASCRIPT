
// lấy ra tất những button có class number
var numbers = document.querySelectorAll('.number');
// nó trả về mảng các phần tử là các thẻ button
// string name.length => lấy ra đọ dài của chuỗi
// vì nó là mảng => mình duyệt mảng để truy xuất để từng cái ô button
// numbers.length => lấy ra số lượng phần tử của mảng
let theP = document.querySelector('.result');

// numbers.forEach((e)=>{
//     e.onclick(()=>{
//         console.log(e.innerHTML);
//     });
// });
for(var i = 0; i < numbers.length; ++i)
{
    numbers[i].onclick = function(){
        // phần tử thứ 0 là 9 1 là 8 , 2 là 7 3, 
        console.log(numbers[i].innerText);
    }   
}

