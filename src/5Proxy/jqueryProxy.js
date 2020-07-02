import $ from 'jquery'

$('.myText').click(function () {
    setTimeout(function () {
        $(this).css('background-color', 'red')
    })
})

$('.myText').click(function () {
    const fn = function () {
        $(this).css('background-color', 'red')
    }
    setTimeout($.proxy(fn, this))
})