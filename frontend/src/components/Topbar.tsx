export default function TopBar(){
    return(
            <div className="flex gap-x-10 text-lg text-white items-center justify-center h-full mb-3">
                <div className="cursor-pointer hover:text-pink-700">About</div>
                <div className="cursor-pointer hover:text-pink-700">Problems</div>
                <div className="cursor-pointer hover:text-pink-700">Leaderboard</div>
                <div className="cursor-pointer hover:text-pink-700">Activity</div>
            </div>
    )
}