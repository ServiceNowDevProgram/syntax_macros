// below $rootScope is the controler parameter in widget
$rootScope.$on('EVENT_NAME', function(event, obj) { // EVENT_NAME: string; name of the event that declaired at the time of broadcasting
    console.log(obj); // obj is the values that are broadcasted
});
