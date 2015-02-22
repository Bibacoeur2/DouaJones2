$(document).on("pageinit", "#missionCheckin", function() {
	$(document).on("pageshow", "#Entreprise", function() {
	var socket = io.connect(adresse_serveur);			
	
	socket.emit("getArgentDisponibleJoueur",idJoueur);
	socket.emit("getCoursEntreprise", $('#entreprise_active').data('id_entreprise'));

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
			idEntreprise:$('#entreprise_active').data('id_entreprise'),
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
