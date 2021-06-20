jQuery.fn.ytToast = function(settings){
    //$(this).parent().appendTo(document);
    var $rand = Math.floor(Math.random() * 1001);
    var toastContainer = 80;
    if ($('.toast').length) {
        toastContainer = $(".toast:last").offset().top-55;
    }
    var config = {
        'message' : "Menssagem padrão",
        'icon' : "fa fa-check",
        'color' : 'green',
        'css' : {
            'top' : parseInt(toastContainer),
            'z-index' : 9999,
            'position': 'fixed',
            'bottom':'15px',
            'right':'15px',
            'width':'auto',
            'min-width':'250',
            'height':'55px',
            'padding':'15px 25px',
            'background':'#3A3A3A',
            'border':'1px solid #7ea2b4',
            'border-radius':'3px',
            'color':'#fff',
            'opacity': 0.8,
        },
        'secs' : 6000
    };
    if(settings){
        $.extend(config,settings);
    }
    if($("#toast-"+$rand).length > 0){
        return;
    }
    var $toast = "<div class=\"toast\" id=\"toast-"+$rand+"\">";
    $toast += "<i style='color:"+config.color+"' class=\""+config.icon+"\"></i> &nbsp;"+config.message;
    $toast += "</div>";
    var toast = $($toast).css(config.css);
    toast.appendTo("body");
    setInterval(function(){
        $("#toast-"+$rand).remove();
        /*$(document).find(".toast").each(function(ind){
            $(".toast:eq("+ind+")").css({top: parseInt($(".toast:eq("+ind+")").offset().top-60)});
        });*/

    }, config.secs);

};