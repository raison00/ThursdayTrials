(function() { // =D
    // Category: Men
    app.collections.categories.add(new app.models.templates.Category({
        name: 'men',
        spotlightCode: 'ff_m'
    }));
    /* BEGIN MEN'S FITS */
    // Fit: Men > Tapered
    app.collections.fits.add(new app.models.templates.Fit({
        name: 'slim-tapered',
        category: 'men',
        shopButtonText: 'shop all slim tapered',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=63069&${cm_sp}slim tapered',
        navName: 'slim tapered',
        styleNavTopGraphic: true,
        styleNavLeftPos: 0,
        styleTabLeftPos: 50,
        fitBackgroundPos: "-0px -0px",
        heading: 'SLIM TAPERED',
        hoverBlurb: 'khakis that fit like jeans',
        description: 'khakis that fit like jeans',
        fitPoints: [{
            contentText: '1. Sits below the waist'
        }, {
            contentText: '2. Slim through the seat and thigh'
        }, {
            contentText: '3. Tapered leg opening'
        }]
    }));
    // Fit: Men > D1
    app.collections.fits.add(new app.models.templates.Fit({
        name: 'slim',
        category: 'men',
        shopButtonText: 'shop all slim',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=59778&${cm_sp}all slim',
        navName: 'SLIM',
        styleNavTopGraphic: false,
        styleNavLeftPos: 0,
        styleTabLeftPos: 198,
        heading: 'SLIM',
        fitBackgroundPos: '-142px -0px',
       hoverBlurb: 'a sharp, tailored style',
        description: 'a sharp, tailored style',
         fitPoints: [{
            contentText: '1. Sits slightly below the waist'
        }, {
            contentText: '2. Slim through the seat and thigh'
        }, {
            contentText: '3. Straight leg opening'
        }],
    }));
    // Fit: Men > D2
    app.collections.fits.add(new app.models.templates.Fit({
        name: 'straight',
        category: 'men',
        shopButtonText: 'shop all straight',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=59779&${cm_sp}straight',
        navName: 'STRAIGHT',
        styleNavTopGraphic: true,
        styleNavLeftPos: 0,
        styleTabLeftPos: 343,
        fitBackgroundPos: "-289px -0px",
        heading: 'STRAIGHT ',
        hoverBlurb: 'a clean, modern look',
        description: 'a clean, modern look',
       fitPoints: [{
            contentText: '1. Sits slightly below the waist'
        }, {
            contentText: '2. Straight through the seat and thigh'
        }, {
            contentText: '3. Straight leg opening'
        }],
    }));
    // Fit: Men > D3
    app.collections.fits.add(new app.models.templates.Fit({
        name: 'classic',
        category: 'men',
        shopButtonText: 'shop all classic',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=59780&${cm_sp}all classic',
        navName: 'CLASSIC',
        styleNavTopGraphic: true,
        styleNavLeftPos: 0,
        styleTabLeftPos: 499,
        fitBackgroundPos: "-430px -0px",
        heading: 'CLASSIC ',
        hoverBlurb: 'a comfort & style favorite',
        description: 'a comfort & style<br/>favorite',
        fitPoints: [{
            contentText: '1. Sits naturally at the waist'
        }, {
            contentText: '2. Eased through the seat and thigh'
        }, {
            contentText: '3. Straight leg opening'
        }],
       
    }));
    // Fit: Men > D4
    app.collections.fits.add(new app.models.templates.Fit({
        name: 'relaxed',
        category: 'men',
        shopButtonText: 'shop all relaxed',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=59781&${cm_sp}all relaxed',
        navName: 'RELAXED',
        styleNavTopGraphic: true,
        styleNavLeftPos: 0,
        styleTabLeftPos: 645,
        fitBackgroundPos: "-562px -0px",
        heading: 'RELAXED',
        hoverBlurb: 'our most comfortable fit',
        description: 'our most<br/>comfortable fit',
        fitPoints: [{
            contentText: '1. Sits naturally at the waist'
        }, {
            contentText: '2. Full through the seat and thigh'
        }, {
            contentText: '3. Straight leg opening'
        }],
    }));
    // Style: Men > Tapered > Alpha Khaki Slim
    app.collections.styles.add(new app.models.templates.Style({
        name: 'alpha-khaki-slim',
        category: 'men',
        fit: 'slim-tapered',
        shopUrl: 'http://www.macys.com/catalog/index.ognc?CategoryID=59778&${cm_sp}alpha khaki slim',
        styleNavName: 'alpha khaki<br />slim tapered',
        styleNavBackgroundPosition: '0px 0px',
        heading: 'Alpha Khaki<br />Slim Tapered',
        stylePoints: [{
            contentText: 'Most popular slim tapered style'
        }, {
            contentText: 'Sits below the waist'
        }, {
            contentText: 'Slim through the seat and thigh, tapered leg'
        }]
    }));
    /* BEGIN MEN > Slim */
    // Style: Men > Slim > Signature Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'signature-khaki',
        category: 'men',
        fit: 'slim',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=354951&${cm_sp}signature khaki',
        styleNavName: 'signature<br>khaki',
        styleNavBackgroundPosition: '-0px -0px',
        heading: 'Signature<br>Khaki',
        stylePoints: [{
            contentText: 'Individual Fit<sup>&reg;</sup> waistband'
        },{
            contentText: 'No Wrinkles<sup>&reg;</sup> fabric and color retention'
        },{ 
            contentText: 'Sits slightly below the waist'
        },{
            contentText: 'Slim through the seat and thigh, straight leg'
        }]
    }));
    /* BEGIN MEN > Straight */
     // Style: Men > Straight > Field Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'field-khaki',
        category: 'men',
        fit: 'straight',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=1321053&${cm_sp}field khaki',
        styleNavName: 'field<br>khaki',
        styleNavBackgroundPosition: '-0px -0px',
        heading: 'Field<br />Khaki',
        stylePoints: [{
            contentText: 'Super-soft fabrication'
        }, {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Slim through the seat and thigh, straight leg'
        }]
    }));
    // Style: Men > Straight > Off the Clock Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'off-the-clock-khaki',
        category: 'men',
        fit: 'straight',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=708724&${cm_sp}off the clock khaki',
        styleNavName: 'off the<br>clock',
        styleNavBackgroundPosition: '-140px 0px',
        heading: 'Off the<br />Clock',
        stylePoints: [{
            contentText: 'Casual style'
        }, {
            contentText: 'Coin pocket'
        }, {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Straight through the seat and thigh, straight leg'
        }]
    }));
   // Style: Men > Straight > Signature Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'signature-khaki',
        category: 'men',
        fit: 'straight',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=354949&${cm_sp}signature khaki',
        styleNavName: 'signature<br>khaki',
        styleNavBackgroundPosition: '-430px -0px',
        heading: 'Signature<br />Khaki',
        stylePoints: [{
            contentText: 'Our bestselling wear-to-work pant'
        }, {
            contentText: 'Individual Fit<sup>&reg;</sup> waistband'
        }, {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Straight through the seat and thigh, straight leg'
        }]
    }));
    // Style: Men > Straight > New Iron Free Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'new-iron-free-khaki',
        category: 'men',
        fit: 'straight',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=587525&${cm_sp}iron free khaki',
        styleNavName: 'new iron<br>free khaki',
        styleNavBackgroundPosition: '-280px -0px',
        heading: 'New<br/>Iron Free<sup>&reg;</sup><br/>Khaki',
        stylePoints: [{
            contentText: 'Iron Free<sup>&reg;</sup> technology'
        },
        {
            contentText: 'Individual Fit<sup>&reg;</sup> waistband'
        },
        {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Straight through the seat and thigh, straight leg'
        }]
    }));
    
    
    // Style: Men > Straight > Pacific OTG Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'pacific-on-the-go',
        category: 'men',
        fit: 'straight',
        shopUrl: '',
        styleNavName: 'pacific<br>on-the-go',
        styleNavBackgroundPosition: '-580px -0px',
        heading: 'Pacific<br>On-the-Go',
        stylePoints: [{
            contentText: 'Travel pant'
        }, {
            contentText: 'Moisture wicking fabric and mesh pockets'
        }, {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Straight through the seat and thigh, straight leg'
        }]
    }));
     // Style: Men > Straight > Signature OTG Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'signature-on-the-go',
        category: 'men',
        fit: 'straight',
        shopUrl: '',
        styleNavName: 'signature<br>on-the-go',
        styleNavBackgroundPosition: '-730px -0px',
        heading: 'Signature<br>On-the-Go',
        stylePoints: [{
            contentText: 'Travel pant'
        },{
            contentText: 'Moisture wicking and No Wrinkles<sup>&reg;</sup> fabric'
        }, {
            contentText: 'Sits slightly below the waist'
        }, {
            contentText: 'Straight through the seat and thigh, straight leg'
        }]
    }));
    /* BEGIN MEN > Classic */
    // Style: Men > Classic > Comfort Cargo
    app.collections.styles.add(new app.models.templates.Style({
        name: 'comfort-cargo',
        category: 'men',
        fit: 'classic',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=449898&${cm_sp}comfort cargo',
        styleNavName: 'comfort<br>cargo',
        styleNavBackgroundPosition: '-0px -0px',
        heading: 'Comfort<br/>Cargo',
        stylePoints: [{
            contentText: 'Hidden comfort waistband allows for 2&quot; of extra room'
        }, {
            contentText: 'Cargo pockets'
        }, {
            contentText: 'Sits naturally at the waist'
        }, {
            contentText: 'Eased through the seat and thigh, straight leg'
        } ]
    }));
    //Style: Men > Classic > Field Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'field-khaki',
        category: 'men',
        fit: 'classic',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=1357685&${cm_sp}field khaki',
        styleNavName: 'Field<br>Khaki',
        styleNavBackgroundPosition: '-140px -0px',
        heading: 'Field<br/>Khaki',
        stylePoints: [{
            contentText: 'Super-soft fabrication'
        }, {
            contentText: 'Buttoned coin pocket'
        }, {
            contentText: 'Sits naturally at the waist'
        },{
            contentText: 'Eased through the seat and thigh, straight leg'
        }]
    }));
    // Style: Men > Classic > Easy Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'easy-khaki',
        category: 'men',
        fit: 'classic',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=656181&${cm_sp}easy khaki',
        styleNavName: 'easy<br>khaki',
        styleNavBackgroundPosition: '-280px -0px',
        heading: 'Easy<br/>Khaki',
        stylePoints: [{
            contentText: 'Easy to wear — easy care fabric'
        }, {
            contentText: 'Moisture wicking and No Wrinkles<sup>&reg</sup> fabric'
        },{
            contentText: 'Sits naturally at the waist'
        },{
            contentText: 'Eased through the seat and thigh, straight leg'
        }],
        extraText: 'also<br>Available<br/>in Pleated',
        extraText2: 'pictured in<br/>Pleated',
        extraStyle: true
    }));
    // Style: Men > Classic > Signature Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'signature-khaki',
        category: 'men',
        fit: 'classic',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=354945&${cm_sp}signature khaki',
        styleNavName: 'signature<br>khaki',
        styleNavBackgroundPosition: '-420px -0px',
        heading: 'Signature<br />Khaki',
         stylePoints: [{
            contentText: 'Our bestselling wear-to-work pant'
        }, {
            contentText: 'No Wrinkles<sup>&reg;</sup> fabric and Individual Fit<sup>&reg;</sup> waistband'
        }, {
            contentText: 'Sits naturally at the waist'
        },{
            contentText: 'Eased through seat and thigh'
        }],
        extraText: 'Also<br>available<br/>in Pleated',
        extraText2: 'pictured in<br/>Pleated',
        extraStyle: true
    }));
    // Style: Men > Classic > Iron Free Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'new-iron-free-khaki',
        category: 'men',
        fit: 'classic',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=486784&${cm_sp}iron free khaki',
        styleNavName: 'new iron<br>free khaki',
        styleNavBackgroundPosition: '-580px -0px',
        heading: 'New<br />Iron Free<sup>&reg;</sup><br />Khaki',
        stylePoints: [{
            contentText: 'Iron Free<sup>&reg;</sup> Technology'
        }, {
            contentText: 'Flex comfort'
        }, {
            contentText: 'Sits naturally at the waist'
        },{
            contentText: 'Eased through the seat and thigh, straight leg'
        }],
        extraText: 'Also<br>available<br/>in Pleated',
        extraText2: 'pictured in<br/>Pleated',
        extraStyle: true
    }));
    /* BEGIN MEN > Relaxed */
    // Style: Men > Relaxed > Comfort Khaki
    app.collections.styles.add(new app.models.templates.Style({
        name: 'comfort-khaki',
        category: 'men',
        fit: 'relaxed',
        shopUrl: 'http://www.macys.com/catalog/product/index.ognc?ID=334957&${cm_sp}comfort khaki',
        styleNavName: 'comfort<br>khaki',
        styleNavBackgroundPosition: '-0px -0px',
        heading: 'Comfort<br/>Khaki',
        stylePoints: [{
            contentText: 'Built with performance, worn with style'
        },
        {
            contentText: 'No wrinkle, permanent crease'
        },
        {
            contentText: 'Sits naturally at the waist'
        }, {
            contentText: 'Full through the seat and thigh, straight leg'
        }],
        extraText: 'Also<br>available<br/>in Pleated',
        extraText2: 'pictured in<br/>Pleated',
        extraStyle: true
    }));
   
})(); // o.O