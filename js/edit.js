(function(){

  // retrieve old Promotions and populate array, otherwise create empty
  var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  console.log(oldPromotions);

  var filTypeVal = '';
  var filStyleVal = '';
  var filRegionVal = '';

  var stores = ['Nantasket Junction', 
      'East Templeton', 
      'Colrain', 
      'Dingley Dell', 
      'Ocean Grove', 
      'Needham Junction', 
      'Alms House', 
      'Lowell', 
      'Truro', 
      'Marlboro', 
      'Fort Warren', 
      'Camp Marion White', 
      'Mahkeenac Heights', 
      'North Hanson', 
      'Milton', 
      'Milton Upper Mills', 
      'West Boxford', 
      'Shallow Pond', 
      'Summit Grove', 
      'Fort Lucas', 
      'Camp Sayre', 
      'Grafton', 
      'Stoughton Junction', 
      'Williamsville', 
      'East Sharon', 
      'Sunnyside', 
      'Newton Corner', 
      'Mill Valley', 
      'Mercer Square', 
      'Trots Hills', 
      'Westport Point', 
      'Cottage Park', 
      'Willow Lane Adult Trailer Park', 
      'Sissons Corner', 
      'Marshfield Hills', 
      'Oklahoma Heights', 
      'Dunstable', 
      'Beach Park', 
      'East Blackstone', 
      'Morseville'
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
               link.text('See All');
          }
      });
  });

  var element = document.getElementById('content-bg');
  var prName = document.getElementById('prName');
  var prCode = document.getElementById('prCode');
  var prStatus = document.getElementById('prStatus');
  var prAmount = document.getElementById('prAmount');
  var prType = document.getElementById("prType");
  var minPurch = document.getElementById("minPurch");
  var saleItems = document.getElementById("saleItems");
  var perStart = document.getElementById("perStart");
  var perStop = document.getElementById("perStop");
  var priceMin = document.getElementById("priceMin");
  var priceMax = document.getElementById("priceMax");
  var filType = document.getElementById("filTypeSel");
  var prMessage = document.getElementById("prMessage");
  var prStatusW = document.getElementById("prStatusW");
  var saleItemsIn = document.getElementById("saleItemsIn");
  var saleLabel = document.getElementById("saleLabel");
  var prStatusIn = document.getElementById("prStatusIn");
  var status = document.getElementById("status");
  var saleItemsVal = '';

  function writeRowToPage(dataObject) {
    prName.value = dataObject.prName;
    prCode.value = dataObject.prCode;
    prStatusIn.setAttribute('data', [i]);
    if (dataObject.prStatus == "active") {
      prStatusIn.checked = true;
      status.innerHTML = "Active";
    } else {
      status.innerHTML = "Inactive";
    }

    prAmount.value = dataObject.prAmount;
    prType.value = dataObject.prType;
    minPurch.value = dataObject.minPurch;
    if (dataObject.saleItems == "included") {
      saleItemsIn.checked = true;
      saleLabel.innerHTML = "Included";
    } else {
      saleItemsIn.checked = false;
      saleLabel.innerHTML = "Excluded";
    }
    perStart.value = dataObject.perStart;
    perStop.value = dataObject.perStop;
    priceMin.value = dataObject.priceMin;
    priceMax.value = dataObject.priceMax;
    filType.value = dataObject.filType;
    if (filType.value == 'wine') {
      wineSelects(oldPromotions[i]);
    }
    prMessage.value = dataObject.prMessage;
  }

  function wineSelects(dataObject) {
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
    filStyleSe.setAttribute('id', 'filStyleSel');

    var styles = [
        {'value': '', 'name': 'Choose Style'},
        {'value': 'red', 'name': 'Red'},
        {'value': 'white', 'name': 'White'},
        {'value': 'rose', 'name': 'Rosé'},
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
    var filStyle = document.getElementById('filStyleSel');
    filStyle.value = dataObject.filStyle;

    filRegionW = document.getElementById('filRegionW');
    filRegionSe = document.createElement('select');
    filRegionSe.setAttribute('id', 'filRegionSel');

    var regions = [
        {'value': '', 'name': 'Choose Region'},
        {'value': 'argentina', 'name': 'Argentina'},
        {'value': 'australia', 'name': 'Australia'},
        {'value': 'france', 'name': 'France'},
        {'value': 'italy', 'name': 'Italy'},
        {'value': 'spain', 'name': 'Spain'},
    ]
    for (var i = 0; i < regions.length; i++) {
        filRegionO0 = document.createElement('option');
        filRegionO0.setAttribute('value', regions[i].value);
        filRegion00Tx = document.createTextNode(regions[i].name);
        filRegionO0.appendChild(filRegion00Tx);
        filRegionSe.appendChild(filRegionO0);
    }
    filRegionW.appendChild(filRegionSe);
    var filRegion = document.getElementById('filRegionSel');
    filRegion.value = dataObject.filRegion;
  }

  var urlParams = new URLSearchParams(window.location.search);

  var entries = urlParams.entries();
  for(pair of entries) {
    var chisme = pair[0];
  }

  var currentElem = '';

  //populate promotion from old promotions
  // if old promotions exists
  if (oldPromotions != null) {
    for (var i = 0; i < oldPromotions.length; i++) {
      for (prNumber in oldPromotions[i]) {
        if (oldPromotions[i][prNumber] == chisme) {
          writeRowToPage(oldPromotions[i]);
          currentElem = oldPromotions[i];
        }
      }
    }
  }

  $('[data-toggle="datepicker"]').datepicker({
      format: 'm/d/yy',
      autoHide: true,
      zIndex: 2048,
  });

  var button = document.getElementById("promoSave");
  // need to find and fix this
  console.log(prNumber);
  function submitForm() {
    currentElem.prName = document.getElementById("prName").value;
    currentElem.prCode = document.getElementById("prCode").value;
    currentElem.prAmount = document.getElementById("prAmount").value;
    currentElem.prType = document.getElementById("prType").value;
    currentElem.minPurch = document.getElementById("minPurch").value;
    currentElem.saleItems = saleItemsVal;
    currentElem.perStart = document.getElementById("perStart").value;
    currentElem.perStop = document.getElementById("perStop").value;
    currentElem.priceMin = document.getElementById("priceMin").value;
    currentElem.priceMax = document.getElementById("priceMax").value;
    var ft = document.getElementById("filTypeSel");
    currentElem.filType = ft.options[ft.selectedIndex].value;
    if (currentElem.filType == "wine") {
      var fs = document.getElementById("filStyleSel");
      currentElem.filStyle = fs.options[fs.selectedIndex].value;
      var fr = document.getElementById("filRegionSel");
      currentElem.filRegion = fr.options[fr.selectedIndex].value;
    } else {
      currentElem.filStyle = '';
      currentElem.filRegion = '';
    }
    currentElem.prMessage = document.getElementById("prMessage").value;

    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    location.assign("view.html?" + chisme);
  }

  button.onclick = function(){
    // submit to view page
    submitForm();
    // stop the form behavior
    return false;
  }

  var deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', function(){
      function findUrl(promo) {
        return promo.prNumber === chisme;
      }
      oldPromotions.splice(oldPromotions.findIndex(findUrl), 1);
      localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
      location.assign("/");
  });

  saleItemsIn.addEventListener('change', function(){
      var status = document.getElementById('saleLabel');
      if (this.checked == true) {
          saleItemsVal = "included";
          status.innerHTML = "Included";
      } else if (this.checked != true){
          saleItemsVal = "excluded";
          status.innerHTML = "Excluded";
      }
  })

  function statusChange() {
    var status = this.getAttribute("data");
    if (oldPromotions[status].prStatus == "active") {
      oldPromotions[status].prStatus = "inactive";
    } else if (oldPromotions[status].prStatus == "inactive") {
      oldPromotions[status].prStatus = "active";
    }
    alert(oldPromotions[status].prStatus);
    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    location.assign("/edit.html?" + chisme);
  }

  prStatusIn.addEventListener('click', statusChange);

  filType.addEventListener('change',function(){
    myStyleH = document.getElementById('filStyleH');
    myStyleW = document.getElementById('filStyleW');
    myRegionH = document.getElementById('filRegionH');
    myRegionW = document.getElementById('filRegionW');
    while (myStyleH.hasChildNodes()) {
        myStyleH.removeChild(myStyleH.firstChild);
    }
    while (myStyleW.hasChildNodes()) {
        myStyleW.removeChild(myStyleW.firstChild);
    }
    while (myRegionH.hasChildNodes()) {
        myRegionH.removeChild(myRegionH.firstChild);
    }
    while (myRegionW.hasChildNodes()) {
        myRegionW.removeChild(myRegionW.firstChild);
    }
    if (this.value == "wine") {
      for (var i = 0; i < oldPromotions.length; i++) {
        for (prNumber in oldPromotions[i]) {
          if (oldPromotions[i][prNumber] == chisme) {
            wineSelects(oldPromotions[i]);
          }
        }
      }
    }
  });

  window.onerror = function(msg, url, linenumber) {
      alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
      return true;
  }

})();
