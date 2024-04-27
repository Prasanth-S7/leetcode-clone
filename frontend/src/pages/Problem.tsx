//@ts-nocheck
import { useEffect, useState } from "react";
import ProblemComponent from "../components/Problem";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";

export default function Problem() {
    const [loading, setLoading] = useState(true);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function getProblems() {
            try {
                const response = await axios.get("http://localhost:3000/problems");
                setProblems(response.data.problems);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching problems:', error);
            }
        }

        getProblems();
    }, []);

    return (
        <div className="w-screen h-screen">
            <div>
                {problems.length > 0 ? (
                  problems.map((problem, index) => {
                    return (
                        
                        <ProblemComponent onClick={()=>console.log("hello")} 
                        style={{ border: '5px solid black' }} 
                            key={problem._id}
                            title={problem.title}
                            problemId={index + 1}
                            tag={problem.tag}
                        />
                    );
                })
                ) : (
                    loading ? <VscLoading size={40} /> : null
                )}
            </div>
        </div>
    );
}
