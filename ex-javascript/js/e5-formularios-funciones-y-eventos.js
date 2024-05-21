

    let form = document.getElementById('myForm');
    let dateInput = document.getElementById('birthday');
  
    form.addEventListener('submit', function(event) {
      var dateValue = dateInput.value;
      var minDate = dateInput.min;
      var maxDate = dateInput.max;
  
      if (!isDateInRange(dateValue, minDate, maxDate)) {
        event.preventDefault();
        dateInput.classList.add('is-invalid');
      } else {
        dateInput.classList.remove('is-invalid');
      }
    });
  
    function isDateInRange(dateString, minDate, maxDate) {
      if (!dateString) return false;
      var date = new Date(dateString);
      var min = new Date(minDate);
      var max = new Date(maxDate);
  
      return date >= min && date <= max;
    }