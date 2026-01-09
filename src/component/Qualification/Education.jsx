export default function Education() {
  return (
    <div className="qualification__content">

      {/* MCA */}
      <div className="qualification__data">
        <div></div>

        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>

        <div>
          <h3 className="qualification__title">MCA</h3>
          <span className="qualification__subtitle">BCIIT, Govind Puri</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i>2022 - 2024
          </div>
        </div>
      </div>

      {/* BCA */}
      <div className="qualification__data">
        <div>
          <h3 className="qualification__title">BCA</h3>
          <span className="qualification__subtitle">JBKP, Faridabad</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i>2018 - 2021
          </div>
        </div>

        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      {/* 12th */}
      <div className="qualification__data">
        <div></div>

        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>

        <div>
          <h3 className="qualification__title">12th (PCM)</h3>
          <span className="qualification__subtitle">Kendriya Vidyalaya, Raiwala</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i>2018
          </div>
        </div>
      </div>
      
    </div>
  );
}
