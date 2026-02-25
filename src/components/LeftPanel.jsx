import cloud from "../assets/icons/sunny_cloud.png";
// import bg1 from "../assets/Bg1.png";

function LeftPanel({
  progress,
  completed,
  total,
  pastDueCount,
  todayCount,
  incomingCount,
  setFilter,
  activeFilter,
}) {
  return (
    <div className="left-panel">
      <div className="welcome-card">
        <div className="welcome-content">
          <div className="welcome-header">
            <img src={cloud} alt="Sunny Cloud" className="cloud-icon" />
            <p className="welcome-text">
              Good morning, Alvin! Rise and shine, ready to tackle the day ahead
              with enthusiasm and positivity?
            </p>
          </div>

          <div className="progress-section">
            <div className="percentage">
              {progress}
              <span className="percentage-sign">%</span>
            </div>

            <div className="progress-card">
              <p className="muted">TASK COMPLETED</p>
              <h2 className="completed-count">
                {completed}/{total}
              </h2>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div
          className={`stat-card pink ${activeFilter === "past" ? "active" : ""}`}
          onClick={() => setFilter("past")}
        >
          <p>PAST DUES</p>
          <h2>{pastDueCount}</h2>
        </div>

        <div
          className={`stat-card purple ${activeFilter === "today" ? "active" : ""}`}
          onClick={() => setFilter("today")}
        >
          <p>TODAY</p>
          <h2>{todayCount}</h2>
        </div>

        <div
          className={`stat-card orange ${activeFilter === "incoming" ? "active" : ""}`}
          onClick={() => setFilter("incoming")}
        >
          <p>INCOMING</p>
          <h2>{incomingCount}</h2>
        </div>

        <div
          className={`stat-card green ${activeFilter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          <p>COMPLETED</p>
          <h2>{completed}</h2>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
