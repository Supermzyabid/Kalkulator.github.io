let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => { // Use "button" instead of "buttons" and fix the arrow function syntax
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') { // Use triple equals (===) for comparison
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AC') { // Use triple equals (===) for comparison
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DE') { // Use triple equals (===) for comparison
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
