# Shopify-2.0-pass-reco-product

Pass additional product(recommended) product with single product on dawn theme : https://prnt.sc/RHsensjEDABa

Steps:

1. Create new product template.
2. Create new product section file.
3. Add code after {%- when 'buy_buttons' -%}  from  <!--custom manual product---> from file also pass value in hidden in product form:
```
<input type="hidden" name="add_on_pid" id="add_on_pid" value="" disabled>
<input type="hidden" name="add_on_qty" id="add_on_qty" value="" disabled>
<input type="hidden" name="add_on_vid" id="add_on_vid" value="{{someProduct.selected_or_first_available_variant.id }}" disabled>
```
5. Or you can replace code with my code i have mentioned file above
6. Create custom.js and assign that file in theme.liquid.
7. Customize product-form.js file add custom code for add additional product after finally()

    ```
    var qty = $('#add_on_qty').val();
        var vid = $('#add_on_vid').val();
        alert(qty);
        alert(vid);
        if(qty >=1 ){
          jQuery.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {
              quantity: qty,
              id: vid
            },
            dataType: 'json', 
            success: function (data) {

            } 
          });
        }

      
 
