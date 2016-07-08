var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('K49M-9bS1JeLzhkRpWpisQ');

var message = {
    "html": "<p>Example HTML content</p>",
    "text": "Example text content",
    "subject": "example subject",
    "from_email": "mail@irynabond.space",
    "from_name": "Iryna Bondarenko",
    "to": [{
            "email": "irusiabondarenko@gmail.com",
            "name": "Iryna",
            "type": "to"
        },
        {
            "email": "iryna.bond5@gmail.com",
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
mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
    console.log(result);
   
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});