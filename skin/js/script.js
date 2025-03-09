document.addEventListener('DOMContentLoaded', function() {
  // Récupération des éléments
  const lienpage = document.getElementById('lienpage');
  const navbar = document.querySelector('.navbar');
  const navigation = document.querySelector('.navbar nav');
    
  // Position initiale (position de départ pour le défilement)
  const scrollThreshold = 550; // Nombre de pixels de défilement avant le changement
  
  // Fonction pour vérifier la position de défilement et ajuster les éléments
  function checkScrollPosition() {
    // Vérifier d'abord si l'écran est en mode mobile (max 720px)
    if (window.innerWidth <= 720) {
      // En mode mobile, toujours cacher la navigation et centrer le lien
      navigation.style.opacity = '0';
      navigation.style.visibility = 'hidden';
      navigation.style.display = 'none';
      
      lienpage.style.position = 'absolute';
      lienpage.style.left = '50%';
      lienpage.style.transform = 'translateX(-50%)';
      navbar.style.justifyContent = 'center';
    } else {
      // En mode desktop, comportement normal basé sur le défilement
      if (window.scrollY > scrollThreshold) {
        // Cacher d'abord la navigation
        navigation.style.opacity = '0';
        navigation.style.visibility = 'hidden';
        navigation.style.display = 'none';
        
        // Ensuite centrer le lienpage
        lienpage.style.position = 'absolute';
        lienpage.style.left = '50%';
        lienpage.style.transform = 'translateX(-50%)';
        navbar.style.justifyContent = 'center';
      } else {
        // Remettre à l'état initial quand on est en haut de la page
        navigation.style.display = 'block';
        navigation.style.opacity = '1';
        navigation.style.visibility = 'visible';
        
        lienpage.style.position = 'relative';
        lienpage.style.left = '0';
        lienpage.style.transform = 'none';
        navbar.style.justifyContent = 'space-between';
      }
    }
  }
    
  // Écouter l'événement de défilement
  window.addEventListener('scroll', function() {
    // Masquer immédiatement la navigation dès qu'on détecte un défilement (en mode desktop)
    if (window.innerWidth > 720 && window.scrollY > 0 && window.scrollY <= scrollThreshold) {
      navigation.style.opacity = '0';
      navigation.style.visibility = 'hidden';
      navigation.style.display = 'none';
    }
    
    // Puis appliquer les autres changements selon le seuil
    checkScrollPosition();
  });
  
  // Écouter les changements de taille d'écran
  window.addEventListener('resize', checkScrollPosition);
  
  // Vérifier la position au chargement initial
  checkScrollPosition();
});