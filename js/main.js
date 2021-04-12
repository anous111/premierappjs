document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form")

    form.onsubmit = function() {


        var firstName = document.querySelector("#validationCustom01").value;

        var li = document.createElement("li");
        li.innerHTML = firstName;
        document.querySelector("#hello").appendChild(li);
        document.querySelector("#validationCustom01").value = "";
        return false
    }
})