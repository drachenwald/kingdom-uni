import React from 'react';
import Icon from '@mdi/react';
import { mdiMusic, mdiFountainPenTip, mdiTshirtCrew, mdiSilverwareForkKnife, mdiCandle, mdiCastle,
         mdiBugle, mdiFlower, mdiSwordCross, mdiBookOpenVariant, mdiAccountGroup } from '@mdi/js'

const CategoryIcon = (props) => {

  const icons = {
    'Bardic/Performing Arts': mdiMusic,
    'Calligraphy/Illumination': mdiFountainPenTip,
    'Clothing/Costume': mdiTshirtCrew,
    'Culinary': mdiSilverwareForkKnife,
    'General A&S': mdiCandle,
    'General History': mdiCastle,
    'Heraldry': mdiBugle,
    'Herbal': mdiFlower,
    'Martial Arts': mdiSwordCross,
    'Poetry/Literature': mdiBookOpenVariant,
    'Social/Panel': mdiAccountGroup,
    'Textiles': mdiTshirtCrew
  }

  return ( icons[props.category] ? <Icon path={icons[props.category]} title={props.category} /> : null )

}


export default CategoryIcon