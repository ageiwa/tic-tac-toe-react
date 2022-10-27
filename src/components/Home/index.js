import React from 'react'

const ws = new WebSocket('ws://localhost:3000/ws')

const Home = () => {
    function openWebSocket() {
        ws.onopen = () => console.log('connected')

        ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            console.log(message)
        }

        ws.onclose = () => console.log('disconnected')
    }

    console.log(ws)

    return (
        <input type="text"></input>
    )
}

export default Home