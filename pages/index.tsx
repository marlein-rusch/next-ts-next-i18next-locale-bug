import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import { Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const count = 2
  const bar ='bar'

  return (
      <main>
        <Trans i18nKey='car' count={count}>
          {{count}} car, default in JSX file
        </Trans>
        <br />
        <Trans i18nKey='normal'>
          Normal translation in JSX file
        </Trans>
        <br />
        <Trans i18nKey='withInterpolation' foo={bar}>
          Interpolated value {{bar}} in JSX
        </Trans>
      </main>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
