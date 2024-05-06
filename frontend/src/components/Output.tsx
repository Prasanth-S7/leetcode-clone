import { Button } from "../components/ui/button"
export default function Output({TestCases="[1,2,34,5]",Target="9"}) {
    return (
        <div className="h-full text-white bg-slate-950">
            <div className="flex rounded-md justify-start p-0  bg-slate-800">
                <div className="">
                    <Button className=" text-xs px-1 py-0 hover:bg-slate-600 hover:text-white mr-2" variant="ghost">Testcase</Button>
                    <Button className="px-1 py-0 text-xs hover:bg-slate-600 hover:text-white" variant="ghost">TestResult</Button>
                </div>
            </div>
            <div className="mx-3">
                <div className="mt-2 flex justify start ">
                    <Button className=" text-xs px-2 py-0 hover:bg-slate-600 hover:text-white mr-2" variant="ghost">Case 1</Button>
                    <Button className=" text-xs px-2 py-0 hover:bg-slate-600 hover:text-white mr-2" variant="ghost">Case 2</Button>
                    <Button className=" text-xs px-2 py-0 hover:bg-slate-600 hover:text-white mr-2" variant="ghost">Case 3</Button>
                </div>
                <div>
                    <p className="text-sm">Input</p>
                    <div className=" border-2 border-white rounded-md p-2 mt-2">{TestCases}</div>
                </div>
                <div>
                <p className="text-sm mt-2 ">Target</p>
                    <div className=" border-2 border-white rounded-md p-2 mt-2">{Target}</div>
                </div>
                
            </div>
        </div>
    )
}