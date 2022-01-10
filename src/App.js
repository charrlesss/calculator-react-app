import React ,{useState  , useCallback} from 'react';
import Button from './Button';
import './App.css'
import calculator from './Calculator';



const createButton = () =>{
  const allButton = [
    ['C' , 'del' ,'÷'],
    ['7' ,'8' ,'9' ,'-'],
    ['4' ,'5' ,'6' ,'×'],
    ['1' ,'2' ,'3' ,'+'],
    ['0' ,'.' ,'=']
  ]
  const button  = []
  for (let y = 0; y < allButton.length; y++) {
     button[y] = []
    for (let x = 0; x < allButton[y].length; x++) {
      button[y][x] = allButton[y][x]      
    }
  }
  return button
}


function App() {
  const [curent , setCurrent] = useState('')
  const [prevois , setPrevois] = useState('')
  
  
  const isClick = useCallback((button)=>{
    if(button === '×'|| button === '÷' || button === '-' || button === '+'){
     calculator.getOperator(button)
     setPrevois(calculator.DisplayPrivios())
      setCurrent(calculator.DisplayCurrent())
    }else if(button === 'C'){
      calculator.getClear()
      setPrevois(calculator.DisplayPrivios())
      setCurrent(calculator.DisplayCurrent())
    }else if(button === 'del'){
      calculator.getDelete()
      setCurrent(calculator.DisplayCurrent())
    }else if(button === '='){
      calculator.getEqual()
      setPrevois(calculator.DisplayPrivios())
      setCurrent(calculator.DisplayCurrent())
    }else{
      calculator.getNumber(button)
      setPrevois(calculator.DisplayPrivios())
      setCurrent(calculator.DisplayCurrent())
    }
  
  },[])
  

 return (
   <div className='container'>
     <div className='handleOutput'>
      <div className='previos'>{prevois}</div>
      <div className='current'>{curent ? curent : 0}</div>
     </div>
   <div className='handleButton'>
   {
      createButton().map((y ,indexY)=>{
        return <div key={indexY} className='buttonRow'>
          {y.map((x , indexX)=>{
            return <Button name={x} key={indexX} isClick={isClick}/>
          }) }
        </div>
      })
    }
   </div>
   </div>

 )
}

export default App;
