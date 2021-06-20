<!doctype html>
<html lang="pt-br">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Projeto</title>
    <link rel="icon" href="img/favicon.png">
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/liner_icon.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/search.css')}}">

    <link rel="stylesheet" href="{{asset('assets/css/styles.css')}}">

    <link rel="icon" style="background-color:#fff;width:16px;border-radius:5px" href="{{asset('assets/img/favicon.jpg')}}" type="image/x-icon">
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="{{asset('assets/js/formSubmit.js')}}"></script>
    
    <!-- ]links do site antigo
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    !-->
    <style>
        body {
            background-color:#f1f1f1;
        }
        
        .list-group-item {
            cursor: pointer;
        }

        .panel-body form .countries_added .delete {
            cursor: pointer;
            background-image: url(./close.png);
            height: 11px;
            width: 11px;
            display: inline-block;
            background-size: contain;
            margin-bottom: -1px;
        }
    </style>
    
    
</head>

<body id="page-top">

<div class="container" style="min-height: 700px; display:flex; align-items: center; justify-content: center;">
 
<div class="row">
    </div>
    <div class="row col-md-12 align-middle" style="flex-direction: row; justify-content: center; align-items: center; height: 100%;">
        <div id="login" class="col-md-8">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 m-auto p-4">
                        <div class="col-sm-12 m-auto p-4" style="background:#fff; border-radius:20px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);">
                            @if (\Session::has('success'))
                            <div class="alert alert-success">
                                <ul>
                                    <li>{!! \Session::get('success') !!}</li>
                                </ul>
                            </div>
                            @endif

                            @if (\Session::has('error'))
                            <div class="alert alert-error">
                                <ul>
                                    <li>{!! \Session::get('error') !!}</li>
                                </ul>
                            </div>
                            @endif
                            <h3 style="text-align: center;font-size: 24px; font-weight:900; color: rgba(0,0,0,0.7)">Que bom que você está aqui!</h3>
                            <h4 style="text-align: center;font-size: 16px; font-weight:600; margin-bottom:20px; color: rgba(0,0,0,0.7)">Faça seu login e trilhe sua jornada.</h4>
                            <form id="form" method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="form-group row">
                                    <label for="email" class="col-md-12 col-form-label" style="font-size: 14px;color: rgba(0,0,0,0.7)">E-mail/Login de {{ request()->get('type') }}</label>

                                    <div class="col-md-12">
                                        <input id="email" type="email" style="font-size: 14px; font-weight:600; rgba(0,0,0,0.2); border-radius: 25px" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Informe seu e-mail de login" autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-12 col-form-label " style="font-size: 14px;color: rgba(0,0,0,0.7)">Senha</label>

                                    <div class="col-md-12">
                                        <input id="password" type="password" style="font-size: 14px; font-weight:600; rgba(0,0,0,0.2); border-radius: 25px" class="form-control @error('email') is-invalid @enderror" name="password" placeholder="Informe sua senha de login" required autocomplete="current-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-12 offset-md-12" style="display:flex; justify-content:space-between; margin-bottom: 20px; margin-top: 10px;">
                                        <a style="font-size: 14px; font-weight:400; margin-left: 20px;color:#35AC5B" class="" href="/">Esqueceu a senha?</a>
                                        <a style="font-size: 14px; font-weight:400; margin-right: 20px;color:#35AC5B" class="" href="{{route('register-view')}}">Cadastrar</a>
                                    </div>

                                    <div class="col-md-12 offset-md-12" style="display:flex; justify-content: center; align-items: center;">
                                        <button type="submit" class="btn btn-lg col-md-12" style="color:#fff;font-size: 18px; font-weight:600; border-radius: 25px;background-color:#35AC5B;border-color:#35AC5B">
                                            {{ __('Entrar') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

@if (session('success'))
<div id="success" class="alert alert-success">
    {{ session('status') }}
</div>
@endif;

<script src="{{asset('assets/js/jquery-1.12.1.min.js')}}"></script>
<script src="{{asset('assets/js/popper.min.js')}}"></script>
<script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
<script src="{{asset('assets/js/custom.js')}}"></script>
<script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('assets/js/multiselect.js')}}"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/pt-br.min.js" integrity="sha512-1IpxmBdyZx3okPiZ14mzw6+pOGa690uDmcdjqvT310Kwv3NRcjvL/aOtoSprEyvkDdAb7ZtM2um6KrLqLOY97w==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/js/bootstrap-datepicker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepaginator/1.1.0/bootstrap-datepaginator.js"></script>
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.5.1/main.min.js"></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.1/locales/pt-br.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/i18n/pt-BR.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.5/jquery.inputmask.min.js" integrity="sha512-sR3EKGp4SG8zs7B0MEUxDeq8rw9wsuGVYNfbbO/GLCJ59LBE4baEfQBVsP2Y/h2n8M19YV1mujFANO1yA3ko7Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script src="{{asset('assets/js/ytValidations.js')}}"></script>
<script src="{{asset('assets/js/main.js')}}"></script>
<script src="{{asset('assets/js/formSubmit.js')}}"></script>
<script src="{{asset('assets/js/ytEffects.js')}}"></script>
<script>
    const url = new URL(window.location.href);
    let param = url.searchParams.get("redirect");
    console.log(param != null);
    console.log("/"+ (param != null ? param :"dashboard"))
    $("form#form").ytformSubmit({ url: "/"+ (param != null ? param :"dashboard")});
</script>
</body>
</html>