jQuery(function ($) {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      message: {
        required: true,
        minlength: 5,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Обязательное поле',
        minlength: 'Минимум 3 символа',
      },
      message: {
        required: 'Обязательное поле',
        minlength: 'Минимум 5 символов',
      },
      email: 'Обязательное поле',
    },
    errorElement: 'em',

    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid').removeClass('is-valid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass('is-valid').removeClass('is-invalid');
    },

    submitHandler: function () {
      alert('Данные успешно отправлены!');
      console.log($("#contact-form"));
    },
  });
});
