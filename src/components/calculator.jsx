import React, { useState } from 'react'
import './calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';


export default function Calculator() {
    const [num, setnum] = useState(0);
    const [oldnum, setoldnum] = useState(0);
    const [operator, setoperator] = useState();

    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
            setnum(input);
        } else {
            setnum(num + input);
        }

    }

    function clear() {
        setnum(0)
    }

    function porcentage() {
        setnum(num / 100);
    }

    function operatorHandler() {
        if (num > 0)
            setnum(-num)
        else
            setnum(Math.abs(num));
    }

    function virgula() {
        setnum(num + '.');
    }

    function operatorHondler(e) {
        var operatorInput =e.target.value
        setoperator(operatorInput);
        setoldnum(num);
        setnum(0);

    }

    function calculete() {
        if(operator==="/"){
            setnum(oldnum / num)
        }
        else if(operator ==="X") {
            setnum(oldnum * num)
        }
        else if(operator ==="+") {
            setnum(parseFloat(oldnum) + parseFloat(num));
        }
        else if(operator ==="-") {
            setnum(oldnum - num);
        }
    }
    return (
        <div className='all'>
            <Box m={10} />
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={4} />
                    <h1 className='result'>{num}</h1>
                    <button onClick={clear} >AC</button>
                    <button onClick={operatorHandler}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className='orange' onClick={operatorHondler} value="/">/</button>
                    <button className='gray' onClick={inputNum} value={7}>7</button>
                    <button className='gray' onClick={inputNum} value={8}>8</button>
                    <button className='gray' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHondler} value="X" >X</button>
                    <button className='gray' onClick={inputNum} value={4}>4</button>
                    <button className='gray' onClick={inputNum} value={5}>5</button>
                    <button className='gray' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHondler}  value="-">-</button>
                    <button className='gray' onClick={inputNum} value={1}>1</button>
                    <button className='gray' onClick={inputNum} value={2}>2</button>
                    <button className='gray' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHondler}  value="+">+</button>
                    <button id='buttonzero' className='gray' onClick={inputNum} value={0}>0</button>
                    <button className='gray' onClick={virgula}>.</button>
                    <button className='orange'onClick={calculete}>=</button>
                </div>
            </Container>
        </div>
    )
}
