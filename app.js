function App() {
  const [sound, setSound] = React.useState('')
  
 const keydownHandler = (e) => {
   switch(e.key.toUpperCase()) {
  case 'Q': playAudio('Heater-1.mp3','Q')
    break;
  case 'W':playAudio('Heater-2.mp3','W')
    break;
       case 'E':playAudio('Heater-3.mp3','E')
    break;
       case 'A':playAudio('Heater-4_1.mp3','A')
    break;
       case 'S':playAudio('Heater-6.mp3','S')
    break;
       case 'D':playAudio('Dsc_Oh.mp3','D')
    break;
       case 'Z':playAudio('Kick_n_Hat.mp3','Z')
    break;
       case 'X':playAudio('RP4_KICK_1.mp3','X')
    break;
       case 'C':playAudio('Cev_H2.mp3','C')
    break;
  default:console.log('no pad')
}
  };
  
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, []);
  
  const playAudio = (sound, letter) => {
    // var b = new Audio(url)
var a = document.getElementById(letter)
   a.play();
  setSound(sound) 
}
  
  return(
    <div style={{display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'}}>
      <div id="drum-machine" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', width: 500, borderRadius: 8, padding: 20}}>
      <h2 style={{color: '#444', padding: 20, fontWeight: 200}}>Drum Machine</h2>
        <p id="display">{sound}</p>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap'}}>
        <button className='drum-pad' id={'Heater-1.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Heater-1.mp3', 'Q')}>Q
      <audio id={'Q'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'}></audio></button>
<button className='drum-pad' id={'Heater-2.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Heater-2.mp3', 'W')}>W
      <audio id={'W'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'}></audio></button>
        <button className='drum-pad' id={'Heater-3.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Heater-3.mp3', 'E')}>E
      <audio id={'E'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'}></audio></button>
        <button className='drum-pad' id={'Heater-4_1.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Heater-4_1.mp3', 'A')}>A
      <audio id={'A'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}></audio></button>
        <button className='drum-pad' id={'Heater-6.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Heater-6.mp3', 'S')}>S
      <audio id={'S'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'}></audio></button>
    <button className='drum-pad' id={'Dsc_Oh.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Dsc_Oh.mp3', 'D')}>D
      <audio id={'D'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'}></audio></button>
<button className='drum-pad' id={'Kick_n_Hat.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Kick_n_Hat.mp3', 'Z')}>Z
      <audio id={'Z'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'}></audio></button>
<button className='drum-pad' id={'RP4_KICK_1.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('RP4_KICK_1.mp3', 'X')}>X
      <audio id={'X'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'}></audio></button>
        <button className='drum-pad' id={'Cev_H2.mp3'} style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', display: 'flex', margin:5}} 
             onClick={()=>playAudio('Cev_H2.mp3', 'C')}>C
      <audio id={'C'} className='clip' src={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}></audio></button>
        </div>
      </div>
      </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
