@extends('layouts.app')

@section('conteudo')
<div class="container" style="margin-top: 90px; margin-bottom: 50px;">
    <div class="row justify-content-center">
        <div class="col-md-8 provider-register">
            <p class="register-text">
                Cadastro de usuário
            </p>
            <div class="card">
                <div class="card-body">
                    <form method="POST" action="">
                        @csrf
                        <div id="step-1">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Nome</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lastname" class="col-md-4 col-form-label text-md-right">Sobrenome</label>
                                <div class="col-md-6">
                                    <input id="lastname" type="text" class="form-control @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" required autocomplete="lastname" autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="phone" class="col-md-4 col-form-label text-md-right">Telefone</label>
                                <div class="col-md-6">
                                    <input id="phone" type="tel" mask="(99) 9 9999-9999" class="form-control @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required autocomplete="phone" autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>
                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <div id="terms-alert" class="alert alert-danger" style="display:none">
                                            <ul>
                                                <li>É necessário aceitar nossos termos para continuar</li>
                                            </ul>
                                        </div>
                                        <input class="form-check-input" type="checkbox" name="terms" id="terms" {{ old('terms') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="terms">
                                            Aceito e concordo com nossos <a href="/assets/docs/termos.pdf" target="_blank">termos</a> e <a href="/assets/docs/politica.pdf" target="_blank">Politica de Privcidade</a>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!--<div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <a id="btn-step-2" class="btn btn-success" id="#btn-step-2">
                                        Próximo
                                    </a>
                                </div>
                            </div>!-->

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-success" id="#btn-step-3">
                                        Cadastrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div id="success" class="alert alert-success" style="display:none">
    <ul>
        <li>Cadastrado com sucesso!</li>
    </ul>
</div>

<div id="error" class="alert alert-error" style="display:none">
    <ul>
        <li>Erro ao cadastrar!</li>
    </ul>
</div>

@endsection
@section('scripts')
<script>
    $("form#form").submit(function(e) {
        var dados = jQuery(this).serialize();
        $.ajax({
            url: "/auth/register",
            data: dados,
            dataType: "json",
            type: "POST",
        success: function(data) {
                
                if (data.success) {
                    let alert = $('div#success');
                    alert.style.display = 'block';
                    setTimeout(()=>{alert.style.display = 'none';},5000);
                    window.location.href= '/auth/login';
                } else {
                    let alert = $('div#error');
                    alert.style.display = 'block';
                    setTimeout(()=>{alert.style.display = 'none';},5000);
                }
        }
    });
    });

</script>
@endsection