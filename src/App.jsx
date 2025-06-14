import Joke from "./Joke"

export default function App(){
    const ninjaTurtles = ["Donatello","Raphael","Leonardo","Michaelangelo"]
    const myMap = ninjaTurtles.map(ninja => {
        const jsx = <h2>{ninja}</h2>
        return jsx;
    })
    return(
        <main>
            {myMap}
        </main>
    )
}

/*<Joke 
                setup="Why don't skeletons fight each other?"
                punchline="They don't have the guts."
            />
            <Joke 
                setup="What do you call fake spaghetti?"
                punchline="An impasta."
            />
            <Joke 
                setup="Why did the scarecrow win an award?"
                punchline="Because he was outstanding in his field."
            />
            <Joke 
                setup="Why can't your nose be 12 inches long?"
                punchline="Because then it would be a foot."
            />
            <Joke 
                punchline="I told my wife she was drawing her eyebrows too high—she looked surprised."
            />
            <Joke 
                punchline="I used to play piano by ear, but now I use my hands."
            /> */