(function(){

  // retrieve old Promotions and populate array, otherwise create empty
  var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  console.log(oldPromotions);

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
  var filStyle = document.getElementById("filStyle");
  var filType = document.getElementById("filType");
  var filRegion = document.getElementById("filRegion");
  var prMessage = document.getElementById("prMessage");
  var prStatusW = document.getElementById("prStatusW");

  function writeRowToPage(dataObject) {
    prName.value = dataObject.prName;
    prCode.value = dataObject.prCode;
    // prStatus.value = dataObject.prStatus;
    prStatusIn = document.createElement('input');
    prStatusIn.setAttribute('type', 'checkbox');
    prStatusIn.setAttribute('id', 'prStatusIn');
    prStatusIn.setAttribute('data', [i]);
    if (dataObject.prStatus == "active") {
      prStatusIn.checked = true;
    }
    prStatusW.append(prStatusIn);
    prStatusLabel = document.createElement('label');
    prStatusLabelTx = document.createTextNode(dataObject.prStatus);
    prStatusLabel.appendChild(prStatusLabelTx);
    prStatusLabel.setAttribute('for', 'prStatus');
    prStatusLabel.setAttribute('id', 'status');
    prStatusW.appendChild(prStatusLabel);

    prAmount.value = dataObject.prAmount;
    prType.value = dataObject.prType;
    minPurch.value = dataObject.minPurch;

    saleItemsIn = document.createElement('input');
    saleItemsIn.setAttribute('type', 'checkbox');
    saleItemsIn.setAttribute('id', 'saleItemsIn');
    if (dataObject.saleItems == "included") {
      saleItemsIn.checked = true;
    }
    saleItems.append(saleItemsIn);
    saleItemsLabel = document.createElement('label');
    saleItemsLabelTx = document.createTextNode(dataObject.saleItems);
    saleItemsLabel.appendChild(saleItemsLabelTx);
    saleItemsLabel.setAttribute('for', 'saleItems');
    saleItemsLabel.setAttribute('class', 'edit-form');
    saleItemsLabel.setAttribute('id', 'saleLabel');
    saleItems.appendChild(saleItemsLabel);
    perStart.value = dataObject.perStart;
    perStop.value = dataObject.perStop;
    priceMin.value = dataObject.priceMin;
    priceMax.value = dataObject.priceMax;
    filStyle.value = dataObject.filStyle;
    filType.value = dataObject.filType;
    filRegion.value = dataObject.filRegion;
    prMessage.value = dataObject.prMessage;
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

  function statusChange() {
    var status = this.getAttribute("data");
    if (oldPromotions[status].prStatus == "active") {
      oldPromotions[status].prStatus = "inactive";
    } else if (oldPromotions[status].prStatus == "inactive") {
      oldPromotions[status].prStatus = "active";
    }
    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    location.assign("/view.html?" + chisme);
  }

  var statusToggle = document.getElementById("prStatusIn");
  statusToggle.addEventListener('click', statusChange);

  $('[data-toggle="datepicker"]').datepicker({
      format: 'm/d/yy',
      autoHide: true,
      zIndex: 2048,
  });

  saleItemsVal = '';
  var saleItemsIn = document.getElementById("saleItemsIn");

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

  var button = document.getElementById("promoSave");
  // need to find and fix this
  console.log(prNumber);
  function submitForm() {
    currentElem.prName = document.getElementById("prName").value;
    currentElem.prCode = document.getElementById("prCode").value;
    currentElem.prStatus = document.getElementById("prStatus").value;
    currentElem.prAmount = document.getElementById("prAmount").value;
    currentElem.prType = document.getElementById("prType").value;
    currentElem.minPurch = document.getElementById("minPurch").value;
    currentElem.saleItems = saleItemsVal;
    currentElem.perStart = document.getElementById("perStart").value;
    currentElem.perStop = document.getElementById("perStop").value;
    currentElem.priceMin = document.getElementById("priceMin").value;
    currentElem.priceMax = document.getElementById("priceMax").value;
    var ft = document.getElementById("filType");
    currentElem.filType = ft.options[ft.selectedIndex].value;
    var fs = document.getElementById("filStyle");
    currentElem.filStyle = fs.options[fs.selectedIndex].value;
    var fr = document.getElementById("filRegion");
    currentElem.filRegion = fr.options[fr.selectedIndex].value;
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
    oldPromotions.splice(currentElem, 1);
    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    location.assign("/");
  });



})();
