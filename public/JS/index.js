//NAVBAR
window.onscroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.backgroundColor =
            "rgba(10, 10, 10)";
    } else {
        document.getElementById("navbar").style.backgroundColor =
            "rgb(19, 87, 19)";
    }
};
