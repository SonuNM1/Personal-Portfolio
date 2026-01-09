import { useEffect, useRef } from "react";
import { cursorTrail } from "../../utils/cursor-trail";
import PropTypes from "prop-types";

export default function CursorTrailCanvas(props) {
  const refCanvas = useRef(null);
  const { color, style } = props;

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [color]);

  return (
    <canvas
      ref={refCanvas}
      className="cursor-trail-canvas"
      style={style}
    ></canvas>
  );
}

CursorTrailCanvas.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

CursorTrailCanvas.defaultProps = {
  color: "rgba(0, 0, 0, 0.5)",
  style: { opacity: 0.8 },
};
