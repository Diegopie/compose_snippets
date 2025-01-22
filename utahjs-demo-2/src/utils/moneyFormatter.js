export default function moneyFormatter (number, currency = 'merica') {
  switch (currency) {
    case 'merica':
      return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    default:
      return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
  }

  
}