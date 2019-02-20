(function() {

// récupération du prénom du visiteur pour un accueil interractif

  //userName = prompt("What's your name ?");

  //alert("Hello " + userName + " !");

//affichage avec un 0 devant
      function pad2(number) {
      return (number < 10 ? '0' : '') + number;
      }
// ouverture/fermeture en fonction de l'heure

      var d = new Date();

      var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

      var jour = semaine[d.getDay()-1];

      var datec = d.getDate();

      var an = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

      var mois = an[d.getMonth()];

      var annee = d.getFullYear();

      var heure = d.getHours();

      var minute = d.getMinutes();

      document.getElementById("welcome").innerHTML = (jour + " " + datec + " " + mois + " " + annee + ", " + heure + "h" + pad2(minute));

      if (heure < 18 && minute < 30) {
        document.getElementById("target").innerHTML = "ouvert <i class='fas fa-heart'></i> ";
        }
      else if (heure < 17) {
        document.getElementById("target").innerHTML = "ouvert <i class='fas fa-heart'></i>";
      }
      else {
        document.getElementById("target").innerHTML = "fermé <i class='fas fa-heart-broken'></i>";
      }

})();
