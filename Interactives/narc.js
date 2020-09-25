(function ($) {
    $(document).ready(function () {

        $('#run').click(function () {
            let userEntry = $('#input').val()
            console.log(userEntry)
            let numberSplit = userEntry.split("")
            $('#outputConsole').append(`
                  <div>Your Number: ${userEntry}</div>
                   <div>Number of digits: ${numberSplit.length}<br>
                   <div>Digits to add: ${function () {${numberSplit}.}}</div></div>
                   <div></div>        
                `)
        })


    })
})(jQuery);