$(document).on("pageinit", "#missionCheckin", function() {
	//On stocke toutes les entreprises dans un tableau d'objets possédant des informations propres aux zones
		var Entreprise = [];
		Entreprise[0] = {Objet :GI,
						 nom : "Total Logistics",
						 };
		Entreprise[1] = {Objet :BMC,
						 nom : "Banque Mondiale du Commerce",
			
						 };
		Entreprise[2] = {Objet :GEN,
						 nom : "Green Energy & Co",
		
						 };
		Entreprise[3] = {Objet :TC,
						 nom : "Blue Telecom",
						 };
	/*	Entreprise[4] = {Objet :GE,
						 nom : "Genius Electrics",
						 srcImagecarte : 'img/logo_carte_entreprise/GE.png',
						 srcImageentreprise :'img/logo_entreprise/GE.png',
						 swBound : new google.maps.LatLng(45.78299057441293,4.8712720734024515),
						 neBound : new google.maps.LatLng(45.78348445283917,4.872044612025434),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Genius Electrics sert actuellement un quart du marché de l’installation électrique. Ses systèmes électroniques intégrés sont très prisés et les nouveautés du secteur télécommunications viennent d’être lancées. L’augmentation visée de leur part de marché semble tout à fait réaliste dans les prochaines années."
						 };
		Entreprise[5] = {Objet :Rotonde,
						 nom : "Brodewei",
						 srcImagecarte : 'img/logo_carte_entreprise/Rotonde.png',
						 srcImageentreprise : 'img/logo_entreprise/Rotonde.png',
						 swBound : new google.maps.LatLng(45.78386970872993,4.873761163368272),
						 neBound : new google.maps.LatLng(45.78416156854144,4.874286938761884),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Depuis la rénovation du bâtiment, le Broodewei illustre parfaitement par son apparence la magnificence qu’on pouvait admirer depuis plusieurs années déjà. Tous les spectacles, que ce soir du théâtre, une bonne comédie musicale ou bien même un fameux opéra, ont toujours été recommandés par des critiques les plus durs. Les billets se font rares ! Mais les soirées passées au Broodewei sont inoubliables..."
						 };
		Entreprise[6] = {Objet :EFI,
						 nom : "Hill Tone",
						 srcImagecarte : 'img/logo_carte_entreprise/EFI.png',
						 srcImageentreprise : 'img/logo_entreprise/EFI.png',
						 swBound : new google.maps.LatLng(45.784243804234606,4.870687351837205),
						 neBound : new google.maps.LatLng(45.784816230599766,4.871615458583051),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Vous avez toujours voulu vivre comme Louis XIV? Un séjour au Hill Tone est le luxe à l’état pur. Dans les chambres on trouve un équipement moderne et agréable. Chaque hôtel de la chaîne possède un restaurant gastronomique et un spa. Présente partout dans le monde et adaptée aux différentes cultures, la chaîne d’hôtels Hill Tone offre tout le luxe possible pour faire de votre séjour un moment inoubliable."
						 };
						 
		Entreprise[7] = {Objet :CB,
						 srcImagecarte : 'img/logo_carte_entreprise/colette.png',
						 srcImageentreprise : 'img/logo_entreprise/colette.png',
						 nom : "Wilbedon & Co",
						 swBound : new google.maps.LatLng(45.784909688021635,4.873836265220689),
						 neBound : new google.maps.LatLng(45.78548210754941,4.874764371966535),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "L’association nationale du tennis a depuis peu décidé de s’établir au Wilbedon & Co. Cette entreprise a mis en lumière la plupart des plus grands athlètes célèbres du monde du tennis. Grâce aux nombreux investisseurs, le Wilbedon & Co est une entreprise avec beaucoup de succès."
						 };
						 
		Entreprise[8] = {Objet :Humas,
						 srcImagecarte : 'img/logo_carte_entreprise/Humas.png',
						 srcImageentreprise : 'img/logo_entreprise/Humas.png',
						 nom : "Center Park",
						 swBound : new google.maps.LatLng(45.783312301771254,4.874753580703782),
						 neBound : new google.maps.LatLng(45.78377250859037,4.875472475146466),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le Center Park est le plus grand fournisseur de services de ressources humaines du pays. Caractérisé par une grande connaissance des entreprises et des hommes, les agents du Center Park ne cherchent jamais longtemps une solution pour un problème de management. Leurs services sont fortement demandés, mais il ne faut pas être trop pressés…"
						 };
						 
		Entreprise[9] = {Objet :Kfet,
						 srcImagecarte : 'img/logo_carte_entreprise/MDE.png',
						 srcImageentreprise : 'img/logo_entreprise/MDE.png',
						 nom : "Club Mad",
						 swBound : new google.maps.LatLng(45.78404553392958,4.875150547637986),
						 neBound : new google.maps.LatLng(45.78450573469595,4.8758694420806705),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le centre de loisirs est un lieu de rencontre pour les jeunes et les seniors. En plus du cinéma, le bowling, les caféterias, les restaurants et autre convivialité, il y a toujours des animations ou des expositions organisées par les associations étudiantes."
						 };
						 
		Entreprise[10] = {Objet :BS,
						 srcImagecarte : 'img/logo_carte_entreprise/BS.png',
						 srcImageentreprise : 'img/logo_entreprise/BS.png',
						 nom : "Biotech",
						 swBound : new google.maps.LatLng(45.782167542488075,4.873004780426072),
						 neBound : new google.maps.LatLng(45.78244444695973,4.8735466490737736),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Biotech est le plus grand centre de recherche de biochimie et phamarcologie de France. Les dernières recherches en matière de biologie moléculaire ont déjà suscité beaucoup d’intérêt à l’international. C’est pour cette raison que Biotech est devenu un nom très réputé. Leur crédo “la nature comme modèle” plaît aux investisseurs et Biotech vise une augmentation du capital dans les prochains mois, grâce à son ingénierie des systèmes naturels."
						 };
						 
		Entreprise[11] = {Objet :IF,
						 srcImagecarte : 'img/logo_carte_entreprise/IF.png',
						 srcImageentreprise : 'img/logo_entreprise/IF.png',
						 nom : "ITech",
						 swBound : new google.maps.LatLng(45.78148292031208,4.872299359455155),
						 neBound : new google.maps.LatLng(45.78188889630108,4.872978020762616),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Lorsque un investisseur cherche une entreprise en pleine expansion sans aucun risque, I-Tech est une parfaite alternative. Cela fait à peine 10 ans que ses créateurs ont commencé à développer des logiciels systèmes et réseaux dans un garage. Aujourd’hui, l’entreprise est cotée en bourse et elle fournit des produits d’informatique décisionnelle et des systèmes d’information pour des projets industriels."
						 };
						 
		Entreprise[12] = {Objet :Beurk,
						 srcImagecarte : 'img/logo_carte_entreprise/Miam.png',
						 srcImageentreprise : 'img/logo_entreprise/Miam.png',
						 nom : "Miam Inc.",
						 swBound : new google.maps.LatLng(45.78079641914237,4.8731201154137125),
						 neBound : new google.maps.LatLng(45.78132585783069,4.873951662635022),
						 bounds : null,
						 Overlay : null,
						 texteProfil: "Même si Miam Inc. est la plus grande chaîne de pizzeria du pays, son cadre authentique rappelle toujours la convivialité que l’on retrouve dans les ruelles de Naples. Les responsables sont contents que leur expansion au sein du marché européen se soit conclue avec succès. Même en Italie, on peut désormais trouver des restaurants de Miam Inc !"
						 };
						 
		Entreprise[13] = {Objet :CD,
						 nom : "Campanule",
						 srcImagecarte : 'img/logo_carte_entreprise/CD.png',
						 srcImageentreprise : 'img/logo_entreprise/CD.png',
						 swBound : new google.maps.LatLng(45.779862988460735,4.873130844249772),
						 neBound : new google.maps.LatLng(45.780392436012725,4.873962391471082),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "La société officielle du logement offre un espace de vie à de nombreuses citoyens. Grâce à un loyer bas et un bon entretien, Companule est très populaire pour ses locataires. Des nouveaux projets de construction ont même suscité beaucoup d’intérêt pour les investisseurs."
						 };
						 
		Entreprise[14] = {Objet :GCU,
						 nom : "Leonard Construction",
						 srcImagecarte : 'img/logo_carte_entreprise/GCU.png',
						 srcImageentreprise : 'img/logo_entreprise/GCU.png',
						 swBound : new google.maps.LatLng(45.78369762395447,4.876397774829911),
						 neBound : new google.maps.LatLng(45.78422703509279,4.877229322051221),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Même si la plupart des gens ne connaissent pas Leonard Construction, ils contemplent tous les jours leur infrastructures et ouvrages d’art - tout à fait inconsciemment. Leonard Construction apporte une contribution essentielle à l'embellissement de la région année après année. Tous les projets entamés par l’entreprise transforment le quotidien en or, pierre ou matériaux modernes."
						 };
						 
		Entreprise[15] = {Objet :GMC,
						 nom : "Mech. Enterprise",
						 srcImagecarte : 'img/logo_carte_entreprise/GMC.png',
						 srcImageentreprise : 'img/logo_entreprise/GMC.png',
						 swBound : new google.maps.LatLng(45.78258654207694,4.874868915691422),
						 neBound : new google.maps.LatLng(45.78311596376634,4.875700462912732),
						 bounds : null,
						 Overlay : null,
						 texteProfil: "Depuis plus de 50 ans, Mech. Entreprise produit des pièces d’exception en acier. C’est une PME familiale reconnue pour ses valeurs et ses traditions. L’entreprise évolue avec le temps, en utilisant des simulations numériques modernes et une automatique industrielle.  Ses clients la récompensent par une fidélité durable."
						 };
						 
		Entreprise[16] = {Objet :Dir,
						 Chemin : "Dir.html",
						 nom : "Doua Postal",
						 srcImagecarte : 'img/logo_carte_entreprise/direction.png',
						 srcImageentreprise : 'img/logo_entreprise/direction.png',
						 swBound : new google.maps.LatLng(45.782938200015685,4.877556489124345),
						 neBound : new google.maps.LatLng(45.783606034993184,4.878709901427442),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "La Doua Postal est une nouvel alternative au service de livraison national. Grâce à un réseau étroit et une bonne administration, les retards n’existent plus ! Qui l’aurait cru? Leurs service sont rendus à des prix abordables, car la direction financière de cette société a inventé un système révolutionnaire de comptabilité dans lequel tous les acteurs profitent d’une répartition des coûts plus juste. Enfin une vraie révolution dans le service postal !"
						 };
						 
		Entreprise[17] = {Objet :Capelle,
						 nom : "Palais des Congrès",
						 srcImagecarte : 'img/logo_carte_entreprise/Capelle.png',
						 srcImageentreprise : 'img/logo_entreprise/Capelle.png',
						 swBound : new google.maps.LatLng(45.78316266137002,4.87942867101674),
						 neBound : new google.maps.LatLng(45.78373322834793,4.8803138624183475),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Au début du projet du Palais des Congrès, la plupart des gens étaient mitigés quant à l’utilité de ce lieu. Tous les doutes se sont finalement relevé infondés. C’est l’endroit où se tiennent les évènements phare de l’année, grâce à quoi le Palais fait  beaucoup de bénéfices. Ce concept serait même bientôt repris dans d’autres villes du monde..."
						 };
						 
		Entreprise[18] = {Objet :CDS,
						 nom : "Sport Center",
						 srcImagecarte : 'img/logo_carte_entreprise/CDS.png',
						 srcImageentreprise : 'img/logo_entreprise/CDS.png',
						 swBound : new google.maps.LatLng(45.78484235181969,4.877073691501664),
						 neBound : new google.maps.LatLng(45.785532609127586,4.878135908698255),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Cette chaîne de fitness est tellement plébiscitée que les files d’attente devant les salles de sport deviennent indécentes. Son programme offre un choix tellement large d’activités sportives qu’à première vue, on ne sait plus où donner de la tête. De plus, ses transmissions des plus grands matchs en direct sont suivies par un grand nombre de fans."
						 };
						 
		Entreprise[19] = {Objet :GJ,
						 nom : "ORPIste",
						 srcImagecarte : 'img/logo_carte_entreprise/GJ.png',
						 srcImageentreprise : 'img/logo_entreprise/GJ.png',
						 swBound : new google.maps.LatLng(45.785616713223426,4.878210948123979),
						 neBound : new google.maps.LatLng(45.78630696094315,4.879273165320569),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Orpiste est l’exemple parfait d’une entreprise qui a bien profité du boom immobilier. La société immobilière fait le commerce des bâtiments de plusieurs millions d’euros ! Leur slogan initial “un toit sur votre tête” n’est plus pertinent, car Orpiste ne fournis plus à l’heure actuelle de logements pour les particuliers. Ses toits couvrent désormais des gratte-ciels, des stades ou des centres commerciaux."
						 };
						 
		Entreprise[20] = {Objet :GMD,
						 nom : "Airboost",
						 srcImagecarte : 'img/logo_carte_entreprise/GMD.png',
						 srcImageentreprise : 'img/logo_entreprise/GMD.png',
						 swBound : new google.maps.LatLng(45.78473386554657,4.880571292057084),
						 neBound : new google.maps.LatLng(45.78542412419778,4.881633509253675),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le fabricant de turbines s’est fermement établi comme l’un des leaders mondiaux du marché. Ses compétences en matière de résistance des matériaux et de mécanique des fluides sont très fortement demandée dans la construction de centrales électriques. Une nouvelle génération de turbines anti-vibrations va bientôt lui donner l’accès au marché de l’aéronautique."
						 };
						 
		Entreprise[21] = {Objet :Trav,
						 nom : "Lion Formation",
						 srcImagecarte : 'img/logo_carte_entreprise/LN.png',
						 srcImageentreprise : 'img/logo_entreprise/LN.png',
						 swBound : new google.maps.LatLng(45.783677048565046,4.882067964687394),
						 neBound : new google.maps.LatLng(45.78408487905373,4.882805634593183),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Dans les bâtiments du Lion Formation on acquiert toute sorte de compétences. L’établissement le plus prestigieux de la région offre le choix entre plusieurs filières différentes. Si vous vous intéressez à la physique, aux langues ou aux cultures étrangères, vous trouverez le cursus qu’il vous faut au Lion Formation."
						 }; 
						 
		Entreprise[22] = {Objet :Fermat,
						 Chemin : "Fermat.html",
						 nom : "Pedro de Fermat",
						 srcImagecarte : 'img/logo_carte_entreprise/Fermat.png',
						 srcImageentreprise : 'img/logo_entreprise/Fermat.png',
						 swBound : new google.maps.LatLng(45.78484235182056,4.881995545043992),
						 neBound : new google.maps.LatLng(45.78535491818525,4.882714439486676),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Pedro de Fermat, ou l’entreprise qui aide tout élève à réussir son apprentissage. Grâce à son soutien scolaire et ses professeurs d’une qualité rare, l’entreprise connait énormément de succès auprès des étudiants en classe préparatoire. Tous sont habitués à arpenter ses salles de travail. Sans cette entreprise, le métier d’ingénieur se perd…"
						 }; 
						 
		Entreprise[23] = {Objet :batAB,
						 nom : "Formula One",
						 srcImagecarte : 'img/logo_carte_entreprise/AB.png',
						 srcImageentreprise : 'img/logo_entreprise/AB.png',
						 swBound : new google.maps.LatLng(45.783970714764045,4.883486853256272),
						 neBound : new google.maps.LatLng(45.78436732030299,4.88411455259245),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Formula One. Ce nom doux qui nous rappelle les circuits automobiles n’est que trop modeste pour désigner ces hotels qui fleurissent aux abords du campus. Dignes des plus grands, c’est avec une simplicité et une convivialité débordante qu’ils accueillent leurs hôtes, en toute intimité."
						 };
						 
						 
		Entreprise[24] = {Objet :gymB,
						 nom : "Badison Square Garden",
						 srcImagecarte : 'img/logo_carte_entreprise/GymB.png',
						 srcImageentreprise : 'img/logo_entreprise/GymB.png',
						 swBound : new google.maps.LatLng(45.78530996265055,4.882859216346787),
						 neBound : new google.maps.LatLng(45.78557188810294,4.883288432215863),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Dans l’opinion commune, le Badison Square Garden est uniquement populaire pour ses évènements sportifs. Mais le BSG a bien plus à offrir que le sport. Des concerts des plus grands groupes de rock ont y lieu, ainsi que de grands spectacles ou des galas. Il n’y a plus un soir durant lesquelles les lumières restent éteintes !"
						 };
						 
		Entreprise[25] = {Objet :SGM,
						 nom : "SoTech Materials",
						 srcImagecarte : 'img/logo_carte_entreprise/SGM.png',
						 srcImageentreprise : 'img/logo_entreprise/SGM.png',
						 swBound : new google.maps.LatLng(45.78220495329441,4.871588574066209),
						 neBound : new google.maps.LatLng(45.78269509763412,4.87238793477934),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "D’un petit bureau d’études, SO Tech Materials s’est métamorphosée en compagnie internationale et les commandes arrivent par milliers. SO Tech Materials résoud à la fois des problèmes mathématiques et statistiques mais aussi des questions d'ingénierie des matériaux. L’entreprise fournit des expertises excellentes en matière d’analyse des matériaux. Leurs laboratoires de recherche structurale et micro-structurale sont les plus modernes et avancés au monde."
						 };
*/
	 
	
var socket=io.connect(adresse_serveur);
		function checkin(entreprise) {
			var teleportation = false;
			//Si le joueur se trouve à la BMC et qu'il fait un checkin dans une société à laquelle il n'a pas accès, on met le booléen "teleportation" à vrai
			if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				if (!(location_contained_or_edge (entreprise.Objet))) {
					teleportation = true;
				}
			}
			//On envoie les données du checkin
			socket.emit('setCheckin',{
			idEntreprise:entreprise.index,
			idJoueur : idJoueur,
			teleportation : teleportation
			});
			
		}
		socket.on('resultSetCheckin', function (result) {
			alert(result);
			socket.emit('getArgentDisponibleJoueur',idJoueur);
			});
			
		var ok_ordre = false
		function openinfo(entreprise) {
			//On charge l'image de l'entreprise sur la page de l'entreprise
			document.getElementById('image_entreprise').setAttribute('src',entreprise.srcImageentreprise);
			if (entreprise.index == 1) {
				document.getElementById('image_bmc').setAttribute('src',entreprise.srcImageentreprise);
			}
			//On écrit le nom de l'entreprise dans le header
			$('#nom_entreprise').html(entreprise.nom);
			//On écrit le nom de l'entreprise dans le champ nom où il faut passer l'ordre
			$('#entreprise_active').html(entreprise.nom);
			//On stocke l'id de l'entreprise sélectionnée
			$('#entreprise_active').data("id_entreprise", entreprise.index);
			//On modifie le texte du profil de l'entreprise
			$('#texte_fiche_entreprise').text(entreprise.texteProfil);
			
			
			//On regarde si le joueur se trouve à la BMC
			var isAtBMC = false;
			if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				isAtBMC = true;
			}
			
			
			//On affecte la variable isAtBMC à la page BMC profil pour savoir si on peut intéragir avec la boutique
			
			$('#bmcprofil').data("isAtBMC", isAtBMC);
			
			//On vérifie que l'on puisse bien passer un ordre
				ok_ordre = true;		
			if (document.getElementById('checkin').disabled == true) {				
				ok_ordre = false;
			}
			
			//On ferme l'infowindow	
			infowindow.close(map);
			//On affiche la page entreprise ou la page BMC
			if (entreprise.index != 1 && isAtBMC && !(location_contained_or_edge (entreprise.Objet)) ) {
				//si le joueur se trouve à la bmc et qu'il sélectionne une autre entreprise, il ne peut pas passer d'ordre
				ok_ordre = false;
			}
			if (entreprise.index != 1) {
				$.mobile.changePage("#Entreprise");
			}
			else {
				$.mobile.changePage("#bmcprofil");
			}
		}
		 	
			//On grise(respectivement dégrise) l'onglet passer un ordre si on est pas sur la zone
			$(document).on("pagebeforeshow", "#Entreprise", function() {
				$( "#tabs_entreprise" ).tabs({ active: 1 });
				
				if (ok_ordre==false) {	
					$("#tabs_entreprise").tabs("option", "disabled", [2]);
				}
				else {
					$( "#tabs_entreprise" ).tabs( "enable", 2 );
				}
				
				//On affiche l'onglet profil par défaut
				
				
				$("#tabs_entreprise").tabs( "option", "active", 1 );
				
			});
			
			$('#geolocation_icon').click(function (e) {
				e.stopImmediatePropagation();
				e.preventDefault();
				if ((coordonnees_joueur.latitude !=0 ) && (coordonnees_joueur.longitude !=0) ) {
					map.panTo(position_joueur);
					map.setZoom(17);
				}
				return false;
			});

	
//fin initialize
}
});
