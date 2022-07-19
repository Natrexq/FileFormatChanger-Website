function App(){










const gtbut = document.getElementById('gtbut');
const refpg = document.getElementById('flref');

    refpg.addEventListener('click', function Ref(){

        location.reload();

    });
    gtbut.addEventListener('click', function Project(){

        window.open("https://github.com/Natrexq/FileFormatChanger-Website");

    });
}
window.addEventListener('load', App, false);