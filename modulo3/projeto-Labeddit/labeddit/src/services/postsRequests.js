import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'

export const subVote = (id, setUpVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const body = { direction: 1 }

    axios.post(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setUpVote(true);
    }).catch((err) => {})
};

export const downVote = (id, setDownVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const body = {direction: -1}

    axios.put(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setDownVote(true)
    }).catch((err) => {
    })
}

export const deleteVote = (id, setVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`

    axios.delete(url, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setVote(false);
    }).catch((err) => {
        console.log(err.response)
    })
};

export const sendNewPost = (form) => {
    const url = `${BASE_URL}/posts`;
    const acessToken = token;

    axios
      .post(url, form, {
        headers: {
          Authorization: acessToken,
        },
      })
      .then((res) => {
        alert("Post criado!");
      })
      .catch((err) => {
          console.log(err.response)
        alert("Algo deu errao. Por favor, tente novamente.");
      });
  };