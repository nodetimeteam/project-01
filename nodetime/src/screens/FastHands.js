import React from 'react'
import fastHandsPic from './fastHands.png'
class FastHands extends React.PureComponent {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <img className="w-100 h-100" src={fastHandsPic} alt="logo" />
                    {/* <button type="button" onClick={this.submit} className="btn btn-primary">Enter here</button> */}
                </div>
            </div>
        )
    }
}

export default FastHands
