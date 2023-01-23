import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';
import { getPostData } from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/lib/posts.js';
import { getAllPostIds } from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/lib/posts.js';
import Head from 'next/Head';
import Date from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/date.js';
import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  //Add the "await" keryword like this:
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}