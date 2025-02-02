import "../assets/style.css";
import { FaHouseChimney } from "react-icons/fa6";
import { getVideos } from "../api/video";
import { useState, useEffect } from "react";
const Main = () => {
  const [videos, setVideos] = useState([]);
  const videoAPI = async () => {
    const result = await getVideos();
    setVideos(result.data);
  };
  useEffect(() => {
    videoAPI();
  }, []);
  return (
    <main>
      <aside>
        <a href="">
          {" "}
          <FaHouseChimney /> <span>홈</span>
        </a>{" "}
        <a href="">
          {" "}
          <i className="fa-solid fa-folder"></i> <span>구독</span>
        </a>
      </aside>
      <div className="main-content">
        <nav>
          <a href="" className="active">
            전체
          </a>{" "}
          <a href="">음악</a> <a href="">게임</a>
          <a href="">뉴스</a> <a href="">라이브</a> <a href="">야생생물</a>
        </nav>
        <section>
          {videos.map((video) => (
            <div className="video-card" data-code="${video.videoCode}">
              <div className="video-main">
                <img src="{video.videoImg}" />
                <video src="{video.videoUrl}" controls></video>
              </div>
              <div className="video-info">
                <img src="{video.channel.channelImg}" />
                <div className="video-desc">
                  <h2>${video.videoTitle}</h2>
                  <p>${video.channel.channelName}</p>
                  <p className="video-meta" data-video-date="{video.videoDate}">
                    조회수 ${video.videoCount}회ㆍ
                    <span className="video-date"></span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Main;
