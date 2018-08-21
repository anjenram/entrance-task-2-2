
function modalOpen(el) {
    let elClass = el.className.split('--')
    let modeClass = elClass[1].split(' ')
    let modal = document.querySelector('.modal')
    let rangeInput = modal.querySelector('.modal_rage')
    let tabsSun = modal.querySelector('.--modal-sun')
    let tabsTemp = modal.querySelector('.--modal-temp')
    let valueModal = modal.querySelector('.vaule')
    let iconModal = modal.querySelector('.icon')
    let Dial = document.querySelector('.modal__dial');
    let DialCenter = document.querySelector('.dial__center');
    let dialValue = document.querySelector('.dial__vaule');
    let name = el.querySelector('.device__item__name').textContent,
        status = el.querySelector('.device__item__status').textContent;
    let Btns = modal.querySelector('.modal__control');
    let modalName = modal.querySelector('.device__name'),
        modalStatus = modal.querySelector('.device__status');
    modalName.innerHTML = name;
    modalStatus.innerHTML = status;

    Draggable.create(DialCenter, {
        trigger:Dial,
        bounds: {
            maxRotation: 290,
            minRotation: -21
        },
        type: 'rotation',
        onPress: function (e) {
            var rad = Math.atan2(e.layerY, e.layerX);
            console.log(RadiansToDegrees(rad))
            var cX = e.layerX + (285 / 2);
            var cPercent = (cX);
            console.log(cPercent)
        },
        throwProps: true,
        onDrag: dragUpdate,
        onThrowUpdate: dragUpdate
    })
    
    function dragUpdate(){
        let val = (DialCenter._gsTransform.rotation/290);
        let percent = val * 100;
        percent = (percent > 100) ? 100 : percent;
       percent = (percent < 0) ? 0 : percent;
        dialValue.innerHTML = '+' + Math.floor(percent/3);
        valueModal.innerHTML = '+' + Math.floor(percent/3)
    }
    function RadiansToDegrees(valRad){
        return (360/(2*Math.PI)*valRad) - 45;
      }
    modal.classList.add('show')
    modal.style.display = 'flex'
    if (modeClass[0] === 'sun') {
        console.log(modeClass)
        tabsSun.style.display = 'flex'
        rangeInput.style.display = 'block'
        rangeInput.classList.add('--sun')
        if (window.innerWidth > 890) {
            iconModal.classList.add('--sun')
            if(modeClass.length > 1) {
                iconModal.classList.add('active')
            }
        }
    } else {
        if (window.innerWidth > 890) {
            iconModal.classList.add('--temp')
            if(modeClass.length > 1) {
                iconModal.classList.add('active')
            }
            valueModal.classList.add('--temp')
        }
        if(name == "Xiaomi Warm Floor"){
            Dial.style.display = 'flex'
            dialValue.style.display = 'block'
        } else {
            rangeInput.style.display = 'block'
            tabsTemp.style.display = 'flex'
            rangeInput.classList.add('--temp')
            let Input = modal.getElementsByTagName('input')
            Input[0].addEventListener('change', function(e){
                let temp = Math.floor(((40 * Input[0].value) / 100) -10)
                if(temp > 0){
                    valueModal.innerHTML = '+' + temp
                } else {
                    valueModal.innerHTML =  temp
                }
            })
        }
    }
    
    let close = Btns.querySelector('.--cancel');
    close.addEventListener('click', function (e) {
        modal.classList.remove('show')
        modal.style.display = 'none'
        rangeInput.style.display = 'none'
        Dial.style.display = 'none'
        dialValue.style.display = 'none'

        if (modeClass[0] === 'sun') {
            rangeInput.classList.remove("--sun")
            tabsSun.style.display = 'none'
            iconModal.classList.remove('--sun')
            iconModal.classList.remove('active')
            valueModal.classList.remove('--sun')
        } else {
            rangeInput.classList.remove("--temp")
            tabsTemp.style.display = 'none'
            valueModal.classList.remove('--temp')
            iconModal.classList.remove('active')
            iconModal.classList.remove('--temp')
        }
    });
}

function closeOpen() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'none'
}

function addListners() {
    let listItemDevice = document.getElementsByClassName('list__device__item');
    for (var i = 0; i < listItemDevice.length; i++) {
        listItemDevice[i].addEventListener('click', function (e) {
            modalOpen(this)

        });
    }
}
addListners();