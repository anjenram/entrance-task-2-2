(function () {
let menuBtn = document.querySelector('.colapsed__nav');
let nav = document.querySelector('nav');
let tabDevice = document.querySelector('.device__tab__item')
menuBtn.addEventListener('click', function(e) {
    if(nav.style.display === 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
})
if(window.innerWidth <= 890){
    console.log(tabDevice)
    tabDevice.addEventListener('click', function(e) {
        let listTabsDevice = document.getElementsByClassName('device__tab__item');
        for(var i = 0; i < listTabsDevice.length; i++) {
            console.log(listTabsDevice[i].style.display)
                if(listTabsDevice[i].style.display === 'none' || listTabsDevice[i].style.display === '') {
                    listTabsDevice[i].style.display = 'block'
                } else {
                    if (listTabsDevice[i].children.length > 0) {
                    } else {
                        listTabsDevice[i].style.display = 'none'

                    }
                }
          
          
    }
    })
}
}());