import './whatwedo.css';
import Whatwedo1 from "./whatwedo1";
import Whatwedo2 from "./whatwedo2";
import Whatwedo3 from "./whatwedo3";
import Whatwedo4 from "./whatwedo4";
import Whatwedo5 from "./whatwedo5";

export default function Whatwedo() {
    return (
        <div className="whatwedo-container">    
            <div className="whatwedo-title">
                <h2>What We Do</h2>
                <p>With a focus on creativity and strategy, we offer a full suite of 
                digital services, including:</p>
            </div>
            <div>
                <Whatwedo1 />
                <Whatwedo2 />
                <Whatwedo3 />
                <Whatwedo4 />
                <Whatwedo5 />
            </div>
        </div>
    );
}