	/**
	 * json2html.js v0.1
	 * depends on jquery
	 * https://github.com/mnemexxx/json2html.js
	 * MIT licensed
	 *
	 * Copyright (C) 2013 mnemexxx 
	 * A weekend project by Bastian Meier
	 */
	
(function () {

  	//Default config/variables
	var VERSION = "0.0.2";
	
	/**
	 * json2html main class
	 *
	 * @class json2html
	 * @param {object} obj
	 * @param {string} target
	 */
	function json2html(obj, target) {
		_appendHtml( obj, target );
		_cleanUp();
	}
	
    
    /**
     * builds the html markup
     *
     * @api private
     * @method _appendHtml
	 * @param {object} obj
	 * @param {string} target
     */
	function _appendHtml ( obj, target ) {
		//if there are more than one element
		for (var i = 0; i < obj.length; ++i) {
			_appendElement(obj[i], target);
		}
    };
    
    /**
     * builds an element
     * 
     * @api private
     * @method _appendElement
	 * @param {object} obj
	 * @param {string} parent
     */
    function _appendElement(obj , parent) {
    	
    	//creates the element
    	if(obj.tag == undefined){
    		
    		if(obj.content != undefined){
    			$('#' + parent).append(obj.content);
        	}
    		
    	}else{
    		
    		//the id of the object
        	var id = obj.id;
        	
    		var subElement = $('<' + obj.tag + '>');	
    		subElement.attr('class' , obj.classname);
    		
    		//if there is no id, we need to create a random id
        	if(id == undefined){
        		id = _getRandomId();
        		subElement.addClass('json2htmlIdAdded');
        	}
        	// sets id and class ...
        	subElement.attr('id' , id);
        	
        	// appends the subelement to parent element
        	$('#' + parent).append(subElement);
    
        	// if content is defined append it
        	if(obj.content != undefined){
        		_appendContent(obj.content, id);	
        	}
        
        	// if attributes are definded, append them
        	if(obj.attributes != undefined){
        		_appendAttributes(obj.attributes, id);
        	}
        
    	
    	}
		
    };
    
    /**
     * append the content string or children objects
     * 
     * @api private
     * @method _appendContent
	 * @param {object} obj
	 * @param {string} parent
     */ 
    function _appendContent (obj, parent){
    	if(typeof(obj) == 'string'){
    		$('#' + parent).append(obj);    		
    	}else if(typeof(obj) == 'object'){
    		_appendHtml(obj, parent);
    	}
    };

    /**
     * split the atributes object and calls the appendAttribute function
     * 
     * @api private
     * @method _appendAttributes
	 * @param {object} obj
	 * @param {string} parent
     */
    function _appendAttributes (obj, parent){

    	for (var i = 0; i < obj.length; ++i) {
    		_appendAttribute(obj[i], parent);
		}
    };

    /**
     * append on attribute to the parent object
     * 
     * @api private
     * @method _appendAttribute
	 * @param {object} obj
	 * @param {string} parent
     */
    function _appendAttribute (obj, parent){
		for (var key in obj) {
			
		    if (obj.hasOwnProperty(key))
		    {
		  		$('#' + parent).attr(key, obj[key]); 
		    }
		}
    };
    /**
     * generate a random id with the microtimestamp and a random number
     * 
     * @api private
     * @method _getRandomId
	 * @return {string}
	 */
    function _getRandomId (){
    	var rnd = Math.round((Math.random() * 100));
    	var time = new Date().getTime();
    	return 'j2h' + time + rnd;
    }; 
    
    /**
     * removes temp ids and classes from html
     * 
     * @api private
     * @method _cleanUp
	 */
    function _cleanUp (){
        $('.json2htmlIdAdded').each( function(index){
    		var classname = $(this).attr('class') ;
    		if(classname == 'json2htmlIdAdded'){
    			$(this).removeAttr("class");
    		}else{
    			$(this).removeClass('json2htmlIdAdded');
    		}
    		$(this).removeAttr('id');
    	});
    };     
    
   
    /**
     * Current json2html version
     *
     * @property version
     * @type String
     */
    json2html.version = VERSION;
  
    window['json2html'] = json2html;
})();
