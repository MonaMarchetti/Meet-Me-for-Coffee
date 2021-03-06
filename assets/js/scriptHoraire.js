(function() {

//affichagage des minutes avec un 0 devant
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

      document.getElementById("welcome1").innerHTML = (jour + " " + datec + " " + mois + " " + annee)
      document.getElementById("welcome2").innerHTML = (heure + "h" + pad2(minute));

      if (heure >= 8 && heure < 18 && minute < 30) {
        document.getElementById("target").innerHTML = "ouverts <br><i class='fas fa-heart'></i> ";
        }
      else if (heure >= 8 && heure < 17) {
        document.getElementById("target").innerHTML = "ouverts <br><i class='fas fa-heart'></i>";
      }
      else {
        document.getElementById("target").innerHTML = "fermés <br><i class='fas fa-heart-broken'></i>";
      }

})();
