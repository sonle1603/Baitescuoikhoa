/* A:
Bài 1: Problem Solving (30’) (Nhiều cách giải càng tốt)
//Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất*/
var plorp = ["KHANH", "HUNG", "CAO", "BINH", "PHUOC"];
var longest = plorp.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest);


/* Bài 2 : Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team*/
const arr=[{
    name: 'A',
    weight: 50
},{
    name: 'B',
    weight: 40
},
{
    name: 'C',
    weight: 20
},
{
    name: 'D',
    weight: 60
},
{
    name: 'E',
    weight: 40
},
];
let team1=0;
let team2=0;
for (i=0; i<arr.length;i++){
    if(i%2==0)team1+=arr[i].weight
    else team2+=arr[i].weight
}     
console.log("Team 1 tổng cân nặng là "+team1+" kg")
console.log("Team 1 tổng cân nặng là "+team2+" kg")


/* B :Code Challenge (60’)*/
var canvas = document.getElementById('canvas_picker').getContext('2d');
var img = new Image();
img.src = 'image.jpg';
$(img).load(function(){
  canvas.drawImage(img,0,0);
});
$('#canvas_picker').click(function(event){
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    var imgData = canvas.getImageData(x, y, 1, 1).data;
var R = imgData[0];
var G = imgData[1];
var B = imgData[2];
var rgb = R + ',' + G + ',' + B;
  $('#rgb input').val(rgb);
});
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}