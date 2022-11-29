import React from 'react';
import Icon from '@mdi/react';
import { mdiTallyMark1, mdiTallyMark2, mdiTallyMark3 } from '@mdi/js'

const LevelIcon = (props) => {

  const level = props.level.toLowerCase();

  const icons = {
    'beginner': mdiTallyMark1,
    'intermediate': mdiTallyMark2,
    'advanced': mdiTallyMark3
  }

  return ( icons[level] ? <Icon path={icons[level]} title={props.level + ' level class'} /> : null )

}

export default LevelIcon;
