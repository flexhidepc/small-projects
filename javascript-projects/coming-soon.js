<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coming soon page</title>
</head>
<style>
    * {
        background-color: black;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }

    .container {
        position: relative;
    }

    h1 {
        font-size: 2.5rem;
    }

    .container p {
        position: absolute;
        top: 4rem;
        color: rgb(206, 206, 206);
        left: 0.5rem;
        font-size: 1.2rem;
    }

    .result {
        margin-top: 2.5rem;
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        text-align: center;
    }

    .data h4 {
        margin-top: -0.6rem;
        color: rgb(177, 177, 177);
    }

    .btn button {
        margin-top: 2rem;
        font-size: 1.2rem;
        width: 25rem;
        padding: 1rem;
        border: none;
        border-radius: 3rem;
        cursor: pointer;
        background-color: green;
    }

    .btn button:hover {
        border: 3px solid white;
    }
</style>

<body>
    <div class="container">
        <h1>Coming Soon</h1>
        <p>This page is comming soon</p>
    </div>

    <div class="result">
        <div class="data">
            <p id="days">0</p>
            <h4>Days</h4>
        </div>
        <div class="data">
            <p id="hours">0</p>
            <h4>Hours</h4>
        </div>
        <div class="data">
            <p id="minutes">0</p>
            <h4>Minutes</h4>
        </div>
        <div class="data">
            <p id="seconds">0</p>
            <h4>Seconds</h4>
        </div>
    </div>
    <div class="btn"> <a href="#"><button onclick="book()">Pre Register</button>
        </a></div>
    <script>
        var timer = new Date();
        timer.setDate(timer.getDate() + 6);
        timer = timer.getTime();

        const data = setInterval(function soon() {
            var now = new Date().getTime();
            var distance = timer - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days
            document.getElementById("hours").innerHTML = hours
            document.getElementById("minutes").innerHTML = minutes
            document.getElementById("seconds").innerHTML = seconds

        }, 1000)

        function book() {
            alert("This is demo webpage!!")
        }
    </script>
</body>

</html>
