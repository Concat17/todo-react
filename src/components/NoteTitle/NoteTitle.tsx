import * as React from "react";

import "./NoteTitle.css";

type NoteTitleProps = {
  title: string;
  onClick: any;
};

const NoteTitle: React.FunctionComponent<NoteTitleProps> = ({
  title,
  onClick
}: NoteTitleProps) => {
  return (
    <div className="note-title" onClick={onClick}>
      {title}
    </div>
  );
};

export default NoteTitle;
