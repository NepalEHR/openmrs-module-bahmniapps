'use strict';

angular.module('bahmni.registration')
    .factory('registrationCardPrinter', ['printer', function (printer) {
        var print = function (templatePath, patient,visitTypePrice,obs, encounterDateTime) {
            templatePath = templatePath || "views/nolayoutfound.html";
            printer.print(templatePath, {patient: patient, today: new Date(), visitTypePrice: visitTypePrice, obs: obs || {}, encounterDateTime: encounterDateTime });
        };

        return {
            print: print
        };
    }]);
