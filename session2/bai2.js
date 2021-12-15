var luong_ve = true;
var nhan_vien_ngan_hang = false;
var ly_do_cong_ty = true;

// Câu lệnh điều kiện
if (luong_ve === true) {
    if (nhan_vien_ngan_hang === true) {
        console.log("Lương chưa về - đéo vui được");
    } else {
        console.log("Lương đã về - vui vãi");
    }
} else {
    if (ly_do_cong_ty === true) {
        console.log("Vẫn vui - lương sắp về");
    } else {
        console.log("Lương chưa về");
    }
}

// Giải phương trình bậc 1: ax + b = 0
// ctrl + j
var a = prompt("Enter the first variable: ");
var b = prompt("Enter the second variable: ");

if (a === 0) {
    if (b === 0) {
        console.log("Phương trình có vô số nghiệm");
    } else {
        console.log("Phương trình vô nghiệm");
    }
} else {
    console.log("Phương trình có 1 nghiệm " + -b / a);
}

// Vòng lặp

for (let index = 0; index < 100; index = index + 2) {
    // index = 0
    // được lặp
    console.log(1);
}

let i = 0
while (i < 9) {
    // i = 0
    console.log(1)

    // i = 0 + 2 = 2
    i = i + 2
}

let index = 10;
do {
    console.log(1);
} while (index < 9);

// Chuẩn hoá dữ liệu đầu vào của người dùng
// Cho người dùng nhập dữ liệu từ bàn phím
// Chỉ cho nhập số, nếu nhập chữ thì thông báo để người dùng nhập lại

let check_valid = true;
let input;

do {
    // Nhập ký tự từ bàn phím
    input = prompt("Enter the your age");

    // Ép kiểu input về kiểu số
    const input_normalize_valid = parseInt(input);

    // Kiểm tra điều kiện xem input có phải là số không
    if (isNaN(input_normalize_valid)) {
        console.log("Not a number");
        check_valid = false;

    } else {
        check_valid = true;

        // Thoát khỏi vòng lặp gần nhất
        break;
    }
} while (!check_valid);

console.log("Number is: " + input);