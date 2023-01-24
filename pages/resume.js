import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';
import Image from 'next/image';

export default function Resume() {
    return (
        <Layout>
            <center>
                <h1 className={utilStyles.headingLg}>My resume</h1>
                <Image
                    priority
                    src="/images/resume.png"
                    className={utilStyles.borderRectangle}
                    height={1800}
                    width={1300}
                />
            </center>
        </Layout>
    );
}