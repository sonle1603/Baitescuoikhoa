// chuẩn hóa đầu vào
let n = prompt("Bạn cần bao nhiêu phần tử") // khai báo chỉ số phần tử
const arr = []
do {
    for (let i = 0; i < n; i++) {
        const element = prompt(` nhập phần tử thứ ${i + 1}`)
        if(isNaN(element))
        {
            console.log("vui lòng nhập số ko phải chữ");
        }
        else{
            arr.push(parseInt(element))
        }       
    }
} while (arr.length < n);
console.log("gia tri arr : " + arr); 

// xắp xếp vị trí 
let swap
do {
     swap = false
    const end = arr.length - 1
    for (let index = 0; index < end; index++) {
    if (arr[index] > arr[index + 1])
    {
        swap =true
        let tem = arr[index]
        arr[index] = arr[index + 1]
        arr[index + 1] = tem
    }
 
}
} while (swap);
console.log(arr);
// tìm kiếm nhị phân
let l = 0  // chỉ số đầu phần tử
let r = n - 1 // chỉ số phần tử cuối 
let x = parseInt(prompt("vui long nhap số cần tìm"))
while(r >= l)
{
    const mid = parseInt((l + r)/ 2)
    console.log(mid);
    console.log(arr[mid]);
    if(arr[mid] == parseInt(x))
    {
        console.log(`đã tìm thấy ${arr[mid]}`);
        break
    }
    if(arr[mid > x])
    {
        r = mid - 1
    }
    if(arr[mid] < x)
    {
        l = mid + 1
    }
}