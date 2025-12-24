import type { Metadata } from 'next'

import { MarketingLayout } from '#components/layout'
import { seoData } from '#data/seo'

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  openGraph: {
    type: seoData.openGraph.type as 'website',
    locale: seoData.openGraph.locale,
    siteName: seoData.openGraph.siteName,
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    url: seoData.openGraph.url,
  },
  twitter: {
    card: seoData.twitter.cardType as 'summary_large_image',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
