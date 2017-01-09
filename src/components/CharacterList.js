import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
} from '../reducer/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  <div id='character-list' className='col-md-6'>
    <h1>Characters</h1>
    <ul>
      {characters.map((c, i) =>
        <li
					onClick={setCharacter(i + 1)}
          key={c.name}
        >
          {c.name}
        </li>
      )}
    </ul>
  </div>;
const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
    };
  },
});
const mapStateToProps = ({ characters }) => ({
  characters,
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
