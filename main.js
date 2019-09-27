console.log("it is working");

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('clicked')

        var yourname = $('.yourname').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (yourname.length > 2) {
            statusElm.append('<div>Name is valid. Thank You</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid. Please refresh the page and type a valid Name</div>')
        }


        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div> Email is valid. Thank You</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid. Please refresh the page and try again.</div>')
        }


        if (message.length >= 10) {
            statusElm.append('<div>Message is valid. Thank You.</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid. Please refresh the page and try again. </div>')

        }

    })
})