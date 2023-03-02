import utilStyles from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/styles/utils.module.css';
import Layout from 'C:/Users/bobch/Documents/NextJS App/nextjs-blog/components/layout.js';

export default function Cats() {
    return (
        <Layout>
            <center>
                <h1 className={utilStyles.headingLg}>Click for a picture of a cat!</h1>

                <script>fetchPics();</script>

                <div class="catsImgDiv"></div>

            </center>
        </Layout>
    );
}

function fetchPics() {
    let catsImgDiv = document.querySelector(".catsImgDiv")
    catsImgDiv.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            let catsImgUrl = data[0].catsImgUrl

            letCatsImgEl = document.createElement("img")
            catsImgEl.setAttribute('src', '${catsImgUrl]')
            catsImgEl.classList.add("showcase")

            let catsImgDiv = document.querySelector(".catsImgDiv")
            catsImgDiv.appendChild(catsImgEl)
        })
        .catch(err => console.log(err))
}