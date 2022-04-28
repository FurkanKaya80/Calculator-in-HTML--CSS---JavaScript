var optDurum=false;
var opt="";
var sonuc ="0";
var rakam = document.querySelectorAll(".rakam");
var gosterge = document.querySelector(".gosterge");
var btnopt = document.querySelectorAll(".btnopt");
var islem = document.querySelector(".islem");
var btnc = document.querySelector(".btnc");
var btnesit = document.querySelector(".btnesit");
var btnnokta = document.querySelector(".btnnokta");
var btnmodon = document.querySelector(".btnmodon");
var btnmutlak = document.querySelector(".btnmutlak");
var btnisaret = document.querySelector(".btnisaret");
var btnkarekok = document.querySelector(".btnkarekok");
var btnuson = document.querySelector(".btnuson");
var btnikius = document.querySelector(".btnikius");
var btnlog = document.querySelector(".btnlog");
var btnsin = document.querySelector(".btnsin");
var btncos = document.querySelector(".btncos");
var btnfonk2 = document.querySelector(".btnfonk2");
var btnfonk1 = document.querySelector(".btnfonk1");

rakam.forEach(function(element){

     element.onclick=function(e){

        if(gosterge.textContent == "0" || optDurum){
             gosterge.textContent="";
        }
         
        gosterge.textContent +=this.textContent;
        optDurum=false;
     }
});

   btnopt.forEach(function(element){

          element.onclick=function(e){
            optDurum=true;
            var yeniOpt = this.textContent;
            islem.textContent = islem.textContent +" "+gosterge.textContent+" "+yeniOpt;

            switch(opt)
            {
                case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
                case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
                case "x":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
                case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
                default:break;
            }

             sonuc = Number(gosterge.textContent);
             opt=yeniOpt;
          }
   });

    btnc.onclick=function(e){
        gosterge.textContent="0";
        islem.textContent="";
        sonuc = 0;
        opt="";
    }
    btnesit.onclick = function(e)
    {
          islem.textContent="";
          optDurum=true;
          switch(opt)
            {
                case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
                case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
                case "x":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
                case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
                default:break;
            }
             
             sonuc = Number(gosterge.textContent);
             gosterge.textContent=sonuc;
             sonuc=0;
             opt="";
    }

    btnnokta.onclick = function(e)
    {
         if(!optDurum && !gosterge.textContent.includes("."))
         {
              gosterge.textContent+=".";
         }
         else if(optDurum)
         {
              gosterge.textContent="0";
         }

         if(!gosterge.textContent.includes("."))
         {
             gosterge.textContent+=".";
         }
         optDurum = false;
    }

    btnmodon.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Number(gosterge.textContent) % 10;
        gosterge.textContent = sonuc;
    }

    btnmutlak.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Math.abs(Number(gosterge.textContent));
        gosterge.textContent = sonuc;
    }
    btnisaret.onclick = function(e)
    {
        if(!optDurum && !gosterge.textContent.includes("-"))
        {
             gosterge.textContent = "-"+gosterge.textContent;
        }
        else
        {
            gosterge.textContent = Math.abs(gosterge.textContent);
        }
    }
    btnkarekok.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Math.sqrt(Number(gosterge.textContent));
        gosterge.textContent = sonuc;
    }
    btnuson.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Math.pow(10,gosterge.textContent);
        gosterge.textContent = sonuc;
    }
    btnikius.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Math.pow(2,gosterge.textContent);
        gosterge.textContent = sonuc;
    }
    btnlog.onclick = function(e)
    {
        islem.textContent="";
        sonuc = Math.log10(gosterge.textContent);
        gosterge.textContent = sonuc;
    }
    btnsin.onclick = function(e)
    {
        if(gosterge.textContent == 30)
        {
                gosterge.textContent = "0.5";
        }
        else if(gosterge.textContent == 60)
        {
               gosterge.textContent = "0.8660254037844386";
        }
        else if(gosterge.textContent == 90)
        {
            gosterge.textContent = "1";
        }
    }
    btncos.onclick = function(e)
    {
        if(gosterge.textContent == 30)
        {
                gosterge.textContent = "0.8660254037844386";
        }
        else if(gosterge.textContent == 60)
        {
               gosterge.textContent = "0.5";
        }
        else if(gosterge.textContent == 90)
        {
            gosterge.textContent = "0";
        }
    }
    btnfonk2.onclick = function(e)
    {
        islem.textContent="";
        if(gosterge.textContent%2 == 0)
        {
            gosterge.textContent = "0";
        }
        else
        {
            gosterge.textContent = "1";
        }
    }
    function rastgelesifre(uzunluk) {
		var character = 'abcdefghijklmnopqrstuvwxyz0123456789';
		var sonuc = '';
 
		for (var i = uzunluk; i > 0; --i) 
		{
		sonuc += character[Math.floor(Math.random() * character.length)];
		}
		return sonuc;
	}
    btnfonk1.onclick = function(e)
    {
        gosterge.textContent = (rastgelesifre(gosterge.textContent));
        islem.textContent="";   
       }
    