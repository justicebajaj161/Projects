let string = "";
let buttons = document.querySelectorAll('.size');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.textContent == '='){
            string = eval(string);
            document.querySelector('.sol').textContent=string;
        }
        else if(e.target.textContent == 'AC'){
            string='';
            document.querySelector('.sol').textContent=string;

        }
        else{
             console.log(e.target)
        string = string+e.target.textContent;
        document.querySelector('.sol').textContent=string;
    }
    })
})






