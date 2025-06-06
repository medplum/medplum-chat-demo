import { Anchor, Button, Stack, Text, Title } from '@mantine/core';
import { Document } from '@medplum/react';
import { JSX } from 'react';
import { Link } from 'react-router';

export function LandingPage(): JSX.Element {
  return (
    <Document width={500}>
      <Stack align="center">
        <Title order={2}>Welcome!</Title>
        <Text>
          This Chat Demo shows how to build a simple React application that fetches messaging data from Medplum. If you
          haven't already done so, <Anchor href="https://app.medplum.com/register">register</Anchor> for Medplum
          Project. After that you can sign into your project by clicking the link below.
        </Text>
        <Button component={Link} to="/signin">
          Sign in
        </Button>
      </Stack>
    </Document>
  );
}
