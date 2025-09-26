import React, { Component } from "react";
import "./EventPlanner.css";

class EventPlanner extends Component {
  render() {
    return (
      <div className="eventplanner-container">
        <header>
          <h1>Welcome to Event Planner</h1>
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

            <h2>Features</h2>

            <ul>
                <li>Easy Event Creation & Management</li>
                <li>Customizable Event Templates</li>
                <li>Guest List Management</li>
                <li>Real-time Collaboration</li>
                <li>Reminders & Notifications</li>
            </ul>

        </section>


        <section className="testimonials">

            <h2>Testimonials</h2>

            <div className="testimonial">
                <p>"Event Planner made orginizing my wedding a breeze. Highly recommended."</p>
                <p className = "author">- Emily Johnson</p>
                
            </div>

            <div className="testimonial">
                <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                <p className = "author">- John Smith</p>

            </div>

        </section>


        <section className="contact">

          <h2>Contact Us</h2> 

            <form>
                <input type = "text" placeholder = "Name:"/>

                <input type = "email" placeholder = "Em@il:"/>

                <textarea placeholder = "Message:"></textarea>

                <button className = "submit-button">Send</button>

            </form>
        
        </section>


      </div>
    );
  }
}

export default EventPlanner;

