const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginInputBtn  = document.querySelector("#login-form button")
const greeting = document.querySelector("h1");

//오타줄이기 위해서 js에서 변수로 설정. 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function inputbtnSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);

    paintGreeting(username);

    // log in하면 form은 사라지고 value는 남아있게 하기
    //classlist , hidden 사용
   
     //h1에 username 넣어주기 합칠 때 +말고 ``방식쓰기
    
    // h1에 애초에 아무것도 없어서 안 나타나지만 공간을 차지
    //하고 있기 때문에 html에서 class hidden으로 없애준 다음
    //나타나게 해야 함 
    
}


function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",inputbtnSubmit);
} else{
    paintGreeting(saveUsername);
}

