function App(){









//Buttons from navbar

const git = document.getElementById('gitn');
const info = document.getElementById('info');
const auth = document.getElementById('auth');

git.addEventListener('click', function Do(){

    window.open("https://github.com/Natrexq/FileFormatChanger-Website");

});
info.addEventListener('click',function Do(){

    window.open("https://github.com/Natrexq/FileFormatChanger-Website/blob/main/README.md");


});
auth.addEventListener('click',function Do(){

    window.open("https://github.com/Natrexq");


});


//
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