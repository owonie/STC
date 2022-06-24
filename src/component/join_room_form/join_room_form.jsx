import { React, useRef } from 'react';
import Button from '../button/button';
import styles from './join_room_form.module.css';

const JoinRoomForm = ({ joinRoom }) => {
  const formRef = useRef();
  const roomNameRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`${roomNameRef.current.value}방에 입장했습니다!`);
    formRef.current.reset();
    joinRoom(roomNameRef);
  };
  return (
    <div>
      <h1>Join us!</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomNameRef} type='text' />
      </form>
      <Button name='join' onClick={onSubmit} />
    </div>
  );
};
export default JoinRoomForm;