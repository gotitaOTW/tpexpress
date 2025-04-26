function fechaValida(year, month, day) {
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return false;
    }
  
    if (month < 1 || month > 12) {
      return false;
    }
  
    const date = new Date(year, month - 1, day);
  
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }

  export default fechaValida;