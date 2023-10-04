// below $rootScope is the controler parameter in widget
$rootScope.$broadcast('EVENT_NAME', { // EVENT_NAME: string; any name where event needs to trigger 
  'KEY_1': 'VALUE_1',
  'KEY_2': 'VALUE_2',
  //so on... value that will be broadcast on given EVENT_NAME
});
