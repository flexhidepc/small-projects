<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>

<style>
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
    }

    .frame {
        width: 20rem;
        padding: 1.5rem;
        background-color: rgb(31, 31, 31);
        border-radius: 1.5rem;
    }

    #result {
        text-align: right;
        width: 90%;
        height: 50px;
        background-color: yellow;
        border: none;
        padding: 1rem;
        font-weight: bold;
        font-size: 1.4rem;
        border-radius: 0.5rem;
    }

    .number {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.3rem;
    }

    .button {
        font-size: 1.5rem;
        padding: 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
        color: white;
        background-color: #03a9f4;
    }

    :focus {
        outline: none;
    }

    .button.clear {
        background-color: #ff5722;
    }

    .button.operator {
        background-color: #FA9800;
    }

    .button.equal {
        background-color: #8EC148;
    }
</style>

<body>

    <div class="frame">
        <input type="text" id="result" readonly>

        <div class="number">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button operator" onclick="append('/')">/</button>
            <button class="button operator" onclick="append('*')">*</button>
            <button class="button operator" onclick="append('-')">-</button>

            <button class="button" onclick="append('7')">7</button>
            <button class="button" onclick="append('8')">8</button>
            <button class="button" onclick="append('9')">9</button>
            <button class="button operator" onclick="append('+')">+</button>

            <button class="button" onclick="append('4')">4</button>
            <button class="button" onclick="append('5')">5</button>
            <button class="button" onclick="append('6')">6</button>
            <button class="button equal" onclick="calculate()">=</button>

            <button class="button" onclick="append('1')">1</button>
            <button class="button" onclick="append('2')">2</button>
            <button class="button" onclick="append('3')">3</button>
            <button class="button" onclick="append('0')">0</button>
        </div>
    </div>

    <script>
        let display = document.getElementById("result");

        function append(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Something went wrong!!";
            }
        }
    </script>

</body>

</html>
