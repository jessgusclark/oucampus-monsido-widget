var module = [];

$(document).ready(function () {
    /* 
        First, call `gadget.ready()` to make sure the gadget has obtained an API token
        to use for making OU Campus API calls. If your gadget will not make any API calls,
        you can dispense with this method. This asynchronous method returns a jQuery
        Promise object.
        
        Then, call `gadget.fetch()` to get the gadget's config data from the system. This
        method, which also returns a jQuery Promise object, uses the API, which is why it
        needs to follow the call to `gadget.ready()`.
        
        If you don't need the config data, you don't need to call gadget.fetch().
    */
    gadget.ready().then(gadget.fetch).then(function () {

        var monsidoToken = gadget.getConfig('access_token');
        var domain = gadget.getConfig('domain_id');

        console.log("Access Token ", monsidoToken );
        console.log("Domain ", domain);

        var monsido = monsidoBridge();

        /*monsido.getToken().then(function (data){
            console.log("token:", data.access_token )
        });*/

        console.log( monsido.getPrioritizedContent("9b82b329633af525e9dea62a9666ab23f18b6ef1b60b79ca6a06236990272669", domain) );

        //$('#main').css({ 'font-size': gadget.getConfig('font_size') });
    });

});