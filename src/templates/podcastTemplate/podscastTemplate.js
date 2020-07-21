import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"



import Footer from "../../components/footer/footer"
import SVGContainer from "../../components/SVGContainer/SVGContainer"
import classes from "./podcastTemplate.module.css"

const PodcastTemplate = ({data, aboutProject, children}) => {

  const [assignedClasses, setAssignedClasses] = useState([classes.Header__layout])
  const scrollHandler = () => {
    const windowHeight = window.scrollY
    if (windowHeight > 1) {
      setAssignedClasses([classes.Header__layout, classes.Scroll])
    } else {
      setAssignedClasses([classes.Header__layout])
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <>
      <div className={classes.Template__layout}>
        <header className={assignedClasses.join(" ")}>
          <Link to="/">
            <SVGContainer mainClass="Logo__template" newClass="Image_resize" />
          </Link>
        </header>
        <main className={classes.Template__text}>
          {aboutProject ? (
            children
          ) : (
            <div>
              <h1 className={classes.Podcast__paragraph_heading}>
                {data.mdx.frontmatter.title} Odc. {data.mdx.frontmatter.episode}
              </h1>
              <MDXProvider
                components={{
                  p: props => (
                    <p
                      {...props}
                      style={{
                        fontSize: "calc(.85rem - 15%)",
                        marginBottom: "1rem",
                      }}
                    />
                  ),
                  a: props => (
                    <a {...props} style={{fontSize: "calc(.85rem - 15%)", textDecoration: "none", fontWeight: "600", color: "var(--main_black"}} />
                  ),
                }}
              >
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          )}
        </main>
      </div>
      <Footer
        data=""
        containerSize="Footer__container_narrow"
        narrow={true}
      ></Footer>
    </>
  )
}

 export const myQuery = graphql`
   query PodcastQuery($id: String!) {
     mdx(id: { eq: $id }) {
       id
       body
       frontmatter {
         title
         episode
       }
     }
   }
 `

 
export default PodcastTemplate
