<!doctype html>
<html lang="pt-br">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Conexão NR</title>
    <link rel="icon" href="img/favicon.png">
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/liner_icon.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/search.css')}}">

    <link rel="stylesheet" href="{{asset('assets/css/styles.css')}}">

    <link rel="icon" style="background-color:#fff;width:16px;border-radius:5px" href="{{asset('assets/img/favicon.jpg')}}" type="image/x-icon">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>

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

    <div class="container">
        <nav class="navbar navbar-expand-md fixed-top  navbar-dark" id="nav_color">
            <div class="container" style="max-width:1200px;">
                <div class="col-sm-4">
                    <a href="" class="navbar-brand" id="padding_img"><img src="" alt="logo"></a>
                </div>

                <div class="col-sm-8">
                    <div class="row menu-top" style="color:#fff;padding-top:10px">
                        <div class="col-lg-8 col-md-6" id="data-provider" style="display: flex; flex-direction:column; align-items:center;">
                            <div style="font-size: 0.875rem;font-family:Ubuntu-Bold;"></div>
                            <div style="font-size: 0.75rem;font-family:Ubuntu-Regular;color:#FCBA02"></div>
                        </div>

                        <div class="col-lg-4 col-md-6" style="display: flex; flex-direction: row; justify-content:center;">
                            <div>
                                <ul style="list-style-type: none;;margin: 0;padding:0;padding-left:0">
                                    
                                </ul>

                            </div>

                            <div style="display:flex;flex-direction:column">
                                <!--<small>Creditos</small>
                                <div style="width: 100px!important;">
                                    <i style="color:#00B85A;" class="far fa-money-bill-alt fa-2x"></i>
                                </div>!-->

                                

                            </div>
                        </div>
                    </div>

                    <button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-align-justify"></i>
                    </button>

                    <div class="row menu-bottom" style="color:#fff;">
                        <div class="collapse navbar-collapse" id="navbarResponsive">

                            <ul class="nav navbar-nav ml-auto" id="padding_menu" >

                                <li class="nav-item active text-menu" id="">
                                    <a href="{{route('home')}}" class="nav-link" style="font-family: Ubuntu-Bold;">Home</a>
                                </li>

                                <li class="nav-item active text-menu" id="">
                                    <a href="#" class="nav-link" style="font-family: Ubuntu-Bold;">Perfil</a>
                                </li>

                                <li class="nav-item active text-menu" id="">
                                    <a href="#" class="nav-link" style="font-family: Ubuntu-Bold;">Usuario</a>
                                </li>

                                <li class="nav-item active text-menu" id="">
                                    <a href="#" class="nav-link" style="font-family: Ubuntu-Bold;">Sair</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </nav>
    </div>



    @section('scripts')
    <script>
    </script>
    @endsection