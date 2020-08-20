import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import List from '../../lists/List';

const Education = ({ id, event }) => {
  const path = `${id}.items`;
  const { t } = useTranslation();

  return (
    <section>
      <Heading id={id} />

      <Input
        name='heading'
        label={t('builder.sections.heading')}
        path={`${id}.heading`}
      />

      <List
        hasDate
        path={path}
        event={event}
        titlePath='institution'
        textPath='field'
      />
    </section>
  );
};

export default memo(Education);