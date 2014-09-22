/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function() {
    jQuery("#ctlt-main-colour").wpColorPicker({
        palettes: ['#166A9A', '#002145', '#2F5D7C', '#5E869F', '#98B2C3', '#C3D0DB']
    });
        
    jQuery("#ctlt-gradient-colour").wpColorPicker({
        palettes: ['#002145', '#2F5D7C', '#5E869F', '#98B2C3', '#C3D0DB']
    });

    jQuery("#ctlt-hover-colour").wpColorPicker({
        palettes: ['#E7F4FC', '#002145', '#2F5D7C', '#5E869F', '#98B2C3', '#C3D0DB']
    });
    
    
    jQuery('#ctlt-gradient-colour').after('<a id="lighter-colour" href="#">35% lighter than the Main</a>');
    
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    jQuery('#lighter-colour').click(function(){
            var a = jQuery('#ctlt-main-colour').val();
            
            var r = hexToRgb(a).r;
            var g = hexToRgb(a).g;
            var b = hexToRgb(a).b;
            
            jQuery('#ctlt-gradient-colour').wpColorPicker( 'color', Lighthen(r, g, b));
        });
        
    function Lighthen(red, green, blue){
            
        multiplier = 135/100; // (100 + % lighter)/100

        var r = Math.round(red * multiplier);
        var g = Math.round(green * multiplier);
        var b = Math.round(blue * multiplier);

        if (r > 255) r = 255;
        if (g > 255) g = 255;
        if (b > 255) b = 255;


        return rgbToHex(r, g, b);
    }


    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        var hex =  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        return hex;
    }
		
	
	if(jQuery('#ubc-collab-theme-options-education-enable-banner').attr('checked')){
        jQuery(".banner-enable").show();
    } else{
        jQuery(".banner-enable").hide();
    }
    jQuery('#ubc-collab-theme-options-education-enable-banner').change( function(){
		
		if( jQuery(this).prop("checked") ){
			jQuery(".banner-enable").slideDown();
		} else {
			jQuery(".banner-enable").slideUp();
		}
	});

    if(jQuery('#ubc-collab-theme-options-foe-chevron-type').attr('checked')){
        jQuery(".custom-chevron-setup").show();
        jQuery(".image-chevron").hide();
    } else{
        jQuery(".custom-chevron-setup").hide();
        jQuery(".image-chevron").show();
    }
    jQuery('#ubc-collab-theme-options-foe-chevron-type').change( function(){
        
        if( jQuery(this).prop("checked") ){
            jQuery(".custom-chevron-setup").slideDown();
            jQuery(".image-chevron").slideUp();
        } else {
            jQuery(".custom-chevron-setup").slideUp();
            jQuery(".image-chevron").slideDown();
        }
    });
});