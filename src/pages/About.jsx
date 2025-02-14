export default function About() {
  return (
    <div className="w-[80vh] bg-outerBox border border-[#0E464F] rounded-lg shadow-sm text-white text-sm font-light p-9">
      <div className="flex flex-col justify-center">
        <h2>Event Ticket Booking UI – Open Source Practice Project 🎟️</h2>
        <br />
        <p>Overview</p>
        <br />
        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <br />
        <p>
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>
        <br />
        <p>Flow & Features</p>
        <br />
        <p>
          1️⃣ Ticket Selection
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
            details.
          </li>
          <li>
            For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
            payment modal.
          </li>
        </p>
        <br />
        <p>
          2️⃣ Attendee Details Form
          <li>Users input their Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload option with preview functionality.</li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </p>
        <br />
        <p>
          3️⃣ Payment or Success Page
          <li>
            If the ticket is free, the user is taken directly to the Ticket
            Confirmation Page.
          </li>
          <li>
            If the ticket is paid, developers can integrate Stripe, Paystack, or
            Flutterwave to process payments before showing the confirmation
            page.
          </li>
          <li>Upon successful booking, users should receive:</li>
          <li>A visual ticket preview with a unique QR Code.</li>
          <li>
            An option to download the ticket as PDF or save it to their device.
          </li>
          <li>An email confirmation containing ticket details.</li>
        </p>
        <br />
        <p>This UI can be implemented using:</p>
        <br />
        <p>
          📌 Frontend (Next.js or React)
          <li>Component Breakdown:</li>
          <li>TicketCard.tsx → Displays ticket details</li>
          <li>AttendeeForm.tsx → Captures user details</li>
          <li>PaymentModal.tsx → Handles payment processing</li>
          <li>SuccessScreen.tsx → Shows the final ticket preview</li>
          <li>
            State Management: React’s Context API, Zustand, or Redux (if
            needed).
          </li>
          <li>
            File Handling: Users should be able to upload images (profile
            picture for ticket) using Firebase Storage, Cloudinary, or local
            preview with URL.createObjectURL().
          </li>
        </p>
        <br />
        <p>
          📌 Backend (Optional)
          <li>If persistence is required, a backend can be built using:</li>
          <li>Node.js & Express or Firebase Functions</li>
          <li>
            Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
            records
          </li>
        </p>
        <br />
        <p>
          📌 Payment Integration
          <li>For paid events, developers should integrate:</li>
          <li>Stripe Checkout (for international transactions)</li>
          <li>Paystack or Flutterwave (for African users)</li>
        </p>
        <br />
        <p>What You’ll Learn 🧑‍💻</p>
        <li>File handling & validation (profile picture uploads).</li>
        <li>Dynamic UI updates based on ticket selection.</li>
        <li>Persisting bookings using local state or a backend.</li>
        <li>Integrating payment gateways for ticket purchases.</li>
        <li>Generating & validating QR Codes for event check-in (Advanced).</li>
        <br />
        <p>Need Help? Reach Out! 💬</p>
      </div>
    </div>
  );
}
