import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Container from "@nehalist/gatsby-theme-nehalem/src/components/common";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
	  <Layout bigHeader={false}>
	    <SEO
	      location={location}
	      title={`Page title`}
	    />
	    <Container>
	      Your content    
	    </Container>
	</Layout>
);

export default CustomPage;
