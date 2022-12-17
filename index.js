let output = document.getElementById('output');
let canBeUsed = new  Boolean(true);

    document.querySelectorAll(".but").forEach(buttons => {
        buttons.addEventListener('click', () => {
                output.innerText += buttons.innerText;
                canBeUsed = true;
        });
    });

    document.querySelectorAll(".char").forEach(chars => {
        chars.addEventListener('click', () => {
            if(canBeUsed){
                output.innerText += chars.innerText;
                canBeUsed = false;
            }
        });
    });

    document.getElementById('clear')
        .addEventListener('click', () => {
            output.innerText = " ";
 });

    document.getElementById('equal')
        .addEventListener('click', () => {
            output.innerText  = eval(output.innerText);
 });