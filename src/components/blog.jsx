import React, { useState } from "react";
import { Helmet } from "react-helmet";
import blogPoster from "../imgs/banner.png";

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Q: Is Tichi free to use?",
      answer: "Yes. Posting a service is completely free.",
    },
    {
      question: "Q: Do I have to share my number publicly?",
      answer: "No. Your contact details stay hidden unless unlocked.",
    },
    {
      question: "Q: Why would someone pay to contact me?",
      answer: "Because they’re serious, the fee filters out time-wasters.",
    },
    {
      question: "Q: What if I don’t want to respond after someone unlocks my contact?",
      answer:
        "You’re not obligated to respond, but the system encourages meaningful conversations.",
    },
    {
      question: "Q: What services can I post?",
      answer:
        "Anything useful from tutoring and rentals to event help and digital gigs.",
    },
  ];

  const TichiLink = () => (
    <a
      href="https://tichi.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:underline"
    >
      Tichi
    </a>
  );

  const sections = [
  {
    title: "Introduction",
    text: (
      <>
        Finding work or hiring someone shouldn’t be this hard, yet it often is.
        Posting in multiple groups, answering random calls, and dealing with
        people who aren’t serious wastes your time and energy.
        <br />
        <br />
        <TichiLink /> changes this. Whether you’re a student offering tutoring,
        a freelancer designing logos, or someone renting out a PG bed,{" "}
        <TichiLink /> makes the process simple: post your service, keep your
        contact private, and connect only with people who genuinely want what
        you offer.
      </>
    ),
  },
  {
    title: "What is Tichi?",
    text: (
      <>
        <TichiLink /> is a mobile-first platform built for real-life services.
        You can list what you offer, and people who are interested can unlock
        your contact details for a small fee. This way, both sides know the
        interaction is intentional and worth the effort.
        <br />
        <br />
        You can use <TichiLink /> for:
        <ul className="list-disc pl-6">
          <li>Part-time gigs</li>
          <li>Home services</li>
          <li>Rentals or sales</li>
          <li>Tutoring and academic help</li>
          <li>Event support and small businesses</li>
        </ul>
        No spam. No unnecessary crowd. Just purposeful connections.
      </>
    ),
  },
  {
    title: "How Tichi Works",
    text: (
      <>
        Many platforms let you post, but they expose your number publicly or
        flood you with irrelevant messages. <TichiLink /> works differently; it’s
        designed to protect your privacy while making connections more
        effective.
        <ol className="list-decimal pl-6">
          <li>
            <strong>Post a Service</strong> – Describe what you offer, add a
            price or images, and publish it. Example:
            <ul className="list-disc pl-6">
              <li>“PG Bed Available – ₹6,000/month”</li>
              <li>“Event Poster Design – ₹200/poster”</li>
              <li>“Class 12 Math Tutoring – ₹500/hour”</li>
            </ul>
          </li>
          <li>
            <strong>Stay Private</strong> – Your phone number is hidden by
            default, so no random calls or messages.
          </li>
          <li>
            <strong>Let Only Interested People Unlock You</strong> – When someone
            is ready to talk business, they pay ₹5–₹20 to unlock your contact.
            This ensures they’re serious.
          </li>
          <li>
            <strong>Track Every Contact</strong> – You can see who unlocked your
            info, when they did it, and what post they were interested in.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Why Tichi is Different",
    text: (
      <>
        Traditional ways of offering or finding services usually mean sharing
        your number publicly, joining endless groups, or dealing with vague
        messages from people who aren’t ready to commit. This wastes time,
        creates confusion, and leads to missed genuine opportunities.
        <br />
        <br />
        <TichiLink /> removes that frustration by putting you in control of your
        connections and keeping everything organized.
        <br />
        <br />
        <strong>What Others Do:</strong>
        <ul className="list-disc pl-6">
          <li>Publicly share numbers → invites spam.</li>
          <li>Post randomly in groups → wastes time.</li>
          <li>No way to check if a person is serious.</li>
          <li>Hard to track conversations and leads.</li>
        </ul>
        <strong>What Tichi Does:</strong>
        <ul className="list-disc pl-6">
          <li>Keeps your number private until you approve contact.</li>
          <li>Stores all listings in an organized, searchable format.</li>
          <li>Filters out casual browsers through small unlock fees.</li>
          <li>Lets you track every lead for better follow-up.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Real-Life Use Cases",
    text: (
      <>
        You don’t need to imagine complicated scenarios. <TichiLink /> works for
        everyday needs.
        <ul className="list-disc pl-6">
          <li>
            Renting a PG bed → Someone nearby looking for a room unlocks your
            contact and calls you.
          </li>
          <li>
            Offering online tutoring → Students find your post and message you
            only when they’re ready to start learning.
          </li>
          <li>
            Running a side hustle like logo design → Post your service once and
            let clients come to you, instead of pitching in multiple groups.
          </li>
          <li>
            Helping others find work → List a local cook, cleaner, or handyman
            and help them get genuine clients.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Who Should Use Tichi?",
    text: (
      <>
        If you have something to offer or need something done,{" "}
        <TichiLink /> is for you.
        <ul className="list-disc pl-6">
          <li>Students with skills or items to rent/sell</li>
          <li>Freelancers looking for more clients</li>
          <li>Locals renting out rooms, beds, or equipment</li>
          <li>Households hiring part-time or full-time help</li>
          <li>Event managers, café owners, or tutors</li>
        </ul>
      </>
    ),
  },
];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Tichi: The Smartest Way to Offer and Find Everyday Services</title>
        <meta
          name="description"
          content="Tichi connects service providers with people who need them — securely and simply. Post your service, stay private, and let the right opportunities unlock your contact."
        />
        <meta
          name="keywords"
          content="Tichi app, contact unlock platform, service listing for students, freelance marketplace, post your gig online"
        />
      </Helmet>

      {/* Page Layout */}
      <div className="w-full bg-gradient-to-b from-pink-50 via-purple-50 to-yellow-50 text-gray-900 py-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 max-w-7xl mx-auto">
          {/* FAQ Column */}
          <div className="md:col-span-1 border-r border-gray-300 pr-4 sticky top-20 self-start">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-purple-300">
  {faqs.map((faq, index) => (
    <div key={index} className="py-3">
      <h3
        onClick={() => toggleFAQ(index)}
        className="flex justify-between items-center cursor-pointer text-sm font-semibold text-purple-800 hover:text-pink-600 transition duration-300"
      >
        {faq.question}
        <span className="text-lg font-bold">
          {openIndex === index ? "−" : "+"}
        </span>
      </h3>
      {openIndex === index && (
        <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
      )}
    </div>
  ))}
</div>

          </div>

          {/* Blog Column */}
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 text-transparent bg-clip-text mb-5">
              <TichiLink />:{" "}
              <span className="hover:text-purple-600 transition duration-300">The Smartest Way</span> to Offer and Find Everyday Services
            </h1>

            {/* ✅ Banner Image */}
            <img src={blogPoster} alt="Tichi Blog Banner" className="w-full rounded-lg mb-6" />

            {/* Sections */}
            {sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mt-8 mb-3 border-l-4 border-yellow-400 pl-3 font-semibold">
                  {section.title}
                </h2>
                <div className="leading-relaxed text-gray-700">{section.text}</div>
              </div>
            ))}

            {/* Final Thoughts */}
            <div className="mb-8">
              <h2 className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mt-8 mb-3 border-l-4 border-yellow-400 pl-3 font-semibold">
                Final Thoughts
              </h2>
              <div className="leading-relaxed text-gray-700 space-y-3">
                <p>
                  You don’t need a big following or multiple apps to start offering your skills, space, or time. With <TichiLink />, you create a
                  simple listing, keep your details private, and connect only with genuine people who value your time.
                </p>
                <p>No spam. No chasing. Just smarter, faster, and safer service exchange.</p>
                <p>
                  👉 Try <TichiLink /> today and see how easy it is to connect with the <strong>right</strong> people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;