<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Coal Map Ukraine</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimal-ui">
    <meta name="apple-mobile-web-app-title" content="Coal Map">
    <meta name="application-name" content="Coal Map">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="theme-color" content="#ffffff">
    <link rel="icon" href="/img/icons/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png">
    <link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/img/icons/favicon.ico">
    <link rel="stylesheet" media="all" href="{{ mix('css/app.css') }}">

</head>
<body>
    <div class="content" id="map">
        <app :types="{{ $types }}" :objects="{{ $model }}" :mines="{{ $mines }}"></app>
    </div>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
