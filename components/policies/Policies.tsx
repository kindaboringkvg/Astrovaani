// components/Policies.tsx
export default function Policies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Policies</h1>

      {/* Refund Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>
        <p className="mb-4">
          Due to the personalized and time-intensive nature of our spiritual and astrological services, <strong>all payments are non-refundable</strong> once the service has been delivered or initiated. 
        </p>
        <p className="mb-4">
          We encourage clients to review service details thoroughly and reach out with any queries before booking.
        </p>
        <p className="mb-4">
          <strong>Double Payments or Technical Errors:</strong> Contact us within <strong>48 hours</strong> for a review.
        </p>
        <p>
          <strong>Short-Notice Cancellations:</strong> Appointments cancelled with less than <strong>8 hours’ notice</strong> may incur a fee and result in session forfeiture.
        </p>
      </section>

      {/* Return Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Return Policy</h2>
        <p className="mb-4">
          As we provide digital consultations, rituals, and custom reports, <strong>returns are not applicable</strong>.
        </p>
        <p>
          For physical items, such as candles or delivered spiritual products:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Report damage or incorrect delivery within <strong>3 days</strong>.</li>
          <li>Include <strong>photo or video proof</strong> for issue resolution.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>
        <p className="mb-4">
          Your trust is important to us. We securely store all personal information — including birth details, contact information, and consultation history — and limit access to authorized personnel only.
        </p>
        <p className="mb-4">
          <strong>We do not share or sell your data.</strong> Your information is used only to provide accurate and personalized services.
        </p>
        <p>
          Our website uses <strong>SSL encryption</strong> and adheres to data protection best practices to ensure your privacy is never compromised.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
        <p className="mb-4">
          The services offered on this website are intended for <strong>guidance, insight, and reflection</strong> purposes only. Outcomes may vary between individuals.
        </p>
        <p className="mb-4">
          These services are <strong>not a substitute</strong> for professional medical, legal, or financial advice.
        </p>
        <p>
          All decisions made based on our services are at your sole discretion.
        </p>
      </section>
    </div>
  );
}
