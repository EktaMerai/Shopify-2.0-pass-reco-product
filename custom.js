 jQuery('.addon_qty').change(function() {
        var qty = jQuery(this).val();
        var p_id = jQuery(this).attr("data-pid");
        alert(p_id);
        jQuery('#add_on_qty').val(qty);
        jQuery('#add_on_pid').val(p_id);
      });
      jQuery('.variant_selection').change(function() {
      	var vid = jQuery(this).val();
        alert(vid);
        jQuery('#add_on_vid').val(vid);
      });
