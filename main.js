const articles = [
    {
        title:'Pierwszy tekst',
        image: 'https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453_960_720.jpg',
    },
    {
        title:'Drugi Tekst',
        image: 'https://cdn.pixabay.com/photo/2022/04/20/06/28/flowers-7144467_960_720.jpg',
    },
    {
        title:'Tytuł Trzeci',
        image: 'https://cdn.pixabay.com/photo/2021/05/12/10/09/common-blue-6247877_960_720.jpg',
    }
]
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

let active = 0;

img.src = articles[active].image;
h1.textContent = articles[active].title;

const changeSlide = ()=>{
    active++;

    if(active === articles.length){
        active = 0;
    }
    img.src = articles[active].image;
    h1.textContent = articles[active].title;
    changeDot()
}