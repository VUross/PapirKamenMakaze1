
var legalarr=["PAPIR","KAMEN","MAKAZE","KRAJ"];

var korisnik = "";

var skor=4;
var rcskor=0;
var Kmp=0;

while (skor !== 3) {
	do {
		str=prompt("Makaze Papir Kamencina Kraj");
		korisnik=str.toUpperCase();
		alert(korisnik);
		if (korisnik===legalarr[0]) {
			skor=0;
		} else if (korisnik===legalarr[1]) {
			skor=1;
		} else if (korisnik===legalarr[2]) {
			skor=2;
		}else if (korisnik===legalarr[3]) {
			skor=3;
		} else {
			skor=4;
			alert("ponovi");
		}
	}
	while (skor===4);

	var Kmp = Math.random()*100;

	if (Kmp<=34) {
		Kompjuter="PAPIR";
		rcskor=0;
	} else if (Kmp<=67) {
		Kompjuter="KAMEN";
		rcskor=1;
	} else {
		Kompjuter="MAKAZE"
		rcskor=2;
	};

	if (skor !== 3) {
		if (skor===rcskor) {
		alert("Jednake mogucnosti. Pokusajte ponovo!");
		} else if (skor>rcskor) { 
			alert("KORISNIK JE IZABRAO "+korisnik+"\nKOMPJUTER JE IZABRAO "+Kompjuter+"\n\n"+"Korisnice bitnago pobedijo si!!!");
	    } else if (rcskor>skor) {
	    	alert("KORISNIK JE IZABRAO "+korisnik+"\nKOMPJUTER JE IZABRAO "+Kompjuter+"\n\n"+"Kompjuter je pobedio, pokusajte ponovo!!!");
	    }; 
	} else alert("Bilo nam je em milo em drago svrni opet prike");
};