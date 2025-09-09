import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import SectionTitle from "./SectionTitle";


export default function Contact() {
  const items = [
    { icon: <GlobalOutlined />, link: "www.quatostech.com" },
    { icon: <MailOutlined />, link: "info@quatostech.com" },
    { icon: <PhoneOutlined />, link: "+44 7405 714646" },
  ];
  return (
    <section className="px-[80px] space-y-[32px] text-left">
        <SectionTitle title={"Get in touch"} subtitle={"Contact Information"} />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
      <section className="space-y-3 col-span-1">
        {items.map((d) => (
          <div className="flex space-x-3 items-center">
            <div className="py-3 px-4 bg-[#F2F3F7] text-[#65BAFD] text-lg">{d.icon}</div>
            <a className="text-[12px] underline hover:text-[#65BAFD]">{d.link}</a>
          </div>
        ))}
      </section>
      <section className="col-span-2">
        <Form className="text-left md:w-[70%]">
            <Form.Item> <Input className="border-0 outline-0" placeholder="Name"/></Form.Item>
             <Form.Item> <Input placeholder="Email"/></Form.Item>
              <Form.Item> <Input placeholder="Subject"/></Form.Item>
               <Form.Item> <TextArea rows={3} /></Form.Item>
               <Button type="primary">Send Message</Button>
        </Form>
      </section>
    </div>
    </section>

  );
}
