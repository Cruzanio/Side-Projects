(function ($) {
    $(document).ready(function () {

        $('.yesNo').addClass('d-none')
        $('#run').click(function () {
            $('.yesNo').addClass('d-none')
            $('.yesNo').css('background', 'transparent')
            let userEntry = $('#input').val()
            let numberSplit = userEntry.split("")
            let calculate = 0

            function arraytoNum(array) {
                let addTo = ''
                calculate = 0
                for (let element of array) {
                    addTo += ` (${element}<sup>${userEntry.length}</sup>) +`
                    calculate += Math.pow(element, userEntry.length)
                }
                return addTo.slice(0, -1)
            }

            function displayYesorNo() {
                if (calculate === parseInt(userEntry)) {
                    yesOrNo = 'Yes'
                    $('#yes').css('color', 'black')
                    $('#yes').css('background', 'limegreen')
                    $('#no').addClass('d-none')
                    $('#yes').removeClass('d-none')
                } else {
                    yesOrNo = 'No'
                    $('#no').css('background', 'red')
                    $('#yes').addClass('d-none')
                    $('#no').removeClass('d-none')
                }
            }
            arraytoNum(numberSplit)
            setTimeout(displayYesorNo, 4000)

            $('#outputConsole').html("").hide()
            $('#outputConsole').append(`
                  <div>Your Number (<em>n</em>): ${userEntry}</div>
                   <div>Number of digits (<em>m</em>): ${numberSplit.length}<br>
                   <div>Calculating: ${arraytoNum(numberSplit)}</div></div>
                   <div>Result = ${calculate}</div>
                `).slideDown(3000)
        })
    })
})(jQuery);