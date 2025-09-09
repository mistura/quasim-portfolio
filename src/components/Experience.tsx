import SectionTitle from "./SectionTitle";
import File from "./File";

export default function Experience() {


  const items = [
    {
      head: "Founder, Quatos Tech (2015–Present)",
      content:
        "Delivered cybersecurity, telecom, and IT solutions for organisations in Nigeria and the UK, including Sterling Bank, Federal Ministry of Works, Boctrust Microfinance Bank, and international SMEs.b",
    },
    { head: "International Contributions", content: "Consulted on cybersecurity, compliance, and incident response for UK-based organisations while continuing to lead Quatos Tech remotely" },
    { head: "Sterling Bank (2016–2021)", content: "Reduced downtime by 38% and boosted efficiency by 42%. Spearheaded Windows 10 & Office 365 migration for 5,000+ users, deployed advanced security systems cutting incidents by 60%, and mentored 120+ engineers. At Dotcom Solicitors (UK), delivered GDPR-compliant cybersecurity advisory, implemented data security frameworks, built incident response protocols, and drove digital transformation with secure, cloud-based solutions." },
    { head: "Delta State Government Initiative", content: "Trained 500+ unemployed youth in IT, many of whom are now employed in banks or running their own businesses." },
    { head: "National Youth Service Corps (NYSC)", content: "Selected to design and develop the NYSC Registration & Service Portal, now used annually by hundreds of thousands of graduates nationwide." },

  ];

  return (
    <div className="space-y-[32px] w-full text-left px-[80px]">
      <SectionTitle title={"Experience"} subtitle={"Work Experience"} />
      <section className="space-y-3 ">
        {items.map((d) => (
          <File title={d.head} text={d.content} />
        ))}
      </section>
    </div>
  );
}
