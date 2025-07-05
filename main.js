

  function sendEmail() {
   Email.send({
    Host: "smtp.elasticemail.com",
    Username: "atefyuossef@gmail.com",
    Password: "EBABC602EC5C13AF84FBA61BFFEC4E4727D4",
    To: 'atefyuossef@gmail.com',
    From: "atefyuossef@gmail.com",
    Subject: "تمت عملية الشراء",
    Body: "name: " + document.getElementById('name').value +
     "<br> last name: " + document.getElementById('Your last name').value

     +
     "<br> phone: " + document.getElementById('Phone').value

     
     // + "<br> المحافظة: " + document.getElementById('المحافظة').value

     +"<br> المدينة/المنطقة: " + document.getElementById('cy').value

     +
     "<br> الحي السكني: " + document.getElementById('hisa').value

     +
     "<br> اسم الشارع: " + document.getElementById('name strat').value

     +
     "<br> اسم/رقم المبنى: " + document.getElementById('nombre city').value

     +
     "<br> اقرب معلم: " + document.getElementById('The nearest teacher').value +
     "<br> الموقع الجغرافي الدقيق: " + document.getElementById('location').textContent,
   }).then(

   );
  }
  function getLocation() {
   navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById("location").innerHTML = position.coords.latitude + ", " + position.coords.longitude;
   });
  }

  function thr() {
   window.y.style.display = "none";
   window.masseg.style.display = "block";
  }

  function text() {
   var name = document.getElementById('name').value
   document.getElementById('masseg-h1').innerHTML = "Hello, " + name;
  };
