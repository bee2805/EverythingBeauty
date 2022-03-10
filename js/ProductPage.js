$(function(){

    const benefit = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit';
    const clinique = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique';
    const dior = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior';
    const maybelline = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const nyx = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx';
    const revlon = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon';
    const smashbox = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox';


    $.getJSON(benefit,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#benefit").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard shadow">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                    <a href="${data[i].product_link}"><button class="btn-dark rounded align-self-baseline">Product Link</button></a>
                </div>
            `);
        };

    });

    $.getJSON(clinique,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#clinique").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                    
                </div>
            `);
        };

    });

    $.getJSON(dior,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#dior").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                </div>
            `);
        };

    });

    $.getJSON(maybelline,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#maybelline").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                </div>
            `);
        };

    });

    $.getJSON(nyx,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#nyx").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                </div>
            `);
        };

    });

    $.getJSON(revlon,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#revlon").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
                    <h5 style="font-weight: bold;">Brand:<h5>
                    <p> ${data[i].brand}</p>
                </div>
            `);
        };

    });

    $.getJSON(smashbox,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#smashbox").append(`
                <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
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

    // <div class="col-lg-2 col-md-6 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
    //     <div class="justify-content-center" style="height: 200px;">
    //         <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
    //     </div>
    //     </br>
    //     <h4 class="mt-2" style="font-weight: bold;">${data[i].name}</h4>
    //     <h5 style="font-weight: bold;">Brand:<h5>
    //     <p> ${data[i].brand}</p>
    // </div>