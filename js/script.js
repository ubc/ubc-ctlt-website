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

 $( ".nav-tabs,.tab-content" ).addClass( "responsive" );
if (fakewaffle === undefined) {
    var fakewaffle = {};
}

fakewaffle.responsiveTabs = function (collapseDisplayed) {
    "use strict";
    fakewaffle.currentPosition = 'tabs';

    var tabGroups = $('.nav-tabs.responsive'),
        hidden    = '',
        visible   = '';

    if (collapseDisplayed === undefined) {
        collapseDisplayed = ['phone', 'tablet'];
    }

    $.each(collapseDisplayed, function () {
        hidden  += ' hidden-' + this;
        visible += ' visible-' + this;
    });

    $.each(tabGroups, function () {
        var $tabGroup   = $(this),
            tabs        = $tabGroup.find('li a'),
            collapseDiv = $("<div></div>", {
                "class" : "accordion responsive" + visible,
                "id"    : 'collapse-' + $tabGroup.attr('id')
            });

        $.each(tabs, function () {
            var $this          = $(this),
                active         = '',
                oldLinkClass   = $this.attr('class') === undefined ? '' : $this.attr('class'),
                newLinkClass   = 'accordion-toggle',
                oldParentClass = $this.parent().attr('class') === undefined ? '' : $this.parent().attr('class'),
                newParentClass = 'accordion-group';

            if (oldLinkClass.length > 0) {
                newLinkClass += ' ' + oldLinkClass;
            };

            if (oldParentClass.length > 0) {
                oldParentClass = oldParentClass.replace(/bactiveb/g, '');
                newParentClass += ' ' + oldParentClass;
                newParentClass = newParentClass.replace(/s{2,}/g, ' ');
                newParentClass = newParentClass.replace(/^s+|s+$/g, '');
            };

            if ($this.parent().hasClass('active')) {
                active = ' in';
            }

            collapseDiv.append(
                $('<div>').attr('class', newParentClass).html(
                    $('<div>').attr('class', 'accordion-heading').html(
                        $('<a>', {
                            'class' : newLinkClass,
                            'data-toggle': 'collapse',
                            'data-parent' : '#collapse-' + $tabGroup.attr('id'),
                            'href' : '#collapse-' + $this.attr('href').replace(/#/g, ''),
                            'html': $this.html()
                        })
                    )
                ).append(
                    $('<div>', {
                        'id' : 'collapse-' + $this.attr('href').replace(/#/g, ''),
                        'class' : 'accordion-body collapse' + active
                    }).html(
                        $('<div>').attr('class', 'accordion-inner').html('')
                    )
                )
            );
        });

        $tabGroup.next().after(collapseDiv);
        $tabGroup.addClass(hidden);
        $('.tab-content.responsive').addClass(hidden);
    });

    fakewaffle.checkResize();
    fakewaffle.bindTabToCollapse();
};

fakewaffle.checkResize = function () {
    "use strict";
    if ($(".accordion.responsive").is(":visible") === true && fakewaffle.currentPosition === 'tabs') {
        fakewaffle.toggleResponsiveTabContent();
        fakewaffle.currentPosition = 'panel';
    } else if ($(".accordion.responsive").is(":visible") === false && fakewaffle.currentPosition === 'panel') {
        fakewaffle.toggleResponsiveTabContent();
        fakewaffle.currentPosition = 'tabs';
    }

};

fakewaffle.toggleResponsiveTabContent = function () {
    "use strict";
    var tabGroups = $('.nav-tabs.responsive');

    $.each(tabGroups, function () {
        var tabs = $(this).find('li a');

        $.each(tabs, function () {
            var href         = $(this).attr('href').replace(/#/g, ''),
                tabId        = "#" + href,
                panelId      = "#collapse-" + href,
                tabContent   = $(tabId).html(),
                panelContent = $(panelId + " div:first-child").html();

            $(tabId).html(panelContent);
            $(panelId + " div:first-child").html(tabContent);
        });

    });
};

fakewaffle.bindTabToCollapse = function () {
    "use strict";
    var tabs     = $('.nav-tabs.responsive').find('li a'),
        collapse = $(".accordion.responsive").find('.accordion-body');

    tabs.on('shown', function (e) {
        var $current  = $($(e.target)[0].hash.replace(/#/, '#collapse-'));

        if (!$current.hasClass('in')) {
            $current.addClass('in').height('auto');
        }

        if (e.relatedTarget) {
            var $previous = $($(e.relatedTarget)[0].hash.replace(/#/, '#collapse-'));
            $previous.removeClass('in').height('0px');
        };
    });

    collapse.on('shown', function (e) {
        var current = $(e.target).context.id.replace(/collapse-/g, '#');

        $('a[href="' + current + '"]').tab('show');
    });
}

$(window).resize(function () {
    "use strict";
    fakewaffle.checkResize();
});
fakewaffle.responsiveTabs();
		
});