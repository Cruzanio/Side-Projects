(function() {
    "use strict";
    $().ready(function () {
        var postLoad = function () {
            $.ajax("https://frest.glitch.me/restaurants").done(function (data, status, jqXhr) {
                console.log("Data returned from server:" + data);
                var innerHTML = ''
                data.forEach(function (item) {
                    innerHTML += "<h1>" + item["name"] +
                        "</h1><p>" + item["cuisine_type"] +
                        // "</p><p>" + item['operating_hours'].forEach(function() {
                        //     for (var i = 0; i < )
                        // }) +
                        "</p><br>\n"
                });
                $('#open').html(innerHTML)
            });
        }
        postLoad()

        // $('#refresh').click(function () {
        //     postLoad()
        // })
    });
})();