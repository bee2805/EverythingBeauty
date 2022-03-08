$(function(){

    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json'

    $.getJSON(url,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $(".products").append(`

                <div class="col-lg-2 my-2 bg-light rounded border productCard"">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}" alt="">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                </div>
            
            `);
        };


    });

});