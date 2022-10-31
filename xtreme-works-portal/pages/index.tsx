import Head from 'next/head';
import { Box } from '@mui/material';

import { TeamLayout } from '../layout/Dashboard';

function IndexPage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </Box>
  )
}

export default IndexPage
