import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [Score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentDice, setCurrentDice] = useState(1);
  const[error, setError] = useState("");
  const[showRules, setShowRules] = useState(false)

  const generateRandonNumber = (min, max) =>{
    return Math.floor(Math.random()  * (max - min) + min);
};

const rollDice=()=>{
  if(!selectedNumber){
    setError("You have not selected any number");
    return;
  } 
  
    const randomNumber = generateRandonNumber(1,7)
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
}

const resetScore=()=>{
  setScore(0);
}


  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore Score={Score} />
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <RollDice 
        currentDice={currentDice}
        rollDice={rollDice}
        />
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={() => setShowRules(prev => !prev)}
          >{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules />}
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`