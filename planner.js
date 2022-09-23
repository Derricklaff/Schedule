const currentDay = moment().format('dddd LL')
// console.log(currentDay)
let $currentDay = $('#currentDay')

let currentTime = moment().format('h:mm A')

$currentDay.text(currentDay)