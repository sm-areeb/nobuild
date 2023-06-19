import html from "html";
import Router from "preact-router";
import { Link } from "preact-router/match";
import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

import { Home, About } from "components";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount((c) => c + 1), 1000);
  }, []);
  return html`
    <${Fragment}>
      <${Link} activeClassName="active" href="/">
        Home
      </${Link}>
      <${Link} activeClassName="active" href="/about">
        About
      </${Link}>
        <h1>Counter ${count}</h1>
        <${Router}>
            <${Home} path="/" />
            <${About} path="/about" />

        </${Router}>

    </${Fragment}>`;
}
