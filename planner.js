const currentDay = moment().format('dddd LL')
// console.log(currentDay)
let $currentDay = $('#currentDay')

let currentTime = moment().format('h:mm A')

$currentDay.text(currentDay)

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    let userInfo = $(this).prev().val();
    console.log(userInfo)
    localStorage.setItem($(this).prev().attr("id"), userInfo)

});

$("input").each(function () {
    let selectedInput = parseInt($(this).attr("id"));

    if (selectedInput > currentTime) {
        $(this).addClass("future")

    } else if (selectedInput == currentTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + selectedInput).val(localStorage.getItem(selectedInput))
});