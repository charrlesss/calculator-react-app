import React   from 'react'


export default function Button({name ,isClick}) {
    return (
        <div className={`buttonContainer ${name === 'C' ? 'ClearButtonContainer' :''} ${name === '=' ? 'EqualButtonContainer' :''} ` } >
            <button className= {`${name === 'C' ? 'ClearButton' :''} ${name === '=' ? 'EqualButton' :''} ` }
              style={{color:name === '×' || name === '+' || name === '-' || name === '÷' ? '#f2891f' : '#e8e1da' , backgroundColor:name === '=' ? '#f2891f' :''}}  
              onClick={()=>isClick(name.toString())}
              >{name}</button>
        </div>
    )
}


