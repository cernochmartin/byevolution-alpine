function intlTelInputUtil(){
    var input = document.querySelector("#phone");
    var iti = intlTelInput(input, {
            initialCountry: "auto",
            formatOnDisplay: true,
            geoIpLookup: function(success, failure) {
                success("es");
            },
            utilsScript: '/libs/intl-tel-input-17.0.19/js/utils.js',
            separateDialCode: true,
        });
    return{
      selectedFormat: '(999) 999-9999',
      intltelMask(){
        if (typeof intlTelInputUtils !== 'undefined') {
          var selectedCountry = iti.getSelectedCountryData();
          var dialCode = selectedCountry.dialCode;

          var number = iti.getNumber(intlTelInputUtils.numberFormat.E164);
          var maskNumber = intlTelInputUtils.getExampleNumber(selectedCountry.iso2, 0, 0);
          maskNumber = intlTelInputUtils.formatNumber(maskNumber, selectedCountry.iso2, 2);
          maskNumber = maskNumber.replace('+' + dialCode + ' ', '');
          var mask = maskNumber.replace(/[0-9]/g, '9');
          this.selectedFormat = mask;
          return number;
        }
      },
      validatePhone(){
        if (typeof intlTelInputUtils !== 'undefined') {
            var number = iti.getNumber(intlTelInputUtils.numberFormat.NATIONAL);
            var iso = iti.getSelectedCountryData();
            var exampleNumber = intlTelInputUtils.getExampleNumber(iso.iso2, 0, 0);
            if (number == '') number = exampleNumber;

            var formattedNumber = intlTelInputUtils.formatNumber(number, iso.iso2, intlTelInputUtils.numberFormat.NATIONAL);
            var isValidNumber = intlTelInputUtils.isValidNumber(number, iso.iso2);
            var validationError = intlTelInputUtils.getValidationError(number, iso.iso2);

            return (isValidNumber && validationError == 0)?true:false;
        }
      }
    }
}