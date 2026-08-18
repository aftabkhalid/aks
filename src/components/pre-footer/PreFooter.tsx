"use client";

// import { GLSLHills } from "./GLSLHills";
import "./PreFooter.css";

export default function Footer() {
  return (
    <section className="section pre-footer text-white position-relative overflow-hidden">
      {/* Background Animation Canvas */}
      {/* <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <GLSLHills speed={0.4} cameraZ={130} />
      </div> */}

      {/* Foreground Content */}
      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center justify-content-center text-center my-5">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="fs-48 mb-3">
              Let's discuss what you're building
            </h2>
            <p className="fs-5 opacity-50 mb-4">
              Tell me about your goals and I will reply within a day with a
              clear scope and next steps.
            </p>
            <button
              type="button"
              className="btn btn-theme rounded-pill px-4 py-2 fw-semibold"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}