import Head from 'next/head';
import { useDispatch, useSelector  } from "react-redux";
import { updateAuthorization } from '../../../store/authorizationSlice';

import { TeamLayout } from '../../../layout/Dashboard';

function AuthenticationPage() {
  return (
    <div>
      <Head>
        <title>Authentication</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>a</p>
    </div>
  )
}

AuthenticationPage.PageLayout = TeamLayout;

export default AuthenticationPage
