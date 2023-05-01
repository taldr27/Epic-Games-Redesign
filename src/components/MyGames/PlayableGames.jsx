import { FaPlay } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdFileDownload } from 'react-icons/md';
import { myGames } from "../../constants";

const PlayableGames = () => {
  return (
    <div className="grid lg:grid-cols-8 2xl:grid-cols-10 gap-3">
      {myGames.map((myGame) => (
        <div key={myGame.id} className="w-[128px] h-[235px]">
          <img src={myGame.img} className="w-[129px] h-[189px]" />
          <div>
            <div className="flex items-center relative">
              <span className="font-bold text-sm">
                {myGame.gameTitle.length > 12 ? `${myGame.gameTitle.slice(0, 11)}...` : myGame.gameTitle}
              </span><BiDotsHorizontalRounded className="absolute right-0 text-lg" />
            </div>
              {myGame.status !== "playable" ? <div className="flex items-center gap-[9px] text-sm"><MdFileDownload /><span className="">Install</span></div> : <div className="flex items-center gap-[9px] text-xs"><FaPlay /><span className="text-sm">Play</span></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayableGames;
