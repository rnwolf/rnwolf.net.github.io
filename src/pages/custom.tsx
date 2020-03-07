import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
	  <Layout bigHeader={false}>
	    <SEO
	      location={location}
	      title={`Page title`}
	    />
    	  <Subheader title={`Page title`} subtitle={`Something else`} />
	    <div>
		<p>I'll send out a newsletter containing interesting updates every couple of months. Let me know if you would like a copy.</p> 
      		<form accept-charset="UTF-8" action="https://www.formbackend.com/f/1423c13e3fbcba3b" method="POST">
  			<label for="name">Name</label>
  			<input type="text" id="name" name="name" required>

  			<label for="email">Email</label>
  			<input type="email" id="email" name="email" required>

  			<button type="submit">Submit</button>
		</form>
    
	    </div>
	</Layout>
);

export default CustomPage;
