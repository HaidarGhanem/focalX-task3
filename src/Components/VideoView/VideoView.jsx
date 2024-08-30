import './VideoView.css'

const VideoView = () => {
  return (
    <>
    <div className="video__container">


        <div className="video__view__container">
            <div className="video__img__container">
                <img src="/images/VideoWallpaper.jpg" alt="" />
            </div>

            <div className="video__content__container">
                <div className="content__text">
                    <span>| VIDEO VIEW</span>
                    <h1>Get Closer View & Different Feeling</h1>
                </div>

                <div className="content__video">
                    <img src="/images/video-frame.jpg" alt="" />
                    <div className="play__icon">
                    <i className="fa-solid fa-play"></i>
                    </div>
                </div>

                <div className="video__boxes__container">
                    <div className="video__boxes">
                        <div className="video__box">
                            <span id='dot'></span>
                            <span>34</span>
                            <p>Buildings Finished Now</p>
                        </div>

                        <div className="video__box">
                            <span id='dot'></span>
                            <span>12</span>
                            <p>Years Experience</p>
                        </div>

                        <div className="video__box">
                            <span id='dot'></span>
                            <span>24</span>
                            <p>Awwards Won 2023</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

</div>
    </>
  )
}

export default VideoView