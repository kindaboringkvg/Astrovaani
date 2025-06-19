// components/Policies.tsx
export default function Policies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Policies</h1>

      {/* Refund Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>
        <p className="mb-4">
          Due to the personalized, time-sensitive, and non-tangible nature of our spiritual and astrological services, <strong>all payments are non-refundable</strong> once a service is delivered, initiated, or scheduled.
        </p>
        <p className="mb-4">
          We encourage clients to review service descriptions thoroughly and <strong>contact us with any questions</strong> before making a purchase.
        </p>
        <p className="mb-4">
          <strong>Double Payments or Technical Errors:</strong> Notify us within <strong>48 hours</strong> with evidence. Verified requests will be refunded within <strong>7 working days</strong>.
        </p>
        <p>
          <strong>Short-Notice Cancellations:</strong> Appointments canceled within <strong>8 hours</strong> of the scheduled time may incur a penalty fee or session forfeiture.
        </p>
      </section>

      {/* Return Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Return Policy</h2>
        <p className="mb-4">
          As most of our offerings are <strong>digital</strong> (consultations, rituals, reports), <strong>returns are not applicable</strong>.
        </p>
        <p className="mb-2">
          For physical items, such as crystal bracelets, candles, or delivered spiritual products:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Report damage or incorrect delivery within <strong>3 calendar days</strong> of delivery.</li>
          <li>Include <strong>photo or video proof</strong> to facilitate resolution.</li>
          <li>Products must be <strong>unused and in original packaging</strong> to be eligible for return or replacement.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>
        <p className="mb-4">
          We are committed to protecting your personal information. All data including <strong>birth details, contact info, and session history</strong> is securely stored.
        </p>
        <p className="mb-4">
          <strong>We do not share or sell your data</strong> with third parties. Your information is only used to provide personalized services.
        </p>
        <p className="mb-4">
          Our website uses <strong>SSL encryption</strong> and complies with data protection standards. Only authorized personnel may access your information.
        </p>
        <p>
          You may contact us to request data <strong>access, correction, or deletion</strong> in line with applicable privacy laws.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
        <p className="mb-4">
          Our services—including readings, rituals, and spiritual products—are intended for <strong>personal insight, reflection, and spiritual growth</strong>.
        </p>
        <p className="mb-4">
          They are <strong>not a substitute</strong> for licensed medical, psychological, legal, or financial advice. No guaranteed results are claimed.
        </p>
        <p className="mb-4">
          Crystal products are sold as <strong>spiritual/lifestyle accessories</strong>, not as medical devices or miracle cures. Outcomes may vary between individuals.
        </p>
        <p>
          All decisions made based on our services are <strong>entirely at the client’s discretion and responsibility</strong>.
        </p>
      </section>

      {/* Product Classification */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Product Classification and Compliance</h2>
        <p className="mb-4">
          All crystal bracelets and spiritual accessories sold on this website are categorized as <strong>fashion/lifestyle items</strong>.
        </p>
        <p className="mb-4">
          We explicitly avoid medical or miraculous claims and include appropriate <strong>disclaimers</strong> to comply with payment gateway and legal requirements.
        </p>
        <p>
          We declare that our business operations adhere to <strong>Razorpay’s Acceptable Use Policy</strong> and do not involve prohibited content or services.
        </p>
      </section>

      {/* Contact Info
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="mb-2">For questions related to orders, payments, refunds, or compliance, reach out to us at:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li><strong>Email:</strong> support@yourdomain.com</li>
          <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
          <li><strong>Business Hours:</strong> Mon–Sat, 10:00 AM – 7:00 PM</li>
        </ul>
      </section> */}
    </div>
  );
}
