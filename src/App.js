import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [preset, setPreset] = useState("original");
  const [mode, setMode] = useState("宣伝");
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [title, setTitle] = useState("タイトル");
  const [main, setMain] = useState("本文");
  const [tag, setTag] = useState("#vocalopost #vocanew");

  return (
    <div className="App">
      <div className="InputLabel">
          <label>=====　入力欄　=====</label>
        </div>
      {/* Input */}
      <div className="Preset">
        <div className="PresetLabel">
          <label>プリセット</label>
        </div>
        <div className="PresetInput">
          <label>
            <input type="radio" value="original" onChange={(e) => {setPreset(e.target.value); setTag("#vocalopost #vocanew");}} checked={preset === "original"}></input>
            オリジナル
          </label>
          <label>
            <input type="radio" value="cover" onChange={(e) => {setPreset(e.target.value); setTag("#歌ってみた #歌い手さんMIX師さん動画師さん絵師さんPさんと繋がりたい");}} checked={preset === "cover"}></input>
            歌ってみた
          </label>
        </div>
      </div>

      <div className="Mode">
        <div className="ModeLabel">
          <label>モード</label>
        </div>
        <div className="ModeInput">
          <label>
            <input type="radio" value="宣伝" onChange={(e) => setMode(e.target.value)} checked={mode === "宣伝"}></input>
            宣伝
          </label>
          <label>
            <input type="radio" value="告知" onChange={(e) => setMode(e.target.value)} checked={mode === "告知"}></input>
            告知
          </label>
        </div>
      </div>

      <div className="Time">
        <div className="TimeLabel">
          <label>投稿時刻</label>
        </div>
        <div className="TimeInput">
          {
            (function () {
              const list = [];

              for (let i = 1; i <= 12; i++) {
                list.push(<option>{( '00' + i ).slice( -2 )}</option>);
              }

              return <select onChange={(e) => setMonth(e.target.value)}>{list}</select>;
            })()
          } 月 {
            (function () {
            const list = [];

            for (let i = 1; i <= 31; i++) {
              list.push(<option>{( '00' + i ).slice( -2 )}</option>);
            }

            return <select onChange={(e) => setDay(e.target.value)}>{list}</select>;
          })()
          } 日 {
            (function () {
              const list = [];

              for (let i = 0; i < 24; i++) {
                list.push(<option>{( '00' + i ).slice( -2 )}</option>);
              }

              return <select onChange={(e) => setHour(e.target.value)}>{list}</select>;
            })()
          } : {
            (function () {
              const list = [];

              for (let i = 0; i < 60; i++) {
                list.push(<option>{( '00' + i ).slice( -2 )}</option>);
              }

              return <select onChange={(e) => setMinute(e.target.value)}>{list}</select>;
            })()
          }
        </div>
      </div>

      <div className="Title">
        <div className="TitleLabel">
          <label>タイトル</label>
        </div>
        <div className="TitleInput">
          <input type="text" value={title} onInput={(e) => setTitle(e.target.value)}></input>
        </div>
      </div>

      <div className="Main">
        <div className="MainLabel">
          <label>本文</label>
        </div>
        <div className="MainInput">
          <textarea value={main} onInput={(e) => setMain(e.target.value)}></textarea>
        </div>
      </div>

      <div className="Tag">
        <div className="TagLabel">
          <label>タグ</label>
        </div>
        <div className="TagInput">
          <input type="text" value={tag} onInput={(e) => setTag(e.target.value)}></input>
        </div>
      </div>

      {/* Output */}
      <div className="Disp">
        <div className="OutputLabel">
          <label>=====　以下、Tweet文　=====</label>
        </div>
        <p>
          【{mode}】<br/>
          {month}月{day}日 {hour}:{minute}<br/>
          「{title}」<br/>
          <br/>
          {replacer(main)}<br/>
          <br/>
          {tag}
        </p>
      </div>
    </div>
  );
}

const replacer = (msg) => {
  return msg.split(/(\n)/g).map(t => (t === '\n')?<br/>:t)
}

export default App;
