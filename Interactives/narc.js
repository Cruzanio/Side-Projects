(function ($) {
    $(document).ready(function () {

        $('#run').click(function () {
            let userEntry = $('#input').val()
            let numberSplit = userEntry.split("")
            console.log(numberSplit)
            function arraytoNum(array) {
                let addTo = ''
                for (let element of array) {
                    addTo += ` (${element} ^ ${userEntry.length}) +`
                } return addTo.slice(0, -1)
            }
            $('#outputConsole').append(`
                  <div>Your Number: ${userEntry}</div>
                   <div>Number of digits: ${numberSplit.length}<br>
                   <div>Calculating: ${arraytoNum(numberSplit)}</div></div>
                   <div>Result = </div>        
                `)
        })


    })
})(jQuery);