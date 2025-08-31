let transactionData = [];

function toggleButton(id){

    let viewOutput = document.getElementsByClassName('dply');

    for(let dip of viewOutput){
        dip.style.display = 'none';
    }

     document.getElementById(id).style.display = 'block';

}


function activeBtn(id){
    let activeBtn = document.getElementsByClassName('active-btn');

    for(let btn of activeBtn){
        btn.classList.add('border-[#08080845]')

        btn.classList.remove('text-[#0874f2]','bg-[#0874f20d]','border-[#0874f2]');
    }

    document.getElementById(id).classList.remove('border-[#08080845]')

    document.getElementById(id).classList.add('text-[#0874f2]','bg-[#0874f20d]','border-[#0874f2]');
}

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    let pinValue = 1234;

    let bank = document.getElementById('bank').value;

    let accountNumber = document.getElementById('acnt-number').value;

    let pinNumber = parseInt(document.getElementById('pin-number').value);

    let addAmount = parseInt(document.getElementById('amount').value);

    let availableBalance = parseInt(document.getElementById('able-balance').innerText);

    if(accountNumber.length === 11 && pinNumber === pinValue){
        let total = addAmount + availableBalance;

        document.getElementById('able-balance').innerText = total;
    } else{
        alert("Please, provide a valid information");
    }

    let data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }

    transactionData.push(data);
})

document.getElementById('withdraw-money').addEventListener('click', function(e){
    e.preventDefault();

    let pinNumber = 1234;

    let pinValue = parseInt(document.getElementById('pin-enter').value);

    let agentNumber = document.getElementById('agent-number').value;

    let cashOutAmount = parseInt(document.getElementById('cashout-amount').value);

    let availableBalance = parseInt(document.getElementById('able-balance').innerText);

    if(cashOutAmount <= 0 || availableBalance < cashOutAmount){
        alert('Wrong Input');

        return;
    }

    if(agentNumber.length === 11 && pinValue === pinNumber){
        let presentBalance = availableBalance - cashOutAmount;
        document.getElementById('able-balance').innerText = presentBalance;
    } else{
        alert('Please, provide a valid information');
    }

    let data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }

    transactionData.push(data);

})

document.getElementById('send-money').addEventListener('click', function(e){
    e.preventDefault();
    
    let pinNumber = 1234;
    
    let pinEntry = parseInt(document.getElementById('pin-entry').value);

    let userNumber = document.getElementById('user-number').value;

    let sendAmount = parseInt(document.getElementById('send-amount').value);

    let availableBalance = parseInt(document.getElementById('able-balance').innerText);

     if(sendAmount <= 0 || availableBalance < sendAmount){
        alert('Wrong Input');

        return;
    }

    if(userNumber.length === 11 && pinEntry === pinNumber){
        let presentBalance = availableBalance - sendAmount;

        document.getElementById('able-balance').innerText = presentBalance;
    } else{
        alert('Please, provide a valid information');
    }

    let data = {
            name: "Send Money",
            date: new Date().toLocaleTimeString()
        }

    transactionData.push(data);
})

document.getElementById('get-bonus-btn').addEventListener('click', function(e){
    e.preventDefault();

    let getBonus = "alpha2025";

    let bonusValue = 500;

    let bonusCoupon = document.getElementById('bonus-coupon').value;

    let availableBalance = parseInt(document.getElementById('able-balance').innerText);    

    if(bonusCoupon === getBonus){
        let presentBalance = availableBalance + bonusValue;

        document.getElementById('able-balance').innerText = presentBalance;
    } else{
        alert('Invalid coupon enter');
    }

    let data = {
            name: "Bonus Added",
            date: new Date().toLocaleTimeString()
        }

    transactionData.push(data);
})

document.getElementById('pay-bill-btn').addEventListener('click', function(e){
    e.preventDefault();

    let pinNumber = 1234;

    let pinValue = parseInt(document.getElementById('pin-value').value);

    let billerNumber = document.getElementById('biller-number').value;

    let payAmount = parseInt(document.getElementById('pay-amount').value);

    let availableBalance = parseInt(document.getElementById('able-balance').innerText);

    if(payAmount <= 0 || availableBalance < payAmount){
        alert('Wrong Input');

        return;
    }

    if(billerNumber.length === 11 && pinValue === pinNumber){
        let presentBalance = availableBalance - payAmount;

        document.getElementById('able-balance').innerText = presentBalance;
    } else{
        alert('Invalid Credentials Enter');
    }

    let data = {
            name: "Pay Bill",
            date: new Date().toLocaleTimeString()
        }

    transactionData.push(data);
})

document.getElementById('transaction').addEventListener('click', function(){
    // e.preventDefault();
  
    let transactionCard = document.getElementById('transaction-card');
    
    transactionCard.innerText = '';

    for(let data of transactionData){
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-white flex justify-between items-center border border-[#0808081a] rounded-2xl mt-3 py-2 px-3">
                    <div class="flex justify-between items-center gap-[20px] px-5">
                        <div class="bg-[#f4f5f7] p-2 rounded-full">
                            <img src="../assets/wallet1.png" alt="">
                        </div>
                        <div>
                            <h2>${data.name}</h2>
                            <p>Today ${data.date}</p>
                        </div>
                    </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
        transactionCard.appendChild(div);
    }
})

document.getElementById('log-out').addEventListener('click', function(e){
    e.preventDefault();

    window.location.href = '../html/index.html';
})


document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault();

   toggleButton('add-money-section');

   activeBtn('add-money');
})

document.getElementById('cash-out').addEventListener('click', function(e){
    e.preventDefault();

   toggleButton('cash-out-section');

   activeBtn('cash-out');
})

document.getElementById('transfer-money').addEventListener('click', function(e){
    e.preventDefault();

    toggleButton('transfer-money-section');

    activeBtn('transfer-money');
})

document.getElementById('get-bonus').addEventListener('click', function(e){
    e.preventDefault();

    toggleButton('get-bonus-section');

    activeBtn('get-bonus');
})

document.getElementById('pay-bill').addEventListener('click', function(e){
    e.preventDefault();

    toggleButton('pay-bill-section');

    activeBtn('pay-bill');
})

document.getElementById('transaction').addEventListener('click', function(e){
    e.preventDefault();

    toggleButton('transaction-section');

    activeBtn('transaction');
})