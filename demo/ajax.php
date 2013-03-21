<?php


$json2html= 
'
"json2html":
	[{	
		"classname": "special_class test",
		"tag": "div",
		"content": 
			[{
			"tag": "div",
			"id": "div_id",
			"content": "test"	
			},
			{
			"tag": "p",
			"id": "p_id_2",
			"content": 
				[{
					"content": "content "
				},{
					"tag": "span",
					"classname": "span_class",
					"content": " span content "
				},{
					"content": " content after span"
				}]	
			},
			{
			"tag": "h2",
			"content": "Headline"	
			}]
	},
	{
		"tag": "br"	
	},
	{
		"tag": "img",
		"id": "nice_picture",
		"attributes": [{
			"src": "http://example.com/logo.png"
		}]	
	},
	{
		"tag": "link",
		"attributes": 
			[{
				"rel": "stylesheet",
				"type": "text/css",
				"href": "http://example.com/welcome.css"
			}]
	},
	{
		"tag": "script",
		"attributes": 
			[{
				"type": "text/javascript",
				"src": "http://example.com/welcome.js"
			}]
	}]';

	
echo $_GET['callback'] .
'({"result":"ok", ', stripslashes ( $json2html ),
'})';	