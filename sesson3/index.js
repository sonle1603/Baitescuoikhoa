const a = 1; // => ô nhớ number 4 byte
const b = 2; // => ô nhớ
const c = 3; // => ô nhớ
const name = "t u a n h" // => ô nhớ 1 byte

// CRUD - create tạo mới - read đọc ra - update cập nhật mới - delete xoá phần tử

// Nguyên nhân ra đời mảng - array
const array = [1, 2, 3, 'tuanh']

// In ra màn hình
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// Thêm phần tử mới vào mảng
// Thêm phần tử mới vào đuôi mảng
array.push('anhtu')
    // Thêm phần tử vào đầu mảng
array.unshift('90')

// Sự khác biệt nối chuỗi
console.log('doanhtu' + 8);
console.log(`doanhtu${8}`);

// Bản chất của 1 chuỗi - string
const arr = ['t', 'u', 'a', 'n', 'h']
const string = 't u a n h'

// Xoá 1 phần tử khỏi mảng
// Xoá phần tử sau cùng
array.pop();

// Xoá phần tử dựa theo trị số - index
array.splice(0, 1)

// Cập nhật phần tử trong mảng
array[1] = 789

// Thêm phần tử vào vị trí bất kỳ trong mảng
array.splice(1, 0, 'yuzhao')

// git status - kiểm tra sự thay đổi ở thư mục hiện hành
// git add - thêm file vào commit
// git commit -m "message" - xác nhận việc đẩy file lên trình quản lý
// git push origin "tên branch chính" - đẩy code lên trình quản lý
// git pull - cập nhật phiên bản mới nhất về máy

// Triển khai thuật toán sắp xếp nổi bọt
// Nhập 1 mảng các giá trị
// In ra mảng sau khi được sắp xếp
const arrSort = [8, 9, 6, 4, 1, 3, 2]
let swapped = false
do {
    swapped = false
    for (let index = 0; index < arrSort.length - 1; index++) {
        if (arrSort[index] > arrSort[index + 1]) {
            let temp = arrSort[index]
            arrSort[index] = arrSort[index + 1]
            arrSort[index + 1] = temp
            swapped = true
        }
    }
} while (swapped)
console.log(arrSort);