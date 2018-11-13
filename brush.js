setTimeout(function(){
var brDiameter=5
if (OWOP.player.rank == 3) {
        var brDiamWin = OWOP.windowSys.addWindow(new OWOP.windowSys.class.window('Brush diameter', {}, function(win) {
        win.container.title = 'Sets brush diameter. (duh)';
        win.container.style.height = '16px';
        win.container.style.overflow = 'hidden';

        var brDiamElm = OWOP.util.mkHTML('span', { innerHTML: brDiameter });
        win.addObj(brDiamElm);
        var Rbar = OWOP.util.mkHTML('input', {
            type: 'range', style: '-moz-appearance:none;-webkit-appearance:none;appearance:none;height:6px;outline:none;float:right;',
            min: 2, max: 16,
            value: brDiameter,
            oninput: function() {
                brDiameter = this.value;
                brDiamElm.innerHTML = this.value;
            }, ondblclick:function() {
                this.value = 3; 
                this.onchange();
            }
        });
        win.addObj(Rbar);
    }).move(945, 32));
    }
},9000);