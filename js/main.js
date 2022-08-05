let navList = Array.from(document.querySelectorAll('.nav-item a'));

navList.forEach((ele) => {
    ele.onclick = function () {
        navList.forEach((ele) => ele.classList.remove('active'));
        this.classList.add('active')
    }
})

let portoList = Array.from(document.querySelectorAll('.portfolio-arr li'));
console.log(portoList)
portoList.forEach((ele) => {
    ele.onclick = function () {
        portoList.forEach((ele) => ele.classList.remove('active'));
        this.classList.add('active')
    }
})