import { Collapse, Space } from "antd";
import SectionTitle from "./SectionTitle";

export default function Education() {

  return (
    <div className="space-y-[32px] text-left px-[80px]">
      <SectionTitle title={"My Studies"} subtitle={"Education"} />

      <Space direction="vertical" className="space-y-5">
        <Collapse
          expandIconPosition="end"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <p className="text-white">
                  BSc, Network Security – University of Hertfordshire, UK
                  (2021–2022)
                </p>
              ),
              children: (
                <ul  className="school">
                  <li>
                    BSc, Network Security – University of Hertfordshire, UK
                    (2021–2022).
                  </li>
                  <li>
                    Developed a Security Blood Donation Management System for
                    Nigeria’s Federal Ministry of Health as a final-year
                    project.
                  </li>
                  <li>
                    Active member of the University of Hertfordshire Alumni
                    Network, engaging in global collaboration and knowledge
                    sharing
                  </li>
                </ul>
              ),
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          items={[
            {
              key: "1",
              label: <p className="text-white">HND, Computer Engineering – Yaba College of Technology, Lagos, Nigeria 2010</p>,
              children: <ul  className="school">
                  <li>
                   Awarded Best Overall Hardware Engineering Student.
                  </li>
                  <li>
                    Demonstrated proficiency in microcontroller programming, network systems, and digital logic design.
                  </li>
                  <li>
                   Contributed to Nigeria’s digital transformation initiatives by developing smart access systems, embedded security solutions, and RFID-based identity management platforms.
                  </li>
                  <li>
                    Designed a closed-loop traffic control system proposed for implementation in Lagos State.
                  </li>
                </ul>,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          items={[
            {
              key: "1",
              headerClass: "site-collapse-custom-panel",
              label: <p className="text-white">ND, Computer Engineering – Ogun state institute of technology (2018)</p>,
              children: <ul className="school">
                  <li>
                  Certified Cisco Networking Academy Professional.
                  </li>
                  <li>
                    Mentored peers and trained 150+ students in hardware, networking, and cybersecurity. </li>
                  <li>
                  Vocational Training – Team System, Ogun State, Nigeria
                  </li>
                  <li>
                    Gained foundational expertise in computer engineering, networking, and system troubleshooting.
                  </li>
                </ul>
            },
          ]}
        />
      </Space>
    </div>
  );
}
