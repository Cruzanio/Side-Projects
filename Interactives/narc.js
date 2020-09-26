(function ($) {
    $(document).ready(function () {

        $('#run').click(function () {
            let userEntry = $('#input').val()
            let numberSplit = userEntry.split("")
            let calculate = 0
            let yesOrNo = ""

            function arraytoNum(array) {
                let addTo = ''
                for (let element of array) {
                    addTo += ` (${element} ^ ${userEntry.length}) +`
                    calculate += Math.pow(element, userEntry.length)
                }
                return addTo.slice(0, -1)
            }

            arraytoNum(numberSplit)
            if (calculate === parseInt(userEntry)) {
                yesOrNo = 'Yes'
            } else {
                yesOrNo = 'No'
            }

            $('#outputConsole').html("")
            $('#outputConsole').append(`
                  <div>Your Number: ${userEntry}</div>
                   <div>Number of digits: ${numberSplit.length}<br>
                   <div>Calculating: ${arraytoNum(numberSplit)}</div></div>
                   <div>Result = ${calculate}</div>      
                   <div>Narcissistic? ${yesOrNo}</div>  
                `)
        })
    })
})(jQuery);