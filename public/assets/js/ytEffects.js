//TABS EFFECT
$('a[tabs]').on('click', function (e) {
  e.preventDefault();
  const parent = $(this);
  const container = $($(this).attr('tabs'));
  const active = container.children('div[tab].active')
  console.log(active)
  const tab = $(this).attr('tab');
  container.children('div').each(function (k,el) {
    //if ((tab - 1) > $(this).attr('tab')) {
    if ($(this).attr('tab') < tab) {
      if (!validateRequired(this, { minChar: 0 })) {
        return false;
      }

      if (!validateConfirmation('input[name="email"]')) {
        return false;
      }
    }
    if (tab == $(this).attr('tab')) {
      let activeBtn = tab
      $('div#tabsContainer').find('a').each(function (k1,v){
          $(v).removeClass('bgn-primary')
          $(v).addClass('bgn-disabled')
          if($(this).attr('tab') == tab){
            activeBtn = $(this);
          }
      });
      activeBtn.addClass('bgn-primary')
      activeBtn.removeClass('bgn-disabled')
      $(this).toggleClass('active').show();
    } else {
      $(this).toggleClass('active').hide();
    }
  });
});

// OTHER DINAMICALLY FIELD

$('select[additional]').on('change', function () {
  if ($(this).children('option:selected').val() == $(this).attr('additional')) {
    if($('#other_' + $(this).attr('id')).parent().children('label').length > 0){
      //console.log("tem label v")
      $('#other_' + $(this).attr('id')).parent().show();
    }else{
      console.log("não tem label v")
      $('div#other_' + $(this).attr('id')).show();
      console.log($('#other_' + $(this).attr('id')).parent('div').parent('div').show())
    }
  } else {
    if($('#other_' + $(this).attr('id')).parent().children('label').length > 0){
      console.log("tem label h")
      //console.log($('#other_' + $(this).attr('id')).parent().html())
      $('#other_' + $(this).attr('id')).val($(this).children('option:selected').val())
      $('#other_' + $(this).attr('id')).parent().hide();
    }else{
      console.log("não tem label h")
      $('input#other_' + $(this).attr('id')).val($(this).children('option:selected').val())
      $('div#other_' + $(this).attr('id')).hide();
    }
    
  }
});

// Required Validation

$('input[required], textarea[required], select[required]').on('blur', function () {
  let value = $(this).is('select') ? $(this).children('option:selected').val() : $(this).val();
  value = ($(this).attr('mask') !== undefined && $(this).attr('mask').length > 4) ? value.replace(/[^\d]/g, "") : value;
  const field = $(this);
  //field.focus();
  //console.log(value.length <= ($(this).is('select') == true || $(this).attr('type') == 'number' ? 0 : 2));
  //console.log(value);
  if (value.length <= ($(this).is('select') == true || $(this).attr('type') == 'number' ? 0 : 0)) {
    $(this).focus().addClass('is-invalid');
    $('alert-confirm-required').show();

    if ($(this).parent().find('span#alert-confirm-required').length == 0) {
      $(this).parent().append(`
  <span id="alert-confirm-required" class="invalid-feedback" role="alert">
      <strong>${value.length == 0 ? "Campo é Obrigatório." : "O " + field.parent().children('label').text() + " deve ser maior que 2 caracteres."}</strong>
  </span>
  `)
    } else {
      //$('alert-confirm-required strong')
      $(this).parent().children('span#alert-confirm-required').show()
        .children('strong')
        .html(`${value.length == 0 ? "Campo é Obrigatório." : "O " + field.parent().children('label').text() + " deve ser maior que 2 caracteres."}`);
    }
    //$('alert-confirm-required strong').html('Campo é Obrigatório.')
  } else {
    $(this).removeClass('is-invalid');
    $('alert-confirm-required').hide();
  }

});

$('input[confirm]').on('blur', function () {
  const parent = $(this);
  const input_confirm = $($(this).attr('confirm'));
  console.log(input_confirm.val());
  input_confirm.on('blur', function () {
    console.log($(this).val());
    if ($(this).val() != parent.val()) {
      $(this).focus().addClass('is-invalid');
      $('span#alert-confirm-value').show();
      if ($(this).parent().find('span#alert-confirm-value').length == 0) {
        $(this).parent().append(`
     <span id="alert-confirm-value" class="invalid-feedback" role="alert">
         <strong>Os endereços de e-mail não coincidem</strong>
     </span>
     `)
      } else {
        //$('alert-confirm-required strong')
        $(this).addClass('is-invalid');
        $(this).parent().children('span#alert-confirm-value').show()
          .children('strong')
          .html(`Os endereços de e-mail não coincidem`);
      }
    } else {
      $(this).removeClass('is-invalid');
      $('span#alert-confirm-value').hide();
    }
  });
});

