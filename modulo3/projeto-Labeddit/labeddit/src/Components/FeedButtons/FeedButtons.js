import React, { useState } from 'react'
import { subVote, downVote, deleteVote } from '../../services/postsRequests';


const FeedButtons = (props) => {
    const [voteState, setVote] = useState(false);

    const onClickUp = (id) => {
        if(voteState === false) {
            subVote(id, setVote)
        } 
        else if (voteState === true) {
           deleteVote(id, setVote)
        }
    };

    const onClickDown = (id) => {
        if(voteState === false) {
            downVote(id, setVote)
        } 
        else if (voteState === true) {
            deleteVote(id, setVote)
        }
    }
    return (
        <>
            <button onClick={() => onClickUp(props.id)}> {props.votesQuantity} </button> 
            <button onClick={() => onClickDown(props.id)}> X </button>
        </>
    )
};

export default FeedButtons;