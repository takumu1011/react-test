import React from 'react';

function Hello(props) {
  let text = '文字を入力してください';
  function add(a, b) {
    return a + b;
  }
  const users = [
    { name: 'Tanaka', age: 26 },
    { name: 'Suzuki', age: 30 },
    { name: 'Yamada', age: 22 },
  ];
  const userList = users.map((user, index) => (
    <li key={index}>
      {user.name} (Age: {user.age})
    </li>
  ));
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <input type="text" placeholder={text} />
      <p className="num">3+5={3 + 5}</p>
      <p style={{ color: '#ff0000', fontSize: '42px' }}>スタイル</p>
      <p>関数:3+3={add(3, 3)}</p>
      <ul>{userList}</ul>
    </div>
  );
}

export default Hello;
