(function ($) {
    $(document).ready(function () {

        $('#run').click(function () {
            $('.yesNo').css('background', 'transparent')
            let userEntry = $('#input').val()
            let numberSplit = userEntry.split("")
            let calculate = 0

            function arraytoNum(array) {
                let addTo = ''
                calculate = 0
                for (let element of array) {
                    addTo += ` (${element} ^ ${userEntry.length}) +`
                    calculate += Math.pow(element, userEntry.length)
                }
                return addTo.slice(0, -1)
            }
            arraytoNum(numberSplit)
            if (calculate === parseInt(userEntry)) {
                yesOrNo = 'Yes'
                $('#yes').css('color', 'black')
                $('#yes').css('background', 'limegreen')
            } else {
                yesOrNo = 'No'
                $('#no').css('background', 'red')
            }

            $('#outputConsole').html("")
            $('#outputConsole').append(`
                  <div>Your Number (<em>n</em>): ${userEntry}</div>
                   <div>Number of digits (<em>m</em>): ${numberSplit.length}<br>
                   <div>Calculating: ${arraytoNum(numberSplit)}</div></div>
                   <div>Result = ${calculate}</div>
                `)
        })
    })
})(jQuery);