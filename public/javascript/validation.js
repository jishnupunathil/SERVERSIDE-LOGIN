$(document).ready(function () {
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z,A-Z ]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $("#login").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        pass: {
          required: true,
          minlength: 5,
          maxlength: 15,
        },
      },
      messages: {
        email: {
          email: "Please enter a valid Email id",
        },
        pass: {
          minlength: "too Short!",
          maxlength: "too large",
        },
      },
    });
   
  });