import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css'

function ReactTyping() {
  return (
    <>
    <ReactTypingEffect
        text={[" Recipes to cook delicious meals.", "Mind blowing delicacies.", "Intercontinental Meals"]} 
        className='text-[#900C3F] '
        />
    </>
  )
}

export default ReactTyping