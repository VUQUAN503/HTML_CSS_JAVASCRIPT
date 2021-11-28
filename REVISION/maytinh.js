const numbers = document.querySelectorAll('div .number');
const display = document.querySelector('.result');

for(let i = 0; i < numbers.length; ++i)
{
    numbers[i].onclick = function(){
        if(display.innerText === '0')
        {
            // nếu nội dung trong ô hiển thị nó là 0
            // thì mình xóa nó đi
            display.innerText = '';
        }
        display.innerText += numbers[i].innerText;
    }
}

// cộng
// lấy ra thẻ button có class add
// mình
// đợi thi xong
let add = document.querySelector('.add');
add.onclick = function(){
    
}


