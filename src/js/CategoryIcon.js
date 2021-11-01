import React from 'react';
import Icon from '@mdi/react';
import { mdiMusic, mdiFountainPenTip, mdiTshirtCrew, mdiSilverwareForkKnife, mdiCandle, mdiCastle,
          mdiSwordCross, mdiAccountGroup, mdiPasta, mdiCrown, mdiFlaskOutline } from '@mdi/js'

const CategoryIcon = (props) => {


  const icons = {
    'Calligraphy & Illumination': mdiFountainPenTip,
    'Cooking & Feasts': mdiSilverwareForkKnife,
    'Costumes': mdiTshirtCrew,
    'Court': mdiCrown,
    'Dance': mdiMusic,
    'Fibre Arts': mdiTshirtCrew,
    'History': mdiCastle,
    'Meals': mdiPasta,
    'SCA': mdiCandle,
    'Science': mdiFlaskOutline,
    'Social': mdiAccountGroup,
    'The Art of Combat': mdiSwordCross
  }

  return ( icons[props.category] ? <Icon path={icons[props.category]} title={props.category} /> : null )

}


export default CategoryIcon
