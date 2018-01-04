(function(){

    $('[data-toggle="datepicker"]').datepicker({
        format: 'm/d/yy',
        autoHide: true,
        zIndex: 2048,
    });

    // retrieve old Promotions and populate array, otherwise create empty
    var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];

    var filTypeVal = '';
    var filStyleVal = '';
    var filRegionVal = '';

    var filTypeVal = '';
    var filStyleVal = '';
    var filRegionVal = '';

    var stores = ['Nantasket Junction', 'East Templeton', 'Colrain', 'Dingley Dell', 'Ocean Grove', 'Needham Junction', 'Alms House', 'Lowell', 'Truro', 'Marlboro', 'Fort Warren', 'Camp Marion White', 'Mahkeenac Heights', 'North Hanson', 'Milton', 'Milton Upper Mills', 'West Boxford', 'Shallow Pond', 'Summit Grove', 'Fort Lucas', 'Camp Sayre', 'Grafton', 'Stoughton Junction', 'Williamsville', 'East Sharon', 'Sunnyside', 'Newton Corner', 'Mill Valley', 'Mercer Square', 'Trots Hills', 'Westport Point', 'Cottage Park', 'Willow Lane Adult Trailer Park', 'Sissons Corner', 'Marshfield Hills', 'Oklahoma Heights', 'Dunstable', 'Beach Park', 'East Blackstone', 'Morseville'
    ]

    function populateStores(array) {
        allStores = document.getElementById('all-stores-wrapper');
        for(e in array) {
            storeData = document.createElement('div');
            storeData.setAttribute('class', 'all-stores-data');
            storeInp = document.createElement('input');
            storeInp.setAttribute('type', 'checkbox');
            storeInp.setAttribute('name', e);
            storeInp.checked = true;
            storeLabel = document.createElement('label');
            storeLabel.setAttribute('for', e);
            storeLabelTx = document.createTextNode(array[e]);
            storeLabel.appendChild(storeLabelTx);
            storeData.appendChild(storeInp);
            storeData.appendChild(storeLabel);
            allStores.appendChild(storeData);
        }
    }

    populateStores(stores);

    $('span.store-link').click(function(){
        var link = $(this);
        var view = $('#all-stores-view');
        $('#all-stores-view').slideToggle(function() {
            if ($(this).is(':visible')) {
                 link.text('Hide All');
            } else {
                 link.text('Show All');
            }
        });
    });

    function newPromotion( prNumber, prName, prCode, prStatus, prAmount, prType, minPurch, saleItems, perStart, perStop, priceMin, priceMax, filType, filStyle, filRegion, prMessage ) {
        this.prNumber = prNumber;
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
        this.prMessage = prMessage;
    }

    prStatusVal = 'active';

    prStatus.addEventListener('click', function(){
        var status = document.getElementById('status');
        if (this.checked == true) {
            prStatusVal = 'active';
            status.innerHTML = "Active";
        } else if (this.checked != true){
            prStatusVal = 'inactive';
            status.innerHTML = "Inactive";
        }
    })

    saleItemsVal = 'included';

    saleItems.addEventListener('change', function(){
        var status = document.getElementById('saleLabel');
        if (this.checked == true) {
            saleItemsVal = "included";
            status.innerHTML = "Included";
        } else if (this.checked != true){
            saleItemsVal = "excluded";
            status.innerHTML = "Excluded";
        }
    })

    var ID = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return Math.random().toString(36).substr(2, 9);
    };

    var button = document.getElementById("promoSave");

    function submitForm(prNumber) {
        location.assign("view.html?" + prNumber);
    }

    var filTypeSel = document.getElementById('filTypeSel');
    filTypeSel.addEventListener('change', function(){
        if (this.value == 'wine') {
            filStyleH = document.getElementById('filStyleH');
            filStyleSp = document.createElement('span');
            filStyleTx = document.createTextNode('Style')
            filStyleSp.appendChild(filStyleTx);
            filStyleH.appendChild(filStyleSp);
            filRegionH = document.getElementById('filRegionH');
            filRegionSp = document.createElement('span');
            filRegionTx = document.createTextNode('Region')
            filRegionSp.appendChild(filRegionTx);
            filRegionH.appendChild(filRegionSp);
            filStyleW = document.getElementById('filStyleW');
            filStyleSe = document.createElement('select');
            filStyleSe.setAttribute('id', 'filStyle');

            var styles = [
                {'value': '', 'name': 'Choose Style'},
                {'value': 'red', 'name': 'Red'},
                {'value': 'white', 'name': 'White'},
                {'value': 'rosé', 'name': 'Rosé'},
                {'value': 'sparkling', 'name': 'Sparkling'}
            ]
            for (var i = 0; i < styles.length; i++) {
                filStyleO0 = document.createElement('option');
                filStyleO0.setAttribute('value', styles[i].value);
                filStyleO0Tx = document.createTextNode(styles[i].name);
                filStyleO0.appendChild(filStyleO0Tx);
                filStyleSe.appendChild(filStyleO0);
            }
            filStyleW.appendChild(filStyleSe);

            filRegionW = document.getElementById('filRegionW');
            filRegionSe = document.createElement('select');
            filRegionSe.setAttribute('id', 'filRegion');

            var regions = [
                {'value': '', 'name': 'Choose Region'},
                {'value': 'Argentinian', 'name': 'Argentina'},
                {'value': 'Australian', 'name': 'Australia'},
                {'value': 'French', 'name': 'France'},
                {'value': 'Italian', 'name': 'Italy'},
                {'value': 'Spanish', 'name': 'Spain'},
            ]
            for (var i = 0; i < regions.length; i++) {
                filRegionO0 = document.createElement('option');
                filRegionO0.setAttribute('value', regions[i].value);
                filRegion00Tx = document.createTextNode(regions[i].name);
                filRegionO0.appendChild(filRegion00Tx);
                filRegionSe.appendChild(filRegionO0);
            }
            filRegionW.appendChild(filRegionSe);
            filStyle.addEventListener('change', function(){
                filStyleVal = this.value;
            });
            filRegion.addEventListener('change', function(){
                filRegionVal = this.value;
            });
        } else {
            while (filStyleH.hasChildNodes()) {
                filStyleH.removeChild(filStyleH.firstChild);
            }
            while (filStyleW.hasChildNodes()) {
                filStyleW.removeChild(filStyleW.firstChild);
            }
            while (filRegionH.hasChildNodes()) {
                filRegionH.removeChild(filRegionH.firstChild);
            }
            while (filRegionW.hasChildNodes()) {
                filRegionW.removeChild(filRegionW.firstChild);
            }
        }
        filTypeVal = this.value;
    });

    button.onclick = function(){
        //Generate unique url
        var prNumber = ID();
        //Get values from the web form
        var prName = document.getElementById("prName").value;
        if (!prName) {
            prName = "Temporary Promotion " + prNumber;
        }
        var prCode = document.getElementById("prCode").value;
        var prStatus = prStatusVal;
        var prAmount = document.getElementById("prAmount").value;
        var prType = document.getElementById("prType").value;
        var minPurch = document.getElementById("minPurch").value;
        var saleItems = saleItemsVal;
        var perStart = document.getElementById("perStart").value;
        var perStop = document.getElementById("perStop").value;
        var priceMin = document.getElementById("priceMin").value;
        var priceMax = document.getElementById("priceMax").value;
        var filStyle = filStyleVal;
        var filType = filTypeVal;
        var filRegion = filRegionVal;
        var prMessage = 'Save ' + prAmount + ' ' + prType + ' on ' + filRegion + ' ' + filStyle + ' ' + filType + ' from ' + perStart + ' to ' + perStop + ' when you spend $' + minPurch + ' or more.';

        // post any new form data to the constructor object
        var myNewPromotion = new newPromotion( prNumber, prName, prCode, prStatus, prAmount, prType, minPurch, saleItems, perStart, perStop, priceMin, priceMax, filType, filStyle, filRegion, prMessage );

        // append myNewPromotion to existing array
        oldPromotions.push(myNewPromotion);

        // persist your newly appended array to a localStorage object
        localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
        // submit to view page
        submitForm(prNumber);
        // clear the form
        // clearForm();
        // stop the form behavior
        return false;
    }

    window.onerror = function(msg, url, linenumber) {
        alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
        return true;
    }

})();
