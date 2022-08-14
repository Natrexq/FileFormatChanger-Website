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
function Credits(){
    
    



    //

    const ig = document.getElementById('ig');
    const fb = document.getElementById('fb');
    const git = document.getElementById('gt');
    const twt = document.getElementById('twt');

    // I will add fb and insta in futuer

    function Git(){window.open("https://github.com/Natrexq");}
    function Twt(){window.open("https://twitter.com/natrexq");}
    function Soon(){alert("Soon...");}

    fb.addEventListener('click', Soon,false);
    ig.addEventListener('click', Soon,false);
    git.addEventListener('click', Git,false);
    twt.addEventListener('click', Twt,false);
    

}
window.addEventListener('load', Credits, false);
window.addEventListener('load', App, false);