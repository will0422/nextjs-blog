import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';

export default function Custom404() {
    return (
        <Layout>
            <center>
                <h1 className={utilStyles.headingLg}>Error 404 - Page Not Found</h1>
            </center>
        </Layout>
    );
}