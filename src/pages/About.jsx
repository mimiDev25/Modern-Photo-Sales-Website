import React from 'react';
import "./About.css"


function About() {
    return(
        <>
            <header>
                 {/* <img className="mainImg" src="/assets/landscape.jpg" alt="Landscape view of dandelions gone to seed in a field of green grass." width="80%"/>  */}
                <article className = "foregroundTxt">
                    <h2>Welcome to Verdent</h2>
                    <p>Based in the foothills of Kentucky Appalachia, <strong>Verdent Photography</strong> captures the beauty of the natural world through a lens that sees beyond the ordinary.</p>
                </article>
            </header>
            <main>
                <section className = "about ">
                    <div className = "author">
                        <img src="/assets/author.jpg" alt="Headshot of female Verdent Photographer." width="80%"/>
                        <h2>Meet the Photographer</h2>
                        <p>
                            <strong>Jane Doe</strong> is the founder and lead photographer at Verdent Photography. With over a decade of experience, she specializes in capturing the essence of nature and the stories that unfold within it.
                        </p>
                        <div className="author2">
                            <h4>Nature through a lens.</h4>
                            <p>Jane's passion for nature is evident in every shot she takes, bringing a unique perspective to her work.</p>
                        </div>
                    </div>
                </section>
                <section className = "contact">
                    <div className="joinUS">
                        <h3>Join Us</h3>
                        <p>Join the Verdent Photography community to stay updated on our latest work and receive exclusive content for your business or</p>
                    </div>
                    <div className="contact">
                        <form>
                            <label for = "name">Name:</label>
                            <input type="text" id="name" name="name"/>
                            <label for = "email">Email:</label>
                            <input type="email" id="email" name="email"/>
                            <label for = "message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    
                </section>
                    
            </main>
            <footer></footer>
        </>
    );
}
export default About;