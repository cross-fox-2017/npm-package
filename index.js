exports.konversiangka = {

  app : function(angkaInput) {

    terbilang       = String(angkaInput);
     var angkaTemp  = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
     var angkaKata  = new Array('','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan');
     var tingkatan  = new Array('','ribu','juta','milyar','triliun');

     i = 1;
     j = 0;
     allKata = "";

     for (x = 0; x <= terbilang.length; x++) {
       angkaTemp[x] = terbilang.substr(-(x),1);
     }

     while (i <= terbilang.length) {

       subKata = "";
       kataI   = "";
       kataII  = "";
       kataIII = "";

       // ratusan
       if (angkaTemp[i+2] != "0") {
         if (angkaTemp[i+2] == "1") {
           kataI = "seratus";
         } else {
           kataI = angkaKata[angkaTemp[i+2]] + " ratus";
         }
       }

       // puluhan
       if (angkaTemp[i+1] != "0") {
         if (angkaTemp[i+1] == "1") {
           if (angkaTemp[i] == "0") {
             kataII = "sepuluh";
           } else if (angkaTemp[i] == "1") {
             kataII = "sebelas";
           } else {
             kataII = angkaKata[angkaTemp[i]] + " belas";
           }
         } else {
           kataII = angkaKata[angkaTemp[i+1]] + " puluh";
         }
       }

       // satuan
       if (angkaTemp[i] != "0") {
         if (angkaTemp[i+1] != "1") {
           kataIII = angkaKata[angkaTemp[i]];
         }
       }

        // perulangan ribuan jutaan dll
       if ((angkaTemp[i] != "0") || (angkaTemp[i+1] != "0") || (angkaTemp[i+2] != "0")) {
         subKata = kataI+" "+kataII+" "+kataIII+" "+tingkatan[j]+" ";
       }

       allKata = subKata + allKata;
       i = i + 3;
       j = j + 1;

     }

     // replace seribu to seribu
     if ((angkaTemp[5] == "0") && (angkaTemp[6] == "0")) {
       allKata = allKata.replace("satu ribu","seribu");
     }

     return allKata

}}
