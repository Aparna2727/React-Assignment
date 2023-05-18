import React from 'react'
import "./Quizz.css";
import { quetions } from '../Quiz_Quetion/Quetions'

export function QuizzResult(props){
    return(
        <div className='Quiz-Result'>
            <h2 className='Thank'>Thanks! Your Quiz Completed</h2>
            <h4 className='score'>Total Score {props.score}/20</h4>
            {props.score >= 12 ? <p className='Greeting'>Greetings! You passed the test.</p> : <p className='failed'>Sorry, you failed the test.</p>}
            <h4 className='total-correct-quetions'>Your Correct Quetion {props.correctAnser} out of {quetions.length}</h4>
            <button className='Restart-again-btn' onClick={props.handleRestartAgain}>Restart Again</button>
        </div>
    )
}