var innerhtml = `<header>
<h1>
    Results verification page Lei
</h1>
</header>
<div>
<label class="form-label" for="last-name"><strong>Last Name</strong> </label>
<span id="result-last"></span>
<label class="form-label" for="first-name"><strong>First Name</strong> </label>
<span id="result-first"></span>
</div>
<div class="dropdown">
<label class="form-label" for="title"><strong>Preferred Title</strong> </label>
<span id="result-title"></span>
</div>
<div>
<label class="form-label" for="height"><strong>Height</strong> </label>
<span id="result-feet"></span>'
<span id="result-inches"></span>"
</div>
<div>
<label class="form-label" for="phone"><strong>Phone </strong> </label>
<span id="result-phone"></span>
</div>
<div>
<label class="form-label" for="address"><strong>Addreses</strong> </label>
<span id="result-address"></span>
</div>
<div>
<label class="form-label" for="city"><strong>City</strong> </label>
<span id="result-city"></span>
<label class="form-label" for="zip"><strong>Zip</strong> </label>
<span id="result-zip"></span>
</div>
<!-- <div id="map">
</div> -->
<div>
<label class="form-label" for="services"><strong>Services Required</strong> </label>
<br>
<label><input type="checkbox" id="result-box-email" onclick="return false"> e-mail</label>
<label><input type="checkbox" id="result-box-phone" onclick="return false"> phone</label>
<label><input type="checkbox" id="result-facebook" onclick="return false"> Facebook</label>
<label><input type="checkbox" id="result-tweeter" onclick="return false"> Tweeter</label>
<label><input type="checkbox" id="result-surface-mail" onclick="return false"> surface mail</label>
<label><input type="checkbox" id="result-personal-visit" onclick="return false"> personal visit</label>
</div>
<div class="dropdown">
<label class="form-label" for="budget"><strong>Monthly Budget</strong> </label>
<span id="result-budget"></span>

</div>
<div class="form-outline">
<label class="form-label" class="form-label" for="typeEmail"><strong>Email</strong> </label>
<span id="result-email"></span>
</div>`;

function validateForm() {
    var noResults = false;
    sessionStorage.lastName = document.getElementById("last").value;
    if (!(/^\D{1,40}$/.test(sessionStorage.lastName))) {
        document.getElementById("last-validate").innerHTML = "name must be 1-40 characters";
        noResults = true;
    }
    sessionStorage.firstName = document.getElementById("first").value;
    if (!(/^\D{1,40}$/.test(sessionStorage.firstName))) {
        document.getElementById("first-validate").innerHTML = "name must be 1-40 characters";
        noResults = true;
    }
    sessionStorage.title = document.getElementById("title").value;
    sessionStorage.feet = document.getElementById("feet").value;
    sessionStorage.inches = document.getElementById("inches").value;
    sessionStorage.phone = document.getElementById("phone").value;
    if (!(/^\d{10}$/.test(sessionStorage.phone))) {
        document.getElementById("phone-validate").innerHTML = "phone must be 10 digits";
        noResults = true;
    }
    sessionStorage.address = document.getElementById("address").value;
    if (!(/^.{1,40}$/.test(sessionStorage.address))) {
        document.getElementById("address-validate").innerHTML = "address must be 1-40 characters";
        noResults = true;
    }
    sessionStorage.city = document.getElementById("city").value;
    if (!(/^.{1,40}$/.test(sessionStorage.city))) {
        document.getElementById("city-validate").innerHTML = "city must be 1-40 characters";
        noResults = true;
    }
    sessionStorage.zip = document.getElementById("zip").value;
    if (!(/^\d{5}$/.test(sessionStorage.zip))) {
        document.getElementById("zip-validate").innerHTML = "zip must be 5 digits";
        noResults = true;
    }
    if (document.getElementById("box-email").checked == true) {
        sessionStorage.boxEmail = true;
    }
    if (document.getElementById("box-phone").checked == true) {
        sessionStorage.boxPhone = true;
    }
    if (document.getElementById("facebook").checked == true) {
        sessionStorage.facebook = true;
    }
    if (document.getElementById("tweeter").checked == true) {
        sessionStorage.tweeter = true;
    }
    if (document.getElementById("surface-mail").checked == true) {
        sessionStorage.surfaceMail = true;
    }
    if (document.getElementById("personal-visit").checked == true) {
        sessionStorage.personalVisit = true;
    }

    sessionStorage.budget = document.getElementById("budget").value;
    sessionStorage.email = document.getElementById("email").value;
    if(noResults == true){
        return;
    }

    document.getElementById("append").innerHTML = innerhtml;

    document.getElementById("result-last").innerHTML = sessionStorage.lastName;
    document.getElementById("result-first").innerHTML = sessionStorage.firstName;
    document.getElementById("result-title").innerHTML = sessionStorage.title;
    if (!sessionStorage.feet && !sessionStorage.inches) {
        document.getElementById("result-feet").innerHTML = "none"
    } else {
        document.getElementById("result-feet").innerHTML = sessionStorage.feet;
        document.getElementById("result-inches").innerHTML = sessionStorage.inches;
    }
    document.getElementById("result-phone").innerHTML = sessionStorage.phone;
    document.getElementById("result-address").innerHTML = sessionStorage.address;
    document.getElementById("result-city").innerHTML = sessionStorage.city;
    document.getElementById("result-zip").innerHTML = sessionStorage.zip;
    document.getElementById("result-box-email").checked = sessionStorage.boxEmail;
    document.getElementById("result-box-phone").checked = sessionStorage.boxPhone;
    document.getElementById("result-facebook").checked = sessionStorage.facebook;
    document.getElementById("result-tweeter").checked = sessionStorage.tweeter;
    document.getElementById("result-surface-mail").checked = sessionStorage.surfaceMail;
    document.getElementById("result-personal-visit").checked = sessionStorage.personalVisit;
    document.getElementById("result-budget").innerHTML = sessionStorage.budget;
    document.getElementById("result-email").innerHTML = sessionStorage.email;

    document.getElementById('append').scrollIntoView();
    sessionStorage.clear();
}