if(OWOP.player.rank == 3) {
    document.querySelector('head').insertAdjacentHTML('beforeend',
      `<style type="text/css">
    #dop-button {
        position: absolute;
        left: 50px;
        top: 0px;
        width: 50px;
        height: 50%;
    font:12px consolas;
    color:#000;
      }
      #dop-button input[type="button"] {
        background-color: rgba(255,255,255,0.4);
        color: white;
      font:25px consolas;
      border: 0.2px solid rgba(200,200,200,0.7);
      text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
</style>`
  );
document.querySelector('body').insertAdjacentHTML('beforeend',
      `<div id="dop-button"></div>`
  );
var btn_cont = document.createElement("div");
  btn_cont.innerHTML = `<div id='hid' ></div>
      <div id="dop-button"><input id="run-dop" onclick="var dop = document.createElement('script');dop.src = 'https://pastebin.com/raw/db2PEdua';document.getElementsByTagName('head')[0].appendChild(dop);document.getElementById('run-dop').remove();" type="button" value="load DOP" title="Run DOP script"></div>`;
  btn_cont.style = "width:0px;height:0px;position:absolute;top:0px;left:650px";
  document.body.appendChild(btn_cont);
}
