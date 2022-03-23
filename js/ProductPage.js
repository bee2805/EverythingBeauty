$(function(){
    // var btn = $('#button');

    const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json'
    const benefit = baseURL + '?brand=benefit';
    const clinique = baseURL + '?brand=clinique';
    const dior = baseURL + '?brand=dior';
    const maybelline = baseURL + '?brand=maybelline';
    const nyx = baseURL + '?brand=nyx';
    const revlon = baseURL + '?brand=revlon';
    const smashbox = baseURL + '?brand=smashbox';

    $.getJSON(baseURL,function(data){
        for(i=0; i < data[i].brand; i++){
            $(".filterOptions").append(`
                <select name="" class="btn btn-dark justify-content-center" id="">
                    <option value="">${data[i].brand}</option>
                </select>
            `)
        };
    })

    $.getJSON(benefit,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#benefit").append(`
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard shadow">
                    <div class="justify-content-center" style="height: 200px;">
                        <img class="img-fluid img-thumbnail rounded mt-4 h-100 mx-auto d-block" src="${data[i].api_featured_image}">
                    </div>
                    </br>
                    <div class="card-footer">
                        <h5 class="mt-2" style="font-weight: bold;">${data[i].name}</h5>
                        <p>Brand: ${data[i].brand}</p>
                        <a href="${data[i].product_link}"><button class="align-bottom btn-dark rounded">Product Link</button></a>
                    </div>
                </div>
            `);
        };

    });

    $.getJSON(clinique,function(data){

        console.log(data);

        for(i=0; i < data.length; i++){
            $("#clinique").append(`
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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
                <div class="col-lg-2 col-md-4 col-sm-12 my-2 mx-2 bg-light rounded border productCard">
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