//@ts-nocheck
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function ProblemComponent({ monId,problemId, title, tag }) {
    function goToProblem(monId){
        navigate(`/problems/${monId}`)
    }
    const navigate = useNavigate();
    return (
        <div onClick={()=>goToProblem(monId)} className="w-1/2 h-28 p-5 shadow-md relative border-2 border-black">
            <div className=" flex justify-normal items-start  h-full">
                <div className="text-gray-500 text-start mr-11">{problemId}</div>
                <div className="">
                    <div className="mb-4 text-gray-500 ">{title}</div>
                    <div className=" text-sm text-start bg-gray-800 text-white w-max px-2 py-1 ">{tag}</div>
                </div>
                <div className="flex items-start gap-x-3 absolute right-0">
                    <div className="text-xs text-gray-500 ">recently solved by </div>
                    <div className=" w-10 h-10"><FaUserCircle size={32}/></div>
                </div>
            </div>
        </div>
    )
}