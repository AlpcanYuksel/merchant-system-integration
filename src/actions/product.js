import api from "./api";


export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const formateData = data =>({
    ...data
})

export const fetchall = () => dispatch => {
    api.product().fetchAll()
        .then(response => {
                //console.log(response);
                dispatch({
                    type:ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(err => console.log(err))

}

export const create = (data,onSucccess) => dispatch => {
data = formateData(data)
api.product().create(data)
.then(res =>{
    dispatch({
        type:ACTION_TYPES,
        payload: res.data,
        })
        onSucccess()
    })
    .catch(err => console.log(err))
}
//update
export const update = (id,data,onSucccess) => dispatch => {
    data = formateData(data)
    api.product().update(id,data)
    .then(res =>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload: {id, ...data}
        })
        onSucccess()
    })
        .catch(err => console.log(err))
}

//delete
export const Delete = (id,onSucccess) => dispatch => {
    api.product().delete(id)
    .then(res =>{
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload: id
            })
            onSucccess()
        })
        .catch(err => console.log(err))
    }
    