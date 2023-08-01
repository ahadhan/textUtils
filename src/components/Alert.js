import React from 'react'


export default function Alert(props) {

    return (
            props.alert && <div class="alert alert-success" role="alert">
                {props.alert && props.alert.alert} <strong>{props.alert.message}</strong>
            </div>
    )
};