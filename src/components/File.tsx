import { EditOutlined } from "@ant-design/icons";

export default function File (props: {title: string, text: string, }) {
  return (
    <div className="flex space-x-[12px]">
      <div className="w-[40px] h-[40px] p-3 rounded-[100%] bg text-white">
        <EditOutlined />
      </div>
      <section className="px-[18px] w-4/5 rounded-sm py-[12px] bg-[#F2F3F7] space-y-4">
        <h3 className="semibold text-[14px]">{props.title}</h3>
        <p className="text-[12px]">
          {props.text}
        </p>
      </section>
    </div>
  )
}
