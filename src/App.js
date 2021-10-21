import React from 'react'
import ContentDisplayer from './components/ContentDisplayer'


function App(props) {
    return (
        <div>
            <ContentDisplayer/>
           
            {props.children}
        </div>
    )
}

export default App
