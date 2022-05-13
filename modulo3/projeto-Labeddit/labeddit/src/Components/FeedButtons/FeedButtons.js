import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls';
import { token } from '../../constants/tokens';


const FeedButtons = (props) => {
    const [voteState, setVoteState] = useState(false);

    const subVote = (id) => {
        const url = `${BASE_URL}/posts/${id}/votes`
        const body = { direction: 1 }
    
        axios.post(url, body, {headers: {
            Authorization: token
        }})
        .then((res) => {
            setVoteState(true);
        }).catch((err) => {})
    };

    const downVote = (id) => {
        const url = `${BASE_URL}/posts/${id}/votes`
        const body = {direction: -1}

        axios.put(url, body, {headers: {
            Authorization: token
        }})
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err.message)
        })
    };

    const onClickUp = (id) => {
        if(voteState === false) {
            const subVote = () => {
                const url = `${BASE_URL}/posts/${id}/votes`
                const body = { direction: 1 }
            
                axios.post(url, body, {headers: {
                    Authorization: token
                }})
                .then((res) => {
                    setVoteState(true);
                    console.log('funcionou essa porra')
                }).catch((err) => {})
            };
        } 
        else if (voteState === true) {
            const deleteVote = () => {
                const url =  `${BASE_URL}/posts/${id}/votes`

                axios.delete(url, {headers: {
                    Authorization: token
                }})
                .then((res) => {
                    console.log("ae caralho")
                    setVoteState(false);
                }).catch((err) => {
                    console.log(err.response)
                })
            }
        }
    }
    return (
        <>
            <button onClick={() => onClickUp(props.id)}> {props.votesQuantity > 0 ? props.votesQuantity : 0} </button> 
            <button onClick={() => downVote(props.id)}> X </button>
        </>
    )
};

export default FeedButtons;