var innerhtml = `<header>
<h1>
    Results verification page Lei
</h1>
</header>
<div>
<label for="last-name">last name</label>
<span id="result-last"></span>
<label for="first-name">first name</label>
<span id="result-first"></span>
</div>
<div class="dropdown">
<label for="title">preferred title</label>
<span id="result-title"></span>
</div>
<div>
<label for="">height</label>
<span id="result-feet"></span>'
<span id="result-inches"></span>"
</div>
<div>
<label for="phone">phone</label>
<span id="result-phone"></span>
</div>
<div>
<label class="form-label" for="address">Address</label>
<span id="result-address"></span>
</div>
<div class="row">
<div class="col">
    <div class="form-outline">
        <label class="form-label" for="city">City</label>
        <span id="result-city"></span>
    </div>
</div>
<div class="col">
    <div class="form-outline">
        <label class="form-label" for="zip">Zip</label>
        <span id="result-zip"></span>
    </div>
</div>
</div>
<div>
<label for="services">services required</label>
<br>
<label><input type="checkbox" id="result-box-email" onclick="return false"> e-mail</label>
<label><input type="checkbox" id="result-box-phone" onclick="return false"> phone</label>
<label><input type="checkbox" id="result-facebook" onclick="return false"> Facebook</label>
<label><input type="checkbox" id="result-tweeter" onclick="return false"> Tweeter</label>
<label><input type="checkbox" id="result-surface-mail" onclick="return false"> surface mail</label>
<label><input type="checkbox" id="result-personal-visit" onclick="return false"> personal visit</label>
</div>
<div class="dropdown">
<label for="budget">monthly budget</label>
<span id="result-budget"></span>

</div>
<div class="form-outline">
<label class="form-label" for="typeEmail">Email</label>
<span id="result-email"></span>
</div>`;

function validateForm() {
    sessionStorage.lastName = document.getElementById("last").value;
    //regex (\D{1,40})
    sessionStorage.firstName = document.getElementById("first").value;
    //regex (\D{1,40})
    sessionStorage.title = document.getElementById("title").value;
    sessionStorage.feet = document.getElementById("feet").value;
    sessionStorage.inches = document.getElementById("inches").value;
    sessionStorage.phone = document.getElementById("phone").value;
    //regex \d{10}
    sessionStorage.address = document.getElementById("address").value;
    //regex .{1,40}
    sessionStorage.city = document.getElementById("city").value;
    //regex .{1,40}
    sessionStorage.zip = document.getElementById("zip").value;
    //regex \d{5}
    sessionStorage.boxEmail = document.getElementById("box-email").checked;
    sessionStorage.boxPhone = document.getElementById("box-phone").checked;
    sessionStorage.facebook = document.getElementById("facebook").checked;
    sessionStorage.tweeter = document.getElementById("tweeter").checked;
    sessionStorage.surfaceMail = document.getElementById("surface-mail").checked;
    sessionStorage.personalVisit = document.getElementById("personal-visit").checked;
    sessionStorage.budget = document.getElementById("budget").value;
    sessionStorage.email = document.getElementById("email").value;
    console.log("tweeter: " + sessionStorage.tweeter);

    document.getElementById("append").innerHTML = innerhtml;

    document.getElementById("result-last").innerHTML = sessionStorage.lastName;
    document.getElementById("result-first").innerHTML = sessionStorage.firstName;
    document.getElementById("result-title").innerHTML = sessionStorage.title;
    document.getElementById("result-feet").innerHTML = sessionStorage.feet;
    document.getElementById("result-inches").innerHTML = sessionStorage.inches;
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
    return false;
}