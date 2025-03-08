document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    const lienpage = document.getElementById('lienpage');
    const navbar = document.querySelector('.navbar');
    const navigation = document.querySelector('.navbar nav');
    
    // Position initiale (position de départ pour le défilement)
    const scrollThreshold = 550; // Nombre de pixels de défilement avant le changement
    
    // Fonction pour vérifier la position de défilement et ajuster les éléments
    function checkScrollPosition() {
      if (window.scrollY > scrollThreshold) {
        // Cacher d'abord la navigation
        navigation.style.opacity = '0';
        navigation.style.visibility = 'hidden';
        navigation.style.display = 'none'; // Assure que l'élément n'occupe pas d'espace
        
        // Ensuite centrer le lienpage
        lienpage.style.position = 'absolute';
        lienpage.style.left = '50%';
        lienpage.style.transform = 'translateX(-50%)';
        navbar.style.justifyContent = 'center';
      } else {
        // Remettre à l'état initial quand on est en haut de la page
        navigation.style.display = 'block'; // Rétablir l'affichage
        navigation.style.opacity = '1';
        navigation.style.visibility = 'visible';
        
        lienpage.style.position = 'relative';
        lienpage.style.left = '0';
        lienpage.style.transform = 'none';
        navbar.style.justifyContent = 'space-between';
      }
    }
    
    // Écouter l'événement de défilement avec une détection immédiate
    window.addEventListener('scroll', function() {
      // Masquer immédiatement la navigation dès qu'on détecte un défilement
      if (window.scrollY > 0 && window.scrollY <= scrollThreshold) {
        navigation.style.opacity = '0';
        navigation.style.visibility = 'hidden';
        navigation.style.display = 'none';
      }
      
      // Puis appliquer les autres changements selon le seuil
      checkScrollPosition();
    });
    
    // Vérifier la position au chargement initial
    checkScrollPosition();
  });