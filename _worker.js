addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    const path = url.pathname;
  
    let responseHtml = '';
  
    // تعیین محتوای صفحه بر اساس URL
    if (path === "/") {
      responseHtml = `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Majic side</title>
      <style>
            .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }    .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }
            .father1{
                background-color: rgba(2, 2, 244, 0.589);
                text-align: left;
                padding-left: 25px;
                padding-right: 25px;
                margin: 3%;
                color: white;
                border-radius: 19px;
                display: flex;
                align-items: center;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 400px 250px white;
            }
            .son{
                flex:1;
                text-align: right;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 450px 250px white;

            }
            .son a{
                text-decoration: none;
                color: inherit;
                font-weight: 300;
                margin-left: 25px;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 500px 250px white;

            }
            .son2{
                text-align: center;
                font-size: 80px;
                font-family:Arial, Helvetica, sans-serif;
                margin-top: 80px;
                margin-bottom: 0px;
                box-shadow: 0px 550px 250px white;
            }
            .son3{
                text-align: center;
                font-size: 38px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color:rgba(30, 30, 30, 0.858);
                font-weight: 100;
                box-shadow: 0px 600px 250px white;

            }
            .son4{
                text-align: center;
                color: whitesmoke;
                background-color: rgba(2, 2, 244, 0.589);
                margin-left: 32%;
                margin-right: 32%;
                padding-left: 14px;
                padding-right: 14px;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 12px;
                box-shadow: 0px 650px 250px white;

            }
            .son4 a{
                text-decoration: none;
                color: inherit;
            }
            .son5{
                text-align: center;
                color: rgba(2, 2, 244, 0.589);
                margin-top: 155px;
                font-size: 45px;
                box-shadow: 0px 700px 250px white;
            }

      
      
      
      </style>
      </head>
      
      <body class="father">
          <div class="father1">
              <h1>Header</h1>
              <h2 class="son">
                  <a href="/">Home</a> 
                  <a href="son2.html">About</a> 
                  <a href="son3.html">Contact</a>
              </h2>
              
          </div>
          <div class="father2">
              <h1 class="son2">Landing Page</h1>
              <h3 class="son3">Welcome to our website</h3>
          </div>
          <div class="father3">
              <h1 class="son4">
                  <a href="main.html">Get Started</a>
              </h1>
          </div>
          <div class="father3">
              <h1 class="son5">POWERBY HTML & CSS & JAVASCRIPT</h1>
          </div>
        
        
      </body>
      
      </html>
      `;
    } else if (path === "/son3.html") {
      responseHtml = `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Majic side</title>
      <style>
            .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }    .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }
            .father1{
                background-color: rgba(2, 2, 244, 0.589);
                text-align: left;
                padding-left: 25px;
                padding-right: 25px;
                margin: 3%;
                color: white;
                border-radius: 19px;
                display: flex;
                align-items: center;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 400px 250px white;
            }
            .son{
                flex:1;
                text-align: right;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 450px 250px white;

            }
            .son a{
                text-decoration: none;
                color: inherit;
                font-weight: 300;
                margin-left: 25px;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 500px 250px white;

            }
            .son2{
                text-align: center;
                font-size: 80px;
                font-family:Arial, Helvetica, sans-serif;
                margin-top: 80px;
                margin-bottom: 0px;
                box-shadow: 0px 550px 250px white;
            }
            .son3{
                text-align: center;
                font-size: 38px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color:rgba(30, 30, 30, 0.858);
                font-weight: 100;
                box-shadow: 0px 600px 250px white;

            }
            .son4{
                text-align: center;
                color: whitesmoke;
                background-color: rgba(2, 2, 244, 0.589);
                margin-left: 32%;
                margin-right: 32%;
                padding-left: 14px;
                padding-right: 14px;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 12px;
                box-shadow: 0px 650px 250px white;

            }
            .son4 a{
                text-decoration: none;
                color: inherit;
            }
            .son5{
                text-align: center;
                color: rgba(2, 2, 244, 0.589);
                margin-top: 155px;
                font-size: 45px;
                box-shadow: 0px 700px 250px white;
            }

      
      
      
      </style>
      </head>
      
      <body class="father">
          <div class="father1">
              <h1>Header</h1>
              <h2 class="son">
                  <a href="/">Home</a> 
                  <a href="son2.html">About</a> 
                  <a href="son3.html">Contact</a>
              </h2>
              
          </div>
          <div class="father2">
              <h1 class="son2">Contact Me!</h1>
              <h3 class="son3">MY Email: amyrymhmdmhdy388@gmail.com
                               MY Phon Number Telgram : +919568398421
              </h3>
          </div>
        
      </body>
      
      </html>
      `;
    } else if (path === "/main.html") {
      responseHtml = `
        <!DOCTYPE html>
        <html lang="en">
  
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Majic side</title>
        <style>
            .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }    .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }
            .father1{
                background-color: rgba(2, 2, 244, 0.589);
                text-align: left;
                padding-left: 25px;
                padding-right: 25px;
                margin: 3%;
                color: white;
                border-radius: 19px;
                display: flex;
                align-items: center;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 400px 250px white;
            }
            .son{
                flex:1;
                text-align: right;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 450px 250px white;

            }
            .son a{
                text-decoration: none;
                color: inherit;
                font-weight: 300;
                margin-left: 25px;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 500px 250px white;

            }
            .son2{
                text-align: center;
                font-size: 80px;
                font-family:Arial, Helvetica, sans-serif;
                margin-top: 80px;
                margin-bottom: 0px;
                box-shadow: 0px 550px 250px white;
            }
            .son3{
                text-align: center;
                font-size: 38px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color:rgba(30, 30, 30, 0.858);
                font-weight: 100;
                box-shadow: 0px 600px 250px white;

            }
            .son4{
                text-align: center;
                color: whitesmoke;
                background-color: rgba(2, 2, 244, 0.589);
                margin-left: 32%;
                margin-right: 32%;
                padding-left: 14px;
                padding-right: 14px;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 12px;
                box-shadow: 0px 650px 250px white;

            }
            .son4 a{
                text-decoration: none;
                color: inherit;
            }
            .son5{
                text-align: center;
                color: rgba(2, 2, 244, 0.589);
                margin-top: 155px;
                font-size: 45px;
                box-shadow: 0px 700px 250px white;
            }

      
      
      
      </style>
        </head>
          
        <body class="father">
            <div class="father1">
                <h1>Header</h1>
                <h2 class="son">
                    <a href="/">Home</a> 
                    <a href="son2.html">About</a> 
                    <a href="son3.html">Contact</a>
                </h2>
  
            </div>
            <div class="father2">
                <h1 class="son2">What's work this pages?</h1>
                <h3 class="son3">This is page in the download program app MathVerse and start MATH in your computer!</h3>
            </div>
            <div class="father3">
                <h1 class="son4">
                    <a href="MathVerse 3.rar">Get the application!</a>
                </h1>
            </div>
            <div class="father3">
                <h1 class="son5">POWERBY HTML & CSS & JAVASCRIPT</h1>
            </div>
          
          
        </body>
          
        </html>
      `;
    } else if (path === "/son2.html") {
      responseHtml = `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Majic side</title>
      <style>
            .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }    .father{
                background-color: rgba(87, 173, 239, 0.756);
                font-family:Arial, Helvetica, sans-serif;

            }
            .father1{
                background-color: rgba(2, 2, 244, 0.589);
                text-align: left;
                padding-left: 25px;
                padding-right: 25px;
                margin: 3%;
                color: white;
                border-radius: 19px;
                display: flex;
                align-items: center;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 400px 250px white;
            }
            .son{
                flex:1;
                text-align: right;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 450px 250px white;

            }
            .son a{
                text-decoration: none;
                color: inherit;
                font-weight: 300;
                margin-left: 25px;
                font-family:Arial, Helvetica, sans-serif;
                box-shadow: 0px 500px 250px white;

            }
            .son2{
                text-align: center;
                font-size: 80px;
                font-family:Arial, Helvetica, sans-serif;
                margin-top: 80px;
                margin-bottom: 0px;
                box-shadow: 0px 550px 250px white;
            }
            .son3{
                text-align: center;
                font-size: 38px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color:rgba(30, 30, 30, 0.858);
                font-weight: 100;
                box-shadow: 0px 600px 250px white;

            }
            .son4{
                text-align: center;
                color: whitesmoke;
                background-color: rgba(2, 2, 244, 0.589);
                margin-left: 32%;
                margin-right: 32%;
                padding-left: 14px;
                padding-right: 14px;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 12px;
                box-shadow: 0px 650px 250px white;

            }
            .son4 a{
                text-decoration: none;
                color: inherit;
            }
            .son5{
                text-align: center;
                color: rgba(2, 2, 244, 0.589);
                margin-top: 155px;
                font-size: 45px;
                box-shadow: 0px 700px 250px white;
            }

      
      
      
      </style>
      </head>
      
      <body class="father">
          <div class="father1">
              <h1>Header</h1>
              <h2 class="son">
                  <a href="/">Home</a> 
                  <a href="son2.html">About</a> 
                  <a href="son3.html">Contact</a>
              </h2>
              
          </div>
          <div class="father2">
              <h1 class="son2">About Me</h1>
              <h3 class="son3">A novice web and mobile and computer application programmer
                                A technology enthusiast and a novice trader</h3>
          </div>
          <div class="father3">
              <h1 class="son4">
                  <a href="https://github.com/MohamadMahdiAmiRi">See my GitHub</a>
              </h1>
          </div>
        
      </body>
      
      </html>
      `;
    } else {
      responseHtml = `
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
      `;
    }
    
    // ارسال پاسخ با محتوای مناسب
    event.respondWith(
      new Response(responseHtml, {
        headers: { "Content-Type": "text/html" }
      })
    );
  });
  