// get current day and time; link to inner HTML
// header date 
var today = moment().format('LLL');
$("#currentDay").text(today);

// Local time
var localTime = moment().format('HH');
console.log(localTime)

// save to local storage and save when refreshed
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
    console.log(userInfo)
    localStorage.setItem($(this).prev().attr("id"), userInfo)

});

// time blocks for past, present, and future time
// change colors based on local time
$("input").each(function () {
    var selectedInput = parseInt($(this).attr("id"));

    if (selectedInput > localTime) {
        $(this).addClass("future")

    } else if (selectedInput == localTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + selectedInput).val(localStorage.getItem(selectedInput))
});