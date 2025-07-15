"use client";

import { useEffect, useState, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FaPaperPlane, FaArrowDown } from "react-icons/fa";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";

dayjs.extend(localizedFormat);
dayjs.locale("id");

type Msg = {
  id: string;
  text: string;
  uid: string;
  username?: string;
  createdAt?: any;
};

export default function ForumChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [userUid, setUserUid] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // 1. Listen for auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setUserName(userDoc.data()?.name ?? "Anonymous");
      } else {
        setUserUid(null);
        setUserName(null);
      }
    });
    return () => unsub();
  }, []);

  // Handle scroll detection with debounce
  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;

    setIsUserAtBottom(isAtBottom);
    setShowScrollButton(!isAtBottom);
  };

  // Debounced scroll handler
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    container.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      container.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // 2. Listen for messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, async (snap) => {
      const data: Msg[] = await Promise.all(
        snap.docs.map(async (docSnap) => {
          const data = docSnap.data() as Msg;
          let username = data.username;

          // If username not stored, try to fetch
          if (!username && data.uid) {
            try {
              const userDoc = await getDoc(doc(db, "users", data.uid));
              username = userDoc.exists() ? userDoc.data()?.name : "Unknown";
            } catch {
              username = "Unknown";
            }
          }

          return {
            id: docSnap.id,
            text: data.text,
            uid: data.uid,
            username,
            createdAt: data.createdAt?.toDate?.() || null,
          };
        })
      );

      const wasAtBottom = isUserAtBottom;
      const isNewMessage = data.length > messages.length;
      const isOwnMessage =
        data.length > 0 && data[data.length - 1].uid === userUid;

      setMessages(data);

      // Auto-scroll logic
      if (wasAtBottom || (isNewMessage && isOwnMessage)) {
        setTimeout(() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    });

    return () => unsub();
  }, [isUserAtBottom, userUid, messages.length]);

  // 3. Send message
  const sendMessage = async () => {
    if (!input.trim() || !userUid || !userName) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: input.trim(),
        uid: userUid,
        username: userName,
        createdAt: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Scroll to bottom manually
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderMessages = () => {
    let lastDate: string | null = null;

    return messages.map((m) => {
      const date = m.createdAt ? dayjs(m.createdAt).format("DD MMMM YYYY") : "";
      const showDate = date !== lastDate;
      lastDate = date;

      return (
        <div key={m.id} className="mb-2">
          {showDate && (
            <div className="flex justify-center my-4">
              <div className="bg-slate-700 px-3 py-1 rounded-full text-xs text-gray-300">
                {date}
              </div>
            </div>
          )}
          <div
            className={`flex ${
              m.uid === userUid ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`relative px-4 py-2 rounded-[18px] text-sm break-words shadow-sm 
    ${
      m.uid === userUid
        ? "bg-[#dcf8c6] text-black self-end rounded-br-none"
        : "bg-white text-black self-start rounded-bl-none"
    } 
    min-w-[100px] max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%]`}
            >
              <div className="text-[11px] text-gray-600 font-medium mb-1 flex flex-row justify-between space-x-4">
                {m.uid === userUid ? "You" : m.username}
                {m.createdAt && (
                  <div className="text-[10px] text-gray-500 text-right">
                    {dayjs(m.createdAt).format("HH:mm")}
                  </div>
                )}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed">
                {m.text}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 flex-shrink-0">
        <div className="p-3 text-center">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Forum Chat
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {messages.length} pesan • {userName || "Loading..."}
          </p>
        </div>
      </header>

      <div className="flex-1 relative overflow-hidden">
        <div
          ref={messagesContainerRef}
          className="absolute inset-0 overflow-y-scroll p-3 space-y-2"
        >
          <div className="min-h-full flex flex-col justify-end">
            {renderMessages()}
            <div ref={bottomRef} className="h-1" />
          </div>
        </div>

        {showScrollButton && (
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={scrollToBottom}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <FaArrowDown size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="bg-slate-800/80 backdrop-blur-sm border-t border-slate-700 p-3 flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2 items-end max-w-4xl mx-auto"
        >
          <div className="flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ketik pesan... (Enter untuk kirim, Shift+Enter untuk baris baru)"
              className="w-full px-3 py-2 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-200 text-sm min-h-[40px] max-h-[120px]"
              rows={1}
              style={{
                height: "auto",
                minHeight: "40px",
                maxHeight: "120px",
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = Math.min(target.scrollHeight, 120) + "px";
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 transform hover:scale-105 active:scale-95 h-[40px] flex items-center justify-center mb-1.5"
          >
            <FaPaperPlane size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
