

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
    // fullName.value = '     vu dinh quan';
    // for(let i = 0; i < fullName.value.length; ++i)
    // {
    //     if(fullName.value[i] === ' ')
    //     {
    //         fullName.value.slice(i, i + 1);
    //     }
    // }
    fullName.value.trim();// xoá nhữngkhoảng trắng đầu và cuối
    // chữ cái đầu tiên mỗi từ phải viết hoa
    // vd  fullName.value = hoc     lap trinh -> Hoc Lap Trinh
    fullName.value[0].toString().toUpperCase();
    for(let i = 0; i < fullName.value.length; ++i)
    {
        if(fullName.value[i] === ' ' && fullName.value[i + 1] !== ' ')
        {   
            if(fullName.value[i + 1] >= 'a' && fullName.value[i + 1] <= 'z')
            {
                fullName.value[i + 1] -= 32;
            }
        }
    }
    // mỗi từ chỉ cách nhau duy nhất một khoảng trắng
    // hoc  lap    trinh
    for(let i = 0; i < fullName.value.length; ++i)
    {
        if(fullName.value[i] === ' ')
        {
            if(fullName.value[i + 1] === ' ')
            {
                fullName.value.replace(fullName.value[i], '');
            }
        }
    }
}


// viết hàm chuẩn hoả dữ liệu

function chuanHoaTen(){
    // // fullName.value = '     vu dinh quan';
    // // for(let i = 0; i < fullName.value.length; ++i)
    // // {
    // //     if(fullName.value[i] === ' ')
    // //     {
    // //         fullName.value.slice(i, i + 1);
    // //     }
    // // }
    // fullName.value.trim();// xoá nhữngkhoảng trắng đầu và cuối
    // // chữ cái đầu tiên mỗi từ phải viết hoa
    // // vd  fullName.value = hoc     lap trinh -> Hoc Lap Trinh
    // fullName.value[0].toString().toUpperCase();
    // for(let i = 0; i < fullName.value.length; ++i)
    // {
    //     if(fullName.value[i] === ' ' && fullName.value[i + 1] !== ' ')
    //     {   
    //         if(fullName.value[i + 1] >= 'a' && fullName.value[i + 1] <= 'z')
    //         {
    //             fullName.value[i + 1] -= 32;
    //         }
    //     }
    // }
    // // mỗi từ chỉ cách nhau duy nhất một khoảng trắng
    // // hoc  lap    trinh
    // for(let i = 0; i < fullName.value.length; ++i)
    // {
    //     if(fullName.value[i] === ' ')
    //     {
    //         if(fullName.value[i + 1] === ' ')
    //         {
    //             fullName.value.replace(fullName.value[i], '');
    //         }
    //     }
    // }
    // return fullName.value;// trả về một chuỗi sau khi đc chuẩn hoá
}

