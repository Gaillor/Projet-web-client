const blocs = document.querySelectorAll('.bloc');
const blocAccueil = document.querySelector('.bloc_accueil');
const imageFondInitial = blocAccueil.style.backgroundImage;

blocs.forEach(bloc => {
  bloc.addEventListener('mouseover', () => {
    const imageFond = bloc.dataset.imageFond;
    blocAccueil.style.backgroundImage = `url(${imageFond})`;
  });

  bloc.addEventListener('mouseout', () => {
    blocAccueil.style.backgroundImage = imageFondInitial;
  });
});
