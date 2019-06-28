import React from 'react'

const Image = (props) => {
    const str = props.post.primaryImageUrl
    const mainStr = str.split('.', 3)
    const modStr = `${mainStr[0]}.${mainStr[1]}_220x220_1.${mainStr[2]}`
    return (
        <img src={modStr} alt={props.post.code} />
    )
}

export default Image