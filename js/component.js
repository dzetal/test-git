export const addToFavorites = () => {
  if (window.sidebar && window.sidebar.addPanel) {
    // For Firefox
    window.sidebar.addPanel(document.title, window.location.href, '');
  } else if (window.external && 'AddFavorite' in window.external) {
    // For Internet Explorer
    window.external.AddFavorite(window.location.href, document.title);
  } else if (window.opera && window.print) {
    // For Opera
    const bookmark = document.createElement('a');
    bookmark.setAttribute('href', window.location.href);
    bookmark.setAttribute('title', document.title);
    bookmark.setAttribute('rel', 'sidebar');
    bookmark.click();
  } else {
    // For other browsers
    Swal.fire({
      icon: 'error',
      title: 'Erreur de compatibilité',
      text: 'La fonction pour ajouter aux favoris est obsolète',
      footer: '<a href="">Vérifier sur le web</a>'
    });
  }
};