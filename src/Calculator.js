class Calculator {
    constructor(){
        this._handleOperator =''
        this._handleCurrent = ''
        this._handlePrevios = ''
    }

    getNumber(n){
        if(n === '0' && this._handleCurrent.split('').length < 1 ) return
        if(n === '.' && this._handleCurrent.includes('.')) return
        if(n === '.' && this._handleCurrent.split('').length < 1)
        this._handleCurrent = '0' 
        this._handleCurrent =  this._handleCurrent + n
    }

    getOperator(operator){
        if(!this._handleCurrent) return 
        if(this._handleCurrent && this._handlePrevios ){
            this.getEqual()
        }
        this._handleOperator =  operator
        this._handlePrevios = `${this._handleCurrent} ${this._handleOperator}`
        this._handleCurrent = '' 
    }

    getEqual(){
      
        let total = 0
       if(this._handlePrevios){
           
           if(!isNaN(this._handleCurrent) && !isNaN(this._handlePrevios.split(' ')[0])){
            const prevValue = parseFloat(this._handlePrevios) 
            const currValue =  parseFloat(this._handleCurrent) 
           
              
           switch(this._handleOperator){
                case '÷' :
                    total = prevValue  / currValue
                    break
                case '×':
                    total = prevValue * currValue
                    break
                case '-':
                    total = prevValue - currValue
                    break
                case '+':
                    total = prevValue + currValue
                    break
                 default: 
                  return   
          }
          this._handleCurrent  = total.toString()
          this._handlePrevios =''
        }
       }
    }

    getClear(){
        this._handleCurrent = ''
        this._handlePrevios = ''
    }

    getDelete(){
        this._handleCurrent = this._handleCurrent.slice(0 ,-1)
    }
    sanitizeNumber(number){
        
        const getNumString = number.toString()
        const getFirstNumber = number.split('')[number.split('').length -1]  === '.' ? parseInt(getNumString.split('.')[0]) +'.' : parseInt(getNumString.split('.')[0])
        const getSecondNumber =  getNumString.split('.')[1]
    
        let finalNumber = ''

        if(isNaN(getFirstNumber)){
            return finalNumber = ''
        }else{
            finalNumber = getFirstNumber.toLocaleString('en' ,{minimumFractionDigits:0})
        }
        if(getSecondNumber){
            return finalNumber = `${finalNumber}.${getSecondNumber}`
        }else{
            return finalNumber
        }
    }

    DisplayCurrent(){
       if(this._handleCurrent !== '')
        return  this.sanitizeNumber(this._handleCurrent)
    }
    DisplayPrivios(){
       if(this._handlePrevios !== ''){
        return  this.sanitizeNumber(this._handlePrevios.split(' ')[0])  + this._handlePrevios.split(' ')[1]
        }  
    }
}


export default new Calculator()