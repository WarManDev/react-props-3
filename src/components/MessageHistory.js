import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return item.type === "response" ? (
          <Response
            key={item.id}
            from={item.from}
            message={{ text: item.text, time: item.time }}
          />
        ) : item.type === "message" ? (
          <Message
            key={item.id}
            from={item.from}
            message={{ text: item.text, time: item.time }}
          />
        ) : item.type === "typing" ? (
          <Typing
            key={item.id}
            from={item.from}
            message={{ text: item.text, time: item.time }}
          />
        ) : null;
      })}
    </ul>
  );
}

MessageHistory.defaultProps = { items: [] };
