import React from 'react'
import GameLobby from './index'

// This default export determines where your story goes in the story list
export default {
    title: 'GameLobby',
    component: GameLobby,
}

const Template = (args) => <GameLobby {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    secondsLeft: 50,
    gameId: '03216c1c',
    players: ['Katie Hawcutt'],
}
