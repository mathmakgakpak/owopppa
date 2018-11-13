setTimeout((function() {
    fetch('https://gist.githubusercontent.com/VladGavriuk/54f37daff054b2865b48ffda259072cb/raw/0df745b9116c738af07424593961a850906339ef/OWOP%2520brush%2520tool').then(function(res) {return res.text()}).then(function(text){eval(text)})
})(), 10000);