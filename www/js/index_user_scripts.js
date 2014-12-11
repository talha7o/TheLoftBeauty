(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", ".uib_w_7", function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        
        
        
    /* listitem  Eyes */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    }); 
     /* listitem  Hands/Feet */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         activate_subpage("#uib_pageHands_5"); 
    });
     /* listitem  waxing */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         activate_subpage("#uib_pageWaxing_6"); 
    });
    /* listitem  Additionals and offers */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         activate_subpage("#uib_pageAdditional_7"); 
    });
    
        /* button  Eyes field */
     $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });
    
        /* button  Treatment */
    
    
        /* button  Treatment */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#uib_page_1"); 
    });
    
        /* button  Loyalty */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_subpage("#uib_pageLoyalty_5"); 
    });
    
        /* button  Contact */
    
    
        /* button  Contact */
    
    
        /* button  Contact */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#uib_pageContact_8"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
