jQuery.fn.ytformSubmit = function (settings) {
    var config = {
        parent: this,
        successmsg:{
            toast:true,
        },
        handler: function (event) {
            return true;
        },
        handlerBefore: function (event) {
            return true;
        },
        url: "",
        terms: "",
        termsMsg: "Você precisa aceitar os termos e condições para continuar."
    };
    if (settings) {
        $.extend(config, settings);
    }
    config.parent.on("submit", function (a) {
        a.preventDefault();
        if (config.handler() === false) {
            return false;
        }
        Swal.fire({
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            position: 'top-end',
            backdrop: false,
            toast: true,
            icon: 'info',
            type: 'info',
            title: "Aguarde carregando ... "
        });
        var formData;
        var contentType = "application/x-www-form-urlencoded";
        var processData = true;
        if ($(config.parent).attr('enctype') === 'multipart/form-data') {
            formData = new FormData($(config.parent)[0]);//seleciona classe form-horizontal adicionada na tag form do html
            $(this).find('input[type="hidden"],input[type="text"],input[type="password"],input[type="number"],input[type="date"],input[type="email"],input[type="tel"],input[type="datetime-local"], textarea').each(function () {
                if ($(this).attr('name')) { formData.append($(this).attr('name'), $(this).val());}
            });

            $(this).find('select').each(function () {
                formData.append($(this).attr('name'), $(this).children("option:selected").val());
            });
            $(this).find('input[type="checkbox"]').each(function (ind) {
                if ($(this).is(':checked')) {
                    formData.append($(this).attr('name'), 1);
                } else {
                    formData.append($(this).attr('name'), 0);
                }
            });
            $(this).find('input[type="radio"]').each(function (ind) {
                if ($(this).is(':checked')) {
                    data.push({ name: $(this).attr('name'), value: $(this).val() });
                }
            });
            contentType = false;
            processData = false;
        } else {
            var data = [];
            $(this).find('input[type="hidden"],input[type="text"],input[type="password"],input[type="number"],input[type="date"],input[type="email"],input[type="tel"],input[type="datetime-local"], textarea').each(function () {
                if ($(this).attr('name')) { data.push({ name: $(this).attr('name'), value: $(this).val() }); }
            });

            $(this).find('select').each(function () {
                data.push({ name: $(this).attr('name'), value: $(this).children("option:selected").val() });
            });

            $(this).find('input[type="radio"]').each(function (ind) {
                if ($(this).is(':checked')) {
                    data.push({ name: $(this).attr('name'), value: $(this).val() });
                }
            });

            $(this).find('input[type="checkbox"]').each(function (ind) {
                if ($(this).is(':checked')) {
                    data.push({ name: $(this).attr('name'), value: $(this).val() });
                } else {
                    data.push({ name: $(this).attr('name'), value: 0 });
                }
            });
            console.log(data);
            formData = data;
        }


        var form = config.parent;
        // var formData = new FormData(config.parent);
        if (config.terms != "") {
            if (!config.terms.is(":checked")) {
                Swal.fire({
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: true,
                    showCancelButton: false,
                    position: 'top-end',
                    backdrop: true,
                    toast: false,
                    icon: 'warning',
                    type: 'warning',
                    title: config.termsMsg
                });
                alert(config.termsMsg);
                return;
            }
        }
        ;
        $('<div id="global-progress" class="progress progress-sm active" style="margin-bottom:0px !important;">' +
            '<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">' +
            '<span class="sr-only">20% Complete</span>' +
            '</div>' +
            '</div>').prependTo("body");
        $.ajax({
            url: form.attr("action"),
            data: formData,//form.serialize(),
            type: form.attr("method"),
            //cache: false,
            contentType: contentType,
            processData: processData,
            xhr: function () {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                    myXhr.onprogress = function (e) {
                        // For downloads
                        if (e.lengthComputable) {
                            var progress = (e.loaded / e.total * 100);
                            $("div#global-progress div.progress-bar").css("width", progress + "%");
                            console.log(progress);
                            if (progress >= 100) $("div#global-progress").remove();
                        }
                    };
                    myXhr.upload.onprogress = function (e) {
                        // For uploads
                        if (e.lengthComputable) {
                            var progress = (e.loaded / e.total * 100);
                            $("div#global-progress div.progress-bar").css("width", progress + "%");
                            console.log(progress);
                            if (progress >= 100) $("div#global-progress").remove();
                        }
                    };
                    myXhr.upload.addEventListener('progress', function () {
                        /* faz alguma coisa durante o progresso do upload */
                    }, false);
                }
                return myXhr;
            },
            success: function (data) {
                
                var json = data;
                if (json.success) {
                    if(config.successmsg.toast == false){
                        Swal.fire({
                            showConfirmButton: true,
                            showCancelButton: false,
                            position: 'top-end',
                            backdrop: true,
                            toast: false,
                            icon: 'success',
                            type: 'success',
                            title: json.message
                        }).then(function() {
                            if (config.url != "") {
                                window.location.href = config.url;
                            }
                        });
                    }else{
                        Swal.fire({
                            timer: 4000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            showCancelButton: false,
                            position: 'top-end',
                            backdrop: false,
                            toast: true,
                            icon: 'success',
                            type: 'success',
                            title: json.message
                        });
                    }
                    /*
                    console.log("URL");
                    console.log(config.url);
                    */
                    config.handlerBefore();
                    if (config.url != "" && config.successmsg.toast == true) {
                        window.location.href = config.url;
                    }
                    form[0].reset();
                } else {
                    Swal.fire({
                        timer: 5000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        showCancelButton: false,
                        position: 'top-end',
                        backdrop: false,
                        toast: true,
                        icon: 'error',
                        type: 'error',
                        title: json.message
                    });
                }
            },
            error: function (data) {
                var json = data;
                Swal.fire({
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    showCancelButton: false,
                    position: 'top-end',
                    backdrop: false,
                    toast: true,
                    icon: 'error',
                    type: 'error',
                    title: json.message
                });
            }
        });
    });
}