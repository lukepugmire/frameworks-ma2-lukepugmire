import Heading from "../layout/Heading";
import Catfacts from "../catFacts/Catfacts";

export default function Home() {
	return <>
        <Heading title="Cat Facts" />
        <div className="content">
            <div className="facts-container">
        <Catfacts/>
    </div>
    </div>
    

    
    
    </>;
}