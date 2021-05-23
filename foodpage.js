// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  // Constructor
  function Item(id, img, name, price, promo, count) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.promo = promo;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function(id, img, name, price, promo, count) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, img, name, price, promo, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(id, count) {
    for(var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(id) {
      for(var item in cart) {
        if(cart[item].id === id) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(id) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(0);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

    return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item 
function buttonAdd(){
			
}
    
$('.add-to-cart').click(function(event) {
      
      event.preventDefault();
      var id = $(this).data('id');
      var img = $(this).data('img');
      var name = $(this).data('name');
      var price = Number($(this).data('price'));
      var promo = Number($(this).data('promo'));
  
      shoppingCart.addItemToCart(id,img,name,price,promo, 1);
      
  displayCart();
});     

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


 		var arr_pembayaran = payment;
           $.each(arr_pembayaran, function(key, value) {
             $('#whatsapp .pembayaran optgroup').append('<option value="'+key+'%0A'+value+'">'+key+' - ' +value+ '</option>');
           });

    // Onclick Whatsapp Sent!
      $('.submit').click(function() {
            WhatsApp();
      });

    //rotator
    var minNumber = 0;
    var maxNumber = 3;
    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min,max) {
       return Math.floor(Math.random()*(max-min+1)+min);
    }
    
   if(main.rotary_admin_phone == true){ 
    if (randomNumber == 1){
       var call = main.store_admin_phone;
    } else {
        if (randomNumber == 2) {
            var call = main.store_admin_phone1;
        } else {
            var call = main.store_admin_phone2;
        }
     } 
   } else {
      var call = main.store_admin_phone;
   } 
      console.log(call);
    
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      function WhatsApp() {
             var ph = '';
             if ($('#whatsapp .nama').val() == '') { // Cek Nama
               ph = $('#whatsapp .nama').attr('placeholder');
               alert('Silahkan tulis ' + ph);
               $('#whatsapp .nama').focus();
               return false;
             } else if ($('#whatsapp .nowhatsapp').val() == '') { // Cek Whatsapp
               ph = $('#whatsapp .nowhatsapp').attr('placeholder');
               alert('Silahkan tulis ' + ph);
               $('#whatsapp .nowhatsapp').focus();
               return false;
             } else if ($('#whatsapp .pembayaran').val() == '') { // Cek Metode Pembayaran
               ph = $('#whatsapp .pembayaran').attr('placeholder');
               alert('Silahkan pilih metode pembayaran ' + ph);
               $('#whatsapp .pembayaran').focus();
               return false;
             } else if ($('#whatsapp .alamat').val() == '') { // Cek Alamat
               ph = $('#whatsapp .alamat').attr('placeholder');
               alert('Silahkan tulis ' + ph);
               $('#whatsapp .alamat').focus();
               return false;
             } else {


          let $wa = 'https://web.whatsapp.com/send';
          $nama = $('#whatsapp .nama').val(),
          $nohp = $('#whatsapp .nowhatsapp').val(),
          $pembayaran = $('#whatsapp .pembayaran').val(),
          $alamat = $('#whatsapp .alamat').val();
          $total = 0,
          $subtotal = 0,
          $order_detail = '',
          $number = 0,
          $cart_ongkir = localStorage.getItem('cart_ongkir') ? parseInt(localStorage.getItem('cart_ongkir')) : parseInt(main.store_ongkir),
          $cart_ongkir_name = localStorage.getItem('cart_ongkir_name') ? localStorage.getItem('cart_ongkir_name') : 'flatongkir',
          $c_note = "tidak ada";

          // Check Device (Mobile/Desktop)
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  					$wa = 'whatsapp://send/';
  				}

            //order detail
            var OrderArray = shoppingCart.listCart();
            OrderArray.forEach( function(item, i) {
              let $subsubtotal = parseInt(item.price) * parseInt(item.count);
    					$subtotal = $subtotal + $subsubtotal;

    					$number = i + 1;
    					$number = $number + '. ';

    					$order_detail += '%0A*' + $number + item.name + '* %0A';
    					$order_detail += '  Quantity : ' + item.count + ' pcs%0A';
    					$order_detail += '  Harga (@) : ' + main.currency.format(item.price) + ' %0A';
    					$order_detail += '  Total Harga : ' + main.currency.format($subsubtotal) + ' %0A';
            });

            //$order_detail += '%0A*Pesan :* ' + $c_note + '%0A';


            //cek ongkir
            if( main.store_ongkir_enable ){
    					$order_detail += '%0ASub Total : *' + main.currency.format($subtotal) + '*%0A';
    					$order_detail += 'Ongkir : *' + main.currency.format($cart_ongkir) + '* '+$cart_ongkir_name+'%0A';
    					$total = $cart_ongkir + parseInt($subtotal);
    					$order_detail += 'Total : *' + main.currency.format($total) + '*%0A';
    				}else{
    					$total = parseInt($subtotal);
    					$order_detail += 'Total : *' + main.currency.format($total) + '*%0A';
    				}

            var parameter = $wa + '?phone=' + call + '&text=' + main.store_opened_message +
             '.%0A' + $order_detail +
             //'--------------------------------%0A*Nama :*%0A' + $nama +
             //' ( ' + $nohp + ' ) %0A%0A*Alamat :*%0A' + $alamat.replace(/(\r\n|\n|\r)/gm,'%0A') +
             //'%0A%0A' +'Via ' + location.href;

             '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
             '*Metode Pembayaran :*%0A' + $pembayaran + '%0A%0A' +
             //'Kota. ' + $kota + ' - Kec. ' + kecamatan + '%0A%0A' +
             'A/n.%0A*'+ $nama +'*%0A ( ' + $nohp + ' )%0A%0A' +
             '*Alamat :*%0A' + $alamat.replace(/(\r\n|\n|\r)/gm,'%0A') +
             '%0A%0A' +'Via ' + location.href;

              $(this).attr('href', parameter);
               var w = 960,
                 h = 540,
                 left = Number((screen.width / 2) - (w / 2)),
                 tops = Number((screen.height / 2) - (h / 2)),
                 popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
               popupWindow.focus();
               clearALL();
       				 closeCart();
               return false;
             }
           }
    /* ]]> */

function closeCart(){
  $('#cart').modal('hide');
}

function clearALL(){
  shoppingCart.clearCart();
  displayCart();
}

function displayCart() {

  var cartArray = shoppingCart.listCart();
  var output = "";
  var ongkir = parseInt(main.store_ongkir);
  var totalCountOngkir = ongkir+shoppingCart.totalCart();

  if(shoppingCart.totalCount() > 0 ){
    $('.basketbox').css('display','block');
  } else {
    $('.basketbox ').css('display','none');
    closeCart();
  }
  
  for(var i in cartArray) {
          
        if( cartArray[i].price == cartArray[i].promo ){
						price = '<span class="price">'+ main.currency.format(cartArray[i].price)+'</span>';
					}else{
						price = '<span class="price">'+main.currency.format(cartArray[i].price)+'</span> <span class="price-slik">'+main.currency.format(cartArray[i].promo)+'</span>';
					}

    output += "<div class='productcart'><div class='content'><div class='image'><img src='"+ cartArray[i].img +"'></div>"
          + "<div class='detail'><h3>"+ cartArray[i].name +"</h3>"
          + "<div class='pricing'>"+price+"</div>"
          + "<div class='atc clear'>"
          + "<div class='qty qty-selector clear' data-item-id=''>"
          + "<button type='button' class='minus-item button-qty' data-id=" + cartArray[i].id + ">-</button>"
          + "<input min='0' class='item-count'  data-id='" + cartArray[i].id + "' value='" + cartArray[i].count + "'>"
          + "<button type='button' class='plus-item button-qty' data-id=" + cartArray[i].id + ">+</button></div></div></div></div></div>"
  }

  $('.show-cart').html(output);
  $('.total-cart').html(main.currency.format(shoppingCart.totalCart()));
  $('.total-count').html(shoppingCart.totalCount());
  $('.total-CountOngkir').html(main.currency.format(totalCountOngkir));
  $('.total-Ongkir').html(main.currency.format(ongkir));
}

// Delete item button
$('.show-cart').on("click", ".delete-item", function(event) {
  var id = $(this).data('id')
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
})

// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var id = $(this).data('id')
  shoppingCart.removeItemFromCart(id);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var id = $(this).data('id')
  shoppingCart.addItemToCart(id);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var id = $(this).data('id')
   var count = Number($(this).val());
  shoppingCart.setCountForItem(id,count);
  displayCart();
});

displayCart();
