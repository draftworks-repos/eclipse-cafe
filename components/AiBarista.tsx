import React, { useState, useEffect, useRef } from "react";
import { Chat } from "@google/genai";
import {
  createChatSession,
  sendMessageToBarista,
} from "../services/geminiService";
import { ChatMessage } from "../types";
import { MessageSquare, X, ArrowUp, Zap } from "lucide-react";
import "./AiBarista.css";

const AiBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Welcome to Eclipse. I am Orion. How may I guide your experience today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSession.current = createChatSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession.current) {
      if (!chatSession.current) {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: "I'm currently resting. Please check my connection later.",
          },
        ]);
      }
      return;
    }

    const userMsg: ChatMessage = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const responseText = await sendMessageToBarista(
      chatSession.current,
      userMsg.text,
    );

    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "model", text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`barista-btn ${isOpen ? "hidden" : ""}`}
      >
        <MessageSquare size={18} />
        <span className="btn-label">CONCIERGE</span>
      </button>

      {/* Chat Interface */}
      <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-info">
            <div className="chat-avatar">
              <Zap size={20} className="chat-icon" />
            </div>
            <div className="chat-title">
              <h3>Orion</h3>
              <p>Digital Barista</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="close-btn">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="messages-area">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <span className="message-label">
                {msg.role === "user" ? "You" : "Orion"}
              </span>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message model">
              <span className="message-label">Orion</span>
              <div className="typing-indicator">
                <div className="dot" style={{ animationDelay: "0s" }}></div>
                <div className="dot" style={{ animationDelay: "0.2s" }}></div>
                <div className="dot" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="input-area">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Inquire..."
              className="chat-input"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="send-btn"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiBarista;
