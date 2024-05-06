//@ts-nocheck
import { useEffect, useState } from "react";
import ProblemComponent from "../components/Problem";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import TopBar from "../components/Topbar";

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
        <div className="bg-slate-950 w-screen min-h-screen flex-col ">
            <div className="h-12  border-b border-white text-justify ">
                <TopBar></TopBar>
            </div>
                    <div >
                        {problems.length > 0 ? (
                            problems.map((problem, index) => {
                                return (
                                    <div className="flex justify-center  ">
                                    <ProblemComponent
                                        key={problem._id}
                                        title={problem.title}
                                        problemId={index + 1}
                                        monId={problem._id}
                                        tag={problem.tag}

                                    />
                                    </div>
                                );
                            })
                        ) : (
                            loading ? <VscLoading size={40} /> : null
                        )}
                    </div>
                    
            </div>
    );
}
