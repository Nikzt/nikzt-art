import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <h1 id="commissions">Commissions</h1>
      <h2 id="character-art-full-body-35">Character Art (Full Body) - $35</h2>
      <p>4 sketches of the head</p>
      <p>2 sketches of body / outfit</p>
      <p>1 full color drawing.</p>
      <p>Add background: + $30</p>
      <h2 id="character-art-profile-15">Character Art (Profile) $15</h2>
      <p>4 sketches of the head</p>
      <p>1 full color drawing of the head/shoulders</p>
      <h2 id="storyboard-sketches-10">Storyboard Sketches - $10</h2>
      <p>Rough sketch of a scene with 2 characters. </p>
      <ul>
        <li>+$2 for each additional character</li>
      </ul>
      <h2 id="full-scene-60">Full Scene - $60</h2>
      <p>2 Characters and background with clean line art.</p>
      <ul>
        <li>+$40 for color</li>
        <li>+$20 for each additional character</li>
      </ul>
    </div>
  );
}

export default App;
