

const TrackProgressor = ({ done, title, icon }) => {
  return !done ? (
   
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon">
            <i className={icon}></i>
          </div>
        </div>
      
      <h4 className="step-title">{title}</h4>
      </div>

   
  ) : (
    <div className="step completed">
      <div className="step-icon-wrap">
        <div className="step-icon">
          <i className={icon}></i>
        </div>
      </div>
      <h4 className="step-title">{title}</h4>
    </div>
  );
};

export default TrackProgressor;

// processing_order: true;
// product_delivered: false;
// product_dispatched: false;
// quality_check: false;
