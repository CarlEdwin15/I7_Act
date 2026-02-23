function LeftPanel({ progress, completed, total }) {
  return (
    <div className="left-panel">
      <div className="welcome-card">
        <p className="welcome-text">
          Good morning, Alvin! Rise and shine, ready to tackle the day with enthusiasm and positivity?
        </p>

        <div className="progress-card">
          <div className="percentage">{progress}%</div>

          <div>
            <p className="muted">TASK COMPLETED</p>
            <h2>
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

      <div className="stats">
        <div className="stat-card pink">
          <p>COMPLETED</p>
          <h2>{completed}</h2>
        </div>

        <div className="stat-card purple">
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>

        <div className="stat-card orange">
          <p>PROGRESS</p>
          <h2>{progress}%</h2>
        </div>

        <div className="stat-card empty"></div>
      </div>
    </div>
  );
}

export default LeftPanel;