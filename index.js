var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('K49M-9bS1JeLzhkRpWpisQ');
var template_name = "dollydolly";
var template_content = [{
        "name": "Hello from DOLLY",
        "content": "take 15% off"
    }];

var message = {
    "html": "<h1>Hello from DOLLY!</h1>",
    "text": "Hello DOLLY",
    "subject": "Are you going to move? DOLLY is here fo you",
    "from_email": "mail@irynabond.space",
    "from_name": "Iryna Bondarenko",
    "to": [{
            "email": "ADD YOUR EMAIL HERE",
            "name": "Iryna",
            "type": "to"
        }       
     ],
    "headers": {
        "Reply-To": "mail@irynabond.space"
    },
    "important": false,
    "track_opens": null,
    "track_clicks": null,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    "merge": true,
    "merge_language": "mailchimp"
};
var async = false;
var ip_pool = "Main Pool";
var send_at = "2016-07-07";
mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
    console.log(result);
   
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});