var gen_count = 11;
$(document).ready(function () {
    generate(gen_count);
    setBinaryClick();

    $('#changecount').click(function(){
        gen_count = $('#itemcount').val();
        generate(gen_count);
        setBinaryClick();
    });
})

function getTotal(){
    var count = document.getElementsByClassName('binary').length;
    var total = 0;
    for(var i = 0; i < count; i++){
        if($('#'+i).html() == 1) total += Math.pow(2, i);
    }
    return total;
}

function generate(amount){
    var labelElement  = $('#label');
    var valElement    = $('#val');
    var binaryElement = $('#num');

    labelElement.empty();
    valElement.empty();
    binaryElement.empty();

    for(var i = gen_count; i >= 0; i--){
        labelElement.append('<td>2<sup>' + i + '</sup></td>');
        valElement.append('<td>' + Math.pow(2, i) + '</td>');
        binaryElement.append('<td class="binary" id="' + i + '">0</td>');
    }
}

function setBinaryClick(){
    $('.binary').click(function(){
        var self = $(this);
        var val = self.html();
        if(val == '0') self.html('1');
        else self.html('0');
        $('#value').html(getTotal().toString());
    });
}