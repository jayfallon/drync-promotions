(function(){
  // retrieve old Promotions and populate array, otherwise create empty
  var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  console.log(oldPromotions);

  var element = document.getElementById('content-bg');
  var viewTitle = "";

  function writeRowToPage(dataObject, element) {

    //view-title
    viewTitle = document.createElement('div');
    viewTitle.setAttribute('class', 'view-title');
    //prName
    prName = document.createElement('h3');
    prNameData = document.createTextNode(dataObject.prName);
    prName.appendChild(prNameData);
    viewTitle.appendChild(prName);
    //prCode
    prCode = document.createElement('div');
    prCode.setAttribute('class', 'promo-code');
    prCodeSpan = document.createElement('span');
    prCodeData = document.createTextNode(dataObject.prCode);
    prCodeSpan.append(prCodeData);
    prCode.appendChild(prCodeSpan);
    viewTitle.appendChild(prCode);
    //edit promotion
    prEdit = document.createElement('div');
    prEdit.setAttribute('class', 'promo-edit');
    prEditLink = document.createElement('a')
    prEditLink.setAttribute('href', 'edit.html?' + dataObject.prNumber);
    prEditText = document.createTextNode('Edit This Promotion');
    prEditLink.appendChild(prEditText);
    prEdit.appendChild(prEditLink);
    viewTitle.appendChild(prEdit);
    element.appendChild(viewTitle);
    //view grid
    viewGrid = document.createElement('div');
    viewGrid.setAttribute('class', 'view-grid');
    //status
    statusH = document.createElement('div');
    statusH.setAttribute('class', 'grid-heading status');
    statusHText = document.createTextNode('Status');
    statusH.appendChild(statusHText);
    viewGrid.appendChild(statusH);

    prStatus = document.createElement('div');
    prStatus.setAttribute('class', 'grid-data click');

    prStatusIn = document.createElement('input');
    prStatusIn.setAttribute('type', 'checkbox');
    prStatusIn.setAttribute('name', 'prStatus');
    prStatusIn.setAttribute('id', 'prStatus');
    prStatusIn.setAttribute('value', dataObject.prStatus);
    prStatusIn.setAttribute('data', [i]);
    if (dataObject.prStatus == "active") {
      prStatusIn.checked = true;
    }
    prStatus.appendChild(prStatusIn);

    prStatusLa = document.createElement('label');
    prStatusLa.setAttribute('for', 'prStatus');
    prStatusLa.setAttribute('id', 'status');
    prStatusLaTx = document.createTextNode(dataObject.prStatus);
    prStatusLa.appendChild(prStatusLaTx);
    prStatus.appendChild(prStatusLa);

    viewGrid.appendChild(prStatus);

    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Discount Amount');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Discount Type');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Minimum Purchase');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Sale Items');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    //prAmount
    prAmount = document.createElement('div');
    prAmount.setAttribute('class', 'grid-data disc');
    prAmountSpan = document.createElement('span');
    if (dataObject.prType == 'amount') {
      prAmountData = document.createTextNode('$'+dataObject.prAmount);
      prAmountSpan.append(prAmountData);
    } else if (dataObject.prType == 'percent') {
      prAmountData = document.createTextNode(dataObject.prAmount+'%');
      prAmountSpan.append(prAmountData);
    } else if (dataObject.prType == 'frees') {
      prAmountData = document.createTextNode('Free Shipping');
      prAmountSpan.append(prAmountData);
    } else if (dataObject.prType == 'freed') {
      prAmountData = document.createTextNode('Free Delivery');
      prAmountSpan.append(prAmountData);
    }
    prAmount.appendChild(prAmountSpan);
    viewGrid.appendChild(prAmount);
    // discType
    discType = document.createElement('div');
    discType.setAttribute('class', 'grid-data type');
    discTypeSpan = document.createElement('span');
    discTypeData = document.createTextNode(dataObject.prType);
    discTypeSpan.append(discTypeData);
    discType.appendChild(discTypeSpan);
    viewGrid.appendChild(discType);
    // minimum
    minimum = document.createElement('div');
    minimum.setAttribute('class', 'grid-data min');
    if (dataObject.minPurch) {
      minimumSpan = document.createElement('span');
      minimumData = document.createTextNode('$'+dataObject.minPurch);
      minimumSpan.append(minimumData);
      minimum.appendChild(minimumSpan);
    }
    viewGrid.appendChild(minimum);
    // saleItems
    saleItems = document.createElement('div');
    saleItems.setAttribute('class', 'grid-data type');
    saleItemsSpan = document.createElement('span');
    saleItemsData = document.createTextNode(dataObject.saleItems);
    saleItemsSpan.append(saleItemsData);
    saleItems.appendChild(saleItemsSpan);
    viewGrid.appendChild(saleItems);

    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading period-title');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Promotional Period');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);

    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading price-title');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Price Limits');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);

    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Start');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Stop');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Min');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    discHSp = document.createElement('span');
    discTx = document.createTextNode('Max');
    discHSp.appendChild(discTx);
    discH.appendChild(discHSp);
    viewGrid.appendChild(discH);
    // //period
    period = document.createElement('div');
    period.setAttribute('class', 'grid-data period');
    if (dataObject.perStart && dataObject.perStop) {
      periodSpan = document.createElement('span');
      periodData = document.createTextNode(dataObject.perStart);
      periodSpan.append(periodData);
      period.appendChild(periodSpan);
    }
    viewGrid.appendChild(period);
    period = document.createElement('div');
    period.setAttribute('class', 'grid-data period');
    if (dataObject.perStart && dataObject.perStop) {
      periodSpan = document.createElement('span');
      periodData = document.createTextNode(dataObject.perStop);
      periodSpan.append(periodData);
      period.appendChild(periodSpan);
    }
    viewGrid.appendChild(period);

    // minimum
    minimum = document.createElement('div');
    minimum.setAttribute('class', 'grid-data min');
    if (dataObject.priceMin) {
      minimumSpan = document.createElement('span');
      minimumData = document.createTextNode('$'+dataObject.priceMin);
      minimumSpan.append(minimumData);
      minimum.appendChild(minimumSpan);
    }
    viewGrid.appendChild(minimum);
    // maximum
    maximum = document.createElement('div');
    maximum.setAttribute('class', 'grid-data max');
    if (dataObject.priceMax) {
      maximumSpan = document.createElement('span');
      maximumData = document.createTextNode('$'+dataObject.priceMax);
      maximumSpan.append(maximumData);
      maximum.appendChild(maximumSpan);
    }
    viewGrid.appendChild(maximum);

    allStoresW = document.createElement('div');
    allStoresW.setAttribute('class', 'grid-data all-stores');
    allStoresSp = document.createElement('span');
    allStoresSp.setAttribute('class', 'edit-form');
    allStoresIn = document.createElement('input');
    allStoresIn.setAttribute('type', 'checkbox');
    allStoresIn.checked = true;
    allStoresSp.appendChild(allStoresIn);
    allStoresTx = document.createTextNode('All Stores');
    allStoresSp.appendChild(allStoresTx);
    allStoresW.appendChild(allStoresSp);
    allStoresLk = document.createElement('a');
    allStoresLk.setAttribute('href', '');
    allStoresLk.setAttribute('class', 'store-link');
    allStoresTx = document.createTextNode('See All');
    allStoresLk.appendChild(allStoresTx);
    allStoresW.appendChild(allStoresLk);
    viewGrid.appendChild(allStoresW);

    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    if (dataObject.filType) {
      discHSp = document.createElement('span');
      discTx = document.createTextNode('Type');
      discHSp.appendChild(discTx);
      discH.appendChild(discHSp);
    }
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading');
    if (dataObject.filStyle) {
      discHSp = document.createElement('span');
      discTx = document.createTextNode('Style');
      discHSp.appendChild(discTx);
      discH.appendChild(discHSp);
    }
    viewGrid.appendChild(discH);
    discH = document.createElement('div');
    discH.setAttribute('class', 'grid-heading type-region');
    if (dataObject.region) {
      discHSp = document.createElement('span');
      discTx = document.createTextNode('Region');
      discHSp.appendChild(discTx);
      discH.appendChild(discHSp);
    }
    viewGrid.appendChild(discH);
    // type
    type = document.createElement('div');
    type.setAttribute('class', 'grid-data type');
    typeSpan = document.createElement('span');
    typeData = document.createTextNode(dataObject.filType);
    typeSpan.append(typeData);
    type.appendChild(typeSpan);
    viewGrid.appendChild(type);
    type = document.createElement('div');
    type.setAttribute('class', 'grid-data type');
    typeSpan = document.createElement('span');
    typeData = document.createTextNode(dataObject.filStyle);
    typeSpan.append(typeData);
    type.appendChild(typeSpan);
    viewGrid.appendChild(type);
    type = document.createElement('div');
    type.setAttribute('class', 'grid-data type');
    typeSpan = document.createElement('span');
    typeData = document.createTextNode(dataObject.filRegion);
    typeSpan.append(typeData);
    type.appendChild(typeSpan);
    viewGrid.appendChild(type);
    if (dataObject.prMessage.length) {
      discH = document.createElement('div');
      discH.setAttribute('class', 'grid-heading promo-message');
      discHSp = document.createElement('span');
      discTx = document.createTextNode('Promotion Message');
      discHSp.appendChild(discTx);
      discH.appendChild(discHSp);
      viewGrid.appendChild(discH);
      // //prMessage
      prMessage = document.createElement('div');
      prMessage.setAttribute('class', 'grid-data promo-message show-quote');
      prMessageSpan = document.createElement('span');
      prMessageData = document.createTextNode(dataObject.prMessage);
      prMessageSpan.append(prMessageData);
      prMessage.appendChild(prMessageSpan);
      viewGrid.appendChild(prMessage);
    }

    element.appendChild(viewGrid);
  }

  var urlParams = new URLSearchParams(window.location.search);

  var entries = urlParams.entries();
  for(pair of entries) { 
    var chisme = pair[0];
  }

  //populate promotions list from old promotions
  // if old promotions exists
  if (oldPromotions != null) {
    for (var i = 0; i < oldPromotions.length; i++) {
      for (prNumber in oldPromotions[i]) {
        if (oldPromotions[i][prNumber] == chisme) {
          writeRowToPage(oldPromotions[i],element);
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

  var statusToggle = document.getElementById("prStatus");
  statusToggle.addEventListener('click', statusChange);

})();
