import {useState, useEffect} from "react";
import { API } from "../../constants/Api";

function Catfacts() {
    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(API);

                if(response.ok) {
                  const json = await response.json();
                console.log(json)
                setFacts(json)  
                }
                else {
                   setError("An Error") 
                }
                
            } 
            catch(error) {
                setError(error.toString())
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) {
        return <div className="loading">Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return <>
        {facts.map(function(fact) {
            return <div className="cat-facts" key={fact._id}>{fact.text}</div>
        })}
    
    </>


}

export default Catfacts;