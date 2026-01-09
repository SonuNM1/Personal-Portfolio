import "./Work.css";
import Works from "./Works";

export default function Work() {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      {/* <span className="section__subtitle message">(Most recent works) <br/> More complex projects will be added soon...</span> */}
      <div style={{ marginTop: "2rem" }}>
        <Works />
      </div>
    </section>
  );
}
