import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"


const IndexPage = () => (
  <HomeLayout>
  
    <Seo title="EQUIPMENT" />
    <h1>EQUIPMENT</h1>

    <p style={{width:`50%`,margin:`0`}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper lorem pulvinar, sollicitudin lectus in, bibendum erat. Morbi bibendum velit ac urna ultricies, in feugiat odio gravida. Suspendisse metus risus, tempor id imperdiet nec, venenatis et enim. Quisque euismod condimentum ligula nec laoreet. Aenean urna urna, auctor vitae augue et, pharetra aliquet risus. Praesent finibus, ante a luctus venenatis, nunc ex maximus ante, sit amet lobortis orci felis sit amet quam. Vivamus ornare, tortor vitae tristique iaculis, turpis magna volutpat sem, sodales faucibus dolor arcu ut justo. Quisque pellentesque lacus convallis, tristique massa et, eleifend ipsum.
    </p>

  </HomeLayout>

)

export default IndexPage