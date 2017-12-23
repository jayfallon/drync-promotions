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
    prStatus.appendChild(prStatusIn);
   
    prStatusLa = document.createElement('label');
    prStatusLa.setAttribute('for', 'prStatus');
    prStatusLa.setAttribute('id', 'status');
    prStatusLaTx = document.createTextNode(dataObject.prStatus);
    prStatusLa.appendChild(prStatusLaTx);
    prStatus.appendChild(prStatusLa);

    viewGrid.appendChild(prStatus);


    element.appendChild(viewGrid);

    //statusDis
    // statusDis = document.createElement('div');
    // statusDis.setAttribute('class', 'grid-data click');
    // statusDisSpan = document.createElement('span');
    // statusDisImage = document.createElement('img');
    // statusDisImage.setAttribute('class', 'status-toggle');
    // statusDisImage.setAttribute('data', [i]);
    // if (dataObject.prStatus === 'active') {
    //   statusDisImage.setAttribute('src', '/img/state-active.svg');
    // } else {
    //   statusDisImage.setAttribute('src', '/img/state-inactive.svg');
    // }
    // statusDisImage.setAttribute('alt', 'Promotion Status');
    // statusDisSpan.append(statusDisImage);
    // statusDis.appendChild(statusDisSpan);
    // element.appendChild(statusDis);
    // prAmountSpan = document.createElement('span');
    // if (dataObject.prType == 'amount') {
    //   prAmountData = document.createTextNode('$'+dataObject.prAmount);
    //   prAmountSpan.append(prAmountData);
    // } else if (dataObject.prType == 'percent') {
    //   prAmountData = document.createTextNode(dataObject.prAmount+'%');
    //   prAmountSpan.append(prAmountData);
    // } else if (dataObject.prType == 'frees') {
    //   prAmountData = document.createTextNode('Free Shipping');
    //   prAmountSpan.append(prAmountData);
    // } else if (dataObject.prType == 'freed') {
    //   prAmountData = document.createTextNode('Free Delivery');
    //   prAmountSpan.append(prAmountData);
    // }
    // prAmount.appendChild(prAmountSpan);
    // element.appendChild(prAmount);



    
    
   
    // //period
    // period = document.createElement('div');
    // period.setAttribute('class', 'promo-data period');
    // if (dataObject.perStart && dataObject.perStop) {
    //   periodSpan = document.createElement('span');
    //   periodData = document.createTextNode(dataObject.perStart + ' - ' + dataObject.perStop);
    //   periodSpan.append(periodData);
    //   period.appendChild(periodSpan);
    // }
    // element.appendChild(period);
    // type
    // type = document.createElement('div');
    // type.setAttribute('class', 'promo-data type');
    // typeSpan = document.createElement('span');
    // typeData = document.createTextNode(dataObject.filType);
    // typeSpan.append(typeData);
    // type.appendChild(typeSpan);
    // element.appendChild(type);
    // minimum
    // minimum = document.createElement('div');
    // minimum.setAttribute('class', 'promo-data min');
    // if (dataObject.priceMin) {
    //   minimumSpan = document.createElement('span');
    //   minimumData = document.createTextNode('$'+dataObject.priceMin);
    //   minimumSpan.append(minimumData);
    //   minimum.appendChild(minimumSpan);
    // }
    // element.appendChild(minimum);
    
    // //pmsgHead
    // pmsgHead = document.createElement('div');
    // pmsgHead.setAttribute('class', 'promo-heading message');
    // pmsgHeadSpan = document.createElement('span');
    // pmsgHeadData = document.createTextNode('Promotional Message');
    // pmsgHeadSpan.append(pmsgHeadData);
    // pmsgHead.appendChild(pmsgHeadSpan);
    // element.appendChild(pmsgHead);
    // //prMessage
    // prMessage = document.createElement('div');
    // prMessage.setAttribute('class', 'promo-data message');
    // prMessageSpan = document.createElement('span');
    // prMessageData = document.createTextNode(dataObject.prMessage);
    // prMessageSpan.append(prMessageData);
    // prMessage.appendChild(prMessageSpan);
    // element.appendChild(prMessage);
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
    location.assign("/");
  }

  var statusToggle = document.getElementsByClassName("status-toggle");

  for (var i = 0; i < statusToggle.length; i++) {
      statusToggle[i].addEventListener('click', statusChange);
  }

  // console.log(statusToggle);
})();
