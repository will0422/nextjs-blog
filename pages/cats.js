import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';
const fetch = import('node-fetch');

export default function Cats() {
    catPics()
    return (
        <Layout>
            <center>
                <h1 className={utilStyles.headingLg}>Click for a picture of a cat!</h1>

                <button class="btn btn-primary my-2 generate_btn">Generate</button>

                <script>fetchPics()</script>

                <div class="catsImgDiv"></div>

            </center>
        </Layout>
    );



    function catPics() {
        fetch('https://api.thecatapi.com/v1/images/search%27')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
}