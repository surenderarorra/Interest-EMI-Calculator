function clearInput() {
    document.getElementById('principle').value = "";
    document.getElementById('amt').value = "";
    document.querySelector('#rate').value = "";
    document.querySelector('#rateemi').value = "";
    document.querySelector('#year').value = "";
    document.querySelector('#month').value = "";
    document.querySelector('#day').value = "";
    document.getElementById('output').innerText = "Simple Interest (I)";

}

function toggleFun() {
    let mode = document.querySelector("#service").value;
    if(mode == "int"){
        document.getElementById("int").classList.remove("hide");
    }
    else{
        document.getElementById("emi").classList.remove("hide");
    }
    document.getElementById("popup").classList.add("hide");
}

function calculate() {
    let p = document.getElementById('principle').value;
    let r = document.querySelector('#rate').value;
    let y = document.querySelector('#year').value;
    let m = document.querySelector('#month').value;
    let d = document.querySelector('#day').value;

    if(p == "" || r == "") {
    document.getElementById('output').innerText = "Please Enter Amount or Rate";
        return;
    }
    y = y == "" ? 0 : y;
    m = m == "" ? 0 : m;
    d = d == "" ? 0 : d;

    r = r/100;
    m = m/12
    d = d/365
    let t = parseFloat(y) + parseFloat(m) + parseFloat(d);
    document.getElementById('output').innerText = "Simple Interest = " + p * r * t;
}

function calculateEMI() {
    let a = document.getElementById('amt').value;
    let r = document.querySelector('#rateemi').value;
    let t = document.querySelector(".emi-m").value;
    document.querySelector(".emis").classList.remove("hide");
    document.querySelector(".emi").classList.add("hide");

    r = r/100;
    t = t/12;

    let si = a * r * t;

    let fiPay = parseFloat(a) + parseFloat(si);

    fiPay = fiPay.toFixed(2);

    document.querySelector(".emis").innerHTML = `
    <div class="headings">
            <div class="amt-div">
                <h2>Actual Amount</h2>
                <span>&#8377 ${a}</span>
            </div>
            <div class="amt-div">
                <h2>Simple Interest</h2>
                <span>&#8377 ${si}</span> 
            </div>
            <div class="amt-div">
                <h2>Total Amount To be Paid</h2>
                <span>&#8377 ${fiPay}</span>
            </div>
        </div>

        <div class="total-emi">
            <div class="emi-heading">

                <div class="final-pay">
                    <h2>3 Months</h2>
                    <span>&#8377 ${(fiPay/3).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>6 Months</h2>
                    <span>&#8377 ${(fiPay/6).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>9 Months</h2>
                    <span>&#8377 ${(fiPay/9).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>12 Months</h2>
                    <span>&#8377 ${(fiPay/12).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>15 Months</h2>
                    <span>&#8377 ${(fiPay/15).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>18 Months</h2>
                    <span>&#8377 ${(fiPay/18).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>21 Months</h2>
                    <span>&#8377 ${(fiPay/21).toFixed(2)} P/M</span>
                </div>

                <div class="final-pay">
                    <h2>24 Months</h2>
                    <span>&#8377 ${(fiPay/24).toFixed(2)} P/M</span>
                </div>
            </div>
        </div>`;

}