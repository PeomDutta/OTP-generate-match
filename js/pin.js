function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin >= 1000) {
        const showPin = document.getElementById("show-pin");
        showPin.value = pin;
    }
    else {
        generatePin();
    }
}


document.getElementById("key-pad").addEventListener('click', function (event) {
    const displayTyped = event.target.innerText;
    const displayScreen = document.getElementById("display-screen");

    if (isNaN(displayTyped)) {
        if (displayTyped == 'C') {
            displayScreen.value = "";
        }
    }
    else {
        const displayPrevious = displayScreen.value;
        const displayNew = displayPrevious + displayTyped;
        displayScreen.value = displayNew;
    }

});

function verifyPin() {
    const pin = document.getElementById("show-pin").value;
    const displayInput = document.getElementById("display-screen").value;

    const notifyPass = document.getElementById("notify-pass");
    const notifyFail = document.getElementById("notify-fail");

    if (pin == displayInput) {
        notifyPass.style.display = 'block';
        notifyFail.style.display = 'none';
    }

    else {
        notifyFail.style.display = 'block';
        notifyPass.style.display = 'none';

        //------------- tryleft number --------------//
        const tryLeft = document.getElementById("tryleft-number");
        const tryLeftNumber = parseInt(tryLeft.innerText);
        if (tryLeftNumber > 0) {
            tryLeft.innerText = tryLeftNumber - 1;
        }
        else if (tryLeftNumber == 0) {
            tryLeft.innerText = 'Timed Out. Try Later';
            document.getElementById("display-screen").value = "";
        }
    }



}