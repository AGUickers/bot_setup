Telegram.WebApp.MainButton.setParams({
    is_visible: true,
    text: "Get Started"
}).onClick(this.mainBtnClicked);

mainBtnClicked = function() {
    Telegram.WebApp.sendData("/setwebsite");
    console.log(Telegram.WebApp.sendData("/setwebsite"));
}