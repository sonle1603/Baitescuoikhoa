const arr=[
    {
    name: "Harry Potter",
    img: "./img/HarryPotter.jpeg.jpg",
    ctr: "House: Gryffindor",
    gender: "Gender: Male",
    date : "Dob: 31-07-1980",
    ances : "Ancestry: Half-blood",
    eye : "Eye Color: Green",
    hair : "Hair Color: Black"
},{
    name: "Hermione Granger",
    img: "./img/Herm.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Ron Weasley",
    img: "./img/Ron.jpg",
    ctr: "BANE",
},
{
    name: "Draco Malfoy",
    img: "./img/Draco.jpg",
    ctr: "House: Slytherin",
},
{

    name: "Minerva McGonagall",
    img: "./img/Miner.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Cedric Diggory",
    img: "./img/Ced.png",
    ctr: "House: Hufflepuff",
},
{
    name: "Cho Chang",
    img: "./img/chochang.jpg",
    ctr: "House: Ravenclaw",
},
{
    name: "Severus Snape",
    img: "./img/seven.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Rubeus Hagrid",
    img: "./img/Rube.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Neville Longbottom",
    img: "./img/Nevi.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Luna Lovegood",
    img: "./img/luna.jpg",
    ctr: "House: Ravenclaw",
},
{
    name: "Ginny Weasley",
    img: "./img/ginny.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Sirius Black",
    img: "./img/sirius.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Remus Lupin",
    img: "./img/remus.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Arthur Weasley",
    img: "./img/arthur.jpg",
    ctr: "House: Gryffindor",
},
{
    name: "Bellatrix Lestrange",
    img: "./img/bella.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Lord Voldemort",
    img: "./img/lord.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Horace Slughorn",
    img: "./img/hora.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Kingsley Shacklebolt",
    img: "./img/king.jpg",
    ctr: "House:",
},
{
    name: "Dolores Umbridge",
    img: "./img/dolo.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Lucius Malfoy",
    img: "img/luci.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Vincent Crabbe",
    img: "img/vince.jpg",
    ctr: "House: Slytherin",
},
{
    name: "Gregory Goyle",
    img: "./img/greg.jpg",
    ctr: "House: Slytherin",
},
]

const sortedContainer = document.querySelector(".post-items");
const render = (arr, sortedContainer)=>{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const divContainer = document.createElement("div");
        divContainer.classList.add("p-contentCol")
        sortedContainer.appendChild(divContainer);
        divContainer.innerHTML = `
            <div class="info">
                <h2>${element.name}</h2>
                <p class="ctr">${element.ctr}</p>
            </div> 
            <div class="imagefloat">
                <img src="${element.img}" alt="">
            </div>
        `;
    }
};
//In dữ liệu//
render(arr,sortedContainer);

//Bắt class trong html//
const btnFind = document.querySelector(".input-search");
btnFind.addEventListener("input",(event)=>{
    //Xóa dữ liệu khi có sự kiện//
    let last = sortedContainer.lastElementChild;
    while(last){
        sortedContainer.removeChild(last);
        last=sortedContainer.lastElementChild;
    };
    //Bắt ký tự trong sự kiện chuyển đổi thành giá trị
    const value=event.target.value;
    // So sánh sự kiện với mảng dữ liệu
    const ex=[...arr].filter((arr)=>
        arr.ctr.includes(value)   
    );
    // In ra màn hình
    render(ex, sortedContainer);
});
const details = document.querySelector(".details");
let query = window.location.search.substring(1);
let itemFind = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i].id==query){
  itemFind=arr[i];
  }
}
const detailsHtml = document.createElement("div");
detailsHtml.classList.add("p-contentCol")
details.appendChild(detailsHtml);
detailsHtml.innerHTML = `
      <div class="info">
          <h2>${itemFind.name}</a></h2> 
          <p class="ctr"><strong>Gender:</strong>${itemFind.gender}</p>
          <p class="ctr"><Dob :</strong>${itemFind.date}</p>
          <p class="ctr"><strong>Ancestry: </strong>${itemFind.ances}</p>
          <p class="ctr"><strong>Eye Color: </strong>${itemFind.eye}</p>
          <p class="ctr"><strong>Hair Color: </strong>${itemFind.hair}</p>
          <p class="ctr"><strong>House: </strong>${itemFind.ctr}</p>
      </div> 
      <div class="imagefloat">
          <img src="${itemFind.img}" alt="">
      </div>  
  `;