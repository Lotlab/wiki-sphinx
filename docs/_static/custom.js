
let tables = document.getElementsByTagName("table");
for(let i=0;i<tables.length;i++) {
    tables[i].classList.add("mui-table","mui-table--bordered");
}

var sidedrawer = document.getElementById("sidedrawer");

document.getElementsByClassName("js-show-sidedrawer")[0].onclick = showSideDrawer;
document.getElementsByClassName("js-hide-sidedrawer")[0].onclick = hideSideDrawer;


let foldEls = document.getElementsByClassName("toctree-l1 current");
for (let i = 0; i < foldEls.length; i++) {
    let sb = foldEls[i].firstChild.nextElementSibling;
    if (sb != undefined) {
        sb.classList.add("element-hidden");
        foldEls[i].firstChild.onclick = foldElementHandler;
    }
}

function showSideDrawer() {
    var options = {
        onclose: function() {
            sidedrawer.classList.remove("active");
            document.body.append(sidedrawer);
            $sidedrawerEl
                .removeClass('active')
                .appendTo(document.body);
        }
    };
    let overlayEl = mui.overlay('on', options);
    overlayEl.append(sidedrawer);
    setTimeout(function() {
        sidedrawer.classList.add("active");
    }, 20);
}

function hideSideDrawer() {
    document.body.classList.toggle("hide-sidedrawer");
}

function foldElementHandler(ev) {
    ev.target.nextElementSibling.classList.toggle("element-hidden");
    return false;
}