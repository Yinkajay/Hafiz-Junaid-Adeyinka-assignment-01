import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <h1>Yinka's Webpage</h1>
      <main className='home-content'>
        <section >
          <p><b> Young, ambitious lad trying to manifest my dreams</b></p>
          <p>
            I really hope and plan to gain as much knowledge as possible and successfully complete this course,
            facing whatever obstacles may come along the way. Also plan to have fun while doing it and meet and work with
            amazing people
          </p>
          <p>
            <b>Education</b> <br />
            I am currently a university(college) student in my 4th year studying Computer Science in Obafemi Awolowo
            University. Prior to this,
            I had complete my primary and secondary levels of education obtaining my WAEC certificate in the process.
          </p>
          <p>
            <b> Work Experience </b> <br />
            I have worked for short windows of time
          </p>
          <p>
            <b>Hobbies &#38; Skills</b> <br />
            I like to play soccer, cycle, read books, code etc...
          </p>
        </section>
        <section class="Contact">
          <form>
            <label> Name: </label>
            <input type="text" /> <br />
            <label> E-mail Address: </label>
            <input type="email" /> <br />
            <label> Message </label>
            <input type="textarea" />
            <select>
              <option value="">Priority</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </form>
        </section>
      </main>
    </>
  )
}

export default Home
