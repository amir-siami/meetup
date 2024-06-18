import MeetupItem from "./MeetupItem";

import classes from "./MeetupList.module.css";

function MeetupList({ data }) {
  return (
    <ul className={classes.list}>
      {data.map((item) => (
        <MeetupItem key={item.id} data={item} />
      ))}
    </ul>
  );
}

export default MeetupList;
