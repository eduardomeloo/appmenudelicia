export default {
    methods: {
        formatDate(date) {
            let newDate = new Date(date)
            return newDate.toLocaleDateString()
        },
        real(value) {
            return `R$ ${parseInt(value).toFixed(2)}`;
        },
        truncateString(str, number) {
              if(str.length <= number) return str
      
              return str.slice(0, number) + '...'
        }
    }
}