window.addEventListener("DOMContentLoaded", (event) =>{

    let followers  = document.querySelectorAll(".socials__number");
    let counter = 0;

    followers.forEach(number => {

        let max = parseInt(number.getAttribute("data-target"));


        let inter = setInterval(() => {

            let actual = parseInt(number.innerHTML);
            counter = max / 300;

            if(actual > max){
                number.innerHTML = max;
                clearInterval(inter)

            }else{
                number.innerHTML = Math.ceil(counter + actual);
            }

        }, 10);

    });


});