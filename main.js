var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
        var maVoiture = new Voiture("Toyota", "Corolla", 2022);
        maVoiture.start(); // Devrait afficher "Car engine started"
    };
    return Voiture;
}());
