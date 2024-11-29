import React, { FC, useState } from "react";
import "./ChatBoxInput.css";

interface InputProps {
  placeholder: string;
}

const ChatBoxInput: FC<InputProps> = ({ placeholder }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSend = () => {
    if (value.trim()) {
      setValue("");
    }
  };

  return (
    <div className="chat-box-input">
      <input
        id="chat-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button onClick={onSend} disabled={!value.trim()}>
        Send
      </button>
    </div>
  );
};

export default ChatBoxInput;
