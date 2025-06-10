import { MdOutlineSettingsBackupRestore } from "react-icons/md";

import { useChatStore } from "../store/chatStore";
import { useUserStore } from "../store/userStore";

const commonMsgStyles = 'flex p-2 w-fit rounded-md text-black'

export default function MessagesDisplay() {
  const { messages } = useChatStore(state => state)
  const { username } = useUserStore(state => state)

  const handleClick = (id: number | undefined) => {
    console.log('id', id)
  }

  console.log('messages', messages)
  return (
    <section className="flex-1 flex flex-col-reverse">
        { messages.map(msg => (
          <div key={ msg.id } className='flex flex-col-reverse my-1 overflow-y-auto'>
            { msg.status === 'error' && 
              <button className="self-end" onClick={() => handleClick(msg.id)}>
                <MdOutlineSettingsBackupRestore size={20} />
              </button>
            }
            <p 
                className={msg.sender !== username ? 
                `${commonMsgStyles} bg-primary-light` : 
                `${commonMsgStyles} self-end ${msg.status !== 'error' ? 'bg-secondary-light' : 'bg-error-light'}`
            }>
                { msg.message }
            </p>
          </div>
        ))}
    </section>
  )
}
