import {EmptyState, Card} from '@shopify/polaris';
import React from 'react';

export default function ResourceEmptyState({title, subTitle, buttonText}) {
  return (
    <Card sectioned>
      <EmptyState
        heading={title ?? ""}
        action={{content: buttonText ?? ''}}
        // secondaryAction={{
        //   content: 'Learn more',
        //   url: 'https://help.shopify.com',
        // }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        {subTitle ? <p>{subTitle}</p> : ''}
      </EmptyState>
    </Card>
  );
}
