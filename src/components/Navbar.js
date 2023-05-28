import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#232323', padding: '10px 20px' }}>
            <Link to="/"><div style={{ padding: '0 20px', color: "white" }}>HOME</div></Link>
            <Link to="/player-form"><div style={{ padding: '0 20px', color: "white" }}>Create Player</div></Link>
            <Link to="/team-list"><div style={{ padding: '0 20px', color: "white" }}>Create Team</div></Link>
            <Link to="/match-creation"><div style={{ padding: '0 20px', color: "white" }}>Create Match</div></Link>
        </div>
    )
}

export default Navbar