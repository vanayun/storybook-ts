import React from "react";
type HelloProps = {
  name: string;
  big?: boolean;
  red?: boolean;
  onHello?: () => void;
  onBye?: () => void;
};
/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `red` 값을 `true`로 설정하면 빨간색으로 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정할 수 있습니다.
 *
 */
const Hello = ({ name, big, red, onHello, onBye }: HelloProps) => {
  return (
    <>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </>
  );
};

Hello.defaultProps = {
  big: false
};
export default Hello;