// Dinamic Search 
$('input[ajax]').on('keyup', function () {
  let self = $(this);
  if (self.val().length == 0) {
    $(self.attr('container')).html('');
  }
  if (self.val().length < 2) return false;
  $.ajax({
    url: self.attr('ajax') + "/?q=" + self.val().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
    type: "GET",
    beforeSend: function (xhr) { xhr.setRequestHeader('Content-type', 'application/json'); },
    success: function (response) {
      let content = $("<ul id='search-ul' class='list-group' style='z-index: 1000'>");
      let count = 0;
      response.map(result => {
        count++;
        if (count < 6)
          content.append("<li class='list-group-item '><span>" + result[`${self.attr('label')}`] + "</span> <a id='addCartBtn' href='#' data-item='" + JSON.stringify({id: result.id, name: result.name, area_id: result.area_id ?? undefined }) + "'>adicionar</a></li>");
      });
      content.children('li').on('click', function (item) {
        //self.val($(this).text());
      })
      $(self.attr('container')).html(content);
      $(self.attr('container')).show();
      $('a#addCartBtn').on('click', function () {
        let cart = getCookie('cart') == null ? [] : JSON.parse(getCookie('cart'));
        const item = JSON.parse($(this).attr('data-item'));
        if(cart.find(x => x.id == item.id)){
          Swal.fire({
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            position: 'top-end',
            backdrop: false,
            toast: true,
            icon: 'warning',
            type: 'warning',
            title: 'Serviço já adicionado.'
          });
          return false;
        }
        cart.push(item);
        //localStorage.setItem('cart', JSON.stringify(cart));
        setCookie('cart', JSON.stringify(cart))
        //console.log(cart);
        $(this).attr('disabled', true);
        const dataItem = $('tbody#cart-items > tr:last a').attr('data-item');
        $('tbody#cart-items').append(`<tr>
              <td>${item.name}</td>
              <td>
                  <a id="rm-cart" data-item='${item.id}' style="border-radius: 5px;border:1px solid transparent;margin:3px">
                      <i class="fa fa-trash" aria-hidden="true" style="color: red"></i>
                  </a>
              </td>
          </tr>`)
        //let clone = $(this).parent().parent().parent().parent().clone()
        //clone.appendTo('div#cart-container');
        if ($('tbody#cart-items > tr').length > 0) {
          $('#search_data').val(''); // alterado by Markus 16/04
          $('a#mybag-list').parent().show();
          $('a#cart-continue').show();
        }
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
          title: 'Serviço adicionado.'
        });
        $('div#cart-success').show();
        setTimeout(() => { $('div#cart-success').hide() }, 5000)
        $('a#rm-cart:last').trigger("click");
        $('a#rm-cart').off('click').on('click', function () {
          let cart = getCookie('cart') == null ? [] : JSON.parse(getCookie('cart'));
          const ind = cart.findIndex(x => x.id == $(this).attr('data-item'));
          console.log(ind);
          cart.splice(ind, 1);
          //localStorage.setItem('cart', JSON.stringify(cart));
          setCookie('cart', JSON.stringify(cart))
          $(this).parent().parent().remove();
          if ($('tbody#cart-items > tr').length == 0) {
            $('#list-services').css('display', 'none'); // alterado by Markus 16/04
            $('a#mybag-list').parent().hide();
            $('a#cart-continue').hide();
            eraseCookie('cart');
          }
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
            title: 'Serviço Removido!'
          });
        });
      });
      //

    }
  });
});
if ($('tbody#cart-items > tr').length == 0) {
  $('a#mybag-list').parent().hide();
  $('#list-services').css('display', 'none'); // alterado by Markus 16/04
  //$('a#cart-continue').attr('disabled');
  $('a#cart-continue').hide();
}
$('a#mybag-list').on('click', function(){
  $('div#sug-results').html('');
})
/*$($('input[ajax]').parent().parent()).on('focusout',function(){
  const el = $(this).children('div.input-group').children('input[ajax]')//$(this).children('input[ajax]');
  //console.log();
  $(el.attr('container')).hide();
})*/


$('a#rm-cart').on('click', function () {
  let cart = getCookie('cart') == null ? [] : JSON.parse(getCookie('cart'));
  const ind = cart.findIndex(x => x.id == $(this).attr('data-item'));
  console.log(ind);
  cart.splice(ind, 1);
  //localStorage.setItem('cart', JSON.stringify(cart));
  setCookie('cart', JSON.stringify(cart))
  $(this).parent().parent().remove();
  if ($('tbody#cart-items > tr').length == 0) {
    $('#list-services').css('display', 'none'); // alterado by Markus 16/04
    $('a#mybag-list').parent().hide();
    eraseCookie('cart');
  }
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
    title: 'Serviço Removido!'
  });
});