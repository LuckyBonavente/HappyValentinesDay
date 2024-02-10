const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const message = document.getElementById('message');

var currentGifIndex = 0;
var gifUrls = ["plead-bear.gif", "kiss.gif"];
var noClicks = 0;

yes.addEventListener('click', () => {
    //alert('Yes!');
    currentGifIndex = (currentGifIndex + 1) % gifUrls.length;
    $("#borderimg").attr("src", gifUrls[currentGifIndex]);
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    message.textContent = "Yaayy!! I love you so much!";
});

no.addEventListener('click', () => {
    noBtn.style.transform += 'scale(0.8)';
    noClicks++; // Increment click counter for "no" button

    // Hide the button after 6 clicks and display a message:
    if (noClicks >= 6) {
        noBtn.style.display = 'none';
        message.textContent = "Ouch! That hurts my feelings...";
    }
});