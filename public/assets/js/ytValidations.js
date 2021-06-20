
// Required Validation
function validateRequired(form, options = { minChar: 0 }) {
  let retorno = true;
  if ($(form).find('input,textarea,select').filter('[required]:visible').length > 0) {
    $(form).find('input,textarea,select').filter('[required]:visible').each((key,field) => {
      let value = $(field).is('select') ? $(field).children('option:selected').val() : $(field).val();
      value = ($(field).attr('mask') !== undefined && $(field).attr('mask').length > 4) ? value.replace(/[^\d]/g, "") : value;
      //console.log(field);
      if (value.length <= ($(field).is('select') == true || $(field).attr('type') == 'number' ? 0 : options.minChar)) {
        $(field).focus();
        $($(field)).addClass('is-invalid');
        if ($(field).parent().find('span#alert-confirm-required').length == 0) {
          $(field).parent().append(`
            <span id="alert-confirm-required" class="invalid-feedback" role="alert">
                <strong>${value.length == 0 ? "Campo é Obrigatório." : "O " + $(field).parent().children('label').text() + ` deve ser maior que ${options.minChar} caracteres.`}</strong>
            </span>
            `)
            retorno = false;
        } else {
          $('alert-confirm-required').show();
          retorno = false;
        }
        $('alert-confirm-required strong').html(`${value.length == 0 ? "Campo é Obrigatório." : "O " + $(field).parent().children('label').text() + ` deve ser maior que ${options.minChar} caracteres.`}`)
      }
    });
  }
  return retorno;
}
// Validate Confirmation
function validateConfirmation(field, options = {}) {
  let retorno = true;
  const confirmedField = options.confirmedField == undefined ? $(field).attr('confirm') :  options.confirmedField;
  if ($(confirmedField).val() != $(field).val()) {
    $(confirmedField).focus().addClass('is-invalid');
    $('span#alert-confirm-value').show();
    if ($(confirmedField).parent().find('span#alert-confirm-value').length == 0) {
      $(confirmedField).parent().append(`
   <span id="alert-confirm-value" class="invalid-feedback" role="alert">
       <strong>Os endereços de e-mail não coincidem</strong>
   </span>
   `);
   retorno = false;
    } else {
      $(confirmedField).addClass('is-invalid');
      $(confirmedField).parent().children('span#alert-confirm-value').show()
        .children('strong')
        .html(`Os endereços de e-mail não coincidem`);
        retorno = false;
    }
  } else {
    $(confirmedField).removeClass('is-invalid');
    $('span#alert-confirm-value').hide();
    return retorno;
  }
}