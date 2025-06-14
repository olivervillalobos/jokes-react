export default function Joke(props){
    return(
        <div className="card">
            {props.setup && <p className="setup">{props.setup}</p>}
            <p>{props.punchline}</p>
        </div>
    )
}