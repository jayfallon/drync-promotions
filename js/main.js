(function(){
  // retrieve old Promotions and populate array, otherwise create empty
  var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  console.log(oldPromotions);

  var element = document.getElementById("promotions-grid");

  function writeRowToPage(dataObject, element) {
      //prName
      prName = document.createElement('div');
      prName.setAttribute('class', 'promo-data name');
      prNameSpan = document.createElement('span');
      prNameLink = document.createElement('a');
      prNameLink.setAttribute('href', 'view.html');
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
      console.log(dataObject.prType);
      prAmount = document.createElement('div');
      prAmount.setAttribute('class', 'promo-data disc');
      prAmountSpan = document.createElement('span');
      
      prAmountSpan.append(prAmountData);
      prAmount.appendChild(prAmountSpan);
      element.appendChild(prAmount);
      //period
      period = document.createElement('div');
      period.setAttribute('class', 'promo-data period');
      periodSpan = document.createElement('span');
      periodData = document.createTextNode(dataObject.perStart + ' - ' + dataObject.perStop);
      periodSpan.append(periodData);
      period.appendChild(periodSpan);
      element.appendChild(period);
      //type
      type = document.createElement('div');
      type.setAttribute('class', 'promo-data type');
      typeSpan = document.createElement('span');
      typeData = document.createTextNode(dataObject.filType);
      typeSpan.append(typeData);
      type.appendChild(typeSpan);
      element.appendChild(type);
      //minimum
      minimum = document.createElement('div');
      minimum.setAttribute('class', 'promo-data min');
      minimumSpan = document.createElement('span');
      minimumData = document.createTextNode('$'+dataObject.priceMin);
      minimumSpan.append(minimumData);
      minimum.appendChild(minimumSpan);
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
      statusDisImage.setAttribute('src', '/img/state-active.svg');
      statusDisImage.setAttribute('alt', 'Promotion Status');
      statusDisSpan.append(statusDisImage);
      statusDis.appendChild(statusDisSpan);
      element.appendChild(statusDis);
  }

  //populate promotions list from old promotions
  // if old promotions exists
  if (oldPromotions != null) {
      for (var i = 0; i < oldPromotions.length; i++) {
          // call on writeRowtoPage() to write your old data object to the page
          writeRowToPage(oldPromotions[i],element);
      }
  }
})();
