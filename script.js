var images = new Array();
images[0] = "/Images/Activity_1.png";
images[1] = "/Images/Activity_2.png";
images[2] = "/Images/Activity_3.png";

var descriptions = new Array();
descriptions[0] = "Today, we learned about eighth notes."
descriptions[1] = "We also learned about parts of the violin."
descriptions[2] = "For homework, we are practicing relaxed and balanced bow hold."

var index = 0;

function showPreviousImage() {
    if (index == -1) {
        return;
    }
    else if (index > 0) {
        index -= 1;
    }

    getImage();
    getDescription();
}

function showNextImage() {
    if (index < images.length - 1) {
        index += 1;
    }

    getImage();
    getDescription();
}

function getImage() {
    var image = document.getElementById("polaroid-image");
    image.src = images[index];
}

function getDescription() {
    var description = document.getElementById("polaroid-description");
    description.title = descriptions[index];
}