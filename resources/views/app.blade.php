<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Lato" rel="stylesheet" />
    @if (env('APP_ENV') == 'Production')
        <link href="/static/css/styles.css" rel="stylesheet" />
    @endif
</head>

<body>
    <div id="root"></div>
    
    @if (env('APP_ENV') == 'Production')
    <script src="/static/js/bundle.js"></script>
    @else
    <script src="http://localhost:3000/static/js/bundle.js"></script>
    @endif
   
</body>

</html>