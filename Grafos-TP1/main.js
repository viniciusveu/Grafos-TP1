//script main.js
var texto;
let $body;



$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('select').formSelect();
});



function execute(body) {

    $body = body;

    $(body).ready(function () {
        //console.log($('#ordem'));
    });

    $(document).ready(function () {
        M.updateTextFields();
        $('select').formSelect();
    });

}



