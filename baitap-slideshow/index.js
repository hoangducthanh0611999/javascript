window.onload = function() {
    var links = document.getElementsByTagName("a");
    var imageCache = [];
    var imageTitle = [];
    let img = new Image();
    for (let item of links) {
        img.src = item.href;
        //lay gia tri title cua the <a></a>
        img.title = item.getAttribute("title");
        imageCache[imageCache.length] = img.src;
        imageTitle[imageTitle.length] = img.title;


    }
    var count = 0;
    var kichthuoc = imageCache.length;
    console.log(kichthuoc);
    console.log(img.title);
    setInterval(() => {
        count = (count + 1) % kichthuoc;
        document.getElementById("img-show").src = imageCache[count];
        document.getElementById("caption").innerText = count;
        document.getElementById("caption").innerText = imageTitle[count];

    }, 1000);




}