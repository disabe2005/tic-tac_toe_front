// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameForm from "./GameForm";

// GameKata Component
const GameKata = () => {
    const [formValues, setFormValues] =
        useState({ playerNameOne: '', playerNameTwo: '' })
    // onSubmit handler
    const onSubmit = gameObject => {
        axios.post(
            'http://localhost:8080/api/v0/game/init',
            gameObject)
            .then(res => {
                if (res.status === 200)
                    alert('Game started !')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return Game form
    return (
        <GameForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Start Game
        </GameForm>
    )
}

// Export CreateStudent Component
export default GameKata
