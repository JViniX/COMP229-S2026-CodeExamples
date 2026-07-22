import Counter from "./counter";
import IncrementDecrement from "./IncrementDecrement";
import ControlledComponent from "./ControlledComponent";

function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio Website</h1>
            <div>
                <p>Hello everyone!</p>
                <Counter />
                <IncrementDecrement />
                <ControlledComponent />
            </div>
        </div>

    )
}

export default Home;