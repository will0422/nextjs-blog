import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';

export default function CustomGame() {
    return (
        <Layout>
            <center>
                <h1 className={utilStyles.headingLg}>Welcome to my game</h1>
            </center>
        </Layout>
    );
}