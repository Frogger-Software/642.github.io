var innerhtml = `<header>
<h1>
    Results verification page Lei
</h1>
</header>
<div>
<label for="last-name">last name</label>
<span id="result-last"></span>
<script>
</script>
<label for="first-name">first name</label>
<span id="result-first"></span>
<script>
</script>
</div>
<div class="dropdown">
<label for="title">preferred title</label>
</div>
<div>
<label for="">height</label>
'
"
</div>
<div>
<label for="phone">phone</label>
</div>
<div>
<label class="form-label" for="Address">Address</label>
</div>
<div class="row">
<div class="col">
    <div class="form-outline">
        <label class="form-label" for="city">City</label>
    </div>
</div>
<div class="col">
    <div class="form-outline">
        <label class="form-label" for="zip">Zip</label>
    </div>
</div>
</div>
<div>
<label for="services">services required</label>
<br>
e-mail<input type="checkbox">
phone<input type="checkbox">
Facebook<input type="checkbox">
Tweeter<input type="checkbox">
surface mail<input type="checkbox">
personal visit<input type="checkbox">
</div>
<div class="dropdown">
<label for="budget">monthly budget</label>

</div>
<div class="form-outline">
<label class="form-label" for="typeEmail">Email</label>
</div>`;

function validateForm() {
    var lastname = document.getElementById("last");
    sessionStorage.lastName = document.getElementById("last");
    sessionStorage.firstName = document.getElementById("first");
    sessionStorage.title = document.getElementById("title");
    sessionStorage.feet = document.getElementById("feet");
    sessionStorage.inches = document.getElementById("inches");

    document.getElementById("append").innerHTML = innerhtml;

    console.log("var: " + lastname);
    console.log("storage: " + sessionStorage.lastName);
    
    document.getElementById("result-last").innerHTML = sessionStorage.lastName;
    
    document.getElementById("result-first").innerHTML = sessionStorage.firstName;
}