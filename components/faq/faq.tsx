import { chakra, SimpleGrid } from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently asked questions',
    description,
    items = [],
  } = props
  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <SimpleGrid 
        columns={{ base: 1, md: 2 }} 
        spacingY={{ base: 6, md: 10 }} 
        spacingX={{ base: 4, md: 10, lg: 20 }}
      >
        {items?.map(({ q, a }, i) => {
          return <FaqItem key={i} question={q} answer={a} />
        })}
      </SimpleGrid>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <chakra.dl>
      <chakra.dt fontWeight="semibold" mb="2">
        {question}
      </chakra.dt>
      <chakra.dd color="muted">{answer}</chakra.dd>
    </chakra.dl>
  )
}
