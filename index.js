document.getElementById('blog-page').addEventListener('click',function(){
    window.location.href ='./blog.html';
    
})
const historyField = document.getElementById('history-container')
const donationTab = document.getElementById('donation-btn')
donationTab.addEventListener('click',function(){
    // donationTab.classList.add('font-extrabold','bg-lime-300')
    donationTab.classList.add('font-bold','bg-lime-300')
    historyTab.classList.remove('font-bold','bg-lime-300')
    donationField.classList.remove('hidden')
    historyField.classList.add('hidden')
    
})
const donationField =document.getElementById('donation-field')
const historyTab = document.getElementById('history-btn')
historyTab.addEventListener('click',function(){
    historyTab.classList.add('font-bold','bg-lime-300')
    donationTab.classList.remove('font-bold','bg-lime-300')
    donationField.classList.add('hidden')
    historyField.classList.remove('hidden')
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

const historyFunction = document.createElement("div")
historyFunction.className ='bg-white p-3 rounded-md border mt-2 text-left border-gray-400'
historyFunction.innerHTML = `
<p class="text-lg font-bold  ">${inputAmount} Taka is Donated for famine-2024 at Noakhali ,bangladesh</p>
<p class="text-sm text-gray-500 " >Date: ${new Date().toDateString()} GMT +0600 (Bangladesh standard time) </p>
`;
const historyContainer = document.getElementById('history-list')
historyContainer.insertBefore(historyFunction, historyContainer.lastChild);


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
const historyFunction = document.createElement("div")
historyFunction.className ='bg-white p-3 rounded-md border mt-2 text-left border-gray-400'
historyFunction.innerHTML = `
<p class="text-lg font-bold  ">${inputAmount} Taka is Donated for famine-2024 at flood relief in feni,bangladesh</p>
<p class="text-sm text-gray-500 " >Date: ${new Date().toDateString()} GMT +0600 (Bangladesh standard time) </p>
`;
const historyContainer = document.getElementById('history-list')
historyContainer.insertBefore(historyFunction, historyContainer.lastChild);

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
    const historyFunction = document.createElement("div")
historyFunction.className ='bg-white p-3 rounded-md border mt-2 text-left border-gray-400'
historyFunction.innerHTML = `
<p class="text-lg font-bold  ">${inputAmount} Taka is Donated for Aid for Injured in the Quota Movement, bangladesh</p>
<p class="text-sm text-gray-500 " >Date: ${new Date().toDateString()} GMT +0600 (Bangladesh standard time) </p>
`;
const historyContainer = document.getElementById('history-list')
historyContainer.insertBefore(historyFunction, historyContainer.lastChild);


    
     })
    