var modal = document.getElementById("productModal");
var img = document.getElementById("productImage");
var closeBtn = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}