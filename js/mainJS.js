function Airport(name, icaoCode) {
    this.name = name;
    this.icaoCode = icaoCode;
}

function mviewModel() {
    
        name : ko.observable('defaultName');
        icaoCode : ko.observable('defaultIcaoCode');
    
    
    o().config({
        endpoint: 'https://services.odata.org/TripPinRESTierService/',
        version: 4,
        strictMode: true,
        start: function () {
            this.isLoading(true);
        },
        ready: function () {
            this.isLoading(false);
        },
        
        headers: [{ name: 'If-Match', value: '*' }]
    });
    
    var oHandler = o('Airports');
    oHandler.get(function(data) {
    console.log(data); // data of the TripPinService/People endpoint
});
    
}
ko.applyBindings(mviewModel);
