//NAVBAR
window.onscroll = () => {
    if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
    ) {
        document.getElementById("navbar").style.backgroundColor =
            "rgba(10, 10, 10, 0.674)";
    } else {
        document.getElementById("navbar").style.backgroundColor =
            "rgba(106, 166, 255, 0.63)";
    }
};
