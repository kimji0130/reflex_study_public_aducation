const canvas = document.querySelector('canvas')


// console.log(canvas)

const ctx = canvas.getContext('2d') //이 context가 우리가 그리게 될 도구를 말한다,

console.log(ctx)

//===================================
const canvasWidth = 300
const canvasheight = 300

canvas.style.width = canvasWidth + "px"
canvas.style.height = canvasheight + "px"
//canvas안에 그린 네모가 직사각형으로 변해버린이유??
/* 캔버스는 기본적으로 가로 300 세로 150으로 설정되어있는데 세로를 강제로 2배 늘렸기 때문이다.*/

// 캔버스의 크기만 바뀌고 원래의 사각형이 잘 만들어짐
canvas.width = canvasWidth
canvas.height = canvasheight

// if) canvas width height를 100으로 바꾼경우 사각형이 흐린하게 보이는데,
// 캔버스 고유의 크기가 100,100인데 css의 크기에 맞춰 3배가 확대되었기 때문에 픽셀이 깨져 흐릿하게 보이는것
// result==> 그래서 캔버스 엘리먼트 사이즈와 캔버스 고유의 사이즈를 동일하게 맞춰서 작업을 해야한다.
//======================================//



ctx.fillRect(10, 10, 50, 50)
// ctx.fillRect(시작하는 x, 시작하는 y, 가로길이, 세로길이) fillRect라는 메소드
// 캔버스는 기본적으로 가로300px 세로150px으로 그려지기 떄문에
// 가로300 세로150안에 10,10 띄어진 위치에 가로 세로가 50인 도형이 그려짐..

//캔버스 사이즈 조절하는 방식 2가지
/*
1. CSS값을 직접 수정하여 canvas의 width, height 값을 직접 조정하는 방식
2. 캔버스 자체의 속성인 width, height 값을 주는것 
*/