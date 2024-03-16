// Prévenir l'utilisateur de l'utilisation de JavaScript
document.write('<noscript>Veuillez activer JavaScript pour utiliser ce formulaire.</noscript>');


// Fonction pour vérifier si un champ est vide
function estVide(champ) {
  return champ.value.trim() === '';
}

// Fonction pour vérifier la validité de la date
function estDateValide(date) {
  return !isNaN(Date.parse(date.value));
}

// Fonction pour vérifier la validité du nom d'utilisateur
function estNomUtilisateurValide(username) {
  return username.value.trim().length >= 6;
}

// Fonction de validation de la date de naissance (si renseignée)
function validateBirthdate(field) {
  const field = document.getElementById(fieldId);

  if (field.value.trim() === '') {
    field.classList.remove('invalid');
    field.setCustomValidity('');
    return true;
  } else {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(field.value.trim())) {
      field.classList.add('invalid');
      field.setCustomValidity('La date de naissance doit être au format YYYY-MM-DD');
      return false;
    } else {
      field.classList.remove('invalid');
      field.setCustomValidity('');
      return true;
    }
  }
}

// Fonction pour vérifier la validité du mot de passe
function estMotDePasseValide(motDePasse) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(motDePasse.value);
}

// Fonction pour vérifier la validité de l'adresse email
function estEmailValide(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
}

// Récupération des éléments HTML
const lastnameInput = document.getElementById("lastname");
const firstnameInput = document.getElementById("firstname");
const birthdateInput = document.getElementById("birthdate");
const usernameInput = document.getElementById("username");
const userpwdInput = document.getElementById("userpwd");
const useremailInput = document.getElementById("useremail");
const submitButton = document.getElementById("submit-button");

// Désactivation du bouton d'envoi au chargement de la page
//submitButton.setAttribute("disabled", true);

// Fonction de validation
function validateForm() {
  // Récupération des valeurs saisies par l'utilisateur
  const lastnameValue = lastnameInput.value.trim();
  const firstnameValue = firstnameInput.value.trim();
  const birthdateValue = birthdateInput.value.trim();
  const usernameValue = usernameInput.value.trim();
  const userpwdValue = userpwdInput.value.trim();
  const useremailValue = useremailInput.value.trim();

  // Vérification de chaque champ
  const isLastnameValid = lastnameValue !== "";
  const isFirstnameValid = firstnameValue !== "";
  const isBirthdateValid = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(birthdateValue) ? new Date(birthdateValue) !== "Invalid Date" : true;
  const isUsernameValid = usernameValue.length >= 6;
  const isUserpwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(userpwdValue);
  const isUseremailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(useremailValue);

  // Activation ou désactivation du bouton d'envoi en fonction de la validité des champs
  if !(isLastnameValid && isFirstnameValid && isBirthdateValid && isUsernameValid && isUserpwdValid && isUseremailValid) {
    submitButton.setAttribute("disabled", true);
  }
}

// Ecoute de l'événement "input" sur chaque champ de saisie
lastnameInput.addEventListener("input", validateForm);
firstnameInput.addEventListener("input", validateForm);
birthdateInput.addEventListener("input", validateForm);
usernameInput.addEventListener("input", validateForm);
userpwdInput.addEventListener("input", validateForm);
useremailInput.addEventListener("input", validateForm);
