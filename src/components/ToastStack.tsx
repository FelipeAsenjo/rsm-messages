import { ImCancelCircle } from "react-icons/im";
import { useStatusStore } from "../store/appStatusStore";

export default function ToastStack() {
    const { toastStack, removeFromStack } = useStatusStore(state => state)

    return (
        <section className="absolute top-2 right-2 flex flex-col gap-2">
            { !!toastStack && toastStack.map(toast => (
                <div key={toast.id} className={`flex gap-1 text-white p-2 rounded-lg ${toast.type === 'error' ? 'bg-error' : 'bg-secondary'}`}>
                <button className="hover:scale-105 ease-in-out duration-200" onClick={() => removeFromStack(toast.id)}>
                    <ImCancelCircle size={24} />
                </button>
                <p>{ toast.message }</p>
                </div>
            )) }
        </section>
    )
}
