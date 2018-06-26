var searchButton = document.querySelector('.btn__conditions-search');
var searchHotelModal = document. querySelector('.search-hotel-modal');
var searchHotelForm = searchHotelModal.querySelector('.search-hotel-form');
var checkinDateField = searchHotelForm.querySelector('#checkin-date');
var checkoutDateField = searchHotelForm.querySelector('#checkout-date');
var adultAmountField = searchHotelForm.querySelector('#adult-amount');
var childrenAmountField = searchHotelForm.querySelector('#children-amount');
var submitFormButton = searchHotelForm.querySelector('.form-submit__btn');

var isStorageSupport = true;
var storageAdultAmount = '';
var storageChildrenAmount = '';

try {
  storageAdultAmount = localStorage.getItem('adultAmount');
  storageChildrenAmount = localStorage.getItem('childrenAmount');
} catch (err) {
  isStorageSupport = false;
}

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchHotelModal.classList.toggle('search-hotel-modal-open');
  searchHotelModal.classList.toggle('visually-hidden');
  adultAmountField.value = storageAdultAmount;
  childrenAmountField.value = storageChildrenAmount;
  checkinDateField.focus();
});

searchHotelForm.addEventListener('submit', function(evt) {
  if (!checkinDateField.value || !checkoutDateField.value || !adultAmountField.value || !childrenAmountField.value) {
    evt.preventDefault();
    searchHotelModal.classList.remove('modal-submit-error');
    searchHotelModal.offsetWidth = searchHotelModal.offsetWidth;
    searchHotelModal.classList.add('modal-submit-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adultAmount', adultAmountField.value);
      localStorage.setItem('childrenAmount', childrenAmountField.value);
    }
  }
});


