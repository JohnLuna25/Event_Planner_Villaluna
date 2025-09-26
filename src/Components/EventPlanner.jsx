import React, { Component } from "react";
import "./EventPlanner.css";

class EventPlanner extends Component {
  render() {
    return (
      <div className="eventplanner-container">
        <header>
          <h1>Event Planner Application</h1>
        </header>

        <section className="description">
          <p>Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.</p>
        
          <button className = "get-started-button"> Get Started</button>

        </section>

        <section className="events_categories">

            <ul>
                <h2>Event Categories:</h2>
                <li>Social Events</li>
                <li>Birthday Parties</li>
                <li>Anniversary Celebrations</li>
                <li>Wedding Recetions</li>
                <li>Baby Showers</li>
                <li>Graduation Parties</li>
                <li>Family Reunions</li>
            </ul>

            <ul>
                <h2>Entertainment Events:</h2>
                <li>Concerts</li>
                <li>Music Festivals</li>
                <li>Film Screenings</li>
                <li>Comedy Shows</li>
                <li>Art Exhibitions</li>
                <li>Cultural Events</li>
            </ul>

            <ul>
                <h2>Community Events:</h2>
                <li>Fund-raising Events</li>
                <li>Charity Galas</li>
                <li>Volunteer Drives</li>
                <li>Neighborhood Block Parties</li>
                <li>Community Festivals</li>
                <li>Cultural Celebrations</li>
            </ul>

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

