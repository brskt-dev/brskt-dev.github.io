

/* Init form Configuration */

(() => {
  'use strict'

  const phone = document.getElementById("phone-input");
  const forms = document.querySelectorAll('.needs-validation')
  var inputGroups = document.querySelectorAll('.row.g-3.needs-validation .input-group');

  emailjs.init({
    publicKey: "a8BbgrBHBMYVPFBLA",
  });

  Array.from(forms).forEach(form => {

    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {

        event.preventDefault()
        event.stopPropagation()
        alertOnError()

        document.querySelectorAll('.form-control').forEach(function (input) {

          if (input.checkValidity())
          {
            console.log('valido tel');
            input.parentNode.querySelector('.input-group-text').classList.add('valid');
            input.parentNode.querySelector('.input-group-text').classList.remove('invalid');     

            input.addEventListener("input", function () {
              if (input.checkValidity()) {
                console.log(input.checkValidity());
                input.parentNode.querySelector('.input-group-text').classList.add('valid');
                input.parentNode.querySelector('.input-group-text').classList.remove('invalid');
              }
              else {
                console.log(input.checkValidity());
                input.parentNode.querySelector('.input-group-text').classList.add('invalid');
                input.parentNode.querySelector('.input-group-text').classList.remove('valid');
              }
            });
          }
          else
          {
            console.log('invalido tel');
            input.parentNode.querySelector('.input-group-text').classList.add('invalid');
            input.parentNode.querySelector('.input-group-text').classList.remove('valid');

            input.addEventListener("input", function () {
              if (input.checkValidity()) {
                console.log('valido event tel');
                input.parentNode.querySelector('.input-group-text').classList.add('valid');
                input.parentNode.querySelector('.input-group-text').classList.remove('invalid');
              }
              else {
                console.log('invalido event tel');
                input.parentNode.querySelector('.input-group-text').classList.add('invalid');
                input.parentNode.querySelector('.input-group-text').classList.remove('valid');
              }
            });

            if (input.id === 'phone-input')
            {
              input.addEventListener("change", function () {
                if (input.checkValidity()) {
                  console.log('valido event tel');
                  input.parentNode.querySelector('.input-group-text').classList.add('valid');
                  input.parentNode.querySelector('.input-group-text').classList.remove('invalid');
                }
                else {
                  console.log('invalido event tel');
                  input.parentNode.querySelector('.input-group-text').classList.add('invalid');
                  input.parentNode.querySelector('.input-group-text').classList.remove('valid');
                }
              });

            }
          }
          
        });
      } else {

        event.preventDefault();

        emailjs.sendForm('service_rrxx5nb', 'contact_form', form)
          .then(() => {
            console.log('SUCCESS!');
          }, (error) => {
            console.log('FAILED...', error);
          });

        alertOnSucess()

        document.querySelectorAll('.form-control').forEach(function (input) {

          if (input.checkValidity())
          {
            input.parentNode.querySelector('.input-group-text').classList.add('valid');
            input.parentNode.querySelector('.input-group-text').classList.remove('invalid');     

            input.addEventListener("input", function () {
              if (input.checkValidity()) {
                console.log(input.checkValidity());
                input.parentNode.querySelector('.input-group-text').classList.add('valid');
                input.parentNode.querySelector('.input-group-text').classList.remove('invalid');
              }
              else {
                console.log(input.checkValidity());
                input.parentNode.querySelector('.input-group-text').classList.add('invalid');
                input.parentNode.querySelector('.input-group-text').classList.remove('valid');
              }
            });
          }
          else
          {
            input.parentNode.querySelector('.input-group-text').classList.add('invalid');
            input.parentNode.querySelector('.input-group-text').classList.remove('valid');

            input.addEventListener("input", function () {
              if (input.checkValidity()) {
                console.log(input.checkValidity());
                input.parentNode.querySelector('.input-group-text').classList.add('valid');
                input.parentNode.querySelector('.input-group-text').classList.remove('invalid');
              }
              else {
                input.parentNode.querySelector('.input-group-text').classList.add('invalid');
                input.parentNode.querySelector('.input-group-text').classList.remove('valid');
              }
            });
          }
          
        });
      }

      form.classList.add('was-validated')
    }, false)
  })

  inputGroups.forEach(function (inputGroup) {
    inputGroup.addEventListener("input", function () {
        checkValidFields(forms);
    });
  });

  phone.addEventListener("change", function () {
    formatPhone(phone);
  });

  phone.addEventListener("input", function (event) {
    var cleanedInput = phone.value.replace(/[^\d]/g, '');
    
    phone.value = cleanedInput;

    if (event.data && isNaN(parseInt(event.data))) {
      event.preventDefault();
    }

    if (event.inputType === 'delete' && cleanedInput.length === 0) {
      event.preventDefault();
    }
  });


})()

/* Form Functions */

function formatPhone(element) {
  // Obtém o valor do input
  let telefone = element.value.replace(/\D/g, '');

  // Verifica o tamanho do telefone e aplica a formatação correspondente
  if (telefone.length === 10) {
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length === 11) {
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length > 15 || telefone.length < 10) {
    // Não formata se o número de dígitos for maior que 15 ou menor que 10
    return;
  }

  // Atualiza o valor do input com a formatação
  document.getElementById('phone-input').value = telefone;
}

function checkValidFields(formulary) {

  formulary.forEach(function (element) {
  
    for (var i = 0; i < element.length; i++) {
      var child = element[i];

      if (child.id === 'phone-input') {
        continue;
      }

      if (child.tagName === 'INPUT' && child.value.trim() !== '') {
        
        if (child.validity.valid)
        {
          child.parentNode.classList.remove('input-danger');
        }
        else {
          child.parentNode.classList.add('input-danger');
        }
    }
  }

  });
}

function alertOnError() {
  var alert = document.querySelector('.alert-danger');
  alert.style.display = 'block';
}

function alertOnSucess() {
  var alert = document.querySelector('.alert-danger');
  var formContainer = document.querySelector('.form-container');
  var formDivider = document.querySelector('.container-divider');
  var formCta = document.querySelector('.cta-container');
  var sendedContainer = document.querySelector('.form-sended-container');

  alert.style.display = 'none';
  formContainer.style.display = 'none';
  formDivider.style.display = 'none';
  formCta.style.display = 'none';
  sendedContainer.style.display = 'flex';
}
