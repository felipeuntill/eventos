class dateHelper {
  static getMonth (month) {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    const m = months.indexOf(month) + 1
    return (m < 10 ? '0' : '') + m
  }

  static formatDate ({ day, month, year }) {
    return `${day}/${getMonth(month)}/${year}`
  }
}


module.exports = dateHelper;
