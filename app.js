function run(){
    var el = document.getElementsByClassName('ytp-autonav-toggle-button');
    el[0].setAttribute('aria-checked', false)
}
if(document.readyState !== 'loading'){
    run();
} else {
    document.addEventListener('DOMContentLoaded', run())
};
console.log('Youtube Autoplay Fix Extension loaded.')
