/**
 * Created by Ucenik on 27.4.2017..
 */
var novi=document.getElementById("prvi").innerHTML;
document.getElementById("drugi").innerHTML=novi;

function Loadslika()
{
    document.getElementById("slika1").src="https://slike.geek.hr/wp-content/uploads/sites/10/store/mali-zec-slika.jpg";
}
function slika()
{
    document.getElementById("slika1").src="http://akademija.uns.ac.rs/wp-content/uploads/2012/03/slika2011.jpg";
}

function boja()
{
    document.getElementById("prvi").style.backgroundColor="#0000FF";
}
function prikazi()
{
    document.getElementById("SaPri").style.visibility="visible";
}
function sakri()
{
    document.getElementById("SaPri").style.visibility="hidden";
}
