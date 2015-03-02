$(document).on("click", "#checkin", function(event) {
var Entreprise = [];
		Entreprise[0] = {Objet :GI,
						 nom : "Total Logistics",
						 Id=0,
						 };
		Entreprise[1] = {Objet :BMC,
						 nom : "Banque Mondiale du Commerce",
						 Id=1,
						 };
		Entreprise[2] = {Objet :GEN,
						 nom : "Green Energy & Co", 
						 Id=2,
						 };
		Entreprise[3] = {Objet :TC,
						 nom : "Blue Telecom",
						 Id=3,
						 };
		Entreprise[4] = {Objet :GE,
						 nom : "Genius Electrics",
						 Id=4,
						 };
		Entreprise[5] = {Objet :Rotonde,
						 nom : "Brodewei", 
						 Id=5,
						 };
		Entreprise[6] = {Objet :EFI,
						 nom : "Hill Tone",
						 Id=6,
						 };
						 
		Entreprise[7] = {Objet :CB,
						 nom : "Wilbedon & Co",
						 Id=7,
						 };
						 
		Entreprise[8] = {Objet :Humas,
						 nom : "Center Park",
						 Id=8,
						 };
						 
		Entreprise[9] = {Objet :Kfet,
						 nom : "Club Mad",
						 Id=9,
						 };
						 
		Entreprise[10] = {Objet :BS,
						 nom : "Biotech",
						 Id=10,
						 };
						 
		Entreprise[11] = {Objet :IF,
						 nom : "ITech",
						  Id=11,
						 };
						 
		Entreprise[12] = {Objet :Beurk,
						 nom : "Miam Inc.",
						 Id=12,
						 };
						 
		Entreprise[13] = {Objet :CD,
						 nom : "Campanule",
						 Id=13,
						 };
						 
		Entreprise[14] = {Objet :GCU,
						 nom : "Leonard Construction",
						 Id=14,
						 };
						 
		Entreprise[15] = {Objet :GMC,
						 nom : "Mech. Enterprise",
						 Id=15,
						 };
						 
		Entreprise[16] = {Objet :Dir,
						 nom : "Doua Postal",
						 Id=16,
						 };
						 
		Entreprise[17] = {Objet :Capelle,
						 nom : "Palais des Congrès",
						 Id=17,
						 };
						 
		Entreprise[18] = {Objet :CDS,
						 nom : "Sport Center",
						 Id=18,
						 };
						 
		Entreprise[19] = {Objet :GJ,
						 nom : "ORPIste",
						 Id=19,
						 };
						 
		Entreprise[20] = {Objet :GMD,
						 nom : "Airboost",
						 Id=20,
						 };
						 
		Entreprise[21] = {Objet :Trav,
						 nom : "Lion Formation",
						 Id=21,
						 }; 
						 
		Entreprise[22] = {Objet :Fermat,
						 nom : "Pedro de Fermat",
						 Id=22,
						 }; 
						 
		Entreprise[23] = {Objet :batAB,
						 nom : "Formula One",
						 Id=23,
						 };
						 					 
		Entreprise[24] = {Objet :gymB,
						 nom : "Badison Square Garden",
						 Id=24,
						 };
						 
		Entreprise[25] = {Objet :SGM,
						 nom : "SoTech Materials",
						 Id=25,
						 };
	var socket=io.connect(adresse_serveur);
		function checkin(Entreprise) {
		var teleportation = false;
			if($('#select-custom-100').val()== "Total Logistics") 
         		//On envoie les données du checkin
			socket.emit('setCheckin',{
			idEntreprise : 0, //si ca ne marche pas on met directement le chiffre de l'ID
			idJoueur : idJoueur,
			teleportation:teleportation
			});
			 else if($('#select-custom-100 option:selected').val()== "Banque Mondiale du Commerce") 
         		
					//On envoie les données du checkin
					socket.emit('setCheckin',{
					idEntreprise : 1,
					idJoueur : idJoueur,
					teleportation:teleportation
					});
				else if('#select-custom-100 option:selected').val()== "Green Energy & Co")
						
					//On envoie les données du checkin
					socket.emit('setCheckin',{
					idEntreprise : 2,
					idJoueur : idJoueur,
					teleportation:teleportation
					});
					else if('#select-custom-100 option:selected').val()== "Brodewei")
						
					//On envoie les données du checkin
					socket.emit('setCheckin',{
					idEntreprise : 5,
					idJoueur : idJoueur,
					teleportation:teleportation
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
			
		

	
//fin initialize
}
});



// il faut lier le code au dessus à un bouton grâce à la fonction suivante:
/*$(document).on("click","#btn_checkin", function(event) {
	var socket=io.connect(adresse_serveur);
		event.preventDefault();
		event.stopImmediatePropagation();
		$.mobile.changePage("#missionCheckin");
		return false;
	});*/
	
});
 
