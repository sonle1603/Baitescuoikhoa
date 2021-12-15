//Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
let str_input  = prompt("son dep zai :");
let str_result=""
for(let i=str_input.length-1;i>=0;i--)
{    str_result=str_result+(str_input[i])
}
console.log(str_result);

//Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
let checked= false;
let strt;
do{
    strt = prompt("nhap string ");
    let dooo=parseInt(str);
    if(isNaN(dooo))
    {
        console.log("ban da nhap dung");
        checked=true;
        break;
    }
    else{
        console.log("ban da nhap khong dung");
        checked=false;
    }

} while(checked===false);
const arr = strt.split(" ");

// thực hiện viết hoa cho các ký tự đầu của mỗi chữ
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

// nối chuỗi
const str2 = arr.join(" ");
console.log(str2);

//Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
const arr_bai3=[1,2,3,3,4,5,4,4,4,5,5];
var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
console.log("ket qua");
console.log(newArr);

//Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
const studens=[
    {
        name:"A",
        age: 15,
        luong: 22,
        chucvu:"hocsinh"
    },
    {
        name:"B",
        age: 24,
        luong: 34,
        chucvu:"hocsinh"
    },
    {
        name:"c",
        age: 21,
        luong: 10,
        chucvu:"hocsinh"
    },
]
for(let i=0;i<studens.length;i++)
{
    const h=studens[i];
    console.log(h);
}
//them
const them ={
    name:"a",
    age: 21,
    luong: 30,
    chucvu:"can bo"
}
studens.push(them);
console.log(studens);

// xoa
studens.pop();
console.log(studens);

//Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
let ngay, thang, nam;
let isCheck=false;
do{
    ngay=prompt("nhap ngay");
    thang=prompt("nhap thang");
    nam=prompt("nhap nam");
    var ngayNum = parseInt(ngay);
    var thangNum=parseInt(thang);
    var namNum=parseInt(nam);
    // Hàm isNaN sẽ kiểm tra xem ký tự vừa đc nhập vào có phải là số hay ko, nếu ko phải là số sẽ trả về true là số thì sẽ trả về false
    if(!isNaN(ngayNum)&&!isNaN(thangNum)&&!isNaN(namNum))
    {
        console.log("ban da nhap dung");
        isCheck=true;
        break;
    }
    else{
        console.log("nhap sai, moi nhap lai");
        isCheck=false;
    }

}while(isCheck==false);


switch(thangNum) {
case 1: case 3: case 5: case 7: case 8: case 10:  case 12:

    if( ngayNum>0 && ngayNum<=31){
        // Check xem nếu như nhập vào là ngày 31 thì ngày sẽ trở về 1 và tháng thì + 1
        if(ngayNum == 31){
            // Check xem nếu như nhập vào là tháng 12 thì ngày sẽ trở về 1, tháng trở về tháng 1 và năm thì + 1
            if(thangNum == 12){
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: 01/01/${namNum+1}\n`);
            }else{
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: 01/${thangNum+1}/${namNum}\n`);
            }
        }else{
            console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: ${ngayNum+1}/${thangNum}/${namNum}\n`);
        }
        break;
    }
    else
    { 
        console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} ko hop le\n`);
        break;
    }

case 4: case 6: case 9: case 11:
    if( ngayNum<=30 && ngayNum>0){
        // Check xem nếu như nhập vào là ngày 30 thì ngày sẽ trở về 1 và tháng thì + 1
        if(ngayNum == 30){
            console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: 01/${thangNum+1}/${namNum}\n`);
        }else{
            console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: ${ngayNum+1}/${thangNum}/${namNum}\n`);
        }
        break;
    }
    else
    {
        console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} ko hop le\n`);
        break;
    }
case 2:
    // check điều kiện năm nhuận
    if((namNum % 4===0 &&namNum%100 !==0 && namNum % 400 !==0)||(namNum%100===0 && namNum % 400===0)){
        if( ngay <=29 && ngay > 0)
        {
            if(ngayNum == 29){
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: 01/${thangNum+1}/${namNum}\n`);
            }else{
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: ${ngayNum+1}/${thangNum}/${namNum}\n`);
            }
            break;
        }
        else
        { 
            console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} ko hop le\n`);
            break;
        }
    }else{
        if( ngay <=28 && ngay > 0)
        {
            if(ngayNum == 28){
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: 01/${thangNum+1}/${namNum}\n`);
            }else{
                console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} hop le. Ngay tiep theo la: ${ngayNum+1}/${thangNum}/${namNum}\n`);
            }
            break;
        }
        else
        { 
            console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} ko hop le\n`);
            break;
        }
    }

default: 
    console.log(`Ngay ${ngayNum}/${thangNum}/${namNum} ko hop le\n`);
    break;

}