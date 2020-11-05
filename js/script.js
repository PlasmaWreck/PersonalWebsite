let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");
let displayName = document.getElementById("displayName");
let nameArray = [];

let NFO = JSON.parse(localStorage.getItem("Names"));

inputText.addEventListener("keypress", function (e) {

    if (e.code == "Enter") {

        appendElements(inputText.value);
    }
});

function appendElements(classList) {

    let liElement = document.createElement("li");


    liElement.innerText = classList;
    nameArray.push(liElement.innerText);


    liElement.addEventListener("click", function (e) {

        e.target.remove();

        for (let i = 0; i < nameArray.length; i++) {
            if (nameArray[i] == e.target.innerText) {

                nameArray.splice(i, 1);
                localStorage.setItem("Names", JSON.stringify(nameArray));

            }
        }
    });

    outputText.appendChild(liElement);

    inputText.value = "";


    localStorage.setItem("Names", JSON.stringify(nameArray));


}



let nameButton = document.getElementById("nameButton").addEventListener("click", function () {

    if (nameArray.length <= 0) {
        displayName.innerText = "There are no names here..."
    } else {
        selectedName = nameArray[Math.floor(Math.random() * nameArray.length)];
        displayName.innerText = selectedName;
    }

});


if (NFO != "" || NFO != null) {

    for (let i = 0; i < NFO.length; i++) {
        let liElement = document.createElement("li");


        liElement.innerText = NFO[i];
        nameArray.push(liElement.innerText);


        liElement.addEventListener("click", function (e) {

            e.target.remove();

            for (let i = 0; i < nameArray.length; i++) {
                if (nameArray[i] == e.target.innerText) {

                    nameArray.splice(i, 1);
                    localStorage.setItem("Names", JSON.stringify(nameArray));

                }
            }
        });

        outputText.appendChild(liElement);
        //nameArray.push(NFO[i]);
        localStorage.setItem("Names", JSON.stringify(nameArray));
    }

}