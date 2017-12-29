(function(){
  // retrieve old Promotions and populate array, otherwise create empty
  oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
  activePromotionsGrid = document.getElementById('promotions-grid-active');
  inactivePromotionsGrid = document.getElementById('promotions-grid-inactive');
  activePromotionsWarning = document.getElementById('no-active-promos');
  inactivePromotionsWarning = document.getElementById('no-inactive-promos');
  activePromotions = document.getElementById('active-promos');
  inactivePromotions = document.getElementById('inactive-promos');

  function setStatus() {
    var statusToggle = document.getElementsByClassName("status-toggle");
    for (var i = 0; i < statusToggle.length; i++) {
        statusToggle[i].addEventListener('click', statusChange);
    }
  }

  function emptyDisplay() {
    while (activePromotionsGrid.firstChild) {
        activePromotionsGrid.removeChild(activePromotionsGrid.firstChild);
    }
    while (inactivePromotionsGrid.firstChild) {
        inactivePromotionsGrid.removeChild(inactivePromotionsGrid.firstChild);
    }
    activePromotionsWarning.style.display = 'inherit';
    activePromotions.style.display = 'none';
    inactivePromotionsWarning.style.display = 'inherit';
    inactivePromotions.style.display = 'none';
  }

  function checkCount(array) {
    activeCount = 0;
    inactiveCount = 0;
    for(var i = 0; i < oldPromotions.length; ++i){
      if(oldPromotions[i].prStatus == 'active'){
        activeCount++;
      }
      if (oldPromotions[i].prStatus == 'inactive') {
        inactiveCount++;
      }
    }
  }

  checkCount(oldPromotions);

  function fetchData() {
    //seed some data if empty
    if (oldPromotions.length == 0) {
      oldPromotions = [
        {"prNumber":"itdz5rrgcxoxo","prName":"All Argentine Reds","prCode":"ARG18","prStatus":"active","prAmount":"10","prType":"percent","minPurch":"100","saleItems":"included","perStart":"12/26/17","perStop":"12/27/17","priceMin":"100","priceMax":"1000","filType":"wine","filStyle":"red","filRegion":"argentina","prMessage":"Save 10% on Argentinian red wine from 12/28/17 to 1/4/18 when you spend $100 or more."},
        {"prNumber":"itdz5rrgctest","prName":"Spanish Rioja Special","prCode":"RIO17","prStatus":"inactive","prAmount":"12","prType":"percent","minPurch":"25","saleItems":"included","perStart":"12/26/17","perStop":"12/27/17","priceMin":"10","priceMax":"100","filType":"wine","filStyle":"red","filRegion":"spain","prMessage":"Save 12% on Spanish red wine from 12/28/17 to 1/4/18 when you spend $25 or more."}
        ];
      localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    }
  }

  var promoHeading = [
    {'heading': 'name'},
    {'heading': 'code'},
    {'heading': 'discount'},
    {'heading': 'period'},
    {'heading': 'minimum'},
    {'heading': 'status'},
  ]

  function writeHeading(item, index) {
    //draw grid headings if active or inactive
    if (activeCount > 0) {
      gHead = document.createElement('div');
      gHead.setAttribute('class', 'promo-heading ' + item.heading);
      gSpan = document.createElement('span');
      gText = document.createTextNode(item.heading);
      gSpan.appendChild(gText);
      gHead.appendChild(gSpan);
      activePromotionsGrid.appendChild(gHead);
    }
    if (inactiveCount > 0) {
      gHead = document.createElement('div');
      gHead.setAttribute('class', 'promo-heading ' + item.heading);
      gSpan = document.createElement('span');
      gText = document.createTextNode(item.heading);
      gSpan.appendChild(gText);
      gHead.appendChild(gSpan);
      inactivePromotionsGrid.appendChild(gHead);
    }
  }

  function populateHeading(contentArray) {
    contentArray.map(writeHeading);
  }

  function writeToGrid(item, index) {
    var frag = document.createDocumentFragment();

    //prName
    prName = document.createElement('div');
    prName.setAttribute('class', 'promo-data name');
    prNameSpan = document.createElement('span');
    prNameLink = document.createElement('a');
    prNameLink.setAttribute('href', 'view.html?' + item.prNumber);
    prNameSpan.append(prNameLink);
    prNameData = document.createTextNode(item.prName);
    prNameLink.appendChild(prNameData);
    prName.appendChild(prNameSpan);
    frag.appendChild(prName);
    //prCode
    prCode = document.createElement('div');
    prCode.setAttribute('class', 'promo-data code');
    prCodeSpan = document.createElement('span');
    prCodeData = document.createTextNode(item.prCode);
    prCodeSpan.append(prCodeData);
    prCode.appendChild(prCodeSpan);
    frag.appendChild(prCode);
    //prAmount
    prAmount = document.createElement('div');
    prAmount.setAttribute('class', 'promo-data disc');
    prAmountSpan = document.createElement('span');
    if (item.prType == 'amount') {
      prAmountData = document.createTextNode('$'+item.prAmount);
      prAmountSpan.append(prAmountData);
    } else if (item.prType == 'percent') {
      prAmountData = document.createTextNode(item.prAmount+'%');
      prAmountSpan.append(prAmountData);
    } else if (item.prType == 'frees') {
      prAmountData = document.createTextNode('Free Shipping');
      prAmountSpan.append(prAmountData);
    } else if (item.prType == 'freed') {
      prAmountData = document.createTextNode('Free Delivery');
      prAmountSpan.append(prAmountData);
    }
    prAmount.appendChild(prAmountSpan);
    frag.appendChild(prAmount);
    //period
    period = document.createElement('div');
    period.setAttribute('class', 'promo-data period');
    if (item.perStart && item.perStop) {
      periodSpan = document.createElement('span');
      periodData = document.createTextNode(item.perStart + ' - ' + item.perStop);
      periodSpan.append(periodData);
      period.appendChild(periodSpan);
    }
    frag.appendChild(period);
    //minimum
    minimum = document.createElement('div');
    minimum.setAttribute('class', 'promo-data min');
    if (item.priceMin) {
      minimumSpan = document.createElement('span');
      minimumData = document.createTextNode('$'+item.priceMin);
      minimumSpan.append(minimumData);
      minimum.appendChild(minimumSpan);
    }
    frag.appendChild(minimum);
    //prStatus
    prStatus = document.createElement('div');
    prStatus.setAttribute('class', 'promo-data status');
    prStatusSpan = document.createElement('span');
    prStatusData = document.createTextNode(item.prStatus);
    prStatusSpan.append(prStatusData);
    prStatus.appendChild(prStatusSpan);
    frag.appendChild(prStatus);
    //statusDis
    statusDis = document.createElement('div');
    statusDis.setAttribute('class', 'promo-data click');
    statusDisSpan = document.createElement('span');
    statusDisImage = document.createElement('img');
    statusDisImage.setAttribute('class', 'status-toggle');
    statusDisImage.setAttribute('data', index);
    if (item.prStatus === 'active') {
      statusDisImage.setAttribute('src', '/img/state-active.svg');
    } else {
      statusDisImage.setAttribute('src', '/img/state-inactive.svg');
    }
    statusDisImage.setAttribute('alt', 'Promotion Status');
    statusDisSpan.append(statusDisImage);
    statusDis.appendChild(statusDisSpan);
    frag.appendChild(statusDis);
    if (item.prMessage.length) {
      //pmsgHead
      pmsgHead = document.createElement('div');
      pmsgHead.setAttribute('class', 'promo-heading message');
      pmsgHeadSpan = document.createElement('span');
      pmsgHeadData = document.createTextNode('Promotional Message');
      pmsgHeadSpan.append(pmsgHeadData);
      pmsgHead.appendChild(pmsgHeadSpan);
      frag.appendChild(pmsgHead);
      //prMessage
      prMessage = document.createElement('div');
      prMessage.setAttribute('class', 'promo-data message');
      prMessageSpan = document.createElement('span');
      prMessageData = document.createTextNode(item.prMessage);
      prMessageSpan.append(prMessageData);
      prMessage.appendChild(prMessageSpan);
      frag.appendChild(prMessage);
    }
    if (item.prStatus == 'active') {
      activePromotionsWarning.style.display = 'none';
      activePromotionsGrid.appendChild(frag);
      activePromotions.style.display = 'inherit';
    } 
    if (item.prStatus == 'inactive') {
      inactivePromotionsWarning.style.display = 'none';
      inactivePromotionsGrid.appendChild(frag);
      inactivePromotions.style.display = 'inherit';
    }
    setStatus();
  }

  function populateContent(contentArray) {
    populateHeading(promoHeading);
    contentArray.map(writeToGrid);
  }
  fetchData();
  populateContent(oldPromotions);

  function statusChange() {
    fetchData();
    var status = this.getAttribute("data");
    if (oldPromotions[status].prStatus == "active") {
      oldPromotions[status].prStatus = "inactive";
    } else if (oldPromotions[status].prStatus == "inactive") {
      oldPromotions[status].prStatus = "active";
    }
    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
    emptyDisplay();
    populateContent(oldPromotions);
  }
})();
