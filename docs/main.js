let p1 = document.querySelector('.scrollMe1');
let p2 = document.querySelector('.scrollMe2');
let pos = 0;
let pos2 = -p1.scrollWidth;
let p1css;
let p2css;
let down = true;
var styleSheet = document.styleSheets[0];
for (items of styleSheet.rules) {
    if (items.selectorText == ".scrollMe1") p1css = items;
    if (items.selectorText == ".scrollMe2") p2css = items;
}
let moveIt = () => {
    if (down) {
        if (pos > window.innerWidth) pos=pos2-p1.scrollWidth;
        if (pos2 > window.innerWidth) pos2=pos-p1.scrollWidth;
    }
    else {
        if (pos < -p1.scrollWidth) pos=pos2+p1.scrollWidth;
        if (pos2 < -p1.scrollWidth) pos2=pos+p1.scrollWidth;
    }
    p1css.style.transform = `translateX(${pos}px)`;
    p2css.style.transform = `translateX(${pos2}px)`;
    if (down) {
        pos++;
        pos2++;
    } else {
        pos--;
        pos2--;
    }
}

let myInterval = setInterval(moveIt, 1);
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        down = true;
        pos += 50;
        pos2 += 50;
    } else {
        down = false;
        pos -= 50;
        pos2 -= 50;
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

let measurement = (window.innerWidth / p1.scrollWidth).toString();
console.log(`Amount of clones needed : ${parseInt(measurement.slice(0, 1)) + 1}`);