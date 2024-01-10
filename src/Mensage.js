//CODE IN ONE LINE

// const Message = ({message}) => <h1>{message}</h1>

// const Message = ({message}) => {
//     return <h1>{message}</h1>
// }

const Message = (props) => {
    return (
        <div>
            <h1>{props.message}</h1>
        </div>
    )
}

export default Message;