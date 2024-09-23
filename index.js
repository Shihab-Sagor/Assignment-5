document.getElementById('blog-page').addEventListener('click',function(){
    window.location.href = '/blog.html';
})
const donationTab = document.getElementById('donation-btn')
donationTab.addEventListener('click',function(){
    // donationTab.classList.add('font-extrabold','bg-lime-300')
    donationTab.classList.add('font-bold','bg-lime-300')
    historyTab.classList.remove('font-bold','bg-lime-300')
})
const historyTab = document.getElementById('history-btn')
historyTab.addEventListener('click',function(){
    historyTab.classList.add('font-bold','bg-lime-300')
    donationTab.classList.remove('font-bold','bg-lime-300')
})