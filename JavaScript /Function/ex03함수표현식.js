//함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조
//function() -> 익명 함수

const intro = function(){
    console.log('안녕하세요. 저는 이선아입니다.😊');
}
intro();

//매개변수
const lunch = function(menu){
    console.log(`점심으로는 ${menu} 먹었습니다.😆🍚`);
}

lunch('피자🍕');

// 매개변수 + return문
const dinner =function(menu){
    return `저녁으로는 ${menu} 먹을 거예요!🥓🥓`;
}
console.log(dinner('햄버거'));
