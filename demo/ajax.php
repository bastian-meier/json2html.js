<?php


$json2html= 
	'
	"json2html":
		[{	
			"classname": "special_class",
			"tag": "div",
			"content": 
				[{
				"tag": "div",
				"id": "p_id",
				"content": "test"	
				},
				{
				"tag": "p",
				"id": "p_id_2",
				"content": 
					[{
						"content": "test2"
					},{
						"tag": "span",
						"classname": "span_class",
						"content": " test3",
					},{
						"content": "test4"
					}]	
				},
				{
				"tag": "h2",
				"content": "Überschrift"	
				}]
		},
		{
			"tag": "h2",
			"content": "Überschrift2"	
		},
		{
			"tag": "img",
			"id": "bild",
			"attributes": [{
				"src": "http://stupo.ned/img/stupo_logo.png"
			}]	
		},
		{
			"tag": "link",
			"attributes": 
				[{
					"rel": "stylesheet",
					"type": "text/css",
					"href": "http://stupo.ned/core/css/pages/start.css"
				}]
		},
		{
			"tag": "script",
			"attributes": 
				[{
					"type": "text/javascript",
					"src": "http://stupo.ned/core/js/pages/welcome.js"
				}]
		}]
	
	'
	;
	
	
echo $_GET['callback'] .
'({"result":"ok", ', stripslashes ( $json2html ),
'})';	