let btnizq=document.getElementById("btnizq");
let btnder=document.getElementById("btnder");
let imgizq=document.getElementById("imgleft");
let imgcen=document.getElementById("imgcenter");
let imgder=document.getElementById("imgright");
let imgprin=document.getElementById("imgprin")
let fav=document.getElementById("fav");
let sinop=document.getElementById("sinop");
let album=document.getElementById("album");
let autor=document.getElementById("autor");
let track=document.getElementById("track");
let side=document.getElementById("side");


let x=0;
btnizq.onclick=function()
{
    x=x-1
     cambiarImagen()
    
}

btnder.onclick=function(){
    x=x+1
    cambiarImagen()
}

function cambiarImagen(){
if(x<0)
{
 x=10
}
else if(x>10){
x=0
}
switch (x){
    case 0:
        imgizq.src="./Imagenes/10.jpg"
        imgcen.src="./Imagenes/0.jpg"
        imgder.src="./Imagenes/1.jpg"
        imgprin.src="./Imagenes/0.jpg"
        autor.innerHTML="Mac Miller en 17, 2020"
        album.innerHTML="Circles"
        sinop.innerHTML="Circles es el quinto y último álbum de estudio de Mac Miller, lanzado póstumamente el 17 de enero de 2020. Este trabajo refleja una profunda introspección y vulnerabilidad, fusionando elementos de hip-hop, jazz y música alternativa. El álbum es una continuación de su predecesor, Swimming, explorando temas de lucha personal, salud mental y la búsqueda de la paz interior. <br><br>A lo largo de sus 12 pistas, Mac Miller ofrece una visión sincera de sus batallas internas, su crecimiento emocional y su deseo de superación. Las melodías suaves y los arreglos instrumentales crean una atmósfera melancólica pero esperanzadora, con letras que transmiten una mezcla de tristeza y resiliencia. Canciones como Good News y Blue World destacan su habilidad para encontrar belleza en la vulnerabilidad y el proceso de sanación. <br><br>Circles es un testimonio conmovedor del talento de Mac Miller y un tributo a su legado, capturando su esencia como artista que constantemente buscaba la autenticidad y la conexión emocional. Es un álbum que invita a la reflexión, resonando profundamente con quienes han enfrentado sus propios desafíos personales."
        track.innerHTML="1.Cricles &nbsp; 2.Blue World &nbsp; 3.Good News &nbsp;  4.I Can See &nbsp; 5.Everybody &nbsp;  6.Woods  &nbsp; 7.Hands Me Down &nbsp; 8.That's On Me  <br> <br>9.Hands &nbsp;10.Surf &nbsp;11.Once A Day"
        fav.innerHTML="Good News <br>Once A Day <br>That's On Me "
        side.style.backgroundColor='#a5a5a5'
        side.style.color='#ffffff'
        break;
    case 1:
        imgizq.src="./Imagenes/0.jpg"
        imgcen.src="./Imagenes/1.jpg"
        imgder.src="./Imagenes/2.jpg"
        imgprin.src="./Imagenes/1.jpg"
        autor.innerHTML="Kendrick Lamar abr 14, 2017"
        album.innerHTML="DAMN"
        sinop.innerHTML="DAMN. es el cuarto álbum de estudio de Kendrick Lamar, lanzado el 14 de abril de 2017. Este trabajo se caracteriza por su introspección y profundidad lírica, abordando temas como la identidad, la religión, la política y la lucha personal. El álbum está estructurado en dos partes, cada una explorando la dualidad de la vida y la complejidad de la existencia. Kendrick combina elementos de hip-hop, funk y soul, creando una experiencia auditiva rica y variada. Las letras son provocativas y reflexivas, con Kendrick reflexionando sobre su éxito, su cultura y su papel en la sociedad.<br><br> Destacan canciones como HUMBLE., que critica la superficialidad en la industria, y DNA., donde examina su herencia y la influencia de su entorno. FEAR. ofrece una mirada íntima a sus inseguridades y vulnerabilidades. <br><br> DAMN. no solo es un testimonio del talento de Kendrick como rapero y compositor, sino también un comentario social que resuena en la realidad contemporánea. El álbum recibió aclamación crítica y comercial, consolidando a Kendrick Lamar como uno de los artistas más importantes de su generación."
        track.innerHTML="1.BLOOD &nbsp; 2.DNA &nbsp; 3.YAH &nbsp; 4.ELEMENT &nbsp; 5.FEEL &nbsp; 6.LOYALTY &nbsp; 7.PRIDE &nbsp; 8.HUMBLE &nbsp; 9.LUST &nbsp; 10.LOVE &nbsp; <br><br> 11.XXX &nbsp;  12.FEAR &nbsp; 13.GOD &nbsp; 14.GOD &nbsp; 15.DUCKWORTH"
        fav.innerHTML="DUCKWORTH <br> XXX <br> DNA"
        side.style.backgroundColor='#4D252F'
        side.style.color='#ffffff'
        break;

    case 2:
        imgizq.src="./Imagenes/1.jpg"
        imgcen.src="./Imagenes/2.jpg"
        imgder.src="./Imagenes/3.jpg"
        imgprin.src="./Imagenes/2.jpg"
        autor.innerHTML="Dominik Fike oct 16, 2018"
        album.innerHTML="Don't Forget About Me, Demos"
        sinop.innerHTML="Don't Forget About Me, Demos es una colección de canciones de Dominic Fike lanzada en 2018 que presenta su estilo único, fusionando elementos de pop, rock y hip-hop. El álbum muestra su habilidad para crear melodías pegajosas y letras introspectivas que exploran temas de amor, lucha personal y la búsqueda de la identidad.<br><br> A través de su sonido fresco y accesible, Fike aborda experiencias cotidianas con una sinceridad que resuena con su audiencia. Canciones como 3 Nights y Socks destacan por su producción envolvente y la capacidad de Fike para capturar emociones complejas en un formato conciso.<br><br> Este proyecto no solo sirvió como una plataforma para su talento emergente, sino que también estableció a Fike como un artista innovador en la escena musical contemporánea, atrayendo la atención de críticos y oyentes por igual. Con una mezcla de ritmos optimistas y letras reflexivas, Don't Forget About Me, Demos es una declaración poderosa del potencial de Dominic Fike como músico."
        track.innerHTML="1.3 Nights &nbsp; 2.She Wants My Money &nbsp; 3.Babydoll &nbsp; 4.Weastcoast Collective &nbsp; 5.Socks &nbsp; 6.King Of Everything &nbsp; 7.Falling Asleep &nbsp;<br><br> 8.Batshit"   
        fav.innerHTML="3 Nights <br> Socks <br> Weastcoast Collective"
        side.style.backgroundColor='#E6AE2A'
        side.style.color='#ffffff'
        break;
        
    case 3:
        imgizq.src="./Imagenes/2.jpg"
        imgcen.src="./Imagenes/3.jpg"
        imgder.src="./Imagenes/4.jpg"
        imgprin.src="./Imagenes/3.jpg"
        autor.innerHTML="Redveil abr 20, 2022"
        album.innerHTML="Learn 2 Swim"
        sinop.innerHTML="Learn 2 Swim es el álbum debut de redveil, lanzado en 2021, que destaca por su enfoque fresco y auténtico en el hip-hop. A través de sus letras introspectivas y emotivas, redveil explora temas como la autoaceptación, la lucha personal y la búsqueda de identidad en un mundo complejo.<br><br> El álbum combina una producción innovadora con influencias de jazz y soul, creando un ambiente sonoro envolvente que complementa su estilo lírico único. Canciones como morphine (da ways) y pg baby muestran su habilidad para mezclar ritmos pegajosos con reflexiones profundas sobre la vida y las relaciones. <br><br>Con un enfoque maduro y una voz distintiva, redveil establece su presencia en la escena musical, invitando a los oyentes a reflexionar sobre sus propias experiencias mientras navega por el viaje de crecer y encontrar su lugar en el mundo. Learn 2 Swim es una celebración de la juventud y una declaración de intenciones de un artista prometedor."
        track.innerHTML="1.together &nbsp; 2.diving board &nbsp; 3.pg baby &nbsp; 4.new info &nbsp; 5.shoulder &nbsp; 6.better &nbsp; 7.sky &nbsp; 8.morphine (da ways) &nbsp; 9.automatic &nbsp;<br><br> 10.home &nbsp; 11.mars &nbsp; 12.working on it"
        fav.innerHTML="pg baby <br> morphine (da ways) <br> new info"
        side.style.backgroundColor='#8A86DC'
        side.style.color='#ffffff'
        break;
    case 4:
        imgizq.src="./Imagenes/3.jpg"
        imgcen.src="./Imagenes/4.jpg"
        imgder.src="./Imagenes/5.jpg"
        imgprin.src="./Imagenes/4.jpg"
        autor.innerHTML="Natanael Cano may 28, 2021"
        album.innerHTML="A Mis 20"
        sinop.innerHTML="A Mis 20 es un álbum lanzado por Natanael Cano en 2021, que marca una etapa significativa en su carrera musical. Este trabajo fusiona corridos tumbados con ritmos urbanos, reflejando la esencia del género regional mexicano mientras incorpora elementos contemporáneos.<br><br> El álbum presenta una variedad de temas que abordan experiencias personales, amor, desamor y la vida en la calle, mostrando la autenticidad y vulnerabilidad de Natanael. Canciones destacadas como Diamantes y Ninguna Como Ella resaltan su estilo único y su capacidad para contar historias a través de letras sinceras y memorables.<br><br>Con A Mis 20, Natanael Cano no solo reafirma su posición como un innovador en la música regional, sino que también conecta con una generación joven que busca autenticidad y frescura en sus artistas. Este álbum es una celebración de la juventud y las vivencias que vienen con ella, consolidando a Natanael como una voz prominente en la música latina contemporánea."
        track.innerHTML="1.Diamantes &nbsp; 2.El F &nbsp; 3.Carlitos &nbsp; 4.Se Les Olvida &nbsp; 5.En EL Cielo O En El Infierno &nbsp; 6.Sin Ti &nbsp; 7.Porte Exuberante &nbsp; <br><br>8.Ninguna Como Ella &nbsp; 9.Llenas Las Cuentas &nbsp; 10.Todo Se Dio &nbsp; 11.Cuando Se Requiere"
        fav.innerHTML="Diamantes <br> Porte Exuberante <br> Ninguna Como Ella"
        side.style.backgroundColor='#D80005'
        side.style.color='#ffffff'
        break;
    case 5:
        imgizq.src="./Imagenes/4.jpg"
        imgcen.src="./Imagenes/5.jpg"
        imgder.src="./Imagenes/6.jpg"
        imgprin.src="./Imagenes/5.jpg"
        autor.innerHTML="Denzel Curry mar 25, 2022"
        album.innerHTML="Melt My Eyez See Your Future"
        sinop.innerHTML="Melt My Eyez See Your Future es el cuarto álbum de estudio de Denzel Curry, lanzado en 2022. Este trabajo destaca por su exploración introspectiva y emocional, donde Denzel fusiona géneros como hip-hop, jazz y soul, creando un sonido único y envolvente.<br><br> A lo largo del álbum, Denzel aborda temas como la auto-reflexión, la lucha personal y la búsqueda de la paz interior. Canciones como Walkin y X Wing revelan su habilidad para combinar letras profundas con melodías pegajosas, mientras que su estilo lírico distintivo resuena con autenticidad y vulnerabilidad.<br><br> Melt My Eyez See Your Future es una representación poderosa del crecimiento artístico de Denzel Curry y su capacidad para conectar con sus oyentes en un nivel más profundo. Con una producción innovadora y letras conmovedoras, el álbum invita a la reflexión y reafirma a Denzel como una de las voces más importantes del hip-hop contemporáneo."
        track.innerHTML="1.Melt Session #1 &nbsp; 2.Walkin &nbsp; 3.Worst Come To Worst &nbsp; 4.John Wayne &nbsp; 5.The Last &nbsp; 6.Mental &nbsp; 7.Troubles &nbsp; 8.Ain't No Way &nbsp; <br><br> 9.X-Wing &nbsp; 10.Angelz &nbsp; 11.The Smell Of Death &nbsp; 12.Sanjuro &nbsp; 13.Zatoichi &nbsp; 14.The Ills"
        fav.innerHTML="X-Wing <br> Angelz <br> Sanjuro"
        side.style.backgroundColor='#4893CF'
        side.style.color='#ffffff'
        break;
    case 6: 
        imgizq.src="./Imagenes/5.jpg"
        imgcen.src="./Imagenes/6.jpg"
        imgder.src="./Imagenes/7.jpg"
        imgprin.src="./Imagenes/6.jpg"
        autor.innerHTML="Kendrick Lamar may 13, 2022"
        album.innerHTML="Mr. Morale & the Big Steppers"
        sinop.innerHTML="Mr. Morale & The Big Steppers es el quinto álbum de estudio de Kendrick Lamar, lanzado en mayo de 2022. Este trabajo es una profunda exploración de la salud mental, la identidad y la vulnerabilidad, donde Kendrick se sumerge en sus propias experiencias y luchas.<br><br> El álbum se caracteriza por su estructura de doble disco, que presenta una mezcla de géneros y estilos, desde hip-hop hasta soul y R&B. A través de canciones como N95 y Silent Hill, Kendrick aborda temas como la autoevaluación, la culpa y la redención, mientras confronta tanto sus éxitos como sus fracasos.<br><br>Kendrick utiliza su distintiva narrativa para ofrecer una visión sincera de su vida y de la realidad social que lo rodea, invitando a los oyentes a reflexionar sobre sus propias experiencias. Con una producción innovadora y letras conmovedoras, Mr. Morale & The Big Steppers reafirma a Kendrick Lamar como uno de los artistas más influyentes de su generación, consolidando su legado en el mundo de la música."
        track.innerHTML="1.United In Grief &nbsp; 2.N95 &nbsp; 3.Worldwide Steppers &nbsp; 4.Die Hard &nbsp; 5.Father Time &nbsp; 6.Rich-Interlude &nbsp; 7.Rich Spirit &nbsp;<br><br> 8.We Cry Together &nbsp; 9.Pruple Hearts &nbsp; 10.Count Me Our &nbsp; 11.Crown &nbsp; 12.Silent Hill &nbsp; 13.Savior-Interlude &nbsp; 14.Savior &nbsp; <br><br>15.Aunt Diaries &nbsp; 16.Mr.Morale &nbsp;  17.Mother I Sober &nbsp; 18.Mirror &nbsp; 19.The Heart Part 5"
        fav.innerHTML="Rich Spirit <br> Mirror <br> Count Me Out"
        side.style.backgroundColor='#683310'
        side.style.color='#ffffff'
        break;
    case 7: 
        imgizq.src="./Imagenes/6.jpg"
        imgcen.src="./Imagenes/7.jpg"
        imgder.src="./Imagenes/8.jpg"
        imgprin.src="./Imagenes/7.jpg"
        autor.innerHTML="Kenye West jun 1, 2018"
        album.innerHTML="Ye"
        sinop.innerHTML="Ye es el octavo álbum de estudio de Kanye West, lanzado en junio de 2018. Este trabajo se caracteriza por su enfoque introspectivo y personal, donde Kanye aborda temas como la salud mental, la identidad y las relaciones.<br><br> El álbum se presenta con una producción minimalista que combina elementos de hip-hop, electrónica y gospel, creando un sonido único y evocador. Canciones como Violent Crimes y Ghost Town destacan por su lirismo honesto y su capacidad para transmitir la lucha interna de Kanye, así como su búsqueda de redención y autocomprensión.<br><br>A lo largo de Ye, Kanye se muestra vulnerable, compartiendo sus pensamientos sobre la fama, la familia y su propia complejidad como individuo. Con una mezcla de reflexiones profundas y momentos de autenticidad cruda, el álbum solidifica su estatus como un innovador en la música y un artista que sigue desafiando las convenciones. Ye es tanto una declaración personal como un comentario social, que invita a los oyentes a reflexionar sobre sus propias experiencias y emociones."
        track.innerHTML="1.I Thought About Killing You &nbsp; 2.Yikes &nbsp; 3. All Mine &nbsp; 4.Wouldn't Leave &nbsp; 5.No Mistakes &nbsp; 6.Ghost Town &nbsp; 7.Violent Crimes"
        fav.innerHTML="Ghost Town <br> Violent Crimes <br> All Mine"
        side.style.backgroundColor='#132842'
        side.style.color='#ffffff'
        break;
    case 8: 
      imgizq.src="./Imagenes/7.jpg"
      imgcen.src="./Imagenes/8.jpg"
      imgder.src="./Imagenes/9.jpg"
      imgprin.src="./Imagenes/8.jpg"
      autor.innerHTML="Peso Pluma jun 20, 2024"
      album.innerHTML="Exodo"
      sinop.innerHTML="Éxodo es el cuarto álbum de estudio del cantante mexicano Peso Pluma. Fue lanzado el 20 de junio del 2024 a través de Double P Records. Éxodo es un álbum doble. Contiene un total de 24 temas, el primer disco conteniendo 16 temas de los géneros regional mexicano y corridos tumbados, y el segundo disco que contiene ocho temas de los géneros más urbanos como el trap o reguetón. <br><br>​El álbum cuenta con apariciones especiales de Junior H, Eslabón Armado, Jasiel Nuñez, Neton Vega, Tito Double P, Joel de la P, Luis R. Conriquez, Óscar Maydon, Chino Pacas, Estevan Plazola, Iván Cornejo, Natanael Cano, Gabito Ballesteros, y el disco 2 con apariciones de Rich the Kid, Cardi B, Quavo, Arcángel, Anitta, Ryan Castro, Kenia Os y DJ Snake."
      track.innerHTML="1.LA DURANGO &nbsp; 2.ME ACTIVO &nbsp; 3.LA PATRULLA &nbsp; 4.LA PEOPLE II &nbsp; 5.SR.SMITH &nbsp; 6.ROMPE LA DOMPE &nbsp; 7.MAMI &nbsp;<br><br> 8.BELANOVA &nbsp; 9.BRUCE WAYNE &nbsp; 10.HOLLYWOOD &nbsp; 11.HOLLYWOOD &nbsp; 12.RELOJ &nbsp; 13.RELOJ &nbsp; 14.ICE &nbsp; 15.SOLICITADO &nbsp;<br><br> 16.SANTAL 33 &nbsp; 17.VINO TINO &nbsp; 18.14-14 &nbsp; 19.GIMME A SECOND &nbsp; 20.PUT EM IN THE FRIDGE &nbsp; 21.PA NO PENSAR &nbsp;<br><br> 22.PESO COMPLETO &nbsp; 23.BELLAKEO &nbsp; 24.MALA &nbsp; 25.TOMMY & PAMELA &nbsp; 26.TEKA"
     fav.innerHTML="BRUCE WAYNE <br> 14-14 <br> SANTAL 33"
      side.style.backgroundColor='#394241'
        side.style.color='#ffffff'
      break;
      case 9: 
        imgizq.src="./Imagenes/8.jpg"
        imgcen.src="./Imagenes/9.jpg"
        imgder.src="./Imagenes/10.jpg"
        imgprin.src="./Imagenes/9.jpg"
        autor.innerHTML="Bad Bunny dic 24, 2018"
        album.innerHTML="X 100pre"
        sinop.innerHTML="X 100PRE es el álbum debut de Bad Bunny, lanzado en diciembre de 2018, y es un hito en la música urbana latina. Este trabajo destaca por su diversidad de géneros, combinando reguetón, trap, pop y baladas, lo que refleja la versatilidad del artista.<br><br> El álbum incluye una mezcla de temas que van desde el amor y la fiesta hasta la introspección y la crítica social. Canciones como 200mph y Estamos Bien han resonado profundamente con el público, gracias a sus ritmos pegajosos y letras memorables.<br><br> Bad Bunny utiliza su plataforma para explorar su identidad y experiencias, ofreciendo una visión sincera de su vida y de la cultura que lo rodea. X 100PRE no solo consolidó su estatus como un ícono de la música latina, sino que también rompió barreras, llevándolo a una audiencia global. Este álbum es una celebración de la autenticidad y la innovación, convirtiéndose en un referente en la música contemporánea."
        track.innerHTML="1.NI BIEN NI MAL &nbsp; 2.200Mph &nbsp; 3.¿Quien Tu Eres? &nbsp; 4.Caro &nbsp; 5.Tenemos Que Hablar &nbsp; 6.Otra Noche En Miami &nbsp;<br><br> 7.Ser Bichote &nbsp; 8.Si Estuviésemos Juntos &nbsp; 9.Solo de Mi &nbsp; 10.Cuanto Perriabas &nbsp; 11.La Romana &nbsp; 12.Como Antes &nbsp; 13.RLNDT &nbsp; <br><br> 14.Estamos Bien &nbsp; 15.MIA"
        fav.innerHTML="Otra Noche En Miami <br> Estamos Bien <br> 200Mph"
        side.style.backgroundColor='#090909'
        side.style.color='#ffffff'
        break;
            case 10: 
        imgizq.src="./Imagenes/9.jpg"
        imgcen.src="./Imagenes/10.jpg"
        imgder.src="./Imagenes/0.jpg"
        imgprin.src="./Imagenes/10.jpg"
        autor.innerHTML="Dominic Fike jul 7, 2023"
        album.innerHTML="Sunburn"
        sinop.innerHTML="Dominic Fike publica su segundo álbum, Sunburn, a través de Columbia Records. Este nuevo álbum nos conecta con su Florida natal, examinando la cultura y los ambientes en los que se crió el artista. Además incluye el tema más destacado, “Mona Lisa”, que Fike creó junto con Kenny Beats y que también apareció en la taquillera película Spider-Man: Across the Spider-Verse. <br><br>Se incluyen en Sunburn “Frisky” y “Think Fast”, dos temas que han sido anunciados en los últimos meses y que ya se han convertido en favoritos de los fans en Internet. Esta última canción cuenta con la colaboración de Rivers Cuomo, líder de Weezer, a la guitarra y a los coros. La próxima semana, Fike iniciará su gira norteamericana “Don’t Stare At The Sun”, que será su primera actuación en directo desde su actuación en Coachella, donde “su talento saltó a la vista cada vez que cogía el micrófono”, según Rolling Stone."
        track.innerHTML="1.How Much Is Weed &nbsp; 2.Ant Pile &nbsp; 3.Think Fast &nbsp; 4.Sick &nbsp; 5.7 Hours &nbsp; 6.Dancing In The Courthouse &nbsp; 7.Mona Lisa &nbsp;<br><br> 8.Bodies &nbsp; 9.Sunbunr &nbsp; 10.Pasture Child &nbsp; 11.4x4 &nbsp; 12.Frisky &nbsp; 13.Mama's Boy &nbsp; 14.Dark &nbsp; 15.What Kind Of Woman"    
        fav.innerHTML="What Kind Of Woman <br> How Much Is Weed <br> Ant Pile "
        side.style.backgroundColor='#530700'
        side.style.color='#ffffff'
        break;
    }
}