(function() {




    $('#trigger').click(function(){
        var text;
        var fruits = document.getElementById('myInput').value;
        var imagePlaceholder = document.getElementById('img');
        console.dir(imagePlaceholder);
        // var banana = url('https://www.kroger.com/product/images/large/front/0000000004011');

        switch (fruits) {
            case 'Banana':
                text = "url('https://www.kroger.com/product/images/large/front/0000000004011')";
                break;
            case 'Orange':
                text = "url('http://soappotions.com/wp-content/uploads/2017/10/orange.jpg')";
                break;
            default:
                text = "url('https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_large.png?v=1513336434')";
        }


        imagePlaceholder.style.background = text;
    });
    console.dir('')
}());
