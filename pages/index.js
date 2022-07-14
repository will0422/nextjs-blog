import Head from 'next/head';
import Layout, { siteTitle } from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';
import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import { getSortedPostsData } from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/lib/posts.js';
import Link from 'next/link';
import Date from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/date.js';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is William Chin. I am a 17 year old high school student, aspiring to be a computer programmer. My hobbies include programming, video games, and playing volleyball.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}