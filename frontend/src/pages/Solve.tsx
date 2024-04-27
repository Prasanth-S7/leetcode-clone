//@ts-nocheck
import { useEffect, useState } from "react"
import axios from "axios"
import TopBar from "../components/Topbar"
import { useParams } from "react-router-dom"
import Card from "../components/card"
import { Button } from "../components/ui/button"
import MonacoComponent from "../components/MonacoComponent"
import { PiSquareSplitVerticalDuotone } from "react-icons/pi"
export default function Solve() {
    const params = useParams();
    const { id } = params;
    useEffect(() => {
        async function getProblem() {
            const response = await axios.get(`http://localhost:3000/problems/solve/${id}`)
            console.log(JSON.stringify(response.data));
            setTitle(response.data.msg.title);
            setDescription(response.data.msg.description);
            setTag(response.data.msg.tag);
            setTestCases(response.data.msg.testCases)
        }
        getProblem();
    }, [id])
    const onChange = (action, data) => {
        switch (action) {
          case "code": {
            setCode(data);
            break;
          }
          default: {
            console.warn("case not handled!", action, data);
          }
        }
      };
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [testCases, setTestCases] = useState([])
    const [tag, setTag] = useState("")
    const [code ,setCode] = useState("")
    console.log("final code" + code);
    return (
        <div className="bg-slate-950 min-h-screen  w-screen px-8">
            <div className="h-12  text-justify border-b-2 border-b-white  ">
                <TopBar ></TopBar>
            </div>
            <div className="flex justify-center gap-4 mt-3">
                <Button variant={"secondary"} >Run</Button>
                <Button variant={"secondary"}>Submit</Button>
            </div>
            <div className="text-white px-4 pt-6 mt-3 min-h-screen grid grid-cols-2 divide-x-2">
                <div >
                    <Card>
                        <div className="text-3xl font-bold my-5">Problem</div>
                        <div className="text-3xl font-semibold my-5">{title}</div>
                        <div className="my-10 text-md">{description}</div>
                        <div className="text-3xl my-5 font-bold">Sample TestCases</div>
                        <div>
                            {
                                testCases.map((testcase, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="font-semibold">Input  :  {testcase.input}</div>
                                            <div className="font-semibold">Output :  {testcase.output}</div>
                                        </div>
                                    );
                                })
                            }
                        </div>6
                    </Card>
                </div>
                <div className="my-5 mb-5 min-h-screen pl-6">
                    <MonacoComponent onChange={onChange}></MonacoComponent>
                </div>
            </div>
        </div>
    )
}