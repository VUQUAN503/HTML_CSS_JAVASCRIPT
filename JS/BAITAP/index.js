

let fullName = document.querySelector('#name');
console.log(fullName);
let kiemtra = document.querySelector("#kiemtra");
console.log(kiemtra);

let menutwo = document.querySelector('.menutwo');

let dropmenu = document.querySelector('.dropmenu');
dropmenu.onmouseover = function(){
    menutwo.style.display = 'block';
}

dropmenu.onmouseleave = function(){
    menutwo.style.display = 'none';
}

kiemtra.onclick = function(e){
    e.preventDefault(); // bỏ đi sự kiện mặc định của phần tử
    fullName.value = chuanHoaTen(fullName.value);
}


// viết hàm chuẩn hoả dữ liệu

function chuanHoaTen(data){
    // fullName.value = '     vu dinh quan';
    // for(let i = 0; i < fullName.value.length; ++i)
    // {
    //     if(fullName.value[i] === ' ')
    //     {
    //         fullName.value.slice(i, i + 1);
    //     }
    // }
    // console.log(fullName.value.trim());
    data = data.trim();// xoá nhữngkhoảng trắng đầu và cuối
    // chữ cái đầu tiên mỗi từ phải viết hoa
    // vd  fullName.value = hoc     lap trinh -> Hoc Lap Trinh
    for(let i = 0; i < data.length; ++i)
    {
        if(data[i] === ' ')
        {
            if(data[i + 1] === ' ')
            {
                data = data.replace(data[i], '');
                i--;
            }
        }
    }
    let arr = data.split(' ');
    for(let i = 0; i < arr.length; ++i)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
    // mỗi từ chỉ cách nhau duy nhất một khoảng trắng
    // hoc  lap    trinh
}

