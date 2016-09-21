var gen_count = 11;
$(document).ready(function () {
    //var labels = document.getElementsByClassName('label');
    //for(var label of labels){

    for(var i = gen_count; i >= 0; i--){
        $('#label').append('<td>2<sup>' + i + '</sup></td>');
        $('#val').append('<td>' + Math.pow(2, i) + '</td>');
        $('#num').append('<td class="binary" id="' + i + '">0</td>');
    }

    $('.binary').click(function(){
        var self = $(this);
        var val = self.html();
        if(val == '0') self.html('1');
        else self.html('0');
        $('#value').html(getTotal().toString());
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