
// $('#mon_dropdown').on('shown.bs.dropdown', function () {
    // Je fais un truc quand le menu est devenu visible
  })

  var interval = setInterval(myFunction, 1000); // Lance l'exécution de la fonction myfunction
// toutes les secondes
clearInterval(interval); // Stoppe l'exécution de la fonction myFunction.Une callback est une fonction qui sera exécutée par une autre fonction.une fonction passée en paramètre d'un autre fonction. 
var request = new XMLHttpRequest(); //création de la requête
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
    // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
    // readyState : 4 signifie que la requête est finie et que la réponse est prête
        ...
    }
};
request.open("GET", "http://www.w3schools.com/xml/ajax_info.txt", true); //spécification de la
// requête, l'adresse et si la requête est asynchrone (non bloquante)
request.send(); //envoie de la requête
request.responseText 