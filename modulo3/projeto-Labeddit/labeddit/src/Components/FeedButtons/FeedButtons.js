import React, { useState } from 'react'
import { subVote, downVote, deleteVote } from '../../services/postsRequests';
import { onClickUp, onClickDown } from '../../services/votesRequests';
import redArrow from '../../assets/redArrow.png'
import greenArrow from '../../assets/greenArrow.png'
import upArrow from '../../assets/upArrow.png'
import downArrow from '../../assets/downArrow.png'
import { ContainerLikeButtons, LikeButtons } from './style';



const FeedButtons = (props) => {
    const [voteUpState, setVoteUp] = useState(false);
    const [voteDownState, setVoteDown] = useState(false);
   
    return (
        <ContainerLikeButtons>
            <LikeButtons 
            onClick={() => onClickUp(voteUpState, 
            setVoteUp, 
            subVote(props.id, setVoteUp), 
            props.id, 
            deleteVote(props.id, setVoteUp))}
            > 
            <img src={voteUpState === true ? greenArrow : upArrow}/>
            </LikeButtons> 

            <p> {props.votesQuantity} </p>

            <LikeButtons 
            onClick={() => onClickDown(voteDownState,
            setVoteDown,
            downVote(props.id, setVoteDown),
            props.id,
            deleteVote(props.id, setVoteDown))}
            > 
            <img src={voteDownState === true ? redArrow : downArrow} />
            </LikeButtons>
        </ContainerLikeButtons>
    )
};

export default FeedButtons;