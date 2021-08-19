import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"

import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'


const IndexPage = () => (
  <HomeLayout>
  
    <Seo title="Home" />
    <h1>FOOD FROM MY FLAT</h1>

    <div style={{width:`100%`, display:`flex`}}>
      <StaticImage
        src="../images/DSC01482.jpg"
        // width={700}
        layout="fullWidth"
        placeholder="blurred"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Rigatoni Carbonara"
        style={{ 
          marginBottom: `1.45rem`,
          // position: `absolute`,
          // top: `30vh`,
          // paddingTop: `30vh`,
          left: `-15vw`,
          zIndex:` -5`,
          borderRadius: `0 50% 50% 0`,
          width: `65vw`,
          height: `65vw`,
          minHeight: `200px`,
          minWidth: `200px`,
        
          boxShadow: `1px 1px`
        
        }}
      /> 

        <p style={{width:`50%`,margin:`auto 0`, alignSelf:`center`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper lorem pulvinar, sollicitudin lectus in, bibendum erat. Morbi bibendum velit ac urna ultricies, in feugiat odio gravida. Suspendisse metus risus, tempor id imperdiet nec, venenatis et enim. Quisque euismod condimentum ligula nec laoreet. Aenean urna urna, auctor vitae augue et, pharetra aliquet risus. Praesent finibus, ante a luctus venenatis, nunc ex maximus ante, sit amet lobortis orci felis sit amet quam. Vivamus ornare, tortor vitae tristique iaculis, turpis magna volutpat sem, sodales faucibus dolor arcu ut justo. Quisque pellentesque lacus convallis, tristique massa et, eleifend ipsum.
        </p>
      </div>

      <div style={{width:`100%`, display:`flex`}}>
        <p style={{width:`50%`,margin:`auto 0`, alignSelf:`center`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper lorem pulvinar, sollicitudin lectus in, bibendum erat. Morbi bibendum velit ac urna ultricies, in feugiat odio gravida. Suspendisse metus risus, tempor id imperdiet nec, venenatis et enim. Quisque euismod condimentum ligula nec laoreet. Aenean urna urna, auctor vitae augue et, pharetra aliquet risus. Praesent finibus, ante a luctus venenatis, nunc ex maximus ante, sit amet lobortis orci felis sit amet quam. Vivamus ornare, tortor vitae tristique iaculis, turpis magna volutpat sem, sodales faucibus dolor arcu ut justo. Quisque pellentesque lacus convallis, tristique massa et, eleifend ipsum.
        </p>
      
        <StaticImage
          src="../images/DSC01482.jpg"
          // width={700}
          layout="fullWidth"
          placeholder="blurred"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Rigatoni Carbonara"
          style={{ 
            marginBottom: `1.45rem`,
            // position: `absolute`,
            // top: `30vh`,
            // paddingTop: `30vh`,
            right: `-15vw`,
            zIndex:` -5`,
            borderRadius: ` 50% 0 0 50%`,
            width: `65vw`,
            height: `65vw`,
            minHeight: `200px`,
            minWidth: `200px`,
          
            boxShadow: `1px 1px`
          
          }}
        /> 
      </div>

  </HomeLayout>

)

export default IndexPage