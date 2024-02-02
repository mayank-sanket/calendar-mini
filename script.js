let nav = 0
let clicked = null
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')): [];


const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];

function load(){
    const dt = new Date();
    // console.log(dt)

    const day = dt.getDate()
    const month = dt.getMonth()
    const year = dt.getFullYear()

    // console.log(day, month, year); // prints 02 01 2024 on 02 feb 2024, therefore, do this: 
    console.log(day, month+1, year) //f

}
load();