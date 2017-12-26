(function(){
  // retrieve old Promotions and populate array, otherwise create empty
  var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  console.log(oldPromotions);
  var contentBg = document.getElementById('content-bg');
  var element = "";

  function writeRowToPage(dataObject, element) {
      //prName
      prName = document.createElement('div');
      prName.setAttribute('class', 'promo-data name');
      prNameSpan = document.createElement('span');
      prNameLink = document.createElement('a');
      prNameLink.setAttribute('href', 'view.html?' + dataObject.prNumber);
      prNameSpan.append(prNameLink);
      prNameData = document.createTextNode(dataObject.prName);
      prNameLink.appendChild(prNameData);
      prName.appendChild(prNameSpan);
      element.appendChild(prName);
      //prCode
      prCode = document.createElement('div');
      prCode.setAttribute('class', 'promo-data code');
      prCodeSpan = document.createElement('span');
      prCodeData = document.createTextNode(dataObject.prCode);
      prCodeSpan.append(prCodeData);
      prCode.appendChild(prCodeSpan);
      element.appendChild(prCode);
      //prAmount
      prAmount = document.createElement('div');
      prAmount.setAttribute('class', 'promo-data disc');
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
      element.appendChild(prAmount);
      //period
      period = document.createElement('div');
      period.setAttribute('class', 'promo-data period');
      if (dataObject.perStart && dataObject.perStop) {
        periodSpan = document.createElement('span');
        periodData = document.createTextNode(dataObject.perStart + ' - ' + dataObject.perStop);
        periodSpan.append(periodData);
        period.appendChild(periodSpan);
      }
      element.appendChild(period);
      //minimum
      minimum = document.createElement('div');
      minimum.setAttribute('class', 'promo-data min');
      if (dataObject.priceMin) {
        minimumSpan = document.createElement('span');
        minimumData = document.createTextNode('$'+dataObject.priceMin);
        minimumSpan.append(minimumData);
        minimum.appendChild(minimumSpan);
      }
      element.appendChild(minimum);
      //prStatus
      prStatus = document.createElement('div');
      prStatus.setAttribute('class', 'promo-data status');
      prStatusSpan = document.createElement('span');
      prStatusData = document.createTextNode(dataObject.prStatus);
      prStatusSpan.append(prStatusData);
      prStatus.appendChild(prStatusSpan);
      element.appendChild(prStatus);
      //statusDis
      statusDis = document.createElement('div');
      statusDis.setAttribute('class', 'promo-data click');
      statusDisSpan = document.createElement('span');
      statusDisImage = document.createElement('img');
      statusDisImage.setAttribute('class', 'status-toggle');
      statusDisImage.setAttribute('data', [i]);
      if (dataObject.prStatus === 'active') {
        statusDisImage.setAttribute('src', '/img/state-active.svg');
      } else {
        statusDisImage.setAttribute('src', '/img/state-inactive.svg');
      }
      statusDisImage.setAttribute('alt', 'Promotion Status');
      statusDisSpan.append(statusDisImage);
      statusDis.appendChild(statusDisSpan);
      element.appendChild(statusDis);
      if (dataObject.prMessage.length) {
        //pmsgHead
        pmsgHead = document.createElement('div');
        pmsgHead.setAttribute('class', 'promo-heading message');
        pmsgHeadSpan = document.createElement('span');
        pmsgHeadData = document.createTextNode('Promotional Message');
        pmsgHeadSpan.append(pmsgHeadData);
        pmsgHead.appendChild(pmsgHeadSpan);
        element.appendChild(pmsgHead);
        //prMessage
        prMessage = document.createElement('div');
        prMessage.setAttribute('class', 'promo-data message');
        prMessageSpan = document.createElement('span');
        prMessageData = document.createTextNode(dataObject.prMessage);
        prMessageSpan.append(prMessageData);
        prMessage.appendChild(prMessageSpan);
        element.appendChild(prMessage);
      }
  }

  //populate promotions list from old promotions
  // if old promotions exists
  if (oldPromotions != null) {
      for (var i = 0; i < oldPromotions.length; i++) {
          for (prStatus in oldPromotions[i]) {
            if (oldPromotions[i][prStatus] == 'active') {
              myStatus = document.getElementById("status-active");
              myStatus.style.display = 'none';
              element = document.getElementById("promotions-grid-active");
              element.style.visibility = 'visible';
            } else if (oldPromotions[i][prStatus] == 'inactive') {
              myStatus = document.getElementById("status-inactive");
              myStatus.style.display = 'none';
              element = document.getElementById("promotions-grid-inactive");
              element.style.visibility = 'visible';
            }
          }
          writeRowToPage(oldPromotions[i],element);
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
