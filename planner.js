
//Header date
const $currentDay = moment().format('LL');
$('#currentDay').text($currentDay);

//Local time
const $localTime = moment().format('HH');
console.log($localTime)

// Save when refreshed
$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    let $user = $(this).prev().val();
    localStorage.setItem($(this).prev().attr('id'), $user);
});

$('input').each(function () {
    let selectedInput = parseInt($(this).attr("id"));

    if (selectedInput > $localTime) {
        $(this).addClass("future")

    } else if (selectedInput == $localTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + selectedInput).val(localStorage.getItem(selectedInput))
});