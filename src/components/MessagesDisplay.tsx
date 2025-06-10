import { useChatStore } from "../store/chatStore";

const commonMsgStyles = 'flex p-2 w-fit rounded-md text-black'

export default function MessagesDisplay() {
  const { messages } = useChatStore(state => state)
  return (
    <section className="flex-1 flex flex-col-reverse">
        { messages.map(msg => (
            <div key={ msg.id } className='flex flex-col-reverse my-1 overflow-y-auto'>
            <p 
                className={msg.sender !== 'Felipe' ? 
                `${commonMsgStyles} bg-primary-light` : 
                `${commonMsgStyles} self-end bg-secondary-light`
            }>
                { msg.message }
            </p>
            </div>
        ))}
    </section>
  )
}
