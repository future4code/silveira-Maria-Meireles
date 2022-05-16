import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'


export const onClickUp = (state, setState, subFunction, id, deleteFunction) => {
    if(state === false) {
        subFunction(id, setState)
    } 
    else if (state === true) {
       deleteFunction(id, setState)
    }
};

export const onClickDown = (state, setState, id, deleteFunction, downFunction) => {
    if(state === false) {
        downFunction(id, setState)
    } 
    else if (state === true) {
        deleteFunction(id, setState)
    }
}