import "../../App.css";

const Form = () => {
    return(
        <>
            
            <form action="" class="footer-form">
              <p class="footer-list-title">Book a Table</p>

              <div class="input-wrapper">
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Your Name"
                  aria-label="Your Name"
                  class="input-field"
                />

                <input
                  type="email"
                  name="email_address"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  class="input-field"
                />
              </div>

              <div class="input-wrapper">
                <select
                  name="total_person"
                  aria-label="Total person"
                  class="input-field"
                >
                  <option value="person">Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5 person">5 Person</option>
                </select>

                <input
                  type="date"
                  name="booking_date"
                  aria-label="Reservation date"
                  class="input-field"
                />
              </div>

              <textarea
                name="message"
                required
                placeholder="Message"
                aria-label="Message"
                class="input-field"
              ></textarea>

              <button type="submit" class="btn">
                Book a Table
              </button>
            </form>
        </>
    );
}

export default Form