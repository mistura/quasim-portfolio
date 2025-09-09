import {
  BulbOutlined,
  GlobalOutlined,
  SafetyOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import SectionTitle from "./SectionTitle";

export default function About() {
  const items = [
    { name: "IT Consultant ", icon: <BulbOutlined />, color: "#ec5453" },
    {
      name: "Cloud & Network Security",
      icon: <SafetyOutlined />,
      color: "#f9bf3f",
    },
    {
      name: "Digital Transformation",
      icon: <GlobalOutlined />,
      color: "#2c98f0",
    },
    {
      name: "IT & Ethical Tech Advocacy",
      icon: <UserSwitchOutlined />,
      color: "#a84cb8",
    },
  ];
  return (
    <div className=' text-left  bg-[url("/city4.jpg")] bg-center bg-no-repeat bg-cover bg-fixed'>
      <section className="bg-white px-[80px] pb-[50px]">
        <SectionTitle title="About me" subtitle="Who I am" />
      <p className="text-sm font-normal">
        <span className="font-semibold">Hi I'm Ganiyu Quasim</span> I am the
        Founder and CEO of Quatos Tech, an IT consultancy bridging
        cybersecurity, network engineering, and digital transformation across
        Nigeria and the United Kingdom. With over a decade of professional
        experience, I have led high-impact technology projects, delivered
        security-driven infrastructure solutions for leading financial
        institutions, and empowered hundreds of young professionals through
        training and mentorship. <br /> <br />
        I am also a proud Alumnus of the University of Hertfordshire, United
        Kingdom, where I advanced my expertise in Network Security and expanded
        my global outlook. <br />
        <br />
        My journey reflects a blend of technical expertise, innovation, and
        social impact. I am committed to shaping the future of secure digital
        systems while building bridges between technology, business, and
        community development. With proven experience delivering large-scale
        solutions and a passion for empowering others, I bring the vision and
        capability to make a global impact in cybersecurity, data protection,
        and digital transformation.
      </p>

      <section className="grid mt-[40px] grid-cols-4 gap-5">
        {items.map((d) => (
          <div
            className={`pb-[5%] px-3 pt-3 bg-white shadow-md space-y-[16px] border-b-[2px] rounded-md`}
            style={{ borderBottomColor: d.color }}
          >
            <p className="text-xl" style={{ color: d.color }}>
              {d.icon}
            </p>
            <h3>{d.name}</h3>
          </div>
        ))}
      </section>
      </section>

      <section className=' rounded-md h-[250px]  px-[32px] space-y-5 py-[32px] text-white'>
        <h2 className="text-2xl font-semibold">
          I'm happy to start a project converstaion with you! <br />{" "}
        </h2>
        <p className="text-sm leading-0 font-semibold ">
          Mon-Saturday 9:00am - 8:00pm (GMT+1)
        </p>
        <button className="customBtn mt-5 !rounded-2xl">Let's Talk</button>
      </section>
    </div>
  );
}
