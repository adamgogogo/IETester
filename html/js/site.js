
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

function getElementsByClassName(className) {
    var found = [];
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var names = elements[i].className.split(' ');
        for (var j = 0; j < names.length; j++) {
            if (names[j] == className) found.push(elements[i]);
        }
    }
    return found;
}

function myListenEvt(elem, myFunction) {
    if (elem && elem.addEventListener) {
        elem.addEventListener("click", myFunction);
    } else if (elem && elem.attachEvent) {
        elem.attachEvent("onclick", myFunction);
    }
}

function onclickbtnsear() {
    var id = document.getElementById("searchtext").value;
    // alert(id);
    window.location.href = "/ReportView/index?id=" + id;
}

function onclickimgItem(e) {
    // console.log("imgItems==this", this);
}

function onclickimgItem2(src) {
    // alert(src);
    var MaxImg = document.getElementById("MaxImg");
    MaxImg.setAttribute('src', src);
    var MaxBox = getElementsByClassName("MaxBox")[0];
    MaxBox.style.display = 'block';
    MaxImg.style.display = 'block';

    var ImageShow = getElementsByClassName("ImageShow")[0];
    ImageShow.style.display = "none";
}

function onclickMaxBox(){
    var MaxBox = getElementsByClassName("MaxBox")[0];
    MaxBox.style.display = 'none';
    var MaxImg = document.getElementById("MaxImg");
    MaxImg.style.display = 'none';

    var ImageShow = getElementsByClassName("ImageShow")[0];
    ImageShow.style.display = "block";
}

function onclickDownloadAux(){
    window.location.href = "http://192.168.0.242:9009/MCEXE.zip";
}

if (document.getElementById("btnsear")) {
    myListenEvt(document.getElementById("btnsear"), onclickbtnsear);
}

if (getElementsByClassName("imgItem")) {
    var imgItems = getElementsByClassName("imgItem");
    for (var i = 0; i < 21; i++) {
        // console.log("imgItems==[i]", imgItems[i]);        
        myListenEvt(imgItems[i], onclickimgItem);
    }
}

if (getElementsByClassName("MaxBox")) {
    var imgItems = getElementsByClassName("MaxBox");
    for (var i = 0; i < 21; i++) {
        // console.log("imgItems==[i]", imgItems[i]);        
        myListenEvt(imgItems[i], onclickMaxBox);
    }
}

if (document.getElementById("DownloadAux")) {
    myListenEvt(document.getElementById("DownloadAux"), onclickDownloadAux);
}

function OpenAux(url, lsh) {
    window.location.href = "MicroDicomStart://" + url + "," + lsh;
    //console.log(url, lsh);
}