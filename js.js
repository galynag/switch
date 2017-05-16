trigger={
    'osX':'',
    'widthBox':'',
    'sdvig': function(event) {
        trigger.widthBox=event.srcElement.offsetWidth;
        trigger.osX=event.offsetX*100/trigger.widthBox;
        if (trigger.osX<2 || trigger.osX>88 ) {
            document.querySelector('.box img').src='img/0ru_720.png';
        }
        else if (trigger.osX>2 && trigger.osX<30) {
            document.querySelector('.box img').src='img/1ru_720.png';
        }
        else if (trigger.osX>30 && trigger.osX<60) {
            document.querySelector('.box img').src='img/2ru_720.png';
        }
        else if (trigger.osX>60 && trigger.osX<=88) {
            document.querySelector('.box img').src='img/3ru_720.png';
        }
    },
    'hrefF': function(event) {
        trigger.widthBox=event.srcElement.offsetWidth;
        trigger.osX=event.offsetX*100/trigger.widthBox;
        if (trigger.osX>2 && trigger.osX<30) {
            // location.href = 'https://ya.ru/';
            window.open('https://ya.ru/','_blank');
        }
        else if (trigger.osX>30 && trigger.osX<60) {
            location.href = 'https://google.com';
        }
        else if (trigger.osX>60 && trigger.osX<=88) {
            location.href = 'https://bing.com';
        }
    }
}
document.querySelector('.box').addEventListener('mousemove',trigger.sdvig);
document.querySelector('.box').addEventListener('click',trigger.hrefF);


// document.querySelector('.box').addEventListener('mousemove',trigger);
//
// function trigger(event) {
//     console.log(event.offsetX);
//     if (event.offsetX<300) {
//         document.querySelector('.box img').src='img/1ru_720.png';
//     }
//     else if (event.offsetX>300 && event.offsetX<600) {
//         document.querySelector('.box img').src='img/2ru_720.png';
//     }
//     else if (event.offsetX>600 && event.offsetX<=900) {
//         document.querySelector('.box img').src = 'img/3ru_720.png';
//     }
// }