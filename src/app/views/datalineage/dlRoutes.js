import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const DataLineage = Loadable(lazy(() => import('./dllayout')));

const dlRoutes = [
  { path: '/datalineage/default', element: <DataLineage />, auth: authRoles.admin },
];

export default dlRoutes;
