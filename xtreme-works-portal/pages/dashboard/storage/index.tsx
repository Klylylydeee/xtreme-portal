import Head from 'next/head';
import { useDispatch, useSelector  } from "react-redux";
import { updateAuthorization } from '../../../store/authorizationSlice';

import { TeamLayout } from '../../../layout/Dashboard';

function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Storage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>c</p>
    </div>
  )
}

DashboardPage.PageLayout = TeamLayout;

export default DashboardPage
