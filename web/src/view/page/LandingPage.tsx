import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { AppRouteParams } from '../nav/route';

interface LanndingPageProps extends RouteComponentProps, AppRouteParams {}

export const LanndingPage = (props: LanndingPageProps) => {
  return (
    <h1>Hello</h1>
  )
};