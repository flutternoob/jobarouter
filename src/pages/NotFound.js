import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita accusamus sunt qui odit hic nisi, a, asperiores quae sequi odio! Velit officia modi, sint expedita ipsam nostrum quibusdam eum!</p>

            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}