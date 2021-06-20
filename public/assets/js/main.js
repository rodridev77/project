/*$('input[required], select[required]').on('blur', function(){
  if($(this).val().length == 0){
    $(this).focus().addClass('is-invalid');
    $('alert-confirm-required').show();
    $('alert-confirm-required strong').html('Campo é Obrigatório.')
  }else{
    $(this).removeClass('is-invalid');
    $('alert-confirm-required').hide();
  }
  
});*/
$(document).ready(function(){
    // Dynamic Masks
    $('input[data-inputmask]').inputmask();
    $('input[mask]').on('keyup', function(){
      $(this).inputmask($(this).attr('mask'));
    });

    // Swith password / Text input
   $('span[showpwd]').on('click', function(){
     var passwordField = $($(this).attr('target'));
     var passwordFieldType = passwordField.attr('type');
     if(passwordFieldType == 'password')
     {
         passwordField.attr('type', 'text');
         $(this).val('Hide');
     } else {
         passwordField.attr('type', 'password');
         $(this).val('Show');
     }
   });
});
// handlers
function setCookie(name,value,hours=2) {
  var expires = "";
  if (hours) {
      var date = new Date();
      date.setTime(date.getTime() + (hours*(60*60*1000)));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("input#street").val("");
    $("input#district").val("");
    $("input#city").val("");
    $("input#uf").val("");
}

//Quando o campo cep perde o foco.
$("input#cep").blur(function() {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            $("input#street").val("...");
            $("input#district").val("...");
            $("input#city").val("...");
            $("input#uf").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("input#street").val(dados.logradouro);
                    $("input#district").val(dados.bairro);
                    $("input#city").val(dados.localidade);
                    $("input#uf").val(dados.uf);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    limpa_formulário_cep();
                    alert("CEP não encontrado.");
                }
            });
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
});
//

  //Validations 
  // Valida Email
  function validaEmail(email){
    let emailCheck = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailCheck.test(email);
}
  // Validate CPF
  function validaCpf(strCPF = "") {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF.length != 11 ||
      strCPF == "00000000000" ||
      strCPF == "11111111111" ||
      strCPF == "22222222222" ||
      strCPF == "33333333333" ||
      strCPF == "44444444444" ||
      strCPF == "55555555555" ||
      strCPF == "66666666666" ||
      strCPF == "77777777777" ||
      strCPF == "88888888888" ||
      strCPF == "99999999999")
      return false;
  
  if (strCPF.length < 11 ) return false;
  for (let i=1; i<=9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
  Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
    };
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true; //strCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
//

function validaCnpj(value) {
 
  let cnpj = value.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
  
}

  /*$('select').on('change', function() {

    if($(this).children('option:selected').val() == 'outro'){
      $('input#other_'+$(this).attr('name')).parent().parent().show();
    }else{
        $('input#other_'+$(this).attr('name')).parent().parent().hide();
    }
  });*/