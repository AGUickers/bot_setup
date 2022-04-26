Telegram.WebApp.MainButton.setParams({
    text: "Get Started"
}).onClick(this.mainBtnClicked);

mainBtnClicked = function() {
    Telegram.WebApp.sendData("/setwebsite");
    console.log(Telegram.WebApp.sendData("/setwebsite"));
}