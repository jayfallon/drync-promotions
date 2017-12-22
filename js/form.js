(function(){
    
    // retrieve old Promotions and populate array, otherwise create empty
    var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
    // console.log(oldPromotions);
	
    function newPromotion( prName, prCode, prStatus, prAmount, prType, minPurch, saleItems, perStart, perStop, priceMin, priceMax, filType, filStyle, filRegion ) {
        this.prName = prName;
        this.prCode = prCode;
        this.prStatus = prStatus;
        this.prAmount = prAmount;
        this.prType = prType;
        this.minPurch = minPurch;
        this.saleItems = saleItems;
        this.perStart = perStart;
        this.perStop = perStop;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
        this.filType = filType;
        this.filStyle = filStyle;
        this.filRegion = filRegion;
    }

    function submitForm() {
        location.assign("view.html");
    }

    // clear the form values and make ready to start over
    function clearForm() {
        document.getElementById("prName").value = '';
        document.getElementById("prCode").value = '';
        document.getElementById("prStatus").value = '';
        document.getElementById("prAmount").value = '';
        document.getElementById("prType").value = '';
        document.getElementById("minPurch").value = '';
        document.getElementById("saleItems").value = '';
        document.getElementById("perStart").value = '';
        document.getElementById("perStop").value = '';
        document.getElementById("priceMin").value = '';
        document.getElementById("priceMax").value = '';
        document.getElementById("filType").value = '';
        document.getElementById("filStyle").value = '';
        document.getElementById("filRegion").value = '';
    }

    var button = document.getElementById("promoSave");

    button.onclick = function(){
            
        //Get values from the web form
        var prName = document.getElementById("prName").value;
        var prCode = document.getElementById("prCode").value;
        var prStatus = document.getElementById("prStatus").value;
        var prAmount = document.getElementById("prAmount").value;
        var prType = document.getElementById("prType").value;
        var minPurch = document.getElementById("minPurch").value;
        var saleItems = document.getElementById("saleItems").value;
        var perStart = document.getElementById("perStart").value;
        var perStop = document.getElementById("perStop").value;
        var priceMin = document.getElementById("priceMin").value;
        var priceMax = document.getElementById("priceMax").value;
        var filStyle = document.getElementById("filStyle").value;
        var filType = document.getElementById("filType").value;
        var filRegion = document.getElementById("filRegion").value;
        
        // post any new form data to the constructor object
        var myNewPromotion = new newPromotion( prName, prCode, prStatus, prAmount, prType, minPurch, saleItems, perStart, perStop, priceMin, priceMax, filType, filStyle, filRegion );
        
        // append myNewPromotion to existing array
        oldPromotions.push(myNewPromotion);

        // persist your newly appended array to a localStorage object
        localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
        // submit to view page
        submitForm();
        // clear the form
        clearForm();
        // stop the form behavior
        return false;
    }

})();
