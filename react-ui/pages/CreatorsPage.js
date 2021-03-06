import { React, useEffect } from 'https://unpkg.com/es-react@16.13.1/dev';
import htm from '/web_modules/htm.js';

import MockCreatorData from '../mock/CreatorsData.js'
import CreatorCardGrid from '../components/CreatorCardGrid.js'

const html = htm.bind(React.createElement)
const creatorData = MockCreatorData

const CreatorsPage = () => {
    return html`
      <div>
        <${CreatorCardGrid} creatorData=${creatorData} />
      </div>
    `;
  };

  export default CreatorsPage;
