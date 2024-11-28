let prompt=document.querySelector("#prompt")
let container=document.querySelector(".container")
let btn=document.querySelector("#btn")
let chatContainer=document.querySelector(".chat-container")
letuserMessage=null;

let Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBGorMhZSMCzSxMz4p9uRHj5gw9s_tYXpU"


function createChatbox(html,className){
    let div=document.createElement("div")
    div.classList.add(className)
    div.innerHTML=html
    return div
}
async function getApiResponse(aiChatBox){
let textElement=aiChatBox.querySelector(".text")
    try{
    let response=await fetch(Api_Url,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            "contents":[
                {
                    "role":"user",
                    "parts":[{"text":userMessage}]}]
        })
    })
    let data=await response.json();
    let apiResponse=data?.candidates[0].content.parts[0].text;
    textElement.innerText=apiResponse
}
    catch(error){
        console.log(error)

    }
    finally{
        aiChatBox.querySelector(".loading").style.display="none"
    }
}
function showLoading(){
let html =`<div class="img">
                <img src="images/ai.png" alt="ai image" width="50">
            </div>
            <p class="text"></p>
            <img class="loading" src="images/animate.gif" alt="loading" height="50px">`;
            let aiChatBox=createChatbox(html,"ai-chat-box")
            chatContainer.appendChild(aiChatBox)
            getApiResponse(aiChatBox)
}

btn.addEventListener("click",()=>{
    userMessage=prompt.value
    if(userMessage ===''){
        container.style.display = "flex";
        return;  // Prevent further execution for empty input
    } else {
        container.style.display = "none";
    }
    
    if(!userMessage)return;
    let html = `
    <div class="img">
        <img src="images/us.png" alt="the image for a user" width="50">
    </div>
    <p class="text"></p>
`;
let userChatBox=createChatbox(html,"user-chat-box")
userChatBox.querySelector(".text").innerText=userMessage
chatContainer.appendChild(userChatBox)
prompt.value=""
setTimeout(showLoading,500)

})