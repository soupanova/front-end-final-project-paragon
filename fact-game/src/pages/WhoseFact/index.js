import React from 'react'
import cn from 'classnames'
import styles from './WhoseFact.module.css'

import Header from '../../components/Header'
import Round from '../../components/Round'
import Title from '../../components/Title'
import Countdown from '../../components/Countdown'
import DisplayFact from '../../components/DisplayFact'

import ErrorSnackbar from '../../components/ErrorSnackbar'

import { useUserContext } from '../../contexts/User'

export default function WhoseFact({
    roundNumber,
    facts,
    participants,
    secondsLeft,
    handleAnswer,
    currentChoiceId,
    answerNotUpdatedError,
}) {
    const {
        user: { playerId },
    } = useUserContext()
    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text="Whose Facts?" />

                <Countdown secondsLeft={secondsLeft} />
                <div className={styles.factContainer}>
                    <DisplayFact facts={facts} />
                </div>
                <div className={styles.buttonContainer}>
                    {participants.map((participant) => {
                        return (
                            <button
                                className={
                                    currentChoiceId === participant.choiceId
                                        ? styles.selectedButton
                                        : styles.nameButton
                                }
                                key={participant.choiceId}
                                onClick={() =>
                                    handleAnswer({
                                        playerId,
                                        choice: participant.choiceId,
                                    })
                                }
                            >
                                {participant.text}
                            </button>
                        )
                    })}
                </div>
            </main>
            {answerNotUpdatedError && (
                <ErrorSnackbar
                    errorMessage={answerNotUpdatedError}
                    autoHideDuration={null}
                />
            )}
        </>
    )
}