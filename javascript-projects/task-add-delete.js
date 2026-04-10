<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Demo</title>
</head>

<style>
    * {
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        margin-top: 1rem;
        border: 0;
        background-color: red;
        color: white;
        text-align: center;
        width: 100%;
        font-size: 1.1rem;
        padding: 1rem;
    }
</style>

<body>
    <h1 style="text-align: center;">Task Adder</h1>
    <input type="text" id="message" style="width: 100%; padding: 1rem;" placeholder="Enter Text Here"><br>
    <input type="text" id="edit_text" style="width: 100%; padding: 1rem; margin-top: 1rem; display: none;"
        placeholder="Enter Text Here Which You Want To Edit">
    <button onclick="add()" id="add" style=" background-color: green;">Add
        Task</button>
    <button onclick="remove()" id="remove">Remove
        Task</button>
    <h2 style="text-align: center;">Result</h2>
    <ol id="result"></ol>
    <script>
        let message = ""
        let result = 0
        let add_id = document.getElementById("add");
        let remove_id = document.getElementById("remove");
        let ol = document.getElementById("result");
        let list = ol.getElementsByTagName("li");
        let removed = false;
        let found = false;

        function add() {
            message = document.getElementById("message").value

            if (result == 5) {
                return alert("Limit Reached!!")
            }
            if (message == "") {
                alert("Enter some text!!")
                return
            }

            if (find(message, "Already exist, enter other text!!")) {
                return document.getElementById("message").value = "";
            }

            result += 1
            document.getElementById("message").value = "";
            document.getElementById("result").innerHTML += "<li>" + message + "</li>"
        }

        function remove() {
            message = document.getElementById("message").value
            if (message == "") {
                alert("Enter some text!!")
                return
            }


            for (let i = 0; i < list.length; i++) {
                if (list[i].innerHTML == message) {
                    ol.removeChild(list[i]);
                    result -= 1;
                    removed = true;
                    add_id.style.display = "block";
                    break
                }
            }

        }

        function find(text, message) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].innerHTML == text) {
                    alert(message);
                    return true;
                }
            }
            return false;
        }

    
    </script>
</body>

</html>
