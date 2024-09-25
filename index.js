document.getElementById('blog-page').addEventListener('click',function(){
    window.location.href = '.\/blog.html';
})

const donationTab = document.getElementById('donation-btn')
donationTab.addEventListener('click',function(){
    // donationTab.classList.add('font-extrabold','bg-lime-300')
    donationTab.classList.add('font-bold','bg-lime-300')
    historyTab.classList.remove('font-bold','bg-lime-300')
    donationField.classList.remove('hidden')
})
const donationField =document.getElementById('donation-field')
const historyTab = document.getElementById('history-btn')
historyTab.addEventListener('click',function(){
    historyTab.classList.add('font-bold','bg-lime-300')
    donationTab.classList.remove('font-bold','bg-lime-300')
    donationField.classList.add('hidden')
})
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click',function(){
const inputAmount = parseFloat(document.getElementById('input-amount').value);
const placeAmount = parseFloat(document.getElementById('add-amount').innerText);
const addingAmount = inputAmount + placeAmount;
const addingField = document.getElementById('add-amount')
addingField.innerText = addingAmount;
const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
const lessBalance = totalBalance - inputAmount ;
const totalBalanceOfAcc = document.getElementById('total-balance');
totalBalanceOfAcc.innerText = lessBalance; 

if( Number.isNaN(inputAmount) || inputAmount < 0 ){
    console.log('please enter the valid amount');
    alert('Invalid Donate amount')
    document.getElementById('modal').classList.add('hidden')
    addingField.innerText = addingAmount;
    placeAmount == placeAmount;
}
});
 document.getElementById('feni-btn').addEventListener('click',function(){
const inputAmount = parseFloat(document.getElementById('feni-input').value);
const placeAmount = parseFloat(document.getElementById('feni-place').innerText);
const addingAmount = inputAmount + placeAmount;
const addingField = document.getElementById('feni-place')
addingField.innerText = addingAmount;
const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
const lessBalance = totalBalance - inputAmount ;
const totalBalanceOfAcc = document.getElementById('total-balance');
totalBalanceOfAcc.innerText = lessBalance;  

if( Number.isNaN(inputAmount) || inputAmount < 0 ){
    console.log('please enter the valid amount');
    alert('Invalid Donate amount')
    document.getElementById('modal').classList.add('-z-index-1')
    addingField.innerText = addingAmount
}

 })

 document.getElementById('quata-btn').addEventListener('click',function(){
    const inputAmount = parseFloat(document.getElementById('quata-input').value);
    const placeAmount = parseFloat(document.getElementById('quata-place').innerText);
    const addingAmount = inputAmount + placeAmount;
    const addingField = document.getElementById('quata-place')
    addingField.innerText = addingAmount;
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    const lessBalance = totalBalance - inputAmount ;
    const totalBalanceOfAcc = document.getElementById('total-balance');
    totalBalanceOfAcc.innerText = lessBalance;  
    
    if( Number.isNaN(inputAmount) || inputAmount < 0 ){
        console.log('please enter the valid amount');
        alert('Invalid Donate amount')
        document.getElementById('modal').classList.add('hidden')
        addingField.innerText = addingAmount
    }
    
     })
    