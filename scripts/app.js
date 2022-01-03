const button = document.querySelector('button');
button.addEventListener('click', event =>{
    button.innerHTML = `클릭 수 : ${event.detail}`;
    if(event.detail % 5 === 0) alert("그만해라임마");
});

const df = document.querySelector('html');
df.onclick = function()
{
    alert('stop it')
}

