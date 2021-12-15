// Get element from DOM
// const h1Element = document.getElementsByTagName("h1");
// const h1Element = document.getElementsByClassName("h1-class"); // => return array
// const h1Id = document.getElementById("h1-id");

// // return the first
// const h1QuerySelect = document.querySelector(".h1-class");

// // return array
// const h1QuerySelectAll = document.querySelectorAll(".h1-class");

// console.log(h1Element);
// console.log(h1Id);
// console.log("h1 query selector", h1QuerySelect);
// console.log("h1 query selectorall ", h1QuerySelectAll);

// h1QuerySelect.innerHTML = "anhtu";
// h1QuerySelect.classList.add("abc");


// Button
const arr=[{
    name : "Đỗ Văn A",
    age : 12,
    add : "Hà Nội",
    mark: 9,
},
{
    name: "Nguyễn Văn B",
    age: 23,
    add: "Hồ Chí Minh",
    mark: 8,
},
{
    name: "Michael Myers",
    age: 15,
    add: "Đà Nẵng",
    mark: 7,
},
{
    name: "Only C",
    age: 16,
    add: "Ca Mau",
    mark: 7,
},
{
    name: "Bean",
    age: 19,
    add: "Nha Trang",
    mark: 7,
}
];
//Thêm dữ liệu//
const name = document.querySelector(".ip-name");
const age = document.querySelector(".ip-age");
const add = document.querySelector(".ip-address");
const mark = document.querySelector(".ip-score");

const btnAdd = document.querySelector(".btn-add-student");
btnAdd.addEventListener("click", () => {
// Get value input
const studentName = name.value;
const studentAge = age.value;
const studentAddress = add.value;
const studentScore = mark.value;

arr.push({
name: studentName,
age: studentAge,
add: studentAddress,
mark: studentScore,
});
console.log({ arr });
alert("Bạn đã thêm thành công");
});
//In dữ liệu ban đầu
const btnTemp = document.querySelector(".sortedTemp");;
btnTemp.innerHTML = `
    <th>Tên</th>
    <th>Tuổi</th>
    <th>Địa chỉ</th>
    <th>Số điểm</th>  
`;

const sortedContainer = document.querySelector(".sortedList");
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const divContainer = document.createElement("tr");
    sortedContainer.appendChild(divContainer);
    divContainer.innerHTML = `
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.add}</td>
        <td>${element.mark}</td>   
    `;
}
;
                

// //Tìm tuổi cao nhất trong mảng//
const btnSearchAge = document.querySelector(".btn-search-highest-age");
btnSearchAge.addEventListener("click", () => {
let last = sortedContainer.lastElementChild;
while(last){
    sortedContainer.removeChild(last);
    last=sortedContainer.lastElementChild;
}
let studentHighestAge = arr[0];
for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (studentHighestAge.age < element.age) {
        studentHighestAge = element;
    }
}
const divContainer = document.createElement("tr");
sortedContainer.appendChild(divContainer);
divContainer.innerHTML = `
    <td>${studentHighestAge.name}</td>
    <td>${studentHighestAge.age}</td>
    <td>${studentHighestAge.add}</td>
    <td>${studentHighestAge.mark}</td>
`;
}
);


//Tìm người có số điểm cao nhất
const btnSearchmark = document.querySelector(".btn-search-highest-mark");
btnSearchmark.addEventListener("click", () => {
let last = sortedContainer.lastElementChild;
while(last){
    sortedContainer.removeChild(last);
    last=sortedContainer.lastElementChild;
}
let studentHighestmark = arr[0];
for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (studentHighestmark.mark < element.mark) {
        studentHighestmark = element;
    }
}

const highMark = document.querySelector(".highest-mark");
const divContainer = document.createElement("tr");
sortedContainer.appendChild(divContainer);
divContainer.innerHTML = `
<td>${studentHighestmark.name}</td>
<td>${studentHighestmark.age}</td>
<td>${studentHighestmark.add}</td>
<td>${studentHighestmark.mark}</td>
`;
});

//Sắp xếp học viên
arr.sort(function compare(a, b) {
if (a.name < b.name) {
return -1;
}
if (a.name > b.name) {
return 1;
}
return 0;
});
//Đọc trả dữ liệu

const btnSorted = document.querySelector(".btn-sorted");
btnSorted.addEventListener("click", () => {
let last = sortedContainer.lastElementChild;
while(last){
sortedContainer.removeChild(last);
last=sortedContainer.lastElementChild;
}
for (let i = 0; i < arr.length; i++) {
const element = arr[i];
const divContainer = document.createElement("tr");
sortedContainer.appendChild(divContainer);
divContainer.innerHTML = `
    <td>${element.name}</td>
    <td>${element.age}</td>
    <td>${element.add}</td>
    <td>${element.mark}</td>   
`;
}
});

//Tìm kiếm địa chỉ theo tìm kiếm

const btnFind = document.querySelector(".btn-find");

btnFind.addEventListener("input",(event)=>{
let last = sortedContainer.lastElementChild;
while(last){
sortedContainer.removeChild(last);
};

const value=event.target.value;
const ex=[...arr].filter((arr)=>
    arr.add.includes(value)   
);
for (let i = 0; i < ex.length; i++) {
    const element = ex[i];
    const divContainer = document.createElement("tr");
    sortedContainer.appendChild(divContainer);
    divContainer.innerHTML = `
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.add}</td>
        <td>${element.mark}</td>   
    `;
}
});

