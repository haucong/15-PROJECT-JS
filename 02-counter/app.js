const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;
        console.log(style);
        if (style.contains('decrease')) {
          count--;
        } else if(style.contains("increase")){
            count ++;
        } else if ( style.contains("reset")){
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green'
        } else if( count < 0){
            value.style.color = "red"
        } else if( count === 0) {
            value.style.color = "#222"
        }

        value.textContent = count;
        console.log(count)
    })
})