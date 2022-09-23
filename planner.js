const currentDay = moment().format('dddd LL')
// console.log(currentDay)
let $currentDay = $('#currentDay')

let currentTime = moment().format('h:mm A')


let $9amInput = $('#9am');
let $10amInput = $('#10am');
let $11amInput = $('#11am');
let $12pmInput = $('#12pm');
let $1pmInput = $('#1pm');
let $2pmInput = $('#2pm');
let $3pmInput = $('#3pm');
let $4pmInput = $('#4pm');
let $5pmInput = $('#5pm');

arrayOf$Times = [$9amInput, $10amInput, $11amInput, $12pmInput, $1pmInput, $2pmInput, $3pmInput, $4pmInput, $5pmInput]

$currentDay.text(currentDay)

for (i = 0; i < 9; i++) {
    if (moment("3pm", 'h A').isAfter(moment('9 AM', 'h A').add(i, 'h'))) {
        arrayOf$Times[i].addClass('past');
    }
    else if (moment('3pm', 'h A').isSame(moment('9 AM', 'h A').add(i, 'h'))) {
        arrayOf$Times[i].addClass('present');
    } else if (moment('3pm', 'h A').isBefore(moment('9 AM', 'h A').add(i, 'h'))) {
        arrayOf$Times[i].addClass('future');
    }

}


$('.saveBtn').on('click', function (event) {
    event.preventDefault();
    let $userInfo = $(this).siblings('input').val();
    let $localCurrent = localStorage.getItem('entry') || "";
    if ($userInfo) {
        localStorage.setItem('entry', $userInfo)
    }



})


$9amInput.val(localStorage.getItem('entry'));












































    // $(".saveBtn").on("click", function (event) {
//     event.preventDefault();

//     let userInfo = $(this).prev().val();
//     console.log(userInfo)
//     localStorage.setItem($(this).prev().attr("id"), userInfo)

// });

// $("input").each(function () {
//     let selectedInput = parseInt($(this).attr("id"));

//     if (selectedInput > currentTime) {
//         $(this).addClass("future")

//     } else if (selectedInput == currentTime) {

//         $(this).addClass("present")

//     }
//     else {
//         $(this).addClass("past")

//     };

//     $("#" + selectedInput).val(localStorage.getItem(selectedInput))
// })