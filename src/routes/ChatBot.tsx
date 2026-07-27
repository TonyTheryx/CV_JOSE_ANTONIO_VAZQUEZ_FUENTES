import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! ¿En qué puedo ayudarte hoy?",
    },
  ]);

  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // Aquí llamas a tu IA
    // const response = await ...

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Esta es una respuesta de ejemplo.",
        },
      ]);
    }, 1000);
  }

  return (
    <div className="flex flex-col h-screen bg-slate-100">

      {/* Header */}
      <div className="h-16 bg-cyan-500 text-white flex items-center px-6 text-xl font-bold shadow">
        Mi ChatBot
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto px-6 py-8">

        <div className="max-w-4xl mx-auto space-y-6">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`
                max-w-[75%]
                rounded-3xl
                px-5
                py-4
                shadow

                ${
                  msg.role === "user"
                    ? "bg-cyan-500 text-white"
                    : "bg-white text-slate-700"
                }
                `}
              >
                {msg.content}
              </div>
            </div>
          ))}

          <div ref={bottomRef} />

        </div>

      </div>

      {/* Input */}
      <div className="border-t bg-white p-5">

        <div className="max-w-4xl mx-auto flex gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            placeholder="Escribe un mensaje..."
            className="
            flex-1
            rounded-full
            border
            border-slate-300
            px-6
            py-3
            outline-none
            focus:border-cyan-500
            "
          />

          <button
            onClick={sendMessage}
            className="
            w-14
            rounded-full
            bg-cyan-500
            text-white
            flex
            justify-center
            items-center
            hover:bg-cyan-600
            transition
            "
          >
            <FiSend size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}