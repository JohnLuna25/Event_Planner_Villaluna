import React, { Component } from "react";
import "./EventPlanner.css"; // link to your CSS file

class EventPlanner extends Component {
  render() {
    return (
      <div className="eventplanner-container">
        <header>
          <h1>Event Planner Application</h1>
        </header>

        <section className="description">
          <p>This is the description section.</p>
        </section>

        <section className="events_categories">
          <p>This is the events categories section.</p>
        </section>

        <section className="features">
          <p>This is the features section.</p>
        </section>

        <section className="testimonials">
          <p>This is the testimonials section.</p>
        </section>

        <section className="contact">
          <p>This is the contact section.</p>
        </section>
      </div>
    );
  }
}

export default EventPlanner;

