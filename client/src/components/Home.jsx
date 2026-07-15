import Counter from "./counter";
import IncrementDecrement from "./IncrementDecrement";

function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio Website</h1>
            <div>
                <p>Hello everyone!</p>
                <Counter />
                <IncrementDecrement />
            </div>
        </div>

    )
}

export default Home;