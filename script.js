function calculateAge() {
  const input = document.getElementById('dob').value.trim();
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
  if (!regex.test(input)) {
    alert('Please enter date in MM/DD/YYYY format');
    return;
  }

  const [month, day, year] = input.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
    alert("Date of birth can't be in the future!");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('years').innerText = String(years).padStart(2, '0');
  document.getElementById('months').innerText = String(months).padStart(2, '0');
  document.getElementById('days').innerText = String(days).padStart(2, '0');
}
